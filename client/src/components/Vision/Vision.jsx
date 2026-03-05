import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { useVisionCarousel } from '../../hooks/useVisionCarousel';
import { Text } from '@chakra-ui/react';

export function Vision({ bg }) {
  const { data: siteSettings } = useSiteSettings();
  const { data: visionPoints = [], isLoading, isError } = useVisionCarousel();

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
        {siteSettings?.visionStatement}
      </Text>

      <ContentCarousel items={visionPoints} />
    </Section>
  );
}
