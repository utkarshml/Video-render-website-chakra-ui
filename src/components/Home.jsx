import { Box, Button, Heading, Img ,Text} from '@chakra-ui/react'
import React from 'react'
import webDesigner from "../assets/img/19362653-removebg-preview.png"
import { useTheme } from '@emotion/react'
function Home() {
    const flexBundle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    }
  return (
   <Box minH={"100vh"} style={flexBundle} flexDirection={["column" , "row"]} padding={"2rem"} justifyContent={"start"} alignItems={"start"} >
    <Box height={"33vh"} >
       <Heading w={"100%"} textTransform={"uppercase"}>Wellcome to <Text color={useTheme().colors.purple[500]} display={"inline-block"}>My Service</Text></Heading>
       <Text  colorScheme={"purple"} marginTop={"4"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
       <Button colorScheme={"purple"} marginTop={"5"}>Get Now</Button> 
    </Box > 
    
    <Box >
   <Img  src={webDesigner}></Img>
        </Box>
   </Box>
  )
}

export default Home