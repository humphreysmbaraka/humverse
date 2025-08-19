import { Box, HStack, Spinner, Text, Textarea, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { GoSidebarExpand } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { GoSidebarCollapse } from "react-icons/go";
import BASE_URL from '../constants/urls';
import { AuthContext } from '../appcontexts/auth';

function Assistant() {
    const [query, setquery] = useState(null);
    const [sending, setsending] = useState(false);
    const [senderror, setsenderror] = useState(null);
    const {loggedin, user, admin} = useContext(AuthContext); 
    const [response, setresponse] = useState('');
    const [streaming, setstreaming] = useState(false);
    const [messages, setmessages] = useState(new Map());
    const [currenttimestamp, setcurrenttimestamp] = useState(null);
    const [showsidebar, setshowsidebar] = useState(false);
    const [showhistory, setshowhistory] = useState(false);

    // Responsive values
    const isMobile = useBreakpointValue({ base: true, md: false });
    const sidebarWidth = useBreakpointValue({ 
        base: showsidebar ? "100%" : "0%", 
        md: showsidebar ? "20%" : "5%" 
    });
    const contentWidth = useBreakpointValue({ 
        base: "100%", 
        md: showsidebar ? "75%" : "95%" 
    });
    const messageWidth = useBreakpointValue({ 
        base: "90%", 
        md: "55%" 
    });
    const inputWidth = useBreakpointValue({ 
        base: "90%", 
        md: "85%" 
    });

    useEffect(function(){
        if(!currenttimestamp || messages.size == 0){
            return;
        }
        
        const newmessages = new Map(messages);
        const messagebody = newmessages.get(currenttimestamp);
        newmessages.set(currenttimestamp, {...messagebody, response:response});
        setmessages(newmessages);
    }, [response])
         
    const sendquery = async function(){
        try{
            if(!query || query.trim()=='' || sending){
                return;
            }
            else{
                const timestamp =  Date.now();
                setcurrenttimestamp(timestamp);
                setsending(true);
                setsenderror(null);
                
                const newmessages = new Map(messages);
                newmessages.set(timestamp, {message:query, response:''});
                setmessages(newmessages);
                setquery('');
                
                const ask = await fetch(`${BASE_URL}/ask_assistant`, {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    credentials:'include',
                    body:JSON.stringify({question:query, user:user._id})
                })

                if(ask.ok || !ask.body){
                    setsending(false);
                    setsenderror(null);

                    const reader = ask.body.getReader();
                    const decoder = new TextDecoder();
                    let partial = '';

                    while(true){
                        setstreaming(true);
                        const {value, done} = await reader.read();
                        if(done){
                            break;
                        }
                        else{
                            const chunk = decoder.decode(value, {stream:true});
                            partial += chunk;
                            const lines = partial.split('\n\n');
                            partial = lines.pop();
                        
                            for(let line of lines){
                                if(line.startsWith('data: ')){
                                    const data = line.replace(/^data: /, '');
                                    if(data.trim() === '[DONE]'){
                                        return;
                                    }
                                    setresponse((prev)=>{
                                        const addSpace = prev.length > 0 && !/\s$/.test(prev);
                                        return prev + (addSpace ? ' ' : '') + data;
                                    });
                                }
                            }
                        }
                    }
                    setstreaming(false);
                }
                else{
                    setsending(false);
                    if(String(ask.status).startsWith('4')){
                        const info = await ask.json();
                        setsenderror(ask.message);
                    }
                    else{
                        setsenderror('server error')
                    }
                }
            }
        }
        catch(err){
            setsending(false);
            setsenderror('could not send query')
            console.log('could not send query', err);
        }
    }

    if(loggedin){
        return (
            <Box width="100%" minHeight="100vh" bg="black" display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between" overflow="hidden">
                {/* Sidebar */}
                <VStack 
                    bg="gray.800" 
                    width={sidebarWidth}
                    height={{ base: showsidebar ? "100%" : "auto", md: "100vh" }}
                    borderRightRadius={{ base: "0", md: "15px" }}
                    position={{ base: showsidebar ? "absolute" : "relative", md: "relative" }}
                    zIndex={{ base: 10, md: 1 }}
                    transition="width 0.3s ease"
                    overflow="hidden"
                    display={{ base: showsidebar ? "flex" : "none", md: "flex" }}
                >
                    <Box 
                        as="button" 
                        onClick={() => { setshowsidebar(!showsidebar) }} 
                        position="absolute" 
                        top="10px" 
                        left="10px" 
                        width="30px" 
                        height="30px" 
                        borderRadius="10px" 
                        display="flex" 
                        alignItems="center" 
                        justifyContent="center" 
                        p="2px"
                        zIndex={10}
                    >
                        {showsidebar ? 
                            <GoSidebarExpand color="white" size="20px" /> : 
                            <GoSidebarCollapse color="white" size="20px" />
                        }
                    </Box>

                    {!showsidebar && 
                        <Box 
                            as="button" 
                            mt="30px" 
                            mb="5px" 
                            width="90%" 
                            borderBottomWidth="1px" 
                            borderBottomColor="white" 
                            height="30px" 
                            _hover={{ borderBottomWidth: "2px", borderBottomColor: "blue" }}
                            color="white"
                        >
                            Start New Chat
                        </Box>
                    }

                    {showsidebar && 
                        <>
                            <Text 
                                as="button" 
                                mt="30px" 
                                mb="5px" 
                                width="90%" 
                                borderBottomWidth="1px" 
                                borderBottomColor="white" 
                                height="30px" 
                                fontSize="sm" 
                                color="white" 
                                _hover={{ borderBottomWidth: "2px", borderBottomColor: "blue" }}
                                textAlign="left"
                            >
                                Start New Chat
                            </Text>

                            <Text 
                                as="button" 
                                onClick={() => { setshowhistory(!showhistory) }} 
                                mt="10px" 
                                mb="5px" 
                                width="90%" 
                                borderBottomWidth="1px" 
                                borderBottomColor="white" 
                                height="30px" 
                                fontSize="sm" 
                                color="white" 
                                _hover={{ borderBottomWidth: "2px", borderBottomColor: "blue" }}
                                textAlign="left"
                            >
                                Previous Chats
                            </Text>
                            
                            {showhistory &&  
                                <VStack width="95%" alignSelf="center" minH="250px" maxH="550px" bg="white" borderRadius="10px" overflow="auto">
                                    {/* History items would go here */}
                                </VStack>
                            }
                            
                            {/* Additional menu items */}
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Text 
                                    key={item}
                                    as="button" 
                                    mt="10px" 
                                    mb="5px" 
                                    width="90%" 
                                    borderBottomWidth="1px" 
                                    borderBottomColor="white" 
                                    height="30px" 
                                    fontSize="sm" 
                                    color="white" 
                                    _hover={{ borderBottomWidth: "2px", borderBottomColor: "blue" }}
                                    textAlign="left"
                                >
                                    Menu Item {item}
                                </Text>
                            ))}
                        </>
                    }
                </VStack>

                {/* Main Content */}
                <Box 
                    width={contentWidth}
                    height="100vh"
                    bg="black" 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    overflow="hidden"
                    position="relative"
                >
                    {/* Messages Area */}
                    <VStack 
                        width="100%"
                        height="calc(100vh - 100px)"
                        mt="10px"
                        mb="10px"
                        bg="gray.900" 
                        borderRadius="15px"
                        p="4px"
                        overflow="auto"
                        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
                        spacing={4}
                    >
                        {messages.size > 0 &&  
                            [...messages].map(function([key, val], index){
                                return (
                                    <VStack key={key} width="100%" p="5px" alignItems="flex-end">
                                        <Textarea 
                                            color="white" 
                                            value={val.message} 
                                            width={messageWidth}
                                            minHeight="45px" 
                                            maxHeight="1500px" 
                                            readOnly={true} 
                                            resize="none"  
                                            p="4px" 
                                            borderRadius="10px" 
                                            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
                                            bg="blue.700"
                                        />
                                        <Box 
                                            color="white" 
                                            bg="gray.800" 
                                            width={messageWidth}
                                            minHeight="45px" 
                                            maxHeight="1500px" 
                                            p="4px" 
                                            borderRadius="10px" 
                                            whiteSpace="pre-wrap" 
                                            wordBreak="break-word" 
                                            overflowY="auto" 
                                            fontSize="sm"
                                        >
                                            {val.response}
                                        </Box>
                                    </VStack>
                                )
                            })
                        }
                    </VStack>

                    {/* Input Area */}
                    <HStack   
                        position="absolute"
                        bottom="20px"
                        width={inputWidth}
                        minHeight="40px"
                        p="10px"
                        borderRadius="15px"
                        bg="gray.700"
                        justifyContent="space-between"
                        zIndex={100}
                    >
                        {senderror && 
                            <Text color="red.500" fontSize="sm" position="absolute" top="-25px" left="0">
                                {senderror}
                            </Text>
                        }
                        
                        <Textarea 
                            placeholder="Ask anything about the Humverse platform, what services we offer and other related things"  
                            width="85%"
                            minH="30px"  
                            maxH="120px" 
                            bg="white"    
                            resize="none"  
                            value={query} 
                            onChange={(e) => { setquery(e.target.value) }}
                            size="sm"
                        />
                        
                        <Box 
                            as="button"  
                            _hover={{ bg: "gray" }} 
                            _active={{ bg: "black" }}  
                            onClick={sendquery} 
                            width="30px" 
                            height="30px" 
                            borderRadius="50%" 
                            display="flex" 
                            alignItems="center" 
                            justifyContent="center" 
                            p="2px"
                            bg="white"
                        >
                            {sending ?
                                <Spinner color="blue.500" size="sm" /> :
                                <IoMdSend size="20px" color="black" />
                            }
                        </Box>
                    </HStack>
                </Box>
            </Box>
        )
    }
    else {
        return (
            <Box width="100%" height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="gray.800">
                <Text color="white" fontSize={{ base: "xl", md: "xxx-large" }} fontWeight="bold" mb={4}>
                    OOPS!
                </Text>
                <Text color="white" fontSize={{ base: "sm", md: "md" }} fontWeight="bold" textAlign="center" px={4}>
                    YOU NEED TO BE LOGGED IN OR HAVE AN ACCOUNT TO BE ABLE TO USE THE ASSISTANT
                </Text>
            </Box>
        )
    }
}

export default Assistant