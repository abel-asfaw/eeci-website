import { Box, Button, Text } from '@chakra-ui/react';
import { Intro } from '../Intro';
import { Sermon } from '../Sermon';
import { About } from '../About';
import { Beliefs } from '../Beliefs';
import { Verse } from '../Verse';
import { Services } from '../Services';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function HomePage() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box>
      <Intro
        title="Emmanuel Evangelical Church International"
        subtitle="You are so special and God LOVES you so much!"
      >
        <Button
          variant="outline"
          borderColor="text.primary"
          color="text.primary"
          px="6"
          py="5"
          borderRadius="md"
          fontWeight="500"
          _hover={{ bg: 'text.primary', color: 'white' }}
        >
          I'M NEW
        </Button>
      </Intro>
      {isError ? (
        <Box py="8" textAlign="center" color="error">
          <Text>Unable to load latest sermon. Please try again later.</Text>
        </Box>
      ) : (
        <Sermon
          subtitle="Latest message"
          title="Watch Our Last Sermon"
          videoId={siteSettings?.latestSermonVideoId}
          loading={isLoading}
        />
      )}
      <About />
      <Beliefs />
      <Services />
      <Verse />
    </Box>
  );
}
