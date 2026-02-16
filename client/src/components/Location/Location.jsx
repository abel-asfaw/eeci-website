import ReactMarkdown from 'react-markdown';
import { Section, OutlineButton, ExternalLink, markdownStyles } from '../ui';
import { useVisitSettings } from '../../hooks/useVisitSettings';

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
        <ExternalLink
          href={visitSettings?.directionsLink}
          textDecoration="none"
          disabled={isError}
        >
          GET DIRECTIONS
        </ExternalLink>
      </OutlineButton>
    </Section>
  );
}