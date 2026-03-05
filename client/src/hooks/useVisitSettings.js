import { useQuery } from '@tanstack/react-query';
import { fetchVisitSettings } from '../api';
import { useLocale } from './useLocale';

export function useVisitSettings() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['visitSettings', locale],
    queryFn: () => fetchVisitSettings(locale),
  });
}
