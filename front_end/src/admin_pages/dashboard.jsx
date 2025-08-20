import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { MdOutlineCallReceived } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { MdOutlineCloudDone } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import BASE_URL from '../constants/urls';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const { winwidth, winheight } = useContext(dimensions);
  const [loadingdata, setloadingdata] = useState(false);
  const [fetchingerror, setfetchingerror] = useState(null);
  const [info, setinfo] = useState(null);
  const clients = info?.users;
  const requests = info?.requests;
  const projects = info?.users;

  useEffect(function () {
    setloadingdata(true);
    const fetchdata = async function () {
      try {
        const data = await fetch(`${BASE_URL}/platform_data`);
        if (data.ok) {
          setloadingdata(false);
          setfetchingerror(null);
          const values = await data.json();
          setinfo(values.data);
          console.log('app values', values);
        }
        else {
          setloadingdata(false);
          setfetchingerror('error loading information , refresh to try again');
        }
      }
      catch (err) {
        console.log('error fetching platform data', err);
      }
    }
    fetchdata();
  }, [])

  return (
    <Box
      width={winwidth}
      height={winheight}
      bg={'gray.800'}
      padding={'4px'}
      overflow={'auto'}
      css={{ '&::-webkit-scrollbar': { display: 'none', scrollbarWidth: '1px' } }}
    >
      <Text
        mt={'20px'}
        mb={'50px'}
        textAlign={'center'}
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        color={'white'}
        fontWeight={'bold'}
      >
        HUMVERSE ADMIN PANEL
      </Text>

      <HStack
        width={'98%'}
        padding={'2px'}
        flexWrap={'wrap'}
        gap={{ base: '15px', sm: '20px', md: '25px' }}
        alignSelf={'center'}
        borderWidth={'1px'}
        borderRadius={'10px'}
        alignItems={'center'}
        justifyContent={'center'}
        border={'none'}
      >

        <VStack
          onClick={() => { navigate('../view_clients', { state: { clients, requests } }) }}
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >USERS</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Text textAlign={'center'} fontSize={{ base: '2xl', md: '4xl' }} color={'white'} fontWeight={'bold'}>{clients ? clients.length : 0}</Text>
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

        <VStack
          onClick={() => { navigate('../view_requests', { state: { requests: requests } }) }}
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >{requests ? requests.length : 0}</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <MdOutlineCallReceived color='white' size={'40px'} />
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

        <VStack
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >ACCEPTED REQUESTS</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <MdVerifiedUser color='white' size={'40px'} />
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

        <VStack
          onClick={() => { navigate('../view_projects', { state: projects }) }}
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >WORKS IN PROGRESS</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <GiOfficeChair color='white' size={'40px'} />
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

        <VStack
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >COMPLETED REQUESTS</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <MdOutlineCloudDone color='white' size={'40px'} />
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

        <VStack
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >HISTORY</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <FaHistory color='white' size={'40px'} />
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

        <VStack
          onClick={() => { navigate('../ai_setup') }}
          borderWidth={'1px'}
          borderRadius={'10px'}
          width={{ base: '100%', sm: '45%', md: '30%', lg: '23%' }}
          borderColor={'white'}
          padding={'2px'}
          alignItems={'center'}
        >
          <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'} >MY AI CONTEXTS</Text>
          <Box as='text' width={'98%'} height={{ base: '100px', md: '150px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <GiSandsOfTime color='white' size={'40px'} />
          </Box>
          <Text as={'span'} textAlign={'center'} fontSize={{ base: 'sm', md: 'md' }} color={'white'} fontWeight={'bold'}>
            ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} color={'white'} fontWeight={'bold'}>number</Text>
          </Text>
        </VStack>

      </HStack>
    </Box>
  )
}

export default Dashboard
