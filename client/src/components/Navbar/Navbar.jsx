import { Box, Flex, HStack, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { NAVIGATION_LINKS } from '../../constants';
import { OutlineButton, ExternalLink } from '../ui';

export function Navbar() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

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
            <Image alt="EECI" src={siteSettings?.logoImage} height="60px" width="60px" />
          </RouterLink>
        </Link>
        <HStack as="ul" listStyleType="none" gap="8">
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <Box as="li" key={label}>
              <Link asChild>
                <RouterLink to={href}>{label}</RouterLink>
              </Link>
            </Box>
          ))}
          <Box as="li">
            <OutlineButton
              color="white"
              backgroundColor="gray.900"
              asChild
              disabled={isLoading || isError}
            >
              <ExternalLink href={siteSettings?.giveLink} disabled={isError}>
                Give
              </ExternalLink>
            </OutlineButton>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
