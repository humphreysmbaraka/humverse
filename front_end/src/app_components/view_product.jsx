import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, Button, Divider, FormControl, FormLabel, HStack, Icon, Image, Input, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { PiFilePdf, PiIdentificationBadgeDuotone } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';



function View_Product() {
    const [fetchingproduct , setfetchingproduct] = useState(false);
    const [fetcherror , setfetcherror] = useState(null);


    const {winwidth , winheight} = useContext(dimensions);
    const location = useLocation();
    const {loggedin , admin , user} = useContext(AuthContext);
    const product_id = location.state.request._id;
    const [product , setproduct] = useState(null);
    const [initiating , setinitiating] = useState(false);
    const [initiationerror , setinitiationerror] = useState(null);
    const [showpayform , setshowpayform] = useState(false);
    const [ispaying , setispaying] = useState(false);
    const [payerror , setpayerror] = useState(false);
    const [paynumber , setpaynumber] = useState(null);
    const [amount , setamount] = useState(null);
    const [editmode , seteditmode] = useState(false);
    const navigate = useNavigate();
    const [wanttocancel , setwanttocancel] = useState(false);
    const [wanttouncancel ,setwanttouncancel ] = useState(false);

    const [cancelling , setcancelling] = useState(false);
    const [cancelerror , setcancelerror] = useState(null);


    const [uncancelling , setuncancelling] = useState(false);
    const [uncancelerror , setuncancelerror] = useState(null);

     
      const getrequest = async function(){
        try{
          setfetchingproduct(true);
          setfetcherror(null);
          const product = await fetch(`/fetch_request` , {
            method:'GET',
            headers:{
              'Content-Type':'application/json'
            },
           body:JSON.stringify({id:product_id})
          });

          if(product.ok){
            setfetchingproduct(false);
            setfetcherror(null);
              const info = await product.json();
              setproduct(info.request);

          }
          else{
            console.log('could not fetch product');
            setfetchingproduct(false);
            const info = await product.json()
            if(String(product.status).startsWith('4')){
              setfetcherror(info.message);
            }
            else{
              setfetcherror('server error');
            }
          }
        }
        catch(err){
          setfetchingproduct(false);
          console.log('error fetching request' ,err );
          setfetcherror('could not fetch product')
         
        }
      }

      

     useEffect(function(){
        getrequest();
     } , []);

    const cancel = async function(){
      try{
        const sure = confirm('are you sure you want to cancel the request');
        if(!sure){
          return;
        }
        setcancelerror(false);
        setcancelling(true);

        const cancel = await fetch(`${BASE_URL}/cancel_request` , {
          headers: {
            'Content-Type' : 'application/json'
          },
          method:'POST',
          credentials:'include',
          body:JSON.stringify({id:product._id})
        });

        if(cancel.ok){
          setcancelling(false);
          const info = await cancel.json();
        }
        else{
          setcancelling(false);
          const info = await cancel.json();
          if(String(cancel.status).startsWith('4')){
            setcancelerror(info.message);
           }
           else{
            setcancelerror('server error')
           }
        }
      }
      catch(err){
        console.log('coul not cancel product',err);
        setcancelling(false);
        setcancelerror('could not cancel')
      }
    }


    const uncancel = async function(){
      try{

        const sure = confirm('are you sure you want to cancel the request');
        if(!sure){
          return;
        }
        setuncancelerror(false);
        setuncancelling(true);

        const cancel = await fetch(`${BASE_URL}/uncancel_request` , {
          headers: {
            'Content-Type' : 'application/json'
          },
          method:'POST',
          credentials:'include',
          body:JSON.stringify({id:product._id})
        });

        if(cancel.ok){
          setuncancelling(false);
          const info = await cancel.json();
        }
        else{
          setuncancelling(false);
          const info = await cancel.json();
          if(String(cancel.status).startsWith('4')){
            setuncancelerror(info.message);
           }
           else{
            setuncancelerror('server error')
           }
        }
      }
      catch(err){
        console.log('coul not cancel product',err);
        setuncancelling(false);
        setuncancelerror('could not cancel')
      }
    }


    const go_to_edit = async function(){
      try{
        navigate('../make_request' , {state:{product:product , mode:'editting'}})
      }
      catch(err){
        console.log('error redirecting to edit request');
      }
    }

    const pay = async function(){
      try{
        if(ispaying){

        }
        else{
         if(!paynumber || paynumber.trim()==''|| !amount || amount.trim()==''){
            // TO BE ADDED TO THE CONDITIONS amount < product.costs.total/3  || amount > product.costs.total 
            setpayerror('invalid or missing fields');
         }
        
         else{
            setispaying(true);
            setpayerror(false);
            const payment = await fetch(`${BASE_URL}/pay_for_product` , {
               method:'POST',
               headers:{
                  'Content-Type' : 'application/json'
               },
               credentials:'include',
               body:JSON.stringify({phonenumber:paynumber , amount:Number(amount) , product_id:product._id , user_id:user._id })
            })

            if(payment.ok){
              console.log('payment successful');
              setispaying(false);
              setpayerror(false);
              setpaynumber('');
              setamount('');
            }
            else{
              const dets = await payment.json();
              if(String(payment.status).startsWith('4')){
                setispaying(false);
               setpayerror(dets.message);
               setpaynumber('');
               setamount('');
              }
               else{
                setispaying(false);
               setpayerror('payment unsuccessful');
               setpaynumber('');
               setamount('');
               }
            }
         }
        }
      }
      catch(err){
         setispaying(false);
         setpaynumber('');
         setamount('');
         console.log('error tring to initiate rtansaction' , err);
         setpayerror('error initiating transaction , try again');
      }
    }


    const initiate = async function(){
      try{
         if(!product.accepted){
            setinitiationerror('your request has not yet been accepted , you will first be contacted (via phone / email) for further directived');
            setinitiating(false);
         }
         else{
            // setinitiationerror(false);
            setinitiating(true);
            setinitiationerror('now initiation can be done');
            setshowpayform(true)
         }
      }
      catch(err){
         setinitiating(false);
         console.log('error trying to initiate' , err);
         setinitiationerror('error trying to initiate , try again')
      }
    }

    

  return (
   <Box width={winwidth}   height={winheight}  bg={'gray.800'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} padding={'4px'} p={'4px'}  >
       {product ?
        (
          <HStack width={'100%'}  height={'100%'} gap={'40px'} alignItems={'center'} justifyContent={'space-between'}  p={'2px'} >
          <VStack  width={'25%'} height={'100%'} gap={'15px'} p={'5px'} borderRightColor={'white'} borderRightWidth={'1px'}overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} padding={'4px'} alignItems={'center'}  >
             <Avatar width={'120px'}  height={'120px'}  borderRadius={'50%'} fit={'cover'} mt={'40px'} borderWidth={'2px'} />
             <Text mt={'20px'} mb={'10px'} fontSize={'larger'} fontWeight={'bold'} color={'white'} >PRODUCT NAME</Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              DATE OF REQUEST : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.date}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              TYPE : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} width={'70%'} isTruncated={true} >{product.type}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              TIME WINDOW : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{`${product.timequantity}  ${product.timeunit}`}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              E-Mail : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.email}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              NAMES : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.names}</Text>
             </Text>
  
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              NUMBER : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.number}</Text>
             </Text>
  
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              STATUS : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{!product.received?'NOT YET':product.received?'RECEIVED':product.received&&product.initiated?'INITIATED':product.rejected?'REJECTED':product.cancelled?'CANCELLED':''}</Text>
             </Text>
  
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              PREVIEWS : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{!product.previews.length}</Text>
             </Text>
  
                   <Text mt={'30px'}  color={'white'}  fontSize={'large'} fontWeight={'bold'}  >PROJECT'S COSTS</Text>
                   <Divider     color={'white'}  height={'1px'}  width={'100%'}   />
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
              COST OF MAKING (paid once) : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.costs.makingcost}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
               DEPLOYMENT (paid once): <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.costs.deploymentcost.domain_name_cost}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
               HOSTING COST (paid monthly): <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.costs.hostingcost}</Text>
             </Text>
  
             <Text as={'span'}  mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
               MAINTAINANCE  (paid monthly) : <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'sm'} fontWeight={'light'} color={'white'} >{product.costs.maintainance}</Text>
             </Text>
  
  
           
  
          </VStack>
  
  
          <VStack   width={'70%'}  height={'100%'}  gap={'15px'} p={'5px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} padding={'4px'} alignItems={'center'}   >
           <VStack width={'98%'}  bg={'white'}  borderRadius={'10px'}  p={'4px'} gap={'20px'} >
               <HStack   p={'2px'}  gap={'10px'} width={'99%'} minHeight={'200px'} borderRadius={'10px'}  >
                  <VStack p={'2px'} bgGradient="linear(to-r, purple.600, blue.500, cyan.400)" borderColor={'white'}  borderWidth={'1px'}  borderRadius={'10px'}  width={'25%'} height={'200px'}  >
                    <Text color={'white'}  fontSize={'large'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'} >PROJECT INITIATION!</Text>
                    <Text color={'white'}   fontWeight={'light'} alignSelf={'flex-start'} textAlign={'left'} >
                       initiate the project <Text as={'span'}  color={'white'} fontWeight={'bold'} >by paying a deposit of at least half the charge</Text>
                    </Text>
  
                  </VStack>
                  <HStack p={'4px'}  bgGradient="linear(to-r, purple.600, blue.500, cyan.400)" borderColor={'black'}  borderWidth={'1px'}  borderRadius={'10px'}  width={'73%'} height={'200px'} overflowX={'auto'}   css={{ '&::-webkit-scrollbar': { scrollbarWidth: '1px' }}} padding={'4px'} alignItems={'center'}  >
                  {/* <Text color={'white'}  fontSize={'large'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text> */}
                   <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} >
                    <Text color={'white'}>making cost(paid only once)</Text>
                    <Text alignSelf={'flex-start'}  textAlign={'left'} color={'white'} fontSize={'xxx-large'}  >. 
                    <Text as={'span'} fontSize={'small'} >price</Text>
                    </Text>
  
  
                    <Text color={'white'}>deployment cost(paid only once)</Text>
                    <Text alignSelf={'flex-start'}  textAlign={'left'} color={'white'} fontSize={'xxx-large'}  >. 
                    <Text as={'span'} fontSize={'small'} >price</Text>
                    </Text>
  
                   </VStack>
                   <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'}  >
                    <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'}  >recurring charges</Text>
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >domain name(yearly) :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
  
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >hosting(monthly) :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
  
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >maintainance(monthly) :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
                   </VStack>
                 
                   <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} >
                   <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'}  >total payment(inclusive of all charges)</Text>
                    
  
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >full price :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
  
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >allowed deposit :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
                   </VStack>
  
                   <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'}  >
                   <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'}  >payment progress</Text>
  
                   <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >payment status :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
  
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >total paid :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
  
                    <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >amount remaining :
                       <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                    </Text>
                   </VStack>
                  </HStack>
               </HStack>
               <Text fontSize={'medium'} color={'white'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >status :{(!product.accepted && !product.initiated && !product.cancelled && !product.rejected)?'not yet accepted':(product.accepted && !product.initiated && !product.cancelled && !product.rejected)?'accepted':(product.rejected)?'rejected':(product.cancelled)?'cancelled':(product.accepted && product.initiated && !product.cancelled && ! product.rejected)?'initiated':''}</Text>
               <Text fontSize={'medium'} color={'orange'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >{initiationerror}</Text>
  
               <HStack width={'98%'} p={'3px'}   >
                {(product.accepted && !product.initiated && !product.rejected && !product.cancelled) &&
                <Button onClick={initiate}   colorScheme={product.accepted&&!product.initiated&&!product.rejected&&!product.cancelled?'green':'gray'} >
                INITIATE PRODUCT
              </Button>
                }
                  
                 
                    {(product.accepted && product.initiated && !product.rejected && !product.cancelled) &&
                     <Button onClick={()=>{setwanttocancel(true)}}  colorScheme='red' >
                     CANCEL REQUEST
                   </Button>
                    }
  
  
                  {(product.cancelled) &&
                     <Button onClick={()=>{setwanttouncancel(true)}}  colorScheme='red' >
                     UNDO CANCEL
                   </Button>
                    } 
  
                  {/* {!product.cancelled ?
                    (
                      <Button onClick={cancel}  colorScheme='red' >
                      CANCEL REQUEST
                    </Button>
                    )
                    :
                    (
                      <Button onClick={cancel}  colorScheme='orange' >
                      UNDO CANCEL
                    </Button>
                    )
                  } */}
  
                  {/* {(product.accepted && product.initiated && !product.cancelled && !product.rejected) && 
                    <Button    colorScheme={'purple'} >
                    PRODUCT INITIATED
                  </Button>
                  
                  } */}
  
               {(product.accepted && product.initiated && product.payments.status === "not fully paid") ?
                    (
                    <Button   onClick={initiate}  colorScheme={'green'} >
                    TOP UP PAYMENT
                  </Button>
                   ):
                   (
                    <Button  disabled={true}  colorScheme={'gray'} >
                    PRODUCT FULLY PAID FOR
                  </Button>
                   )
                  
                  }
  
               
               </HStack>
  
               {wanttocancel  &&  
                <VStack width={'98%'}  p={'4px'} gap={'10px'} alignItems={'center'}  >
                  <Text color={'black'} fontSize={'medium'} fontWeight={'bold'} >summarised tips on product cancellation</Text>
                  <Text fontSize={'sm'} color={'black'}  width={'100%'}  >cancelling  24+ hrs from time of placing request will result to a deduction of 10% of the deposit </Text>
                  <Text fontSize={'sm'} color={'black'}  width={'100%'}  >you will be refunded in 24 hrs </Text>
  
  
  
                  <Text fontSize={'sm'} color={'black'}  width={'100%'}  >ask the assistant for more on the terms and conditions</Text>
  
                  <HStack width={'80%'}  p={'5px'}  alignItems={'center'} justifyContent={'space-between'}   >
                    <Button colorScheme='red' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={cancel} >PROCEED TO CANCEL</Button>
                    <Button  colorScheme='orange' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={()=>{setwanttocancel(false)}} >DO NOT  CANCEL</Button>
                  </HStack>
                </VStack>
               
               }
  
  
                {wanttouncancel  &&  
                              <VStack width={'98%'}  p={'4px'} gap={'10px'} alignItems={'center'}  >
                                {/* <Text color={'black'} fontSize={'medium'} fontWeight={'bold'} >summarised tips on uncancelling product</Text>
                                <Text fontSize={'sm'} color={'black'}  width={'100%'}  >cancelling  24+ hrs from time of placing request will result to a deduction of 10% of the deposit </Text>
                                <Text fontSize={'sm'} color={'black'}  width={'100%'}  >you will be refunded in 24 hrs </Text>
  
  
  
                                <Text fontSize={'sm'} color={'black'}  width={'100%'}  >ask the assistant for more on the terms and conditions</Text> */}
                                <Text fontSize={'sm'} color={'black'}  width={'100%'}  >are you sure you want to uncancel</Text>
  
                                <HStack width={'80%'}  p={'5px'}  alignItems={'center'} justifyContent={'space-between'}   >
                                  <Button colorScheme='red' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={uncancel} >PROCEED TO UNCANCEL</Button>
                                  <Button  colorScheme='orange' display={'flex'} alignItems={'center'} justifyContent={'center'}  onClick={()=>{setwanttouncancel(false)}} >DO NOT  UNCANCEL</Button>
                                </HStack>
                              </VStack>
                            
                            }
  
  
                
               {showpayform &&  
                  <Tabs variant="soft-rounded" colorScheme="teal" isFitted>
                  <TabList mb="1em">
                    <Tab _selected={{ color: "white", bg: "teal.500" }}>M-Pesa</Tab>
                    <Tab _selected={{ color: "white", bg: "teal.500" }}>Visa</Tab>
                  </TabList>
          
                  <TabPanels>
                    {/* M-Pesa Payment Tab */}
                    <TabPanel>
                      <VStack spacing={4} align="stretch">
                        <FormControl>
                          <FormLabel>Phone Number</FormLabel>
                          <Input
                            value={paynumber}
                            onChange={(e)=>{setpaynumber(e.target.value)}}
                            placeholder="e.g. 2547XXXXXXXX"
                            bg={'white'}
                            color="black"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
  
                        <FormControl>
                          <FormLabel>Amount</FormLabel>
                          <Input
                             value={amount}
                             onChange={(e)=>{setamount(e.target.value)}}
                            placeholder="amount should be at least a third of the product's full cost"
                            bg={'white'}
                            color="black"
                            _placeholder={{ color: "gray.400" }}
                           
                          />
                        </FormControl>
                        {payerror &&  
                        
                        <Text color={'red.500'} fontWeight={'bold'} >{payerror}</Text>
                        }
                        <Button colorScheme="teal" width="full"  onClick={pay} gap={'10px'} >
                          Pay with M-Pesa
                         {ispaying&&   <Spinner  width={'20px'}  height={'20px'} color='white' />}
                        </Button>
                      </VStack>
                    </TabPanel>
          
                    {/* Visa Payment Tab */}
                    <TabPanel>
                      <VStack spacing={4} align="stretch">
                        <FormControl>
                          <FormLabel>Card Number</FormLabel>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            bg={'white'}
                            color="white"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Expiry Date</FormLabel>
                          <Input
                            placeholder="MM/YY"
                            bg={'white'}
                            color="white"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>CVV</FormLabel>
                          <Input
                            placeholder="123"
                            bg={'white'}
                            color="white"
                            _placeholder={{ color: "gray.400" }}
                            maxW="100px"
                          />
                        </FormControl>
                        <Button colorScheme="teal" width="full">
                          Pay with Visa
                        </Button>
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
               
               }
  
  
              
           </VStack>
           <Text  color={'white'} fontSize={'medium'} fontWeight={'light'} alignSelf={'flex-start'} textAlign={'left'}  >PRODUCT DESCRIPTION</Text>
  
           <VStack width={'100%'} p={'5px'}  alignItems={'center'} >
                <Textarea color={'white'}  fontSize={'medium'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   width={'90%'} minH={'250px'} value={product.description} p={'4px'} readOnly={true} resize={false} borderRadius={'10px'}  overflow={'auto'} wordBreak={'break-word'} whiteSpace={'pre-wrap'} ></Textarea>
               </VStack>
  
               <Button onClick={go_to_edit} alignSelf={'flex-end'}  display={'flex'} alignItems={'center'} justifyContent={'center'} p={'3px'} borderRadius={'10px'} colorScheme={'gray'}  gap={'30px'} > <CiEdit  size={'25px'}  color=''white /> EDIT REQUEST</Button>
               
          <Text  color={'white'} fontSize={'larger'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >YOUR ATTACHMENTS</Text>
             <HStack  width={'98%'}  padding={'4px'}  flexWrap={'wrap'} alignItems={'center'}  >
                {product.attachments.length > 0 && 
                
                product.attachments.map(function(val , index){
                  return(
                    <VStack key={index} as='button'  width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                    <PiFilePdf    size={'150px'}   color='red'    />
                    <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >DOC_NAME</Text>
                 </VStack>
  
                 // <VStack as='button'  width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                 //    <PiFilePdf    size={'150px'} borderRadius={'10px'}  color='red'    />
                 //    <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit deleniti laborum officia ea ullam velit inventore aut hic? Obcaecati delectus, optio ipsum perferendis aliquid pariatur? Assumenda accusamus deserunt cumque unde!</Text>
                 // </VStack>
                  )
                })
                
                }
  
                {
                 product.attachments.length <= 0 && 
                 <Text  color={'white'} fontSize={'larger'}  >THIS REQUEST HAD NO ATTACHMENTS</Text>
                }
  
  
                
             </HStack>
  
  
  
             <Text  color={'white'} fontSize={'larger'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >PROGRESS</Text>
             <HStack  width={'98%'}  padding={'4px'}  flexWrap={'wrap'} alignItems={'center'}  >
               
             <VStack   minHeight={'200px'}  width={'23%'} flexWrap={'wrap'} borderRadius={'10px'} borderWidth={'0.5px'}  borderColor={'white'}  alignItems={'center'} p={'4px'}  >
             <Text  color={'white'} fontSize={'larger'} fontWeight={'light'} alignSelf={'flex-start'} textAlign={'left'}  >FEATURES</Text>
  
                 
             <Text   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
             ICON   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >PROPERTY   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DONE</Text>
             </Text>
  
             </Text>
  
  
  
  
             <Text   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
             ICON   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >PROPERTY   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DONE</Text>
             </Text>
  
             </Text>
  
  
  
  
  
  
  
  
  
             <Text   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
             ICON   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >PROPERTY   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DONE</Text>
             </Text>
  
             </Text>
  
  
  
  
             <Text   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
             ICON   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DATE   <Text as={'span'}   mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >YY/MM/DD/HH/MM/SS</Text>
             </Text>
  
             </Text>
  
  
             
                 </VStack>
  
                
             </HStack>
  
  
  
  
             <Text  color={'white'} fontSize={'larger'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >PREVIEWS</Text>
             <Text  color={'white'} fontSize={'xs'}  alignSelf={'flex-start'} textAlign={'left'}  >DATE</Text>
  
             <HStack  width={'98%'}  padding={'4px'}  flexWrap={'wrap'} alignItems={'center'} gap={'20px'}  >
               <VStack   width={'23%'}   borderRadius={'10px'}   >
               <Image    width={'99%'} height={'200px'}   />
               <Text fontSize={'xx-small'}  color={'white'}   width={'90%'}  isTruncated={true} textAlign={'center'}   >preview name</Text>
               </VStack>
  
  
               <VStack   width={'23%'}   borderRadius={'10px'}   >
               <Image    width={'99%'} height={'200px'}   />
               <Text fontSize={'xx-small'}  color={'white'} width={'90%'}  isTruncated={true}  textAlign={'center'}   >preview name</Text>
               </VStack>
  
  
               <VStack   width={'23%'}   borderRadius={'10px'}   >
               <Image    width={'99%'} height={'200px'}   />
               <Text fontSize={'xx-small'}  color={'white'}   width={'90%'}  isTruncated={true}  textAlign={'center'}   >preview name</Text>
               </VStack>
  
  
               <VStack   width={'23%'}   borderRadius={'10px'}   >
               <Image    width={'99%'} height={'200px'}   />
               <Text fontSize={'xx-small'}  color={'white'}   width={'90%'}  isTruncated={true}  textAlign={'center'}   >preview name</Text>
               </VStack>
  
  
               <VStack   width={'23%'}   borderRadius={'10px'}   >
               <Image    width={'99%'} height={'200px'}   />
               <Text fontSize={'xx-small'}  color={'white'}  width={'90%'}  isTruncated={true} textAlign={'center'} >preview name</Text>
               </VStack>
            {/* <Image    width={'23%'} height={'200px'}    borderRadius={'10px'}     />
            <Image    width={'23%'} height={'200px'}    borderRadius={'10px'}     />
            <Image    width={'23%'} height={'200px'}    borderRadius={'10px'}     />
            <Image    width={'23%'} height={'200px'}    borderRadius={'10px'}     />
            <Image    width={'23%'} height={'200px'}    borderRadius={'10px'}     /> */}
  
                
             </HStack>
          </VStack>
        </HStack>
        ) :

        (
          <Box  width={'100%'} height={'100%'} bg={'gray.800'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <VStack  width={'60%'} borderRadius={'15px'} p={'10px'} borderColor={'white'} borderWidth={'1px'} >
                 {fetchingproduct && 
                 <Spinner   width={'200px'} height={'200px'} color='white'  />
                 }
                <Text fontSize={'xx-large'} color={'white'} fontWeight={'bold'} >{fetcherror?fetcherror:'fetching request from database...'}</Text>
               </VStack>
          </Box>
        )
      }
   </Box>
  )
}

export default View_Product