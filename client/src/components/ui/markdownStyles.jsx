import { Text } from '@chakra-ui/react';

export const markdownStyles = {
  p: ({ children }) => <Text marginBottom="4">{children}</Text>,
  ul: ({ children }) => (
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ol>
  ),
  li: ({ children }) => (
    <li
      style={{
        marginBottom: '0.5rem',
        display: 'list-item',
        listStyleType: 'disc',
        listStylePosition: 'inside',
        fontWeight: 'bold',
      }}
    >
      <span style={{ fontWeight: 'normal' }}>{children}</span>
    </li>
  ),
};
