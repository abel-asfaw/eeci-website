import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';
import { useSiteConfig } from '../../hooks/useSiteConfig';
import { useLocale } from '../../hooks/useLocale';
import { NAVIGATION_LINKS } from '../../constants';
import { OutlineButton, ExternalLink } from '../ui';

export function Navbar() {
  const { data: siteConfig, isLoading, isError } = useSiteConfig();
  const { locale, toggleLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  const prevPath = location.pathname;
  if (menuOpen && prevPath !== location.pathname) {
    setMenuOpen(false);
  }

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      width="100%"
      background="white"
      boxShadow="md"
      zIndex="100"
    >
      <Flex
        as="nav"
        marginX="auto"
        paddingX="4"
        justify="space-between"
        align="center"
      >
        <Link asChild>
          <RouterLink to="/">
            <Image
              alt="EECI"
              src={siteConfig?.logo}
              height="60px"
              width="60px"
            />
          </RouterLink>
        </Link>

        {/* Desktop links */}
        <HStack as="ul" listStyleType="none" gap="6" display={{ base: 'none', md: 'flex' }}>
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <Box as="li" key={label}>
              <Link asChild>
                <RouterLink to={href}>{label}</RouterLink>
              </Link>
            </Box>
          ))}
          <Box as="li">
            <Button variant="ghost" size="sm" onClick={toggleLocale} aria-label="Toggle language">
              {locale === 'de-DE' ? '🇺🇸 EN' : '🇪🇹 አማ'}
            </Button>
          </Box>
          <Box as="li">
            <OutlineButton
              color="white"
              backgroundColor="gray.900"
              asChild
              disabled={isLoading || isError}
            >
              <ExternalLink href={siteConfig?.giveLink} disabled={isError}>
                Give
              </ExternalLink>
            </OutlineButton>
          </Box>
        </HStack>

        {/* Mobile: language toggle + hamburger */}
        <HStack display={{ base: 'flex', md: 'none' }}>
          <Button variant="ghost" size="sm" onClick={toggleLocale} aria-label="Toggle language">
            {locale === 'de-DE' ? '🇺🇸 EN' : '🇪🇹 አማ'}
          </Button>
          <IconButton
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            variant="ghost"
            size="lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </IconButton>
        </HStack>
      </Flex>

      {/* Mobile dropdown */}
      {menuOpen && (
        <VStack
          align="stretch"
          gap="1"
          paddingX="4"
          paddingY="4"
          borderTop="1px solid"
          borderColor="gray.100"
          display={{ base: 'flex', md: 'none' }}
          position="absolute"
          top="100%"
          left="0"
          right="0"
          background="white"
          boxShadow="md"
          zIndex="99"
        >
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              asChild
              fontSize="lg"
              fontWeight="500"
              paddingY="2"
              onClick={() => setMenuOpen(false)}
            >
              <RouterLink to={href}>{label}</RouterLink>
            </Link>
          ))}
          <Box paddingTop="2">
            <OutlineButton
              color="white"
              backgroundColor="gray.900"
              width="100%"
              asChild
              disabled={isLoading || isError}
            >
              <ExternalLink href={siteConfig?.giveLink} disabled={isError}>
                Give
              </ExternalLink>
            </OutlineButton>
          </Box>
        </VStack>
      )}
    </Box>
  );
}
