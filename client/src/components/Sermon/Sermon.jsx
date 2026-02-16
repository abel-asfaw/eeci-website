import { AspectRatio } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Sermon({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Section
      bg={bg}
      size="lg"
      title="Watch Our Last Sermon"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="0"
      skeletonProps={{ paddingBottom: '56.25%' }}
    >
      <AspectRatio
        ratio={16 / 9}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
        <iframe
          src={siteSettings?.sermonsPlaylist}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </AspectRatio>
    </Section>
  );
}
