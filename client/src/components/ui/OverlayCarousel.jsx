import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import { Carousel } from '@chakra-ui/react';
import { CarouselNavButton } from './CarouselNavButton';

export function OverlayCarousel({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Carousel.Root
      aria-label="Content carousel"
      slideCount={items.length}
      width="full"
      height="full"
      position="relative"
    >
      <Carousel.Control gap="4" width="full" height="full" position="relative">
        <Carousel.PrevTrigger asChild>
          <CarouselNavButton
            direction="prev"
            size="xs"
            rounded="full"
            position="absolute"
            zIndex="1"
            backgroundColor="bg"
            borderWidth="0"
            insetStart="2"
          />
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full" height="full" overflow="overlay">
          {items.map((item, index) => (
            <Carousel.Item key={index} index={index} height="full">
              <Box
                alignContent="center"
                borderWidth="1.5px"
                borderRadius="lg"
                overflow="hidden"
                height="100%"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundImage={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 240, 225, 0.8)), url(${item.backgroundImage})`}
              >
                <VStack gap="4" paddingX="12" paddingY="8" textAlign="center">
                  {item.title && (
                    <Heading
                      as="h2"
                      fontSize="1.25rem"
                      fontWeight="700"
                      color="text.primary"
                    >
                      {item.title}
                    </Heading>
                  )}
                  {item.subtitle && (
                    <Text fontWeight="600" color="text.muted">
                      {item.subtitle}
                    </Text>
                  )}
                  {item.description && (
                    <Text color="text.secondary" fontSize="md">
                      {item.description}
                    </Text>
                  )}
                </VStack>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <CarouselNavButton
            direction="next"
            size="xs"
            rounded="full"
            position="absolute"
            zIndex="1"
            backgroundColor="bg"
            borderWidth="0"
            insetEnd="2"
          />
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}
