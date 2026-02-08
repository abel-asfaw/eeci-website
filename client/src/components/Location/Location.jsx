import { Box, Container, HStack, Image, Heading, Text, VStack, Link } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { OutlineButton } from '../ui';
import { useVisitSettings } from '../../hooks/useVisitSettings';

const markdownStyles = {
  p: ({ children }) => <Text marginBottom="4">{children}</Text>,
  ul: ({ children }) => (
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ol>
  ),
  li: ({ children }) => (
    <li
      style={{
        marginBottom: '0.5rem',
        display: 'list-item',
        listStyleType: 'disc',
        listStylePosition: 'inside',
        fontWeight: 'bold',
      }}
    >
      <span style={{ fontWeight: 'normal' }}>{children}</span>
    </li>
  ),
};

export function Location({ title, bg }) {
  const { data: visitSettings, isLoading, isError } = useVisitSettings();
  
  return (
    <Box
      background={bg}
      paddingY="16"
      paddingX="6"
      justifyContent="center"
    >
      <Container maxWidth="900px">
        <HStack gap="24" flexWrap="wrap">
          <Image 
            alt="Church" 
            src={visitSettings?.churchImage} 
            borderRadius="full"
            w="100%"
            maxW="350px"
            aspectRatio={1}
            objectFit="cover"
          />
          <VStack h="full" justifyContent="start">
            <Heading
              fontSize="2.5rem"
              fontWeight="700"
              lineHeight="normal"
              color="text.primary"
              marginBottom="10"
            >
                {title}
            </Heading>
            <ReactMarkdown components={markdownStyles}>
                {visitSettings?.locationTimesText}
            </ReactMarkdown>
            <OutlineButton 
              color="gray.900"
              asChild
              disabled={isLoading || isError}
            >
              <Link
                href={visitSettings?.directionsLink}
                target="_blank"
                textDecoration="none"
                rel="noopener noreferrer"
                data-disabled={isError ? '' : undefined}
                onClick={(e) => {
                  if (isError) {
                    e.preventDefault();
                  }
                }}
              >
                GET DIRECTIONS
              </Link>
            </OutlineButton>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}