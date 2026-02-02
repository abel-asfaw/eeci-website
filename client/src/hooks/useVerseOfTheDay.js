import { useQuery } from '@tanstack/react-query';
import { fetchVerseOfTheDay } from '../api';

export function useVerseOfTheDay(version = 'NASB') {
  return useQuery({
    queryKey: ['verseOfTheDay', version],
    queryFn: () => fetchVerseOfTheDay(version),
  });
}
