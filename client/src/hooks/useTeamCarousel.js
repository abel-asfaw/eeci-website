import { useQuery } from '@tanstack/react-query';
import { fetchTeamCarousel } from '../api';
import { useLocale } from './useLocale';

export function useTeamCarousel() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['teamCarousel', locale],
    queryFn: () => fetchTeamCarousel(locale),
  });
}
