import React from 'react';
import { Flex, Button, Box,Text, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import {HamburgerIcon } from '@chakra-ui/icons'
import { Link, NavLink } from 'react-router-dom';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher.js';

function Navbar(props) {
    const mode = useColorModeValue('dark', 'light');

    return (
        <Flex mb={mode!='light'?'4':'0'} as={'nav'} boxShadow='md' bg={mode=='light'?'rgb(11, 8, 25)':'white'} justify={{sm:'space-around', base:'space-between'}}  align={'center'} height={'80px'} paddingX={5} >
            <Box style={{width:'10%'}}  display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }} alignItems={'center'} justifyContent={'center'} >
                <Image src="https://cardstarter.io/assets/img/upcoming/neofiLogo.png" alt="Neofi logo"/>
            </Box>
            <Flex display={{sm:'none', base:'block'}} zIndex={100} >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem>
                            <NavLink to='/trade'> Trade </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to='/earn'> Earn </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to='/support'> Support </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to='/about'> About </NavLink>
                        </MenuItem>

                    </MenuList>
                </Menu>
            </Flex>

            <Flex display={{base:'none', sm:'flex', md:'flex', lg:'flex'}} >
                <Box mx={5} >
                    <NavLink to='/trade'> <Text fontSize={20} fontWeight={600} >Trade</Text>  </NavLink>
                </Box>
                <Box mx={5} >
                    <NavLink to='/earn'> <Text fontSize={20} fontWeight={600} >Earn</Text> </NavLink>
                </Box>
                <Box mx={5} >
                    <NavLink to='/support'> <Text fontSize={20} fontWeight={600} >Support</Text> </NavLink>
                </Box>
                <Box mx={5} >
                    <NavLink to='/about'> <Text fontSize={20} fontWeight={600} >About</Text> </NavLink>
                </Box>
                
                
            </Flex>
            <Flex>
                <Button display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }} borderRadius={'50'}
                    bg="linear-gradient(90deg, rgba(217,216,232,1) 0%, rgba(60,119,211,1) 0%, rgba(107,33,188,1) 97%)" > Connect Wallet</Button>
                <ColorModeSwitcher />
            </Flex>
        </Flex>
    );
}

export default Navbar;
