import { useQuery } from '@tanstack/react-query';

import { getStudents } from '../api/students-api';

export const studentsQueryKeys = {
  all: ['students'] as const,
};

export function useStudents() {
  return useQuery({
    queryKey: studentsQueryKeys.all,
    queryFn: getStudents,
  });
}