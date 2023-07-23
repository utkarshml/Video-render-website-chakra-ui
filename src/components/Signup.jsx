import { Container , FormControl , FormLabel , FormHelperText , Input, VStack, Button, Heading , InputGroup , InputRightElement} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container margin={"auto"} minH={"100vh"} width={'container.xl'}>
      <Heading margin={"4"} textAlign={"center"}>SignUp</Heading>
      <VStack alignItems={"stretch"} gap={"4"}>
        <FormControl isRequired>
        <FormLabel >Name</FormLabel>
        <Input focusBorderColor='purple.500' type="text" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel >Email address</FormLabel>
        <Input focusBorderColor='purple.500' type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel >Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            focusBorderColor="purple.500"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button colorScheme='purple' h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme='purple'>SingUp</Button>
      <Button  fontWeight={"300"} textAlign={"end"} colorScheme='purple' variant={"link"} display={"inline"}>
        <Link  to="/login">already exist user</Link>
      </Button>
      
      </VStack>
      
    </Container>
  );
}

export default Signup;
