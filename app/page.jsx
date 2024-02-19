import { Box, Button, Heading, Center } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Center h="100vh" bg="gray.100">
      <Box>
        <Heading as="h1" fontSize="2xl">
          Welcome!
        </Heading>
        <Button as={NextLink} href="/main" colorScheme="blue" size="lg" mt="2">
          Go Main.
        </Button>
      </Box>
    </Center>
  );
}
