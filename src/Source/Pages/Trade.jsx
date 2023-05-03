import React, { useState, useEffect } from 'react';

import {
    Flex, Text, Button, Box, Image, Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    InputLeftElement,
    InputRightElement,
    InputGroup,

} from '@chakra-ui/react'
import { TriangleDownIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import Footer from '../Component/Footer';
function Trade(props) {
    const [CurVal, setCurVal] = useState(0);
    const [CoinName, setCoinName] = useState('Select Coin');
    const [CoinLogo, setCoinLogo] = useState('https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jrh0ltbotqcbj2o7joae')
    const [CoinList, setCoinList] = useState([])
    const [EPrice, setEPrice] = useState()
    const [SearchCoin, setSearchCoin] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [CoinNotFound, setCoinNotFound] = useState(false);

    const { toggleColorMode } = useColorMode();
    const mode = useColorModeValue('dark', 'light');

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('data'))) {
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                .then((res) => res.json())
                .then((res) => {
                    // console.log(res)
                    setCoinList(res)
                    localStorage.setItem('data', JSON.stringify(res))
                })
        } else {
            let data = JSON.parse(localStorage.getItem('data'))
            console.log("data =>", data)
            setCoinList(data)
            console.log('rock on')
        }

    }, [])

    useEffect(() => {

        let data = JSON.parse(localStorage.getItem('data'))
        let tempCoinList = data.filter((ele) => {
            if (((ele.name).toLowerCase()).includes(SearchCoin.toLowerCase())) {
                return ele;
            }
        })

        if (SearchCoin.length == 0) {
            let data = JSON.parse(localStorage.getItem('data'))
            setCoinList(data)
            setCoinNotFound(false)
        } else if (CoinList.length == 0 && SearchCoin.length >= 1) {
            setCoinNotFound(true)
        } else if (tempCoinList.length > 0) {
            setCoinList(tempCoinList);
            setCoinNotFound(false);
        }


    }, [SearchCoin])

    function SelectCoin(coin) {
        setCoinLogo(coin.image)
        setCoinName((coin.symbol).toUpperCase())
        setCurVal(coin.current_price)
    }
    function EstimatePrice(e) {
        let amount = e.target.value;
        setEPrice(amount / CurVal)
    }
    function HandleSearch(e) {
        let coinName = e.target.value
        setSearchCoin(coinName);
        let data = JSON.parse(localStorage.getItem('data'))
        let tempCoinList = data.filter((ele) => {
            if (((ele.name).toLowerCase()).includes((coinName.toLowerCase()))) {
                return ele;
            }
        })
        setCoinList(tempCoinList);

    }


    return (
        <Box pt={10} backgroundColor={mode == 'light' ? 'rgb(6,6,4)' : 'white'} >

            <Box height={500}  width={{ base: '80%', sm: '60%', md: '45%', lg: '30%', '2xl':'25%' }} border={'3px solid rgb(68, 64, 91)'} borderTop={0} margin={'auto'} mt={45} borderRadius={10}
                pos={'relative'}
                display={'flex'} >

                <Box zIndex={10} backgroundColor={mode == 'light' ? 'rgb(11,8,25)' : 'white'} width={'40%'} height={'40px'} borderTop={'3px solid rgb(68, 64, 91)'} borderRadius={10} ></Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} zIndex={10} backgroundColor={'rgb(6,6,4)'} width={'100px'} height={'20%'} borderBottom={'3px solid rgb(68, 64, 91)'} borderRadius={'50%'} mt={'-50'} >


                    <Flex alignItems={'center'} justify="center" overflow={'hidden'} alignSelf={'center'} margin={'2px'} backgroundColor={mode == 'light' ? 'rgb(28,23,49)' : 'white'} width={'85%'} height={'85%'} borderRadius={'50%'} >
                        <Image src={CoinLogo} border={'0px solid rgb(28, 23, 49)'} borderRadius={'50%'} w={'65px'} h={'65px'} />
                    </Flex>

                </Box>
                <Box zIndex={10} backgroundColor={mode == 'light' ? 'rgb(11,8,25)' : 'white'} width={'40%'} height={'40px'} borderTop={'3px solid rgb(68, 64, 91)'} borderRadius={10} ></Box>

                <Box paddingTop={'30px'} borderRadius={10} pos={'absolute'} backgroundColor={mode == 'light' ? 'rgb(11,8,25)' : 'white'} height={'98%'} width={'100%'} bottom={0} >
                    <Box alignItems={'stretch'} width={'100%'} height={'90%'} zIndex={10} paddingX={10} >
                        <Flex padding={1} justify={'space-between'} >
                            <Text fontSize={16} >Current Value</Text>
                            <Text fontWeight={700} color={'rgb(98,126,234)'} fontSize={'xl'} >₹ {CurVal} </Text>
                        </Flex>
                        <Flex pos={'relative'} onClick={onOpen} cursor={'pointer'} paddingX={5} alignItems={"center"} justify={'space-between'} borderRadius={'10px'}
                            backgroundColor={mode == 'light' ? 'rgb(28,23, 49)' : 'white'} border={'1px solid black'} width={'100%'} height={'50px'} >
                            <Flex alignItems={"center"} justify={'space-between'} >
                                <Image w={8} borderRadius={'50%'} src={CoinLogo} mr={3} />
                                <Text fontSize={20} >{CoinName}</Text>
                            </Flex>
                            <TriangleDownIcon color={'rgb(98,126,234)'} />
                            <Modal isOpen={isOpen} onClose={onClose}   >
                                <ModalOverlay />
                                <ModalContent width={{ base: '78%', sm: '58%', md: '42%', lg: '28%', '2xl': '23%' }} backgroundColor={mode == 'light' ? 'rgb(28,23, 49)' : 'white'} right={1} top={145} >
                                    <ModalHeader></ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody mt={3} >
                                        <InputGroup borderRadius={'20px'} >
                                            <InputLeftElement
                                                pointerEvents='none'
                                                color='gray.300'
                                                fontSize='1.2em'
                                                children=<SearchIcon />
                                            />
                                            <Input placeholder='Enter amount' borderRadius={'20px'} onChange={(e) => { HandleSearch(e) }} />

                                        </InputGroup>
                                        <Box mt={5} overflowY={'scroll'} height={330} sx={{ '&::-webkit-scrollbar': { display: 'none' } }}  >
                                            {CoinList.map((ele, i) => {
                                                return (
                                                    <Flex key={ele.name} cursor={'pointer'} my={4} alignItems={'center'} justifyContent={'space-between'}
                                                        onClick={() => {
                                                            SelectCoin(ele)

                                                        }}
                                                    >
                                                        <Flex alignItems={'center'} >
                                                            <Image style={{ width: '40px', height: '40px' }} borderRadius={'50%'} src={ele.image} mr={3} />
                                                            <Text fontSize={20} >{ele.name}</Text>
                                                        </Flex>
                                                        {ele.selected && <CheckIcon />}
                                                    </Flex>
                                                )
                                            })}
                                            {CoinNotFound && <Text fontFamily={20} textAlign={'center'} fontWeight={600} > No coin Found </Text>}
                                        </Box>

                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Flex>
                        <Text fontSize={16} ml={1} my={3} > Amount you want to invest</Text>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='₹'
                            />
                            <Input placeholder='0.00' type='Number' onChange={(e) => EstimatePrice(e)} />
                            <InputRightElement children={'INR'} />
                        </InputGroup>
                        <Text fontSize={16} ml={1} my={3} >Estimate Number of {CoinName} You will Get </Text>
                        <InputGroup backgroundColor={mode == 'light' ? 'rgb(28,23, 49)' : 'white'} borderRadius={10} border={2} >
                            <Input placeholder='0.00' value={EPrice} disabled={true} backgroundColor={mode == 'light' ? 'rgb(28,23, 49)' : 'white'} />

                        </InputGroup>
                        <Button w={'100%'} borderRadius={20} mt={10} bg="linear-gradient(90deg, rgba(217,216,232,1) 0%, rgba(60,119,211,1) 0%, rgba(107,33,188,1) 97%)" >
                            Buy
                        </Button>
                    </Box>


                </Box>
            </Box>
            <Footer />
        </Box>
    );
}

export default Trade;