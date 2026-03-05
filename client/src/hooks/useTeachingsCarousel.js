import { useQuery } from '@tanstack/react-query';
import { fetchTeachingsCarousel } from '../api';
import { useLocale } from './useLocale';

export function useTeachingsCarousel() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['teachingsCarousel', locale],
    queryFn: () => fetchTeachingsCarousel(locale),
  });
}
