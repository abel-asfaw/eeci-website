import { Box, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

const markdownStyles = {
  p: ({ children }) => <Text marginBottom="4">{children}</Text>,
  ul: ({ children }) => (
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ol>
  ),
  li: ({ children }) => (
    <li
      style={{
        marginBottom: '0.5rem',
        display: 'list-item',
        listStyleType: 'disc',
        listStylePosition: 'inside',
        fontWeight: 'bold',
      }}
    >
      <span style={{ fontWeight: 'normal' }}>{children}</span>
    </li>
  ),
};

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
          {siteSettings?.ourCoreValues}
        </ReactMarkdown>
      </Box>
    </Section>
  );
}
