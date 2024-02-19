import { Box, Heading } from '@chakra-ui/react';
import { Navbar } from './_components/Navbar';

export default function Main() {
  return (
    <>
      <Navbar slug="main" />
      <Heading as="h2" fontSize="2xl">
        Main
      </Heading>
      <Box fontSize="sm" my="4">
        メインページです。
      </Box>
    </>
  );
}
