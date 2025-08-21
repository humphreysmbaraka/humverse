import { Box, HStack, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import landing from '../assets/landing.png'
import Signup_prompt from './signup_prompt';
import { Navigate, useNavigate } from 'react-router-dom';
import { Motionbox, Motionbutton, Motionhstack, Motionimage } from '../motion_components';
import { AnimatePresence, useCycle } from 'framer-motion';

function Landing() {
  const variants = {
    enlarged: { scale: 1.1, transition: { duration: 1, delay: 2, repeat: 10, ease: 'easeIn', repeatType: "reverse" } },
    shrunk: { scale: 1, transition: { duration: 1, delay: 2, repeat: 10, ease: 'easeIn', repeatType: "reverse" } },
  };
  
  const [showauthform, setshowauthform] = useState(false);
  const navigate = useNavigate();
  const [form, setform] = useCycle('hide', 'show');

  const authformvariants = {
    initial: {
      x: 1500,
      transition: { duration: 1, ease: 'easeInOut' }
    },
    show: {
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' }
    },
    hide: {
      x: 1500,
      transition: { duration: 1, ease: 'easeInOut' }
    }
  }

  const buttonspositionvariant = {
    initial: {
      y: 0, transition: { duration: 0.5, ease: 'easeInOut' }
    },
    then: {
      y: 50, transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }

  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const textWidth = useBreakpointValue({ base: "90%", md: "400px" });
  const buttonStackWidth = useBreakpointValue({ base: "100%", md: "60%" });
  const buttonWidth = useBreakpointValue({ base: "45%", md: "40%" });
  const buttonHeight = useBreakpointValue({ base: "45px", md: "55px" });
  const fontSizeLarge = useBreakpointValue({ base: "xl", md: "xxx-large" });
  const fontSizeMedium = useBreakpointValue({ base: "lg", md: "x-large" });
  const fontSizeSmall = useBreakpointValue({ base: "xs", md: "small" });
  const formPosition = useBreakpointValue({ 
    base: { top: "10px", right: "10px", width: "95%" }, 
    md: { top: "20px", right: "25px", width: "auto" } 
  });

  const vh = useBreakpointValue({ base: "100vh", md: "100vh" });
  const vw = useBreakpointValue({ base: "100vw", md: "100vw" });

  const textboxref = useRef(null);

  return (
    <Motionbox 
      position="relative" 
      width={vw} 
      height={vh} 
      overflow="hidden" 
      bg="gray.800"
      exit={{ 
        x: -3000, 
        transition: { duration: 0.5, ease: 'easeIn' } 
      }}
    >
      {/* Background image with dark overlay */}
      <Motionimage 
        zIndex={0} 
        width="100%" 
        height="100%" 
        src={landing} 
        objectFit="cover"
        filter="brightness(0.3)"  // dark overlay effect
        initial={{ y: 1000, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ 
          y: { delay: 0.5, duration: 0.5 }, 
          scale: { delay: 1, duration: 0.5 } 
        }}
      />

      <Motionhstack 
        zIndex={1} 
        opacity={1} 
        ml={{ base: "10px", md: "20px" }}
        position="absolute"
        top={{ base: "30%", md: "50%" }}
        transform={{ base: "translateY(-30%)", md: "translateY(-50%)" }}
        p={{ base: "10px", md: "15px" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        initial={{ opacity: 0, x: 1500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 2.5 }}
      >
        <VStack width={textWidth} p={{ base: "10px", md: "15px" }} alignItems={{ base: "center", md: "flex-start" }}>
          <Text fontSize={fontSizeLarge} color="white" textAlign={{ base: "center", md: "left" }}>
            WELCOME TO HUMVERSE
          </Text>
          <Text fontSize={fontSizeMedium} color="white" textAlign={{ base: "center", md: "left" }}>
            JUST DESCRIBE YOUR PRODUCT, AND WE WILL MAKE IT A REALITY
          </Text>
        </VStack>

        <Motionhstack 
          width={buttonStackWidth}
          p="2px" 
          alignItems="center" 
          justifyContent="space-around"
          mt={{ base: "20px", md: "0" }}
          flexDirection={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 0 }}
          variants={showauthform ? buttonspositionvariant : undefined}
          initial="initial"
          animate={showauthform ? 'then' : 'initial'}
        >
          <Motionbutton 
            _hover={{ bg: 'none' }} 
            onClick={() => { setshowauthform(!showauthform) }} 
            bg="none" 
            width={buttonWidth}
            height={buttonHeight}
            borderRadius="15px" 
            borderColor="white" 
            borderWidth="1px" 
            p="2px" 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            fontSize={fontSizeSmall}
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
            width={buttonWidth}
            height={buttonHeight}
            borderRadius="15px" 
            borderColor="white" 
            borderWidth="1px" 
            p="4px" 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            fontSize={fontSizeSmall}
            color="white"
            variants={variants}
            initial="shrunk"
            animate="enlarged"
          >
            PREVIEW PLATFORM
          </Motionbutton>
        </Motionhstack>
      </Motionhstack>

      <AnimatePresence mode='wait'>
        {showauthform && 
          <Motionbox
            zIndex={1}
            position="absolute"
            top={formPosition.top}
            right={formPosition.right}
            width={formPosition.width}
            p={{ base: "10px", md: "5px" }}
            borderWidth="1px"
            borderColor="white"
            bg="transparent"
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
