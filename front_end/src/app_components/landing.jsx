import { Box, HStack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Signup_prompt from './signup_prompt';
import { useNavigate } from 'react-router-dom';
import { Motionbox, Motionbutton, Motionhstack } from '../motion_components';
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
      bgGradient="linear(to-br, gray.800, gray.700)" // subtle abstract gradient
      exit={{ 
        x: -3000, 
        transition: { duration: 0.5, ease: 'easeIn' } 
      }}
    >
      {/* Optional subtle animated circles in the background for extra abstraction */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={0}
        overflow="hidden"
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width={`${100 + i*50}px`}
            height={`${100 + i*50}px`}
            bg="whiteAlpha.50"
            borderRadius="50%"
            top={`${i * 20}%`}
            left={`${i * 15}%`}
            animation={`float 15s linear infinite`}
          />
        ))}

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-30px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </Box>

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
        animate={{ opacity: 1, x: 40 }}
        transition={{ delay: 1, duration: 2.5 }}
        // borderColor={'white'}
        // borderWidth={'1px'}
        // alignSelf={'center'}
      >
        <VStack alignSelf={'center'}   width={textWidth} p={{ base: "10px", md: "15px" }} justifyContent={'center'}  alignItems={{ base: "center", md: "flex-start" }}>
          <Text fontSize={fontSizeLarge} alignSelf={'center'} color="white" textAlign={{ base: "center", md: "left" }}>
            WELCOME TO HUMVERSE
          </Text>
          <Text fontSize={fontSizeMedium} color="white"  alignSelf={'center'} textAlign={{ base: "center", md: "left" }}>
            WE MAKE WHAT YOU WANT
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
          // borderWidth={'1px'}
          // borderColor={'white'}
          // alignSelf={'center'}
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
            justifyContent='right' 
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
