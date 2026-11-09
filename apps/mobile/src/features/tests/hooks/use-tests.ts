import { useQuery } from '@tanstack/react-query';

import { getTests } from '@/features/tests/api/tests-api';

export const testsQueryKey = ['tests'] as const;

export function useTests() {
  return useQuery({
    queryKey: testsQueryKey,
    queryFn: getTests,
  });
}