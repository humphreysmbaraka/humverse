import { Route, Routes } from "react-router-dom"
import Landing from "./app_components/landing"
import Home from "./app_components/Home"
import {Helmet} from 'react-helmet';
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
import squares from './assets/squares.png'
// import Nav_layout from "./UNUSED_components/Navigator_layout.jsx"
// import Navbar from "./UNUSED_components/Navigator_layout.jsx"
// import Main from "./UNUSED_components/Assistant.jsx.jsx"
// import Gallery from "./UNUSED_components/gallery.jsx"
// import Landing from "./UNUSED_components/landing.jsx"
// import Assistant from "./UNUSED_components/Assistant.jsx.jsx"


function App() {

      
      
  return (

    <>

          
<Helmet>
        {/* Basic */}
        <title>Humverse</title>
        <meta name="google-site-verification" content="oGs6LClSNHkr6uICUmx2Lm88spU7gU1NvccC7qa5Ijc" />
        <meta name="description" content="We build websites, web apps, mobile apps, APIs, and AI-powered products — complete with hosting, deployment, and maintenance." />
        <meta name="keywords" content="website makers , website , web app ,  web app makers , app makers , app ,  phone app makers , API makers , software makers , software , API ,  API makers" />
        <meta name="author" content="Humphrey Mbaraka" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/squares.png" />
<link rel="canonical" href="https://humverse.vercel.app" />
<meta name="theme-color" content="#000000" />




{/* Open Graph (WhatsApp, FB, LinkedIn, Slack) */}
  <meta property="og:title" content="Humverse – web , apps and AI products builder - Web App" />
  <meta property="og:description" content="We build websites, web apps, mobile apps, APIs, and AI-powered products — complete with hosting, deployment, and maintenance." />
  <meta property="og:image" content="https://humverse.vercel.app/squares.png" />
  <meta property="og:url" content="https://humverse.vercel.app" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Humverse" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Humverse – web , apps and AI products builder - Web App" />
  <meta name="twitter:description" content="We build websites, web apps, mobile apps, APIs, and AI-powered products — complete with hosting, deployment, and maintenance." />
  <meta name="twitter:image" content="https://humverse.vercel.app/squares.png" />
  {/* <meta name="twitter:site" content="@HumverseAI" /> */}
  {/* <meta name="twitter:creator" content="@HumverseAI" /> */}


      </Helmet>

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
