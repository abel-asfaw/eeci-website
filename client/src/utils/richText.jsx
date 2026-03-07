import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Text, Link, Box } from '@chakra-ui/react';

export const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Text marginBottom="4">{children}</Text>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <Box
        as="ul"
        paddingLeft="1.5rem"
        marginBottom="4"
      >
        {children}
      </Box>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <Box
        as="ol"
        paddingLeft="1.5rem"
        marginBottom="4"
      >
        {children}
      </Box>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <Box
        as="li"
        marginBottom="2"
        display="list-item"
        listStylePosition="inside"
        fontWeight="bold"
        css={{ '& > p': { display: 'inline', fontWeight: 'normal' } }}
      >
        {children}
      </Box>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Text as="h3" fontSize="lg" fontWeight="700" marginBottom="2">
        {children}
      </Text>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Text as="h4" fontSize="md" fontWeight="600" marginBottom="2">
        {children}
      </Text>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        color="blue.600"
        textDecoration="underline"
      >
        {children}
      </Link>
    ),
  },
};
