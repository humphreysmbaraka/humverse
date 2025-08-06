import React, { useContext } from 'react'
import { createContext } from 'react';
import { socketcontext } from './socket';
const socket_events_context = createContext()







function SOCKET_EVENTS_PROVIDER({children}) {
    const [requestsent , setrequestsent] = useState(false);
    const [requestreceived , setrequestreceive] = useState(false);

    
    const {socket , socketconnected} = useContext(socketcontext);

    

  return (
     <socket_events_context.Provider>
        {children}
     </socket_events_context.Provider>
  )
}

export default SOCKET_EVENTS_PROVIDER