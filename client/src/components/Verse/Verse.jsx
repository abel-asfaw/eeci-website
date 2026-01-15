import './Verse.css';
import { Box, Container } from '@chakra-ui/react';

export function Verse() {
  return (
    <Box as="section" bg="bg.secondary" textAlign="center" py="16" px="6">
      <Container maxW="800px">
        <div id="dailyVersesWrapper"></div>
        <script
          async
          defer
          src="https://dailyverses.net/get/verse.js?language=nasb"
        />
      </Container>
    </Box>
  );
}
