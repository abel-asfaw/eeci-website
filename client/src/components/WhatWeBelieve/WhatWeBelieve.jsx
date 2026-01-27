import { Text } from '@chakra-ui/react';
import { Section, OutlineButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function WhatWeBelieve({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      title="What We Believe"
      isLoading={isLoading}
      isError={isError}
    >
      <Text fontSize="md" color="text.secondary" mb="8">
        {siteSettings?.beliefsText}
      </Text>
      <OutlineButton>STATEMENT OF FAITH</OutlineButton>
    </Section>
  );
}
