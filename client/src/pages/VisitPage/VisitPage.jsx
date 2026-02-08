import { Box } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Location } from '../../components/Location';
import { Map } from '../../components/Map';
import { useVisitSettings } from '../../hooks/useVisitSettings';

export function VisitPage() {
  const { data: visitSettings } = useVisitSettings();

  return (
    <Box>
      <Intro
        title="Visit Us"
        subtitle="We're so excited to meet you!"
        backgroundImage={visitSettings?.backgroundImage}
      />
      <Location 
        title="Location & Times"
        bg="bg.primary" />
      <Map bg="bg.secondary" />
    </Box>
  );
}
