import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, Button, Divider, FormControl, FormLabel, HStack, Icon, Image, Input, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack, useBreakpointValue } from '@chakra-ui/react';
import { PiFilePdf, PiIdentificationBadgeDuotone } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';
import { socketcontext } from '../appcontexts/socket';
// responsive
function View_Product() {
    const [fetchingproduct , setfetchingproduct] = useState(false);
    const [fetcherror , setfetcherror] = useState(null);

    const {winwidth , winheight} = useContext(dimensions);
    const location = useLocation();
    const {loggedin , admin , user} = useContext(AuthContext);
    const {socket ,  requestrejected , requestredeemed , requestaccepted , previewsreceived} = useContext(socketcontext);
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

    // Responsive values
    const avatarSize = useBreakpointValue({ base: '80px', sm: '100px', md: '120px' });
    const mainLayoutDirection = useBreakpointValue({ base: 'column', lg: 'row' });
    const leftPanelWidth = useBreakpointValue({ base: '100%', lg: '25%' });
    const rightPanelWidth = useBreakpointValue({ base: '100%', lg: '70%' });
    const infoCardLayout = useBreakpointValue({ base: 'column', md: 'row' });
    const paymentCardWidth = useBreakpointValue({ base: '100%', sm: '45%', md: '23%' });
    const attachmentWidth = useBreakpointValue({ base: '45%', sm: '30%', md: '23%', lg: '17%' });
    const previewWidth = useBreakpointValue({ base: '45%', sm: '30%', md: '23%' });
    const featureCardWidth = useBreakpointValue({ base: '100%', sm: '45%', md: '23%' });

    const getrequest = async function(){
        try{
          setfetchingproduct(true);
          setfetcherror(null);
          const product = await fetch(`${BASE_URL}/fetch_request/${product_id}` , {
            method:'GET',
            headers:{
              'Content-Type':'application/json'
            },
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
        let timer;
        if(requestrejected){
          timer = setTimeout(function(){
            getrequest();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
      } , [requestrejected]);

      useEffect(function(){
        let timer;
        if(requestredeemed){
           timer = setTimeout(function(){
            getrequest();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
      } , [requestredeemed]);

      useEffect(function(){
        let timer
        if(requestaccepted){
           timer = setTimeout(function(){
            getrequest();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
      } , [requestaccepted]);

      useEffect(function(){
        let timer;
        if(previewsreceived){
          timer = setTimeout(function(){
            getrequest();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
      } , [previewsreceived]);

       // the poling is set when the component mounts
      useEffect(function(){
        let tracker;
        const poling = async function(){
          
           
            if(product){
               tracker = setInterval(async function(){
                try{
                  const details = await fetch(`${BASE_URL}/fetch_request/${product._id}` , {
                    credentials:'include',
                    headers:{
                      'Content-Type':'application/json'
                    },
                    method:'GET'
                  })
                  if(details.ok){
                    console.log('successfully checked product');
                    const info = await details.json();
                    if(info.request.payments.status === 'not fully paid'){
                       setproduct(info.request);
                    }
                    else{
                      setproduct(info.request);
                      clearInterval(tracker);
                    }
                  }
                  else{
                    console.log('could not get request details');
                    // then continue poling
                  }
                }
                catch(err){
                  console.log('could not pole product payment status' , err);
      
                }
                 
              }, 3000);
            }
            else{
              return;
            }
            
          
          
        }

        poling();

        return () => {
          if (tracker) clearInterval(tracker);
        };
      } , [product?._id]);

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
        setwanttocancel(false);
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
          setproduct(info.request);
          socket.current.emit('cancel_request' , {data:info.request} , function(){
            console.log('request was cancelled successfully');
          })
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
        setwanttouncancel(false);
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
          setproduct(info.request);

          socket.current.emit('uncancel_request' , {data:info.request} , function(){
            console.log('uncancel event sent successfully');
          })
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
   <Box width="100%" minHeight={winheight} bg={'gray.800'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none', scrollbarWidth: '1px' }}} p={{ base: '2px', md: '4px' }} >
       {product ?
        (
          <VStack width={'100%'} height={'100%'} gap={{ base: '20px', lg: '40px' }} alignItems="center" justifyContent="flex-start" p={'2px'} flexDirection={mainLayoutDirection} >
          <VStack width={leftPanelWidth} height={{ base: 'auto', lg: '100%' }} gap={'15px'} p={'5px'} borderRightWidth={{ base: '0px', lg: '1px' }} borderRightColor={{ base: 'transparent', lg: 'white' }} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none', scrollbarWidth: '1px' }}} alignItems={'center'}  >
             <Avatar width={avatarSize} height={avatarSize} borderRadius={'50%'} fit={'cover'} mt={{ base: '20px', md: '40px' }} borderWidth={'2px'} />
             <Text mt={'20px'} mb={'10px'} fontSize={{ base: 'md', md: 'larger' }} fontWeight={'bold'} color={'white'} textAlign="center">PRODUCT NAME</Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              DATE OF REQUEST : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.date}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              TYPE : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'} width={'70%'} isTruncated={true} >{product.type}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              TIME WINDOW : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{`${product.timequantity}  ${product.timeunit}`}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              E-Mail : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.email}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              NAMES : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.names}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              NUMBER : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.number}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              STATUS : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{!product.accepted&&!product.initiated&&!product.rejected&&!product.cancelled?'NOT YET ACCEPTED':product.accepted&&!product.initiated&&!product.cancelled&&!product.rejected?'RECEIVED':product.received&&product.initiated&&!product.cancelled&&!product.rejected?'INITIATED':product.rejected?'REJECTED':product.cancelled?'CANCELLED':''}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              PREVIEWS : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{!product.previews.length}</Text>
             </Text>
  
                   <Text mt={'30px'} color={'white'} fontSize={{ base: 'md', md: 'large' }} fontWeight={'bold'} textAlign="center">PROJECT'S COSTS</Text>
                   <Divider color={'white'} height={'1px'} width={'100%'} />
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
              COST OF MAKING (paid once) : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.payments_required.making_cost}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               DEPLOYMENT (paid once): <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.payments_required.deploying_cost}</Text>
             </Text>

             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               DOMAIN NAME COST (paid yearly): <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.payments_required.domain_name_cost}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               HOSTING COST (paid monthly): <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.payments_required.domain_name_cost}</Text>
             </Text>
  
             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               MAINTAINANCE  (paid monthly) : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.payments_required.maintainance_cost}</Text>
             </Text>

             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               TOTAL COST : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.total_payment_required}</Text>
             </Text>

             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               ACCEPTED DEPOSIT : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.deposit_required}</Text>
             </Text>

             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               AMOUNT PAID : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.total_paid}</Text>
             </Text>

             <Text as={'span'} mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} textAlign="center">
               AMOUNT REMAINING : <Text as={'span'} fontSize={'sm'} fontWeight={'light'} color={'white'}>{product.payments.amount_remaining}</Text>
             </Text>
          </VStack>
  
          <VStack width={rightPanelWidth} height={'100%'} gap={'15px'} p={'5px'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none', scrollbarWidth: '1px' }}} alignItems={'center'} >
           <VStack width={'98%'} bg={'white'} borderRadius={'10px'} p={'4px'} gap={'20px'} >
               <VStack p={'2px'} gap={'10px'} width={'99%'} minHeight={'200px'} borderRadius={'10px'} flexDirection={infoCardLayout} >
                  <VStack p={'2px'} bgGradient="linear(to-r, purple.600, blue.500, cyan.400)" borderColor={'white'} borderWidth={'1px'} borderRadius={'10px'} width={{ base: '100%', md: '25%' }} height={'200px'} >
                    <Text color={'white'} fontSize={{ base: 'md', md: 'large' }} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'} >PROJECT INITIATION!</Text>
                    <Text color={'white'} fontWeight={'light'} alignSelf={'flex-start'} textAlign={'left'} >
                       initiate the project <Text as={'span'} color={'white'} fontWeight={'bold'} >by paying a deposit of at least half the charge</Text>
                    </Text>
                  </VStack>
                  
                  <HStack p={'4px'} bgGradient="linear(to-r, purple.600, blue.500, cyan.400)" borderColor={'black'} borderWidth={'1px'} borderRadius={'10px'} width={{ base: '100%', md: '73%' }} height={'200px'} overflowX={'auto'} css={{ '&::-webkit-scrollbar': { scrollbarWidth: '1px' }}} alignItems={'center'} flexWrap={{ base: 'wrap', md: 'nowrap' }} >
                    <VStack width={paymentCardWidth} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} minWidth="150px">
                      <Text color={'white'} fontSize="sm">making cost(paid only once)</Text>
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={{ base: 'xl', md: 'xxx-large' }} >. 
                        <Text as={'span'} fontSize={'small'} >{product.payments.payments_required.making_cost}</Text>
                      </Text>
  
                      <Text color={'white'} fontSize="sm">deployment cost(paid only once)</Text>
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={{ base: 'xl', md: 'xxx-large' }} >. 
                        <Text as={'span'} fontSize={'small'} >{product.payments.payments_required.deploying_cost}</Text>
                      </Text>
                    </VStack>
                    
                    <VStack width={paymentCardWidth} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} minWidth="150px">
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize="sm">recurring charges</Text>
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >domain name(yearly) :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.payments_required.domain_name_cost}</Text>
                      </Text>
  
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >hosting(monthly) :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.payments_required.hosting_cost}</Text>
                      </Text>
  
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >maintainance(monthly) :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.payments_required.maintainance_cost}</Text>
                      </Text>
                    </VStack>
                 
                    <VStack width={paymentCardWidth} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} minWidth="150px">
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize="sm">total payment(inclusive of all charges)</Text>
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >full price :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.total_payment_required}</Text>
                      </Text>
  
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >allowed deposit :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.deposit_required}</Text>
                      </Text>
                    </VStack>
  
                    <VStack width={paymentCardWidth} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} minWidth="150px">
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize="sm">payment progress</Text>
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >payment status :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.status}</Text>
                      </Text>
  
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >total paid :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.total_paid}</Text>
                      </Text>
  
                      <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'} fontSize={'xs'} fontWeight={'bold'} >amount remaining :
                         <Text color={'blue.800'} fontSize={'sm'} fontWeight={'bold'} as={'span'}>{product.payments.amount_remaining}</Text>
                      </Text>
                    </VStack>
                  </HStack>
               </HStack>
               
               <Text fontSize={{ base: 'sm', md: 'medium' }} color={'black'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >status :{(!product.accepted && !product.initiated && !product.cancelled && !product.rejected)?'not yet accepted':(product.accepted && !product.initiated && !product.cancelled && !product.rejected)?'accepted':(product.rejected)?'rejected':(product.cancelled)?'cancelled':(product.accepted && product.initiated && !product.cancelled && ! product.rejected)?'initiated':''}</Text>
  
               <HStack width={'98%'} p={'3px'} flexWrap="wrap" gap="10px" >
                {(product.accepted && !product.initiated && !product.rejected && !product.cancelled) &&
                <Button onClick={initiate} colorScheme={product.accepted&&!product.initiated&&!product.rejected&&!product.cancelled?'green':'gray'} size={{ base: 'sm', md: 'md' }}>
                INITIATE PRODUCT
              </Button>
                }
                  
                 {(product.accepted && product.initiated && !product.rejected && !product.cancelled) &&
                     <Button onClick={()=>{setwanttocancel(true)}} colorScheme='red' size={{ base: 'sm', md: 'md' }}>
                     CANCEL REQUEST
                   </Button>
                    }
  
                  {(product.cancelled) &&
                     <Button onClick={()=>{setwanttouncancel(true)}} colorScheme='orange' size={{ base: 'sm', md: 'md' }}>
                     UNDO CANCEL
                   </Button>
                    } 
  
                  {(product.accepted && product.initiated && product.payments.status === "not fully paid"&&!product.rejected&&!product.cancelled) &&
                    <Button onClick={initiate} colorScheme={'green'} size={{ base: 'sm', md: 'md' }}>
                    TOP UP PAYMENT
                  </Button>
                  }

                  {
                    product.payments.status === "fully paid"  && 
                    <Button disabled={true} colorScheme={'gray'} size={{ base: 'sm', md: 'md' }}>
                    PRODUCT FULLY PAID FOR
                   </Button>
                  }

                  {
                     product.rejected && 
                    <Button disabled={true} colorScheme={'red'} size={{ base: 'sm', md: 'md' }}>
                    THIS REQUEST WAS REJECTED
                   </Button>
                  }
               </HStack>
  
               {wanttocancel  &&  
                <VStack width={'98%'} p={'4px'} gap={'10px'} alignItems={'center'}  >
                  <Text color={'black'} fontSize={{ base: 'sm', md: 'medium' }} fontWeight={'bold'} textAlign="center">summarised tips on product cancellation</Text>
                  <Text fontSize={'sm'} color={'black'} width={'100%'} textAlign="center">cancelling  24+ hrs from time of placing request will result to a deduction of 10% of the deposit </Text>
                  <Text fontSize={'sm'} color={'black'} width={'100%'} textAlign="center">you will be refunded in 24 hrs </Text>
                  <Text fontSize={'sm'} color={'black'} width={'100%'} textAlign="center">ask the assistant for more on the terms and conditions</Text>
  
                  <HStack width={{ base: '100%', md: '80%' }} p={'5px'} alignItems={'center'} justifyContent={'space-between'} flexWrap="wrap" >
                    <Button colorScheme='red' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={cancel} size={{ base: 'sm', md: 'md' }} mb={{ base: '10px', md: '0' }}>PROCEED TO CANCEL</Button>
                    <Button colorScheme='orange' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={()=>{setwanttocancel(false)}} size={{ base: 'sm', md: 'md' }}>DO NOT CANCEL</Button>
                  </HStack>
                </VStack>
               }
  
                {wanttouncancel  &&  
                  <VStack width={'98%'} p={'4px'} gap={'10px'} alignItems={'center'}  >
                    <Text fontSize={'sm'} color={'black'} width={'100%'} textAlign="center">are you sure you want to uncancel</Text>
                    <HStack width={{ base: '100%', md: '80%' }} p={'5px'} alignItems={'center'} justifyContent={'space-between'} flexWrap="wrap">
                      <Button colorScheme='red' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={uncancel} size={{ base: 'sm', md: 'md' }} mb={{ base: '10px', md: '0' }}>PROCEED TO UNCANCEL</Button>
                      <Button colorScheme='orange' display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={()=>{setwanttouncancel(false)}} size={{ base: 'sm', md: 'md' }}>DO NOT UNCANCEL</Button>
                    </HStack>
                  </VStack>
                }
                
               {showpayform &&  
               <>
                  <Button onClick={()=>{setshowpayform(false)}} size={'sm'} borderRadius={'50%'} colorScheme='red' color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'1px'} fontSize={'x-small'} >X</Button>
                  <Tabs variant="soft-rounded" colorScheme="teal" isFitted width="100%">
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
                        <Button colorScheme="teal" width="full" onClick={pay} gap={'10px'} >
                          Pay with M-Pesa
                         {ispaying&& <Spinner width={'20px'} height={'20px'} color='white' />}
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
                            color="black"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Expiry Date</FormLabel>
                          <Input
                            placeholder="MM/YY"
                            bg={'white'}
                            color="black"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>CVV</FormLabel>
                          <Input
                            placeholder="123"
                            bg={'white'}
                            color="black"
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
                </>
               }
           </VStack>
           
           <Text color={'white'} fontSize={{ base: 'sm', md: 'medium' }} fontWeight={'light'} alignSelf={'flex-start'} textAlign={'left'}  >PRODUCT DESCRIPTION</Text>
  
           <VStack width={'100%'} p={'5px'} alignItems={'center'} >
                <Textarea color={'white'} fontSize={{ base: 'sm', md: 'medium' }} css={{ '&::-webkit-scrollbar': { display:'none', scrollbarWidth: '1px' }}} width={'90%'} minH={'250px'} value={product.description} p={'4px'} readOnly={true} resize={false} borderRadius={'10px'} overflow={'auto'} wordBreak={'break-word'} whiteSpace={'pre-wrap'} ></Textarea>
           </VStack>
  
           <Button onClick={go_to_edit} alignSelf={'flex-end'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'3px'} borderRadius={'10px'} colorScheme={'gray'} gap={'30px'} size={{ base: 'sm', md: 'md' }}> <CiEdit size={{ base: '20px', md: '25px' }} color='white' /> EDIT REQUEST</Button>
               
          <Text color={'white'} fontSize={{ base: 'md', md: 'larger' }} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >YOUR ATTACHMENTS</Text>
             <HStack width={'98%'} padding={'4px'} flexWrap={'wrap'} alignItems={'center'} justifyContent={{ base: 'center', md: 'flex-start' }} gap="10px" >
                {product.attachments.length > 0 ? 
                  product.attachments.map(function(val , index){
                    return(
                      <VStack key={index} as='button' width={attachmentWidth} borderRadius={'10px'} borderWidth={'1px'} borderColor={'white'} alignItems={'center'} minWidth="120px" >
                        <PiFilePdf size={{ base: '100px', md: '150px' }} color='red' />
                        <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'} >DOC_NAME</Text>
                      </VStack>
                    )
                  })
                  : 
                  <Text color={'white'} fontSize={{ base: 'md', md: 'larger' }} textAlign="center">THIS REQUEST HAD NO ATTACHMENTS</Text>
                }
             </HStack>
  
             <Text color={'white'} fontSize={{ base: 'md', md: 'larger' }} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >PROGRESS</Text>
             <HStack width={'98%'} padding={'4px'} flexWrap={'wrap'} alignItems={'center'} justifyContent={{ base: 'center', md: 'flex-start' }} gap="10px">
               <VStack minHeight={'200px'} width={featureCardWidth} flexWrap={'wrap'} borderRadius={'10px'} borderWidth={'0.5px'} borderColor={'white'} alignItems={'center'} p={'4px'} >
                 <Text color={'white'} fontSize={{ base: 'md', md: 'larger' }} fontWeight={'light'} alignSelf={'flex-start'} textAlign={'left'}  >FEATURES</Text>
                 <Text mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
                 ICON   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >PROPERTY   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DONE</Text></Text>
                 </Text>
                 <Text mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
                 ICON   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >PROPERTY   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DONE</Text></Text>
                 </Text>
                 <Text mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
                 ICON   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >PROPERTY   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DONE</Text></Text>
                 </Text>
                 <Text mt={'20px'} mb={'10px'} fontSize={'xs'} fontWeight={'light'} color={'white'} >
                 ICON   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >DATE   <Text as={'span'} fontSize={'xs'} fontWeight={'light'} color={'white'} >YY/MM/DD/HH/MM/SS</Text></Text>
                 </Text>
               </VStack>
             </HStack>
  
             <Text color={'white'} fontSize={{ base: 'md', md: 'larger' }} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >PREVIEWS</Text>
             <Text color={'white'} fontSize={'xs'} alignSelf={'flex-start'} textAlign={'left'}  >DATE</Text>
  
             <HStack width={'98%'} padding={'4px'} flexWrap={'wrap'} alignItems={'center'} justifyContent={{ base: 'center', md: 'flex-start' }} gap={'20px'}  >
               <VStack width={previewWidth} borderRadius={'10px'} minWidth="120px">
                 <Image width={'99%'} height={'200px'} />
                 <Text fontSize={'xx-small'} color={'white'} width={'90%'} isTruncated={true} textAlign={'center'} >preview name</Text>
               </VStack>
               <VStack width={previewWidth} borderRadius={'10px'} minWidth="120px">
                 <Image width={'99%'} height={'200px'} />
                 <Text fontSize={'xx-small'} color={'white'} width={'90%'} isTruncated={true} textAlign={'center'} >preview name</Text>
               </VStack>
               <VStack width={previewWidth} borderRadius={'10px'} minWidth="120px">
                 <Image width={'99%'} height={'200px'} />
                 <Text fontSize={'xx-small'} color={'white'} width={'90%'} isTruncated={true} textAlign={'center'} >preview name</Text>
               </VStack>
               <VStack width={previewWidth} borderRadius={'10px'} minWidth="120px">
                 <Image width={'99%'} height={'200px'} />
                 <Text fontSize={'xx-small'} color={'white'} width={'90%'} isTruncated={true} textAlign={'center'} >preview name</Text>
               </VStack>
               <VStack width={previewWidth} borderRadius={'10px'} minWidth="120px">
                 <Image width={'99%'} height={'200px'} />
                 <Text fontSize={'xx-small'} color={'white'} width={'90%'} isTruncated={true} textAlign={'center'} >preview name</Text>
               </VStack>
             </HStack>
          </VStack>
        </VStack>
        ) :

        (
          <Box width={'100%'} height={'100%'} bg={'gray.800'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <VStack width={{ base: '90%', md: '60%' }} borderRadius={'15px'} p={'10px'} borderColor={'white'} borderWidth={'1px'} >
                 {fetchingproduct && 
                 <Spinner width={{ base: '100px', md: '200px' }} height={{ base: '100px', md: '200px' }} color='white'  />
                 }
                <Text fontSize={{ base: 'lg', md: 'xx-large' }} color={'white'} fontWeight={'bold'} textAlign="center">{fetcherror?fetcherror:'fetching request from database...'}</Text>
               </VStack>
          </Box>
        )
      }
   </Box>
  )
}

export default View_Product