import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Beliefs() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box as="section" bg="bg.secondary" textAlign="center" py="16" px="6">
      <Container maxW="800px">
        <Text fontSize="sm" color="text.muted" textTransform="uppercase" mb="2">
          WHAT WE BELIEVE
        </Text>
        <Heading
          as="h2"
          fontSize="2rem"
          fontWeight="700"
          color="text.primary"
          mb="4"
        >
          Our Beliefs
        </Heading>
        {isError ? (
          <Text color="error" fontStyle="italic" mb="8">
            Unable to load content. Please try again later.
          </Text>
        ) : isLoading ? (
          <Skeleton height="60px" borderRadius="md" mb="8" />
        ) : (
          <Text fontSize="md" color="text.secondary" mb="8">
            {siteSettings?.beliefsText}
          </Text>
        )}
        <Button
          variant="outline"
          borderColor="text.primary"
          color="text.primary"
          px="6"
          py="5"
          borderRadius="md"
          fontWeight="500"
          _hover={{ bg: 'text.primary', color: 'white' }}
        >
          LEARN MORE
        </Button>
      </Container>
    </Box>
  );
}
