import { Box, Container, Heading, Text, Skeleton } from '@chakra-ui/react';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function About() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box as="section" bg="bg.primary" textAlign="center" py="16" px="6">
      <Container maxW="800px">
        <Heading
          as="h2"
          fontSize="2rem"
          fontWeight="700"
          color="text.primary"
          mb="4"
        >
          About Our Church
        </Heading>
        {isError ? (
          <Text color="error" fontStyle="italic">
            Unable to load content. Please try again later.
          </Text>
        ) : isLoading ? (
          <Skeleton height="60px" borderRadius="md" />
        ) : (
          <Text fontSize="md" color="text.secondary">
            {siteSettings?.aboutText}
          </Text>
        )}
      </Container>
    </Box>
  );
}
