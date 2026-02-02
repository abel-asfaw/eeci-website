import { Box, Button, Text } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Sermon } from '../../components/Sermon';
import { About } from '../../components/About';
import { Beliefs } from '../../components/Beliefs';
import { Verse } from '../../components/Verse';
import { Services } from '../../components/Services';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { OutlineButton } from '../../components/ui';

export function HomePage() {
  const { data: siteSettings } = useSiteSettings();

  return (
    <Box>
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
