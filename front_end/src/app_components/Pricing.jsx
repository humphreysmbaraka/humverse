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
            flexDirection="row"
            overflowX="auto"
            whiteSpace="nowrap"
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none'
            }}
          >
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={['xs', 'sm', 'md']}
              minWidth="fit-content"
              mx={[1, 2]}
            >
              Services
            </Tab>
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={['xs', 'sm', 'md']}
              minWidth="fit-content"
              mx={[1, 2]}
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
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Offer Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1–3 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>15,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>10,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>4–6 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>20,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>15,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>7–10 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>25,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>20,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Extra page</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>+1,500</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>+1,000</Td>
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
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Offer Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>1–3 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>18,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>12,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>4–6 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>25,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>18,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>7–10 pages</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>32,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>25,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Extra page</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>+1,800</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>+1,200</Td>
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
                        <Th color="gray.200" fontSize={['xs', 'sm', 'md']}>Offer Price (KES)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>One-sided CMS</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 35,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>25,000</Td>
                      </Tr>
                      <Tr>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>Two-sided CMS</Td>
                        <Td color="white" fontSize={['xs', 'sm', 'md']}>From 50,000</Td>
                        <Td color="green.300" fontSize={['xs', 'sm', 'md']}>35,000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* Other Services Tables */}
                {/* Add similar table structures for other services */}
                
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