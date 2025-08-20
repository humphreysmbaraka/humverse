import { Box, HStack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GoSidebarExpand } from "react-icons/go";
import { FaNetworkWired } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { CiMenuFries, CiLogout } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { AuthContext } from '../appcontexts/auth';
import { Motionbox, Motionvstack } from '../motion_components';
import BASE_URL from '../constants/urls';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedin, admin, checkauthstatus } = useContext(AuthContext);
  const [showsidebar, setshowsidebar] = useState(false);
  const { winwidth, winheight } = useContext(dimensions);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const logout = async function () {
    try {
      const sure = confirm('are you sure  you want to log out');
      if (!sure) return;

      const logout = await fetch(`${BASE_URL}/logout`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (logout.ok) {
        console.log('logged out');
      } else {
        console.log('error logging out');
      }
    } catch (err) {
      console.log('could not log out', err);
    }
  }

  useEffect(function () {
    const check = async function () {
      try {
        await checkauthstatus();
      }
      catch (err) {
        console.log('error triggering auth status check', err);
      }
    }
    check();

  }, [location.pathname]);

  const sidebarVariants = {
    initial: {
      x: -100,
      width: '60px',
      transition: { duration: 0.5, ease: 'easeOut' }
    },

    show: {
      x: 0,
      width: '20%',
      transition: { duration: 0.5, ease: 'easeOut' }
    },

    hide: {
      x: 0,
      width: '60px',
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  }

  return (
    <Motionbox
      width={winwidth}
      height={winheight}
      overflow={'auto'}
      css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' } }}
      position={'relative'}
      display={'flex'}
      flexDirection={isMobile ? 'column' : 'row'}
      alignItems={'flex-start'}
      gap={0}
    >

      {/* --- Sidebar for Desktop --- */}
      {!isMobile && (
        <Motionvstack
          bg={'gray.800'}
          borderRightWidth={'1px'}
          borderRightColor={'white'}
          width={showsidebar ? '20%' : '60px'}
          height={'100%'}
          alignItems={'center'}
          p={'2px'}
          pt={'10px'}
          overflow={'auto'}
          css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' } }}
          gap={'35px'}
          variants={sidebarVariants}
          initial={'initial'}
          animate={showsidebar ? 'show' : 'hide'}
        >
          <Box
            alignSelf={'flex-start'}
            as='button'
            onClick={() => { setshowsidebar(!showsidebar) }}
            bg={'gray.800'}
            width={'30px'}
            height={'30px'}
            borderRadius={'50%'}
            mt={'20px'}
          >
            {showsidebar && <GoSidebarExpand color='white' size={'20px'} />}
            {!showsidebar && <CiMenuFries color='white' size={'20px'} />}
          </Box>

          {/* expanded sidebar with words */}
          {showsidebar && (
            <>
              {!loggedin && (
                <>
                  <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{ borderBottomWidth: '2px', borderBottomColor: 'blue' }}>
                    <Link style={{ color: 'white', fontSize: 'xs' }} to='services'>OUR SERVICES</Link>
                  </Box>

                  <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{ borderBottomWidth: '2px', borderBottomColor: 'blue' }}>
                    <Link style={{ color: 'white', fontSize: 'xs' }} to='contacts'>CONTACT US</Link>
                  </Box>

                  <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{ borderBottomWidth: '2px', borderBottomColor: 'blue' }}>
                    <Link style={{ color: 'white', fontSize: 'xs' }} to='assistant'>ASSISTANT</Link>
                  </Box>

                  <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{ borderBottomWidth: '2px', borderBottomColor: 'blue' }}>
                    <Link style={{ color: 'white', fontSize: 'xs' }} to='/'>Log-in</Link>
                  </Box>
                </>
              )}
            </>
          )}

          {/* collapsed sidebar: icons + words under them */}
          {!showsidebar && (
            <>
              {!loggedin && (
                <>
                  <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Link to='services'><FaNetworkWired color='white' size='25px' /></Link>
                    <Text color='white' fontSize='10px'>Services</Text>
                  </Box>
                  <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Link to='contacts'><IoCallOutline color='white' size='25px' /></Link>
                    <Text color='white' fontSize='10px'>Contacts</Text>
                  </Box>
                  <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Link to='assistant'><BiMessageRounded color='white' size='25px' /></Link>
                    <Text color='white' fontSize='10px'>Assistant</Text>
                  </Box>
                  <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Link to='/'><IoIosLogIn color='white' size='25px' /></Link>
                    <Text color='white' fontSize='10px'>Login</Text>
                  </Box>
                </>
              )}
            </>
          )}
        </Motionvstack>
      )}

      {/* --- Top Navbar for Mobile --- */}
      {isMobile && (
        <HStack
          as="nav"
          width="100%"
          bg="gray.800"
          p="2"
          spacing="20px"
          overflowX="auto"
          css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          justifyContent="flex-start"
          position="relative"
          mt={'30px'}
        >
          {!loggedin && (
            <>
              <VStack spacing="1" minW="60px">
                <Link to='services'><FaNetworkWired color="white" size="25px" /></Link>
                <Text color="white" fontSize="10px">Services</Text>
              </VStack>
              <VStack spacing="1" minW="60px">
                <Link to='contacts'><IoCallOutline color="white" size="25px" /></Link>
                <Text color="white" fontSize="10px">Contacts</Text>
              </VStack>
              <VStack spacing="1" minW="60px">
                <Link to='assistant'><BiMessageRounded color="white" size="25px" /></Link>
                <Text color="white" fontSize="10px">Assistant</Text>
              </VStack>
              <VStack spacing="1" minW="60px">
                <Link to="/"><IoIosLogIn color="white" size="25px" /></Link>
                <Text color="white" fontSize="10px">Login</Text>
              </VStack>
            </>
          )}
        </HStack>
      )}

      <Outlet />
    </Motionbox>
  )
}

export default Layout
