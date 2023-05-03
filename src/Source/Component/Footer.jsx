import React from 'react';
import { Flex, Button, Box,Text, IconButton } from '@chakra-ui/react'
function Footer(props) {
    return (
        <Flex mt={100} h={50} align={'center'} justify={'center'} bg="linear-gradient(90deg, rgba(217,216,232,1) 0%, rgba(60,119,211,1) 0%, rgba(107,33,188,1) 97%)" >
            <Text textAlign={'center'} fontSize={18} fontWeight={600} >Copyright 2023-3023 by Ritik Raj. All Rights Reserved. </Text>
        </Flex>
    );
}

export default Footer;