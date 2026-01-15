import { Box, Flex, HStack, IconButton, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Footer() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box as="footer" textAlign="center" py="8" px="6">
      <Text fontWeight="bold" mb="4">
        Connect with us.
      </Text>
      {isError ? (
        <Box py="4" color="error" fontSize="sm">
          <Text>Unable to load social links</Text>
        </Box>
      ) : (
        <>
          <HStack justify="center" gap="5" opacity={isLoading ? 0.5 : 1}>
            <Link
              href={siteSettings?.facebookUrl}
              target="_blank"
              aria-disabled={isLoading}
            >
              <IconButton
                aria-label="Facebook"
                rounded="full"
                bg="black"
                color="white"
                size="sm"
                _hover={{ bg: 'gray.700' }}
              >
                <FaFacebook />
              </IconButton>
            </Link>
            <Link
              href={siteSettings?.youtubeUrl}
              target="_blank"
              aria-disabled={isLoading}
            >
              <IconButton
                aria-label="YouTube"
                rounded="full"
                bg="black"
                color="white"
                size="sm"
                _hover={{ bg: 'gray.700' }}
              >
                <FaYoutube />
              </IconButton>
            </Link>
            <Link
              href={siteSettings?.tiktokUrl}
              target="_blank"
              aria-disabled={isLoading}
            >
              <IconButton
                aria-label="TikTok"
                rounded="full"
                bg="black"
                color="white"
                size="sm"
                _hover={{ bg: 'gray.700' }}
              >
                <FaTiktok />
              </IconButton>
            </Link>
          </HStack>
          <HStack justify="center" gap="8" my="10">
            <Link href="/" color="text.secondary" textDecoration="none">
              About
            </Link>
            <Link href="/" color="text.secondary" textDecoration="none">
              Visit
            </Link>
            <Link
              href={siteSettings?.giveLink}
              target="_blank"
              color="text.secondary"
              textDecoration="none"
              opacity={isLoading ? 0.5 : 1}
              aria-disabled={isLoading}
            >
              Give
            </Link>
          </HStack>
        </>
      )}
      <Text color="text.secondary" fontSize="sm">
        © 2025 EECI
      </Text>
    </Box>
  );
}
