import { useQuery } from '@tanstack/react-query';
import { fetchPage } from '../api';
import { useLocale } from './useLocale';

export function usePage(slug) {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['page', slug, locale],
    queryFn: () => fetchPage(slug, locale),
  });
}

export function useSection(pageSlug, sectionId) {
  const { locale } = useLocale();
  return useQuery({
    queryKey: ['page', pageSlug, locale],
    queryFn: () => fetchPage(pageSlug, locale),
    select: (page) => page.sections.find((s) => s.sectionId === sectionId),
  });
}
