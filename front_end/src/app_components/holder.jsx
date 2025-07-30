import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import landing from '../assets/landing.png'
import Signup_prompt from './signup_prompt';
import { Navigate, useNavigate } from 'react-router-dom';
import {Motionbox, Motionbutton , Motionhstack, Motionimage} from '../motion_components';
import { AnimatePresence, useCycle } from 'framer-motion';




function Landing() {

  const variants = {
    enlarged: { scale: 1.2, transition: { duration: 1, delay:2, repeat:10 , ease:'easeIn' , repeatType: "reverse", } },
    shrunk: { scale: 1, transition: { duration: 1 , delay:2 , repeat:10 , ease:'easeIn' , repeatType: "reverse", } },
  };
  
  const [showauthform , setshowauthform] = useState(false);
  const navigate = useNavigate();
  const [form , setform] = useCycle('hide' , 'show');

  const authformvariants = {
    initial : {
      x:1500,
      transition:{duration:1 , ease:'easeInOut'}
    },

    show:{
      x:0,
      transition:{duration:1 , ease:'easeInOut'}
    },

    hide:{
      x:1500,
      transition:{duration:1 , ease:'easeInOut'}
    }

  }
  

  const buttonspositionvariant = {
    initial : {
      y:0 , transition:{duration:0.5 , ease:'easeInOut'}
    },
    then: {
      y:50 , transition:{duration:0.5 , ease:'easeInOut'}
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

    const [winwidth , setwinwidth] = useState(window.innerWidth);
    const [winheight , setwinheight] = useState(window.innerHeight);
    const textboxref = useRef(null)

    

  return (
   <Motionbox position={'relative'}  width={winwidth} height={winheight} overflow={'hidden'}  bg={'gray.800'} 
    
   exit={{x:-3000 , transition:{
    duration:0.5 , ease:'easeIn'
  }}}
   >
    <Motionimage zIndex={0} width={'100%'} height={'100%'} src={landing}  objectFit={'cover'}
    initial={{y:1000 , scale:0.5}}
    animate={{y:0 , scale:1}}
    transition={{y:{delay:0.5 , duration:0.5} , scale:{delay:1 , duration:0.5}}}
   
    ></Motionimage>

   
   <Motionhstack zIndex={1}  opacity={1}   ml={'20px'}  position={'absolute'}  top={winheight/2} bottom={winheight/8} p={'15px'  }
    initial={{ opacity: 0, x: 1500 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{delay:1 ,  duration: 2.5 }}


   >

   <VStack   width={'400px'} p={'15px'} >
    <Text fontSize={'xxx-large'}  color={'white'}>WELCOME TO HUMVERSE</Text>
    <Text fontSize={'x-large'} color={'white'} >JUST DESCRIBE YOUR PRODUCT , AND WE WILL MAKE IT A REALITY</Text>

   
    </VStack>

    <Motionhstack width={'60%'} p={'2px'} alignItems={'center'} justifyContent={'space-around'} 
    variants={showauthform?buttonspositionvariant : undefined}
    initial='initial'
    animate={showauthform?'then':'initial'}
    
    >
        <Motionbutton  _hover={{bg:'none'}}  onClick={()=>{setshowauthform(!showauthform)}} bg={'none'}  width={'40%'} height={'55px'} borderRadius={'15px'} borderColor={'white'} borderWidth={'1px'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'x-small'}  color={'white'} fontWeight={'bold'} 
        variants={variants}
        initial='enlarged'
        animate='shrunk'
        
        >LOG IN / SIGN UP</Motionbutton>


        <Motionbutton _hover={{bg:'none'}}  onClick={()=>navigate('/main')} bg={'none'}  width={'40%'} height={'55px'} borderRadius={'15px'} borderColor={'white'} borderWidth={'1px'} p={'4px'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'small'}  color={'white'}   
        variants={variants}
        initial='shrunk'
        animate='enlarged'
        
        >PREVIEW PLATFORM</Motionbutton>
    </Motionhstack>

   

   </Motionhstack>
   <AnimatePresence mode='wait' >
   {showauthform && 
  
    <Motionbox    zIndex={1}  position={'absolute'} top={'20px'} right={'25px'}   p={'5px'}  borderWidth={'1px'} borderColor={'white'} bg={'transparent'}
   variants={authformvariants}
   initial='initial'
   animate={'show'}
   exit='hide'
    >
        
          <Signup_prompt   />
     </Motionbox>
    
    
    }
 </AnimatePresence> 
  
   </Motionbox>
  )
} 

export default Landing