import React, { useContext, useEffect, useRef, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Avatar, Box, Button, HStack, Input, Select, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { IoChevronBackOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { PiFilePdf } from "react-icons/pi";
import BASE_URL from '../constants/urls';
import { FaFileAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { error } from 'console';
import { AuthContext } from '../appcontexts/auth';
import { socketcontext } from '../appcontexts/socket';



function New_Requests() {
    const {winwidth , winheight} = useContext(dimensions);
    const [clients , setclients] = useState(null);
    const [selectedrequest , setselectedrequest]  = useState(null);
    const [allreqs , setallreqs] = useState([]);
    const [fetcherror , setfetcherror] = useState(null);
    const [isfetching , setisfetching] = useState(false);
    const [makingcost , setmakingcost] = useState(null);
    const [deploymentcost , setdeploymentcost] = useState(null);
    const [domainnamecost , setdomainnamecost] = useState(null);
    const [hostingcost , sethostingcost] = useState(null);
    const [maintainance , setmaintainance] = useState(null);
    const [currency , setcurrency] = useState('KSH');
    const [ rejectionreason , setrejectionreason] = useState(null)
    const[isrejected , setisrejected] = useState(null);
    const [acceptanceerror , setacceptanceerror] = useState(false);
    const [sendingacceptance , setsendingacceptance] = useState(false);
    const [rejecting , setrejecting] = useState(false);
    const [ rejectionerror ,setrejectionerror] = useState(null);
    const [tabindex , settabindex] = useState(0);
    const [editspecs , seteditspecs] = useState(false);
    const previewref = useRef(null);
    const [previews , setpreviews] = useState([]);
    const [sendingpreviews , setsendingpreviews] = useState(false);
    const [sendpreverror , setsendpreverror] = useState(null)
    const {user , loggedin} = useContext(AuthContext);
    const [timecompensation , settimecompensation] = useState(null);
    const [attachmentinfos , setattachmentinfos] = useState([]);
    const [previewsinfos , setpreviewsinfos] = useState([]);
    const [editrequesterror , seteditrequesterror] = useState(null);
    const [sendingedit , setsendingedit] = useState(false);
    const [compensate , setcompensate] = useState(false);
    const [paynumber , setpaynumber] = useState(null);
    const [amount , setamount] = useState(null);
    const [proceeding , setproceeding]= useState(false);
    const [proceederror , setproceederror] = useState(null)
    const [setcompensation , setsetcompensation]  = useState(false);
    const [compensating , setcompensating] = useState(false);
    const [compensateerror , setcompensateerror] =useState(null);
    const [cancelcharge , setcancelcharge] = useState(null);
    const [compensationamount , setcompensationamount] = useState(null);
    // const [rejreason , setrejreason] = useState(null);
    const {socket , requestreceived , requestupdated , requestcancelled , cancelaccepted} = useContext(socketcontext);
   
     const [redeeming , setredeeming] = useState(false);
     const [redeemerror , setredeemerror] = useState(null);
    // const location = useLocation();
    // const reqs = location.state.requests;

    useEffect(function(){
        if(selectedrequest){
            if(selectedrequest.cancelled && selectedrequest.cancel_accepted && !selectedrequest.cancelinfo.compensated){
                setsetcompensation(true);
        
               }else{
                setsetcompensation(false);
               }
        }
        else{
            return
        }
     } , [selectedrequest])

    const fetchreqs = async function(){
        try{
           const requests = await fetch(`${BASE_URL}/get_requests`);
           if(requests.ok){
            setisfetching(false);
            setfetcherror(null);
            console.log('requests response' , requests);
            const reqdata = await requests.json();
            setallreqs(function(prev){
                // if(selectedrequest){
                   const newlist = reqdata.requests.map(function(val ,index){
                    if(selectedrequest){
                        if(selectedrequest._id === val._id){
                       
                            return {...val , selected:true}
                         }
                         else{
                            return {...val , selected:false};
                         }
                    }
                    else{
                        return {...val , selected:false};
                    }
                   
                    })

                    return newlist;
                // }
                // else{
                //     return reqdata.requests
                // }
            });
           }
           else{
            setisfetching(false);
            setfetcherror('server error occured');
           }
        }
        catch(err){
            console.log('error fetching requests' ,err);
        }
       }


       useEffect(function(){
        if(selectedrequest){
            allreqs.map(function(val , index){
                if(selectedrequest._id === val._id){
                    setselectedrequest(val);
                }
                else{
                 return;
                }
            })
        }
        else{
            return;
        }
         
    } , [allreqs])
        // useEffect(function(){
        //  if(selectedrequest){
        //     allreqs.map(function(val , index){
        //         if(val._id === selectedrequest._id){
        //             return (
        //                 {...selectedrequest , selected:true}
        //             )
        //         }
        //     })
        //  }
        // } , [allreqs])

    useEffect(function(){
        let timer;
        if(requestreceived){
           timer = setTimeout(function(){
            fetchreqs();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
    }  ,[requestreceived])

    useEffect(function(){
        let timer;
        if(requestupdated){
          timer = setTimeout(function(){
            fetchreqs();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
    }  ,[requestupdated])


    
    useEffect(function(){
        let timer;
        if(requestcancelled){
           timer = setTimeout(function(){
            fetchreqs();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
    }  ,[requestcancelled])




    useEffect(function(){
        let timer;
        if(cancelaccepted){
           timer = setTimeout(function(){
            fetchreqs();
            
          } , 1000)
        }
        else{

        }

        return () => clearTimeout(timer);
    }  ,[cancelaccepted])














    const view_updates = async function(obj){
        try{
           const   view = await fetch(`${BASE_URL}/view_ipdates/${obj._id}` , {
            method:'PATCH',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            }

           })

           if(view.ok){
            const load = await view.json();
            setselectedrequest(load.request);
             const seen = load.request;

             setselectedrequest(function(prev){
                if(prev && (prev._id !== obj._id)){
                    // prev = {...prev , selected:false};
                    const current = {...seen , selected:true};
                    return current;
                }
                else if(prev && (prev._id == obj._id)){
                    return prev;
                }
                else if(!prev){
                    // prev = {...prev , selected:false};
                    const current = {...obj , selected:true};
                    return current;
                }
               
             })

              setallreqs(function(prev){
                    return prev.map(function(val , index){
                        if (val._id == obj._id){
                          return seen;
                        }
                        else{
                            return val
                        }
                    })
                })
            //  return seen;

           }
        }
        catch(err){
            console.log('could not view updates' , err);
        }
    }
  

    useEffect(function(){
        const view_updates = async function(){
            try{
               const   view = await fetch(`${BASE_URL}/view_updates/${selectedrequest._id}` , {
                method:'PATCH',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                }

               })

               if(view.ok){
                const load = await view.json();
                setselectedrequest(load.request);
               }
            }
            catch(err){
                console.log('could not view updates' , err);
            }
        }
    } , [selectedrequest])



    useEffect(function(){

        if(!selectedrequest){
            return;
        }
        const fetchattachmentsinfo = async function(){
            console.log('fetching attachments');

            try{
                
               if(selectedrequest.attachments.length > 0){
                 console.log('attachments' , selectedrequest.attachments);
                 const infos = selectedrequest.attachments.map(function(val , index){
                    return new Promise(async function(resolve , reject){

                        let info;
                        let msg;
                        const fileinfo = await fetch(`${BASE_URL}/get_request_file_info/${val}` , {
                            method:'GET',
                            credentials:'include',
                            headers:{
                                'Content-Type':'application/json'
                            }
                        })
                        if(fileinfo.ok){
                          const details = await fileinfo.json();
                          info = details.info
                          console.log('attachment file info' , info);
                          msg = null;
                          resolve(info);
                        }
                        else{
                            const details = await fileinfo.json();
                            if(String(fileinfo.status).startsWith('4')){
                                msg = details.message;
                                console.log('error message' , msg);
                                info = null;
                                reject(msg);
                            }
                            else{
                                msg = 'server error';
                                info = null;
                                reject(msg);
                            }
                        }

                    })
                 })

                 const reqinfos = await  Promise.all(infos);
                 console.log('attachment infos' , reqinfos);
                 setattachmentinfos(reqinfos);
              //    return Promise.all(infos);
  
               }
               else{
                 console.log('no attachments in the request');
               }

              
            }
            catch(err){
                console.log('cannot fetch attachment info' , err);
            }
        }




        const fetchpreviewsinfo = async function(){
            try{
                console.log('fetching previews');
               if(selectedrequest.previews.length > 0){
                 console.log('previews , ' , selectedrequest.previews)
                 const infos = selectedrequest.previews.map(function(val , index){
                    return new Promise(async function(resolve , reject){

                        let info;
                        let msg;
                        const fileinfo = await fetch(`${BASE_URL}/get_preview_info/${val}` , {
                            method:'GET',
                            credentials:'include',
                            headers:{
                                'Content-Type':'application/json'
                            }
                        })
                        if(fileinfo.ok){
                          const details = await fileinfo.json();
                          info = details.info
                          msg = null;
                          resolve(info);
                        }
                        else{
                            const details = await fileinfo.json();
                            if(String(fileinfo.status).startsWith('4')){
                                msg = details.message;
                                info = null;
                                reject(msg);
                            }
                            else{
                                msg = 'server error';
                                info = null;
                                reject(msg);
                            }
                        }

                    })
                 })

                 const reqinfos = await  Promise.all(infos);
                 console.log('preview  infos' , reqinfos)
                 setattachmentinfos(reqinfos);
              //    return Promise.all(infos);
  
               }
               else{
                   console.log('no previews in request');
               }

              
            }
            catch(err){
                console.log('cannot fetch previews info' , err);
            }
        }

        fetchattachmentsinfo();
        fetchpreviewsinfo();


    } , [selectedrequest])

    const detatchfile = async function(itemindex){
        try{
          // console.log('detachoing')
         const newfilelist = previews.filter(function(val , index){
           return(
            index !== itemindex
           )
    
          
         })
         setpreviews(newfilelist);
        }
        catch(err){
          console.log('error detatching file' , err);
          return;
        }
      }
    
    

      const redeem = async function(){
        try{
            const sure = confirm('ARE YOU SURE YOU WANT TO REDEEM THIS REQUEST');
            if(!sure){
                return;
            }
           if(redeeming){

           }
           else{
            setredeeming(true);
            setredeemerror(null);
            const redemption = await fetch(`${BASE_URL}/redeem_request` , {
                 method:'PATCH',
                 headers:{
                    'Content-Type':'application/json'
                 } ,
                 credentials:'include',
                 body: JSON.stringify({reqid:selectedrequest._id})
            })

            if(redemption.ok){
                setredeeming(false);
                setredeemerror(null);
                const info = await redemption.json();
                const newselect = info.request;
                setselectedrequest(newselect);
                setallreqs(function(prev){
                    return prev.map(function(val , index){
                        if (val._id == newselect._id){
                          return newselect;
                        }
                        else{
                            return val
                        }
                    })
                })
                socket.current.emit('redeem' , {data:newselect} , function(){
                    console.log('redeem event emitted successfully')
                })
            }
            else{
                const info = await redemption.json();
                setredeeming(false);
                if(String(redemption.status).startsWith('4')){
                    setredeemerror(info.message);  
                }
                else{
                    setredeemerror('server error'); 
                }
            }
           }
        }
        catch(err){
            console.log('could not redeem request');
        }
      }
    
    
    
      const handlefileinput = async function(e){
        try{
         console.log('a file has been selected' , e.files);
         const files = [...e.files];
         console.log('files' ,files);
         setpreviews((prev)=>[...prev , ...files]);
        }
        catch(err){
          console.log('error handling file selection' , err);
          return;
        }
      }


      const send_previews = async function(){
        try{
        if(previews.length <= 0){
          return;
        }
        else{
            setsendingpreviews(true);
          // CHECK FILE TYPES TO ENSURE THEY ARE ALL IMAGES USING FOR OF
          for await(let file of previews){
            // console.log('file..', file)
            // const extentionstart = file.filename.lastIndexOf('.' , (filename.length));
            // const ext = file.filename.substring(extentionstart , file.filename.length);
            // if(ext !== '.png'){
            //     setsendingpreviews(false);
            //     // setpreviews([]);
            //     setsendpreverror('files must be images');
            //     throw new Error('file must be an image');
            // }
            
            const items = new FormData();
            items.append('id' , selectedrequest._id);
            items.append('user_id' , user._id);
            previews.forEach(function(val , index){
                items.append('files' , val)
            })
            const send = await fetch(`${BASE_URL}/send_preview` , {
                method:'POST',
                credentials:'include',
                body:items
            })

            if(send.ok){
                setsendingpreviews(false);
                setsendpreverror(null);
                setpreviews([]);
                const info = await send.json();
                setselectedrequest(info.request);
                setallreqs(function(prev){
                    return prev.map(function(val , index){
                        if(val._id == (info.request)._id){
                            return info.request
                        }
                        else{
                            return val
                        }
                    })
                })

                socket.current.emit('sent_previews' , {data:info.request}, function(){
                    console.log('acceptance request sent successfully');
                })
            }
            else{
                const info = await send.json();
                setpreviews([]);
                setsendingpreviews(false);
                if(String(send.status).startsWith('4')){
                    setsendpreverror(info.message);
                }
                else{
                    setsendpreverror('server error');
                }
            }
           
          }

        //   PART WHERE WE SENF FETCH REQUEST TO SEND  PREVIEWS

        }

        }
        catch(err){
            console.log('could not send files' , err);
            setsendingpreviews(false);
            setsendpreverror('could not send previews');
        }
      }
    


  useEffect(function(){
    console.log('selection changed' , makingcost , hostingcost , deploymentcost);
   settabindex(0);
   setisrejected(null);
   setmakingcost(null);
   setdeploymentcost(null);
   sethostingcost(null);
   setmaintainance(null);
   setdomainnamecost(null);

  } , [selectedrequest]);


    useEffect(function(){
        setisfetching(true);
        setfetcherror(null);
       const fetchallreqs = async function(){
        try{
           const requests = await fetch(`${BASE_URL}/get_requests`);
           if(requests.ok){
            setisfetching(false);
            setfetcherror(null);
            console.log('requests response' , requests);
            const reqdata = await requests.json();
            setallreqs(reqdata.requests);
           }
           else{
            setisfetching(false);
            setfetcherror('server error occured');
           }
        }
        catch(err){
            console.log('error fetching requests' ,err);
        }
       }

        fetchallreqs();
    } ,[])


    const setreject = async function(){
        try{
           if(selectedrequest){
              selectedrequest.rejected = true;
              setisrejected(selectedrequest.rejected);

              
           }
           else{
 
           }
        }
        catch(err){
            console.log('could not reject' , err)
        }
    }

    const cancelreject = async function(){
        try{
           if(selectedrequest){
              selectedrequest.rejected = false;
              setisrejected(selectedrequest.rejected);
              setrejectionreason(null);
              
           }
           else{
 
           }
        }
        catch(err){
            console.log('could not cancel reject' , err)
        }
    }


const sendacceptance = async function(){
    try{
       
        const sure = confirm(`are you sure you want to send acceptance`);
        if(!sure){
            return;
        }
        setacceptanceerror(null);
        // seteditrequesterror(null);
       if(sendingacceptance){
        //  console.log('sending..' , sendingacceptance);
         
       }
       else{
        setsendingacceptance(true);
        if(!makingcost || makingcost.trim()==''  || !deploymentcost || deploymentcost.trim()=='' || !hostingcost || hostingcost.trim()==''  ||  !currency || currency.trim()==''  ||   !maintainance || maintainance.trim()=='' || !domainnamecost || domainnamecost.trim() =='' ){
          editspecs?seteditrequesterror('wrong or missing parameters'):setacceptanceerror('wrong or missing parameters , check your inputs');
        }
        else{
            const acceptance = await fetch(`${BASE_URL}/accept_request` , {
                method:'PATCH',
                headers: {
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify({makingcost , deploymentcost ,hostingcost , currency , maintainance ,  reqid:selectedrequest._id  , domaincost:domainnamecost})
            })

            if(acceptance.ok){
                setsendingacceptance(false);
                // seteditspecs(false);
                setacceptanceerror(false);
                // seteditrequesterror(null)
                // seteditrequesterror(null);
                console.log('acceptance sent successfully');
                const acceptdata = await acceptance.json();
                setdeploymentcost(null);
                sethostingcost(null);
                setmakingcost(null);
                setmaintainance(null);
                setrejectionreason(null);
                setcurrency(null);
                setselectedrequest(acceptdata.request);
                setallreqs(function(prev){
                    return prev.map(function(val , index){
                        if(val._id == (acceptdata.request)._id){
                            return acceptdata.request;
                        }
                        else{
                            return val;
                        }
                    })
                })

                socket.current.emit('request_accepted' , {data:acceptdata.request} , function(){
                    console.log('acceptance event emitted successfully');
                })
            }
            else{
                setsendingacceptance(false);
                // seteditspecs(false);
                if(String(acceptance.status).startsWith('4')){
                    const acceptdata = await acceptance.json();
                    setacceptanceerror(acceptdata.message);
                    // seteditrequesterror(acceptdata.message)
                    setdeploymentcost(null);
                    sethostingcost(null);
                    setmakingcost(null);
                    setmaintainance(null);
                    setrejectionreason(null);
                    setcurrency(null)
                }
                else{
                    // seteditspecs(false);
                      setsendingacceptance(false);
                      setacceptanceerror('server error');
                    //   seteditrequesterror('server error')
                      setdeploymentcost(null);
                      sethostingcost(null);
                      setmakingcost(null);
                      setmaintainance(null);
                      setrejectionreason(null);
                      setcurrency(null);
                }
            }
        }

        

       }
    }
    catch(err){
        setsendingacceptance(false);
        console.log('error sending request acceptance' , err);
        setacceptanceerror('error sending acceptance');
    }
}




const editrequest = async function(){
    try{
       
        const sure = confirm(`are you sure you want to edit the parameters`);
        if(!sure){
            return;
        }
        // setacceptanceerror(null);
        seteditrequesterror(null);
       if(sendingedit){
        //  console.log('sending..' , sendingacceptance);
         
       }
       else{
        // setsendingacceptance(true);
        setsendingedit(true)
        if(!makingcost || makingcost.trim()==''  || !deploymentcost || deploymentcost.trim()=='' || !hostingcost || hostingcost.trim()==''  ||  !currency || currency.trim()==''  ||   !maintainance || maintainance.trim()=='' || !domainnamecost || domainnamecost.trim() =='' ){
        seteditrequesterror('wrong or missing parameters');
        }
        else{
            const acceptance = await fetch(`${BASE_URL}/edit_accepted_request` , {
                method:'PATCH',
                headers: {
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify({makingcost , deploymentcost ,hostingcost , currency , maintainance ,  reqid:selectedrequest._id  , domaincost:domainnamecost})
            })

            if(acceptance.ok){
                // setsendingacceptance(false);
                setsendingedit(false)
                seteditspecs(false);
                // setacceptanceerror(false);
                seteditrequesterror(null)
                console.log('request editted successfully');
                const acceptdata = await acceptance.json();
                setdeploymentcost(null);
                sethostingcost(null);
                setmakingcost(null);
                setmaintainance(null);
                setrejectionreason(null);
                setcurrency(null);
                setselectedrequest(acceptdata.request);
                setallreqs(function(prev){
                    return prev.map(function(val , index){
                        if(val._id == (acceptdata.request)._id){
                            return acceptdata.request;
                        }
                        else{
                            return val;
                        }
                    })
                })
            }
            else{
                // setsendingacceptance(false);
                seteditspecs(false);
                setsendingedit(false)
                if(String(acceptance.status).startsWith('4')){
                    const acceptdata = await acceptance.json();
                    // setacceptanceerror(acceptdata.message);
                    seteditrequesterror(acceptdata.message)
                    setdeploymentcost(null);
                    sethostingcost(null);
                    setmakingcost(null);
                    setmaintainance(null);
                    setrejectionreason(null);
                    setcurrency(null)
                }
                else{
                    seteditspecs(false);
                    // setsendingacceptance(false);
                    //   setacceptanceerror('server error');
                      seteditrequesterror('server error')
                      setdeploymentcost(null);
                      sethostingcost(null);
                      setmakingcost(null);
                      setmaintainance(null);
                      setrejectionreason(null);
                      setcurrency(null);
                }
            }
        }

        

       }
    }
    catch(err){
        // seteditspecs(false);
        setsendingedit(false)
        console.log('error sending request acceptance' , err);
        seteditrequesterror('could not do an edit');
    }
}


const rejectrequest = async function(){
    try{

        if(rejecting){

        }
        else{
            console.log('rejecting...');
            if(!rejectionreason){
                setrejectionerror('you must provide rejection reason');
                return;
            }
            setrejectionerror(null)
            const reject = await fetch(`${BASE_URL}/reject_request` , {
                method:'PATCH',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({reqid:selectedrequest._id , rejreason:rejectionreason})
            })
    
            if(reject.ok){
                setrejecting(false);
           const rejdata = await reject.json();
           console.log('request rejected successfully')
           setselectedrequest(rejdata.request);
           setallreqs(function(prev){
            return prev.map(function(val , index){
                if(val._id == (rejdata.request)._id){
                    return rejdata.request;
                }
                else{
                    return val;
                }
            })
        })
        socket.current.emit('request_rejected' , {data:rejdata.request} , function(){
            console.log('request rejected successfully')
        })
            }
            else{
                setrejecting(false);
                if(String(reject.status).startsWith('4')){
                    const rejdata = await reject.json();
                   setrejectionerror(rejdata.message);
                }
                else{
                    setrejectionerror('server error occured when rejecting , try again');
                }
            }
        }
    

    }
    catch(err){
        console.log('error rejecting request' , err);
        setrejectionerror('error rejecting')
    }
}


  const acceptcancel = async function(){
      try{
        if(proceeding){

        }
        else{
            const go = confirm('accept cancel');
            if(!go){
                return;
            }
          setproceeding(true);
          setproceederror(null);
          const accept = await fetch(`${BASE_URL}/accept_cancel`, {
            method:'PATCH',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:selectedrequest._id})
          })

          if(accept.ok){
       const info = await accept.json();
       setproceeding(false);
       setproceederror(null);
       setselectedrequest(info.request);
       setallreqs(function(prev){
       return  prev.map(function(val , index){
            if(val._id == (info.request)._id){
                return info.request
            }
            else{
                return val;
            }
        })
       })
       
        
       socket.current.emit('cancel_accepted' , {data:info.request} , function(){
        console.log('cancel accepteed successfully')
    })

          }
          else{
            const info = await accept.json()
            if(String(accept.status).startsWith('4')){
                   setproceederror(info.message);
            }
            else{
                setproceederror('server error'); 
            }
          }

        }
      }
      catch(err){
        setproceeding(false);
        console.log('could not accept cancel' , err);
        setproceederror('could not accept cancel');
      }
  }

  

  const initiatecompensation = async function(){
     try{
        if(compensating){

        }

       const go = confirm('initiate compensation');
       if(!go){
        return;
       }

       if(!cancelcharge || cancelcharge.trim()=='' || isNaN(cancelcharge)  || !compensationamount || compensationamount.trim()==''  || isNaN(compensationamount)){
return;
       }
       setcompensating(true);
       setcompensateerror(null);
       const comp = await fetch(`${BASE_URL}/initiate_compensation` , {
        method:'PATCH',
        credentials:'include',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({id:selectedrequest._id ,compensationamount , cancelcharge })
       })


       if(comp.ok){
        const info = await comp.json();
        setcompensating(false);
        setcompensateerror(null)
        setselectedrequest(info.request);
        setallreqs(function(prev){
            return prev.map(function(val , ind){
                if(val._id ==(info.request)._id){
                    return info.request;
                }
                else{
                    return val;
                }
            })
        })
        setcancelcharge(null);
        setcompensationamount(null);

        socket.current.emit('compensation' , {data:info.request} , function(){
            console.log('compensation initiated')
        })
       }
       else{
        setcompensating(false);
        const info = await comp.json();
        if(String(comp.status).startsWith('4')){
            setcompensateerror(info.message);
        }
        else{
            setcompensateerror('server error')
        }
       }

     }
     catch(err){
        console.log('coul not initiate compensation' , err);
        setcompensateerror('could not initiate compensation');
        setcompensating(false);
     }
  }
  return (
   <Box width={winwidth} height={winheight}  bg={'gray.800'} padding={'4px'} overflow={'auto'}  >
    <HStack  width={'90%'} height={'100%'} gap={'40px'} alignItems={'center'}  justifyContent={'space-between'} >
        <VStack width={'45%'} height={'100%'}  gap={'20px'} alignItems={'center'} position={'relative'}   >
            <HStack  mt={'20px'} mb={'5px'} width={'60%'} padding={'2px'}  justifyContent={'space-between'} >
                <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <IoChevronBackOutline  size={'25px'} color='gray'/>
                 </Box>

                 <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <GrNext  size={'25px'} color='gray' />
                 </Box>
            </HStack>

          <Tabs  width={'98%'} height={'90%'} p={'4px'} alignSelf={'center'} >
            <TabList alignSelf={'center'} width={'100%'} color={'white'} p={'2px'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} borderBottom={'none'} >
                <Tab color={'white'} fontSize={'medium'} fontWeight={'light'}  >ALL</Tab>
                <Tab color={'white'} fontSize={'medium'} fontWeight={'light'}  >NEW</Tab>
                {/* <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >RECEIVED</Tab> */}
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >ACCEPTED</Tab>
                
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >INITIATED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >CANCELED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >REJECTED</Tab>
                <Tab  color={'white'} fontSize={'medium'} fontWeight={'light'} >UPDATED</Tab>

               
            </TabList>
            <TabPanels   width={'100%'} height={'99%'} p={'2px'}  mt={'10px'}  overflow={'auto'} >
             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  overflow={'auto'}  >
             <VStack bg={'black'}  width={'98%'}  borderRadius={'10px'}  gap={'2px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    return(
                        <HStack  onClick={()=>{
                            setallreqs(function(prev){
                                
                                return prev.map(function(req , ind){
                                    if(req._id === val._id){
                                        const  obj = {...req , selected:true};
                                         setselectedrequest(obj);
                                        // return {...req , selected:true}
                                        
                                        return obj;
                                       
                                    }
                                    else{
                                        return {...req , selected:false}
                                    }
                                })
                                
                            })
                            // setselectedrequest(val);
                            // setselectedrequest(obj);
                        }}  width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'} overflowx={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  backgroundColor={val.selected?'gray.800':'transparent'} >
                            <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                            <Text color={'white'} fontSize={'x-small'}  fontWeight={'light'} >{val.client.username}</Text>
                            <Text color={'white'} fontSize={'x-small'}  fontWeight={'light'}  >{val.createdAt.slice(0 , 10)}</Text>
                            <Text color={'white'} fontSize={'x-small'}  fontWeight={'light'}  >{val.createdAt.slice(11 , 16)}</Text>
                            <Text color={'green'} p={'2px'}  fontSize={'x-small'}  fontWeight={'light'}  >{val.updated?'UPDATED':''}</Text>
                            <Text color={val.accepted&&!val.initiated&&!val.cancelled&&!val.rejected?'green':val.accepted&&val.initiated&&!val.cancelled&&!val.rejected?'purple':val.rejected?'red':val.cancelled?'orange':'green'} fontSize={'x-small'}  fontWeight={'light'}  >{val.accepted&&!val.initiated&&!val.cancelled&&!val.rejected?'ACCEPTED':val.accepted&&val.initiated&&!val.cancelled&&!val.rejected?'INITIATED':val.rejected?'REJECTED':(val.cancelled && !val.cancelinfo.compensated)?'CANCELLED':(val.cancelled && val.cancelinfo.compensated)?'compensated':'NEW'}</Text>
                            {/* <Text color={val.received?'green':'orange'} >{val.received?'Received':'not yet received'}</Text>
                            <Text color={val.initiated?'green.500':'orange'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                            <Text color={val.rejected?'red':'green'}  >{val.rejected?'rejected':'not rejected'}</Text>
                            <Text color={val.cancelled?'red':'green'}>{val.cancelled?'cancelled':'not cancelled'}</Text> */}
                        </HStack>
                    )
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'} overflow={'auto'} >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                   allreqs.map(function(val , index){
                      if(!val.accepted&&!val.initiated&&!val.cancelled&&!val.rejected){
                        return(
                            <HStack onClick={()=>{
                                setallreqs(function(prev){
                                    return prev.map(function(req , ind){
                                        if(req._id === val._id){
                                            const obj = {...req , selected:true};
                                            
                                            // return {...req , selected:true}
                                            setselectedrequest(obj);
                                            return obj;
                                        }
                                        else{
                                            return {...req , selected:false}
                                        }
                                    })
                                })
                                // setselectedrequest(val);
                            }} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'}   backgroundColor={val.selected?'gray.800':'transparent'}>
                            <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                            <Text  color={'white'} fontSize={'x-small'} fontWeight={'light'} >{val.client.username}</Text>
                            <Text  color={'white'} fontSize={'x-small'} fontWeight={'light'} >{val.createdAt.slice(0 , 10)}</Text>
                            <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(11 , 16)}</Text>
                            {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                            {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                            {/* <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text> */}
                        </HStack>
                        )
                      }
                      else{
                        
                      }
                   })
                 }
            </VStack>
             </TabPanel>


             <TabPanel overflow={'auto'}  width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.accepted&&!val.initiated&&!val.cancelled&&!val.rejected){
                        return(
                            <HStack onClick={()=>{
                                setallreqs(function(prev){
                                    return prev.map(function(req , ind){
                                        if(req._id === val._id){
                                            const obj = {...req , selected:true};
                                            setselectedrequest(obj);
                                            return obj;

                                            // return {...req , selected:true}
                                        }
                                        else{
                                            return {...req , selected:false}
                                        }
                                    })
                                })
                                // setselectedrequest(val);
                            }} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'} backgroundColor={val.selected?'gray.800':'transparent'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.client.username}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(0 , 10)}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(11 , 16)}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                {/* <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text> */}
                            </HStack>
                        )
                    }
                    else{

                    }
                   
                  })
                 }
            </VStack>
             </TabPanel>


             


             <TabPanel overflow={'auto'}  width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.accepted&&val.initiated&&!val.cancelled&&!val.rejected){
                        return(
                            <HStack onClick={()=>{
                                setallreqs(function(prev){
                                    return prev.map(function(req , ind){
                                        if(req._id === val._id){
                                            const obj = {...req , selected:true};
                                            setselectedrequest(obj);
                                            return obj;
                                            // return {...req , selected:true}
                                        }
                                        else{
                                            return {...req , selected:false}
                                        }
                                    })
                                })
                                // setselectedrequest(val);
                            }} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'} backgroundColor={val.selected?'gray.800':'transparent'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.client.username}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(0 , 10)}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(11 , 16)}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                {/* <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text> */}
                            </HStack>
                        )
                    }
                    else{

                    }
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}   overflow={'auto'} >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    
                    if(val.cancelled){
                        return(
                            <HStack onClick={()=>{
                                setallreqs(function(prev){
                                    return prev.map(function(req , ind){
                                        if(req._id === val._id){
                                            const obj = {...req , selected:true};
                                            setselectedrequest(obj);
                                            return obj;
                                            // return {...req , selected:true}
                                        }
                                        else{
                                            return {...req , selected:false}
                                        }
                                    })
                                })
                                // setselectedrequest(val);
                            }} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'}  backgroundColor={val.selected?'gray.800':'transparent'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text     color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.client.username}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(0 , 10)}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(11 , 16)}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{(val.cancelled && val.cancelinfo.compensated)?'compensated':'...'}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                {/* <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text> */}
                            </HStack>
                        )
                    }
                    else{

                    }
                   
                  })
                 }
            </VStack>
             </TabPanel>



             <TabPanel   overflow={'auto'} width={'100%'} height={'99%'} p={'2px'}  >
             <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.rejected){
                        return(
                            <HStack  onClick={()=>{
                                setallreqs(function(prev){
                                    return prev.map(function(req , ind){
                                        if(req._id === val._id){
                                            const obj = {...req , selected:true};
                                            setselectedrequest(obj);
                                            return obj;
                                            // return {...req , selected:true}
                                        }
                                        else{
                                            return {...req , selected:false}
                                        }
                                    })
                                })
                                // setselectedrequest(val);
                            }} width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'} backgroundColor={val.selected?'gray.800':'transparent'} >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.client.username}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(0 , 10)}</Text>
                                <Text   color={'white'} fontSize={'x-small'} fontWeight={'light'}>{val.createdAt.slice(11 , 16)}</Text>
                                {/* <Text>{val.accepted?'Accepted':'not yet accepted'}</Text> */}
                                {/* <Text>{val.received?'Received':'not yet received'}</Text> */}
                                {/* <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text> */}
                            </HStack>
                        )
                    }
                    else{

                    }
                   
                  })
                 }
            </VStack>
             </TabPanel>


             <TabPanel   width={'100%'} height={'99%'} p={'2px'}  overflow={'auto'}  >
             <VStack bg={'black'}  width={'98%'} maxHeight={'90%'} borderRadius={'10px'}  gap={'10px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    if(val.updated && !val.update_seen){
                         
                        return(
                            <HStack mt={'10px'} onClick={()=>{view_updates(val)}}  width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  backgroundColor={val.selected?'gray.800':'transparent'} 
                            
                            >
                                <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                                <Text  color={'white'} fontSize={'x-small'} fontWeight={'light'}   >{val.client.username}</Text>
                                <Text  color={'white'} fontSize={'x-small'} fontWeight={'light'}   >{val.createdAt.slice(0 , 10)}</Text>
                                <Text  color={'white'} fontSize={'x-small'} fontWeight={'light'}   >{val.createdAt.slice(11 , 16)}</Text>
                                <Text color={val.accepted&&!val.initiated&&!val.cancelled&&!val.rejected?'green':val.accepted&&val.initiated&&!val.cancelled&&!val.rejected?'purple':val.rejected?'red':val.cancelled?'orange':'green'}   >{val.accepted&&!val.initiated&&!val.cancelled&&!val.rejected?'ACCEPTED':val.accepted&&val.initiated&&!val.cancelled&&!val.rejected?'INITIATED':val.rejected?'REJECTED':val.cancelled?'CANCELLED':'NEW'}</Text>
                                {/* <Text color={val.received?'green':'orange'} >{val.received?'Received':'not yet received'}</Text>
                                <Text color={val.initiated?'green.500':'orange'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                                <Text color={val.rejected?'red':'green'}  >{val.rejected?'rejected':'not rejected'}</Text>
                                <Text color={val.cancelled?'red':'green'}>{val.cancelled?'cancelled':'not cancelled'}</Text> */}
                            </HStack>
                        )
                    }
                    else{

                    }
                 
                  })
                 }
            </VStack>
             </TabPanel>
            </TabPanels>
          </Tabs>

            {/* <VStack bg={'black'}  width={'98%'} height={'90%'} borderRadius={'10px'}  gap={'20px'} alignItems={'center'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   >
                 {allreqs?.length > 0 && 
                  allreqs.map(function(val , index){
                    return(
                        <HStack width={'100%'} p={'2px'} h={'35px'} borderBottomColor={'white'} borderBottomWidth={'1px'} justifyContent={'space-around'} >
                            <Avatar  objectFit={'contain'} width={'25px'} height={'25px'} borderRadius={'50%'}  src={val.client.picture?`${BASE_URL}/profile_pic/${val.client.picture}`: undefined} name={val.client.username} />
                            <Text>{val.client.username}</Text>
                            <Text>{val.createdAt.slice(0 , 10)}</Text>
                            <Text>{val.createdAt.slice(11 , 16)}</Text>
                            <Text>{val.accepted?'Accepted':'not yet accepted'}</Text>
                            <Text>{val.received?'Received':'not yet received'}</Text>
                            <Text color={'white'} >{val.initiated?'Initiated':'not yet initiated'}</Text>
                        </HStack>
                    )
                  })
                 }
            </VStack> */}



            {/* <HStack  mt={'5px'} mb={'20px'} width={'60%'} padding={'2px'}  justifyContent={'space-between'}  position={'absolute'} bottom={'10px'} >
                <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <IoChevronBackOutline  size={'25px'} color='gray'/>
                 </Box>

                 <Box as='button' width={'45px'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'2px'} bg={'white'} borderRadius={'10px'}  > 
                <GrNext  size={'25px'} color='gray' />
                 </Box>
            </HStack> */}
        </VStack>
        <VStack overflow={'auto'}    css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}   width={'50%'} height={'100%'}   gap={'20px'} alignItems={'center'}  >
             {/* {!selectedrequest  &&  
             
             <Text color={'white'}  fontSize={'larger'} fontWeight={'bold'} >NO CLIENT SELECTED YET</Text>
             
             } */}

             {/* {!selectedrequest  &&    */}
