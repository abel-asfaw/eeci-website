import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

export function Intro({ title, subtitle, children }) {
  return (
    <Box as="section" bg="bg.primary" textAlign="center" py="16" px="6">
      <Container maxW="800px">
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: '2.5rem' }}
          fontWeight="700"
          lineHeight="normal"
          color="text.primary"
          mb="4"
        >
          {title}
        </Heading>
        <Text fontSize="md" color="text.secondary" mb="8">
          {subtitle}
        </Text>
        {children}
      </Container>
    </Box>
  );
}
