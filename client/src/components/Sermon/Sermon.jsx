import { AspectRatio, Skeleton } from '@chakra-ui/react';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Sermon({ bg }) {
  const { data: siteSettings, isLoading } = useSiteSettings();

  return (
    <Section bg={bg} size="lg" title="Watch Our Last Sermon">
      {isLoading ? (
        <Skeleton height="0" paddingBottom="56.25%" borderRadius="lg" />
      ) : (
        <AspectRatio
          ratio={16 / 9}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <iframe
            src={siteSettings.sermonsPlaylist}
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
