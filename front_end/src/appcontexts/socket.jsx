import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client';
import BASE_URL from '../constants/urls';
import { AuthContext } from './auth';
import trigger_notification from '../utilities/notification triggre';
import squares from '../assets/squares.png';
import spheres from '../assets/sphere.png'
const socketcontext = createContext();


function Socket_provider({children}) {
    const {loggedin , admin , user} = useContext(AuthContext)
    const [socketconnected, setsocketconnected] = useState(false);
    const socketref = useRef(null);

    const [requestsent , setrequestsent] = useState(false);
    const [requestreceived , setrequestreceived] = useState(false);
    const [requestupdated , setrequestupdated] = useState(false);
    const [requestcancelled , setrequestcancelled] = useState(false);
    const [requestrejected , setrequestrejected] = useState(false);
    const [requestredeemed , setrequestredeemed] = useState(false);
    const [requestuncancelled , setrequestuncancelled] = useState(false);
    const [requestaccepted , setrequestaccepted] =  useState(false);
    const [previewsreceived , setpreviewsreceived] = useState(false);
    const [cancelaccepted , setcancelaccepted] = useState(false);
    const [compensationevent , setcompensationevent] = useState(null)
    



    





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
                if(user.admin){
                  socket.emit('register_admin' , {data:user._id} , function(){
                    console.log('admin socket has been registered');
                  })
                }
                else{
                  socket.emit('register' , {data:user._id} , function(){
                    console.log('socket has been registered');
                  })
                }
             
                 
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
              
          

              // CUSTOM EVENTS

            socket.on('request_received' , async function(){
              try{
                trigger_notification('NEW REQUEST' , 'a client just made a request' , squares , `https://humverse.dev`  )
               setrequestreceived(true);
               setTimeout(() => {
                 setrequestreceived(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request received event' ,err)
              }
            })


              socket.on('request_editted' , async function(){
              try{
                trigger_notification('REQUEST HAS BEEN EDITTED' , 'a client just editted request' , squares , `https://humverse.dev`  )

               setrequestupdated(true);
               setTimeout(() => {
                 setrequestupdated(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request editted event' ,err)
              }
            })
             


            socket.on('request_cancelled' , async function(){
              try{
                trigger_notification('REQUEST CANCELLED' , 'a client just cancelled a request' , squares , `https://humverse.dev`  )

               setrequestcancelled(true);
               setTimeout(() => {
                 setrequestcancelled(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request cancelled event' ,err)
              }
            })



            socket.on('request_rejected' , async function(){
              try{
                trigger_notification('REQUEST REJECTED' , 'sorry , your request was rejected' , squares , `https://humverse.dev`  )

               setrequestrejected(true);
               setTimeout(() => {
                 setrequestrejected(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request rejected event' ,err)
              }
            })


            socket.on('request_redeemed' , async function(){
              try{
                trigger_notification('REQUEST REDEEMED' , 'your request got redeemed' , squares , `https://humverse.dev`  )

               setrequestredeemed(true);
               setTimeout(() => {
                 setrequestredeemed(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request redeemed event' ,err)
              }
            })



            socket.on('request_uncancelled' , async function(){
              try{
                trigger_notification('REQUEST GOT UNCANCELLED' , 'a client just uncancelled' , squares , `https://humverse.dev`  )

              setrequestuncancelled(true);
               setTimeout(() => {
                 setrequestuncancelled(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request uncancelled event' ,err)
              }
            })


            socket.on('acceptance' , async function(){
              try{
                trigger_notification('REQUEST ACCEPTED' , 'your request was accepted' , squares , `https://humverse.dev`  )

              setrequestaccepted(true);
               setTimeout(() => {
                 setrequestaccepted(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request accepted event' ,err)
              }
            })


          



            socket.on('previews' , async function(){
              try{
                trigger_notification('REQUST PROGRESS' , 'see the progress made in your request' , squares , `https://humverse.dev`  )

              setpreviewsreceived(true);
               setTimeout(() => {
                 setpreviewsreceived(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling request previews event' ,err)
              }
            })


            socket.on('cancel_accepted' , async function(){
              try{
                trigger_notification('CANCEL PROCESSED' , 'your request cancellation request has been received' , squares , `https://humverse.dev`  )

              setcancelaccepted(true);
               setTimeout(() => {
                 setcancelaccepted(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling cancel acceptance event' ,err)
              }
            })


            socket.on('compensation' , async function(){
              try{
                trigger_notification('COMPENSATION INITIATION' , 'compensation for your cancelled request has been initiated' , squares , `https://humverse.dev`  )

              setcompensationevent(true);
               setTimeout(() => {
                 setcompensationevent(false);
               }, 3000);     
              }
              catch(err){
                console.log('error handling compensation event' ,err)
              }
            })






















          





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
      // Clean up on unmount
          return () => {
            if (socketref.current) {
              socketref.current.disconnect();
              socketref.current = null;
              setsocketconnected(false);
            }
          }; 
    } , [loggedin]);


  return (
   <socketcontext.Provider  value={{socket:socketref , socketconnected , requestreceived , requestupdated , requestcancelled , requestrejected , requestredeemed , requestuncancelled ,requestaccepted , previewsreceived ,cancelaccepted , compensationevent}}>
   {children}
   </socketcontext.Provider>
  )
}

export  {Socket_provider  , socketcontext}