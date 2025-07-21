import React, { useContext } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { BsDot } from "react-icons/bs";
import { Motionbox, Motiontabs, Motiontext } from '../motion_components';

function Pricing() {
    const {winwidth , winheight} = useContext(dimensions);
  return (
   <Motionbox  width={winwidth}  height={winheight} p={'5px'} bg={'gray.800'} overflow={'auto'}
   initial={{x:3000}}
   animate={{x:0}}
   transition={{duration:1.5 , ease:'easeIn' , delay:0}}
   exit={{x:-3000 , transition:{
    duration:0.5 , ease:'easeIn'
  }}}
   >
    <Motiontext width={'80%'} textAlign={'center'} mt={'20px'} mb={'10px'} ml={'auto'} mr={'auto'} color={'blue.400'}  fontSize={'x-large'} fontWeight={'bold'} 
    
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , ease:'easeIn' , delay:2}}
    
    >OUR SERVICES PACKAGES</Motiontext>
    <Motiontext   width={'80%'} textAlign={'center'} mt={'20px'} mb={'10px'} ml={'auto'} mr={'auto'} color={'white'}  fontSize={'xs'} fontWeight={'bold'}  
      initial={{x:1000}}
      animate={{x:0}}
      transition={{duration:1 , ease:'easeIn' , delay:2}}
    
    >there is a plan for everyione , you can also get a custom plan , tailored just for you!</Motiontext>
    <Motiontabs  width={'100%'} 
    
    initial={{y:1000}}
    animate={{y:0}}
    transition={{duration:1.5 , ease:'easeIn' , delay:2}}
    
    >
            <TabList width={'100%'} bg={'white'} p={'4px'} borderTopRadius={'10px'} gap={'20px'}  >
                <Tab color={'blue'} alignItems={'center'}   >SIMPLE WEBSITES</Tab>
                <Tab color={'blue'} alignItems={'center'}   >AUTH WEBSITES</Tab>
                <Tab color={'blue'} alignItems={'center'}   >WEB APPS</Tab>
                <Tab color={'blue'} alignItems={'center'}   >PHONE APPS</Tab>
                <Tab color={'blue'} alignItems={'center'}   >AI PRODUCTS</Tab>
            </TabList>
            <TabPanels>
                <TabPanel display={'flex'} flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'}  >
                <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >SIMPLE WEBSITES</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >Here , no authentication is needed , the user just opens the website , and is able to see what in the website , with no need to log in , create an account or any form of authentication</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>




             




               
             




























          </HStack>
                </TabPanel>

                <TabPanel display={'flex'}  flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
                <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >AUTH WEBSITES</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >Here ,  authentication is needed. For the user to be able to access the contents of the website , they must sign up or log in.This means that the site will be secured through authentication</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>



             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >REGISTRATIONS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>
          </HStack>
                </TabPanel>
                <TabPanel display={'flex'}  flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
                <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >WEB APPS</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >These are web versions of regular apps , but can also be stand alone(with no phone app version).here users log in , and are able to access services , products , entertainment , communicate with one another ,etc. They usually also have a phone app version. Here are common examples and their pricing</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >E - COMMERCE</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >SOCIAL NETWORKING</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >SERVICES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>


          </HStack>
                </TabPanel>
                <TabPanel display={'flex'}  flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
                <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >PHONE APPS</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >These are web versions of regular apps.here users log in , and are able to access services , products , entertainment , communicate with one another ,etc. they usually also have a phone app version</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>




             




               
             




























          </HStack>
                </TabPanel>
                <TabPanel display={'flex'}  flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
                <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >AI AGENTS</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >These are web versions of regular apps.here users log in , and are able to access services , products , entertainment , communicate with one another ,etc. they usually also have a phone app version</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 {/* <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                  */}

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 {/* list of categories */}
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>




             




               
             




























          </HStack>
                </TabPanel>
                {/* <TabPanel display={'flex'}  flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} ></TabPanel>
                <TabPanel display={'flex'}  flexDirection={'column'}   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} ></TabPanel> */}

            </TabPanels>
        </Motiontabs>




















