import {
  Box,
  Carousel,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Section, CarouselNavButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TeamCard({ name, role, photo }) {
  return (
    <Box
      position="relative"
      w="full"
      h="400px"
      borderRadius="lg"
      boxShadow="sm"
      overflow="hidden"
      flexShrink={0}
      css={{
        '@media (hover: hover)': {
          '&:hover .overlay': {
            opacity: 1,
          },
        },
      }}
    >
      {/* Photo or Initials */}
      {photo ? (
        <Box
          as="img"
          src={photo}
          alt={name}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      ) : (
        <Flex
          w="100%"
          h="100%"
          bg="bg.secondary"
          align="center"
          justify="center"
        >
          <Flex
            w="120px"
            h="120px"
            borderRadius="full"
            bg="orange.500"
            align="center"
            justify="center"
          >
            <Text fontSize="3xl" fontWeight="700" color="white">
              {getInitials(name)}
            </Text>
          </Flex>
        </Flex>
      )}

      {/* Hover Overlay */}
      <Flex
        className="overlay"
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="100%"
        background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)"
        opacity={{ base: 1, md: 0 }}
        transition="opacity 300ms ease"
        align="flex-end"
        p="6"
      >
        <VStack align="start" gap="1">
          <Heading as="h4" fontSize="lg" fontWeight="700" color="white">
            {name}
          </Heading>
          <Text fontSize="sm" color="orange.300">
            {role}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

function TeamCarousel({ teamMembers }) {
  const slidesPerPage = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Carousel.Root
      aria-label="Team members carousel"
      slideCount={teamMembers.length}
      slidesPerPage={slidesPerPage}
      slidesPerMove={1}
      spacing="24px"
      allowMouseDrag
    >
      {/* Desktop: top-right buttons */}
      <HStack
        justify="flex-end"
        marginBottom="4"
        display={{ base: 'none', md: 'flex' }}
      >
        <HStack>
          <Carousel.PrevTrigger asChild>
            <CarouselNavButton direction="prev" rounded="full" />
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <CarouselNavButton direction="next" rounded="full" />
          </Carousel.NextTrigger>
        </HStack>
      </HStack>

      <Carousel.ItemGroup>
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index} index={index}>
            <TeamCard
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      {/* Mobile: bottom centered buttons with indicators */}
      <Carousel.Control
        justifyContent="center"
        gap="4"
        marginTop="6"
        display={{ base: 'flex', md: 'none' }}
      >
        <Carousel.PrevTrigger asChild>
          <CarouselNavButton direction="prev" />
        </Carousel.PrevTrigger>

        <Carousel.Indicators
          borderWidth="1px"
          borderColor="border.emphasized"
          _current={{
            borderWidth: 0,
          }}
        />

        <Carousel.NextTrigger asChild>
          <CarouselNavButton direction="next" />
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}

export function MeetOurTeam({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const teamMembers = siteSettings?.teamMembersJson || [];

  return (
    <Section
      bg={bg}
      title="Meet Our Team"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="350px"
      size="lg"
    >
      {teamMembers.length > 0 && <TeamCarousel teamMembers={teamMembers} />}
    </Section>
  );
}
