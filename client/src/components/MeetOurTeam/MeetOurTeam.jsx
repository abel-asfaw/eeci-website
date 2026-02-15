import {
  Box,
  Carousel,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TeamCard({ name, role, photo }) {
  const hasPhoto = !!photo;

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
        '&:hover .overlay': {
          opacity: 1,
        },
      }}
    >
      {/* Photo or Initials */}
      {hasPhoto ? (
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
        opacity="0"
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
      slideCount={teamMembers.length}
      slidesPerPage={slidesPerPage}
      slidesPerMove={1}
      spacing="24px"
      allowMouseDrag
    >
      <HStack justify="flex-end" marginBottom="4">
        <HStack>
          <Carousel.PrevTrigger asChild>
            <IconButton
              size="sm"
              variant="outline"
              rounded="full"
              backgroundColor="bg.primary"
              borderWidth="1.5px"
            >
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <IconButton
              size="sm"
              variant="outline"
              rounded="full"
              backgroundColor="bg.primary"
              borderWidth="1.5px"
            >
              <LuChevronRight />
            </IconButton>
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
