
import { Box, Button, HStack, Image, Tabs, Text, VStack, chakra, shouldForwardProp } from "@chakra-ui/react";
import {isValidMotionProp, motion} from 'framer-motion';

  // Safe reusable components using `as` (ALTERNATIVE WAY)

// const Motionbox = chakra(motion.div, {
//     shouldForwardProp: (prop) =>
//       isValidMotionProp(prop) || shouldForwardProp(prop),
//   });
  
//   const Motionvstack = (props) => <Motionbox as={VStack} {...props} />;
//   const Motionhstack = (props) => <Motionbox as={HStack} {...props} />;
//   const Motiontext = (props) => <Motionbox as={Text} {...props} />;
//   const Motionbutton = (props) => <Motionbox as={Button} {...props} />;
//   const Motionimage = (props) => <Motionbox as={Image} {...props} />;
//   const Motiontabs = (props) => <Motionbox as={Tabs} {...props} />;




    // MY WAY
const Converteddiv = chakra(motion['div'], {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
      })
    




const containerconverter = function(chakraelement){
    return function(props){
        return(
            <Converteddiv     as={chakraelement}  {...props}   >
            {props.children}
          </Converteddiv>
        )
    }
}


const motionifycomponent = function(chakracomponent){
    return chakra(motion(chakracomponent) , {
            shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
        })
    
}



const Motionbox = motionifycomponent(Box);
const Motionhstack = motionifycomponent(HStack);
const Motionbutton = motionifycomponent(Button);
const Motionimage  = motionifycomponent(Image);
// const Motionvstack = motionifycomponent(VStack);
const Motionvstack = (props) => <Motionbox as={VStack} {...props} />;
const Motiontext = motionifycomponent(Text);
const Motiontabs = motionifycomponent(Tabs);



export {Motiontabs , Motiontext , Motionvstack , Motionbox , Motionhstack , Motionbutton , Motionimage , motionifycomponent , containerconverter}