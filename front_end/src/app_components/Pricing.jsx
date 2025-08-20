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
      width="100%"  
      minH="100vh"
      p={['10px', '20px']} 
      bg={'gray.800'} 
      overflowY={'auto'}
      overflowX={'hidden'}
      initial={{x: 3000}}
      animate={{x: 0}}
      transition={{duration: 1.5, ease: 'easeIn', delay: 0}}
      exit={{x: -3000, transition: {duration: 0.5, ease: 'easeIn'}}}
    >
      <VStack spacing={6} width="100%" maxW="1200px" mx="auto">
        <Heading 
          color="blue.400" 
          fontSize={['xl', '2xl', '3xl']} 
          fontWeight="bold"
          textAlign="center"
          pt={[2, 4]}
          px={[2, 4]}
        >
          Humverse Services & Terms
        </Heading>
        
        <Text 
          color="white" 
          fontSize={['sm', 'md']} 
          textAlign="center" 
          maxW={['90%', '600px']}
          px={[2, 0]}
        >
          Explore our service packages and terms of engagement
        </Text>

        <Tabs 
          variant="enclosed-colored" 
          colorScheme="blue" 
          width="100%"
          isFitted
          mt={4}
        >
          <TabList mb="1em" flexWrap="wrap">
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={['xs', 'sm', 'md']}
              flex="1"
            >
              Our Services
            </Tab>
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={['xs', 'sm', 'md']}
              flex="1"
            >
              Terms & Conditions
            </Tab>
          </TabList>
          
          <TabPanels>
            {/* Services Tab */}
            <TabPanel px={[1, 2, 4]}>
              <VStack spacing={[6, 8]} width="100%">

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

                {/* Interactive Websites (CMS) */}
                {renderTable("Interactive Websites (CMS)", [
                  ["One-sided CMS", "From 35,000", "25,000"],
                  ["Two-sided CMS", "From 50,000", "35,000"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* Blog Sites (Web Apps) */}
                {renderTable("Blog Sites (Web Apps)", [
                  ["Blog web app", "From 55,000", "40,000"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* E-Commerce (Web Apps) */}
                {renderTable("E-Commerce (Web Apps)", [
                  ["Basic store", "80,000", "60,000"],
                  ["Advanced store", "120,000+", "90,000+"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* Social Platforms (Web Apps) */}
                {renderTable("Social Platforms (Web Apps)", [
                  ["Social platform app", "From 150,000", "110,000"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* Dashboards (Web Apps) */}
                {renderTable("Dashboards (Web Apps)", [
                  ["Basic", "45,000", "35,000"],
                  ["Advanced", "65,000+", "50,000+"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* Tools (Web Apps) */}
                {renderTable("Tools (Web Apps)", [
                  ["Functional tools", "From 50,000", "38,000"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* Phone Apps */}
                {renderTable("Phone Apps", [
                  ["Blog apps", "From 70,000", "50,000"],
                  ["E-commerce apps", "From 100,000", "75,000"],
                  ["Social platform apps", "From 180,000", "130,000"],
                  ["Dashboard apps", "From 60,000", "45,000"],
                  ["Tools apps", "From 60,000", "45,000"]
                ], ["Category", "Price (KES)", "Offer Price (KES)"])}

                {/* AI Products */}
                {renderTable("AI Products", [
                  ["AI Chatbots", "From 40,000", "30,000"],
                  ["AI Recommendation Systems", "From 50,000", "38,000"],
                  ["AI Data Analysis Tools", "From 70,000", "50,000"],
                  ["AI Image Recognition", "From 80,000", "60,000"],
                  ["AI Voice Assistants", "From 90,000", "65,000"],
                  ["Speech-to-Text AI (mobile)", "From 60,000", "45,000"],
                  ["AI-based Translation Apps (mobile)", "From 70,000", "50,000"],
                  ["AI Media Filters/Enhancers (mobile)", "From 80,000", "60,000"]
                ], ["AI Service", "Price (KES)", "Offer Price (KES)"])}

                {/* API Development */}
                {renderTable("API Development", [
                  ["Basic REST API", "From 20,000", "15,000"],
                  ["Complex API", "From 30,000", "22,000"]
                ], ["Type", "Price (KES)", "Offer Price (KES)"])}

                {/* Deployment & Hosting */}
                {renderTable("Deployment & Hosting", [
                  ["Website deployment", "5,000", "3,500"],
                  ["Web app deployment", "8,000", "6,000"],
                  ["Phone app publishing", "10,000", "7,500"]
                ], ["Service", "Price (KES)", "Offer Price (KES)"])}

                {/* Other Charges */}
                {renderTable("Other Charges", [
                  ["MongoDB Atlas DB (monthly)", "From 1,200", "From 900"],
                  [".com Domain (yearly)", "1,200–1,500", "1,000–1,200"],
                  [".co.ke Domain (yearly)", "1,000", "850"],
                  ["Vercel Hosting (monthly)", "From 500", "From 400"],
                  ["Render Hosting (monthly)", "800–2,000", "600–1,500"],
                  ["Maintenance Basic (monthly)", "3,000", "2,200"],
                  ["Maintenance Advanced (monthly)", "5,000–10,000", "4,000–7,500"]
                ], ["Service", "Price (KES)", "Offer Price (KES)"])}

              </VStack>
            </TabPanel>

            {/* Terms & Conditions Tab */}
            <TabPanel px={[1, 2, 4]}>
              <VStack spacing={[4, 6]} align="start" width="100%" color="white">
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

                {/* Cancellation Fees */}
                <Box bg="gray.900" p={[3, 5]} borderRadius="md" width="100%" overflowX="auto">
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
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Motionbox>
  );
}

function renderTable(title, rows, headers = ["Pages", "Price (KES)", "Offer Price (KES)"]) {
  return (
    <TableContainer width="100%" bg="gray.900" borderRadius="md" p={[2, 4]} overflowX="auto">
      <Heading size="md" color="blue.300" mb={4}>{title}</Heading>
      <Table variant="simple" colorScheme="whiteAlpha" size={['sm', 'md']}>
        <Thead>
          <Tr>
            {headers.map((h, i) => (
              <Th key={i} color="gray.200" fontSize={['xs','sm']}>{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={i}>
              {row.map((cell, j) => (
                <Td key={j} color={j === 2 ? "green.300" : "white"} fontSize={['xs','sm']}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function renderClause(title, points) {
  return (
    <Box bg="gray.900" p={[3, 5]} borderRadius="md" width="100%">
      <Heading size="md" color="blue.300" mb={3}>{title}</Heading>
      <List spacing={2}>
        {points.map((point, i) => (
          <ListItem key={i} fontSize={['sm','md']}>
            <ListIcon as={BsDot} color="blue.300" />
            {point}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Pricing;