<>
             {/* <Avatar width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} />
             <Text mt={'15px'} mb={'15px'} color={'white'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}

             <Tabs   variant="soft-rounded" colorScheme="whiteAlpha" index={tabindex}  onChange={(index)=>{settabindex(index)}} width={'90%'} height={'40px'} bg={'gray.800'} borderTopRadius={'10px'} p={'2px'}  >
                <TabList  justifyContent={'space-between'} >
                    <Tab  _selected={{ bg: 'whiteAlpha.300' }} color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >DETAILS</Tab>
                    <Tab  _selected={{ bg: 'whiteAlpha.300' }} color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >PROCESS</Tab>
                    <Tab  _selected={{ bg: 'whiteAlpha.300' }} color={'blue.500'} fontSize={'medium'} fontWeight={'bold'} >INTERACT</Tab>
                </TabList>
                <TabPanels  mt={'10px'} width={'90%'} height={'600px'} borderRadius={'10px'} bg={'transparent'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                    <TabPanel position={'relative'} display={'flex'}  flexDirection={'column'} gap={'20px'} alignItems={'center'} width={'100%'} height={'100%'} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} p={'2px'} borderRadius={'10px'} >
                     {selectedrequest&&(!selectedrequest.accepted&&!selectedrequest.initiated&&!selectedrequest.cancelled&&!selectedrequest.rejected) && 
                     <>
                     <Text color={'green.500'}  fontSize={'x-large'}  >NEW REQUEST</Text>
                     <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest?.client?.picture?`${BASE_URL}/profile_pic/${selectedrequest?.client?.picture}`:undefined} name={selectedrequest?.client?.username} />
                     <Text mt={'10px'} mb={'5px'} color={'white'}   fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.username}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.email} / ${selectedrequest.email}` }</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'}   fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest.number}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'}   fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {(attachmentinfos && attachmentinfos.length > 0) &&
                                attachmentinfos.map(function(val , index){

                                
                         return(
                             <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_request_file/${val._id}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >{val.metadata.name}</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {(!attachmentinfos || attachmentinfos.length == 0) && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack>

                               
                      </>
                      }

                   {selectedrequest&&(selectedrequest.accepted&&!selectedrequest.initiated&&!selectedrequest.cancelled&&!selectedrequest.rejected) && 
                     <>
                     <Box zIndex={100} backgroundColor={'transparent'} opacity={1} width={'100%'} height={'100%'} position={'absolute'} display={'flex'} alignItems={'center'} justifyContent={'center'}  > 
                       <Text color={'green.800'} fontSize={'xxx-large'} >PENDING INITIATION</Text>
                     </Box>
                     {/* <Text color={'green.500'}  fontSize={'x-large'}  >NEW REQUEST</Text> */}
                     <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest?.client?.picture?`${BASE_URL}/profile_pic/${selectedrequest?.client?.picture}`:undefined} name={selectedrequest?.client?.username} />
                     <Text mt={'10px'} mb={'5px'} color={'white'}   fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.username}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.email} / ${selectedrequest.email}` }</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'}   fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest.number}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'}   fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {(attachmentinfos && attachmentinfos.length > 0) &&
                                attachmentinfos.map(function(val , index){

                                
                         return(
                             <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_request_file/${val._id}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >{val.metadata.name}</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {(!attachmentinfos || attachmentinfos.length == 0) && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack>

                                <Text  fontSize={'x-large'} color={'white'}  >PAYMENT DETAILS</Text>

                                {/* <Text>costs of service</Text> */}

                                <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF MAKING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.making_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF DEPLOYING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.deploying_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF DOMAIN NAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.domain_name_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >HOSTING FEE
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.hosting_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >MAINTAINANCE FEE
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.maintainance_cost}</Text>
                     </Text>

                    


                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >TOTAL COST
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.total_payment_required}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >DEPOSIT REQUIRED
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.deposit_required}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >TOTAL PAID
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.total_paid}</Text>
                     </Text>


                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >AMOUNT REMAINING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.amount_remaining}</Text>
                     </Text>

                     
                     {/* <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                     <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}
                      </>
                      }


{selectedrequest&&(selectedrequest.accepted&&selectedrequest.initiated&&!selectedrequest.cancelled&&!selectedrequest.rejected) && 
                     <>
                     {/* <Box zIndex={100} opacity={'0.6'}  position={'absolute'} display={'flex'} alignItems={'center'} justifyContent={'center'}  > 
                       <Text color={'green.500'} fontSize={'xx-large'} >PENDING INITIATION</Text>
                     </Box> */}
                     {/* <Text color={'green.500'}  fontSize={'x-large'}  >NEW REQUEST</Text> */}
                     <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} borderWidth={'3px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest?.client?.picture?`${BASE_URL}/profile_pic/${selectedrequest?.client?.picture}`:undefined} name={selectedrequest?.client?.username} borderColor={'purple'} />
                     <Text mt={'10px'} mb={'5px'} color={'purple'}   fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.username}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'purple'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.email} / ${selectedrequest.email}` }</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'purple'}   fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest.number}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'purple'}   fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'purple'}  fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {(attachmentinfos && attachmentinfos.length > 0) &&
                                attachmentinfos.map(function(val , index){

                                
                         return(
                             <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_request_file/${val._id}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >{val.metadata.name}</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {(!attachmentinfos || attachmentinfos.length == 0) && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack>

                                <Text  fontSize={'x-large'} color={'white'}  >PAYMENT DETAILS</Text>

                                {/* <Text>costs of service</Text> */}

                                <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF MAKING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.making_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF DEPLOYING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.deploying_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF DOMAIN NAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.domain_name_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >HOSTING FEE
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.hosting_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >MAINTAINANCE FEE
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.maintainance_cost}</Text>
                     </Text>

                    


                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >TOTAL COST
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.total_payment_required}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >DEPOSIT REQUIRED
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.deposit_required}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >TOTAL PAID
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.total_paid}</Text>
                     </Text>


                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >AMOUNT REMAINING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.amount_remaining}</Text>
                     </Text>

                     
                     {/* <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                     <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}
                      </>
                      }


{selectedrequest&&(selectedrequest.cancelled) && 
                     <>
                     <Box zIndex={100} opacity={1} width={'100%'} height={'100%'}  position={'absolute'} display={'flex'} alignItems={'center'} justifyContent={'center'}  > 
                       <Text color={'orange.800'} fontSize={'xxx-large'} >THIS REQUEST WAS CANCELLED</Text>
                     </Box>
                     {/* <Text color={'green.500'}  fontSize={'x-large'}  >NEW REQUEST</Text> */}
                     <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} borderWidth={'3px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest?.client?.picture?`${BASE_URL}/profile_pic/${selectedrequest?.client?.picture}`:undefined} name={selectedrequest?.client?.username} borderColor={'orange'} />
                     <Text mt={'10px'} mb={'5px'} color={'orange'}   fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.username}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'orange'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.email} / ${selectedrequest.email}` }</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'orange'}   fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest.number}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'orange'}   fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'orange'}  fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {(attachmentinfos && attachmentinfos.length > 0) &&
                                attachmentinfos.map(function(val , index){

                                
                         return(
                             <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_request_file/${val._id}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >{val.metadata.name}</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {(!attachmentinfos || attachmentinfos.length == 0) && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack>

                                <Text  fontSize={'x-large'} color={'white'}  >PAYMENT DETAILS</Text>

                                {/* <Text>costs of service</Text> */}

                                <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF MAKING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.making_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF DEPLOYING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.deploying_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >COST OF DOMAIN NAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.domain_name_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >HOSTING FEE
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.hosting_cost}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >MAINTAINANCE FEE
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.payments_required.maintainance_cost}</Text>
                     </Text>

                    


                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >TOTAL COST
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.total_payment_required}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >DEPOSIT REQUIRED
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.deposit_required}</Text>
                     </Text>

                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >TOTAL PAID
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.total_paid}</Text>
                     </Text>


                     <Text mt={'10px'} mb={'5px'} color={'white'}  fontWeight={'light'} >AMOUNT REMAINING
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest.payments.amount_remaining}</Text>
                     </Text>

                     
                     {/* <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text>
                     <Text mt={'15px'} mb={'15px'} color={'black'}  fontSize={'larger'} fontWeight={'bold'} >USERNAME</Text> */}
                      </>
                      }




{selectedrequest&&(selectedrequest.rejected) && 
                     <>
                     <Box zIndex={100} opacity={1} width={'100%'} height={'100%'} position={'absolute'} display={'flex'} alignItems={'center'} justifyContent={'center'}  > 
                       <Text color={'red.800'} fontSize={'xxx-large'} >THIS REQUEST WAS REJECTED</Text>
                     </Box>
                   
                     <Avatar mt={'10px'} width={'200px'}  height={'200px'} borderRadius={'50%'} borderWidth={'3px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={0} src={selectedrequest?.client?.picture?`${BASE_URL}/profile_pic/${selectedrequest?.client?.picture}`:undefined} name={selectedrequest?.client?.username} borderColor={'purple'} />
                     <Text mt={'10px'} mb={'5px'} color={'red'}   fontWeight={'light'} >sent by
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.username}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'red'} fontWeight={'light'} >email
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest?.client?.email} / ${selectedrequest.email}` }</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'red'}   fontWeight={'light'} >phone number
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{`${selectedrequest.number}`}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'red'}   fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>
 
                     <Text mt={'10px'} mb={'5px'} color={'red'}  fontWeight={'light'} >USERNAME
                     <Text as={'span'} fontSize={'medium'}  fontWeight={'bold'} color={'black'} >{selectedrequest?.client?.username}</Text>
                     </Text>


                     <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >DESCRIPTION</Text>
                     <Textarea color={'white'} value={selectedrequest.description} resize={false} width={'98%'} minH={'250px'} maxH={'550px'}  textAlign={'justify'} whiteSpace={'pre-wrap'} wordBreak={'break-all'} p={'2px'} borderRadius={'10px'} readOnly={true} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} ></Textarea>


                                <Text mt={'20px'} textAlign={'left'} alignSelf={'flex-start'} color={'white'} fontSize={'large'}  >ATTACHMENTS</Text>
                                <HStack width={'98%'} p={'2px'} flexWrap={'wrap'} gap={'10px'} >
                                {(attachmentinfos && attachmentinfos.length > 0) &&
                                attachmentinfos.map(function(val , index){

                                
                         return(
                             <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_request_file/${val._id}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                             <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >{val.metadata.name}</Text>
                          </VStack>
                         )
                     })
                     
                     }
                     {(!attachmentinfos || attachmentinfos.length == 0) && 
                                                     <Text color={'white'} fontSize={'large'}  >This request has no attachments</Text>

                     }
                                </HStack>


                     
                    
                      </>
                      }
                      {!selectedrequest && 
                      <Text mt={'20px'} color={'white'} fontSize={'large'} fontWeight={'bold'}  >SELECT A REQUEST FIRST</Text>
                      }
                    </TabPanel>

                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >


                              {/* NEW REQUEST */}
                    {(selectedrequest&&!selectedrequest.accepted&&!selectedrequest.initiated&&!selectedrequest.cancelled&&!selectedrequest.rejected)&&  
                     <>

                   


                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                        <Text color={'white'} fontWeight={'bold'} >SET CHARGES AND OTHER PARAMETERS FOR THE REQUEST OR REJECT THE REQUEST</Text>


                 {
                    acceptanceerror &&  
                    <Text color={'red'}  fontWeight={'light'} fontSize={'large'} >{acceptanceerror}</Text>
                 }
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >currency</Text>
                            <Select onChange={(e)=>{setcurrency(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        >
                                <option value='KSH' >KSH</option>
                                <option value='USD' >USD</option>
                            </Select>
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={makingcost} onChange={(e)=>{setmakingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                    
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON DEPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Deployment cost</Text>
                            <Input value={deploymentcost} onChange={(e)=>{setdeploymentcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input value={domainnamecost} onChange={(e)=>{setdomainnamecost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>



                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input value={hostingcost} onChange={(e)=>{sethostingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >MAINTAINANCE</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={maintainance} onChange={(e)=>{setmaintainance(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>
                     </VStack>

                     {
                    acceptanceerror &&  
                    <Text color={'red'}  fontWeight={'light'} fontSize={'large'} >{acceptanceerror}</Text>
                 }
                     <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                        <Button onClick={sendacceptance}  width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='green' >ACCEPT  REQUEST</Button>
                        <Button onClick={()=>{setisrejected(true)}} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >REJECT  REQUEST</Button>

                     </HStack>

                     {sendingacceptance &&  
                     <Spinner color='white'  width={'30px'} h={'30px'} mt={'15px'}  ></Spinner>
                     }


                     {isrejected &&  
                     <>
                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                       
                        {/* <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text> */}
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >reason of rejection</Text>
                            <Input  value={rejectionreason} onChange={(e)=>{setrejectionreason(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>
                     </VStack>

  

                            {rejectionerror  &&  
                            <Text color={'orange'} fontSize={'medium'} fontWeight={'bold'} >{rejectionerror}</Text>
                            }


                            <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                            <Button onClick={cancelreject} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='orange' >CANCEL</Button>
                            <Button  onClick={rejectrequest} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >SEND REJECTION</Button>

                            </HStack>

                            {rejecting  &&  
                            <Spinner    size={'medium'} color='orange'  />
                            }
</>
                     }

                     
                    
                      </>
                      }


                             {/* PENDING INITIATION */}
                          {(selectedrequest&&selectedrequest.accepted&&!selectedrequest.initiated&&!selectedrequest.cancelled&&!selectedrequest.rejected)&&  
                              <Box width={'100%'}  height={'100%'}   display={'flex'} alignItems={'center'} justifyContent={'center'} >
              <Text fontSize={'xx-large'}  color={'green'} fontWeight={'bold'}  >PENDING INITIATION</Text>
                              </Box>
                      }




                    {/* FOR INITIATED REQUEST */}
                    {(selectedrequest&&selectedrequest.accepted && selectedrequest.initiated && !selectedrequest.cancelled && !selectedrequest.rejected)  &&  
                     <>

                   


                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                        <Text color={'white'} fontWeight={'bold'} >THIS REQUEST IS ALREADY INITIATED</Text>



                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >PAYMENT STATUS</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >status</Text>
                            <Input value={selectedrequest.payments.status} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >TOTAL PAID</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.total_paid} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >AMOUNT REMAINING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.amount_remaining} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>



                
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >currency</Text>
                            <Select readOnly={true}  value={selectedrequest.payments.currency} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        >
                                {/* <option value='KSH' >KSH</option>
                                <option value='USD' >USD</option> */}
                            </Select>
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input  readOnly={true} value={selectedrequest.payments.payments_required.making_cost}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                    
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON DEPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Deployment cost</Text>
                            <Input readOnly={true} value={selectedrequest.payments.payments_required.deploying_cost} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input value={selectedrequest.payments.payments_required.domain_name_cost} readOnly={true}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>



                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input  readOnly={true} value={selectedrequest.payments.payments_required.hosting_cost}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >MAINTAINANCE</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.payments_required.maintainance_cost} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        {/* <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >TOTAL COST</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.total_payment_required} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >REQUIRED DEPOSIT</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.deposit_required} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack> */}


                       

                     </VStack>


                      

                   

                     
                    
                      </>
                      }




                      {/* FOR CANCELLED REQUEST */}
                      {(selectedrequest&&selectedrequest.cancelled)  &&  
                     <>

                   


                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} position={'relative'} >
                        {/* <Text color={'white'} fontWeight={'bold'} >THIS REQUEST IS ALREADY INITIATED</Text> */}
                         <Box zIndex={100}   bg={'transparent'} position={'absolute'} width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                                 <Text opacity={0.6} color={'orange'} fontWeight={'bold'} fontSize={'xxx-large'} >CANCELLED</Text>
                         </Box>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >PAYMENT STATUS</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >status</Text>
                            <Input value={selectedrequest.payments.status} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >currency</Text>
                            <Input readOnly={true}  color={'black'}  value={selectedrequest.payments.currency} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        >
                                {/* <option value='KSH' >KSH</option>
                                <option value='USD' >USD</option> */}
                            </Input>
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input  readOnly={true} value={selectedrequest.payments.payments_required.making_cost}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                    
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON DEPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Deployment cost</Text>
                            <Input readOnly={true} value={selectedrequest.payments.payments_required.deploying_cost} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input value={selectedrequest.payments.payments_required.domain_name_cost} readOnly={true}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>



                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input  readOnly={true} value={selectedrequest.payments.payments_required.hosting_cost}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >MAINTAINANCE</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.payments_required.maintainance_cost} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >TOTAL COST</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.total_payment_required} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >REQUIRED DEPOSIT</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.deposit_required} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >TOTAL PAID</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.total_paid} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >AMOUNT REMAINING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.amount_remaining} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                     </VStack>


                     

                   

                     
                    
                      </>
                      }



                      {/* FOR REJECTED REQUEST */}
                      {(selectedrequest&&selectedrequest.rejected)  &&  
                     <>

                   


                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} position={'relative'} >
                        {/* <Text color={'white'} fontWeight={'bold'} >THIS REQUEST IS ALREADY INITIATED</Text> */}
                         <Box zIndex={100} bg={'gray.800'} position={'absolute'} width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                                 <Text  color={'red'} fontWeight={'bold'} fontSize={'xxx-large'} >THIS REQUEST WAS REJECTED</Text>
                         </Box>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >PAYMENT STATUS</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >status</Text>
                            <Input value={selectedrequest.payments.status} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >currency</Text>
                            <Select readOnly={true}  value={selectedrequest.payments.currency} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        >
                                {/* <option value='KSH' >KSH</option>
                                <option value='USD' >USD</option> */}
                            </Select>
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input  readOnly={true} value={selectedrequest.payments.payments_required.making_cost}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                    
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON DEPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Deployment cost</Text>
                            <Input readOnly={true} value={selectedrequest.payments.payments_required.deploying_cost} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input value={selectedrequest.payments.payments_required.domain_name_cost} readOnly={true}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>



                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input  readOnly={true} value={selectedrequest.payments.payments_required.hosting_cost}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >MAINTAINANCE</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.payments_required.maintainance_cost} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >TOTAL COST</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.total_payment_required} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >REQUIRED DEPOSIT</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.deposit_required} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >TOTAL PAID</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.total_paid} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >AMOUNT REMAINING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={selectedrequest.payments.amount_remaining} readOnly={true} width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>


                     </VStack>


                     

                   

                     
                    
                      </>
                      }


                     


                      {!selectedrequest && 
                      <Text mt={'20px'} color={'white'} fontSize={'large'} fontWeight={'bold'}  >SELECT A REQUEST FIRST</Text>
                      }

                    </TabPanel>


                    <TabPanel display={'flex'}  flexDirection={'column'} alignItems={'center'} width={'98%'} p={'2px'} >

                   {/* NEW REQUEST */}
                    {(selectedrequest&&!selectedrequest.accepted && !selectedrequest.initiated && ! selectedrequest.cancelled && !selectedrequest.rejected)  &&  
                     <>

                     <Box  width={'100%'}  height={'100%'}  display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <Text color={'green'} fontSize={'xx-large'} >THIS REQUEST IS NEW</Text>
                     </Box>

                   

                    
                      </>
                      }


                      {/* ACCEPTED BUT NOT INITIATED */}



                      {(selectedrequest&&selectedrequest.accepted && !selectedrequest.initiated && ! selectedrequest.cancelled && !selectedrequest.rejected)  &&  
                     <>

                     <Box  width={'90%'} minHeight={'70%'}  display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <Text color={'green'} fontSize={'xx-large'} >PENDING INITIATION</Text>
                     </Box>

                   

                    
                      </>
                      }




                      {/* FOR AN INITIATED REQUEST */}
                      {(selectedrequest&&selectedrequest.accepted && selectedrequest.initiated && ! selectedrequest.cancelled && !selectedrequest.rejected)  &&  
                     <>

                     <VStack  width={'98%'}  p={'4px'}  alignItems={'center'} >
                        <Text color={'white'} fontWeight={'bold'} >THIS REQUEST IS ALREADY INITIATED</Text>
                        

                        
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >currency</Text>
                            <Select value={editspecs?currency:selectedrequest.currency} readOnly={editspecs?false:true} onChange={!editspecs?()=>{}:(e)=>{setcurrency(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        >
                                <option value='KSH' >KSH</option>
                                <option value='USD' >USD</option>
                            </Select>
                        </HStack>


                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >COST OF MAKING</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={editspecs?makingcost:selectedrequest.payments.payments_required.making_cost} readOnly={editspecs?false:true} onChange={!editspecs?()=>{}:(e)=>{setmakingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>

                    
                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS ON DEPLOYMENT</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Deployment cost</Text>
                            <Input value={editspecs?deploymentcost:selectedrequest.payments.payments_required.deploying_cost} readOnly={editspecs?false:true} onChange={!editspecs?()=>{}:(e)=>{setdeploymentcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>Domain name fee</Text>
                            <Input value={editspecs?domainnamecost:selectedrequest.payments.payments_required.deploying_cost} readOnly={editspecs?false:true} onChange={!editspecs?()=>{}:(e)=>{setdomainnamecost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>



                        <Text  textAlign={'left'} alignSelf={'flex-start'} color={'white'} >COSTS OF HOSTING</Text>
                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}  >amount</Text>
                            <Input value={editspecs?hostingcost:selectedrequest.payments.payments_required.hosting_cost}  readOnly={editspecs?false:true} onChange={!editspecs?()=>{}:(e)=>{sethostingcost(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <Text textAlign={'left'} alignSelf={'flex-start'} color={'white'}  >MAINTAINANCE</Text>
                        <HStack width={'95%'} gap={'10px'} p={'4px'} >
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'} >amount</Text>
                            <Input value={editspecs?maintainance:selectedrequest.payments.payments_required.maintainance_cost} readOnly={editspecs?false:true} onChange={!editspecs?()=>{}:(e)=>{setmaintainance(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}        />
                        </HStack>
                     

                     {
                    editrequesterror &&  
                    <Text color={'red'}  fontWeight={'light'} fontSize={'large'} >{editrequesterror}</Text>
                 }




                        
                     </VStack>
                     <Button onClick={()=>{seteditspecs(true)}} colorScheme='blue' color={'white'} borderRadius={'10px'} padding={'10px'} width={'45%'}  >EDIT SPECS</Button>

                     {editrequesterror &&  
                    
                    <Text color={'red'}  fontSize={'xx-small'} fontWeight={'bold'}  >{editrequesterror}</Text>
                }


                     {editspecs  &&       
                     <HStack justifyContent={'center'} width={'98%'} p={'2px'} gap={'20px'} mt={'20px'} >
                     <Button  onClick={editrequest} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='green' >EDIT  SPECS   {sendingedit && <Spinner color='white' width={'25px'} height={'25px'} />}</Button>
                     <Button onClick={()=>{seteditspecs(false)}} width={'27%'}  p={'5px'} borderRadius={'10px'} colorScheme='red' >EXIT EDIT</Button>

                  </HStack>
                     }


                    <Text  mt={'15px'} mb={'15px'} alignSelf={'flex-start'} textAlign={'left'} fontSize={'x-large'} color={'white'} fontWeight={'bold'} >ATTACHMENTS</Text>
                       <HStack  width={'98%'} p={'5px'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'} >
                           {
                            (selectedrequest.attachments.length > 0)?
                            (
                                selectedrequest.attachments.map(async function(val , index){
                                    
                                        let info;
                                        let msg;
                                        const fileinfo = await fetch(`${BASE_URL}/get_request_file_info/${val}` , {
                                            method:'GET',
                                            credentials:'include',
                                            headers:{
                                                'Content-Type':'application/json'
                                            }
                                        })
                                        if(fileinfo.ok){
                                          const details = await fileinfo.json();
                                          info = details.info
                                          msg = null;
                                        }
                                        else{
                                            const details = await fileinfo.json();
                                            if(String(fileinfo.status).startsWith('4')){
                                                msg = details.message;
                                                info = null;
                                            }
                                            else{
                                                msg = 'server error';
                                                info = null;
                                            }
                                        }
                                         return(
                                             <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_request_file/${val}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                                             <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                                             <Text width={'95%'} color={msg?'red':'white'} isTruncated={true} fontSize={'xs'}  >{info?info.name:msg}</Text>
                                          </VStack>
                                         )
                                })
                            )
                            :
                            (
                                <Text  mt={'15px'} mb={'15px'} alignSelf={'flex-start'} textAlign={'left'} fontSize={'large'} color={'white'} fontWeight={'bold'} >this request has no attachments</Text>
  
                            )
                           }
                       </HStack>

                       <Text color={'white'} fontSize={'large'} fontWeight={'bold'} > SEND PREVIEWS</Text>

                       <Input multiple={true} type='file'  ref={previewref} onChange={(e)=>{handlefileinput(e.target)}} display={'none'}      />
                        

                        <Button  onClick={()=>{previewref.current.click()}} padding={'5px'} colorScheme='purple' borderRadius={'10px'} mb={'10pxs'} >SELECT FILE(S)</Button>

                       <VStack  width={'98%'}  bg={'gray.500'} borderRadius={'10px'} p={'4px'} maxH={'200px'} >
                             {previews.length > 0    &&  
                             
                             previews.map(function(val , index){
                               
                                return(
                                    <HStack  key={index} width={'100%'} height={'30px'} alignItems={'center'} justifyContent={'space-between'} borderBottomColor={'white'} borderBottomWidth={'1px'} >
                                     <FaFileAlt size={'20px'} color='black' /> 
                                     <Text fontSize={'small'} color={'black'} fontWeight={'light'} >{val.name}</Text>
                                     <AiFillDelete size={'20px'} color='red' onClick={()=>{detatchfile(index)}} />
  
                                    </HStack>
                                )
                             })
                             
                             }
                       </VStack>
                       {sendpreverror && 
                       
                       <Text color={'white'} fontSize={'small'} fontWeight={'light'} >{sendpreverror}</Text>}
                       <Button   mt={'10px'} onClick={send_previews} padding={'5px'} colorScheme='purple' borderRadius={'10px'} >send preview(s) 
                       {sendingpreviews  
                       
                       && <Spinner       width={'20px'} height={'20px'} color='white'          />
}
                        </Button>


            <Text fontSize={'x-large'} color={'white'} fontWeight={'bold'} >SHARED PREVIEWS</Text>
           {previewsinfos&&previewsinfos.length > 0 ?
(
             previewsinfos.map(function(val , index){

             
                    
                return(
                    
                       <HStack  width={'98%'} p={'5px'} gap={'10px'} borderRadius={'10px'} >
                         <VStack  onClick={()=>{window.open(`${BASE_URL}/stream_preview/${val._id}` ,  '_blank')}} key={index} as='button' height={'100px'} width={'17%'} borderRadius={'10px'} borderWidth={'1px'}  borderColor={'white'}  alignItems={'center'}   >
                        <PiFilePdf    size={'80px'} borderRadius={'10px'}  color='red'    />
                        <Text width={'95%'} color={'white'} isTruncated={true} fontSize={'xs'}  >{val.name}</Text>
                        </VStack>
                       </HStack>
                  
                )
            })
           ):
           (
            <Text color={'white'} fontSize={'large'} fontWeight={'light'} >NO PREVIEWS SHARED YET</Text>
           )   
        }
                     
                    
                      </>
                      }
          {/* CANCELLED REQUEST */}
                      {selectedrequest&&selectedrequest.cancelled&&!selectedrequest.cancel_accepted &&
                      
                      <>
                      <Text  color={'orange.700'} fontSize={'medium'} fontWeight={'bold'} >THIS REQUEST IS CANCELLED</Text>
                      <Text   color={'orange.700'} fontSize={'medium'} fontWeight={'light'}  >process cancellation</Text>

                      <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>TOTAL PAY REQUIRED</Text>
                            <Input  readOnly={true}   value={selectedrequest.payments.total_payment_required}   width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>

                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>AMOUNT PAID SO FAR</Text>
                            <Input readOnly={true} value={selectedrequest.payments.total_paid}   width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>


                        <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                            <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>AMOUNT REMAINING</Text>
                            <Input    readOnly={true}   value={selectedrequest.payments.amount_remaining}   width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
                        </HStack>


                       

                     
                
                       
                       {(selectedrequest.cancelled && !selectedrequest.cancel_accepted) &&
                       
<>
                       {proceederror  &&
                        <Text  width={'30%'} fontSize={'x-small'} color={'red'} mb={'10px'} mt={'10px'} fontWeight={'bold'}>{proceederror}</Text>

}
                       <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                       <Button gap={'10px'} p={'4px'} colorScheme='blue'  borderRadius={'10px'}  onClick={acceptcancel}  >ACCEPT CANCELLATION  
                       {proceeding && 
                       <Spinner      width={'30px'}  height={'30px'} color='white'          />
                       }
                       </Button>
                     </HStack>



                    
</>
                       }


        

                       
                         
                        {compensate &&   
                        
                        <>
                  <Button onClick={()=>{setcompensate(false)}} size={'sm'} borderRadius={'50%'}  colorScheme='red' color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'1px'} fontSize={'x-small'} >X</Button>
                  <Tabs variant="soft-rounded" colorScheme="teal" isFitted>
                  <TabList mb="1em">
                    <Tab _selected={{ color: "white", bg: "teal.500" }}>M-Pesa</Tab>
                    <Tab _selected={{ color: "white", bg: "teal.500" }}>Visa</Tab>
                  </TabList>
          
                  <TabPanels>
                    {/* M-Pesa Payment Tab */}
                    <TabPanel>
                      <VStack spacing={4} align="stretch">
                        <FormControl>
                          <FormLabel>Phone Number</FormLabel>
                          <Input
                            value={paynumber}
                            onChange={(e)=>{setpaynumber(e.target.value)}}
                            placeholder="e.g. 2547XXXXXXXX"
                            bg={'white'}
                            color="black"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
  
                        <FormControl>
                          <FormLabel>Amount</FormLabel>
                          <Input
                             value={amount}
                             onChange={(e)=>{setamount(e.target.value)}}
                            placeholder="amount should be at least a third of the product's full cost"
                            bg={'white'}
                            color="black"
                            _placeholder={{ color: "gray.400" }}
                           
                          />
                        </FormControl>
                        {payerror &&  
                        
                        <Text color={'red.500'} fontWeight={'bold'} >{payerror}</Text>
                        }
                        <Button colorScheme="teal" width="full"  onClick={pay} gap={'10px'} >
                          Pay with M-Pesa
                         {ispaying&&   <Spinner  width={'20px'}  height={'20px'} color='white' />}
                        </Button>
                      </VStack>
                    </TabPanel>
          
                    {/* Visa Payment Tab */}
                    <TabPanel>
                      <VStack spacing={4} align="stretch">
                        <FormControl>
                          <FormLabel>Card Number</FormLabel>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            bg={'white'}
                            color="white"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Expiry Date</FormLabel>
                          <Input
                            placeholder="MM/YY"
                            bg={'white'}
                            color="white"
                            _placeholder={{ color: "gray.400" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>CVV</FormLabel>
                          <Input
                            placeholder="123"
                            bg={'white'}
                            color="white"
                            _placeholder={{ color: "gray.400" }}
                            maxW="100px"
                          />
                        </FormControl>
                        <Button colorScheme="teal" width="full">
                          Pay with Visa
                        </Button>
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                </>
                        }



                      </>
                      
                      }



{/* CANCEL ACCEPTED REQUESTS */}
   {(selectedrequest && selectedrequest.cancelled && selectedrequest.cancel_accepted &&!selectedrequest.cancelinfo.compensated)  && 
   
        



    <>


    <HStack   width={'95%'} gap={'10px'} p={'4px'}>
    <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>TOTAL PAY REQUIRED</Text>
    <Input  readOnly={true}   value={selectedrequest.payments.total_payment_required}   width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
</HStack>

<HStack   width={'95%'} gap={'10px'} p={'4px'}>
    <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>AMOUNT PAID SO FAR</Text>
    <Input readOnly={true} value={selectedrequest.payments.total_paid}   width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
</HStack>


<HStack   width={'95%'} gap={'10px'} p={'4px'}>
    <Text  width={'30%'} fontSize={'small'} color={'white'} fontWeight={'bold'}>AMOUNT REMAINING</Text>
    <Input    readOnly={true}   value={selectedrequest.payments.amount_remaining}   width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
</HStack>

    
    <Text  width={'90%'} isTruncated={true} fontSize={'small'} color={'white'} >SET COMPENSATION PARAMETERS</Text>
    
       <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                   <Text  width={'30%'} fontSize={'x-small'} color={'white'} fontWeight={'light'}>TIME COMPENSATION</Text>
                   <Input value = {cancelcharge} onChange={(e)=>{setcancelcharge(e.target.value)}}    width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
               </HStack> 
    
    
               <HStack   width={'95%'} gap={'10px'} p={'4px'}>
                   <Text  width={'30%'} fontSize={'x-small'} color={'white'} fontWeight={'light'}>AMOUNT TO BE RETURNED</Text>
                   <Input  value = {compensationamount} onChange={(e)=>{setcompensationamount(e.target.value)}}  width={'60%'} height={'30px'} p={'2px'} borderRadius={'10px'} bg={'white'}           />
               </HStack>
    
               {compensateerror && 
                   <Text mt={'5px'} mb={'5px'} color={'red'} fontSize={'x-small'} fontWeight={'light'} >{compensateerror}</Text>
                   }
              
    
               <HStack   width={'95%'} gap={'10px'} p={'4px'}>
    
             
                 
               <Button p={'2px'} colorScheme='blue'  borderRadius={'10px'} onClick={initiatecompensation}   >COMPENSATE 
               {compensating &&  
                 <Spinner        width={'20px'} height={'20px'} color='white'    />
               }
               </Button>
             </HStack>
             </>
    
    
   
   
   }

                      {/* COMPENSATED REQUESTS */}

                      {(selectedrequest && selectedrequest.cancelled&&selectedrequest.cancel_accepted&&selectedrequest.cancelinfo.compensated) && 
                      
                        <Text alignSelf={'center'} mt={'20px'}  mb={'20px'} color={'white'} fontWeight={'light'} >THSIS REQUEST HAS BEEN COMPENSATED !</Text>
                      
                      }

         {/* REJECTED REQUEST */}
{selectedrequest&&selectedrequest.rejected &&
                      
                      <>
                      <Text fontSize={'x-large'} fontWeight={'bold'} color={'white'} >THIS REQUEST IS REJECTED</Text>
                      {/* <Text>process cancellation</Text> */}

                     
                       
                     {redeemerror  &&  
                     
                     <Text fontSize={'xx-small'} fontWeight={'light'} color={'re'} >THIS REQUEST IS REJECTED</Text>

                     }

                        <HStack   width={'95%'}  height={'80%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  gap={'10px'} p={'4px'}>
                          <Button  onClick={redeem}  p={'2px'} colorScheme='blue'  borderRadius={'10px'} >REDEEM REQUEST  {redeeming && <Spinner  width={'25px'} height={'25px'} color='white' />}   </Button>
                        </HStack>
                         




                      </>
                      
                      }
                      {!selectedrequest && 
                      <Text mt={'20px'} color={'white'} fontSize={'large'} fontWeight={'bold'}  >SELECT A REQUEST FIRST</Text>
                      }
                    </TabPanel>
                </TabPanels>
             </Tabs>
             </>
              {/* } */}
        </VStack>
    </HStack>
   </Box>
  )
}

export default New_Requests