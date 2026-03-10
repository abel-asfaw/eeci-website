import { Box } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Vision } from '../../components/Vision';
import { CoreValues } from '../../components/CoreValues';
import { WhatWeTeach } from '../../components/WhatWeTeach';
import { MeetOurTeam } from '../../components/MeetOurTeam';
import { SEO } from '../../components/SEO';
import { usePage } from '../../hooks/usePage';

export function AboutPage() {
  const { data: page } = usePage('about');

  return (
    <Box as="main" id="main-content">
      {page?.seo && <SEO {...page.seo} path="/about" />}
      <Intro
        title={page?.hero?.title}
        subtitle={page?.hero?.subtitle}
        backgroundImage={page?.hero?.backgroundImage}
      />
      <Vision bg="bg.secondary" />
      <CoreValues bg="bg.primary" />
      <WhatWeTeach bg="bg.secondary" />
      <MeetOurTeam bg="bg.primary" />
    </Box>
  );
}
