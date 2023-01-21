import React from 'react'
import {Heading,Text,Button,Image,Box, Stack , VStack, HStack, Center} from '@chakra-ui/react'
import "./home.css"
import { Link } from 'react-router-dom'
import vg from "../../assets/images/img.png"
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws } from "react-icons/di"
import introVideo from "../../assets/videos/intro.mp4"


const Home = () => {
  return (
    <section className="home">
        <div className="container">
            <Stack
            direction={["column" , "row"]}
            height = '100%'
            justifyContent={["center" , "space-between"]}
            alignItems = "center"
            spacing={["16" , "56"]}
            >
            <VStack width = {'full'} textAlign= {['center']}
            spacing="4"
            fontFamily="cursive"

            >
                <h1 children = "The Industry Requires Advanced Skills. get in the smart way" />
                <Text 
                fontSize={'2x1'}
                fontFamily="cursive"
                textAlign={['center' , 'left']} 
                children="Find best Content at Reasonable Price"/>
                <Link to="/courses">
                    <Button size={'lg'} colorScheme="yellow"> Explore Now</Button>
                </Link>
            </VStack>
            <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain" /> 
            </Stack>
        </div>

        <Box padding={'8'} bg= "blackAlpha.800"  >
            <Heading
            textAlign={'center'}
            fontFamily = 'body'
            color={'yellow.400'}
            children = "OUR BRANDS"
            />
        

        <HStack className='brandsBanner'
        justifyContent={'space-evenly'}
        marginTop = '4'
        
        >
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
        </HStack>
        </Box>

        <div className="container2">
            <video
            autoPlay
            loop
            muted
            controls 
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src= {introVideo}
            ></video>
        </div>
    </section>
  )
}

export default Home
