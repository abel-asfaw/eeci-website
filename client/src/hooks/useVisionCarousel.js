import { useQuery } from '@tanstack/react-query';
import { fetchVisionCarousel } from '../api';
import { useLocale } from './useLocale';

export function useVisionCarousel() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['visionCarousel', locale],
    queryFn: () => fetchVisionCarousel(locale),
  });
}
