import {
  Container,
  Heading,
  Input,
  Button,
  InputGroup,
  Text,
  VStack,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container margin={'auto'} minH={'100vh'} w={[ 'container.sm' ,'container.xl']}>
      <Heading textAlign={'center'}>Login</Heading>
      <VStack marginTop={'5'} gap={'5'} alignItems={'stretch'}>
        <Text>Email</Text>
        <Input type="email" focusBorderColor="purple.500"></Input>
        <Text>Password</Text>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            focusBorderColor="purple.500"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text textAlign={'end'}>
          <Button
            display={'inline'}
            variant={'link'}
            fontSize={'0.8rem'}
            colorScheme="purple"
          >
            Forget Password
          </Button>
        </Text>

        <Button colorScheme="purple">
          <Link to={'/login'}>Login</Link>
        </Button>
        <Button variant={"outline"} colorScheme="purple">
          <Link to={'/signup'}>SingUp</Link>
        </Button>
      </VStack>
    </Container>
  );
}

export default Login;
