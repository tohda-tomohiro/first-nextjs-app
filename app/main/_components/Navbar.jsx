import { Button, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Navbar({ slug }) {
  return (
    <HStack spacing="3" mb="5">
      <Button
        as={NextLink}
        href="/main"
        size="xs"
        colorScheme="teal"
        variant="outline"
        isDisabled={slug === 'main'}
      >
        メイン
      </Button>
      <Button
        as={NextLink}
        href="/main/profile"
        size="xs"
        colorScheme="teal"
        variant="outline"
        isDisabled={slug === 'profile'}
      >
        プロフィール
      </Button>
      <Button
        as={NextLink}
        href="/main/settings"
        size="xs"
        colorScheme="teal"
        variant="outline"
        isDisabled={slug === 'settings'}
      >
        設定
      </Button>
    </HStack>
  );
}
