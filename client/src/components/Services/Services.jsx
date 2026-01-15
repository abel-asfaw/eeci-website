import {
  Box,
  Card,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaChurch,
  FaLocationDot,
  FaPeopleGroup,
  FaHandHoldingHeart,
} from 'react-icons/fa6';

export function InvolvementCard({
  icon,
  title,
  meta,
  children,
  locationLabel,
  cta,
}) {
  return (
    <Card.Root
      h="100%"
      p="10"
      borderRadius="card"
      boxShadow="sm"
      transition="box-shadow 350ms ease"
      _hover={{ boxShadow: 'lg' }}
    >
      <Card.Body>
        <VStack align="center" textAlign="center" gap="0">
          {icon && (
            <Box color="text.primary" mb="6">
              {icon}
            </Box>
          )}

          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="650"
            color="text.primary"
            letterSpacing="-0.01em"
          >
            {title}
          </Heading>

          {meta && (
            <Text mt="3" fontSize="md" color="text.muted">
              {meta}
            </Text>
          )}

          {locationLabel && (
            <VStack mt="6" gap="2" fontWeight="700" color="text.primary">
              <Icon as={FaLocationDot} boxSize="4" />
              <Link
                href="https://maps.app.goo.gl/AEq7Aw1tntVbsJ5dA"
                rel="noopener noreferrer"
                target="_blank"
              >
                {locationLabel}
              </Link>
            </VStack>
          )}

          {children && (
            <Text mt="5" fontSize="md" lineHeight="1.7" color="text.muted">
              {children}
            </Text>
          )}

          {cta && (
            <Text
              mt="10"
              fontSize="sm"
              fontWeight="800"
              letterSpacing="0.14em"
              color="brand.600"
            >
              {cta}
            </Text>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}

export function InvolvementCardsGrid({ children }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
      {children}
    </SimpleGrid>
  );
}

export function Services() {
  return (
    <Box as="section" bg="bg.primary">
      <Container maxW="6xl" py="16" px="6">
        <Heading
          as="h2"
          fontSize="2rem"
          fontWeight="700"
          color="text.primary"
          textAlign="center"
          mb="10"
        >
          Get Involved
        </Heading>
        <InvolvementCardsGrid>
          <InvolvementCard
            icon={<FaChurch size={64} />}
            title="Sunday Worship"
            meta="1 PM - 3 PM"
            locationLabel="1010 Saters Ln, Timonium, MD 21093"
          />

          <InvolvementCard
            icon={<FaPeopleGroup size={64} />}
            title="Join a Group"
            cta="FIND A GROUP"
          >
            Find community and grow in your faith with others.
          </InvolvementCard>

          <InvolvementCard
            icon={<FaHandHoldingHeart size={64} />}
            title="Serve"
            cta="GET INVOLVED"
          >
            Use your gifts to make a difference in the lives of those you touch.
          </InvolvementCard>
        </InvolvementCardsGrid>
      </Container>
    </Box>
  );
}
