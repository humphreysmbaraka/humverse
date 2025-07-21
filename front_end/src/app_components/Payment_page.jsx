import React, { useContext } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { HStack, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react';
import { SiVisa } from "react-icons/si";
function Payment_page({width , height}) {
  const {winwidth , winheight} = useContext(dimensions);

  return (
   <Tabs  width={ width || winwidth*0.4} height={height || winheight*0.7}  borderRadius={'15px'} borderColor={'black'} borderWidth={'2px'} bg={'gray.800'} paddingBottom={'10px'}  >
    <TabList alignSelf={'center'} width={'95%'}  borderTopRadius={'10px'} bg={'white'}  gap={'20px'} ml={'auto'} mr={'auto'} >
         <Tab width={'45%'} p={'2px'} color={'green'} fontSize={'medium'} fontWeight={'bold'}  > M-PESA</Tab>
         <Tab width={'45%'} p={'2px'} color={'gray'} fontSize={'medium'} fontWeight={'bold'}   >
         <SiVisa  alignSelf={'center'} color='gray' size={'45px'}   />
         </Tab>
    </TabList>
    <TabPanels  width={'80%'}  borderWidth={'1px'}  borderRadius={'10px'} borderColor={'blue'} h={'90%'} mt={'10px'} mb={'10px'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} p={'4px'} paddingBottom={'10px'} >
      <TabPanel  width={'85%'} height={'90%'} p={'4px'} display={'flex'} flexDir={'column'} gap={'15px'} >
         <HStack  width={'90%'} p={'2px'}   alignItems={'center'} justifyContent={'center'} alignSelf={'center'} >
         <Text color={'white'} fontSize={'medium'} fontWeight={'light'} >safaricom</Text>
          <Text color={'green'}  fontSize={'xl'} fontWeight={'bold'} >M-pesa</Text>
         </HStack>

         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} >enter phone number (required)</Text>
         <Textarea css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'25px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='enter a valid safarocom number'      />


         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} >enter amount (required)</Text>
         <Textarea css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'30px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='should not exceed 220,000'      />
      </TabPanel>


      <TabPanel  width={'85%'} height={'90%'} p={'4px'} display={'flex'} flexDir={'column'} gap={'15px'} >
         <HStack  width={'90%'} p={'2px'}   alignItems={'center'} justifyContent={'center'} alignSelf={'center'} ml={'auto'} mr={'auto'} >
         <SiVisa  alignSelf={'center'} color='white' size={'80px'} ml={'auto'} mr={'auto'} />
         </HStack>

           

         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} >enter card number (required)</Text>
         <Input css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'25px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='enter a valid safarocom number'      />


         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} > enter card expiry date (required)</Text>
         <Input css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'30px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='should not exceed 220,000'      />


         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} > enter card CVC (required)</Text>
         <Input css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'30px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='should not exceed 220,000'      />

         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} > enter name on card (required)</Text>
         <Input css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'30px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='should not exceed 220,000'      />

         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} > country (required)</Text>
         <Input css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'30px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='should not exceed 220,000'      />


         <Text  color={'white'} fontSize={'small'} alignSelf={'flex-start'} textAlign={'left'} fontWeight={'bold'} > postal code (required)</Text>
         <Input css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  rows={1} resize={'none'} height={'30px'} width={'60%'} bg={'white'} borderRadius={'10px'}  placeholder='should not exceed 220,000'      />

        
         
      </TabPanel>
    </TabPanels>
   </Tabs>
  )
}

export default Payment_page

