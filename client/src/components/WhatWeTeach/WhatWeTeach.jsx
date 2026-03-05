import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { useTeachingsCarousel } from '../../hooks/useTeachingsCarousel';
import { Text } from '@chakra-ui/react';

export function WhatWeTeach({ bg }) {
  const { data: siteSettings } = useSiteSettings();
  const {
    data: teachingPoints = [],
    isLoading,
    isError,
  } = useTeachingsCarousel();

  return (
    <Section
      bg={bg}
      title="What We Teach"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      <Text
        fontSize="md"
        color="text.secondary"
        textAlign="center"
        lineHeight="1.8"
        marginBottom="6"
      >
        {siteSettings?.teachingStatement}
      </Text>

      <ContentCarousel items={teachingPoints} />
    </Section>
  );
}
