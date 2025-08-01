import { Route, Routes } from "react-router-dom"
import Landing from "./app_components/landing"
import Home from "./app_components/Home"

import Contacts from "./app_components/Contacts_page"
import Signup_prompt from "./app_components/signup_prompt"
import { Dimensions_Proviver } from "./appcontexts/dimensions"
import Make_request from "./app_components/Request_product"
import Payment_page from "./app_components/Payment_page"
import Pricing from "./app_components/Pricing"
import Dashboard from "./admin_pages/dashboard"
import Clients from "./admin_pages/clients"
import View_Product from "./app_components/view_product"
import Main_Navigator from "./navigators/Main_Navigator"
import { Auth_Provider } from "./appcontexts/auth"
import Assistant from "./app_components/Assistant"
import { Socket_provider } from "./appcontexts/socket"
// import Nav_layout from "./UNUSED_components/Navigator_layout.jsx"
// import Navbar from "./UNUSED_components/Navigator_layout.jsx"
// import Main from "./UNUSED_components/Assistant.jsx.jsx"
// import Gallery from "./UNUSED_components/gallery.jsx"
// import Landing from "./UNUSED_components/landing.jsx"
// import Assistant from "./UNUSED_components/Assistant.jsx.jsx"


function App() {

 
 
  return (

    <>

    <Auth_Provider>
      <Socket_provider>
    <Dimensions_Proviver>
    
    {/* <Landing/> */}
     {/* <Home/> */}
     {/* <Assistant/> */}
     {/* <Contacts/> */}
     {/* <Signup_prompt/> */}
     {/* <Make_request/> */}
     {/* <Payment_page/> */}
     {/* <Pricing/> */}
     {/* <Dashboard/> */}
     {/* <Clients/> */}
     {/* <View_Product/> */}
     <Main_Navigator/>
     </Dimensions_Proviver>
     </Socket_provider>
     </Auth_Provider>
    </>

 
  )
}

export default App





























 //   <Routes>
  //      {/* <Route   path="/" element={<Landing/>}  > */}
  //   <Route   path="/" element={<Nav_layout/>}  >
  //           <Route    index element={<Assistant/>}   />
  //           <Route  path="gallery" element={<Gallery/>} />

  //   </Route>
   
  // </Routes>
