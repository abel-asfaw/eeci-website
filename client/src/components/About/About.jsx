import { Text } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function About({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      title="About Our Church"
      isLoading={isLoading}
      isError={isError}
    >
      <Text fontSize="md" color="text.secondary">
        {siteSettings?.aboutText}
      </Text>
    </Section>
  );
}
