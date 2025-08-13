import { Box, Button, HStack, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { AuthContext } from '../appcontexts/auth';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import BASE_URL from '../constants/urls';

function Ai_setup() {
    const {winwidth ,winheight} = useContext(dimensions);
    const {user , loggedin , admin } = useContext(AuthContext);
    const fileinputref = useRef(null);
    const [selectedfiles , setselectedfiles] = useState([]);
    const [uploading , setisuploading] = useState(false);
    const [uploaderror , setuploaderror] = useState(null);
    const [docs , setdocs] = useState([]);
    const [clickeddoc , setclickeddoc] = useState(null);
    const [deleting , setdeleting] = useState(false);
    const [deleteerror ,setdeleteerror] = useState(null);


        const clickeedondoc = function(val){
            window.open(`${BASE_URL}/ai_doc/${val._id}`, '_blank')
        }


    const getdocs =  async function(){
        try{
            const files = await fetch(`${BASE_URL}/ai_doc_objects` ,{
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include'
            } )
    
            if(files.ok){
            
            const objects = await files.json();
            console.log('uploaded docs fetched' , objects)
            setdocs(objects.docs);
            }
            else{
                console.log('docs not fetched')
               setdocs([]) 
            }
         }
         catch(err){
            console.log('failed to fetch doc objects' ,err);
            
         }
        }


    useEffect(function(){
        console.log('files changed' , selectedfiles);
    } ,[selectedfiles])

    const selectfile = async function(e){
        const files = Array.from(e.target.files);
        setselectedfiles((prev)=>
            [...prev , ...files]
        );
    }


    useEffect( function(){


        getdocs();
       
    } , [])
 
   

    const deletefile = async function(i){
      try{
        const remaining_files = selectedfiles.filter(function(val , index){
            return    index !== i
        })

        setselectedfiles(remaining_files);
      }
      catch(err){
        console.log('error deleting file', err);
      }
    }
    

  const upload_documents = async function(){
    try{
        if(selectedfiles.length == 0 || uploading){
               
        }
        else{
            setisuploading(true);
            setuploaderror(null);
           const data = new FormData();
           selectedfiles.forEach(function(val , index){
            data.append('docs' , val);
            data.append('docs_disk' , val)
           })
         
           const upload = await fetch(`${BASE_URL}/upload_to_ai` , {
            method:'POST',
            credentials:'include',
            body:data 
           });
    
           if(upload.ok){
              setisuploading(false);
              setuploaderror(null);
              setselectedfiles([]);
              const dets = await upload.json();
              getdocs();
    
           }
           else{
            console.log('could not upload docs');
            if(String(upload.status).startsWith('4')){
                setisuploading(false);
                const dets = await upload.json();
                setuploaderror(dets.message);
                getdocs();
            }
            else{
                setisuploading(false);
                setuploaderror('server error');
                getdocs();
            }
    
           }
        }
     
    }
    catch(err){
        console.log('failed to upload docs' , err);
        setisuploading(false);
        setuploaderror('could not upload');
        getdocs();
    }
  }





  const delete_document = async function(e ,val){
    e.preventDefault();
    e.stopPropagation();
   
    try{
        if(deleting){
               
        }
        else{
            setdeleting(true);
            setdeleteerror(null);
            console.log('deleting' , val);
        //    const data = new FormData();
        //    selectedfiles.forEach(function(val , index){
            // data.append('doc' , val);
            // data.append('docs_disk' , val)
        //    })
         
           const upload = await fetch(`${BASE_URL}/delete_ai_doc/${val._id}` , {
            credentials:'include',
            method:'DELETE',
             headers:{
                'Content-Type':'application/json'
             }
           });
    
           if(upload.ok){
              setdeleting(false);
              setdeleteerror(null);
            //   setselectedfiles([]);
              const dets = await upload.json();
              getdocs();
    
           }
           else{
            console.log('could not  delete doc');
            if(String(upload.status).startsWith('4')){
                setdeleting(false);
                const dets = await upload.json();
                setdeleteerror(dets.message);
                getdocs();
            }
            else{
                setdeleting(false);
                setdeleteerror('server error');
                getdocs();
            }
    
           }
        }
     
    }
    catch(err){
        console.log('failed to delete doc' , err);
        setdeleting(false);
        setdeleteerror('could not delete');
        getdocs();
    }
  }


  return (
  <Box  width={winwidth}  height={winheight}  bg={'gray.800'}  p={'10px'}  overflow={'hidden'}>
    {/* <Box  display={deleting?'flex':'none'} zIndex={100} width={} > */}
    <HStack gap={'25px'} width={'100%'}  height={'100%'} alignItems={'center'} justifyContent={'center'} overflow={'hidden'}  >
        <VStack borderRightColor={'white'}height={'100%'} borderRightWidth={'1px'}  width={'40%'}  p={'5px'}  overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
            <Text  color={'white'}  fontSize={'larger'} fontWeight={'bold'} >AI CONFIGS</Text>
            <Text alignSelf={'flex-start'}  textAlign={'left'} color={'white'}  fontSize={'small'} fontWeight={'bold'}  >SUMMARY</Text>
            <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>

                <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>


                <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>


                <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>


                <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>


                <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>


                <Text  color={'blue'}  fontSize={'small'} fontWeight={'bold'}  >
                UPLOADS <Text as={'span'} fontSize={'large'} color={'white'} fontWeight={'bold'}  >one</Text>
                </Text>

        </VStack>
        <VStack   width={'55%'} p={'5px'} height={'100%'} overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >

            <Text  color={'white'}  fontSize={'xx-large'} fontWeight={'bold'}  >AI FEED</Text>
            <Text  mt={'40px'} mb={'15px'} color={'white'} fontSize={'medium'}  >ATTATCHED DOCUMENTS</Text>
          
            <HStack  width={'98%'} borderRadius={'10px'} p={'5px'} flexWrap={'wrap'} gap={'30px'} maxH={'400px'}  overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
            {docs.length > 0 ?( 
               docs.map(function(val , index){
                return (
                    <VStack  onClick={()=>{clickeedondoc(val)}}  key={index} borderWidth={'1px'} borderColor={'white'}  width={'21%'} p={'2px'} gap={'10px'} alignItems={'center'} >
                    <IoDocumentTextOutline   size={'120px'}  color='red'   />
                     <Text  color={'white'} isTruncated={true}   fontSize={'small'}  >{val?.metadata?.name}</Text>
                     <HStack  width={'95%'}  p={'2px'}  gap={'10px'}  alignItems={'center'}  justifyContent={'center'} >
                        <Button onClick={(e)=>{delete_document(e , val)}}  colorScheme='red'  display={'flex'} height={'25px'} alignItems={'center'} justifyContent={'center'} color={'white'} fontSize={'xx-small'} >DELETE FROM  AI VECTORS</Button>
                     </HStack>
                   </VStack>
                )
               })  
            )
              :
              (
                <Text>no files attached yet</Text>
              )
             
             
        
        }
            </HStack>

            {clickeddoc  &&   
            
             <>
               <Button size={'sm'}  borderRadius={'50%'} colorScheme='red' onClick={()=>{setclickeddoc(null)}}  >X</Button>
                   <iframe  style={{ width: '100%' }}  title={clickeddoc.metadata.name}  src={`${BASE_URL}/ai_doc/${clickeddoc._id}`} >

                   </iframe>
             </>

            
            }

            <Input   onChange={(e)=>{selectfile(e)}}   display={'none'} multiple={true}  type='file' ref={fileinputref} />
            <Button  mt={'40px'}   onClick={()=>{fileinputref.current.click()}}    colorScheme='blue' width={'28%'} p={'2px'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}     >select document(s)</Button>                
            <Text fontSize={'large'} color={'white'} fontWeight={'light'} >SELECTED DOCUMENTS</Text>
                {selectedfiles.length >0  &&  
                
                <VStack  width={'60%'} p={'4px'} bg={'gray.500'} gap={'15px'} maxH={'300px'} overflow={'auto'}   css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} >
                      {selectedfiles.map(function(val , index){
                        return(
                            <HStack   justifyContent={'space-around'} key={index}  width={'98%'} h={'30px'} borderBottomWidth={'1px'} borderBottomColor={'black'} p={'2px'} alignItems={'center'}    >
                            <IoDocumentTextOutline   size={'25px'}  color='white'   />
                            <Text color={'black'}    fontWeight={'light'} fontStyle={'italic'}  >{val.name}</Text>
                            <MdOutlineDeleteOutline   onClick={()=>{deletefile(index)}}  size={'25px'}  color='red'  />
                        </HStack>
                        )
                      })}
                </VStack>
                
                }
                <Text color={'red'} >{uploaderror}</Text>
            <Button  alignSelf={'flex-end'}   colorScheme='blue' width={'28%'} p={'2px'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'10px'}  onClick={upload_documents}     >upload document(s)    {uploading && <Spinner  width={'20px'} height={'20px'} color='white' />} </Button>                


        </VStack>
    </HStack>
    {/* </Box> */}
  </Box>
  )
}

export default Ai_setup