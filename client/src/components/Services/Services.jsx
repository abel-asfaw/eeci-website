import { SimpleGrid } from '@chakra-ui/react';
import { OverlayCarousel, Section } from '../ui';
import { useSection } from '../../hooks/usePage';
import { usePage } from '../../hooks/usePage';

export function Services({ bg }) {
  const { data: section, isLoading, isError } = useSection('home', 'services');
  const { data: page } = usePage('home');

  const fallbackImage = page?.hero?.backgroundImage;

  return (
    <Section
      bg={bg}
      size="lg"
      label={section?.label}
      title={section?.title}
      isLoading={isLoading}
      isError={isError}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
        {section?.carousels?.map((carousel) => (
          <OverlayCarousel
            key={carousel.id}
            items={carousel.items.map((card) => ({
              id: card.id,
              title: card.title,
              subtitle: card.subtitle,
              description: card.description,
              backgroundImage: card.image ?? fallbackImage,
            }))}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}
