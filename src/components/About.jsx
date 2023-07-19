import { Box, Heading, Img  , Text , Button} from '@chakra-ui/react'
import React from 'react'
import aboutimg from "../assets/img/5024147-removebg-preview.png"

function About() {
  return (
 <Box padding={"10"}>
    <Heading textAlign={"center"}>About us</Heading>
    <Box display={"flex"} flexDirection={["column" , "row"]} >
      <Box width={[ "100%" ,"50%"]}>
        <Img src={aboutimg} />
      </Box>
      <Box pt={[ "5" ,"20"]} width={[ "100%" ,"50%"]}>
        <Heading mb={"5"} color={"purple.500"}>Our Mission</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, enim veniam.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        </Text>
        <Button  mt='6' colorScheme={"purple"}>Go Here</Button>
      </Box>
      
    </Box>
 </Box>
  )
}

export default About
