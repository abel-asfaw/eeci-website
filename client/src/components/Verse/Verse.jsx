import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { Section } from '../ui';

const SCRIPT_SRC = 'https://dailyverses.net/get/verse.js?language=nasb';

export function Verse({ bg }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'dailyVersesWrapper';
    container.appendChild(wrapper);

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <Section bg={bg} size="sm">
      <Box
        ref={containerRef}
        css={{
          '& .dailyVerses.bibleText': {
            fontSize: 'lg',
            fontStyle: 'italic',
            color: 'gray.600',
            marginBottom: '4',
          },
          '& .dailyVerses.bibleVerse a': {
            fontWeight: 'bold',
            color: 'gray.900',
          },
        }}
      />
    </Section>
  );
}