{/* 
    <VStack   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
          <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >SIMPLE WEBSITES</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >Here , no authentication is needed , the user just opens the website , and is able to see what in the website , with no need to log in , create an account or any form of authentication</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
              
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>




             




               
             




























          </HStack>
    </VStack>






    <VStack   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
          <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >AUTH WEBSITES</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >Here ,  authentication is needed. For the user to be able to access the contents of the website , they must sign up or log in.This means that the site will be secured through authentication</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

               
                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
              
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

               

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
            
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>



             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >REGISTRATIONS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
              
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>
          </HStack>
    </VStack>









     


     <VStack   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
          <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >WEB APPS</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >These are web versions of regular apps , but can also be stand alone(with no phone app version).here users log in , and are able to access services , products , entertainment , communicate with one another ,etc. They usually also have a phone app version. Here are common examples and their pricing</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >E - COMMERCE</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >SOCIAL NETWORKING</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
              
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >SERVICES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
              
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                 
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>


          </HStack>
    </VStack>
















     <VStack   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
          <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >PHONE APPS</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >These are web versions of regular apps.here users log in , and are able to access services , products , entertainment , communicate with one another ,etc. they usually also have a phone app version</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
         
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                
                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

               

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>




             




               
             




























          </HStack>
    </VStack>



















 


 <VStack   width={'100%'}   gap={'20px'} mt={'10px'} p={'4px'} alignItems={'normal'}  bg={'black'} borderRadius={'15px'} >
          <Text color={'white'} fontSize={'larger'} fontWeight={'light'} letterSpacing={'2px'}  mt={'10px'} mb={'10px'} >AI AGENTS</Text>
          <Text color={'white'} fontSize={'sm'} fontWeight={'light'}   mt={'2px'} mb={'10px'} >These are web versions of regular apps.here users log in , and are able to access services , products , entertainment , communicate with one another ,etc. they usually also have a phone app version</Text>
          <HStack  width={'98%'} p={'5px'} flexWrap={'wrap'} gap={'25px'}  >
             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ADVERTISING/DISPLAYS</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
              
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
             
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>

















             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >ARTICLES/READ ONLY</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                
                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
               
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>





             <VStack width={'23%'} minH={'750px'} maxH={'900px'} borderWidth={'1px'} borderColor={'white'} borderRadius={'10px'} alignItems={'center'} p={'4px'} >
                 <Text  color={'blue'}  fontSize={'larger'} fontWeight={'bold'} >GALLERIES</Text>
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >PRODUCT DESCRIPTION</Text>
                 <Textarea width={'95%'} bg={'gray.800'}   resize={'none'} whiteSpace={'pre-wrap'} wordBreak={'break-word'}  color={'white'} fontSize={'small'}  />
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >USES</Text>
                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Advertising</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Awareness</Text>
                 </HStack>

                 <HStack mt={'5px'} mb={'5px'} width={'98%'} height={'30px'} borderBottomColor={'white'} borderBottomWidth={'1px'} gap={'10px'} >
                 <BsDot size={'20px'} color='white' />
                 <Text  color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >Portfolio</Text>
                 </HStack>
                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >CHARGES</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text as={'span'} color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >1 - 3 pages  <Text as={'span'} color={'red'} >500</Text> </Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>


                 <Text   color={'white'}  fontSize={'xxs'} fontWeight={'light'}  alignSelf={'flex-start'} textAlign={'left'} >DEPLOYMENT HOSTING AND MAINTAINANCE / MANAGEMENT</Text>
                
                 <VStack width={'95%'} padding={'2px'} bg={'white'}  borderRadius={'10px'} maxH={'350px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >advertising/awareness</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >you just want a page(s) to advertise or display something</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>


                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 <Text  color={'black'}  fontSize={'medium'}   alignSelf={'flex-start'} textAlign={'left'} >managed content</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >a platform tou can be uploading items to and also deleting , updating etc eg a gallery , portfolio , etc</Text>
                 <Text  color={'black'}  fontSize={'xxs'} fontWeight={'light'}  >price  1</Text>

                 

                 </VStack>
             </VStack>




             




               
             




























          </HStack>
    </VStack> */}








   </Motionbox>
  )
}

export default Pricing