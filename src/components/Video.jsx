import { Box, Heading  , Text } from '@chakra-ui/react'
import React from 'react'

function Video() {
  return (
   <Box minH={"100vh"} p={"10"}>
    <Box display={"flex"} flexWrap={["wrap" , "nowrap"]}   alignItems={"start"} flexDirection={["column" , "row"]}>
        <Box minH={"80vh"} w={["full" , "70%"]} >
            <iframe 
            width="100%"
            style={{height : "80vh"}}
            src="https://www.youtube.com/embed/7CqJlxBYj-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Box mt={"5"}>
            <Heading >Sample video 1</Heading>
            <Text mt={"3"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, distinctio quasi?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias blanditiis!</Text>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} flexDirection={"column"} width={["full" , "30%"]} height={"100%"}>
        <Heading textAlign={"center"} fontSize={"1.5rem"}>Related Videos</Heading>
    </Box>
    </Box>
   </Box>
  )
}

export default Video
