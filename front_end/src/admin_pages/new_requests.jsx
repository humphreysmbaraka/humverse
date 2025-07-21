import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, Button, HStack, Input, Select, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { PiFilePdf } from "react-icons/pi";
import BASE_URL from '../constants/urls';

function New_Requests() {
    const {winwidth , winheight} = useContext(dimensions);
    const [clients , setclients] = useState(null);
    const [selectedrequest , setselectedrequest]  = useState(null);
    const [allreqs , setallreqs] = useState([]);
    const [fetcherror , setfetcherror] = useState(null);
    const [isfetching , setisfetching] = useState(false);
    const [makingcost , setmakingcost] = useState(null);
    const [deploymentcost , setdeploymentcost] = useState(null);
    const [hostingcost , sethostingcost] = useState(null);
    const [maintainance , setmaintainance] = useState(null);
    const [currency , setcurrency] = useState('KSH');
    const [ rejectionreason , setrejectionreason] = useState(null)
    const[isrejected , setisrejected] = useState(null);
    const [acceptanceerror , setacceptanceerror] = useState(false);
    const [sendingacceptance , setsendingacceptance] = useState(false);
    const [rejecting , setrejecting] = useState(false);
    const [ rejectionerror ,setrejectionerror] = useState(null);
    const [tabindex , settabindex] = useState(0);
    
    // const location = useLocation();
    // const reqs = location.state.requests;




  useEffect(function(){
    console.log('selection changed' , makingcost , hostingcost , deploymentcost);
   settabindex(0);
   setisrejected(null);
   setmakingcost(null);
   setdeploymentcost(null);
   sethostingcost(null);
   setmaintainance(null);
  } , [selectedrequest]);


    useEffect(function(){
        setisfetching(true);
        setfetcherror(null);
       const fetchreqs = async function(){
        try{
           const requests = await fetch(`${BASE_URL}/get_requests`);
           if(requests.ok){
            setisfetching(false);
            setfetcherror(null);
            console.log('requests response' , requests);
            const reqdata = await requests.json();
            setallreqs(reqdata.requests);
           }
           else{
            setisfetching(false);
            setfetcherror('server error occured');
           }
        }
        catch(err){
            console.log('error fetching requests' ,err);
        }
       }

        fetchreqs();
    } ,[])


    const setreject = async function(){
        try{
           if(selectedrequest){
              selectedrequest.rejected = true;
              setisrejected(selectedrequest.rejected);

              
           }
           else{
 
           }
        }
        catch(err){
            console.log('could not reject' , err)
        }
    }

    const cancelreject = async function(){
        try{
           if(selectedrequest){
              selectedrequest.rejected = false;
              setisrejected(selectedrequest.rejected);
              
           }
           else{
 
           }
        }
        catch(err){
            console.log('could not cancel reject' , err)
        }
    }


const sendacceptance = async function(){
    try{
        setacceptanceerror(null);
       if(sendingacceptance){
         console.log('sending..' , sendingacceptance);
         
       }
       else{
        setsendingacceptance(true);
        if(!makingcost || makingcost.trim()==''  || !deploymentcost || deploymentcost.trim()=='' || !hostingcost || hostingcost.trim()==''  ||  !currency || currency.trim()==''  ||   !maintainance || maintainance.trim()=='' ){
          setacceptanceerror('wrong or missing parameters , check your inputs');
        }
        else{
            const acceptance = await fetch(`${BASE_URL}/accept_request` , {
                method:'PATCH',
                headers: {
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify({makingcost , deploymentcost ,hostingcost , currency , maintainance ,  reqid:selectedrequest._id })
            })

            if(acceptance.ok){
                setsendingacceptance(false);
                setacceptanceerror(false);
                console.log('acceptance sent successfully');
                const acceptdata = await acceptance.json();
                setdeploymentcost(null);
                sethostingcost(null);
                setmakingcost(null);
                setmaintainance(null);
                setrejectionreason(null);
            }
            else{
                setsendingacceptance(false);
                if(String(acceptance.status).startsWith('4')){
                    const acceptdata = await acceptance.json();
                    setacceptanceerror(acceptdata.message);
                    setdeploymentcost(null);
                    sethostingcost(null);
                    setmakingcost(null);
                    setmaintainance(null);
                    setrejectionreason(null);
                }
                else{
                      setsendingacceptance(false);
                      setacceptanceerror('server error');
                      setdeploymentcost(null);
                      sethostingcost(null);
                      setmakingcost(null);
                      setmaintainance(null);
                      setrejectionreason(null);
                }
            }
        }

        

       }
    }
    catch(err){
        console.log('error sending request acceptance' , err);
        setacceptanceerror('error sending acceptance');
    }
}


const rejectrequest = async function(){
    try{

        if(rejecting){

        }
        else{
            console.log('rejecting...');
            const reject = await fetch(`${BASE_URL}/reject_request` , {
                method:'PATCH',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({reqid:selectedrequest._id})
            })
    
            if(reject.ok){
                setrejecting(false);
           const rejdata = await reject.json();
           console.log('request rejected successfully')
            }
            else{
                setrejecting(false);
                if(String(reject.status).startsWith('4')){
                    const rejdata = await reject.json();
                   setrejectionerror(rejdata.message);
                }
                else{
                    setrejectionerror('server error occured when rejecting , try again');
                }
            }
        }
    

    }
    catch(err){
        console.log('error rejecting request' , err);
        setrejectionerror('error rejecting')
    }
}

  return (
   <Box width={winwidth} height={winheight}  bg={'gray.800'} padding={'4px'}   >
    <HStack  width={'90%'} height={'100%'} gap={'40px'} alignItems={'center'}  justifyContent={'space-between'} >
        <VStack width={'45%'} height={'100%'}  gap={'20px'} alignItems={'center'} position={'relative'}   >
            <HStack  mt={'20px'} mb={'5px'} width={'60%'} padding={'2px'}  justifyContent={'space-between'} >
                <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <IoChevronBackOutline  size={'25px'} color='gray'/>
                 </Box>

                 <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <GrNext  size={'25px'} color='gray' />
                 </Box>
            </HStack>

          <Tabs  width={'98%'} height={'90%'} p={'4px'} alignSelf={'center'} >
            <TabList alignSelf={'center'} width={'100%'} color={'white'} p={'2px'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} borderBottom={'none'} >
                <Tab color={'white'} fontSize={'medium'} fontWeight={'light'}  >ALL</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >RECEIVED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >ACCEPTED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >REJECTED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >INITIATED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >CANCELED</Tab>
               
            </TabList>
            <TabPanels   width={'100%'} height={'99%'} p={'2px'}  mt={'10px'}  >
             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  overflow={'auto'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    return(
                        <HStack mt={'10px'} onClick={()=>{setselectedrequest(val)}}  width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} overflowX={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                            <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                            <Text color={'white'}   >{val.client.username}</Text>
                            <Text color={'white'}   >{val.createdAt.slice(0 , 10)}</Text>
                            <Text color={'white'}   >{val.createdAt.slice(11 , 16)}</Text>
                            <Text color={val.accepted?'green':'orange'}   >{val.accepted?'Accepted':'not yet accepted'}</Text>
                            <Text color={val.received?'green':'orange'} >{val.received?'Received':'not yet received'}</Text>
                            <Text color={val.initiated?'green.500':'orange'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                            <Text color={val.rejected?'red':'green'}  >{val.rejected?'rejected':'not rejected'}</Text>
                            <Text color={val.cancelled?'red':'green'}>{val.cancelled?'cancelled':'not cancelled'}</Text>
                        </HStack>
                    )
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                   allreqs.map(function(val , index){
                      if(val.received){
                        return(
                            <HStack onClick={()=>{setselectedrequest(val)}} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                            <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                            <Text>{val.client.username}</Text>
                            <Text>{val.createdAt.slice(0 , 10)}</Text>
                            <Text>{val.createdAt.slice(11 , 16)}</Text>
                            <Text>{val.accepted?'Accepted':'not yet accepted'}</Text>
                            {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                            <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                        </HStack>
                        )
                      }
                      else{
                        
                      }
                   })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.accepted){
                        return(
                            <HStack onClick={()=>{setselectedrequest(val)}} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text>{val.client.username}</Text>
                                <Text>{val.createdAt.slice(0 , 10)}</Text>
                                <Text>{val.createdAt.slice(11 , 16)}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                            </HStack>
                        )
                    }
                    else{

                    }
                   
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.rejected){
                        return(
                            <HStack  onClick={()=>{setselectedrequest(val)}} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text>{val.client.username}</Text>
                                <Text>{val.createdAt.slice(0 , 10)}</Text>
                                <Text>{val.createdAt.slice(11 , 16)}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                {/* <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text> */}
                            </HStack>
                        )
                    }
                    else{

                    }
                   
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.initiated){
                        return(
                            <HStack onClick={()=>{setselectedrequest(val)}} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text>{val.client.username}</Text>
                                <Text>{val.createdAt.slice(0 , 10)}</Text>
                                <Text>{val.createdAt.slice(11 , 16)}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                            </HStack>
                        )
                    }
                    else{

                    }
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    
                    if(val.cancelled){
                        return(
                            <HStack onClick={()=>{setselectedrequest(val)}} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text>{val.client.username}</Text>
                                <Text>{val.createdAt.slice(0 , 10)}</Text>
                                <Text>{val.createdAt.slice(11 , 16)}</Text>
                                <Text>{val.accepted?'Accepted':'not yet accepted'}</Text>
                                <Text>{val.received?'Received':'not yet received'}</Text>
                                <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                            </HStack>
                        )
                    }
                    else{

                    }
                   
                  })
                 }
            </VStack>
             </TabPanel>
            </TabPanels>
          </Tabs>

            {/* <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    return(
                        <HStack width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'whire'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                            <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                            <Text>{val.client.username}</Text>
                            <Text>{val.createdAt.slice(0 , 10)}</Text>
                            <Text>{val.createdAt.slice(11 , 16)}</Text>
                            <Text>{val.accepted?'Accepted':'not yet accepted'}</Text>
                            <Text>{val.received?'Received':'not yet received'}</Text>
                            <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                        </HStack>
                    )
                  })
                 }
            </VStack> */}



            {/* <HStack  mt={'5px'} mb={'20px'} width={'60%'} padding={'2px'}  justifyContent={'space-between'}  position={'absolute'} bottom={'10px'} >
                <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <IoChevronBackOutline  size={'25px'} color='gray'/>
                 </Box>

                 <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <GrNext  size={'25px'} color='gray' />
                 </Box>
            </HStack> */}
        </VStack>
        <VStack overflow={'auto'}    css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   width={'50%'} height={'100%'}   gap={'20px'} alignItems={'center'}  >
             {/* {!selectedrequest  &&  
             
             <Text color={'white'}  fontSize={'larger'} fontWeight={'bold'} >NO CLIENT SELECTED YET</Text>
             
             } */}
