import React, { createContext, useEffect, useState } from 'react'
import BASE_URL from '../constants/urls';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

function Auth_Provider({children}) {
  const [loggedin , setloggedin] = useState(false);
  const [admin , setadmin] = useState(false);
  const [user , setuser] = useState(null)
  const [loading , setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(function(){
      console.log('auth status changed'  , 'loggedin' , loggedin , 'admin' , admin);
      
  } , [loggedin , admin])
    
  const checkauthstatus = async function(){
    try{
      console.log('checking auth status');
      const status = await fetch(`${BASE_URL}/check_loggedin` , {
        method:'POST',
        credentials:'include',
        headers: {
          'Content-Type' : 'application/json'
        }
      })

      if(status.ok){
        const details = await status.json();
        const profile = details.user;
        if(!profile.admin){
          setloggedin(true);
          setuser(profile);
          setadmin(false);
          console.log('auth status checked successfully');
        }
        else{
          setloggedin(true);
          setuser(profile);
          setadmin(true);
          console.log('auth status checked successfully');
        }
       
      }
      else{
        setloggedin(false);
          setadmin(false);
          console.log('not authorised');
      }
    }
    catch(err){
       setloggedin(false);
       console.log('not authorised' , err);
    }
    finally{
      setloading(false);
    }
  } 
  
  useEffect(function(){
      checkauthstatus();
  } , []);

  return (
    <AuthContext.Provider value={{loggedin , admin , user , loading , checkauthstatus}}  >
   {children}
    </AuthContext.Provider>
  )
}

export {Auth_Provider , AuthContext}