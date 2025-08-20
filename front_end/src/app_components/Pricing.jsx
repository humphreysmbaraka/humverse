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
  const isMobile = useBreakpointValue({ base: true, md: false });
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
        >
          <TabList mb="1em" flexDirection="row">
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={tabFontSize}
              py={4}
            >
              Our Services
            </Tab>
            <Tab 
              _selected={{ color: 'white', bg: 'blue.600' }} 
              fontSize={tabFontSize}
              py={4}
            >
              Terms & Conditions
            </Tab>
          </TabList>
          
          <TabPanels>
            {/* Services Tab */}
            <TabPanel p={isMobile ? 1 : 4}>
              <VStack spacing={8} width="100%" color="white" align="start">
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>PLATFORM OVERVIEW</Heading>
                  <Text mb={3}>
                    humverse is a platform which offers a wide variety of services like:
                  </Text>
                  <List spacing={2} mb={4}>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />making websites</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />making web apps</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />making phone apps</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />making AI products</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />making APIs</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />deployment</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />hosting</ListItem>
                  </List>
                  <Text>
                    in humverse, the client gets to describe the product they want, and through our dedicated expertise, 
                    it gets done, and the client gets what they asked for. we offer the following services based on the 
                    type of product the client wants.
                  </Text>
                </Box>

                {/* MAKING WEBSITES */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>1. MAKING WEBSITES</Heading>
                  <Text mb={3}>
                    in this category, there are various types of websites we can make, each having a different building process, and hence different charges
                  </Text>
                  
                  <Box pl={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(a) advertising websites</Heading>
                    <Text mb={3}>
                      these are websites where the client just wants to advertise something.
                      there is no interactivity with the user, they can only view or read what is in that page.
                      it does not include a content management system, thus it is only a visit and view website.
                      these are charged according to the number of pages
                    </Text>
                    {renderTable("Advertising Websites", [
                      ["1–3 pages", "15,000", "10,000"],
                      ["4–6 pages", "20,000", "15,000"],
                      ["7–10 pages", "25,000", "20,000"],
                      ["Extra page", "+1,500", "+1,000"]
                    ], tableFontSize, headingSize, isMobile)}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(b) COLLECTION WEBSITES</Heading>
                    <Text mb={3}>
                      these are websites where you want visitors to register for something;
                      here the visitors can view or read what is on the website, but can also register for something if interested.
                      these are prices according to the number of pages
                    </Text>
                    {renderTable("Collection Websites", [
                      ["1–3 pages", "18,000", "12,000"],
                      ["4–6 pages", "25,000", "18,000"],
                      ["7–10 pages", "32,000", "25,000"],
                      ["Extra page", "+1,800", "+1,200"]
                    ], tableFontSize, headingSize, isMobile)}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(c) INTERACTIVE WEBSITES</Heading>
                    <Text mb={3}>
                      these are websites where the admin can post items, to be viewed by the visitors, and upload even more whenever they want.
                      they have a content management system.
                      it can be one sided, where only the admin/owner can upload or remove ie control the content, or two sided, where both admin and visitors can manage content eg post, delete etc
                    </Text>
                    {renderTable("Interactive Websites (CMS)", [
                      ["One-sided CMS", "From 35,000", "25,000"],
                      ["Two-sided CMS", "From 50,000", "35,000"]
                    ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                  </Box>
                </Box>

                {/* MAKING WEB APPS */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>2. MAKING WEB APPS</Heading>
                  <Text mb={3}>
                    web apps are websites, with intensive user interactions, authentication systems where the user/visitor, 
                    does not just visit, but also does their activities there. these are platforms where authenticated clients 
                    can access services, products, etc in that very site. they are more complex compared to websites, and have 
                    a more complex build process. they thus cost more than regular websites to build. they can also have phone 
                    apps, not necessarily or a must have, but most times, they do.
                  </Text>
                  
                  <Box pl={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(a) blog sites</Heading>
                    <Text mb={3}>
                      these are web apps where users post articles and read other users' articles.
                      they can also comment on other users' articles.
                      they include an authentication system, database setup, schemas, etc
                    </Text>
                    {renderTable("Blog Sites (Web Apps)", [
                      ["Blog web app", "From 55,000", "40,000"]
                    ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(b) e-commerce</Heading>
                    <Text mb={3}>
                      these are web apps where users/visitors buy and sell products, provide services, and other trades.
                      they include an authentication system, transaction system, database setup, etc.
                      users can view products/services/trades being offered, offer products/services/trades, contact other traders, etc.
                      their charges are quite diverse, since they can have a varying amount of features, eg communication among users (chat system), etc
                    </Text>
                    {renderTable("E-Commerce (Web Apps)", [
                      ["Basic store", "80,000", "60,000"],
                      ["Advanced store", "120,000+", "90,000+"]
                    ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(c) social platforms</Heading>
                    <Text mb={3}>
                      these are web apps where users interact with one another, eg chatting, video calls, voice calls, 
                      upload content, download content, share items, view, comment, etc
                      they also contain a wide variety of features, hence also their charges vary.
                    </Text>
                    {renderTable("Social Platforms (Web Apps)", [
                      ["Social platform app", "From 150,000", "110,000"]
                    ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(d) dashboards</Heading>
                    <Text mb={3}>
                      dashboards are web applications that provide a visual interface for data presentation and analysis.
                    </Text>
                    {renderTable("Dashboards (Web Apps)", [
                      ["Basic", "45,000", "35,000"],
                      ["Advanced", "65,000+", "50,000+"]
                    ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(e) tools</Heading>
                    <Text mb={3}>
                      these are web apps that fulfill a certain purpose, eg video editing, scanning, etc.
                      in short, these are web apps that perform a certain action.
                      since they have various features, and play different roles, their charges also vary.
                      therefore, the client first sends a request to the platform, then the charges will be discussed.
                    </Text>
                    {renderTable("Tools (Web Apps)", [
                      ["Functional tools", "From 50,000", "38,000"]
                    ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(f) custom</Heading>
                    <Text mb={3}>
                      if the web app you want does not seem to fit in any of the mentioned categories, then no worries, 
                      just send the request, and the charges will be discussed. the cost will just be derived from the mentioned web apps.
                    </Text>
                  </Box>
                </Box>

                {/* MAKING PHONE APPS */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>3. MAKING PHONE APPS</Heading>
                  <Text mb={3}>
                    these are apps that get downloaded on mobile phones/smart phones, and run natively on the phone.
                    they are mostly complemented by a web app, but can also be on its own, without a web app.
                    they are of different categories, and thus have various charges.
                  </Text>
                  
                  <Box pl={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(a) blog apps</Heading>
                    <Text mb={3}>
                      these are apps where users post articles and read other users' articles.
                      they can also comment on other users' articles.
                      they include an authentication system, database setup, schemas, etc
                    </Text>
                    {renderTable("Blog Apps", [
                      ["Blog apps", "From 70,000", "50,000"]
                    ], tableFontSize, headingSize, isMobile, ["Category", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(b) e-commerce apps</Heading>
                    <Text mb={3}>
                      these are apps where users/visitors buy and sell products, provide services, and other trades.
                      they include an authentication system, transaction system, database setup, etc.
                      users can view products/services/trades being offered, offer products/services/trades, contact other traders, etc.
                      their charges are quite diverse, since they can have a varying amount of features, eg communication among users (chat system), etc
                    </Text>
                    {renderTable("E-Commerce Apps", [
                      ["E-commerce apps", "From 100,000", "75,000"]
                    ], tableFontSize, headingSize, isMobile, ["Category", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(c) social platform apps</Heading>
                    <Text mb={3}>
                      these are apps where users interact with one another, eg chatting, video calls, voice calls, 
                      upload content, download content, share items, view, comment, etc
                      they also contain a wide variety of features, hence also their charges vary.
                    </Text>
                    {renderTable("Social Platform Apps", [
                      ["Social platform apps", "From 180,000", "130,000"]
                    ], tableFontSize, headingSize, isMobile, ["Category", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(d) dashboard apps</Heading>
                    <Text mb={3}>
                      dashboard apps provide a mobile interface for data visualization and management.
                    </Text>
                    {renderTable("Dashboard Apps", [
                      ["Dashboard apps", "From 60,000", "45,000"]
                    ], tableFontSize, headingSize, isMobile, ["Category", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(e) tools apps</Heading>
                    <Text mb={3}>
                      these are apps that fulfill a certain purpose, eg video editing, scanning, etc.
                      in short, these are apps that perform a certain action.
                      since they have various features, and play different roles, their charges also vary.
                      therefore, the client first sends a request to the platform, then the charges will be discussed.
                    </Text>
                    {renderTable("Tools Apps", [
                      ["Tools apps", "From 60,000", "45,000"]
                    ], tableFontSize, headingSize, isMobile, ["Category", "Price (KES)", "Offer Price (KES)"])}
                  </Box>

                  <Box pl={4} mt={6}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(f) custom apps</Heading>
                    <Text mb={3}>
                      if the app you want does not seem to fit in any of the mentioned categories, then no worries, 
                      just send the request, then the charges will be discussed. the cost will just be derived from the mentioned apps.
                    </Text>
                  </Box>
                </Box>

                {/* MAKING AI PRODUCTS */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>4. MAKING AI PRODUCTS</Heading>
                  <Text mb={3}>
                    these are products that apply or use AI technology, eg AI agents, AI chat bots, etc.
                    we make AI products for both web based products and phone apps.
                  </Text>
                  {renderTable("AI Products", [
                    ["AI Chatbots", "From 40,000", "30,000"],
                    ["AI Recommendation Systems", "From 50,000", "38,000"],
                    ["AI Data Analysis Tools", "From 70,000", "50,000"],
                    ["AI Image Recognition", "From 80,000", "60,000"],
                    ["AI Voice Assistants", "From 90,000", "65,000"],
                    ["Speech-to-Text AI (mobile)", "From 60,000", "45,000"],
                    ["AI-based Translation Apps (mobile)", "From 70,000", "50,000"],
                    ["AI Media Filters/Enhancers (mobile)", "From 80,000", "60,000"]
                  ], tableFontSize, headingSize, isMobile, ["AI Service", "Price (KES)", "Offer Price (KES)"])}
                </Box>

                {/* MAKING APIs */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>5. MAKING APIs</Heading>
                  <Text mb={3}>
                    we also provide API making services. Just describe the API, what you want it to do and we will work on it.
                  </Text>
                  {renderTable("API Development", [
                    ["Basic REST API", "From 20,000", "15,000"],
                    ["Complex API", "From 30,000", "22,000"]
                  ], tableFontSize, headingSize, isMobile, ["Type", "Price (KES)", "Offer Price (KES)"])}
                </Box>

                {/* DEPLOYMENT & HOSTING */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>6. DEPLOYMENT & HOSTING</Heading>
                  <Text mb={3}>
                    we also provide deployment and hosting services as well as maintenance services for already built web applications and websites.
                  </Text>
                  {renderTable("Deployment & Hosting", [
                    ["Website deployment", "5,000", "3,500"],
                    ["Web app deployment", "8,000", "6,000"],
                    ["Phone app publishing", "10,000", "7,500"]
                  ], tableFontSize, headingSize, isMobile, ["Service", "Price (KES)", "Offer Price (KES)"])}
                </Box>

                {/* OTHER CHARGES */}
                <Box>
                  <Heading size={headingSize} color="blue.300" mb={3}>OTHER CHARGES</Heading>
                  <Text mb={3}>
                    apart from the price of making the product, there are other charges the client will pay, that get incurred in the building process.
                    these are charges for database, deployment, domain name, hosting, maintenance.
                    some of these charges are incurred only once, while some are incurred monthly or yearly.
                  </Text>
                  
                  <Box pl={4} mt={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(a) DATABASE CHARGES (MONTHLY)</Heading>
                    <Text mb={3}>
                      databases are not free to use on production level.
                      they have to be paid for, for the app/website/web app data to be accessible.
                    </Text>
                  </Box>

                  <Box pl={4} mt={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(b) DEPLOYMENT CHARGES (ONLY ONCE)</Heading>
                    <Text mb={3}>
                      this is the fee for deploying the product.
                      varies depending on the type of product.
                    </Text>
                  </Box>

                  <Box pl={4} mt={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(c) DOMAIN NAME (YEARLY)</Heading>
                    <Text mb={3}>
                      your web app or website will have a name, eg www.nameOfSite.com.
                      the domain name (nameOfSite) is paid for, and the payment is yearly.
                      it must be unique.
                    </Text>
                  </Box>

                  <Box pl={4} mt={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(d) HOSTING CHARGES (MONTHLY)</Heading>
                    <Text mb={3}>
                      your web app/website needs to be hosted to be availed to the internet and made accessible to everyone.
                      hosting platforms are not free, they are paid for, on a monthly basis.
                      the front end and back end are hosted separately on different service providers.
                    </Text>
                  </Box>

                  <Box pl={4} mt={4}>
                    <Heading size={headingSize} color="blue.200" mb={3}>(e) MAINTENANCE CHARGES (MONTHLY)</Heading>
                    <Text mb={3}>
                      even after the product is launched, the client may need updates, some changes, or even some fixes.
                      this is a service on its own, and should be paid for.
                    </Text>
                  </Box>

                  {renderTable("Other Charges", [
                    ["MongoDB Atlas DB (monthly)", "From 1,200", "From 900"],
                    [".com Domain (yearly)", "1,200–1,500", "1,000–1,200"],
                    [".co.ke Domain (yearly)", "1,000", "850"],
                    ["Vercel Hosting (monthly)", "From 500", "From 400"],
                    ["Render Hosting (monthly)", "800–2,000", "600–1,500"],
                    ["Maintenance Basic (monthly)", "3,000", "2,200"],
                    ["Maintenance Advanced (monthly)", "5,000–10,000", "4,000–7,500"]
                  ], tableFontSize, headingSize, isMobile, ["Service", "Price (KES)", "Offer Price (KES)"])}
                </Box>
              </VStack>
              <Text color="white" fontSize={bottomTextSize} fontWeight="bold" mt={8} textAlign="center" px={2}>
                FOR MORE CLARIFICATIONS OR QUESTIONS ON ANYTHING, YOU CAN CONTACT US OR ASK THE ASSISTANT
              </Text>
            </TabPanel>

            {/* Terms & Conditions Tab */}
            <TabPanel p={isMobile ? 1 : 4}>
              <VStack spacing={6} align="start" width="100%" color="white">
                <Box>
                  <Text mb={3}>
                    humverse is dedicated to provide its clients with the best service and produce quality.
                    however, it is important to clarify the terms and conditions for a service.
                    so, these terms and conditions will cover various aspects of our services eg:
                  </Text>
                  <List spacing={2} mb={4}>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />service initialization</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />service payments</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />service cancellation</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />service completion</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />transactions</ListItem>
                    <ListItem><ListIcon as={BsDot} color="blue.300" />etc</ListItem>
                  </List>
                  <Text>
                    the document will be getting updated as time goes on.
                  </Text>
                </Box>

                <Box bg="gray.900" p={isMobile ? 3 : 5} borderRadius="md" width="100%">
                  <Heading size={headingSize} color="blue.300" mb={3}>1. SERVICE INITIALIZATION</Heading>
                  <List spacing={2} fontSize={isMobile ? "sm" : "md"}>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      once the customer has made a request, the request must be first accepted by the admin/service provider, before the client can interact any further with the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      the service provider then calls the client, then they discuss charges, and other items, then if an agreement is achieved, the admin accepts the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      if no agreement is reached, the admin rejects the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      once the request has been accepted, the user can now initiate the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      initiation here means, that the admin can now start working on your request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      in order to initiate the request, the client is expected to pay at least the highlighted deposit of the project.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      the client can pay more, or even the full price at this point, but they should pay at least the deposit, not anything less than the deposit.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      if the client does not pay the deposit, the admin cannot start working on the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      after the payment, the admin can now start working on the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      the admin can be sending previews / pictures to the client, on the request view page, so that the client can see the progress.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={isMobile ? 3 : 5} borderRadius="md" width="100%">
                  <Heading size={headingSize} color="blue.300" mb={3}>2. SERVICE PAYMENTS</Heading>
                  <List spacing={2} fontSize={isMobile ? "sm" : "md"}>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      now we know that a minimum amount (deposit) or amount more than the deposit or even the full price should be paid for the admin to start working on the request.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      now if the client initiated the project, but did not pay the full service cost ie, maybe they just paid the deposit, or an amount more than the deposit but still less than the full price, they are allowed to top up in batches, until they meet the full price.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={isMobile ? 3 : 5} borderRadius="md" width="100%">
                  <Heading size={headingSize} color="blue.300" mb={3}>3. SERVICE COMPLETION</Heading>
                  <List spacing={2} fontSize={isMobile ? "sm" : "md"}>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      on service completion, the admin checks whether the client has fully paid for the service.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsDot} color="blue.300" />
                      if not, then the product will not be deployed, until the full price has been paid.
                    </ListItem>
                  </List>
                </Box>

                <Box bg="gray.900" p={isMobile ? 3 : 5} borderRadius="md" width="100%">
                  <Heading size={headingSize} color="blue.300" mb={3}>4. SERVICE CANCELLATION AND COMPENSATION</Heading>
                  <Text mb={3}>
                    after sending a request, and it getting accepted, the client may decide to cancel the request.
                    so there will be two parameters to be addressed at this point, cancellation and compensation.
                  </Text>
                  
                  <Heading size="sm" color="blue.200" mb={3}>(a) cancellation</Heading>
                  <Text mb={3}>
                    well cancellation is not just about cancelling the request, but also has effects on the service provider, 
                    where the time they dedicated to working on the request now has been put on trial.
                    thus, the service provider should be compensated for the time lost.
                    the compensation for the time lost will be based on how long after initiation was the request cancelled.
                  </Text>
                  
                  <Heading size="sm" color="blue.200" mb={3}>(b) compensation</Heading>
                  <Text mb={3}>
                    after the cancellation, the client will get compensated in 24 hours.
                    the compensated amount will be the amount they paid minus the compensation to the service provider for the time lost.
                  </Text>
                  
                  <Text fontWeight="bold" mb={2} fontSize={tableFontSize}>Cancellation Fees:</Text>
                  <TableContainer overflowX="auto">
                    <Table variant="simple" colorScheme="whiteAlpha" size="sm" fontSize={tableFontSize}>
                      <Thead>
                        <Tr>
                          <Th color="gray.200" fontSize={tableFontSize}>Project Stage</Th>
                          <Th color="gray.200" fontSize={tableFontSize}>Cancellation Fee</Th>
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
                  </TableContainer>
                </Box>
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

function renderTable(title, rows, fontSize = "sm", headingSize = "md", isMobile = false, headers = ["Pages", "Price (KES)", "Offer Price (KES)"]) {
  return (
    <TableContainer width="100%" bg="gray.900" borderRadius="md" p={isMobile ? 2 : 4} overflowX="auto" mb={4}>
      <Heading size={headingSize} color="blue.300" mb={isMobile ? 2 : 4}>{title}</Heading>
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

export default Pricing;