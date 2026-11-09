import { useQuery } from '@tanstack/react-query';

import { getTests } from '@/features/tests/api/tests-api';

export const testsQueryKeys = {
  all: ['tests'] as const,
  list: () => ['tests', 'list'] as const,
  detail: (testId: string) => ['tests', 'detail', testId] as const,
};

export function useTests() {
  return useQuery({
    queryKey: testsQueryKeys.list(),
    queryFn: getTests,
  });
}