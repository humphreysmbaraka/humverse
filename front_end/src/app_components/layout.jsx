import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GoSidebarExpand } from "react-icons/go";
import { FaExpandAlt } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { FaNetworkWired } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from '../appcontexts/auth';
import { Motionbox, Motionvstack } from '../motion_components';
import { useCycle } from 'framer-motion';
import BASE_URL from '../constants/urls';
function Layout() {
       const location = useLocation();
       const navigate = useNavigate();
    const {loggedin , admin , checkauthstatus} = useContext(AuthContext)
    const [showsidebar , setshowsidebar] = useState(false);
    const {winwidth , winheight} = useContext(dimensions);


// console.log('logged in' , loggedin , 'admin' , admin)


const logout = async function(){
       try{
         const logout = await fetch(`${BASE_URL}/logout` , {
              credentials:'include',
              method:'POST' ,
              headers : {
                     'Content-Type':'application/json'
              }
         })

         if (logout.ok){
              console.log('logged out');
         }
         else{
              console.log('error logging out');
         }
       }
       catch(err){
              console.log('could ont log out' , err);
       }
}



    useEffect(function(){

       checkauthstatus();
    } , [location.pathname]);

    const sidebarVariants = {
      
       initial : {
            x:-100,
            width:'60px',
            transition:{ duration:0.5 , ease:'easeOut'}
      
       },

       show : {
            x:0,
            width:'20%',
            transition:{ duration:0.5 , ease:'easeOut'}
       },

       hide : {
              x:0,
              width:'60px',
              transition:{ duration:0.5 , ease:'easeOut'}
       },

    }

   

  return (
   <Motionbox width={winwidth} bg={'none'}  height={winheight} overflow={'auto'} css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  position={'relative'}  display={'flex'}  alignItems={'center'} gap={0}
//    initial={{x:3000}}
//    animate={{x:0}}
//    transition={{ duration:0.5 , ease:'easeIn'}}
   >
      {/* <HStack width={'100%'} height={'45px'} ml={'auto'} mr={'auto'} mt={0} mb={0} p={'2px'} bg={'white'} alignItems={'center'} gap={'20px'} overflow={'auto'}    css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}}  >
      
        <Box width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}  to='land'    >LAND</Link>
        </Box>

        <Box width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='home'    >HOME</Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='services'    >OUR SERVICES</Link>
        </Box>



        <Box width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    >CONTACT US</Link>
        </Box>



        <Box width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >             
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='make request'    >MAKE REQUEST</Link>
        </Box>



        <Box width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='assistant'    >ASSISTANT</Link>
        </Box>



     

      </HStack> */}
      

      <Motionvstack  bg={'gray.800'}  borderRightWidth={'1px'} borderRightColor={'white'} width={showsidebar?'20%' : '60px'} height={'100%'} alignItems={'center'} p={'2px'}  overflow={'auto'}  css={{ '&::-webkit-scrollbar': { display:'none' ,  scrollbarWidth: '1px' }}} gap={'35px'}  
       variants={sidebarVariants}
       initial={'initial'}
       animate={showsidebar?'show':'hide'}
      >
          <Box  alignSelf={'flex-start'} as='button'  onClick={()=>{setshowsidebar(!showsidebar)}} bg={'gray.800'} width={'30px'} height={'30px'} borderRadius={'50%'} mt={'20px'}  >   
                  {showsidebar  &&  
                  <GoSidebarExpand  color='white' size={'20px'}  />
                  }

                  { !showsidebar  && 

<CiMenuFries  color='white' size={'20px'} /> 

                  }
                 
          </Box>


{showsidebar  &&   
<>
{/* <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}    >
               <Link style={{color:'white' , fontSize:'small'   }}  to='land'    >LAND</Link>
        </Box> */}

       {!loggedin  &&  
       <>
       {/* <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
       <Link style={{color:'white' , fontSize:'xs'  }}   to='home'    >HOME</Link>
</Box> */}


<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
       <Link style={{color:'white' , fontSize:'xs' }}   to='services'    >OUR SERVICES</Link>
</Box>



<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}   _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
       <Link style={{color:'white' , fontSize:'xs' }}   to='contacts'    >CONTACT US</Link>
</Box>


<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
       <Link style={{color:'white' , fontSize:'xs' }}   to='/'    >Log-in</Link>
</Box>



{/* <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >             
       <Link style={{color:'white' , fontSize:'xs'  }}   to='make request'    >MAKE REQUEST</Link>
</Box> */}



{/* <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
       <Link style={{color:'white' , fontSize:'xs'  }}   to='assistant'    >ASSISTANT</Link>
</Box> */}
     </>  
       }

       {(loggedin && !admin) &&   
       
       <>

         <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
               <Link style={{color:'white' , fontSize:'xs'  }}   to='dashboard'    >ADMIN PANEL</Link>
        </Box>
       
       <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
               <Link style={{color:'white' , fontSize:'xs'  }}   to='/main'    >HOME</Link>
        </Box>


        <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
               <Link style={{color:'white' , fontSize:'xs' }}   to='services'    >OUR SERVICES</Link>
        </Box>



        <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}   _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
               <Link style={{color:'white' , fontSize:'xs' }}   to='contacts'    >CONTACT US</Link>
        </Box>



        <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >             
               <Link style={{color:'white' , fontSize:'xs'  }}   to='make request'    >MAKE REQUEST</Link>
        </Box>



        <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
               <Link style={{color:'white' , fontSize:'xs'  }}   to='assistant'    >ASSISTANT</Link>
        </Box>



        <Box  onClick={logout}  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
       <Text color='white'  fontSize='xs'     to='assistant'    >log_out</Text>
       </Box>


       </>
       
       }


       {(loggedin && admin) &&  
       <>


<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
               <Link style={{color:'white' , fontSize:'xs'  }}   to='dashboard'    >ADMIN PANEL</Link>
        </Box>


       <Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
       <Link style={{color:'white' , fontSize:'xs'  }}   to='/main'    >HOME</Link>
</Box>


<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}   >
       <Link style={{color:'white' , fontSize:'xs' }}   to='services'    >OUR SERVICES</Link>
</Box>



<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}   _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
       <Link style={{color:'white' , fontSize:'xs' }}   to='contacts'    >CONTACT US</Link>
