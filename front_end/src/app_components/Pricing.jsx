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
      width={winwidth}  
      height={winheight} 
      p={['10px', '20px']} 
      bg={'gray.800'} 
      overflow={'auto'}
      initial={{x: 3000}}
      animate={{x: 0}}
      transition={{duration: 1.5, ease: 'easeIn', delay: 0}}
      exit={{x: -3000, transition: {duration: 0.5, ease: 'easeIn'}}}
    >
      <VStack spacing={6} width="100%" maxW="1200px" mx="auto">
        <Heading 
          color="blue.400" 
          fontSize={['xl', '2xl']} 
          fontWeight="bold"
          textAlign="center"
          pt={4}
        >
          Humverse Services & Terms
        </Heading>
        
        <Text color="white" fontSize="sm" textAlign="center" maxW="600px">
          Explore our service packages and terms of engagement
        </Text>

        <Tabs 
          variant="enclosed-colored" 
          colorScheme="blue" 
          width="100%"
          isFitted
          mt={4}
        >
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: 'blue.600' }} fontSize={['sm', 'md']}>
              Our Services
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.600' }} fontSize={['sm', 'md']}>
              Terms & Conditions
            </Tab>
          </TabList>
          
          <TabPanels>
            {/* Services Tab */}
            <TabPanel>
              <VStack spacing={8} width="100%">
                {/* Advertising Websites */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={4}>
                  <Heading size="md" color="blue.300" mb={4}>Advertising Websites</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha">
                    <Thead>
                      <Tr>
                        <Th color="gray.200">Pages</Th>
                        <Th color="gray.200">Price (KES)</Th>
                        <Th color="gray.200">Offer Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white">1–3 pages</Td>
                        <Td color="white">15,000</Td>
                        <Td color="green.300">10,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">4–6 pages</Td>
                        <Td color="white">20,000</Td>
                        <Td color="green.300">15,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">7–10 pages</Td>
                        <Td color="white">25,000</Td>
                        <Td color="green.300">20,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">Extra page</Td>
                        <Td color="white">+1,500</Td>
                        <Td color="green.300">+1,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Collection Websites */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={4}>
                  <Heading size="md" color="blue.300" mb={4}>Collection Websites</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha">
                    <Thead>
                      <Tr>
                        <Th color="gray.200">Pages</Th>
                        <Th color="gray.200">Price (KES)</Th>
                        <Th color="gray.200">Offer Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white">1–3 pages</Td>
                        <Td color="white">18,000</Td>
                        <Td color="green.300">12,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">4–6 pages</Td>
                        <Td color="white">25,000</Td>
                        <Td color="green.300">18,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">7–10 pages</Td>
                        <Td color="white">32,000</Td>
                        <Td color="green.300">25,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">Extra page</Td>
                        <Td color="white">+1,800</Td>
                        <Td color="green.300">+1,200</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Interactive Websites (CMS) */}
                <TableContainer width="100%" bg="gray.900" borderRadius="md" p={4}>
                  <Heading size="md" color="blue.300" mb={4}>Interactive Websites (CMS)</Heading>
                  <Table variant="simple" colorScheme="whiteAlpha">
                    <Thead>
                      <Tr>
                        <Th color="gray.200">Type</Th>
                        <Th color="gray.200">Price (KES)</Th>
                        <Th color="gray.200">Offer Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white">One-sided CMS</Td>
                        <Td color="white">From 35,000</Td>
                        <Td color="green.300">25,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">Two-sided CMS</Td>
                        <Td color="white">From 50,000</Td>
                        <Td color="green.300">35,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Other Services Tables */}
                {/* Add similar table structures for other services */}
                
                <Text color="gray.400" fontSize="sm" mt={6}>
                  * Contact us for complete pricing details of all services
                </Text>
              </VStack>
            </TabPanel>

            {/* Terms & Conditions Tab */}
            <TabPanel>
              <VStack spacing={6} align="start" width="100%" color="white">
                <Heading size="lg" color="blue.300" mb={4}>
                  Humverse Terms & Conditions
                </Heading>
                
                <Box bg="gray.900" p={5} borderRadius="md" width="100%">
                  <Heading size="md" color="blue.300" mb={3}>1. SERVICE INITIALIZATION</Heading>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      50% deposit required before work begins
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      Project starts after deposit received
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      Progress updates provided regularly
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={5} borderRadius="md" width="100%">
                  <Heading size="md" color="blue.300" mb={3}>2. SERVICE PAYMENTS</Heading>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      Installment payments allowed after deposit
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      Full payment required before deployment
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      5% late fee per week for overdue payments
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={5} borderRadius="md" width="100%">
                  <Heading size="md" color="blue.300" mb={3}>4. SERVICE CANCELLATION</Heading>
                  <Text fontWeight="bold" mb={2}>Cancellation Fees:</Text>
                  <Table variant="simple" colorScheme="whiteAlpha" size="sm">
                    <Thead>
                      <Tr>
                        <Th color="gray.200">Project Stage</Th>
                        <Th color="gray.200">Cancellation Fee</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white">Within 24 hours</Td>
                        <Td color="white">10% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">After initial designs</Td>
                        <Td color="white">25% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">After core build</Td>
                        <Td color="white">50% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">Major functionality complete</Td>
                        <Td color="white">75% of total</Td>
                      </Tr>
                      <Tr>
                        <Td color="white">Near completion</Td>
                        <Td color="white">100% of total</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>

                {/* Additional terms sections */}
                <Text color="gray.400" fontSize="sm" mt={4}>
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