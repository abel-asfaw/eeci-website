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
  label,
  title,
  headingAs = 'h2',
  headingSize = '2rem',
  // Loading/error state props
  isLoading = false,
  isError = false,
  errorMessage,
  skeletonHeight = '60px',
  skeletonProps,
  justifyItems = 'center',
  // Content
  children,
  ...rest
}) {
  const maxWidth = containerSizes[size] || size;

  return (
    <Box
      as="section"
      display="grid"
      background={bg}
      textAlign={textAlign}
      paddingY={paddingY}
      paddingX={{ base: 2, md: paddingX }}
      justifyItems={justifyItems}
      {...rest}
    >
      <Container maxWidth={maxWidth}>
        {label && (
          <Text
            fontSize="sm"
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="wider"
            color="text.muted"
            marginBottom="2"
          >
            {label}
          </Text>
        )}
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
