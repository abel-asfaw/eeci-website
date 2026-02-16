import { Box, Text, Link } from '@chakra-ui/react';
import { Section } from '../ui';
import { useVerseOfTheDay } from '../../hooks/useVerseOfTheDay';
import { ERROR_MESSAGES } from '../../constants';

export function Verse({ bg }) {
  const { data: verse, isLoading, isError } = useVerseOfTheDay();

  return (
    <Section
      bg={bg}
      size="sm"
      isLoading={isLoading}
      isError={isError}
      errorMessage={ERROR_MESSAGES.verse}
    >
      {verse && (
        <Box>
          <Text
            fontSize="lg"
            fontStyle="italic"
            color="gray.600"
            marginBottom="4"
            dangerouslySetInnerHTML={{ __html: verse.content }}
          />
          <Link
            href={verse.permalink}
            fontWeight="bold"
            target="_blank"
            rel="noopener noreferrer"
            color="gray.900"
            _hover={{ textDecoration: 'underline' }}
          >
            {verse.displayReference}
          </Link>
        </Box>
      )}
    </Section>
  );
}
