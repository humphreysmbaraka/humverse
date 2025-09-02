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
            {/* Services Tab */}
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
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>20,000</Td>
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
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 35,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Two-sided CMS</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 50,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Blog Sites (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
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
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>E-Commerce (Web Apps)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Type</Th>
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
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
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
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Basic</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>45,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Advanced</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>65,000+</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Tools (Web Apps) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Tools (Web Apps)</Heading>
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
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 3, 4]} overflowX="auto">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3, 4]}>Phone Apps</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Category</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Blog apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 70,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>E-commerce apps</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 100,000</Td>
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
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Products</Td>
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
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Image Recognition</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 80,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI Voice Assistants</Td>
                        <Td color="" fontSize={['xs', 'sm', 'md']}>From 90,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Speech-to-Text AI (mobile)</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 60,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>AI-based Translation Apps (mobile)</>
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
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Basic REST API</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 20,000</Td>
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
                    <thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Service</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Price (KES)</Th>
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
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
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
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1,500–2,000</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Yearly</Td>
                      </Tr>
                      <Tr>
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
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>5,500–9,000</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Monthly</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                <Text color="gray.400" fontSize={['xs', 'sm']} mt={[4, 6]} px={[2, 0]}>
                  * Contact us for complete pricing details of all services
                </Text>
              </VStack>
            </TabPanel>

            {/* Terms & Conditions Tab */}
            <TabPanel px={[1, 4]}>
              <VStack spacing={[4, 6]} align="start" width="100%" color="white">
                <Heading size={['md', 'lg']} color="blue.300" mb={[3, 4]} px={[2, 0]}>
                  Humverse Terms & Conditions
                </Heading>
                
                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>1. SERVICE INITIALIZATION</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      50% deposit required before work begins
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Project starts after deposit received
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Progress updates provided regularly
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>2. SERVICE PAYMENTS</Heading>
                  <List spacing={2}>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Installment payments allowed after deposit
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      Full payment required before deployment
                    </ListItem>
                    <ListItem fontSize={['xs', 'sm', 'md']}>
                      <ListIcon as={BsDot} color="blue.300" />
                      5% late fee per week for overdue payments
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={[3, 4, 5]} borderRadius="md" width="100%">
                  <Heading size={['sm', 'md']} color="blue.300" mb={[2, 3]}>4. SERVICE CANCELLATION</Heading>
                  <Text fontWeight="bold" mb={2} fontSize={['xs', 'sm', 'md']}>Cancellation Fees:</Text>
                  <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
                    <Thead>
                      <Tr>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Project Stage</Th>
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Cancellation Fee</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Within 24 hours</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>10% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>After initial designs</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>25% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>After core build</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>50% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Major functionality complete</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>75% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Near completion</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>100% of total</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>

                {/* Additional terms sections */}
                <Text color="gray.400" fontSize={['xs', 'sm']} mt={[3, 4]} px={[2, 0]}>
                  * Full terms available upon request
                </Text>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Motionbox>
  );
}

export default Pricing;