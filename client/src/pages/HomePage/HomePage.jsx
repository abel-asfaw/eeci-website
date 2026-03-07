import { Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { Intro } from '../../components/Intro';
import { Sermon } from '../../components/Sermon';
import { About } from '../../components/About';
import { Beliefs } from '../../components/Beliefs';
import { Verse } from '../../components/Verse';
import { Services } from '../../components/Services';
import { useSiteConfig } from '../../hooks/useSiteConfig';
import { usePage } from '../../hooks/usePage';
import { OutlineButton } from '../../components/ui';
import { SEO } from '../../components/SEO';
import { SEO_DEFAULTS } from '../../constants/seo';

export function HomePage() {
  const { data: page } = usePage('home');
  const { data: siteConfig } = useSiteConfig();

  const churchJsonLd = siteConfig
    ? {
        '@context': 'https://schema.org',
        '@type': 'Church',
        name: siteConfig.fullName,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address,
          addressLocality: 'Timonium',
          addressRegion: 'MD',
          postalCode: '21093',
          addressCountry: 'US',
        },
        url: SEO_DEFAULTS.siteUrl,
      }
    : null;

  return (
    <Box as="main" id="main-content">
      {page?.seo && <SEO {...page.seo} path="/" />}
      {churchJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(churchJsonLd)}
        </script>
      )}
      <Intro
        title={page?.hero?.title}
        titleSize="3.5rem"
        subtitle={page?.hero?.subtitle}
        backgroundImage={page?.hero?.backgroundImage}
      >
        {page?.hero?.ctaLabel && (
          <OutlineButton inverted asChild>
            <RouterLink to={page.hero.ctaLink ?? '/visit'}>
              {page.hero.ctaLabel}
            </RouterLink>
          </OutlineButton>
        )}
      </Intro>
      <About bg="bg.secondary" />
      <Sermon bg="bg.primary" />
      <Beliefs bg="bg.secondary" />
      <Services bg="bg.primary" />
      <Verse bg="bg.secondary" />
    </Box>
  );
}
