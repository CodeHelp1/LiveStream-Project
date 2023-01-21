import React from 'react'
import { Box, Heading, Stack, VStack, HStack } from '@chakra-ui/react'
import {TiSocialInstagram, TiSocialFacebook} from "react-icons/ti"
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return (
    <Box padding={'5'} bg="blackAlpha.900" height={'13vh'}>
        <Stack direction={['column', 'row']}>
            <VStack textAlign={['center']} width="full ">
                <Heading
                fontFamily={'body'}
                size='sm'
                 children="All rights reserved" 
                 color={'yellow.400'}
                  />
                <Heading
                fontFamily={'body'}
                size='sm'
                 children="@CodeWithRahul" 
                 color={'yellow.400'}
                  />
            </VStack>

            <HStack spacing={["2", "10"]} justifyContent="center" 
            color={'yellow'}
            fontSize="30"
            >
                <a href="https://instagram.com/Ha__4r_" target={'blank'}>
                    <TiSocialInstagram></TiSocialInstagram>
                </a>
                <a href="https://www.facebook.com/people/Rahul-Kumar/100055407133343/?mibextid=ZbWKwL" target={'blank'}>
                    <TiSocialFacebook></TiSocialFacebook>
                </a>
                <a href="https://github.com/CodeHelp1" target={'blank'}>
                    <DiGithub></DiGithub>
                </a>

            </HStack>


        </Stack>
    </Box>
    
  )
}

export default Footer
