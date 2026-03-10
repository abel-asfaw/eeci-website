import { AspectRatio } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSection } from '../../hooks/usePage';

export function Map({ bg }) {
  const { data: section, isLoading, isError } = useSection('visit', 'map');

  return (
    <Section
      bg={bg}
      size="lg"
      label={section?.label}
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
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AspectRatio>
      )}
    </Section>
  );
}
