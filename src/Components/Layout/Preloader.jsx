import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

function Preloader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Spinner size="xl" color="blue.500" />
    </Box>
  );
}

export default Preloader;
