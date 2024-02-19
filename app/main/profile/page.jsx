import { Box, Heading } from '@chakra-ui/react';
import { Navbar } from '../_components/Navbar';

export default function Profile() {
  return (
    <>
      <Navbar slug="profile" />
      <Heading as="h2" fontSize="2xl">
        Profile
      </Heading>
      <Box fontSize="sm" my="4">
        プロフィールページです。
      </Box>
    </>
  );
}
