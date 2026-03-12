import { useQuery } from '@tanstack/react-query';
import { fetchContactSettings } from '../api';

export function useContactSettings() {
  return useQuery({
    queryKey: ['contactSettings'],
    queryFn: fetchContactSettings,
  });
}