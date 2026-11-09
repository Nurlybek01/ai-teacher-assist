import { useQuery } from '@tanstack/react-query';

import { getTest } from '@/features/tests/api/tests-api';

export const testQueryKey = (testId: string) => ['tests', testId] as const;

export function useTest(testId: string) {
  return useQuery({
    queryKey: testQueryKey(testId),
    queryFn: () => getTest(testId),
    enabled: testId.length > 0,
  });
}