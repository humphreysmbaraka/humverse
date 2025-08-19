import { Avatar, Box, Button, HStack, Image, Text, VStack, useBreakpointValue, SimpleGrid, Spinner, Alert, AlertIcon } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../appcontexts/auth';
import BASE_URL from '../constants/urls';
import squares from '../assets/squares.png';
import sphere from '../assets/sphere.png';

function Home() {
    const [winheight, setwinheight] = useState(window.innerHeight);
    const [winwidth, setwinwidth] = useState(window.innerWidth);
    const [isfetchingdata, setisfetchingdata] = useState(false);
    const [fetcherror, setfetcherror] = useState(false);
    const [info, setinfo] = useState(null);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const icons = [squares, sphere];

    // Responsive values
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
    const requestItemWidth = useBreakpointValue({ 
        base: "100%", 
        sm: "100%", 
        md: "48%", 
        lg: "48%", 
        xl: "48%" 
    });
    const requestGridColumns = useBreakpointValue({ 
        base: 1, 
        sm: 1, 
        md: 2, 
        lg: 2, 
        xl: 2 
    });
    const avatarSize = useBreakpointValue({ base: "xs", md: "sm" });
    const titleFontSize = useBreakpointValue({ base: "lg", md: "xl", lg: "x-large" });
    const subtitleFontSize = useBreakpointValue({ base: "md", md: "lg" });

    useEffect(function() {
        setisfetchingdata(true);
        const fetchdata = (async function() {
            try {
                const data = await fetch(`${BASE_URL}/fetch_homedata/${user._id}`);
                if (data.ok) {
                    console.log('user info fetched')
                    setisfetchingdata(false);
                    setfetcherror(false);
                    const receiveddata = await data.json();
                    console.log(receiveddata);
                    setinfo(receiveddata.data);
                    console.log('info', info)
                } else {
                    if (String(data.status).startsWith('4')) {
                        console.log('error fetching data');
                        setisfetchingdata(false);
                        const receiveddata = await data.json();
                        setfetcherror(receiveddata.message);
                    } else {
                        console.log('user info not fetched')
                        setisfetchingdata(false);
                        const receiveddata = await data.json();
                        console.log(receiveddata);
                        setfetcherror('server error');
                    }
                }
            } catch (err) {
                console.log('error occured while fetching data', err);
                setisfetchingdata(false);
                setfetcherror('error fetching data, refresh page to try again')
            }
        })();
    }, [])

    useEffect(function() {
        console.log('info set', info)
    }, [info])

    useEffect(() => {
        const handleResize = function() {
            setwinwidth(window.innerWidth);
            setwinheight(window.innerHeight)
        };

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getStatusColor = (val) => {
        if (!val.accepted && !val.rejected && !val.cancelled && !val.initiated) return 'orange';
        if (val.accepted && !val.initiated && !val.rejected && !val.cancelled) return 'green';
        if (val.accepted && val.initiated && !val.rejected && !val.cancelled) return 'purple';
        if (val.rejected) return 'red';
        if (val.cancelled) return 'orange';
        if (val.completed) return 'green';
        return 'blue';
    }

    const getStatusText = (val) => {
        if (!val.accepted && !val.rejected && !val.cancelled && !val.initiated) return 'not yet received';
        if (val.accepted && !val.initiated && !val.rejected && !val.cancelled) return 'ACCEPTED';
        if (val.accepted && val.initiated && !val.rejected && !val.cancelled) return 'INITIATED';
        if (val.rejected) return 'REJECTED';
        if (val.cancelled) return 'CANCELLED';
        if (val.completed) return 'COMPLETED';
        return '';
    }

    return (
        <Box width="100%" bg="black" minHeight="100vh" p={{ base: 1, md: 2 }} display="flex" flexDirection="column" alignItems="center" overflow="auto" css={{ '&::-webkit-scrollbar': { display: 'none' } }} gap={{ base: 4, md: 5 }}>
            {/* Header Section */}
            <Box width="100%" padding={{ base: 3, md: 4 }} borderRadius="15px" bg="black" mt={{ base: 2, md: 4 }} mb={{ base: 2, md: 4 }} display="flex" flexDirection="column" position="relative">
                <HStack width="100%" padding={2} borderRadius="10px" justifyContent="flex-end">
                    <Avatar size={avatarSize} />
                </HStack>
                <Text fontSize={titleFontSize} color="white" fontWeight="bold" textAlign={{ base: "center", md: "left" }}>
                    WELCOME TO HUMVERSE
                </Text>
                <Text fontSize={subtitleFontSize} color="white" fontWeight="bold" textAlign={{ base: "center", md: "left" }}>
                    {user?.username ? `USERNAME: ${user.username}` : 'USERNAME'}
                </Text>
            </Box>

            {/* Loading and Error States */}
            {isfetchingdata && (
                <VStack width="100%" py={10}>
                    <Spinner size="xl" color="white" />
                    <Text color="white">Loading your requests...</Text>
                </VStack>
            )}

            {fetcherror && (
                <Alert status="error" borderRadius="md" mb={4}>
                    <AlertIcon />
                    {fetcherror}
                </Alert>
            )}

            {/* Requests Section */}
            <Text mt={4} mb={3} alignSelf="flex-start" fontSize={{ base: "md", md: "lg" }} color="white" fontWeight="bold">
                YOUR REQUESTS
            </Text>

            {info?.requests?.length > 0 ? (
                <SimpleGrid columns={requestGridColumns} spacing={{ base: 3, md: 4 }} width="100%" padding={2} minHeight="400px" bg="white" borderRadius="10px" overflow="auto" css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
                    {info.requests.map(function(val, index) {
                        return (
                            <Box
                                key={index}
                                onClick={() => { navigate('view_product', { state: { request: val } }) }}
                                width={requestItemWidth}
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                p={3}
                                _hover={{ bg: "gray.100", transform: "scale(1.02)", transition: "all 0.2s" }}
                                cursor="pointer"
                                alignSelf="stretch"
                            >
                                <VStack align="stretch" spacing={3}>
                                    <Image
                                        width="100%"
                                        height={{ base: "150px", md: "200px" }}
                                        objectFit="cover"
                                        src={icons[Math.round(Math.random())]}
                                        borderRadius="md"
                                    />
                                    <Button
                                        size="sm"
                                        colorScheme={getStatusColor(val)}
                                        borderRadius="10px"
                                        borderWidth="1px"
                                        p={2}
                                        isDisabled
                                    >
                                        {getStatusText(val)}
                                    </Button>

                                    <VStack align="start" spacing={1}>
                                        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
                                            DATE OF REQUEST: <Text as="span" fontWeight="normal">{val.date}</Text>
                                        </Text>
                                        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
                                            DURATION: <Text as="span" fontWeight="normal">{`${val.timequantity} ${val.timeunit}`}</Text>
                                        </Text>
                                        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
                                            PREVIEWS: <Text as="span" fontWeight="normal">{val.previews.length}</Text>
                                        </Text>
                                    </VStack>
                                </VStack>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            ) : !isfetchingdata && (
                <VStack width="100%" bg="white" borderRadius="10px" p={8} minHeight="200px" justify="center">
                    <Text fontSize={{ base: "lg", md: "xl" }} color="blue.400" fontWeight="bold" textAlign="center">
                        YOU DO NOT HAVE ANY REQUESTS YET
                    </Text>
                </VStack>
            )}

            {/* Request Button */}
            <Box
                onClick={() => { navigate('make_request') }}
                mt={{ base: 4, md: 5 }}
                mb={{ base: 3, md: 4 }}
                as="button"
                minWidth={{ base: "120px", md: "150px" }}
                p={{ base: 3, md: 4 }}
                borderRadius="10px"
                borderColor="white"
                borderWidth="1px"
                color="white"
                fontWeight="bold"
                fontSize={{ base: "xs", md: "sm" }}
                _hover={{ bg: "whiteAlpha.200" }}
                alignSelf={{ base: "center", md: "flex-end" }}
                mx={{ base: "auto", md: 0 }}
            >
                REQUEST FOR A PRODUCT
            </Box>
        </Box>
    )
}

export default Home