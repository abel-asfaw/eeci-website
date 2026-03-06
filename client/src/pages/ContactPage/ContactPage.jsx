import { Box } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Contact } from '../../components/Contact';
import { useContactSettings } from '../../hooks/useContactSettings';

export function ContactPage() {
  const { data: contactSettings } = useContactSettings();

  return (
    <Box as="main" id="main-content">
      <Intro
        title={contactSettings?.contactPage}
        subtitle={contactSettings?.connectWithChurchMessage}
      />
      <Contact />
    </Box>
  );
}