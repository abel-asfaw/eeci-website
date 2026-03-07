import { useQuery } from '@tanstack/react-query';
import { fetchSiteConfig } from '../api';
import { useLocale } from './useLocale';

export function useSiteConfig() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['siteConfig', locale],
    queryFn: () => fetchSiteConfig(locale),
  });
}
