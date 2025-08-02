import React, { useContext, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Pricing from '../app_components/Pricing.jsx'
import Contacts from '../app_components/Contacts_page.jsx'
import Home from '../app_components/Home.jsx'
import Payment_page from '../app_components/Payment_page.jsx'
import Make_request from '../app_components/Request_product.jsx'
import View_Product from '../app_components/view_product.jsx'
import Layout from '../app_components/layout.jsx'
import Landing from '../app_components/landing.jsx'
import Assistant from '../app_components/Assistant.jsx'
import { AuthContext } from '../appcontexts/auth.jsx'
import { AnimatePresence } from 'framer-motion'
import Dashboard from '../admin_pages/dashboard.jsx'
import Clients from '../admin_pages/clients.jsx'
import New_Requests from '../admin_pages/new_requests.jsx'
import Works_in_progress from '../admin_pages/works_in_progress.jsx'
import Ai_setup from '../admin_pages/ai_setup.jsx'
import { Box, Spinner, Text } from '@chakra-ui/react'


function Main_Navigator() {

const location = useLocation();  
const {loggedin , admin , loading} = useContext(AuthContext);

//    if(loading){
//       return (
//         <Box  width={'100%'} height={'100vh'} bg={'gray.800'}  display={'flex'} alignItems={'center'} justifyContent={'center'} >
//            {/* <Text color={'white'}  fontSize={'xxx-large'} fontWeight={'bold'}  >LOADING</Text> */}
//            <Spinner  color='white' width={'150px'} height={'150px'}  />
//         </Box>
//       )
//    }

  

    if(!loggedin){
        return(
         <AnimatePresence  mode='sync' >
           <Routes  location={location} key={location.pathname}>
          
          {/* <Route path="/" element={<Navigate to="/main" replace />} /> */}
          <Route path='/'  element={<Landing/>}  ></Route>
<Route  path='/main' element={<Layout/>} >
<Route index element={<Pricing />} />
{/* <Route path='land'  element={<Landing/>}  ></Route> */}
<Route path='services'   element={<Pricing/>}  ></Route>
<Route path='contacts'  element={<Contacts/>}  ></Route>
</Route>
</Routes>
         </AnimatePresence>
        )
    }

    else if(loggedin && !admin){
        return (
            <AnimatePresence>
            <Routes  location={location} key={location.pathname} >
                 <Route path="/main"  element={<Layout/>} >
                            {/* <Route  path='/main' element={<Layout/>} > */}
            <Route index  element={<Home/>}  ></Route>
            <Route path='land'  element={<Landing/>}  ></Route>
            <Route path='services'  element={<Pricing/>}  ></Route>
            <Route path='contacts'  element={<Contacts/>}  ></Route>
            <Route path='assistant'  element={<Assistant/>}  ></Route>
            <Route path='payment'  element={<Payment_page/>}  ></Route>
            <Route path='make_request'  element={<Make_request/>}  ></Route>
            <Route path='view_product'  element={<View_Product/>}  ></Route>  
            <Route path='dashboard'  element={<Dashboard/>}  ></Route> 
            <Route path='dashboard'  element={<Dashboard/>}  ></Route> 
            <Route  path='view_requests' element={<New_Requests/>}     />
            {/* <Route   path='view_product'  element={<View_Product/>}      /> */}
            <Route  path='view_projects'  element={<Works_in_progress/>}   />
            <Route    path='view_clients'  element={<Clients/>}  />
            <Route    path='ai_setup'  element={<Ai_setup/>}  />
                            </Route>          
          </Routes>
          </AnimatePresence>
           )
    }

    else if(loggedin && admin){
        return (
            <AnimatePresence>
        <Routes  location={location} key={location.pathname} >
                             <Route path="/main" element={<Layout/>} >
                        {/* <Route   path='/main' element={<Layout/>} > */}
         <Route index element={<Home/>}  ></Route>
        <Route path='services'  element={<Pricing/>}  ></Route>
        <Route path='contacts'  element={<Contacts/>}  ></Route>
        <Route path='assistant'  element={<Assistant/>}  ></Route>
        <Route path='payment'  element={<Payment_page/>}  ></Route>
        <Route path='make_request'  element={<Make_request/>}  ></Route>
        <Route path='view_product'  element={<View_Product/>}  ></Route>  
        <Route path='dashboard'  element={<Dashboard/>}  ></Route> 
        <Route  path='view_clients' element={<Clients/>}     />
            <Route   path='view_requests'  element={<New_Requests/>}      />
            <Route  path='view_projects'  element={<Works_in_progress/>}   />
            <Route    path='ai_setup'  element={<Ai_setup/>}  />
                      
                        </Route>
      </Routes>
      </AnimatePresence>
        )
    }
 
}

export default Main_Navigator