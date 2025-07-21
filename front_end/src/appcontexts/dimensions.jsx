import React, { createContext, useEffect, useState } from 'react'
const dimensions = createContext();


function Dimensions_Proviver({children}) {
    
  useEffect(() => {
    const handleResize =  function(){
        setwinwidth(window.innerWidth);
        setwinheight(window.innerHeight)
    };
    

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const [winwidth , setwinwidth] = useState(window.innerWidth);
const [winheight , setwinheight] = useState(window.innerHeight);

  return (
   <dimensions.Provider value={{winwidth , winheight}} >
    {children}
   </dimensions.Provider>
  )
}

export  {Dimensions_Proviver , dimensions}