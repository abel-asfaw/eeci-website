import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      fontSize: '18px',
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f9f9f9' },
          100: { value: '#e2e8f0' },
          200: { value: '#cbd5e1' },
          300: { value: '#94a3b8' },
          400: { value: '#64748b' },
          500: { value: '#4b5563' },
          600: { value: '#334155' },
          700: { value: '#1e293b' },
          800: { value: '#111827' },
          900: { value: '#0f172a' },
        },
      },
      spacing: {
        section: { value: '4rem' },
      },
      radii: {
        card: { value: '1rem' },
      },
    },
    semanticTokens: {
      colors: {
        'text.primary': { value: '{colors.brand.900}' },
        'text.secondary': { value: '{colors.brand.700}' },
        'text.muted': { value: '{colors.brand.400}' },
        'bg.primary': { value: '#ffffff' },
        'bg.secondary': { value: '{colors.brand.50}' },
        error: { value: '#ff6b6b' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
