import React, { useContext, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Pricing from '../components/Pricing'
import Contacts from '../components/Contacts_page'
import Home from '../components/Home'
import Payment_page from '../components/Payment_page'
import Make_request from '../components/Request_product'
import View_Product from '../components/view_product'
import Layout from '../components/layout.jsx'
import Landing from '../components/landing.jsx'
import Assistant from '../COMPONENTS/Assistant.jsx'
import { AuthContext } from '../appcontexts/auth.jsx'
import { AnimatePresence } from 'framer-motion'
import Dashboard from '../admin_pages/dashboard.jsx'
import Clients from '../admin_pages/clients.jsx'
import New_Requests from '../admin_pages/new_requests.jsx'
import Works_in_progress from '../admin_pages/works_in_progress.jsx'
import Ai_setup from '../admin_pages/ai_setup.jsx'


function Main_Navigator() {

const location = useLocation();  
const {loggedin , admin} = useContext(AuthContext);


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