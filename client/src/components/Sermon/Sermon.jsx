import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react';

export function Sermon({ title, subtitle, videoId, loading }) {
  return (
    <Box as="section" bg="bg.secondary" py="16" px="6" textAlign="center">
      <Container maxW="900px">
        <Text
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="text.muted"
          mb="2"
        >
          {subtitle}
        </Text>
        <Heading
          as="h2"
          fontSize="1.75rem"
          fontWeight="700"
          color="text.primary"
          mb="8"
        >
          {title}
        </Heading>
        {loading ? (
          <Skeleton height="0" pb="56.25%" borderRadius="lg" />
        ) : (
          <AspectRatio
            ratio={16 / 9}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        )}
      </Container>
    </Box>
  );
}
