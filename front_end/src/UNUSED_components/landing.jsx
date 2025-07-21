import { Box, Card, CardBody, CardFooter, CardHeader, HStack, Image, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function Landing() {
  return (
   <Box  width={'100%'}    h={'100vh'} borderRadius={'15px'} padding={'2px'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}  >
     <Image position={'absolute'}  zIndex={0} src= "https://picsum.photos/1920/1080" width={'100%'} height={'100%'} />
     <HStack margin={'auto'} bg={'white'} position={'absolute'} bottom={'5%'} zIndex={1}   width={'90%'} overflow={'auto'} padding={'5px'} alignItems={'center'} gap={'10px'}  >
     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} width={'85%'}  bg={'white'} height={'50px'} >
            <Text    width={'85%'} height={'90%'} color={'black'} fontSize={'small'} isTruncated={true} >
               learn
            </Text>
        </CardFooter>
     </Card>


     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} width={'85%'}  bg={'white'} height={'50px'} >
            <Text    width={'85%'} height={'90%'} color={'black'} fontSize={'small'} isTruncated={true} >
               learn
            </Text>
        </CardFooter>
     </Card>

     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} width={'85%'}  bg={'white'} height={'50px'} >
            <Text    width={'85%'} height={'90%'} color={'black'} fontSize={'small'} isTruncated={true} >
               learn
            </Text>
        </CardFooter>
     </Card>

     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} width={'85%'}  bg={'white'} height={'50px'} >
            <Text    width={'85%'} height={'90%'} color={'black'} fontSize={'small'} isTruncated={true} >
               learn
            </Text>
        </CardFooter>
     </Card>

     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} width={'85%'}  bg={'white'} height={'50px'} >
            <Text    width={'85%'} height={'90%'} color={'black'} fontSize={'small'} isTruncated={true} >
               learn
            </Text>
        </CardFooter>
     </Card>

     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} width={'85%'}  bg={'white'} height={'50px'} >
            <Text    width={'85%'} height={'90%'} color={'black'} fontSize={'small'} isTruncated={true} >
               learn
            </Text>
        </CardFooter>
     </Card>

     <Card  display={'flex'} flexDir={'column'} alignItems={'center'} bg={'purple'} minW={'200px'} flexShrink={0} borderRadius={'10px'} padding={'2px'}  >
        {/* <CardHeader></CardHeader> */}
        <CardBody width={'98%'} display={'flex'} alignItems={'center'} justifyContent={'center'}  p={'1px'}  >
            <Image  mt={'2px'} mb={'3px'} width={'98%'} height={'150px'} src= "https://picsum.photos/256?random=8" fit={'fill'} borderRadius={'10px'} borderColor={'purple'} borderWidth={'2px'} />
        </CardBody>
        <CardFooter mb={'5px'} maxW={'180px'} minW={'180px'}  bg={'white'} height={'50px'}  sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        </CardFooter>
     </Card>

     
     </HStack>
   </Box>
  )
}

export default Landing