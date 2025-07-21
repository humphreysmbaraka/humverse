import React, { useContext, useEffect, useRef, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, HStack, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import BASE_URL from '../constants/urls';

function Clients() {
    const location = useLocation();
    const users = location.state.clients;
    const requests = location.state.requests;
    const {winwidth , winheight} = useContext(dimensions);
    const [clients , setclients] = useState(users);
    const [selectedclient , setselectedclient]  = useState(null);
    const [activeclients , setactiveclients] = useState([]);
    const [clientrequests , setclientrequests] = useState(null);
    // const tabsref = useRef(null);
    const [tabindex , settabindex] = useState(0);

    useEffect(function(){
        console.log('users' , users)

      const active = clients.filter(function(val , index){
       return  val.requests > 0
      });

      setactiveclients(active);
    } , []);
    

 useEffect(function(){

    console.log('selected client changed' , selectedclient)
   
    if(selectedclient?.requests.length > 0){
       const reqs = requests.filter(function(val , index){
        return selectedclient.requests.includes(val._id);
       })

       setclientrequests(reqs);
       console.log('requests' , reqs);
    }
    else{

    }
 } , [selectedclient])

  return (
   <Box width={winwidth} height={winheight}  bg={'gray.800'} padding={'4px'}   >
    <HStack  width={'90%'} height={'100%'} gap={'40px'} alignItems={'center'}  justifyContent={'space-between'} >
        <VStack width={'30%'} height={'100%'} borderRightWidth={'1px'} borderRightColor={'white'}  gap={'20px'} alignItems={'center'} position={'relative'}   >
            <HStack  mt={'20px'} mb={'5px'} width={'60%'} padding={'2px'}  justifyContent={'space-between'} >
                <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <IoChevronBackOutline  size={'25px'} color='gray'/>
                 </Box>

                 <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <GrNext  size={'25px'} color='gray' />
                 </Box>
            </HStack>


            <VStack bg={'black'}  width={'98%'} height={'90%'}   gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                   {clients.length > 0  &&  
                   
                   clients.map(function(val , index){
                    
                     return (
                        <HStack  key={index} width={'95%'} onClick={()=>{setselectedclient(val)}} height={'45px'} p={'2px'} borderBottomColor={'white'} borderBottomWidth={'1px'}  mt={'10px'}  mb={'10px'} >
                            {val.picture?<Image  display={'flex'} alignItems={'center'} justifyContent={'center'} width={'25px'} height={'25px'} borderRadius={'50%'} src={`${BASE_URL}/profile_pic/${val.picture}`}  />
                            :<Avatar display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} width={'25px'} height={'25px'} borderRadius={'50%'} name={val.username} />

                        }
                            <Text width={'70%'}  fontSize={'medium'} color={'white'} fontWeight={'bold'} letterSpacing={'2px'}    >{val.username}</Text>
                        </HStack>
                     )
                   })
                   
                   }
            </VStack>



            {/* <HStack  mt={'5px'} mb={'20px'} width={'60%'} padding={'2px'}  justifyContent={'space-between'}  position={'absolute'} bottom={'10px'} >
                <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <IoChevronBackOutline  size={'25px'} color='gray'/>
                 </Box>

                 <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <GrNext  size={'25px'} color='gray' />
                 </Box>
            </HStack> */}
        </VStack>
        <VStack overflow={'auto'}    css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   width={'75%'} height={'100%'} borderRightWidth={'1px'} borderRightColor={'white'} borderLeftColor={'white'} borderLeftWidth={'1px'} gap={'20px'} alignItems={'center'}  >
             {/* {!selectedclient  &&  
             
             <Text color={'white'}  fontSize={'larger'} fontWeight={'bold'} >NO CLIENT SELECTED YET</Text>
             
             } */}

             
<>
             {/* <Avatar width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} />
             <Text mt={'15px'} mb={'15px'} color={'white'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}

             <Tabs   onChange={(index)=>{settabindex(index)}}  width={'90%'} height={'40px'} bg={'white'} borderTopRadius={'10px'} p={'2px'}  >
                <TabList  justifyContent={'space-between'} >
                    <Tab color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PROFILE</Tab>
                    <Tab color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >REQUESTS</Tab>
                    <Tab color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PRODUCTS</Tab>
                </TabList>
                <TabPanels  mt={'10px'} width={'90%'} height={'700px'} borderRadius={'10px'} bg={'white'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >
                        {selectedclient && 
                        <>
                         <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0}  src={selectedclient.picture?`${BASE_URL}/profile_pic/${selectedclient.picture}`:undefined}/>
                         <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >{selectedclient.username}</Text>
                         <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >{selectedclient.email}</Text>
                         <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >{`${selectedclient.username} has made ${selectedclient.requests.length} requests so far`}</Text>
                        </>
                        }
                   
                    </TabPanel>

                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >
                    {/* <Text color={'black'}  fontSize={'larger'} fontWeight={'bold'} >CLIENT'S REQUESTS WILL BE DISPLAYED HERE</Text> */}
                    {clientrequests?.length > 0  &&  
                    
                      clientrequests.map(function(val , index){
                             return(
                                <VStack  width={'100%'}  borderBottomColor={'gray.800'}  borderBottomWidth={'1px'} p={'2px'} mt={'10px'}   mb={'10px'} >
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >DATE OF REQUEST</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >TYPE OF REQUEST</Text>
                                <Textarea css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  bg={'gray.800'} borderRadius={'10px'} p={'2px'} color={'white'} mt={'10px'} mb={'10px'} value={val.description} resize={false} minH={'200px'} width={'90%'} whiteSpace={'pre-wrap'} maxH={'600px'} overflow={'auto'} wordBreak={'break-word'}  />
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{`TIME WINDOW : ${val.timequantity} ${val.timeunit}`}</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{val.name}</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{val.email}</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{val.number}</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >request stats</Text>
                                <HStack  width={'98%'}  justifyContent={'space-around'}  gap={'20px'} >
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{`received : ${val.received?'received':'no'}`}</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{`accepted : ${val.accepted?'accepted':'no'}`}</Text>
                                <Text  color={'black'}  alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'}   >{`initiated : ${val.initiated?'initiated':'no'}`}</Text>
                                </HStack>



                         </VStack>
                      
                             )
                           
                      })
                    
                    }

                    </TabPanel>


                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >
                    <Text color={'black'}  fontSize={'larger'} fontWeight={'bold'} >CLIENT'S PRODUCTS WILL BE DISPLAYED HERE</Text>

                    </TabPanel>
                </TabPanels>
             </Tabs>
             </>
            
        </VStack>
    </HStack>
   </Box>
  )
}

export default Clients