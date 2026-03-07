import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Section, ContentCarousel } from '../ui';
import { useSection } from '../../hooks/usePage';
import { richTextOptions } from '../../utils/richText';

export function Vision({ bg }) {
  const { data: section, isLoading, isError } = useSection('about', 'vision');

  const items =
    section?.carousels?.[0]?.items?.map((card) => ({
      title: card.title,
      description: card.description,
    })) ?? [];

  return (
    <Section
      bg={bg}
      title={section?.title}
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      {section?.body && (
        <Box
          fontSize="md"
          color="text.secondary"
          textAlign="center"
          lineHeight="1.8"
          marginBottom="6"
        >
          {documentToReactComponents(section.body, richTextOptions)}
        </Box>
      )}

      <ContentCarousel items={items} />
    </Section>
  );
}
