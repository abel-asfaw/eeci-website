import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme.js';
import App from './App.jsx';
import { LocaleProvider } from './context/LocaleContext.jsx';

const MINUTE = 1000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * MINUTE,
      gcTime: 10 * MINUTE,
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
