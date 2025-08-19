import { Avatar, Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';
import squares from '../assets/squares.png';
import sphere from '../assets/sphere.png';





function Home() {
    const [winheight , setwinheight] = useState(window.innerHeight);
    const [winwidth , setwinwidth] = useState(window.innerWidth);
    const [isfetchingdata , setisfetchingdata] = useState(false);
    const [fetcherror , setfetcherror] = useState(false);
    const [info , setinfo] = useState(null);
    const{user} = useContext(AuthContext)
    const navigate = useNavigate();
    const icons = [squares , sphere];


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
                              console.log('info' , info)
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
                     
                              console.log('error occured while  fetching data' , err);
                              setisfetchingdata(false);
                              setfetcherror('error fetching data , refresh page to try again')
                           
                          
                        }
                     })();
               },[])

               useEffect(function(){
                      console.log('info set' , info)
               } , [info])
            
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


  return (
   <Box width={winwidth} bg={'black'} height={winheight} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'}  overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  gap={'20px'}   >
     <Box width={'98%'} padding={'4px'} borderRadius={'15px'} bg={'black'} minH={'200px'} mt={'10px'} mb={'10px'} display={'flex'} flexDirection={'column'}  >
        <HStack position={'relative'} width={'95%'} padding={'4px'} minH={'35px'}  borderRadius={'10px'} alignSelf={'center'}   >
           <Avatar position={'absolute'} size={'xs'}  right={'2px'}  />
        </HStack>
        <Text fontSize={'x-large'} color={'white'} fontWeight={'bold'}  >WELCOME TO HUMVERSE</Text>
        <Text  fontSize={'medium'} color={'white'} fontWeight={'bold'} >USERNAME</Text>
     </Box>

     <Text   mt={'10px'} mb={'15px'}  alignSelf={'flex-start'} textAlign={'left'}  fontSize={'large'} color={'white'} fontWeight={'bold'}  >YOUR REQUESTS</Text>
     <HStack width={'95%'} padding={'4px'} minH={'550px'} maxH={'850px'} bg={'white'} borderRadius={'10px'} alignSelf={'center'} flexWrap={'wrap'}  overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  gap={'20px'}  >
          {/* a list of products user has acquired , and for each , it shows wheather it's active (paid for) or inactive (not yet paid for) , and also , a button for pay/renew if not paid for , and also a cancel subscription button if paid for and less than 2 days have passed since subscription */}

        {
         info?.requests?.length > 0 ?  
           info.requests.map(function(val , index){
            return (
              <HStack onClick={()=>{navigate('view_product' , {state:{request:val}})}}  width={'40%'}  gap={'20px'}  _hover={{bg:'gray.400'}} p={'4px'} >
           <VStack  width={'45%'}  height={'250px'} bg={'black'} key={index} p={'4px'}  >
                   <Image  mt={'2px'} mb={'2px'}  width={'95%'} height={'200px'} objectFit={'cover'}  src={icons[Math.round(Math.random())]}  />
                   <HStack width={'100%'}  padding={'2px'} >
                      <Button size={'medium'}  colorScheme={!val.accepted&&!val.rejected&&!val.cancelled&&!val.initiated?'orange':val.accepted&&!val.initiated&&!val.rejected&&!val.cancelled?'green':val.accepted&&val.initiated&&!val.rejected&&!val.cancelled?'purple':val.rejected?'red':val.cancelled?'orange':val.completed?'green':'blue'}  _hover={{bg:'none'}} borderRadius={'10px'} borderWidth={'1px'} borderColor={'white'} p={'4px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        {!val.accepted&&!val.rejected&&!val.cancelled&&!val.initiated?'not yet received':val.accepted&&!val.initiated&&!val.rejected&&!val.cancelled?'ACCEPTED':val.accepted&&val.initiated&&!val.rejected&&!val.cancelled?'INITIATED':val.rejected?'REJECTED':val.cancelled?'CANCELLED':val.completed?'COMPLETED':''}
                      </Button>
                   </HStack>
               </VStack>

               <VStack>
                    <Text>REQUEST INFO</Text>
                    <Text fontSize={'medium'} fontWeight={'bold'} >
                     DATE OF REQUEST : <Text as={'span'} fontSize={'small'}  fontWeight={'bold'} >{val.date}</Text>
                    </Text>


                    <Text fontSize={'medium'} fontWeight={'bold'} >
                     DURATION : <Text as={'span'} fontSize={'small'}  fontWeight={'bold'} >{`${val.timequantity} ${val.timeunit}`}</Text>
                    </Text>


                    <Text fontSize={'medium'} fontWeight={'bold'} >
                     previews : <Text as={'span'} fontSize={'small'}  fontWeight={'bold'} >{val.previews.length}</Text>
                    </Text>

{/* 
                    <Text fontSize={'medium'} fontWeight={'bold'} >
                     DATE OF REQUEST : <Text fontSize={'small'}  fontWeight={'bold'} >{val.date}</Text>
                    </Text>


                    <Text fontSize={'medium'} fontWeight={'bold'} >
                     DATE OF REQUEST : <Text fontSize={'small'}  fontWeight={'bold'} >{val.date}</Text>
                    </Text>
                    <Text>{}</Text> */}
                    {/* <Text>description</Text>
                    <Text>period given</Text>
                    <Text>name(s)</Text>
                    <Text>emain and number</Text> */}


                    {/* <HStack>
               <Button size={'medium'} width={'40%'} color={'white'} bg={'none'}  _hover={{bg:'none'}} borderRadius={'10px'} borderWidth={'1px'} borderColor={'white'} >
                        edit request
                      </Button>

                      
               <Button size={'medium'} width={'40%'} color={'white'} bg={'none'}  _hover={{bg:'none'}} borderRadius={'10px'} borderWidth={'1px'} borderColor={'white'} >
                        initiate
                      </Button>
               
              </HStack> */}
               </VStack>
               </HStack>

              
            )
           
           }) :
           <Text fontSize={'x-large'} color={'blue.400'} fontWeight={'bold'}  >YOU DO NOT HAVE ANY REQUESTS YET</Text>


        }

       

     </HStack>

     <HStack>
        {/* button for request new product which leads to the requesting page */}

        <Box onClick={()=>{navigate('make_request')}}  mt={'15px'} mb={'10px'} ml={winwidth/2} as={'button'} minWidth={'100px'} p={'10px'} borderRadius={'10px'} borderColor={'white'} borderWidth={'1px'} color={'white'} fontWeight={'bold'} fontSize={'xx-small'} >REQUEST FOR A PRODUCT</Box>
     </HStack>


   </Box>
  )
}

export default Home