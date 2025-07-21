import React, { useContext, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

function Works_in_progress() {
    const {winwidth , winheight} = useContext(dimensions);
    const [clients , setclients] = useState(null);
    const [selectedwork , setselectedwork]  = useState(null)
  return (
   <Box width={winwidth} height={winheight}  bg={'gray.800'} padding={'4px'}  overflow={'hidden'} >
    <HStack  width={'90%'} height={'100%'} gap={'40px'} alignItems={'center'}  justifyContent={'space-between'} overflow={'hidden'} >
        <VStack width={'30%'} height={'100%'}  gap={'20px'} alignItems={'center'} position={'relative'}   >
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

        <VStack width={'65%'} p={'5px'} bg={'black'} height={'100%'} overflow={'hidden'} >
        <Tabs variant="soft-rounded" colorScheme="whiteAlpha"  width={'98%'} h={'100%'} alignItems={'center'} borderColor={'white'} borderWidth={'1px'} p={'4px'} overflow={'hidden'} >
        <TabList width={'90%'}  alignSelf={'center'} ml={'auto'} mr={'auto'}    justifyContent={'space-between'}  >
          <Tab  color={'white'} _selected={{ bg: 'whiteAlpha.300' }}>Overview</Tab>
          <Tab  color={'white'} _selected={{ bg: 'whiteAlpha.300' }}>SEND UPDATES</Tab>
          <Tab  color={'white'} _selected={{ bg: 'whiteAlpha.300' }}>ALL ACTIVITIES</Tab>
        </TabList>

        <TabPanels    height={'97%'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
          <TabPanel   >
            {selectedwork ?
            <>
            
            </>    
        :
        <></>
        }
          </TabPanel>
          <TabPanel>
            <p>Here are your projects.</p>
          </TabPanel>
          <TabPanel>
            <p>Reach out to us!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
        </VStack>
  
     
    </HStack>
   </Box>
  )
}

export default Works_in_progress