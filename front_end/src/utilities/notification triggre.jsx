const trigger_notification = async function(title ,message ,iconurl , url ){
    try{
        if('Notification' in window){
            const status = Notification.permission;
            if(status !== 'granted'){
             Notification.requestPermission()
                .then(function(stat){
                  if(stat === 'granted'){
                    const popup =   new Notification(`${title}` , {
                        body:message,
                        icon:iconurl,
        
                    })
        
                    popup.onclick = function(event){
                        event.preventDefault();
                        window.open(url , "_blank");
                    }
        
                  }
             
                });
    
    
            
            }
            else{
          
                const popup =   new Notification( `${title}` ,{
                    body:message,
                    icon:iconurl,
    
                })
    
                popup.onclick = function(event){
                    event.preventDefault();
                    window.open(url , "_blank");
                }
    
               
    
    
              
            }
    
    
    
        }
    }
    catch(err){
        console.log('error triggering notification' , err);
    }

}



export default trigger_notification;