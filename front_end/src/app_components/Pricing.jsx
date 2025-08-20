import React, { useContext } from 'react';
import { dimensions } from '../appcontexts/dimensions';
import { 
  Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, 
  Text, VStack, Table, Thead, Tbody, Tr, Th, Td, 
  TableContainer, Heading, List, ListItem, ListIcon, useBreakpointValue 
} from '@chakra-ui/react';
import { BsDot } from "react-icons/bs";
import { Motionbox } from '../motion_components';

function Pricing() {
  const { winwidth, winheight } = useContext(dimensions);

  // Responsive values
  const tableFontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const headingSize = useBreakpointValue({ base: "sm", md: "md" });
  const mainHeadingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const bottomTextSize = useBreakpointValue({ base: "sm", md: "large" });
  const tabFontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const containerPadding = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Motionbox 
      width="100vw"  
      minHeight="100vh" 
      p={containerPadding} 
      bg="gray.800" 
      overflow="auto"
      initial={{x: 3000}}
      animate={{x: 0}}
      transition={{duration: 1.5, ease: 'easeIn', delay: 0}}
      exit={{x: -3000, transition: {duration: 0.5, ease: 'easeIn'}}}
    >
      <VStack spacing={6} width="100%" maxW="1200px" mx="auto">
        <Heading 
          color="blue.400" 
          fontSize={mainHeadingSize}
          fontWeight="bold"
          textAlign="center"
          pt={4}
        >
          Humverse Services & Terms
        </Heading>
        
        <Text color="white" fontSize="sm" textAlign="center" maxW="600px" px={2}>
          Explore our service packages and terms of engagement
        </Text>

        <Tabs 
          variant="enclosed-colored" 
          colorScheme="blue" 
          width="100%"
          isFitted
          mt={4}
          orientation="horizontal" // always top
        >
          <TabList mb="1em">
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={tabFontSize}
              py={2}
            >
              Our Services
            </Tab>
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={tabFontSize}
              py={2}
            >
              Terms & Conditions
            </Tab>
          </TabList>
          
          <TabPanels>
            {/* Services Tab */}
            <TabPanel p={4}>
              <VStack spacing={8} width="100%">
                {renderTable("Advertising Websites", [
                  ["1–3 pages", "15,000", "10,000"],
                  ["4–6 pages", "20,000", "15,000"],
                  ["7–10 pages", "25,000", "20,000"],
                  ["Extra page", "+1,500", "+1,000"]
                ], tableFontSize, headingSize)}

                {renderTable("Collection Websites", [
                  ["1–3 pages", "18,000", "12,000"],
                  ["4–6 pages", "25,000", "18,000"],
                  ["7–10 pages", "32,000", "25,000"],
                  ["Extra page", "+1,800", "+1,200"]
                ], tableFontSize, headingSize)}

                {renderTable("Interactive Websites (CMS)", [
                  ["One-sided CMS", "From 35,000", "25,000"],
                  ["Two-sided CMS", "From 50,000", "35,000"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Blog Sites (Web Apps)", [
                  ["Blog web app", "From 55,000", "40,000"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("E-Commerce (Web Apps)", [
                  ["Basic store", "80,000", "60,000"],
                  ["Advanced store", "120,000+", "90,000+"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Social Platforms (Web Apps)", [
                  ["Social platform app", "From 150,000", "110,000"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Dashboards (Web Apps)", [
                  ["Basic", "45,000", "35,000"],
                  ["Advanced", "65,000+", "50,000+"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Tools (Web Apps)", [
                  ["Functional tools", "From 50,000", "38,000"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Phone Apps", [
                  ["Blog apps", "From 70,000", "50,000"],
                  ["E-commerce apps", "From 100,000", "75,000"],
                  ["Social platform apps", "From 180,000", "130,000"],
                  ["Dashboard apps", "From 60,000", "45,000"],
                  ["Tools apps", "From 60,000", "45,000"]
                ], tableFontSize, headingSize, ["Category", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("AI Products", [
                  ["AI Chatbots", "From 40,000", "30,000"],
                  ["AI Recommendation Systems", "From 50,000", "38,000"],
                  ["AI Data Analysis Tools", "From 70,000", "50,000"],
                  ["AI Image Recognition", "From 80,000", "60,000"],
                  ["AI Voice Assistants", "From 90,000", "65,000"],
                  ["Speech-to-Text AI (mobile)", "From 60,000", "45,000"],
                  ["AI-based Translation Apps (mobile)", "From 70,000", "50,000"],
                  ["AI Media Filters/Enhancers (mobile)", "From 80,000", "60,000"]
                ], tableFontSize, headingSize, ["AI Service", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("API Development", [
                  ["Basic REST API", "From 20,000", "15,000"],
                  ["Complex API", "From 30,000", "22,000"]
                ], tableFontSize, headingSize, ["Type", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Deployment & Hosting", [
                  ["Website deployment", "5,000", "3,500"],
                  ["Web app deployment", "8,000", "6,000"],
                  ["Phone app publishing", "10,000", "7,500"]
                ], tableFontSize, headingSize, ["Service", "Price (KES)", "Offer Price (KES)"])}

                {renderTable("Other Charges", [
                  ["MongoDB Atlas DB (monthly)", "From 1,200", "From 900"],
                  [".com Domain (yearly)", "1,200–1,500", "1,000–1,200"],
                  [".co.ke Domain (yearly)", "1,000", "850"],
                  ["Vercel Hosting (monthly)", "From 500", "From 400"],
                  ["Render Hosting (monthly)", "800–2,000", "600–1,500"],
                  ["Maintenance Basic (monthly)", "3,000", "2,200"],
                  ["Maintenance Advanced (monthly)", "5,000–10,000", "4,000–7,500"]
                ], tableFontSize, headingSize, ["Service", "Price (KES)", "Offer Price (KES)"])}
              </VStack>
              <Text color="white" fontSize={bottomTextSize} fontWeight="bold" mt={8} textAlign="center" px={2}>
                FOR MORE CLARIFICATIONS OR QUESTIONS ON ANYTHING, YOU CAN CONTACT US OR ASK THE ASSISTANT
              </Text>
            </TabPanel>

            {/* Terms & Conditions Tab */}
            <TabPanel p={4}>
              <VStack spacing={6} align="start" width="100%" color="white">
                {renderClause("1. SERVICE INITIALIZATION", [
                  "Once the customer submits a request, the request must be approved by the admin before any further steps.",
                  "The admin will discuss the scope, features, pricing, and timelines with the client.",
                  "If an agreement is reached, the request is marked as Accepted.",
                  "Before work begins, the client must pay at least 50% of the total cost as a deposit. The deposit is non-refundable unless stated otherwise.",
                  "The project will only start once the agreed deposit is received.",
                  "Progress updates will be sent periodically via the request view page."
                ], headingSize)}

                {renderClause("2. SERVICE PAYMENTS", [
                  "Clients can pay in installments after the deposit, provided full payment is made before deployment or delivery.",
                  "The service will not be deployed, published, or handed over until 100% payment is received.",
                  "Late payments after agreed milestones may attract a 5% late fee per week."
                ], headingSize)}

                {renderClause("3. SERVICE COMPLETION", [
                  "A service is considered complete when all agreed deliverables are finished and approved in a final review session.",
                  "Once completed, any additional requests will be treated as a new service and charged accordingly.",
                  "Full payment must be made before deployment, hosting setup, or code transfer."
                ], headingSize)}

                <Box bg="gray.900" p={4} borderRadius="md" width="100%">
                  <Heading size={headingSize} color="blue.300" mb={3}>4. SERVICE CANCELLATION & COMPENSATION</Heading>
                  <Text fontWeight="bold" mb={2} fontSize={tableFontSize}>Cancellation Fees:</Text>
                  <TableContainer overflowX="auto">
                    <Table variant="simple" colorScheme="whiteAlpha" size="sm" fontSize={tableFontSize}>
                      <Thead>
                        <Tr>
                          <Th color="gray.200" fontSize={tableFontSize}>Project Progress Stage</Th>
                          <Th color="gray.200" fontSize={tableFontSize}>Work Done</Th>
                          <Th color="gray.200" fontSize={tableFontSize}>Cancellation Fee</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr><Td color="white">Within 24 hours of payment</Td><Td color="white">Minimal work (planning stage)</Td><Td color="white">10% of total project price</Td></Tr>
                        <Tr><Td color="white">After initial designs/mockups</Td><Td color="white">10–25% completed</Td><Td color="white">25% of total project price</Td></Tr>
                        <Tr><Td color="white">After frontend/backend core build</Td><Td color="white">26–50% completed</Td><Td color="white">50% of total project price</Td></Tr>
                        <Tr><Td color="white">After major functionality complete</Td><Td color="white">51–75% completed</Td><Td color="white">75% of total project price</Td></Tr>
                        <Tr><Td color="white">Near completion</Td><Td color="white">76–100% completed</Td><Td color="white">No refund (100% fee)</Td></Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <Text mt={4}>Cancellation by Humverse: We reserve the right to cancel a service due to violation of policy, non-payment, or failure to provide content/feedback. If cancelled for our reasons, a full refund will be issued.</Text>
                  <Text mt={2}>Compensation: Refunds processed within 24–72 hours. Refund amount = Amount Paid – Cancellation Fee.</Text>
                </Box>

                {renderClause("5. CLIENT OBLIGATIONS", [
                  "Provide all required content, branding assets, and instructions promptly.",
                  "Respond to feedback requests within 3 business days.",
                  "Ensure all information provided is accurate and does not infringe on third-party rights."
                ], headingSize)}

                {renderClause("6. REVISION POLICY", [
                  "All services include up to 2 free revision cycles within the agreed scope.",
                  "Additional revisions beyond that will be billed at KES 2,500/hour."
                ], headingSize)}

                {renderClause("7. DELIVERY & TIMELINES", [
                  "Delivery timelines are estimates and may vary due to unforeseen circumstances.",
                  "Delays caused by the client (late content, approvals) will extend delivery time without penalty to Humverse."
                ], headingSize)}

                {renderClause("8. CONFIDENTIALITY", [
                  "We will keep all project-related materials confidential unless required by law or given written permission to share."
                ], headingSize)}

                {renderClause("9. INTELLECTUAL PROPERTY", [
                  "Upon full payment, ownership of the final deliverables transfers to the client.",
                  "Humverse retains the right to showcase completed projects in our portfolio unless the client opts out in writing."
                ], headingSize)}

                {renderClause("10. PENALTIES", [
                  "Late Payment: 5% of the pending amount per week after due date.",
                  "Breach of Contract: Immediate termination of service without refund.",
                  "Unauthorized Use of Unpaid Work: If the client uses work before paying in full, legal action may be taken."
                ], headingSize)}
              </VStack>
              <Text color="white" fontSize={bottomTextSize} fontWeight="bold" mt={8} textAlign="center" px={2}>
                FOR MORE CLARIFICATIONS OR QUESTIONS ON ANYTHING, YOU CAN CONTACT US OR ASK THE ASSISTANT
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Motionbox>
  );
}

function renderTable(title, rows, fontSize = "sm", headingSize = "md", headers = ["Pages", "Price (KES)", "Offer Price (KES)"]) {
  return (
    <TableContainer width="100%" bg="gray.900" borderRadius="md" p={4} overflowX="auto">
      <Heading size={headingSize} color="blue.300" mb={4}>{title}</Heading>
      <Table variant="simple" colorScheme="whiteAlpha" size="sm" fontSize={fontSize}>
        <Thead>
          <Tr>
            {headers.map((h, i) => (
              <Th key={i} color="gray.200" fontSize={fontSize}>{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={i}>
              {row.map((cell, j) => (
                <Td key={j} color={j === 2 ? "green.300" : "white"} fontSize={fontSize}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function renderClause(title, points, headingSize = "md") {
  return (
    <Box bg="gray.900" p={4} borderRadius="md" width="100%">
      <Heading size={headingSize} color="blue.300" mb={3}>{title}</Heading>
      <List spacing={2} fontSize="md">
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
