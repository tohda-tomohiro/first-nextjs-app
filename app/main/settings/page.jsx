import { Box, Heading } from '@chakra-ui/react';
import { Navbar } from '../_components/Navbar';

export default function Settings() {
  return (
    <>
      <Navbar slug="settings" />
      <Heading as="h2" fontSize="2xl">
        Settings
      </Heading>
      <Box fontSize="sm" my="4">
        設定ページです。
      </Box>
    </>
  );
}
