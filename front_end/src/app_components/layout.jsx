import { Box, HStack, Text, VStack, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GoSidebarExpand } from "react-icons/go";
import { FaExpandAlt } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { FaNetworkWired } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from '../appcontexts/auth';
import { Motionbox, Motionvstack } from '../motion_components';
import { useCycle } from 'framer-motion';
import BASE_URL from '../constants/urls';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedin, admin, checkauthstatus } = useContext(AuthContext);
  const [showsidebar, setshowsidebar] = useState(false);
  const { winwidth, winheight } = useContext(dimensions);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarWidth = useBreakpointValue({ 
    base: '100%', 
    md: showsidebar ? '20%' : '60px' 
  });
  const sidebarIconSize = useBreakpointValue({ base: '20px', md: '25px' });
  const sidebarTextSize = useBreakpointValue({ base: 'xs', md: 'xx-small' });
  const outletMargin = useBreakpointValue({ 
    base: '0', 
    md: showsidebar ? '20%' : '60px' 
  });

  // Auto-close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setshowsidebar(false);
    }
  }, [location.pathname, isMobile]);

  // Auto-hide sidebar on mobile by default
  useEffect(() => {
    if (isMobile) {
      setshowsidebar(false);
    } else {
      setshowsidebar(true); // Show sidebar by default on desktop
    }
  }, [isMobile]);

  // Check auth status on location change
  useEffect(() => {
    const check = async function() {
      try {
        await checkauthstatus();
      } catch(err) {
        console.log('error triggering auth status check', err);
      }
    }
    check();
  }, [location.pathname]);

  const logout = async function() {
    try {
      const sure = confirm('Are you sure you want to log out?');
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
    } catch(err) {
      console.log('could not log out', err);
    }
  }

  // Sidebar variants for animation
  const sidebarVariants = {
    initial: {
      x: isMobile ? -300 : 0,
      width: isMobile ? '80%' : '60px',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    show: {
      x: 0,
      width: isMobile ? '80%' : '20%',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    hide: {
      x: isMobile ? -300 : 0,
      width: isMobile ? '0' : '60px',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  }

  // Backdrop for mobile sidebar
  const MobileBackdrop = () => (
    isMobile && showsidebar && (
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="blackAlpha.600"
        zIndex="overlay"
        onClick={() => setshowsidebar(false)}
      />
    )
  );

  return (
    <Motionbox 
      width="100%" 
      bg={'none'}  
      height="100vh" 
      overflow={'hidden'} 
      position={'relative'}  
      display={'flex'}  
      alignItems={'flex-start'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile menu button when sidebar is hidden */}
      {isMobile && !showsidebar && (
        <Box
          position="fixed"
          top="4"
          left="4"
          zIndex="dropdown"
          as="button"
          onClick={() => setshowsidebar(true)}
          bg="gray.800"
          p="2"
          borderRadius="md"
        >
          <CiMenuFries color="white" size="24px" />
        </Box>
      )}

      <MobileBackdrop />
      
      <Motionvstack 
        bg={'gray.800'}  
        borderRightWidth={'1px'} 
        borderRightColor={'white'} 
        width={sidebarWidth}
        height={'100vh'}
        alignItems={'center'} 
        p={'2px'}  
        overflow={'auto'}  
        css={{ '&::-webkit-scrollbar': { display: 'none' } }} 
        gap={{ base: '25px', md: '35px' }}
        position={isMobile ? 'fixed' : 'relative'}
        zIndex="modal"
        variants={sidebarVariants}
        initial="initial"
        animate={showsidebar ? 'show' : 'hide'}
      >
        {!isMobile && (
          <Box 
            alignSelf={'flex-start'} 
            as='button'  
            onClick={() => setshowsidebar(!showsidebar)} 
            bg={'gray.800'} 
            width={'30px'} 
            height={'30px'} 
            borderRadius={'50%'} 
            mt={'20px'}
            ml="2"
          >   
            {showsidebar ? (
              <GoSidebarExpand color='white' size={'20px'} />
            ) : (
              <CiMenuFries color='white' size={'20px'} /> 
            )}
          </Box>
        )}

        {showsidebar ? (
          /* Expanded sidebar content */
          <>
            {/* Content for expanded sidebar - same as your original */}
            {!loggedin && (
              <>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs' }} to='services'>OUR SERVICES</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs' }} to='contacts'>CONTACT US</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs' }} to='assistant'>ASSISTANT</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs' }} to='/'>Log-in</Link>
                </Box>
              </>
            )}
            
            {(loggedin && !admin) && (
              <>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='dashboard'>ADMIN PANEL</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='/main'>HOME</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='services'>OUR SERVICES</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='contacts'>CONTACT US</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='make request'>MAKE REQUEST</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='assistant'>ASSISTANT</Link>
                </Box>
                <Box onClick={logout} borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Text color='white' fontSize='xs'>log_out</Text>
                </Box>
              </>
            )}
            
            {(loggedin && admin) && (
              <>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='dashboard'>ADMIN PANEL</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='/main'>HOME</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='services'>OUR SERVICES</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='contacts'>CONTACT US</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='make request'>MAKE REQUEST</Link>
                </Box>
                <Box borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Link style={{color:'white' , fontSize:'xs'}} to='assistant'>ASSISTANT</Link>
                </Box>
                <Box onClick={logout} borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}>
                  <Text color='white' fontSize='xs'>log_out</Text>
                </Box>
              </>
            )}
          </>
        ) : (
          /* Collapsed sidebar with icons only */
          <>
            {!loggedin && (
              <>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='services'>
                    <FaNetworkWired color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">services</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='contacts'>
                    <IoCallOutline color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">contacts</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='assistant'>
                    <BiMessageRounded color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">agent</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='/'>
                    <IoIosLogIn color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">Log-in</Text>
                  </Link>
                </Box>
              </>
            )}
            
            {(loggedin && !admin) && (
              <>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='dashboard'>
                    <RiAccountPinCircleFill color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">Admin Panel</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='/main'>
                    <CiHome color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">home</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='services'>
                    <FaNetworkWired color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">services</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='contacts'>
                    <IoCallOutline color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">contacts</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='make request'>
                    <BiMessageRounded color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">request</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='assistant'>
                    <BiMessageRounded color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">agent</Text>
                  </Link>
                </Box>
                <Box width={'95%'} onClick={logout} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <CiLogout color='white' size={sidebarIconSize} />
                  <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">log out</Text>
                </Box>
              </>
            )}
            
            {(loggedin && admin) && (
              <>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='dashboard'>
                    <RiAccountPinCircleFill color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">admin</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='/main'>
                    <CiHome color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">home</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='assistant'>
                    <BiMessageRounded color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">agent</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='services'>
                    <FaNetworkWired color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">services</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='contacts'>
                    <IoCallOutline color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">contacts</Text>
                  </Link>
                </Box>
                <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Link to='dashboard'>
                    <IoCallOutline color='white' size={sidebarIconSize} />
                    <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">Admin Panel</Text>
                  </Link>
                </Box>
                <Box width={'95%'} onClick={logout} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <CiLogout color='white' size={sidebarIconSize} />
                  <Text color={'white'} fontSize={sidebarTextSize} fontWeight={'light'} mt="1">log out</Text>
                </Box>
              </>
            )}
          </>
        )}
      </Motionvstack>
      
      {/* Main content area */}
      <Box 
        flex="1" 
        height="100vh" 
        overflow="auto" 
        ml={isMobile ? 0 : (showsidebar ? '20%' : '60px')}
        transition="margin-left 0.3s ease-out"
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        <Outlet />
      </Box>
    </Motionbox>
  )
}

export default Layout