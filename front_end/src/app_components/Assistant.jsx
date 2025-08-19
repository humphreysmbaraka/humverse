import { Box, HStack, Spinner, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { GoSidebarExpand } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { GoSidebarCollapse } from "react-icons/go";
import BASE_URL from '../constants/urls';
import { AuthContext } from '../appcontexts/auth';

function Assistant() {

    const [winheight , setwinheight] = useState(window.innerHeight);
    const [winwidth , setwinwidth] = useState(window.innerWidth);
    const [showsidebar , setshowsidebar] = useState(false);
    const [showhistory , setshowhistory] = useState(false);
    const [query , setquery] = useState(null);
    const [sending , setsending] = useState(false);
    const [senderror , setsenderror] = useState(null);
    const {loggedin , user , admin} = useContext(AuthContext); 
    const [questions , setquestions] = useState([]);
    const [response , setresponse] = useState('');
    const [streaming , setstreaming] = useState(false);
    const [messages , setmessages] = useState(new Map());
    const [currenttimestamp , setcurrenttimestamp] =   useState(null);
   


    useEffect(function(){

      if(!currenttimestamp || messages.size == 0){
        return;
      }
     
        const newmessages = new Map(messages);
        const messagebody = newmessages.get(currenttimestamp);
        newmessages.set(currenttimestamp , {...messagebody, response:response});
        setmessages(newmessages);
       
      
    

    } , [response])
         
    const sendquery = async function(){
      try{
        if(!query || query.trim()=='' || sending){

        }
        else{
          const timestamp =  Date.now();
          setcurrenttimestamp(timestamp);
          // messages.set(timestamp , {message:query , response:''})
          setsending(true);
          setsenderror(null);
          // setmessages((prev)=>{
            const newmessages = new Map(messages);
            newmessages.set(timestamp , {message:query , response:''});
            setmessages(newmessages)
          // });
          setquery('');
          const ask = await fetch(`${BASE_URL}/ask_assistant` , {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify({question:query , user:user._id})
          })

          if(ask.ok  || !ask.body){
            setsending(false);
            setsenderror(null);

            const reader = ask.body.getReader();
            const decoder = new TextDecoder();
            let partial = '';

            while(true){
              setstreaming(true);
              const {value , done} = await reader.read();
              if(done){
                break;
              }
              else{
                const chunk = decoder.decode(value , {stream:true});
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
        console.log('could not send query' ,err);
      }
    }

    useEffect(() => {
        const handleResize =  function(){
            setwinwidth(window.innerWidth);
            setwinheight(window.innerHeight)
        };
        
    
        // Attach event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    if(loggedin){
      return (
   <Box  width={winwidth}  height={winheight} overflow={'auto'} bg={'black'}  p={'3px'} display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}  >
      <VStack position={'relative'} bg={'gray.800'} width={showsidebar?'20%':'5%'} height={'95%'} borderRightRadius={'15px'}  >

     {showsidebar ?
       <Box as='button'  onClick={()=>{setshowsidebar(!showsidebar)}} position={showsidebar?'absolute':'static'} left={showsidebar?'1px':'auto'} mt={'3px'}   width={'30px'} height={'3opx'}  borderRadius={'10px'} display={'flex'} alignContent={'center'} alignItems={'center'} p={'2px'}   >
       <GoSidebarExpand color='white' size={'xs'}  />
       </Box> 
       : 
       <Box as='button'  onClick={()=>{setshowsidebar(!showsidebar)}} position={'absolute'} left={'1px'} mt={'3px'}   width={'30px'} height={'3opx'}  borderRadius={'10px'} display={'flex'} alignContent={'center'} alignItems={'center'} p={'2px'}   >
       <GoSidebarCollapse color='white' size={'20px'}  />
       </Box>
    }


      
    


      {!showsidebar && 
         
         <Box as={'button'} mt={'30px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} >start new chat</Box>


        }

      {showsidebar && 
      <>
    
       <Text as={'button'} mt={'30px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'} fontSize={'sm'} color={'white'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} textAlign={'left'} >start new chat</Text>

       <Text as={'button'} onClick={()=>{setshowhistory(!showhistory)}} mt={'10px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'} fontSize={'sm'} color={'white'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} textAlign={'left'} >Previous Chats</Text>
     {showhistory &&  
      <VStack width={'95%'} alignSelf={'center'} minH={'250px'}  maxH={'550px'} bg={'white'} borderRadius={'10px'} overflow={'auto'}  >

      </VStack>
     }
      

       <Text as={'button'} mt={'10px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'} fontSize={'sm'} color={'white'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} textAlign={'left'} >start new chat</Text>

       <Text as={'button'} mt={'10px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'} fontSize={'sm'} color={'white'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} textAlign={'left'} >start new chat</Text>

       <Text as={'button'} mt={'10px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'} fontSize={'sm'} color={'white'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} textAlign={'left'} >start new chat</Text>

       <Text as={'button'} mt={'10px'} mb={'5px'} width={'90%'}  borderBottomWidth={'1px'} borderBottomColor={'white'} height={'30px'} fontSize={'sm'} color={'white'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}} textAlign={'left'} >start new chat</Text>
       </>
      }

        

      </VStack>


      <Box position={'relative'} width={showsidebar?'75%':'95%'} h={'100%'} bg={'black'}  display={'flex'} flexDirection={'column'} alignItems={'center'} overflow={'auto'} >

       <VStack position={'absolute'} left={'10px'}    width={'95%'} mt={'10px'} mb={'10px'} h={'100%'} bg={'gray.900'} borderRadius={'15px'} p={'4px'}  overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} alignItems={'end'}  >
               {messages.size > 0 &&  
                [...messages].map(function([key , val] , index){
                    return (
                      <>
                     <VStack  key={key}  width={'95%'}  p={'5px'}     >
                     <Textarea  alignSelf={'end'} color={'white'} value={val.message} width={'55%'} minHeight={'45px'} maxHeight={'1500px'} readOnly={true} resize={false}  p={'4px'} borderRadius={'10px'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   />
                  {/* <Textarea   color={'white'} value={val.response} width={'98%'} minHeight={'45px'} maxHeight={'1500px'} readOnly={true} resize={false}  p={'4px'} borderRadius={'10px'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   /> */}
                  <Box color="white"  alignSelf={'end'} bg="gray.800" width="98%" minHeight="45px" maxHeight="1500px" p="4px" borderRadius="10px" whiteSpace="pre-wrap" wordBreak={'break-word'} overflowY="auto" fontSize="sm">{val.response}</Box>


                     </VStack>
                      </>
                    )
                 })
               
               }
       </VStack>

       
       <HStack   position={'absolute'} bottom={'5%'} zIndex={100} borderRadius={'15px'} width={'85%'} minHeight={'40px'} padding={'5px'} justifyContent={'space-between'}  >
       {senderror && 
        <Text color={'red.500'} fontSize={'smaller'}   >{senderror}</Text>
        }
         <Textarea  placeholder='ask anything about the humverse platform ,  what services we offer and other related things'  width={'95%'} minH={'30px'}  maxH={'120px'} bg={'white'}    resize={'none'}  value={query} onChange={(e)=>{setquery(e.target.value)}}  />
         <Box as='button'  _hover={{bg:'gray'}} _active={{bg:'black'}}  onClick={sendquery} width={'30px'} height={'30px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} >
          {
            sending?
            <Spinner  color='white'  size={'25px'}    />
            :
            <IoMdSend  size={'20px'} color='black'  />
          }

         </Box>
       </HStack>
      </Box>
   </Box>
  )
        }
        else{
          return(
            <Box width={'100%'} height={'100vh'}  display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'gray.800'} borderRadius={'10px'} >
             <Text mb={'100px'} color={'white'} fontSize={'xxx-large'} fontWeight={'bold'} >OOPS!</Text>
              <Text color={'white'} fontSize={'small'} fontWeight={'bold'} >YOU NEED TO BE LOGGED IN OR HAVE AN ACCOUNT TO BE ABLE TO USE THE ASSISTANT</Text>
            </Box>
        )
        }

        
}

export default Assistant