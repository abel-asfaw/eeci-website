import { Text } from '@chakra-ui/react';
import { Section, OutlineButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Beliefs({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      label="WHAT WE BELIEVE"
      title="Our Beliefs"
      isLoading={isLoading}
      isError={isError}
    >
      <Text fontSize="md" color="text.secondary" marginBottom="8">
        {siteSettings?.beliefsText}
      </Text>
      <OutlineButton>LEARN MORE</OutlineButton>
    </Section>
  );
}
