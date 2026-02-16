import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Carousel } from '@chakra-ui/react';
import { CarouselNavButton } from './CarouselNavButton';

export function ContentCarousel({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <VStack gap="8" maxWidth="xl" marginX="auto">
      <Carousel.Root aria-label="Content carousel" slideCount={items.length} maxWidth="2xl" width="100%">
        <Carousel.ItemGroup overflow="overlay">
          {items.map((item, index) => (
            <Carousel.Item key={index} index={index} backgroundColor="white">
              <Box
                alignContent="center"
                borderWidth="1.5px"
                borderRadius="lg"
                overflow="hidden"
                height="100%"
              >
                <VStack gap="4" paddingX="8" paddingY="12" textAlign="center">
                  {item.title && (
                    <Heading
                      as="h4"
                      fontSize="1.5rem"
                      fontWeight="600"
                      color="text.primary"
                    >
                      {item.title}
                    </Heading>
                  )}
                  <Text color="text.secondary" fontSize="md">
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.Control justifyContent="center" gap="4" marginTop="6">
          <Carousel.PrevTrigger asChild>
            <CarouselNavButton direction="prev" />
          </Carousel.PrevTrigger>

          <Carousel.Indicators
            borderWidth="1px"
            borderColor="border.emphasized"
            _current={{
              borderWidth: 0,
            }}
          />

          <Carousel.NextTrigger asChild>
            <CarouselNavButton direction="next" />
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>
    </VStack>
  );
}
