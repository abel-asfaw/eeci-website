import { AspectRatio, Skeleton, Text } from '@chakra-ui/react';
import { extractPlaylistId } from '../../utils';
import { Section } from '../ui';

export function Sermon({ bg, title, sermonPlaylist, loading }) {
  return (
    <Section bg={bg} size="md" title={title}>
      {loading ? (
        <Skeleton height="0" pb="56.25%" borderRadius="lg" />
      ) : (
        <AspectRatio
          ratio={16 / 9}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${extractPlaylistId(
              sermonPlaylist,
            )}`}
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
