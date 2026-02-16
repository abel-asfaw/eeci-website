import { Box } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Location } from '../../components/Location';
import { Map } from '../../components/Map';
import { useVisitSettings } from '../../hooks/useVisitSettings';
import { SEO } from '../../components/SEO';
import { PAGE_META } from '../../constants/seo';

export function VisitPage() {
  const { data: visitSettings } = useVisitSettings();

  return (
    <Box as="main" id="main-content">
      <SEO {...PAGE_META.visit} />
      <Intro
        title="Visit Us"
        subtitle="We're so excited to meet you!"
        backgroundImage={visitSettings?.backgroundImage}
      />
      <Location title="Location & Times" bg="bg.primary" />
      <Map bg="bg.secondary" embedLink={visitSettings?.directionsEmbedLink} />
    </Box>
  );
}
