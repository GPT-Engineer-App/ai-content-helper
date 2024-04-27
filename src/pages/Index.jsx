// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Button, VStack, Image, Heading, Link, Flex, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Virtual Workforce Chrome Extension</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound={true} size="lg" alignSelf="flex-end" />
      </Flex>
      <VStack spacing={4} align="stretch" mt={10}>
        <Text fontSize="xl">A comprehensive solution for automating and enhancing your digital workforce on the Chrome browser.</Text>
        <Image src="https://images.unsplash.com/photo-1708447134618-bfb5d207ed95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBleHRlbnNpb258ZW58MHx8fHwxNzE0MTc4OTczfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Button colorScheme="blue" leftIcon={<FaGithub />}>
          <Link href="https://github.com/virtual-workforce-extension" isExternal>
            View on GitHub
          </Link>
        </Button>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
          <Link href="https://twitter.com/virtualworkforce" isExternal>
            Follow on Twitter
          </Link>
        </Button>
        <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
          <Link href="https://linkedin.com/in/virtual-workforce" isExternal>
            Connect on LinkedIn
          </Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
