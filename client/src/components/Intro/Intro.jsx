import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';

export function Intro({ 
  title,
  titleSize = '2.5rem',
  subtitle, 
  children, 
  backgroundImage 
}) {
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
      overflow="hidden"
      {...(hasBackground
        ? { clipPath: 'inset(0)' }
        : { background: 'bg.primary' })}
    >
      {/* Background image as <img> for preload scanner visibility */}
      {hasBackground && (
        <Image
          src={backgroundImage}
          alt=""
          fetchPriority="high"
          position={{ base: 'absolute', md: 'fixed' }}
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center bottom"
          zIndex="0"
        />
      )}

      {/* Dark overlay for readability */}
      {hasBackground && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="blackAlpha.600"
          zIndex="0"
        />
      )}

      <Container maxWidth="800px" position="relative" zIndex="1">
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: titleSize }}
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
