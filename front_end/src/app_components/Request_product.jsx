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
  const {winwidth, winheight} = useContext(dimensions);
  const [submitting, setsubmitting] = useState(false);
  const [submittingerror, setsubmittingerror] = useState(null);
  const [attachedfiles, setattachedfiles] = useState(product?.attachments || []);   
  const [type, settype] = useState(product?.type || '');
  const [description, setdescription] = useState(product?.description || null);
  const [timeunit, settimeunits] = useState(product?.timeunit || '');
  const [timequantity, settimequantity] = useState(product?.timequantity || 4);
  const [names, setnames] = useState(product?.names || null);
  const [number, setnumber] = useState(product?.number || null);
  const [email, setemail] = useState(product?.email || null)
  const [comitted, setcomitted] = useState(false);
  const {loggedin, admin, user} = useContext(AuthContext);
  const {socket, socketconnected} = useContext(socketcontext);
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  const sidePanelWidth = useBreakpointValue({ base: "0%", md: "25%" });
  const middlePanelWidth = useBreakpointValue({ base: "0%", md: "30%" });
  const formPanelWidth = useBreakpointValue({ base: "100%", md: "40%" });
  const formPadding = useBreakpointValue({ base: "10px", md: "10px 10px 10px 20px" });
  const inputWidth = useBreakpointValue({ base: "90%", md: "65%" });
  const buttonWidth = useBreakpointValue({ base: "80%", md: "30%" });
  const fileButtonWidth = useBreakpointValue({ base: "90%", md: "200px" });
  const fileListWidth = useBreakpointValue({ base: "90%", md: "60%" });
  const timelineContainerWidth = useBreakpointValue({ base: "95%", md: "80%" });
  const selectWidth = useBreakpointValue({ base: "100%", md: "55%" });
  const timeControlsWidth = useBreakpointValue({ base: "45%", md: "40%" });

  useEffect(function(){
    console.log('socket on mount', socket);
  }, [socket])

  useEffect(() => {
    if (timeunitref.current) {
      settimeunits(timeunitref.current.value);
      settype(typeref.current.value);
    }

    console.log(product ? `product received  ${JSON.stringify(product)}` : 'no product recieved');
    console.log('product', product);
  }, []);

  // ... (all the existing functions remain exactly the same)

  return (
    <Box 
      width="100vw" 
      minHeight="100vh" 
      p="2px" 
      bg="gray.800" 
      display="flex" 
      flexDir={{ base: "column", md: "row" }} 
      alignItems="center" 
      paddingBottom="40px"
      overflow="auto"
    >
      {/* Side panels - hidden on mobile */}
      <VStack 
        width={sidePanelWidth} 
        height="100%" 
        borderRightWidth="1px" 
        borderRightColor="white" 
        display={{ base: "none", md: "flex" }}
      />
      <VStack 
        width={middlePanelWidth} 
        height="100%" 
        borderRightWidth="1px" 
        borderRightColor="white" 
        display={{ base: "none", md: "flex" }}
      />

      {/* Main form */}
      <VStack 
        width={formPanelWidth}
        height="100%" 
        padding={formPadding}
        overflow="auto"  
        css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' }}}
      >
        <Text color="white" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={2}>
          DESCRIBE YOUR PRODUCT
        </Text>
        
        {submittingerror && (
          <Text color="red.500" fontWeight="bold" fontSize="medium" textAlign="center">
            {submittingerror}
          </Text>
        )}

        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="medium" fontWeight="bold">
          SELECT TYPE OF PRODUCT
        </Text>
        
        <Select 
          onChange={(e) => { settype(e.target.value) }} 
          value={type} 
          ref={typeref} 
          width={inputWidth}
          height="30px" 
          borderRadius="5px"  
          color="white" 
          fontSize="small"  
          placeholder="select type of product you want"
          mb={4}
        >
          <option style={{ color: 'black', fontSize: 'xxs' }} value="simple website">website (simple with one page for eg advertising , no user interacions , just a viewing page)</option>
          <option style={{ color: 'black', fontSize: 'xxs' }} value="medium website">website (simple , with multiple functions eg registering , enrolling , etc)</option>
          <option style={{ color: 'black', fontSize: 'xxs' }} value="web app">web app (a web based app , where the user can do everything in , eg register , sign up/log in , access services , products , entertainment , do business etc)</option>
          <option style={{ color: 'black', fontSize: 'xxs' }} value="simple phone app">phone app (a simple one with few capabilities)</option>
          <option style={{ color: 'black', fontSize: 'xxs' }} value="complex phone app">phone app (a full blown app , with full scale functionalities)</option>
          <option style={{ color: 'black', fontSize: 'xxs' }} value="simple ai agent">AI agent (a simple ai agent eg a customer care service clients can interract with (ask questions and get responses))</option>
          <option style={{ color: 'black', fontSize: 'xxs' }} value="complex ai agent">AI agent that can perform defined tasks , eg edit videos , ocuments , etc</option>
        </Select>

        <Divider width="100%" mt="10px" mb="10px" />

        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="medium" fontWeight="bold">
          DESCRIPTION
        </Text>
        
        <Textarea 
          value={description} 
          onChange={(e) => { setdescription(e.target.value) }}  
          css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' }}}   
          width="95%"  
          bg="white" 
          borderRadius="15px"  
          resize="none"  
          minH="200px"
          maxH="400px"
          wordBreak="break-word" 
          whiteSpace="pre-wrap"  
          overflowWrap="break-word" 
        />
   
        <Divider width="100%" mt="10px" mb="10px" />

        <Text color="white" fontSize="small" fontWeight="bold" textAlign="center">
          attach related document(s) eg logo image , terms and conditions docs , description docs  , etc 
        </Text>

        <Box 
          as="button" 
          mt="20px" 
          mb="20px" 
          onClick={() => { fileinputref.current.click() }} 
          borderColor="white" 
          borderWidth="1px" 
          borderRadius="10px"  
          p="2px" 
          color="white" 
          fontSize="small" 
          fontWeight="bold" 
          width={fileButtonWidth}
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <HStack width="100%" height="100%" gap="5px">
            <IoDocumentAttach color="white" size="20px" />
            <Input type="file" display="none" ref={fileinputref} onChange={(e) => handlefileinput(e)} multiple />
            <Text color="white" fontSize="small" fontWeight="bold">
              attach document(s)/file(s)
            </Text>
          </HStack>
        </Box>
        
        {attachedfiles.length > 0 && (
          <VStack mt="10px" mb="10px" width={fileListWidth} minH="100px" maxH="200px" borderRadius="15px" p="2px" bg="white" overflow="auto">
            {attachedfiles.map(function(val, itemindex) {
              return (
                <HStack width="90%" height="30px" borderBottomWidth="1px" borderBottomColor="black" p="2px" justifyContent="space-between" key={itemindex}>
                  <FaFileAlt size="20px" color="black" />
                  <Text fontSize="small" color="black" fontWeight="light" isTruncated maxWidth="60%">
                    {val.name}
                  </Text>
                  <Box 
                    as="button" 
                    width="25px" 
                    height="25px" 
                    bg="none" 
                    p="1px" 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    onClick={() => detatchfile(itemindex)}
                  >
                    <AiFillDelete size="20px" color="red" />
                  </Box>
                </HStack>
              );
            })}
          </VStack>
        )}
        
        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="medium" fontWeight="bold">
          TIMELINE
        </Text>

        <HStack width={timelineContainerWidth} p="2px" alignItems="center" flexDirection={{ base: "column", md: "row" }} gap={4}>
          <Select 
            ref={timeunitref} 
            value={timeunit}  
            onChange={(e) => { settimeunits(e.target.value) }} 
            width={{ base: "100%", md: selectWidth }}
            height="30px" 
            borderRadius="5px"  
            color="white" 
            fontSize="small"
          >
            <option style={{ color: 'black', fontSize: 'xxs' }} value="weeks">Weeks</option>
            <option style={{ color: 'black', fontSize: 'xxs' }} value="days">Days</option>
            <option style={{ color: 'black', fontSize: 'xxs' }} value="months">Months</option>
          </Select>

          <HStack width={{ base: "100%", md: timeControlsWidth }} alignItems="center" justifyContent="space-around">
            <Box 
              as="button" 
              onClick={reducetime} 
              width="20px" 
              height="20px" 
              display="flex" 
              alignItems="center" 
              justifyContent="center" 
              p="1px" 
              bg="black" 
              borderRadius="10px"
            >
              <FiMinus size="18px" color="white" />
            </Box>
            
            <Textarea 
              value={timequantity}  
              onChange={(e) => { settimequantity(e.target.value) }}  
              css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' }}}  
              bg="white" 
              borderRadius="10px" 
              color="black" 
              p="1px"  
              resize="none" 
              height="25px" 
              rows={1} 
              width="60%"  
              textAlign="center"
            />
            
            <Box 
              as="button" 
              onClick={addtime}  
              width="20px" 
              height="20px" 
              display="flex" 
              alignItems="center" 
              justifyContent="center" 
              p="1px" 
              bg="black" 
              borderRadius="10px"
            >
              <FaPlus size="18px" color="white" />
            </Box>
          </HStack>
        </HStack>

        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="medium" fontWeight="bold" mt={4}>
          CONTACT INFO
        </Text>

        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="xs" fontWeight="light">
          Names
        </Text>
        
        <Input 
          value={names}  
          onChange={(e) => { setnames(e.target.value) }}  
          css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' }}}  
          bg="white" 
          borderRadius="10px" 
          color="black"    
          width={inputWidth}   
          resize="none"   
          placeholder="enter name(s)"       
          mb={2}
        />

        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="xs" fontWeight="light">
          phone number(active)
        </Text>
        
        <Input 
          value={number} 
          onChange={(e) => { setnumber(e.target.value) }}    
          css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' }}}  
          bg="white" 
          borderRadius="15px" 
          color="black"    
          width={inputWidth}   
          resize="none"      
          placeholder="enter phone number"    
          mb={2}
        />

        <Text textAlign="left" alignSelf="flex-start" color="white" fontSize="xs" fontWeight="light">
          E-mail(active)
        </Text>
        
        <Input 
          value={email} 
          onChange={(e) => { setemail(e.target.value) }}   
          css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' }}}  
          bg="white" 
          borderRadius="10px" 
          color="black"   
          width={inputWidth}   
          resize="none"     
          placeholder="enter email"     
          mb={4}
        />

        {comitted ? (
          mode && mode === 'editting' ? (
            <Box 
              as="button" 
              onClick={editrequest} 
              mt="10px" 
              mb="10px"   
              borderColor="white" 
              borderWidth="2px" 
              height="45px" 
              width={buttonWidth}
              display="flex" 
              flexDirection="row" 
              alignItems="center" 
              justifyContent="center" 
              p="3px" 
              bg="black" 
              borderRadius="10px" 
              gap="10px"
            >
              <IoMdSend size="18px" color="blue" />
              <Text color="white" fontSize="xs">edit request</Text>
              {submitting && <Spinner width="20px" height="20px" color="white" />}
            </Box>
          ) : (
            <Box 
              as="button" 
              onClick={submitrequest} 
              mt="10px" 
              mb="10px"   
              borderColor="white" 
              borderWidth="2px" 
              height="45px" 
              width={buttonWidth}
              display="flex" 
              flexDirection="row" 
              alignItems="center" 
              justifyContent="center" 
              p="3px" 
              bg="black" 
              borderRadius="10px" 
              gap="10px"
            >
              <IoMdSend size="18px" color="blue" />
              <Text color="white" fontSize="xs">send request</Text>
              {submitting && <Spinner width="20px" height="20px" color="white" />}
            </Box>
          )
        ) : (
          <Box 
            as="button"  
            mt="10px" 
            mb="10px" 
            onClick={commitrequest}  
            borderColor="white" 
            borderWidth="2px" 
            height="45px" 
            width={buttonWidth}
            display="flex" 
            flexDirection="row" 
            alignItems="center" 
            justifyContent="space-around"  
            p="3px" 
            bg="black" 
            borderRadius="10px" 
            gap="10px"
          >
            <MdOutlineVerified size="18px" color="white" />
            <Text color="white" fontSize="xs">commit request</Text>
            {submitting && <Spinner width="20px" height="20px" color="white" />}
          </Box>
        )}

        {mode && mode === 'editting' && (
          <Box 
            as="button"   
            mt="10px" 
            mb="10px"   
            borderColor="white" 
            borderWidth="2px" 
            height="45px" 
            width={buttonWidth}
            display="flex" 
            flexDirection="row" 
            alignItems="center" 
            justifyContent="center" 
            p="3px" 
            bg="blue" 
            borderRadius="10px" 
            gap="10px"
            onClick={() => navigate(-1)}
          >
            <Text color="white" fontSize="xs">BACK TO PRODUCT</Text>
          </Box>
        )}

        {submittingerror && (
          <Text color="red.500" fontWeight="bold" fontSize="medium" textAlign="center">
            {submittingerror}
          </Text>
        )}
      </VStack>
    </Box>
  );
}

export default Make_request;