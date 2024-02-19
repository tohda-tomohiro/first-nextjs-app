import { Container, Text, Box, Flex, Button, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Layout({ children }) {
  return (
    <Box minH="100dvh" bg="gray.100">
      <Box as="header" position="relative" height="50px">
        <Flex
          position="fixed"
          top="0"
          left="0"
          w="full"
          height="50px"
          zIndex="1"
          bg="white"
          py="3"
          borderBottom="1px solid"
          borderColor="gray.300"
          alignItems="center"
        >
          <Container maxW="container">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="md" fontWeight="bold">
                Next.js Frist App
              </Text>
              <HStack spacing="2">
                <Button size="sm" variant="ghost" as={NextLink} href="/">
                  Top
                </Button>
                <Button size="sm" variant="ghost" as={NextLink} href="/main">
                  Main
                </Button>
              </HStack>
            </Flex>
          </Container>
        </Flex>
      </Box>
      <Container maxW="container.md" py="4">
        <Box as="main" bg="white" px="6" py="8" rounded="lg">
          {children}
        </Box>
      </Container>
      <Box
        as="footer"
        position="sticky"
        top="100%"
        py="3"
        borderTop="1px solid"
        borderColor="gray.200"
        bg="white"
      >
        <Text fontSize="xs" textAlign="center">
          © 2015 StudyHacker Inc.
        </Text>
      </Box>
    </Box>
  );
}
