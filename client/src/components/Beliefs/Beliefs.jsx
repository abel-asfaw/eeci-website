import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Section, OutlineButton } from '../ui';
import { useSection } from '../../hooks/usePage';
import { useNavigate } from 'react-router-dom';
import { richTextOptions } from '../../utils/richText';

export function Beliefs({ bg }) {
  const { data: section, isLoading, isError } = useSection('home', 'beliefs');
  const navigate = useNavigate();

  return (
    <Section
      bg={bg}
      label={section?.label}
      title={section?.title}
      isLoading={isLoading}
      isError={isError}
    >
      {section?.body && (
        <Box fontSize="md" color="text.secondary" marginBottom="8">
          {documentToReactComponents(section.body, richTextOptions)}
        </Box>
      )}
      {section?.ctaLabel && (
        <OutlineButton
          backgroundColor="white"
          onClick={() =>
            navigate(section.ctaLink ?? '/about', {
              state: { scrollTo: 'what-we-teach' },
            })
          }
        >
          {section.ctaLabel}
        </OutlineButton>
      )}
    </Section>
  );
}
