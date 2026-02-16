import { Box } from '@chakra-ui/react';

import { Intro } from '../../components/Intro';
import { Sermon } from '../../components/Sermon';
import { About } from '../../components/About';
import { Beliefs } from '../../components/Beliefs';
import { Verse } from '../../components/Verse';
import { Services } from '../../components/Services';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { OutlineButton } from '../../components/ui';
import { SEO } from '../../components/SEO';
import { PAGE_META } from '../../constants/seo';
import { CHURCH_INFO } from '../../constants';

const churchJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: CHURCH_INFO.fullName,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1010 Saters Ln',
    addressLocality: 'Timonium',
    addressRegion: 'MD',
    postalCode: '21093',
    addressCountry: 'US',
  },
  url: 'https://eecimd.org',
};

export function HomePage() {
  const { data: siteSettings } = useSiteSettings();

  return (
    <Box as="main" id="main-content">
      <SEO {...PAGE_META.home} />
      <script type="application/ld+json">{JSON.stringify(churchJsonLd)}</script>
      <Intro
        title="Emmanuel Evangelical Church International"
        subtitle="You are so special and God LOVES you so much!"
        backgroundImage={siteSettings?.backgroundImage}
      >
        <OutlineButton inverted>I'M NEW</OutlineButton>
      </Intro>
      <About bg="bg.secondary" />
      <Sermon bg="bg.primary" />
      <Beliefs bg="bg.secondary" />
      <Services bg="bg.primary" />
      <Verse bg="bg.secondary" />
    </Box>
  );
}
