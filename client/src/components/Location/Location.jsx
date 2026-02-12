import { Text, Link } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Section, OutlineButton } from '../ui';
import { useVisitSettings } from '../../hooks/useVisitSettings';

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

export function Location({ title, bg }) {
  const { data: visitSettings, isLoading, isError } = useVisitSettings();
  
  return (
    <Section
      bg={bg}
      title={title}
      isLoading={isLoading}
      isError={isError}
    >
      <ReactMarkdown components={markdownStyles}>
        {visitSettings?.locationTimesText}
      </ReactMarkdown>
      <OutlineButton 
        color="gray.900"
        asChild
        disabled={isLoading || isError}
      >
        <Link
          href={visitSettings?.directionsLink}
          target="_blank"
          textDecoration="none"
          rel="noopener noreferrer"
          data-disabled={isError ? '' : undefined}
          onClick={(e) => {
            if (isError) {
              e.preventDefault();
            }
          }}
        >
          GET DIRECTIONS
        </Link>
      </OutlineButton>
    </Section>
  );
}