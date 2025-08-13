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
                {renderTable("Advertising Websites", [
                  ["1–3 pages", "15,000", "10,000"],
                  ["4–6 pages", "20,000", "15,000"],
                  ["7–10 pages", "25,000", "20,000"],
                  ["Extra page", "+1,500", "+1,000"]
                ])}

                {/* Collection Websites */}
                {renderTable("Collection Websites", [
                  ["1–3 pages", "18,000", "12,000"],
                  ["4–6 pages", "25,000", "18,000"],
                  ["7–10 pages", "32,000", "25,000"],
                  ["Extra page", "+1,800", "+1,200"]
                ])}

                {/* Interactive Websites */}
                {renderTable("Interactive Websites (CMS)", [
                  ["One-sided CMS", "From 35,000", "25,000"],
                  ["Two-sided CMS", "From 50,000", "35,000"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* E-commerce Websites */}
                {renderTable("E-commerce Websites", [
                  ["Basic Store (up to 20 products)", "45,000", "35,000"],
                  ["Medium Store (21–100 products)", "65,000", "50,000"],
                  ["Large Store (100+ products)", "From 90,000", "70,000"]
                ])}

                {/* Web & Mobile Applications */}
                {renderTable("Web & Mobile Applications", [
                  ["Basic App", "From 80,000", "65,000"],
                  ["Advanced App", "From 150,000", "120,000"]
                ])}

                {/* Website Maintenance */}
                {renderTable("Website Maintenance & Support", [
                  ["Basic Plan", "5,000/month", "3,500/month"],
                  ["Standard Plan", "8,000/month", "6,000/month"],
                  ["Premium Plan", "12,000/month", "9,000/month"]
                ])}

                {/* Branding & Graphics */}
                {renderTable("Branding & Graphics", [
                  ["Logo Design", "5,000", "3,500"],
                  ["Business Card Design", "2,500", "1,800"],
                  ["Full Branding Package", "15,000", "12,000"]
                ])}

                {/* Content Writing & SEO */}
                {renderTable("Content Writing & SEO", [
                  ["Basic SEO Package", "10,000", "7,500"],
                  ["Blog/Article Writing (per 1,000 words)", "3,000", "2,500"]
                ])}

                <Text color="gray.400" fontSize="sm" mt={6}>
                  * Contact us for complete pricing details of all services
                </Text>
              </VStack>
            </TabPanel>

            {/* Terms & Conditions Tab */}
            <TabPanel>
              <VStack spacing={6} align="start" width="100%" color="white">
                {renderClause("1. SERVICE INITIALIZATION", [
                  "50% deposit required before work begins",
                  "Project starts after deposit received",
                  "Progress updates provided regularly"
                ])}

                {renderClause("2. SERVICE PAYMENTS", [
                  "Installment payments allowed after deposit",
                  "Full payment required before deployment",
                  "5% late fee per week for overdue payments"
                ])}

                {renderClause("3. SERVICE COMPLETION", [
                  "Final delivery only after full payment",
                  "Testing and quality assurance before deployment",
                  "Client review period before handover"
                ])}

                {/* Cancellation with fee table */}
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
                      <Tr><Td color="white">Within 24 hours</Td><Td color="white">10% of total</Td></Tr>
                      <Tr><Td color="white">After initial designs</Td><Td color="white">25% of total</Td></Tr>
                      <Tr><Td color="white">After core build</Td><Td color="white">50% of total</Td></Tr>
                      <Tr><Td color="white">Major functionality complete</Td><Td color="white">75% of total</Td></Tr>
                      <Tr><Td color="white">Near completion</Td><Td color="white">100% of total</Td></Tr>
                    </Tbody>
                  </Table>
                </Box>

                {renderClause("5. COMPENSATION POLICY", [
                  "Refunds processed within 24 hours after cancellation",
                  "Compensation = Amount paid - Cancellation fee"
                ])}

                {renderClause("6. REVISIONS POLICY", [
                  "Up to 3 free revisions included",
                  "Additional revisions charged separately"
                ])}

                {renderClause("7. INTELLECTUAL PROPERTY", [
                  "Final work ownership transferred upon full payment",
                  "Humverse retains rights to showcase work in portfolio"
                ])}

                {renderClause("8. TRANSACTIONS & DISPUTES", [
                  "All transactions must be through official channels",
                  "Disputes resolved within 14 working days"
                ])}

                {renderClause("9. LIMITATION OF LIABILITY", [
                  "No liability for delays caused by client",
                  "Not responsible for third-party service issues"
                ])}

                {renderClause("10. AMENDMENTS TO TERMS", [
                  "Terms may be updated periodically",
                  "Clients notified of major changes"
                ])}

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

// Helper to render pricing tables
function renderTable(title, rows, headers = ["Pages", "Price (KES)", "Offer Price (KES)"]) {
  return (
    <TableContainer width="100%" bg="gray.900" borderRadius="md" p={4}>
      <Heading size="md" color="blue.300" mb={4}>{title}</Heading>
      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            {headers.map((h, i) => (
              <Th key={i} color="gray.200">{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={i}>
              {row.map((cell, j) => (
                <Td key={j} color={j === 2 ? "green.300" : "white"}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

// Helper to render clause sections
function renderClause(title, points) {
  return (
    <Box bg="gray.900" p={5} borderRadius="md" width="100%">
      <Heading size="md" color="blue.300" mb={3}>{title}</Heading>
      <List spacing={2}>
        {points.map((point, i) => (
          <ListItem key={i}>
            <ListIcon as={BsDot} color="blue.300" />
            {point}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Pricing;