</Box>



<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >             
       <Link style={{color:'white' , fontSize:'xs'  }}   to='make request'    >MAKE REQUEST</Link>
</Box>



<Box  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
       <Link style={{color:'white' , fontSize:'xs'  }}   to='assistant'    >ASSISTANT</Link>
</Box>


<Box  onClick={logout}  borderBottomColor={'white'} borderBottomWidth={'1px'} width={'95%'} p={'2px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}  _hover={{borderBottomWidth:'2px' , borderBottomColor:'blue'}}  >
       <Text color='white'  fontSize='xs'     to='assistant'    >log_out</Text>
</Box>
       </>
       }
</>
}


{!showsidebar   &&   

<>
{!loggedin && 
<>

{/* <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='home'    >
               <CiHome  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >home</Text>
               </Link>
        </Box> */}


        {/* <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='assistant'    >
               <BiMessageRounded  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >agent</Text>
               </Link>
        </Box> */}


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='services'    >
               <FaNetworkWired color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >services</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    >
               <IoCallOutline  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >scontacts</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='/'    >
               <IoIosLogIn  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >Log-in</Text>
               </Link>
        </Box>


       

</>

}


{(loggedin && !admin)  &&  

<>

<Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='dashboard'    >
               <RiAccountPinCircleFill  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >Admin Panel</Text>
               </Link>
        </Box>


<Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='/main'    >
               <CiHome  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >home</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='assistant'    >
               <BiMessageRounded  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >agent</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='services'    >
               <FaNetworkWired color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >services</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    >
               <IoCallOutline  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >contacts</Text>
               </Link>
        </Box>


        <Box width={'95%'} onClick={logout} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               {/* <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    > */}
               <CiLogout  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >log out</Text>
               {/* </Link> */}
        </Box>

       

       

</>


}



{(loggedin && admin) &&  
<>

<Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='dashboard'    >
               <RiAccountPinCircleFill  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >admin</Text>
               </Link>
        </Box>


    <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='/main'    >
               <CiHome  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >home</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='assistant'    >
               <BiMessageRounded  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >agent</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='services'    >
               <FaNetworkWired color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >services</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    >
               <IoCallOutline  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >scontacts</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='dashboard'    >
               <IoCallOutline  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >Admin Panel</Text>
               </Link>
        </Box>


        <Box width={'95%'} onClick={logout} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               {/* <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    > */}
               <CiLogout  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >log out</Text>
               {/* </Link> */}
        </Box>
</>
}
{/* <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='home'    >
               <CiHome  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >home</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='assistant'    >
               <BiMessageRounded  color='white'  size='25px'  />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >agent</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='services'    >
               <FaNetworkWired color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >services</Text>
               </Link>
        </Box>


        <Box width={'95%'} p={'2px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
               <Link style={{color:'white' , fontSize:'sm' , fontWeight:'bold' }}   to='contacts'    >
               <IoCallOutline  color='white'  size='25px' />
               <Text color={'white'}  fontSize={'xx-small'} fontWeight={'light'} >scontacts</Text>
               </Link>
        </Box> */}
</>

}
        



     

      </Motionvstack>
      

      <Outlet    />
   </Motionbox>
  )
}

export default Layout