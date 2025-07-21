import { Box, HStack,  VStack, textDecoration  , Link} from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link as RouterLink ,   Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Main from './Assistant.jsx.jsx'
import { CiMenuFries } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { IoImagesSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";



function Nav_layout() {
  const navigate = useNavigate();
  const [sidebar , setsidebar] = useState('on');
  const [showhistory , setshowhistory] = useState(false)
  const [page , setpage] = useState('assistant');

  const tryAPI = async function(){
    try{
      const response = await fetch('http://localhost:3000/push' , {
        method:'POST' , 
        headers: {
          'Content-Type': 'application/json'
        },
        
        body : JSON.stringify({number : '0740458924' , amount : 1})
      })

      if (response.ok){
      const data = await response.json();
      console.log(data);
      }
      else{
        console.log('response not ok')
      }
    }
    catch(err){
      console.log('error trying API' , err)
    }
  }
  
  return (
  <>
  {/* <HStack width={'90%'} height={'60px'}  borderBottomWidth={'1px'} borderColor={'black'} mt={'10px'} mb={'10px'} overflow={'auto'}  alignSelf={'center'} >
     <Link  to={'/'} >home</Link>
    </HStack> */}
  
      <Box width = {'98%'} gap={'10px'} height={'100vh'} bg={'blue'}  borderRadius={'15px'}   display={'flex'} flexDirection={'row'}  p={'10px'} overflow={'auto'}  sx={{ '&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
      <VStack  borderRadius={'15px'} bg={'gray.800'}  w={(sidebar == 'off')?'4%':'15%'} h={'100vh'} alignItems={'center'}  sx={{ '&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }} >
        {(sidebar == 'on') &&  
        
       <>
       <Box onClick={()=>setsidebar('off')}  as={'button'}  bg={'black'} width={'65%'}  height={'30px'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'3px'}  >
           <CiMenuFries width={'95%'} height={'95%'} color={'white'} />
        </Box>

       <Link   as={RouterLink} mt={'5px'} mb={'5px'} textAlign={'left'} borderBottomWidth={'1px'} borderBottomColor={'black'}   width={'98%'} h={'35px'} color={'white'}  alignSelf={'center'}  _hover={{textDecoration:'none' , borderBottomColor:'white'}} >Home</Link>
        <Link   as={RouterLink} to={'/'} mt={'5px'} mb={'5px'} textAlign={'left'} borderBottomWidth={'1px'} borderBottomColor={'black'}   width={'98%'} h={'35px'} color={'white'}  alignSelf={'center'}  _hover={{textDecoration:'none' , borderBottomColor:'white'}} >Assistant</Link>
     
      <HStack   width={'98%'} h={'35px'} borderBottomWidth={'1px'}   borderBottomColor={'black'} padding={'3px'}  alignItems={'center'}  justifyContent={'space-between'}  gap={'40px'} >
      <Link   as={RouterLink}  width={'60%'}   mt={'5px'} mb={'5px'} textAlign={'left'}    color={'white'}  alignSelf={'center'}  _hover={{textDecoration:'none' , borderBottomColor:'white'}} >History</Link>
      <RiArrowDropDownFill  width={'209x'} height={'20px'} color='white' size={'xl'}   _hover={{size:'2xl' , color:'blue'}} onClick={()=>setshowhistory(!showhistory)}  />
     
      </HStack>

      {showhistory &&  
        <VStack    bg={'white'}  width={'98%'} minH={'150px'}  maxH={'8009x'}  overflow={'auto'} borderColor={'blue'} borderWidth={'1px'} borderRadius={'15px'} padding={'10px'} >

        </VStack >

      }
       <Link   as={RouterLink}  to={'gallery'}  mt={'5px'} mb={'5px'} textAlign={'left'} borderBottomWidth={'1px'} borderBottomColor={'black'}  width={'98%'} h={'35px'} color={'white'}  alignSelf={'center'}  _hover={{textDecoration:'none' , borderBottomColor:'white'}} >Gallery</Link>
       <Link   as={RouterLink}  onClick={tryAPI}  mt={'5px'} mb={'5px'} textAlign={'left'} borderBottomWidth={'1px'} borderBottomColor={'black'}  width={'98%'} h={'35px'} color={'white'}  alignSelf={'center'}  _hover={{textDecoration:'none' , borderBottomColor:'white'}} >Try API</Link>

       </>
      
        }

        {(sidebar == 'off')  &&  
        
       <>
       
       <Box onClick={()=>setsidebar('on')}  as={'button'}  bg={'black'} width={'65%'}  height={'30px'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} padding={'3px'}  >
           <CiMenuFries width={'95%'} height={'95%'} color={'white'} />
        </Box>

       <CiHome  width={'95%'} height={'95%'} color={'white'}  />
       <RiCustomerServiceLine  onClick={()=>navigate('/')} width={'95%'} height={'95%'} color={'white'}   />
       <IoImagesSharp  onClick={()=>navigate('gallery')}  width={'95%'} height={'95%'} color={'white'} />
       <GoHistory   width={'95%'} height={'95%'} color={'white'} />
       <MdConnectWithoutContact  onClick={tryAPI}  width={'95%'} height={'95%'} color={'white'}/>


       </>
        }
      </VStack>
     
      <Box width={(sidebar == 'off')?'95%':'85%'} h={'100vh'}  borderRadius={'15px'} bg={'gray.700'} overflow={'auto'}  sx={{ '&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
        <Outlet  />
      </Box>
     </Box>
     
  </>
  )
}

export default Nav_layout