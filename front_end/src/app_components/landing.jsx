import { Box, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import landing from '../assets/landing.png'
import Signup_prompt from './signup_prompt';
import { Navigate, useNavigate } from 'react-router-dom';
import {Motionbox, Motionbutton, Motionhstack, Motionimage} from '../motion_components';
import { AnimatePresence, useCycle } from 'framer-motion';

function Landing() {
  const variants = {
    enlarged: { scale: 1.2, transition: { duration: 1, delay:2, repeat:10, ease:'easeIn', repeatType: "reverse" } },
    shrunk: { scale: 1, transition: { duration: 1, delay:2, repeat:10, ease:'easeIn', repeatType: "reverse" } },
  };
  
  const [showauthform, setshowauthform] = useState(false);
  const navigate = useNavigate();
  const [form, setform] = useCycle('hide', 'show');

  // Responsive values
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const textWidth = useBreakpointValue({ base: '90%', sm: '80%', md: '400px' });
  const headingSize = useBreakpointValue({ base: 'xl', sm: '2xl', md: 'xxx-large' });
  const subTextSize = useBreakpointValue({ base: 'sm', md: 'x-large' });
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const authFormPosition = useBreakpointValue({ 
    base: { top: '10px', right: '10px', width: '95%' },
    md: { top: '20px', right: '25px', width: 'auto' }
  });

  const authformvariants = {
    initial: { x: 1500, transition: { duration: 1, ease: 'easeInOut' } },
    show: { x: 0, transition: { duration: 1, ease: 'easeInOut' } },
    hide: { x: 1500, transition: { duration: 1, ease: 'easeInOut' } }
  };

  const buttonspositionvariant = {
    initial: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    then: { y: 50, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const [winwidth, setwinwidth] = useState(window.innerWidth);
  const [winheight, setwinheight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setwinwidth(window.innerWidth);
      setwinheight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Motionbox 
      position="relative" 
      width="100vw" 
      height="100vh" 
      overflow="hidden" 
      bg="gray.800"
      exit={{ x: -3000, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <Motionimage 
        zIndex={0} 
        width="100%" 
        height="100%" 
        src={landing}  
        objectFit="cover"
        initial={{ y: 1000, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ y: { delay: 0.5, duration: 0.5 }, scale: { delay: 1, duration: 0.5 } }}
      />

      <Motionhstack 
        zIndex={1} 
        opacity={1} 
        ml={[4, 6, '20px']} 
        position="absolute" 
        top={['30%', '40%', '50%']} 
        p={[4, 6]}
        direction={stackDirection}
        spacing={[4, 6, 8]}
        initial={{ opacity: 0, x: 1500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 2.5 }}
      >
        <VStack width={textWidth} p={[2, 4]} align="flex-start">
          <Text fontSize={headingSize} color="white">WELCOME TO HUMVERSE</Text>
          <Text fontSize={subTextSize} color="white">
            JUST DESCRIBE YOUR PRODUCT, AND WE WILL MAKE IT A REALITY
          </Text>
        </VStack>

        <Motionhstack 
          width={['100%', '80%', '60%']} 
          p={2} 
          alignItems="center" 
          justifyContent={['center', 'space-around']}
          spacing={[4, 6]}
          direction={['column', 'row']}
          variants={showauthform ? buttonspositionvariant : undefined}
          initial="initial"
          animate={showauthform ? 'then' : 'initial'}
        >
          <Motionbutton 
            _hover={{ bg: 'none' }}  
            onClick={() => setshowauthform(!showauthform)} 
            bg="none"  
            width={['100%', '45%', '40%']} 
            height={['45px', '50px', '55px']} 
            borderRadius="15px" 
            borderColor="white" 
            borderWidth="1px" 
            fontSize={buttonSize}
            color="white" 
            fontWeight="bold"
            variants={variants}
            initial="enlarged"
            animate="shrunk"
          >
            LOG IN / SIGN UP
          </Motionbutton>

          <Motionbutton 
            _hover={{ bg: 'none' }}  
            onClick={() => navigate('/main')} 
            bg="none"  
            width={['100%', '45%', '40%']} 
            height={['45px', '50px', '55px']} 
            borderRadius="15px" 
            borderColor="white" 
            borderWidth="1px" 
            fontSize={buttonSize}
            color="white"
            variants={variants}
            initial="shrunk"
            animate="enlarged"
          >
            PREVIEW PLATFORM
          </Motionbutton>
        </Motionhstack>
      </Motionhstack>

      <AnimatePresence mode="wait">
        {showauthform && 
          <Motionbox
            zIndex={1}
            position="absolute"
            {...authFormPosition}
            p={[2, 4]}
            borderWidth="1px"
            borderColor="white"
            bg="gray.800"
            variants={authformvariants}
            initial="initial"
            animate="show"
            exit="hide"
          >
            <Signup_prompt />
          </Motionbox>
        }
      </AnimatePresence>
    </Motionbox>
  )
} 

export default Landing