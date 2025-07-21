import React, { useContext, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, Button, Divider, FormControl, FormLabel, HStack, Icon, Image, Input, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { PiFilePdf } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';



function View_Product() {
    const {winwidth , winheight} = useContext(dimensions);
    const location = useLocation();
    const {loggedin , admin , user} = useContext(AuthContext);
    const product = location.state.request;
    const [initiating , setinitiating] = useState(false);
    const [initiationerror , setinitiationerror] = useState(null);
    const [showpayform , setshowpayform] = useState(false);
    const [ispaying , setispaying] = useState(false);
    const [payerror , setpayerror] = useState(false);
    const [paynumber , setpaynumber] = useState(null);
    const [amount , setamount] = useState(null);
    const [editmode , seteditmode] = useState(false);
    const navigate = useNavigate();


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
                <HStack p={'4px'}  bgGradient="linear(to-r, purple.600, blue.500, cyan.400)" borderColor={'black'}  borderWidth={'1px'}  borderRadius={'10px'}  width={'73%'} height={'200px'}  >
                {/* <Text color={'white'}  fontSize={'large'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text> */}
                 <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} >
                  <Text color={'white'}  >product making charges (paid only once)</Text>
                  <Text alignSelf={'flex-start'}  textAlign={'left'} color={'white'} fontSize={'xxx-large'}  >. 
                  <Text as={'span'} fontSize={'small'} >price</Text>
                  </Text>

                 </VStack>
                 <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'}  >
                  <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'}  >deployment charges(paid only once)</Text>
                  <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >domain name :
                     <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                  </Text>
                 </VStack>
                 <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'}  >
                 <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'}  >hosting(paid monthly)</Text>
                  <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >domain name :
                     <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                  </Text>
                 </VStack>
                 <VStack width={'23%'} borderRightColor={'white'} borderRightWidth={'1px'} height={'95%'} >
                 <Text alignSelf={'flex-start'} textAlign={'left'} color={'white'}  >total(inclusive of all charges)</Text>
                  <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >deposit :
                     <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                  </Text>

                  <Text alignSelf={'flex-start'} textAlign={'left'}color={'white'} fontSize={'small'} fontWeight={'bold'} >full price :
                     <Text  color={'blue.800'} fontSize={'medium'} fontWeight={'bold'} as={'span'}>price</Text>
                  </Text>
                 </VStack>
                </HStack>
             </HStack>

             <Text fontSize={'medium'} color={'orange'} fontWeight={'bold'} alignSelf={'flex-start'} textAlign={'left'}  >{initiationerror}</Text>

             <HStack width={'98%'} p={'3px'}   >
                <Button onClick={initiate}  disabled={true}  colorScheme={product.accepted?'green':'gray'} >
                  INITIATE PRODUCT
                </Button>

                <Button  disabled={true}  colorScheme='red' >
                  CANCEL REQUEST
                </Button>

             
             </HStack>

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
   </Box>
  )
}

export default View_Product