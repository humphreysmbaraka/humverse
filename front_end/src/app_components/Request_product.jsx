import { Alert, Box, Divider, HStack, Input, Select, Spinner, Text, Textarea, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { IoDocumentAttach } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import BASE_URL from '../constants/urls';
import { useLocation, useNavigate } from 'react-router-dom';
import { socketcontext } from '../appcontexts/socket';
import { AuthContext } from '../appcontexts/auth';

function Make_request() {
  const location = useLocation();
  const product = location.state?.product || null;
  const mode = location.state?.mode || null;
  const navigate = useNavigate();
  const fileinputref = useRef(null);
  const timeunitref = useRef('');
  const typeref = useRef('');
  const {winwidth , winheight} = useContext(dimensions);
  const [submitting , setsubmitting] = useState(false);
  const [submittingerror , setsubmittingerror] = useState(null);
  const [attachedfiles , setattachedfiles] = useState(product?.attachments || []);   
  const [type , settype] = useState(product?.type || '');
  const [description , setdescription] = useState(product?.description || null);
  const [timeunit , settimeunits] = useState(product?.timeunit || '');
  const [timequantity , settimequantity] = useState(product?.timequantity || 4);
  const [names , setnames] = useState(product?.names || null);
  const [number , setnumber] = useState(product?.number || null);
  const [email , setemail] = useState(product?.email || null)
  const [comitted , setcomitted] = useState(false);
  const {loggedin , admin , user} = useContext(AuthContext);
  const {socket , socketconnected} = useContext(socketcontext);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const mainWidth = useBreakpointValue({ base: '100%', md: '40%' });
  const sideWidth = useBreakpointValue({ base: '0%', md: '25%' });
  const sideWidth2 = useBreakpointValue({ base: '0%', md: '30%' });
  const inputWidth = useBreakpointValue({ base: '90%', md: '65%' });
  const fileContainerWidth = useBreakpointValue({ base: '90%', md: '60%' });
  const buttonWidth = useBreakpointValue({ base: '50%', md: '30%' });

  useEffect(function(){
    console.log('socket on mount' , socket);
  } , [socket])

  useEffect(() => {
    if (timeunitref.current) {
      settimeunits(timeunitref.current.value);
      settype(typeref.current.value);
    }

    console.log(product?`product received  ${JSON.stringify(product)}`:'no product recieved');
    console.log('product' , product);
  }, []);

  
  const editrequest = async function(){
    try{
      console.log(type ,description , timeunit , timequantity , names , number , email , attachedfiles)
       if(!type || type.trim()=='' ||  !description || description.trim()=='' || !timeunit || timeunit.trim()=='' || !timequantity  || !names || names.trim()=='' || !number || number.trim()=='' || !email || email.trim()==''){
       }
       else{
        if(submitting){
        }
        else{
          setsubmitting(true);
          if(attachedfiles.length > 0){
            const body = new FormData();
            body.append('reqid' , product._id)
            body.append('type' , type);
            body.append('description' , description);
            body.append('timeunit' , timeunit);
            body.append('timequantity' , timequantity);
            body.append('names' , names);
            body.append('number' , number);
            body.append('email' , email);
            body.append('user' , user._id);
            attachedfiles.forEach(function(val , index){
              body.append('attachments' ,val);
            })
  
            const upload = await fetch(`${BASE_URL}/edit_request` , {
              method:'PATCH',
              body:body
            })
  
            if(upload.ok){
              setsubmitting(false);
              setsubmittingerror(false);
              console.log('request sent successfully');
              const data = await upload.json();
              socket.current.emit('editt_request' , data , function(){
                console.log('edit request has been received');
              })
              navigate('/main');
            }
            else{
              setsubmitting(false);
              if(String(upload.status).startsWith('4')){
                const feedback = await upload.json();
                setsubmittingerror(feedback.message);
              }
              else{
                const feedback = await upload.json();
                setsubmittingerror('server error');
              }
            }
          }
          else{
            const upload = await fetch(`${BASE_URL}/edit_request` , {
              method:'PATCH',
              headers: {
                'Content-Type' : 'application/json'
              },
              body:JSON.stringify({type , description , timeunit , timequantity , names , number , email , user:user._id , reqid:product._id})
            })
  
            if(upload.ok){
              setsubmitting(false);
              setsubmittingerror(false);
              const data = await upload.json();
              socket.current.emit('edit_request' , data , function(){
                console.log('edit request has been received');
              })
              navigate('/main');
            }
            else{
              setsubmitting(false);
              if(String(upload.status).startsWith('4')){
                const feedback = await upload.json();
                setsubmittingerror(feedback.message);
              }
              else{
                const feedback = await upload.json();
                setsubmittingerror('server error');
              }
            }
          }
        }
       }
    }
    catch(err){
      console.log('error submitting request' , err);
    }
  }

  const commitrequest = async function(){
    try{
      const userConfirmed = confirm('Commit request?');
      if (userConfirmed) {
        setcomitted(true); 
      } else {
        console.log('User cancelled the commit.');
        setcomitted(false); 
      }
    }
    catch(err){
      console.log('error comitting request' , err);
    }
  }

  const addtime = async function(){
    try{
      settimequantity(timequantity + 1);
    }
    catch(err){
      console.log('error increasing time' , err);
    }
  }

  const reducetime = async function(){
    try{
      if(timequantity - 1 <= 0 ){
        settimequantity(1);
      }
      else{
        settimequantity(timequantity - 1);
      }
    }
    catch(err){
      console.log('error increasing time' , err);
    }
  }

  const detatchfile = async function(itemindex){
    try{
     const newfilelist = attachedfiles.filter(function(val , index){
       return index !== itemindex
     })
     setattachedfiles(newfilelist);
    }
    catch(err){
      console.log('error detatching file' , err);
      return;
    }
  }

  const handlefileinput = async function(e){
    try{
     const files = [...e.target.files];
     setattachedfiles((prev)=>[...prev , ...files]);
    }
    catch(err){
      console.log('error handling file selection' , err);
      return;
    }
  }

  const submitrequest = async function(){
    try{
      console.log(type ,description , timeunit , timequantity , names , number , email , attachedfiles)
       if(!type || type.trim()=='' ||  !description || description.trim()=='' || !timeunit || timeunit.trim()=='' || !timequantity  || !names || names.trim()=='' || !number || number.trim()=='' || !email || email.trim()==''){
       }
       else{
        if(submitting){
        }
        else{
          const agree = await confirm('this means you have agreed to the terms and conditions of humverse.dev.you can see them at the services page')
          if (!agree){
            return;
          }
          setsubmitting(true);
          if(attachedfiles.length > 0){
            const body = new FormData();
            body.append('type' , type);
            body.append('description' , description);
            body.append('timeunit' , timeunit);
            body.append('timequantity' , timequantity);
            body.append('names' , names);
            body.append('number' , number);
            body.append('email' , email);
            body.append('user' , user._id);
            attachedfiles.forEach(function(val , index){
              body.append('attachments' ,val);
            })
  
            const upload = await fetch(`${BASE_URL}/send_request` , {
              method:'POST',
              body:body
            })
  
            if(upload.ok){
              setsubmitting(false);
              setsubmittingerror(false);
              console.log('request sent successfully');
              const data = await upload.json();
              
              socket.current.emit('sent_request' , data , function(){
                console.log('request has been received');
              })
              navigate('/main');
            }
            else{
              setsubmitting(false);
              if(String(upload.status).startsWith('4')){
                const feedback = await upload.json();
                setsubmittingerror(feedback.message);
              }
              else{
                const feedback = await upload.json();
                setsubmittingerror('server error');
              }
            }
          }
          else{
            const upload = await fetch(`${BASE_URL}/send_request` , {
              method:'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body:JSON.stringify({type , description , timeunit , timequantity , names , number , email , user:user._id})
            })
  
            if(upload.ok){
              setsubmitting(false);
              setsubmittingerror(false);
              const data = await upload.json();
              socket.current.emit('sent_request' , data , function(){
                console.log('request has been received');
              })
              navigate('/main');
            }
            else{
              setsubmitting(false);
              if(String(upload.status).startsWith('4')){
                const feedback = await upload.json();
                setsubmittingerror(feedback.message);
              }
              else{
                const feedback = await upload.json();
                setsubmittingerror('server error');
              }
            }
          }
        }
       }
    }
    catch(err){
      console.log('error submitting request' , err);
    }
  }

  return (
   <Box width={winwidth} height={winheight} padding={'2px'} bg={'gray.800'} 
        display={'flex'} flexDir={{ base: 'column', md: 'row' }} 
        alignItems={'center'} justifyContent={'center'} paddingBottom={'40px'} overflow={'auto'}>
       
       {/* <VStack width={sideWidth} height={'100%'} 
               borderRightWidth={'1px'} borderRightColor={'white'} 
               display={{ base: 'none', md: 'flex' }} /> */}

       {/* <VStack width={sideWidth2} height={'100%'} 
               borderRightWidth={'1px'} borderRightColor={'white'} 
               display={{ base: 'none', md: 'flex' }} /> */}
 
       <VStack width={'90%'} height={'100%'} paddingLeft={{ base: '0', md: '10px' }} 
               overflow={'auto'} css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        
        <Text color={'white'} fontSize={{ base: 'sm', md: 'md' }}>DESCRIBE YOUR PRODUCT</Text>
        <Text color={'red.500'} fontWeight={'bold'} fontSize={'medium'}>{submittingerror}</Text>

        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'sm', md: 'medium' }} fontWeight={'bold'}>
          SELECT TYPE OF PRODUCT
        </Text>
        
        <Select onChange={(e)=>{settype(e.target.value)}} placeholder={'select type of product you want'} value={type} ref={typeref} 
                width={inputWidth} height={'30px'} borderRadius={'5px'} color={'white'} 
                fontSize={{ base: 'xs', md: 'small' }} >
          <option style={{color:'black'}} value={'website'} >website</option>
          <option style={{color:'black'}} value={'web app'} >web app</option>
          <option style={{color:'black'}} value={'API'} >API</option>
          <option style={{color:'black'}} value={'phone app'} >phone app</option>
          <option style={{color:'black'}} value={'AI product'} >AI product</option>
          <option style={{color:'black'}} value={'mixed'}>a mixture of the categories</option>
          {/* <option style={{color:'black'}} value={'complex ai agent'}>AI agent that can perform defined tasks , eg edit videos , ocuments , etc</option> */}
        </Select>

        <Divider width={'100%'} mt={'10px'} mb={'10px'} />

        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'sm', md: 'medium' }} fontWeight={'bold'}>
          DESCRIPTION
        </Text>
        
        <Textarea  placeholder='describe what you want , eg 
        
        I want a social media web app that allows users to create profiles, post text, images, and videos, and interact with other users through likes, comments, and shares. It should have a news feed that shows updates from friends and followed pages, and support notifications for messages, mentions, and activity. Users should be able to follow each other, join groups, and search for content easily. The app should also include privacy settings, user authentication, and responsive design so it works smoothly on web and  mobile devices.'  value={description} onChange={(e)=>{setdescription(e.target.value)}} 
                  css={{ '&::-webkit-scrollbar': { display: 'none' }}} width={'95%'} bg={'white'} 
                  borderRadius={'15px'} resize={'none'} minH={'400px'} wordBreak={'break-word'} 
                  whiteSpace={'pre-wrap'} overflowWrap={'break-word'} />
   
        <Divider width={'100%'} mt={'10px'} mb={'10px'} />

        <Text color={'white'} fontSize={{ base: 'xs', md: 'small' }} fontWeight={'bold'} textAlign="center">
          attach related document(s) eg logo image , terms and conditions docs , description docs , services  , etc
        </Text>

        <Box as={'button'} mt={'20px'} mb={'20px'} onClick={()=>{fileinputref.current.click()}} 
             borderColor={'white'} borderWidth={'1px'} borderRadius={'10px'} p={'2px'} color={'white'} 
             fontSize={{ base: 'xs', md: 'small' }} fontWeight={'bold'} width={'200px'} 
             display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <HStack width={'100%'} height={'100%'} gap={'5px'}>
            <IoDocumentAttach color='white' size={'20px'} />
            <Input type='file' display={'none'} ref={fileinputref} onChange={(e)=>handlefileinput(e)} multiple />
            <Text color={'white'} fontSize={{ base: 'xs', md: 'small' }} fontWeight={'bold'}>
              attach document(s)/file(s)
            </Text>
          </HStack>
        </Box> 
        
        {(attachedfiles.length > 0) &&  
          <VStack mt={'10px'} mb={'10px'} width={fileContainerWidth} height={'200px'} 
                  borderRadius={'15px'} p={'2px'} bg={'white'}>
            {attachedfiles.map(function(val , itemindex){
              return(
                <HStack width={'90%'} height={'30px'} borderBottomWidth={'1px'} 
                        borderBottomColor={'black'} p={'2px'} justifyContent={'space-between'}  
                        key={itemindex}>
                 <FaFileAlt size={'20px'} color='black' />
                 <Text fontSize={'small'} color={'black'} fontWeight={'light'} 
                       overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" maxWidth="60%">
                   {val.name}
                 </Text>
                 <Box as='button' width={'25px'} height={'25px'} bg={'none'} p={'1px'} 
                      display={'flex'} justifyContent={'center'} alignItems={'center'} 
                      onClick={()=>detatchfile(itemindex)}>
                   <AiFillDelete size={'20px'} color='red' />
                 </Box>
                </HStack>
              )
            })}
          </VStack>
        }
        
        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'sm', md: 'medium' }} fontWeight={'bold'}>
          TIMELINE
        </Text>

        <HStack width={{ base: '95%', md: '80%' }} p={'2px'} alignItems={'center'}>
          <Select ref={timeunitref} value={timeunit} onChange={(e)=>{settimeunits(e.target.value)}} 
                  width={{ base: '50%', md: '55%' }} height={'30px'} borderRadius={'5px'} 
                  color={'white'} fontSize={{ base: 'xs', md: 'small' }}>
            <option style={{color:'black'}} value={'weeks'}>Weeks</option>
            <option style={{color:'black'}} value={'days'}>Days</option>
            <option style={{color:'black'}} value={'months'}>Months</option>
          </Select>

          <HStack width={{ base: '45%', md: '40%' }} alignItems={'center'} justifyContent={'space-around'}>
            <Box as='button' onClick={reducetime} width={'20px'} height={'20px'} 
                 display={'flex'} alignItems={'center'} justifyContent={'center'} p={'1px'} 
                 bg={'black'} borderRadius={'10px'}>
              <FiMinus size={'18px'} color='white' />
            </Box>
            <Textarea value={timequantity} onChange={(e)=>{settimequantity(e.target.value)}} 
                      css={{ '&::-webkit-scrollbar': { display: 'none' }}} bg={'white'} 
                      borderRadius={'10px'} color={'black'} p={'1px'} resize={'none'} 
                      height={'25px'} rows={1} width={'60%'} textAlign="center" />
            <Box as='button' onClick={addtime} width={'20px'} height={'20px'} 
                 display={'flex'} alignItems={'center'} justifyContent={'center'} p={'1px'} 
                 bg={'black'} borderRadius={'10px'}>
              <FaPlus size={'18px'} color='white' />
            </Box>
          </HStack>
        </HStack>

        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'sm', md: 'medium' }} fontWeight={'bold'}>
          CONTACT INFO
        </Text>

        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'xs', md: 'xs' }} fontWeight={'light'}>
          Names
        </Text>
        <Input value={names} onChange={(e)=>{setnames(e.target.value)}} 
               css={{ '&::-webkit-scrollbar': { display: 'none' }}} bg={'white'} 
               borderRadius={'10px'} color={'black'} width={inputWidth} resize={'none'} 
               placeholder='enter name(s)' />

        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'xs', md: 'xs' }} fontWeight={'light'}>
          phone number(active)
        </Text>
        <Input value={number} onChange={(e)=>{setnumber(e.target.value)}} 
               css={{ '&::-webkit-scrollbar': { display: 'none' }}} bg={'white'} 
               borderRadius={'15px'} color={'black'} width={inputWidth} resize={'none'} 
               placeholder='enter phone number' />

        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'} 
              fontSize={{ base: 'xs', md: 'xs' }} fontWeight={'light'}>
          E-mail(active)
        </Text>
        <Input value={email} onChange={(e)=>{setemail(e.target.value)}} 
               css={{ '&::-webkit-scrollbar': { display: 'none' }}} bg={'white'} 
               borderRadius={'10px'} color={'black'} width={inputWidth} resize={'none'} 
               placeholder='enter email' />

        {comitted ? (
          mode && mode=='editting' ? (
            <Box as='button' onClick={editrequest} mt={'10px'} mb={'10px'} borderColor={'white'} 
                 borderWidth={'2px'} height={'45px'} width={buttonWidth} display={'flex'} 
                 flexDirection={'row'} alignItems={'center'} justifyContent={'center'} p={'3px'} 
                 bg={'black'} borderRadius={'10px'} gap={'10px'}>
              <IoMdSend size={'18px'} color='blue' />
              <Text color={'white'} fontSize={{ base: 'xs', md: 'xs' }}>edit request</Text>
              {submitting && <Spinner width={'20px'} height={'20px'} color='white' />}
            </Box>
          ) : (
            <Box as='button' onClick={submitrequest} mt={'10px'} mb={'10px'} borderColor={'white'} 
                 borderWidth={'2px'} height={'45px'} width={buttonWidth} display={'flex'} 
                 flexDirection={'row'} alignItems={'center'} justifyContent={'center'} p={'3px'} 
                 bg={'black'} borderRadius={'10px'} gap={'10px'}>
              <IoMdSend size={'18px'} color='blue' />
              <Text color={'white'} fontSize={{ base: 'xs', md: 'xs' }}>send request</Text>
              {submitting && <Spinner width={'20px'} height={'20px'} color='white' />}
            </Box>
          )
        ) : (
          <Box as='button' mt={'10px'} mb={'10px'} onClick={commitrequest} borderColor={'white'} 
               borderWidth={'2px'} height={'45px'} width={buttonWidth} display={'flex'} 
               flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'} 
               p={'3px'} bg={'black'} borderRadius={'10px'} gap={'10px'}>
            <MdOutlineVerified size={'18px'} color='white' />
            <Text color={'white'} fontSize={{ base: 'xs', md: 'xs' }}>commit request</Text>
            {submitting && <Spinner width={'20px'} height={'20px'} color='white' />}
          </Box>
        )}

        {(mode && mode=='editting') &&  
          <Box as='button' mt={'10px'} mb={'10px'} borderColor={'white'} borderWidth={'2px'} 
               height={'45px'} width={buttonWidth} display={'flex'} flexDirection={'row'} 
               alignItems={'center'} justifyContent={'center'} p={'3px'} bg={'blue'} 
               borderRadius={'10px'} gap={'10px'} onClick={() => navigate(-1)}>
            <Text color={'white'} fontSize={{ base: 'xs', md: 'xs' }}>BACK TO PRODUCT</Text>
          </Box>
        }

        <Text color={'red.500'} fontWeight={'bold'} fontSize={'medium'}>{submittingerror}</Text>

       </VStack>
   </Box>
  )
}

export default Make_request