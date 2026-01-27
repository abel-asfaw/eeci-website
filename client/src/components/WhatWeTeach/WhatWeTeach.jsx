import { Box, Text, VStack, Heading } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { Carousel, IconButton } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export function WhatWeTeach({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const values = siteSettings?.valuesJson || [];

  return (
    <Section
      bg={bg}
      size="lg"
      title="What We Teach"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      <Carousel.Root slideCount={values.length} maxWidth="lg" marginX="auto">
        <Carousel.ItemGroup overflow="overlay">
          {values.map((value, index) => (
            <Carousel.Item key={index} index={index}>
              <Box
                borderWidth="1.5px"
                borderColor="border.default"
                borderRadius="lg"
                overflow="hidden"
                height="100%"
              >
                <VStack gap="4" paddingX="8" paddingY="12" textAlign="center">
                  <Heading
                    as="h4"
                    fontSize="1.5rem"
                    fontWeight="600"
                    color="text.primary"
                  >
                    {value.title}
                  </Heading>
                  <Text color="text.secondary" fontSize="md">
                    {value.description}
                  </Text>
                </VStack>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.Control justifyContent="center" gap="4" marginTop="6">
          <Carousel.PrevTrigger asChild>
            <IconButton size="sm" variant="outline">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.Indicators />

          <Carousel.NextTrigger asChild>
            <IconButton size="sm" variant="outline">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>
    </Section>
  );
}
