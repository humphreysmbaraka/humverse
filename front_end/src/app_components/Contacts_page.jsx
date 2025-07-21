import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

function Contacts() {

  const [winheight , setwinheight] = useState(window.innerHeight);
  const [winwidth , setwinwidth] = useState(window.innerWidth);

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
   <Box  width={winwidth}   height={winheight} padding={'4px'} display={'flex'} flexDirection={'column'}  bg={'black'} >


<Text alignSelf={'center'} fontSize={'xxx-large'} color={'white'}  >OUR CONTACTS</Text>

       <Box  mt={'10px'} mb={'10px'} h={'200px'}  bg={'gray.800'}  borderRadius={'15px'} display={'flex'} flexDirection={'column'} gap={'10px'} p={'5px'} >
        <Text fontSize={'medium'} color={'white'}  >CALL US ON</Text>
         <Text fontSize={'large'} color={'white'} fontWeight={'bold'} >0740458924</Text>

        <Text fontSize={'medium'} color={'white'}  >WHATSAPP</Text>
         <Text fontSize={'large'} color={'white'} fontWeight={'bold'} >0740458924</Text>
       </Box>

       <Box  mt={'10px'} mb={'10px'} h={'200px'}  bg={'gray.800'}  borderRadius={'15px'} display={'flex'} flexDirection={'column'} gap={'10px'} p={'5px'} >
        <Text fontSize={'medium'} color={'white'}  >E-Mail</Text>
         <Text fontSize={'large'} color={'white'} fontWeight={'bold'} >humphreyshazam66@gmail.com</Text>

        <Text fontSize={'medium'} color={'white'}  >E-Mail 2</Text> 
        <Text fontSize={'large'} color={'white'} fontWeight={'bold'} >humphreycasual@gmail.com</Text>
       </Box>
       {/* <Box  mt={'10px'} mb={'10px'} h={'200px'}  bg={'gray.800'}  borderRadius={'15px'}  ></Box>
       <Box  mt={'10px'} mb={'10px'} h={'200px'}  bg={'gray.800'}  borderRadius={'15px'}  ></Box> */}

       
   </Box>
  )
}

export default Contacts