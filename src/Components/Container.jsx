import React from 'react'
import { Box , Heading } from '@chakra-ui/react'

function ContainerBox(props) {
  return (
    <Box id='latestCourse' margin={"auto"} maxW={"container.lg"} minH={"100vh"} >
      <Heading textAlign={"center"}>Latest Course</Heading>
      <Box mt={"3rem"} gap={"8"} display={"flex"} flexDir={["column" , "row"]} flexWrap={"wrap"} >
        {props.children}
      </Box>
    </Box>
  )
}

export default ContainerBox
