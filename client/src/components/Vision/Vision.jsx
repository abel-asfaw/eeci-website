import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { Text } from '@chakra-ui/react';

export function Vision({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const ourVisionJson = siteSettings?.ourVisionJson || [];

  return (
    <Section
      bg={bg}
      title="Our Vision"
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
        {ourVisionJson?.visionStatement}
      </Text>

      <Text
        fontSize="md"
        fontWeight="600"
        color="text.primary"
        marginBottom="4"
      >
        {ourVisionJson?.visionSegway}
      </Text>
      <ContentCarousel items={ourVisionJson?.visionPoints} />
    </Section>
  );
}
