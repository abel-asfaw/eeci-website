import { Box } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Location } from '../../components/Location';
import { Map } from '../../components/Map';
import { SEO } from '../../components/SEO';
import { usePage } from '../../hooks/usePage';

export function VisitPage() {
  const { data: page } = usePage('visit');

  return (
    <Box as="main" id="main-content">
      {page?.seo && <SEO {...page.seo} path="/visit" />}
      <Intro
        title={page?.hero?.title}
        subtitle={page?.hero?.subtitle}
        backgroundImage={page?.hero?.backgroundImage}
      />
      <Location bg="bg.primary" />
      <Map bg="bg.secondary" />
    </Box>
  );
}