css
             {/* {!selectedrequest  &&    */}
<>
             {/* <Avatar width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} />
             <Text mt={'15px'} mb={'15px'} color={'white'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}

             <Tabs   variant="soft-rounded" colorScheme="whiteAlpha" index={tabindex}  onChange={(index)=>{settabindex(index)}} width={'90%'} height={'40px'} bg={'gray.800'} borderTopRadius={'10px'} p={'2px'}  >
                <TabList  justifyContent={'space-between'} >
                    <Tab  _selected={{ bg: 'whiteAlpha.300' }} color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >DETAILS</Tab>
                    <Tab  _selected={{ bg: 'whiteAlpha.300' }} color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PROCESS</Tab>
                    <Tab  _selected={{ bg: 'whiteAlpha.300' }} color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PRODUCTS</Tab>
                </TabList>
                <TabPanels  mt={'10px'} width={'90%'} height={'600px'} borderRadius={'10px'} bg={'transparent'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                    <TabPanel  display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'100%'} height={'100%'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} p={'2px'} borderRadius={'10px'} >
                     {selectedrequest  &&  
                     <>
                     <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest.client.picture?`${BASE_URL}/profile_pic/${selectedrequest.client.picture}`:undefined} name={selectedrequest.client.username} />
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.email}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.number}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {selectedrequest.attachments.length > 0 && 
                     selectedrequest.attachments.map(function(val , index){
                         return(
                             <VStack key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >DOC_NAME</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {selectedrequest.attachments.length == 0 && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack>
                     
                     {/* <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                     <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}
                      </>
                      }
                      {!selectedrequest && 
                      <Text mt={'20px'} color={'white'} fontSize={'large'} fontWeight={'bold'}  >SELECT A REQUEST FIRST</Text>
                      }
                    </TabPanel>

                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >

                    {selectedrequest  &&  
                     <>

                 


                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                        <Text color={'white'} fontWeight={'bold'} >SET CHARGES AND OTHER PARAMETERS FOR THE REQUEST OR REJECT THE REQUEST</Text>


                 {
                    acceptanceerror &&  
                    <Text color={'red'}  fontWeight={'light'} fontSize={'large'} >{acceptanceerror}</Text>
                 }
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >currency</Text>
                            <Select onChange={(e)=>{setcurrency(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        >
                                <option value='KSH' >KSH</option>
                                <option value='USD' >USD</option>
                            </Select>
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={makingcost} onChange={(e)=>{setmakingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                    
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON EPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input value={deploymentcost} onChange={(e)=>{setdeploymentcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input value={hostingcost} onChange={(e)=>{sethostingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >MAINTAINANCE</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={maintainance} onChange={(e)=>{setmaintainance(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>
                     </VStack>

                     {
                    acceptanceerror &&  
                    <Text color={'red'}  fontWeight={'light'} fontSize={'large'} >{acceptanceerror}</Text>
                 }
                     <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                        <Button onClick={sendacceptance}  width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='green' >ACCEPT  REQUEST</Button>
                        <Button onClick={setreject} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >REJECT  REQUEST</Button>

                     </HStack>

                     {sendingacceptance &&  
                     <Spinner color='white'  size={'medium'}  ></Spinner>
                     }


                     {isrejected &&  
                     <>
                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                       
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >reason of rejection</Text>
                            <Input  value={rejectionreason} onChange={(e)=>{setrejectionreason(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>
                     </VStack>

  

                            {rejectionerror  &&  
                            <Text color={'orange'} fontSize={'medium'} fontWeight={'bold'} >{rejectionerror}</Text>
                            }


                            <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                            <Button onClick={cancelreject} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='orange' >CANCEL</Button>
                            <Button  onClick={rejectrequest} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >SEND REJECTION</Button>

                            </HStack>

                            {rejecting  &&  
                            <Spinner    size={'medium'} color='orange'  />
                            }
</>
                     }

                     
                     {/* <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest.client.picture?`${BASE_URL}/profile_pic/${selectedrequest.client.picture}`:undefined} name={selectedrequest.client.username} />
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.email}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.number}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {selectedrequest.attachments.length > 0 && 
                     selectedrequest.attachments.map(function(val , index){
                         return(
                             <VStack key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >DOC_NAME</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {selectedrequest.attachments.length == 0 && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack> */}
                     
                     {/* <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                     <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}
                      </>
                      }
                      {!selectedrequest && 
                      <Text mt={'20px'} color={'white'} fontSize={'large'} fontWeight={'bold'}  >SELECT A REQUEST FIRST</Text>
                      }

                    </TabPanel>


                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >

               
                    {selectedrequest  &&  
                     <>

                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                        <Text color={'white'} fontWeight={'bold'} >SET CHARGES AND OTHER PARAMETERS FOR THE REQUEST OR REJECT THE REQUEST</Text>
                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input onChange={(e)=>{setmakingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON EPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input  onChange={(e)=>{setdeploymentcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input  onChange={(e)=>{sethostingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>
                     </VStack>
                     <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                        <Button  width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='green' >ACCEPT  REQUEST</Button>
                        <Button onClick={setreject} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >REJECT  REQUEST</Button>

                     </HStack>


                     {isrejected &&  
                     <>
                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                       
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >reason of rejection</Text>
                            <Input  onChange={(e)=>{setrejectionreason(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>
                     </VStack>


                            <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                            <Button onClick={cancelreject} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='orange' >CANCEL</Button>
                            <Button width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >SEND REJECTION</Button>

                            </HStack>
</>
                     }

                     
                     {/* <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest.client.picture?`${BASE_URL}/profile_pic/${selectedrequest.client.picture}`:undefined} name={selectedrequest.client.username} />
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.email}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.number}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>
 
                     <Text mt={'1opx'} mb={'5px'} color={'black'}  fontSize={'small'} fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.client.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {selectedrequest.attachments.length > 0 && 
                     selectedrequest.attachments.map(function(val , index){
                         return(
                             <VStack key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >DOC_NAME</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {selectedrequest.attachments.length == 0 && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack> */}
                     
                     {/* <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                     <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}
                      </>
                      }
                      {!selectedrequest && 
                      <Text mt={'20px'} color={'white'} fontSize={'large'} fontWeight={'bold'}  >SELECT A REQUEST FIRST</Text>
                      }
                    </TabPanel>
                </TabPanels>
             </Tabs>
             </>
              {/* } */}
        </VStack>
    </HStack>
   </Box>
  )
}

export default New_Requests