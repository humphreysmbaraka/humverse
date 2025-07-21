import { Box, HStack, Icon, Image, Input, InputGroup, InputRightElement, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoMdSend } from "react-icons/io";
import IP_Address from '../constants/IP_Address';
import Navbar from './Navigator_layout';




function Assistant() {


  

  const [task , settask] = useState(null);
  const [response , setresponse] = useState(null);


  // useEffect(function{
       
  // } , [response])

  const handleinput = async function(val){
    try{
     console.log(val);
     settask(val);
     console.log('task set');
    }
    catch(err){
      console.log('error setting up task' , err);
    }
  }

  const sendtask = async function(){
    try{
     console.log('clicked');
     if(!task || task ==''){

     }
     else{
      const feedback = await fetch(`http://localhost:3000/chat` , {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({ task })
      })

      if (feedback.ok){
        // console.log('feedback received');
        const info = await feedback.json();
        console.log('info' , info)
        const text = info.reply;
        setresponse(text);
      }
     }
    }
    catch(err){
      console.log('error sending taks' , err);
    }
  }


  return (

  <>
    
    
    <Box   width={'100%'}  flex={1}   height={'100%'} bg={'blue.700'} borderRadius={'15px'} padding={'2px'} margin={'auto'}  overflow={'auto'} display={'flex'}  flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
 
    <HStack flexWrap={'wrap'}  bg={'white'} width={'98%'} height={'80%'} borderRadius={'10px'} padding={'2px'}  mt={'10px'} mb={'10px'}  overflow={'hidden'} alignItems={'center'} >
    {/* {pictures.length > 0 &&    
       
       pictures.map(function(val , index){
         return (
           <Image  src={val} key={index} />
         )
       })
 
    } */}
 
    {response &&  
       
       <Textarea   width={'45%'}  minH={'150px'} borderRadius={'15px'} p={'5px'} bg={'blue.200'}  value={response}  />
    
    }
 
    </HStack>
  
 
    <VStack  width={'80%'} padding={'2px'} borderRadius={'15px'} bg={'gray'}  mt={'10px'} mb={'10px'}  p={'4px'}  >
     
     <Text  color={'white'}  fontSize={'larger'} letterSpacing={'2px'}   mt={'10px'}  mb={'25px'}    >How Can I Help You</Text>
     <InputGroup   width={'60%'}>
     <Input minHeight={'40px'}  maxHeight={'none'} onChange={(e)=>handleinput(e.target.value.trim())} borderRadius={'15px'}  width={'100%'}  bg={'white'} border={'none'}  outline={'none'}     _focus={{boxShadow: "none",borderColor: "transparent",outline: "none"}}    /> 
     <InputRightElement  width={'5%'} position={'absolute'} right={'15px'}  padding={'1px'} >
     <HStack   height={'35px'} width={'95%'} >
      <Box   onClick={sendtask}    as={'button'}   width={'20px'} height={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'1px'}      >
      <IoMdSend  color='black' size={'90%'}   />
       </Box>     
     </HStack>
     
     </InputRightElement>
     
     </InputGroup>
 
    </VStack>
 
    </Box>
  
  </>
  )
}

export default Assistant