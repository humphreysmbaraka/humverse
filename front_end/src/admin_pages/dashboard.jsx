import React, { useContext, useEffect, useState } from 'react'
import { dimensions } from '../appcontexts/dimensions'
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { MdOutlineCallReceived, MdVerifiedUser, MdOutlineCloudDone } from "react-icons/md";
import { GiOfficeChair, GiSandsOfTime } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";
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
                fontSize={'xx-large'}
                color={'white'}
                fontWeight={'bold'}
            >
                HUMVERSE ADMIN PANEL
            </Text>

            <HStack
                width={'98%'}
                padding={'2px'}
                flexWrap={'wrap'}
                gap={'25px'}
                alignSelf={'center'}
                borderWidth={'1px'}
                borderRadius={'10px'}
                alignItems={'center'}
                justifyContent={'center'}
                border={'none'}
                // Responsive direction: stack vertically on mobile, row on larger screens
                flexDirection={{ base: 'column', md: 'row' }}
            >

                <VStack
                    onClick={() => { navigate('../view_clients', { state: { clients, requests } }) }}
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >USERS</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <Text textAlign={'center'} fontSize={'xxx-large'} color={'white'} fontWeight={'bold'}  >{clients ? clients.length : 0}</Text>
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

                <VStack
                    onClick={() => { navigate('../view_requests', { state: { requests: requests } }) }}
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >{requests ? requests.length : 0}</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <MdOutlineCallReceived color='white' size={'large'} />
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

                <VStack
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >ACCEPTED REQUESTS</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <MdVerifiedUser color='white' size={'large'} />
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

                <VStack
                    onClick={() => { navigate('../view_projects', { state: projects }) }}
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >WORKS IN PROGRESS</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <GiOfficeChair color='white' size={'large'} />
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

                <VStack
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >COMPLETED REQUESTS</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <MdOutlineCloudDone color='white' size={'large'} />
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

                <VStack
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >HISTORY</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <FaHistory color='white' size={'large'} />
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

                <VStack
                    onClick={() => { navigate('../ai_setup') }}
                    borderWidth={'1px'}
                    borderRadius={'10px'}
                    width={{ base: '100%', sm: '90%', md: '45%', lg: '23%' }}
                    borderColor={'white'}
                    padding={'2px'}
                    alignItems={'center'}
                >
                    <Text textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >MY AI CONTEXTS</Text>
                    <Box as='text' width={'98%'} height={'150px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <GiSandsOfTime color='white' size={'large'} />
                    </Box>
                    <Text as={'span'} textAlign={'center'} fontSize={'medium'} color={'white'} fontWeight={'bold'} >
                        ACTIVE : <Text as={'span'} textAlign={'center'} fontSize={'large'} color={'white'} fontWeight={'bold'} >number</Text>
                    </Text>
                </VStack>

            </HStack>
        </Box>
    )
}

export default Dashboard
