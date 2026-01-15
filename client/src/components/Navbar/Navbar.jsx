import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import eeciLogo from '../../assets/eeci-logo.PNG';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Navbar() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      w="100%"
      bg="white"
      zIndex="1000"
      boxShadow="0 2px 1px rgba(185, 185, 185, 0.2)"
    >
      <Flex as="nav" mx="auto" px="4" justify="space-between" align="center">
        <Link href="/">
          <Image alt="EECI" src={eeciLogo} h="60px" w="auto" />
        </Link>
        <HStack as="ul" listStyleType="none" gap="1">
          <li>
            <Button
              variant="ghost"
              color="text.secondary"
              fontWeight="500"
              borderRadius="md"
              _hover={{ bg: 'text.primary', color: 'white' }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              color="text.secondary"
              fontWeight="500"
              borderRadius="md"
              _hover={{ bg: 'text.primary', color: 'white' }}
            >
              Visit
            </Button>
          </li>
          <li>
            {isError ? (
              <Button
                variant="ghost"
                color="text.secondary"
                fontWeight="500"
                borderRadius="md"
                disabled
                opacity="0.5"
                cursor="not-allowed"
              >
                Give
              </Button>
            ) : (
              <Link
                href={siteSettings?.giveLink}
                target="_blank"
                opacity={isLoading ? 0.5 : 1}
                pointerEvents={isLoading ? 'none' : 'auto'}
              >
                <Button
                  variant="ghost"
                  color="text.secondary"
                  fontWeight="500"
                  borderRadius="md"
                  disabled={isLoading}
                  _hover={{ bg: 'text.primary', color: 'white' }}
                >
                  Give
                </Button>
              </Link>
            )}
          </li>
        </HStack>
      </Flex>
    </Box>
  );
}
