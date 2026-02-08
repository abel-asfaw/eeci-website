import { AspectRatio, Skeleton, Text } from '@chakra-ui/react';
import { Section } from '../ui';

export function Map({ bg }) {

  const mapKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <Section bg={bg} size="lg">
        <AspectRatio
          ratio={16 / 9}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwx59oqERyIkRetj8wDmxHaQ&key=
              ${mapKey}`}
            width="600" 
            height="450" 
            loading="lazy" 
            allowFullScreen 
            />
        </AspectRatio>
    </Section>
  );
}