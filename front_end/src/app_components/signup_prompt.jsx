import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Input, Avatar, VStack, Button, Spinner} from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Motionbox } from '../motion_components';
import { AnimatePresence } from 'framer-motion';
import { IoDocumentAttach } from "react-icons/io5";
// import {dotenv} from 'dotenv'
import BASE_URL from '../constants/urls';
import { useNavigate } from 'react-router-dom';
import { socketcontext } from '../appcontexts/socket';
import { AuthContext } from '../appcontexts/auth';


function Signup_prompt({width  , height}) {
 const navigate = useNavigate()
 const [username , setusername] = useState(null);
 const [password , setpassword] = useState(null);
 const [email , setemail] = useState(null);
 const [image , setimage] = useState(null);
 const [activetab , setactivetab] = useState(0);
 const [submitting , setsubmitting] = useState(false);
 const [winwidth , setwinwidth] = useState(window.innerWidth);
const [winheight , setwinheight] = useState(window.innerHeight);
const [submissionerror , setsubmissionerror] = useState(null) 
const [previewurl , setpreviewurl] = useState(null)
// const [picture , setpicture] = useState(null);
const picinput = useRef(null);
const {socket ,socketconnected} = useContext(socketcontext);
const {checkauthstatus} = useContext(AuthContext);


useEffect(function(){
   if(image){
    const url = URL.createObjectURL(image);
    setpreviewurl(url);
   }
} , [image])

 const submitcredentials = async function(){
  
  try{

     console.log('submitting' , activetab)
    
    if(activetab == 0){
      console.log('logging in' , email , password);

      if(!email || email.trim()=='' || !password || password.trim()==''){

      }
      else{
        setsubmitting(true);
        const upload = await fetch(`${BASE_URL}/log_in` , {
          method:'POST',
          credentials:'include',
          headers:{
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify({email , password})
        })

        if(upload.ok){
          setsubmitting(false);
          checkauthstatus();
           
           const feedback = await upload.json();
           const user = feedback.user;
           if(user.admin){
            socket.current.emit('register_amin' , {data:feedback.user._id} , function(){
              console.log('socket has been registered');
             })

           }
           else{
            socket.current.emit('register' , {data:feedback.user._id} , function(){
              console.log('socket has been registered');
             })
           }
       
           setsubmissionerror(false)
          //  navigate('/main')

        }
        else{
          setsubmitting(false);
        
          if(String(upload.status).startsWith('4')){
            const feedback = await upload.json();
            setsubmissionerror(feedback.message);
          }
          else{
            setsubmitting('error occured during submission , try again');
          }
         
        }
      }

    }
    else if(activetab == 1){
      console.log('creating an account' , username , password , email , image)
      if(!username || username.trim()=='' || !email || email.trim()=='' || !password || password.trim()=='' ){ 
          setsubmissionerror('missing or malformed credentials')
      
       

      }
      else{
        setsubmitting(true);
        if(image){
          const details = new FormData();
          details.append('picture' , image);
          details.append('username' , username);
          details.append('password' , password);
          details.append('email' , email);
          const upload = await fetch(`${BASE_URL}/sign_up` , {
            method:'POST',
            credentials:'include',
            body:details
          })
  
          if(upload.ok){
             const feedback = await upload.json();
             setsubmitting(false);
             setsubmissionerror(null)
            //  navigate('/main')
             checkauthstatus();
             const user = feedback.user;
             if(user.admin){
              socket.current.emit('register_admin' , {data:feedback.user._id} , function(){
                console.log('socket has been registered');
               })
             }
             else{
              socket.current.emit('register' , {data:feedback.user._id} , function(){
                console.log('socket has been registered');
               })
             }
           
  
          }
          else{
            console.log('server error')
            setsubmitting(false);
            if(String(upload.status).startsWith('4')){
              const feedback = await upload.json();
              setsubmissionerror(feedback.message)
            }
          }
        }
        else{
          const upload = await fetch(`${BASE_URL}/sign_up` , {
            method:'POST',
            credentials:'include',
            headers:{
              'Content-Type' : 'application/json'
            },
            body:JSON.stringify({username ,  email , password})
          })
  
          if(upload.ok){
            setsubmitting(false);
             const feedback = await upload.json();
             setsubmissionerror(false)
             checkauthstatus();
             const user = feedback.user;
             if(user.admin){
              socket.current.emit('register_amin' , {data:feedback.user._id} , function(){
                console.log('socket has been registered');
               })
             }
             else{
              socket.current.emit('register' , {data:feedback.user._id} , function(){
                console.log('socket has been registered');
               })
             }
            
  
          }
          else{
            if(String(upload.status).startsWith('4')){
              const feedback = await upload.json();
              setsubmissionerror(feedback.message);
              setsubmitting(false)
            }
            else{
              setsubmitting(false)
              setsubmissionerror('server error');
              console.log('server error')
            }
           
          }
        }
        
      }
     
    }
  }
  catch(err){
    console.log('error submitting credentials' , err);
    setsubmitting(false);
  }
 }
  

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





const handlefileinput = async function(e){
  try{
   console.log('a file has been selected' , e.target.files);
   const file = e.target.files[0];
   console.log('files' ,file);
   setimage(file);
  }
  catch(err){
    console.log('error handling file selection' , err);
    return;
  }
}


  return (

  
   <Motionbox    width={width} height={height} alignSelf={'center'} margin={'auto'} padding={'4px'} borderRadius={'15px'} bg={'gray.500' } 
   
   >
    <Tabs borderWidth={'1px'} borderColor={'white'} onChange={(index)=>{setactivetab(index)}}  width={'98%'} height={'98%'}  alignSelf={'center'}  borderRadius={'15px'}  p={'2px'} margin={'auto'}>
      <TabList  width={'100%'} alignSelf={'center'} borderBottomWidth={'1px'} borderBottomColor={'black'} borderTopRadius={'15px'} bg={'none'} gap={'10px'} alignItems={'center'} justifyContent={'space-between'}  p={'2px'} >
        <Tab width={'40%'} color={'white'} fontWeight={'bold'} >LOGIN</Tab>
        <Tab width={'40%'} color={'white'}  fontWeight={'bold'}  >CREATE ACCOUNT</Tab>
      </TabList>

      <TabPanels  width={'100%'} minHeight={'90%'} borderBottomRadius={'15px'} bg={'none'} p={0} overflow={'hidden'}  >
      <TabPanel width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'} >

      <Text  color={'red.500'}  fontWeight={'light'} width={'90%'}  >{submissionerror}</Text>

          <HStack  width={'100%'} alignItems={'center'} justifyContent={'space-around'} gap={'40px'}  >
        <Text  width={'20%'} color={'white'}  fontWeight={'bold'} >E-Mail</Text>
        <Input  onChange={(val)=>{setemail(val.target.value)}}  width={'75%'} bg={'white'} borderRadius={'10px'} placeholder='enter email'   ></Input>
          </HStack>

          <HStack  width={'100%'} alignItems={'center'} justifyContent={'space-around'} gap={'40px'}  >
        <Text  color={'white'}  fontWeight={'bold'} width={'23%'}  >Password</Text>
        <Input  onChange={(val)=>{setpassword(val.target.value)}}   width={'75%'} bg={'white'} borderRadius={'10px'}  placeholder='enter your password'></Input>
          </HStack>

          <Box onClick={submitcredentials} as='button'  width={'40%'} p={'2px'} borderWidth={'1px'} borderRadius={'10px'} borderColor={'white'} color={'white'} fontSize={'medium'} fontWeight={'bold'}   >LOGIN</Box>

          {submitting  && 
            <Spinner  width={'20px'} height={'20px'} color='white'  />
           } 
        </TabPanel>


        <TabPanel width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'} >

        <Text  color={'red.500'} fontSize={'small'}  fontWeight={'light'} width={'98%'}  >{submissionerror}</Text>

        <Avatar  width={'80px'}   height={'80px'}  borderColor={'white'} borderWidth={'2px'} src={previewurl} />
         {
          image &&
          <Text color={'white'} fontSize={'sm'} fontWeight={'bold'} >{image.name}</Text>
         }
        <VStack   height={'100%'} gap={'5px'} >
          <Button  onClick={()=>{picinput.current.click()}} borderColor={'white'}  borderWidth={'1px'}  borderRadius={'10px'}  p={'1px'} width={'25px'} height={'25px'}  bg={'transparent'}  >
          <IoDocumentAttach color='white' size={'20px'}   />
          </Button>
       
        <Text color={'white'} fontSize={'small'} fontWeight={'bold'} >select profile picture (optional)</Text>
        <Input type='file'   display={'none'} ref={picinput}  onChange={(e)=>handlefileinput(e)} />

        </VStack>

        <HStack  width={'100%'} alignItems={'center'} justifyContent={'space-around'} gap={'40px'}  >
        <Text  color={'white'}  fontWeight={'bold'} width={'25%'}  >Username</Text>
        <Input   onChange={(val)=>{setusername(val.target.value)}}  width={'70%'} bg={'white'} borderRadius={'10px'} placeholder='enter username'   ></Input>
          </HStack>

          <HStack  width={'100%'} alignItems={'center'} justifyContent={'space-around'} gap={'40px'}  >
        <Text  color={'white'}  fontWeight={'bold'} width={'25%'}  >E-Mail</Text>
        <Input   onChange={(val)=>{setemail(val.target.value)}}  width={'70%'} bg={'white'} borderRadius={'10px'} placeholder='enter your email'   ></Input>
          </HStack>

          <HStack  width={'100%'} alignItems={'center'} justifyContent={'space-around'} gap={'40px'}  >
        <Text color={'white'}  fontWeight={'bold'}  width={'25%'}  >Password</Text>
        <Input    onChange={(val)=>{setpassword(val.target.value)}} p={'1px'}  width={'70%'} bg={'white'} borderRadius={'10px'}  placeholder='enter any password'></Input>
          </HStack>
            <HStack width={'75%'} justifyContent={'center'} >
            <Box as='button' onClick={submitcredentials}  width={'40%'} p={'2px'} borderWidth={'1px'} borderRadius={'10px'} borderColor={'white'}  color={'white'}     >SUBMIT</Box>
 {submitting  && 
 <Spinner  width={'20px'} height={'20px'} color='white'  />
           } 
            </HStack>
       
        </TabPanel>
      </TabPanels>
    </Tabs>
   </Motionbox>
  
  )
}

export default Signup_prompt