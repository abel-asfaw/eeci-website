import { AspectRatio } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSection } from '../../hooks/usePage';

export function Sermon({ bg }) {
  const { data: section, isLoading, isError } = useSection('home', 'sermon');

  return (
    <Section
      bg={bg}
      size="lg"
      title={section?.title}
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="0"
      skeletonProps={{ paddingBottom: '56.25%' }}
    >
      {section?.embedUrl && (
        <AspectRatio
          ratio={16 / 9}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <iframe
            src={section.embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </AspectRatio>
      )}
    </Section>
  );
}
