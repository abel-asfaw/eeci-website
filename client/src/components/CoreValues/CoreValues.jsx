import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Section } from '../ui';
import { useSection } from '../../hooks/usePage';
import { richTextOptions } from '../../utils/richText';

export function CoreValues({ bg }) {
  const { data: section, isLoading, isError } = useSection(
    'about',
    'core-values',
  );

  return (
    <Section
      bg={bg}
      label={section?.label}
      title={section?.title}
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="100px"
    >
      {section?.body && (
        <Box fontSize="md" color="text.secondary" lineHeight="1.8">
          {documentToReactComponents(section.body, richTextOptions)}
        </Box>
      )}
    </Section>
  );
}
