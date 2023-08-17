import React from 'react'
import Cmd from "../../ColorModeSwitcher"
import { Link } from "react-router-dom"
import {BiLogOut } from "react-icons/bi"
import {AiOutlineAppstore } from "react-icons/ai"
import { IconButton, useColorMode } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Box
} from '@chakra-ui/react'
import { BiMenu } from "react-icons/bi"
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()
  const isAuth = true 
  const user = {
    role : "admin"
  }
  return (
    <>
      <Box px={"5"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} h={"4rem"}>
        <Button onClick={onOpen}
          colorScheme={"purple"}
          padding={"0"}
          w={"10"}
          h={"10"}
          borderRadius={"50%"}
        >
          <BiMenu size={"1.4rem"} />
        </Button>

        <Cmd />
      </Box>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='left'
      >
        <DrawerOverlay>
          <DrawerContent>

            <DrawerHeader textTransform={"uppercase"}>Render App<DrawerCloseButton /> </DrawerHeader>
            <DrawerBody>
              <VStack alignItems={"flex-start"}>
                <Box w={"full"} _hover={{ backgroundColor: `${colorMode === "dark" ? "purple.400" : "purple.200"}` }} borderRadius={"8px"}>
                  <Button _hover={{ backgroundColor: "none" }} variant={"ghost"} colorScheme={"purple"}>
                    <Link to={"/home"} onClick={onClose} >Home</Link>
                  </Button>
                </Box>
                <Box w={"full"} _hover={{ backgroundColor: `${colorMode === "dark" ? "purple.400" : "purple.200"}` }} borderRadius={"8px"}>
                  <Button _hover={{ backgroundColor: "none" }} variant={"ghost"} colorScheme={"purple"}>
                    <Link to={"/about"} onClick={onClose} >About</Link>
                  </Button>
                </Box>
                <Box w={"full"} _hover={{ backgroundColor: `${colorMode === "dark" ? "purple.400" : "purple.200"}` }} borderRadius={"8px"}>
                  <Button _hover={{ backgroundColor: "none" }} variant={"ghost"} colorScheme={"purple"}>
                    <Link to={"/video"} onClick={onClose} >Our Video</Link>
                  </Button>
                </Box>
                <Box w={"full"} _hover={{ backgroundColor: `${colorMode === "dark" ? "purple.400" : "purple.200"}` }} borderRadius={"8px"}>
                  <Button _hover={{ backgroundColor: "none" }} variant={"ghost"} colorScheme={"purple"}>
                    <Link to={"/service"} onClick={onClose} >Works</Link>
                  </Button>
                </Box>


              </VStack>
              {isAuth === true ? <VStack
              position={"fixed"}
              bottom={"25"}
              w={"full"}
              justifyContent={"space-around"}
              left={"0"}
              >
                <HStack>
                <Link to={"/profile"}> <Button onClick={onClose} variant={"link"} colorScheme={"purple"}>Profile</Button></Link>
                <Link to={"/logout"}> <Button variant={"ghost"} onClick={onClose} colorScheme={"purple"}><IconButton
                 icon={<BiLogOut/>}
                 variant={"unstyled"}
                 size={"md"}
                 margin={"0 5"}
                />Logout</Button></Link>
                </HStack>
                <Link to={"/logout"}> <Button variant={"ghost"} onClick={onClose} colorScheme={"purple"}><IconButton
                 icon={<AiOutlineAppstore/>}
                 variant={"unstyled"}
                 size={"md"}
                 margin={"0 5"}
                />Dashboard</Button></Link>
              </VStack> :  
              <HStack position={"fixed"}
                bottom={"25"}
                w={"full"}
                justifyContent={"space-around"}
                left={"0"}
              >
                <Link to={"/login"}> <Button onClick={onClose} colorScheme={"purple"}>Login</Button></Link>
                <Link to={"/signup"}> <Button variant={"outline"} onClick={onClose} colorScheme={"purple"}>Signup</Button></Link>
              </HStack>}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Header
