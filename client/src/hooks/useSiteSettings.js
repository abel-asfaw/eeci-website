import { useQuery } from '@tanstack/react-query';
import { fetchSiteSettings } from '../api';
import { useLocale } from './useLocale';

export function useSiteSettings() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['siteSettings', locale],
    queryFn: () => fetchSiteSettings(locale),
  });
}
