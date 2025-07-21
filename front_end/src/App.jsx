import { Route, Routes } from "react-router-dom"
import Landing from "./components/landing"
import Home from "./components/Home"

import Contacts from "./components/Contacts_page"
import Signup_prompt from "./components/signup_prompt"
import { Dimensions_Proviver } from "./appcontexts/dimensions"
import Make_request from "./components/Request_product"
import Payment_page from "./components/Payment_page"
import Pricing from "./components/Pricing"
import Dashboard from "./admin_pages/dashboard"
import Clients from "./admin_pages/clients"
import View_Product from "./components/view_product"
import Main_Navigator from "./navigators/Main_Navigator"
import { Auth_Provider } from "./appcontexts/auth"
import Assistant from "./components/Assistant"
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
