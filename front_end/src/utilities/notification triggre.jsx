const trigger_notification = function(title ,message ,iconurl , url ){
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



export default trigger_notification;