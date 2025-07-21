import React, { useContext, useState } from 'react'
import { dimensions } from '../CONTEXTS/dimensions'
import { Avatar, Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

function Accepted_requests() {
    const {winwidth , winheight} = useContext(dimensions);
    const [clients , setclients] = useState(null);
    const [selectedclient , setselectedclient]  = useState(null)
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
css
             {!selectedclient  &&   
<>
             {/* <Avatar width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} />
             <Text mt={'15px'} mb={'15px'} color={'white'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}

             <Tabs  width={'90%'} height={'40px'} bg={'white'} borderTopRadius={'10px'} p={'2px'}  >
                <TabList  justifyContent={'space-between'} >
                    <Tab color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PROFILE</Tab>
                    <Tab color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >REQUESTS</Tab>
                    <Tab color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PRODUCTS</Tab>
                </TabList>
                <TabPanels  mt={'10px'} width={'90%'} height={'700px'} borderRadius={'10px'} bg={'white'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >
                    <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} />
                    <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                    <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                    <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                    </TabPanel>

                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >
                    <Text color={'black'}  fontSize={'larger'} fontWeight={'bold'} >CLIENT'S REQUESTS WILL BE DISPLAYED HERE</Text>

                    </TabPanel>


                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >
                    <Text color={'black'}  fontSize={'larger'} fontWeight={'bold'} >CLIENT'S PRODUCTS WILL BE DISPLAYED HERE</Text>

                    </TabPanel>
                </TabPanels>
             </Tabs>
             </>
             }
        </VStack>
    </HStack>
   </Box>
  )
}

export default Accepted_requests