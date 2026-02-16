import { useQuery } from '@tanstack/react-query';
import { fetchVisitSettings } from '../api';

export function useVisitSettings() {
  return useQuery({
    queryKey: ['visitSettings'],
    queryFn: fetchVisitSettings,
  });
}
