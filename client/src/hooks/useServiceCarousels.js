import { useQuery } from '@tanstack/react-query';
import { fetchServiceCarousels } from '../api';
import { useLocale } from './useLocale';

export function useServiceCarousels() {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['serviceCarousels', locale],
    queryFn: () => fetchServiceCarousels(locale),
  });
}
