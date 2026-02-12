import { Box, Container, Heading, Text } from '@chakra-ui/react';

export function Intro({ title, subtitle, children, backgroundImage }) {
  const hasBackground = !!backgroundImage;

  return (
    <Box
      as="section"
      position="relative"
      display="flex"
      alignItems="center"
      textAlign="center"
      paddingY={{ base: '20', md: '32' }}
      paddingX="6"
      minHeight={hasBackground ? { base: '400px', md: '500px' } : 'auto'}
      {...(hasBackground
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundAttachment: { base: 'scroll', md: 'fixed' },
            backgroundRepeat: 'no-repeat',
          }
        : { background: 'bg.primary' })}
    >
      {/* Dark overlay for readability */}
      {hasBackground && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="blackAlpha.600"
        />
      )}

      <Container maxWidth="800px" position="relative" zIndex="1">
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: '2.5rem' }}
          fontWeight="700"
          lineHeight="normal"
          color={hasBackground ? 'white' : 'text.primary'}
          marginBottom="4"
          textShadow={hasBackground ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'}
        >
          {title}
        </Heading>
        <Text
          fontSize="md"
          color={hasBackground ? 'whiteAlpha.900' : 'text.secondary'}
          marginBottom="8"
          textShadow={hasBackground ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'}
        >
          {subtitle}
        </Text>
        {children}
      </Container>
    </Box>
  );
}
