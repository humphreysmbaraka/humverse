import { Avatar, Box, Button, HStack, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';
import squares from '../assets/squares.png';
import sphere from '../assets/sphere.png';
import { socketcontext } from '../appcontexts/socket';


function Home() {
    const [winheight, setwinheight] = useState(window.innerHeight);
    const [winwidth, setwinwidth] = useState(window.innerWidth);
    const [isfetchingdata, setisfetchingdata] = useState(false);
    const [fetcherror, setfetcherror] = useState(false);
    const [info, setinfo] = useState(null);
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const icons = [squares, sphere];
    const {socket} = useContext(socketcontext)


    // Get responsive values
    const isMobile = useBreakpointValue({ base: true, md: false });
    const requestItemWidth = useBreakpointValue({ 
        base: "100%", 
        md: "40%" 
    });
    const requestImageWidth = useBreakpointValue({ 
        base: "100%", 
        md: "45%" 
    });

   

    const fetchdata = async function(){
        try{
            const data = await fetch(`${BASE_URL}/fetch_homedata/${user._id}`);
            if(data.ok){
                console.log('user info fetched')
                setisfetchingdata(false);
                setfetcherror(false);
                const receiveddata = await data.json();
                // console.log(receiveddata);
                setinfo(receiveddata.data);
                // console.log('info', info)
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
                    // console.log(receiveddata);
                    setfetcherror('server error');
                }
            }
        }
        catch(err){
            console.log('error occured while fetching data', err);
            setisfetchingdata(false);
            setfetcherror('error fetching data, refresh page to try again')
        }
    }




    // socket events
useEffect(function(){
    

    socket.current.on('request_received' , async function(){
        try{
       
        await fetchdata();
        }
        catch(err){
          console.log('error handling request received event' ,err)
        }
      })


      socket.current.on('request_editted' , async function(){
        try{
         
        await fetchdata();
        }
        catch(err){
          console.log('error handling request editted event' ,err)
        }
      })


      socket.current.on('request_cancelled' , async function(){
        try{
        
        await fetchdata();
        }
        catch(err){
          console.log('error handling request cancelled event' ,err)
        }
      })


      socket.current.on('request_rejected' , async function(){
        try{
        
        await fetchdata();
        }
        catch(err){
          console.log('error handling request rejected event' ,err)
        }
      })


      socket.current.on('request_redeemed' , async function(){
        try{
        
        await fetchdata();
        }
        catch(err){
          console.log('error handling request redeemed event' ,err)
        }
      })


      socket.current.on('request_uncancelled' , async function(){
        try{
       
        await fetchdata();
        }
        catch(err){
          console.log('error handling request uncancelled event' ,err)
        }
      })


      socket.current.on('acceptance' , async function(){
        try{
       
        await fetchdata();
        }
        catch(err){
          console.log('error handling request accepted event' ,err)
        }
      })



      socket.current.on('previews' , async function(){
        try{
       
        await fetchdata();
        }
        catch(err){
          console.log('error handling request previews event' ,err)
        }
      })


      socket.current.on('cancel_accepted' , async function(){
        try{
       
        await fetchdata();
        }
        catch(err){
          console.log('error handling cancel accepted event' ,err)
        }
      })



      socket.current.on('compensation' , async function(){
        try{
       
        await fetchdata();
        }
        catch(err){
          console.log('error handling  compensation event' ,err);
        }
      })

 } , [])


      




    

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
                    // console.log(receiveddata);
                    setinfo(receiveddata.data);
                    // console.log('info', info)
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
                        // console.log(receiveddata);
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
        <Box width={winwidth} bg={'black'} height={winheight} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none', scrollbarWidth: '1px' }}} gap={'20px'}>
            {/* Welcome Section */}
            <Box width={'98%'} padding={'4px'} borderRadius={'15px'} bg={'black'} minH={'200px'} mt={'10px'} mb={'10px'} display={'flex'} flexDirection={'column'}>
                <HStack position={'relative'} width={'95%'} padding={'4px'} minH={'35px'} borderRadius={'10px'} alignSelf={'center'}>
                    <Avatar position={'absolute'} size={'xs'} right={'2px'} />
                </HStack>
                <Text fontSize={'x-large'} color={'white'} fontWeight={'bold'}>WELCOME TO HUMVERSE</Text>
                <Text fontSize={'medium'} color={'white'} fontWeight={'bold'}>USERNAME</Text>
            </Box>

            {/* Requests Title */}
            <Text mt={'10px'} mb={'15px'} alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'} color={'white'} fontWeight={'bold'}>YOUR REQUESTS</Text>
            
            {/* Requests Container */}
            <Box 
                width={'95%'} 
                padding={'4px'} 
                minH={'550px'} 
                maxH={'850px'} 
                bg={'white'} 
                borderRadius={'10px'} 
                alignSelf={'center'} 
                overflow={'auto'} 
                css={{ '&::-webkit-scrollbar': { display:'none', scrollbarWidth: '1px' }}}
            >
                <Box 
                    display={'flex'} 
                    flexWrap={'wrap'} 
                    gap={'20px'} 
                    justifyContent={isMobile ? 'center' : 'flex-start'}
                    alignItems={isMobile ? 'center' : 'flex-start'}
                    flexDirection={isMobile ? 'column' : 'row'}
                    p={isMobile ? '10px' : '4px'}
                >
                    {info?.requests?.length > 0 ?  
                        info.requests.map(function(val, index){
                            return (
                                <HStack 
                                    key={index}
                                    onClick={() => {navigate('view_product', {state:{request:val}})}}
                                    width={requestItemWidth}
                                    gap={'20px'}
                                    _hover={{bg:'gray.400'}}
                                    p={'4px'}
                                    flexDirection={isMobile ? 'column' : 'row'}
                                    alignItems={isMobile ? 'center' : 'flex-start'}
                                >
                                    <VStack width={requestImageWidth} height={'250px'} bg={'black'} p={'4px'}>
                                        <Image mt={'2px'} mb={'2px'} width={'95%'} height={'200px'} objectFit={'cover'} src={icons[Math.round(Math.random())]} />
                                        <HStack width={'100%'} padding={'2px'}>
                                            <Button 
                                                size={'medium'} 
                                                colorScheme={
                                                    !val.accepted&&!val.rejected&&!val.cancelled&&!val.initiated?'orange':
                                                    val.accepted&&!val.initiated&&!val.rejected&&!val.cancelled?'green':
                                                    val.accepted&&val.initiated&&!val.rejected&&!val.cancelled?'purple':
                                                    val.rejected?'red':
                                                    val.cancelled?'orange':
                                                    val.completed?'green':
                                                    (val.cancelled&&val.cancel_accepted&&val.cancelinfo.compensated  || val.cancelled&&val.cancel_accepted&&!val.cancelinfo.compensated)?'orange':
                                                    'blue'
                                                } 
                                                _hover={{bg:'none'}} 
                                                borderRadius={'10px'} 
                                                borderWidth={'1px'} 
                                                borderColor={'white'} 
                                                p={'4px'} 
                                                display={'flex'} 
                                                alignItems={'center'} 
                                                justifyContent={'center'}
                                            >
                                                {
                                                    !val.accepted&&!val.rejected&&!val.cancelled&&!val.initiated?'not yet received':
                                                    val.accepted&&!val.initiated&&!val.rejected&&!val.cancelled?'ACCEPTED':
                                                    val.accepted&&val.initiated&&!val.rejected&&!val.cancelled?'INITIATED':
                                                    val.rejected?'REJECTED':
                                                    (val.cancelled && !val.cancel_accepted)?'CANCELLED':
                                                    val.completed?'COMPLETED':
                                                    val.cancelled&&val.cancel_accepted&&val.cancelinfo.compensated?'COMPENSATED':
                                                    val.cancelled&&val.cancel_accepted&&!val.cancelinfo.compensated?'AWAITING COMPENSATION':
                                                    ''
                                                }
                                            </Button>
                                            {val.rejected && 
                                             <Text  fontWeight={'light'}  color={'red'} fontSize={'xx-small'} >{`reason for rejection : ${val.rejection_reason}`}</Text>
                                            }
                                        </HStack>
                                    </VStack>

                                    <VStack alignItems={isMobile ? 'center' : 'flex-start'} textAlign={isMobile ? 'center' : 'left'}>
                                        <Text>REQUEST INFO</Text>
                                        <Text fontSize={'medium'} fontWeight={'bold'}>
                                            DATE OF REQUEST : <Text as={'span'} fontSize={'small'} fontWeight={'bold'}>{val.date}</Text>
                                        </Text>
                                        <Text fontSize={'medium'} fontWeight={'bold'}>
                                            DURATION : <Text as={'span'} fontSize={'small'} fontWeight={'bold'}>{`${val.timequantity} ${val.timeunit}`}</Text>
                                        </Text>
                                        <Text fontSize={'medium'} fontWeight={'bold'}>
                                            previews : <Text as={'span'} fontSize={'small'} fontWeight={'bold'}>{val.previews.length}</Text>
                                        </Text>
                                    </VStack>
                                </HStack>
                            )
                        }) :
                        <Text fontSize={'x-large'} color={'blue.400'} fontWeight={'bold'} width="100%" textAlign="center" py={10}>YOU DO NOT HAVE ANY REQUESTS YET</Text>
                    }
                </Box>
            </Box>

            {/* Request Button */}
            <Box 
                width="100%" 
                display="flex" 
                justifyContent={isMobile ? "center" : "flex-end"}
                pr={isMobile ? "0" : "2.5%"}
            >
                <Box 
                    onClick={() => {navigate('make_request')}} 
                    mt={'15px'} 
                    mb={'10px'} 
                    as={'button'} 
                    minWidth={'100px'} 
                    p={'10px'} 
                    borderRadius={'10px'} 
                    borderColor={'white'} 
                    borderWidth={'1px'} 
                    color={'white'} 
                    fontWeight={'bold'} 
                    fontSize={'xx-small'}
                    ml={isMobile ? "0" : winwidth/2}
                >
                    REQUEST FOR A PRODUCT
                </Box>
            </Box>
        </Box>
    )
}

export default Home