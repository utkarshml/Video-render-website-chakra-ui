import React from 'react'
import Cmd from "../ColorModeSwitcher"
import {Link} from "react-router-dom"
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
import {BiMenu} from "react-icons/bi"
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
 
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
  <BiMenu size={"1.4rem"}/>
  </Button>
 
 <Cmd/>
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
          <Box w={"full"} _hover={{backgroundColor:"purple.100"} } borderRadius={"8px"}>
            <Button _hover={{backgroundColor:"none"}} variant={"ghost"}  colorScheme={"purple"}> 
          <Link to={"/home"} onClick={onClose} >Home</Link>
        </Button>
          </Box>
          <Box w={"full"} _hover={{backgroundColor:"purple.100"} } borderRadius={"8px"}>
            <Button _hover={{backgroundColor:"none"}} variant={"ghost"}  colorScheme={"purple"}> 
          <Link to={"/about"} onClick={onClose} >About</Link>
        </Button>
          </Box>
          <Box w={"full"} _hover={{backgroundColor:"purple.100"} } borderRadius={"8px"}>
            <Button _hover={{backgroundColor:"none"}} variant={"ghost"}  colorScheme={"purple"}> 
          <Link to={"/video"} onClick={onClose} >Our Video</Link>
        </Button>
          </Box>
          <Box w={"full"} _hover={{backgroundColor:"purple.100"} } borderRadius={"8px"}>
            <Button _hover={{backgroundColor:"none"}} variant={"ghost"}  colorScheme={"purple"}> 
          <Link to={"/service"} onClick={onClose} >Works</Link>
        </Button>
          </Box>
        
         
        </VStack>
        <HStack position={"fixed"}
        bottom={"25"}
        w={"full"}
        justifyContent={"space-around"}
        left={"0"}
        >
       <Link to={"/login"}> <Button onClick={onClose} colorScheme={"purple"}>Login</Button></Link>
       <Link to={"/signup"}> <Button variant={"outline"} onClick={onClose} colorScheme={"purple"}>Signup</Button></Link>
        </HStack>
      </DrawerBody>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>
  </>
  )
}

export default Header
