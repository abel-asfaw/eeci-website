import { Box, Container, Heading, Skeleton, Text } from '@chakra-ui/react';
import { ERROR_MESSAGES } from '../../constants';

/**
 * Standardized section wrapper with optional heading and loading/error states.
 *
 * Container sizes:
 * - 'sm' = 800px (default, for text-heavy content)
 * - 'md' = 900px (for medium content like video embeds)
 * - 'lg' = 6xl (for card grids)
 */
const containerSizes = {
  sm: '800px',
  md: '900px',
  lg: '6xl',
};

export function Section({
  bg,
  size = 'md',
  paddingY = '16',
  paddingX = '6',
  textAlign = 'center',
  // Heading props
  title,
  headingAs = 'h2',
  headingSize = '2rem',
  // Loading/error state props
  isLoading = false,
  isError = false,
  errorMessage,
  skeletonHeight = '60px',
  skeletonProps,
  justifyContent = 'center',
  // Content
  children,
}) {
  const maxWidth = containerSizes[size] || size;

  return (
    <Box
      as="section"
      background={bg}
      textAlign={textAlign}
      paddingY={paddingY}
      paddingX={paddingX}
      justifyContent={justifyContent}
    >
      <Container maxWidth={maxWidth}>
        {title && (
          <Heading
            as={headingAs}
            fontSize={headingSize}
            fontWeight="700"
            color="text.primary"
            marginBottom="6"
          >
            {title}
          </Heading>
        )}

        {isError ? (
          <Text color="error" fontStyle="italic">
            {errorMessage || ERROR_MESSAGES.generic}
          </Text>
        ) : isLoading ? (
          <Skeleton
            height={skeletonHeight}
            borderRadius="md"
            {...skeletonProps}
          />
        ) : (
          children
        )}
      </Container>
    </Box>
  );
}
