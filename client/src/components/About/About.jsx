import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Section } from '../ui';
import { useSection } from '../../hooks/usePage';
import { richTextOptions } from '../../utils/richText';

export function About({ bg }) {
  const { data: section, isLoading, isError } = useSection('home', 'about');

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
    </Section>
  );
}
