import { Box, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { GoSidebarExpand } from "react-icons/go";
import { CiMenuFries, CiLogout, CiHome } from "react-icons/ci";
import { FaNetworkWired } from "react-icons/fa";
import { IoCallOutline, IoIosLogIn } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { AuthContext } from "../appcontexts/auth";
import { Motionbox, Motionvstack } from "../motion_components";
import { motion } from "framer-motion";
import BASE_URL from "../constants/urls";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedin, admin, checkauthstatus } = useContext(AuthContext);
  const [showsidebar, setshowsidebar] = useState(false);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarWidth = showsidebar ? "20%" : isMobile ? "0%" : "60px";

  useEffect(() => {
    const check = async function () {
      try {
        await checkauthstatus();
      } catch (err) {
        console.log("error triggering auth status check", err);
      }
    };
    check();
  }, [location.pathname]);

  const logout = async function () {
    try {
      const sure = confirm("Are you sure you want to log out?");
      if (!sure) return;

      const res = await fetch(`${BASE_URL}/logout`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) console.log("Logged out");
      else console.log("Error logging out");
    } catch (err) {
      console.log("Could not log out", err);
    }
  };

  const sidebarVariants = {
    initial: { x: isMobile ? "-100%" : 0, width: "60px" },
    show: { x: 0, width: showsidebar ? "20%" : "60px" },
    hide: { x: 0, width: "60px" },
  };

  const renderLinks = () => {
    if (!loggedin) {
      return (
        <>
          <LinkItem to="services" text="OUR SERVICES" />
          <LinkItem to="contacts" text="CONTACT US" />
          <LinkItem to="assistant" text="ASSISTANT" />
          <LinkItem to="/" text="Log-in" />
        </>
      );
    }
    if (loggedin && !admin) {
      return (
        <>
          <LinkItem to="dashboard" text="ADMIN PANEL" />
          <LinkItem to="/main" text="HOME" />
          <LinkItem to="services" text="OUR SERVICES" />
          <LinkItem to="contacts" text="CONTACT US" />
          <LinkItem to="make request" text="MAKE REQUEST" />
          <LinkItem to="assistant" text="ASSISTANT" />
          <Box
            onClick={logout}
            borderBottomWidth="1px"
            borderBottomColor="white"
            w="95%"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            _hover={{ borderBottomWidth: 2, borderBottomColor: "blue" }}
          >
            <Text color="white" fontSize="xs">
              log_out
            </Text>
          </Box>
        </>
      );
    }
    if (loggedin && admin) {
      return (
        <>
          <LinkItem to="dashboard" text="ADMIN PANEL" />
          <LinkItem to="/main" text="HOME" />
          <LinkItem to="services" text="OUR SERVICES" />
          <LinkItem to="contacts" text="CONTACT US" />
          <LinkItem to="make request" text="MAKE REQUEST" />
          <LinkItem to="assistant" text="ASSISTANT" />
          <Box
            onClick={logout}
            borderBottomWidth="1px"
            borderBottomColor="white"
            w="95%"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            _hover={{ borderBottomWidth: 2, borderBottomColor: "blue" }}
          >
            <Text color="white" fontSize="xs">
              log_out
            </Text>
          </Box>
        </>
      );
    }
  };

  return (
    <Motionbox
      w="100vw"
      h="100vh"
      display="flex"
      position="relative"
      overflow="hidden"
    >
      {/* Sidebar */}
      <Motionvstack
        bg="gray.800"
        borderRightWidth="1px"
        borderRightColor="white"
        w={sidebarWidth}
        h="100%"
        alignItems="center"
        p={2}
        gap={6}
        variants={sidebarVariants}
        initial="initial"
        animate={showsidebar || !isMobile ? "show" : "hide"}
        pos={isMobile ? "fixed" : "relative"}
        zIndex={10}
      >
        <Box
          alignSelf="flex-start"
          as="button"
          onClick={() => setshowsidebar(!showsidebar)}
          bg="gray.800"
          w="30px"
          h="30px"
          borderRadius="50%"
          mt={5}
        >
          {showsidebar ? <GoSidebarExpand color="white" size="20px" /> : <CiMenuFries color="white" size="20px" />}
        </Box>

        {showsidebar && renderLinks()}
      </Motionvstack>

      {/* Main Content */}
      <Box
        flex="1"
        bg="gray.50"
        overflow="auto"
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
        p={4}
      >
        <Outlet />
      </Box>
    </Motionbox>
  );
}

// Helper component for sidebar links
function LinkItem({ to, text }) {
  return (
    <Box
      borderBottomWidth="1px"
      borderBottomColor="white"
      w="95%"
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      _hover={{ borderBottomWidth: 2, borderBottomColor: "blue" }}
    >
      <Link to={to}>
        <Text color="white" fontSize="xs">
          {text}
        </Text>
      </Link>
    </Box>
  );
}
