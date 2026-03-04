import { AspectRatio } from '@chakra-ui/react';
import { Section } from '../ui';

export function Map({ bg, embedLink }) {
  return (
    <Section bg={bg} size="lg">
      <AspectRatio
        ratio={16 / 9}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
        <iframe
          src={embedLink}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </Section>
  );
}
