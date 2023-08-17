import { Box, Button, Heading  , Text } from '@chakra-ui/react'
import React, { useState } from 'react'



function Video() {
   const [videoSrc , setVideoSrc] = useState("")
   const [title , setTittle] = useState("")
  return (
   <Box minH={"100vh"} p={"10"}>
    <Box display={"flex"} flexWrap={["wrap" , "nowrap"]}   alignItems={"start"} flexDirection={["column" , "row"]}>
        <Box minH={"80vh"} w={["full" , "70%"]} >
            <iframe 
            width="100%"
            style={{height : "80vh"}}
            src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <Box mt={"5"}>
            <Heading >{title}</Heading>
            <Text mt={"3"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, distinctio quasi?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, alias blanditiis!</Text>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} flexDirection={"column"} width={["full" , "30%"]} height={"100%"}>
        <Heading textAlign={"center"} fontSize={"1.5rem"}>Related Videos</Heading>
        <Box pt={"4"}  w={"full"}>
           
           { 
            video.map((item , index)=>{
             return <Button key={item.id} onClick={()=>{
              setTittle(item.title)
              setVideoSrc(item.url)
             }}  colorScheme='purple' width={"full"} marginTop={"2"} mx={"4"} variant={"ghost"}>Lacture {item.id}</Button>
            })
            }
        </Box>
        

    </Box>
    </Box>
   </Box>
  )
}
const video =  [
    {
      "id": 1,
      "title": "Introduction to React",
      "url": "https://youtu.be/VR46xe2HPjA"
    },
    {
      "id": 2,
      "title": "React Components",
      "url": "https://youtu.be/VR46xe2HPjA"
    },
    {
      "id": 3,
      "title": "State and Props",
      "url": "https://www.example.com/videos/state-and-props"
    },
    {
      "id": 4,
      "title": "Handling Events in React",
      "url": "https://www.example.com/videos/handling-events"
    },
    {
      "id": 5,
      "title": "React Hooks",
      "url": "https://www.example.com/videos/react-hooks"
    }
  ]

export default Video
