import { Avatar, Box, Button, HStack, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';
import squares from '../assets/squares.png';
import sphere from '../assets/sphere.png';

function Home() {
    const [winheight, setwinheight] = useState(window.innerHeight);
    const [winwidth, setwinwidth] = useState(window.innerWidth);
    const [isfetchingdata, setisfetchingdata] = useState(false);
    const [fetcherror, setfetcherror] = useState(false);
    const [info, setinfo] = useState(null);
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const icons = [squares, sphere];

    // Get responsive values
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
    const requestItemWidth = useBreakpointValue({ 
        base: "100%", 
        md: "48%", 
        lg: "48%",
        xl: "48%"
    });
    const requestImageWidth = useBreakpointValue({ 
        base: "100%", 
        md: "100%"
    });

    useEffect(function(){
        setisfetchingdata(true);
        const fetchdata = (async function(){
            try{
                const data = await fetch(`${BASE_URL}/fetch_homedata/${user._id}`);
                if(data.ok){
                    console.log('user info fetched')
                    setisfetchingdata(false);
                    setfetcherror(false);
                    const receiveddata = await data.json();
                    console.log(receiveddata);
                    setinfo(receiveddata.data);
                    console.log('info', info)
                }
                else{
                    if(String(data.status).startsWith('4')){
                        console.log('error fetching data');
                        setisfetchingdata(false);
                        const receiveddata = await data.json();
                        setfetcherror(receiveddata.message);
                    }
                    else{
                        console.log('user info not fetched')
                        setisfetchingdata(false);
                        const receiveddata = await data.json();
                        console.log(receiveddata);
                        setfetcherror('server error');
                    }
                }
            }
            catch(err){
                console.log('error occured while fetching data', err);
                setisfetchingdata(false);
                setfetcherror('error fetching data, refresh page to try again')
            }
        })();
    },[])

    useEffect(function(){
        console.log('info set', info)
    }, [info])
            
    useEffect(() => {
        const handleResize = function(){
            setwinwidth(window.innerWidth);
            setwinheight(window.innerHeight)
        };
        
        // Attach event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box width="100%" minHeight="100vh" bg="black" p={{ base: 2, md: 4 }} display="flex" flexDirection="column" alignItems="center" overflow="hidden">
            {/* Welcome Section */}
            <Box width="100%" maxW="1200px" p={4} borderRadius="15px" bg="black" mt={4} mb={4}>
                <HStack width="100%" justifyContent="flex-end" p={2}>
                    <Avatar size={{ base: "xs", md: "sm" }} />
                </HStack>
                <Text fontSize={{ base: "xl", md: "2xl" }} color="white" fontWeight="bold">
                    WELCOME TO HUMVERSE
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="white" fontWeight="bold">
                    USERNAME
                </Text>
            </Box>

            {/* Requests Title */}
            <Text width="100%" maxW="1200px" mt={4} mb={4} fontSize={{ base: "lg", md: "xl" }} color="white" fontWeight="bold">
                YOUR REQUESTS
            </Text>
            
            {/* Requests Container */}
            <Box 
                width="100%"
                maxW="1200px"
                p={4}
                minH="400px"
                bg="white"
                borderRadius="10px"
                overflow="auto"
            >
                <Box 
                    display="flex"
                    flexWrap="wrap"
                    gap={{ base: 4, md: 6 }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    alignItems="center"
                >
                    {info?.requests?.length > 0 ?  
                        info.requests.map(function(val, index){
                            return (
                                <Box
                                    key={index}
                                    onClick={() => {navigate('view_product', {state:{request:val}})}}
                                    width={{ base: "100%", md: "48%", lg: "48%" }}
                                    _hover={{ bg: "gray.100" }}
                                    p={3}
                                    borderRadius="md"
                                    cursor="pointer"
                                    borderWidth="1px"
                                >
                                    <VStack width="100%" spacing={3}>
                                        <Box width="100%" height={{ base: "200px", md: "250px" }} bg="black" borderRadius="md" overflow="hidden">
                                            <Image width="100%" height="100%" objectFit="contain" src={icons[Math.round(Math.random())]} />
                                        </Box>
                                        <HStack width="100%">
                                            <Button 
                                                size="sm"
                                                colorScheme={
                                                    !val.accepted&&!val.rejected&&!val.cancelled&&!val.initiated?'orange':
                                                    val.accepted&&!val.initiated&&!val.rejected&&!val.cancelled?'green':
                                                    val.accepted&&val.initiated&&!val.rejected&&!val.cancelled?'purple':
                                                    val.rejected?'red':
                                                    val.cancelled?'orange':
                                                    val.completed?'green':'blue'
                                                } 
                                                borderRadius="10px"
                                                width="100%"
                                            >
                                                {
                                                    !val.accepted&&!val.rejected&&!val.cancelled&&!val.initiated?'not yet received':
                                                    val.accepted&&!val.initiated&&!val.rejected&&!val.cancelled?'ACCEPTED':
                                                    val.accepted&&val.initiated&&!val.rejected&&!val.cancelled?'INITIATED':
                                                    val.rejected?'REJECTED':
                                                    val.cancelled?'CANCELLED':
                                                    val.completed?'COMPLETED':''
                                                }
                                            </Button>
                                        </HStack>
                                        <VStack width="100%" alignItems="flex-start" spacing={1}>
                                            <Text fontWeight="bold">REQUEST INFO</Text>
                                            <Text fontSize="sm">
                                                DATE OF REQUEST: {val.date}
                                            </Text>
                                            <Text fontSize="sm">
                                                DURATION: {`${val.timequantity} ${val.timeunit}`}
                                            </Text>
                                            <Text fontSize="sm">
                                                PREVIEWS: {val.previews.length}
                                            </Text>
                                        </VStack>
                                    </VStack>
                                </Box>
                            )
                        }) :
                        <Text fontSize="xl" color="blue.400" fontWeight="bold" width="100%" textAlign="center" py={10}>
                            YOU DO NOT HAVE ANY REQUESTS YET
                        </Text>
                    }
                </Box>
            </Box>

            {/* Request Button */}
            <Box 
                width="100%"
                maxW="1200px"
                display="flex"
                justifyContent={{ base: "center", md: "flex-end" }}
                mt={6}
                mb={4}
            >
                <Button
                    onClick={() => {navigate('make_request')}}
                    minWidth="150px"
                    p={4}
                    borderRadius="10px"
                    borderColor="white"
                    borderWidth="1px"
                    color="white"
                    bg="black"
                    fontWeight="bold"
                    fontSize={{ base: "xs", md: "sm" }}
                    _hover={{ bg: "gray.800" }}
                >
                    REQUEST FOR A PRODUCT
                </Button>
            </Box>
        </Box>
    )
}

export default Home