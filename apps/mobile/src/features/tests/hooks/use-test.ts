import { useQuery } from '@tanstack/react-query';

import { getTestById } from '@/features/tests/api/tests-api';
import { testsQueryKeys } from '@/features/tests/hooks/use-tests';

export function useTest(testId: string) {
  return useQuery({
    queryKey: testsQueryKeys.detail(testId),
    queryFn: () => getTestById(testId),
  });
}