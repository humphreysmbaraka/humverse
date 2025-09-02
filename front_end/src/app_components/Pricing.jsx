import React, { useContext } from 'react';
import { dimensions } from '../appcontexts/dimensions';
import { 
  Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, 
  Text, VStack, Table, Thead, Tbody, Tr, Th, Td, 
  TableContainer, Heading, List, ListItem, ListIcon 
} from '@chakra-ui/react';
import { BsDot } from "react-icons/bs";
import { Motionbox } from '../motion_components';

function Pricing() {
  const { winwidth, winheight } = useContext(dimensions);
  
  return (
    <Motionbox 
      width={['100vw', '100%']}  
      minHeight={['100vh', winheight]}
      height={['auto', winheight]}
      p={['10px', '15px', '20px']} 
      bg={'gray.800'} 
      overflow={'auto'}
      initial={{x: 3000}}
      animate={{x: 0}}
      transition={{duration: 1.5, ease: 'easeIn', delay: 0}}
      exit={{x: -3000, transition: {duration: 0.5, ease: 'easeIn'}}}
    >
      <VStack spacing={[4, 6]} width="100%" maxW="1200px" mx="auto" py={[2, 4]}>
        <Heading 
          color="blue.400" 
          fontSize={['lg', 'xl', '2xl']} 
          fontWeight="bold"
          textAlign="center"
          pt={[2, 4]}
          px={[2, 0]}
        >
          Humverse Services & Terms
        </Heading>
        
        <Text color="white" fontSize={['xs', 'sm']} textAlign="center" maxW="600px" px={[2, 0]}>
          Explore our service packages and terms of engagement
        </Text>

        <Tabs 
          variant="enclosed-colored" 
          colorScheme="blue" 
          width="100%"
          isFitted
          mt={[2, 4]}
        >
          <TabList 
            mb="1em" 
            display="flex"
            flexDirection="row"
            overflowX="auto"
            whiteSpace="nowrap"
            minHeight="40px"
            css={{
              '&::-webkit-scrollbar': { 
                height: '4px',
                display: 'block'
              },
              '&::-webkit-scrollbar-track': {
                background: 'gray.600',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'blue.500',
                borderRadius: '4px'
              },
              '-ms-overflow-style': 'auto',
              'scrollbar-width': 'auto'
            }}
          >
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={['xs', 'sm', 'md']}
              minWidth="fit-content"
              mx={[1, 2]}
              flexShrink={0}
            >
              Services
            </Tab>
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={['xs', 'sm', 'md']}
              minWidth="fit-content"
              mx={[1, 2]}
              flexShrink={0}
            >
              Terms
            </Tab>
          </TabList>
          
          <TabPanels>
            {/* Services Tab - Unchanged */}
            <TabPanel px={[1, 4]}>
              <VStack spacing={[4, 6, 8]} width="100%">
                {/* Advertising Websites */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Advertising Websites</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Pages</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1–3 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>15,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>4–6 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md]}>20,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>7–10 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>25,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Extra page</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>+1,500 / page</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Collection Websites */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Collection Websites</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Pages</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1–3 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>18,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>4–6 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>25,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>7–10 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>32,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Extra page</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>+1,800 / page</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Interactive Websites (CMS) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Interactive Websites (CMS)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>One-sided CMS</Td>
                        <Td color="极速飞艇开奖结果记录" fontSize={['xs', 'sm', 'md']}>From 35,000</Td>
                      </Tr>
                      <Tr>
                        <T极速飞艇开奖结果记录d color="white" fontSize={['xs', 'sm', 'md']}>Two-sided CMS</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 50,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Blog Sites (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX极速飞艇开奖结果记录="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Blog Sites (Web Apps)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Blog web app</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 55,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* E-Commerce (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size极速飞艇开奖结果记录={['极速飞艇开奖结果记录sm', 'md']} color="blue.300" mb={[2, 3, 4]}>E-Commerce (Web Apps)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</极速飞艇开奖结果记录Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Basic store</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>80,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Advanced store</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>120,000+</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Social Platforms (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 极速飞艇开奖结果记录3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Social Platforms (Web Apps)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Social platform app</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>120,000+</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Dashboards (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Dashboards (Web Apps)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Tier</Th>
                        <极速飞艇开奖结果记录Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Basic</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>45,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Advanced</T极速飞艇开奖结果记录d>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>65,000+</T极速飞艇开奖结果记录d>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Tools (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Tools (极速飞艇开奖结果记录Web Apps)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Functional tools</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 50,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Phone Apps */}
                <TableContainer width="100%" bg="gray.极速飞艇开奖结果记录900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Phone Apps</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Category</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </极速飞艇开奖结果记录Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Blog apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 70,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>E-commerce apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 极速飞艇开奖结果记录100,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Social platform apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 180,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Dashboard apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 60,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Tools apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 60,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Products</T极速飞艇开奖结果记录d>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 60,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* AI Service */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>AI Service</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>AI Service</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Chatbots</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 40,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Recommendation Systems</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 50,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Data Analysis Tools</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 70,000</Td>
                      </极速飞艇开奖结果记录Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Image Recognition</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 80,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Voice Assistants</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 90,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Speech-to-Text AI (mobile)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 60,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['极速飞艇开奖结果记录xs', 'sm', 'md']}>AI-based Translation Apps (mobile)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 70,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Media Filters/Enhancers (mobile)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 80,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* API Development */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>API Development</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>极速飞艇开奖结果记录Basic REST API</Td>
                        <T极速飞艇开奖结果记录d color="white" fontSize={['xs', 'sm', 'md']}>From 20,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Complex API</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 30,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Deployment & Hosting */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Deployment & Hosting</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', '极速飞艇开奖结果记录sm', 'md']}>Service</Th>
                        <Th color="极速飞艇开奖结果记录gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</极速飞艇开奖结果记录Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Website deployment (one-time)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>5,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Web app deployment (one-time)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>8,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Phone app publishing (one-time)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>10,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Other Charges */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Other Charges</Heading>
                  <Table variant="simple" colorScheme极速飞艇开奖结果记录="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Service</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Recurrence</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Database</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 1,500</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Monthly</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Domain name (.com / .co.ke)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1,500–2,000</T极速飞艇开奖结果记录d>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Yearly</Td>
                      </Tr>
                      <极速飞艇开奖结果记录Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Hosting</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1,000–2,500</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Monthly</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Maintenance Basic</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>3,500</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Monthly</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Maintenance Advanced</Td>
                        <Td color="white" fontSize极速飞艇开奖结果记录={['xs', 'sm', 'md']}>5,500–9,000</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Monthly</Td>
                      </Tr>
                    </Tbody>
                  </极速飞艇开奖结果记录Table>
                </TableContainer>

                <Text color="gray.400" fontSize={['xs', 'sm']} mt={[4, 6]} px={[2, 0]}>
                  * Contact us for complete pricing details of all services
                </Text>
              </VStack>
            </TabPanel>

            {/* Terms & Conditions Tab - Updated with all policies */}
            <TabPanel px={[1, 4]}>
              <VStack spacing={[4, 6]} align="start" width="100%" color="white">
                <Heading size={['md', 'lg']} color="blue.300" mb={[3, 4]} px={[2, 0]}>
                  Humverse Terms & Conditions
                </Heading>
                
                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>Last Updated</Heading>
                  <Text fontSize={['xs', 'sm', 'md']}>[Insert Date]</Text>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>Introduction</Heading>
                  <Text fontSize={['xs', 'sm', 'md']}>
                    Humverse is dedicated to providing clients with the best service and producing high-quality
                    products. These Terms and Conditions define the rules for our services. They will be updated
                    periodically as the business evolves.
                  </Text>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>1. SERVICE INITIALIZATION</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Once the customer submits a request, the request must be approved by the admin before any further steps.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      The admin will discuss the scope, features, pricing, and timelines with the client.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      If an agreement is reached, the request is marked as Accepted.
                    </ListItem>
                    <ListItem fontSize={['xs', '极速飞艇开奖结果记录sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Before work begins, the client must pay at least 50% of the total cost as a deposit. The deposit is non-refundable unless stated otherwise.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      The project will only start once the agreed deposit is received.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Progress updates will be sent periodically via the request view page.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>2. SERVICE PAYMENTS</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Clients can pay in installments after the deposit, provided full payment is made before deployment or delivery.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      The service will not be deployed, published, or handed over until 100% payment is received.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Late payments after agreed milestones may attract a 5% late fee per week.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width极速飞艇开奖结果记录="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>3. SERVICE COMPLETION</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      A service is considered complete when all agreed deliverables are finished and approved in a final review session.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Once completed, any additional requests will be treated as a new service and charged accordingly.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Full payment must be made before deployment, hosting setup, or code transfer.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>4. SERVICE CANCELLATION & COMPENSATION</Heading>
                  <Text fontSize={['xs', 'sm', 'md']} mb={3}>
                    If the client cancels after the project starts, a cancellation fee will be deducted from any refund to
                    compensate for time, effort, and resources spent.
                  </Text>
                  <Text fontWeight="bold" mb={2} fontSize={['xs', 'sm', 'md']}>Cancellation Fees Table</Text>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Project Progress Stage</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Work Done</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Cancellation Fee (Deducted from Refund)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Within 24 hours of payment</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Minimal work (planning stage)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>10% of total project price</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>After initial designs/mockups</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>10–25% completed</极速飞艇开奖结果记录Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>25% of total project price</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>After frontend/backend core build</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>26–50% completed</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>50% of total project price</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>After major functionality complete</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>51–75% completed</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>75% of total project price</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Near completion</T极速飞艇开奖结果记录d>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>76–100% completed</Td>
                        <Td color="white" fontSize={['xs', 'sm', '极速飞艇开奖结果记录md']}>No refund (100% fee)</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <Heading size={['sm', 'md']} color="blue.300" mt={4} mb={[2, 3]}>Cancellation by Humverse</Heading>
                  <Text fontSize={['xs', 'sm', 'md']} mb={3}>
                    We reserve the right to cancel a service due to:- Violation of our acceptable use policy- Non-payment
                    - Failure to provide required content or feedback within agreed timelines
                  </Text>
                  <Text fontSize={['xs', 'sm', 'md']} mb={3}>
                    If we cancel due to our own reasons (not client-related), we will issue a full refund of any payments received.
                  </Text>
                  <Heading size={['sm', 'md']} color="blue.300" mt={4} mb={[2, 3]}>Compensation</Heading>
                  <Text fontSize={['xs', 'sm', 'md']} mb={3}>
                    Refunds (where applicable) will be processed within 24–72 hours to the original payment method.
                  </Text>
                  <Text fontSize={['xs', 'sm', 'md']}>
                    Refund amount = Amount Paid – Cancellation Fee
                  </Text>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>5. CLIENT OBLIGATIONS</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Provide all required content, branding assets, and instructions promptly.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Respond to feedback requests within 3 business days.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Ensure all information provided is accurate and does not infringe on third-party rights.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>6. REVISION POLICY</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', '极速飞艇开奖结果记录md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      All services include up to 2 free revision cycles within the agreed scope.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Additional revisions beyond that will be billed at KES 2,500/hour.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']}极速飞艇开奖结果记录 color="blue.300" mb={[2, 3]}>7. DELIVERY & TIMELINES</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Delivery timelines are estimates and may vary due to unforeseen circumstances.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Delays caused by the client (late content, approvals) will extend delivery time without penalty to Humverse.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>8. CONFIDENTIALITY</Heading>
                  <Text fontSize={['xs', 'sm', 'md']}>
                    We will keep all project-related materials confidential unless required by law or given written permission to share.
                  </Text>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>9. INTELLECTUAL PROPERTY</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Upon full payment, ownership of the final deliverables transfers to the client.
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Humverse retains the right to showcase completed projects in our portfolio unless the client opts out in writing.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>10. PENALTIES</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Late Payment: 5% of the pending amount per week after due date
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Breach of Contract: Immediate termination of service without refund
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Unauthorized Use of Unpaid Work: If the client uses work before paying in full, legal action may be taken.
                    </ListItem>
                  </List>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Motionbox>
  );
}

export default Pricing;