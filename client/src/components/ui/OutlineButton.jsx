import { Button } from '@chakra-ui/react';

/**
 * Standardized outline button with consistent styling.
 *
 * @param {boolean} inverted - Use white border/text for dark backgrounds
 */
export function OutlineButton({ children, inverted = false, ...props }) {
  const borderColor = inverted ? 'white' : 'gray.800';
  const color = inverted ? 'white' : 'gray.800';
  const hoverBg = inverted ? 'white' : 'gray.800';
  const hoverColor = inverted ? 'gray.800' : 'white';

  return (
    <Button
      variant="outline"
      borderColor={borderColor}
      color={color}
      paddingX="6"
      paddingY="4"
      rounded="full"
      boxShadow="md"
      _hover={{
        background: hoverBg,
        color: hoverColor,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
