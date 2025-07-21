import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client';
import BASE_URL from '../constants/urls';
import { AuthContext } from './auth';

const socketcontext = createContext();


function Socket_provider({children}) {
    const {loggedin , admin} = useContext(AuthContext)
    const [socketconnected, setsocketconnected] = useState(false);
    const socketref = useRef(null);



    










    useEffect(function(){
          if(loggedin){

            const socket = io(`${BASE_URL}`, {
                withCredentials: true,
                reconnection: true,
                reconnectionAttempts: 5, // default is Infinity
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000
              });
    
              
        socketref.current = socket;
    
              socket.on('connect', () => {
                console.log('✅ Socket connected:', socket.id);
                setsocketconnected(socket.connected);
    
    
              });
          
              socket.on('disconnect', () => {
                console.log('❌ Socket dsocketconnected');
                setsocketconnected(false);
              });
    
    
              socket.on("reconnect_attempt", () => {
                console.log("🔁 Reconnect attempt...");
              });
              
              socket.on("reconnect", () => {
                console.log("✅ Successfully reconnected!");
              });
              
              socket.on("reconnect_failed", () => {
                console.log("❌ Reconnection failed.");
              });
              
          
              // Clean up on unmount
             
          }
          else{
            if(socketref.current){
                if(socketref.current.connected){
                    socketref.current.disconnect();
                    socketref.current = null;
                   setsocketconnected(false);
                }
            }
           
          }

          return () => {
            if (socketref.current) {
              socketref.current.disconnect();
              socketref.current = null;
              setsocketconnected(false);
            }
          }; 
    } , [loggedin]);


  return (
   <socketcontext.Provider  value={{socket:socketref , socketconnected}}>
   {children}
   </socketcontext.Provider>
  )
}

export  {Socket_provider  , socketcontext}