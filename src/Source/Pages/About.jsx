import React from 'react';
import { Flex, Button, Box, Text, Link, Card, Image, Stack, CardBody, Heading, CardFooter } from '@chakra-ui/react'
function About(props) {
    return (
        <Box justifyContent={'center'} alignContent={"center"} >
            <Flex justify={'center'} mt={10} >
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'

                >
                    
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://avatars.githubusercontent.com/u/117502397?s=400&u=672fefc14d6f1f65f24f6a9f45096a266f053b1b&v=4'
                        alt='Ritik Raj'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'> The Ritik Raj </Heading>

                            <Text py='2'>
                                A passionate Full Stack Developer from India || React js +
                                <br></br>
                                React native || Strong command on MERN stack.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                <Link href='https://ritikraj07.github.io/Portfolio/' isExternal >
                                    Check Portfolio
                                </Link>
                                
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
           </Flex>
            

        </Box>
    );
}

export default About;