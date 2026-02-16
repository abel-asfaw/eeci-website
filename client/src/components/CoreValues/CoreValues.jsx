import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Section, markdownStyles } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function CoreValues({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      title="Our Values"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="100px"
    >
      <Box fontSize="md" color="text.secondary" lineHeight="1.8">
        <ReactMarkdown components={markdownStyles}>
          {siteSettings?.ourValues}
        </ReactMarkdown>
      </Box>
    </Section>
  );
}
