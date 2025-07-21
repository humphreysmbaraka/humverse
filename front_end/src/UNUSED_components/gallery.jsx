import { HStack, Image } from '@chakra-ui/react'
import React from 'react'

function Gallery() {

    // const pictures  = [
    //     "https://picsum.photos/256?random=1",
    //     "https://picsum.photos/256?random=2",
    //     "https://picsum.photos/256?random=3",
    //     "https://picsum.photos/256?random=4",
    //     "https://picsum.photos/256?random=5",
    //     "https://picsum.photos/256?random=6",
    //     "https://picsum.photos/256?random=7",
    //     "https://picsum.photos/256?random=8",
    //     "https://picsum.photos/256?random=9",
    //     "https://picsum.photos/256?random=10",
    //     "https://picsum.photos/256?random=11",
    //     "https://picsum.photos/256?random=12",
    //     "https://picsum.photos/256?random=13",
    //     "https://picsum.photos/256?random=14",
    //     "https://picsum.photos/256?random=15",
    //     "https://picsum.photos/256?random=16",
    //     "https://picsum.photos/256?random=17",
    //     "https://picsum.photos/256?random=18",
    //     "https://picsum.photos/256?random=19",
    //     "https://picsum.photos/256?random=20",
    //   ];

    const pictures = [
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",
        "https://picsum.photos/256?random=2",
        "https://picsum.photos/256?random=6",
        "https://picsum.photos/256?random=8",

        
    ]
  return (
    <HStack alignSelf={'center'} bg={'gray'} width={'100%'} h={'98%'} borderRadius={'15px'} padding={'5px'} flexWrap={'wrap'} overflow={'auto'} sx={{ '&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}
    >
     {pictures.map(function(val , index){
        return(
            <Image src={val} key = {index} />
        )
     })}
    </HStack>
  )
}

export default Gallery