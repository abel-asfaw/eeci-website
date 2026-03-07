import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Section, OutlineButton, ExternalLink } from '../ui';
import { useSection } from '../../hooks/usePage';
import { richTextOptions } from '../../utils/richText';

export function Location({ bg }) {
  const { data: section, isLoading, isError } = useSection(
    'visit',
    'location',
  );

  return (
    <Section
      bg={bg}
      label={section?.label}
      title={section?.title}
      isLoading={isLoading}
      isError={isError}
    >
      {section?.body && (
        <Box fontSize="md" color="text.secondary">
          {documentToReactComponents(section.body, richTextOptions)}
        </Box>
      )}
      {section?.ctaLabel && (
        <OutlineButton color="gray.900" asChild disabled={isLoading || isError}>
          <ExternalLink
            href={section.ctaLink}
            textDecoration="none"
            disabled={isError}
          >
            {section.ctaLabel}
          </ExternalLink>
        </OutlineButton>
      )}
    </Section>
  );
}
