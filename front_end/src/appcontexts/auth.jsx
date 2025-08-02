import React, { createContext, useEffect, useState } from 'react'
import BASE_URL from '../constants/urls';
const AuthContext = createContext();

function Auth_Provider({children}) {
  const [loggedin , setloggedin] = useState(false);
  const [admin , setadmin] = useState(false);
  const [user , setuser] = useState(null)
  const [loading , setloading] = useState(true);
    
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
        }
        else{
          setloggedin(true);
          setuser(profile);
          setadmin(true);
        }
       
      }
      else{
        setloggedin(false);
          setadmin(false);
      }
    }
    catch(err){
       setloggedin(false);
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