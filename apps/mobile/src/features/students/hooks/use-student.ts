import { useQuery } from '@tanstack/react-query';

import { getStudentById } from '../api/students-api';
import { studentsQueryKeys } from './use-students';

export function useStudent(studentId: string) {
  return useQuery({
    queryKey: [...studentsQueryKeys.all, studentId],
    queryFn: () => getStudentById(studentId),
    enabled: Boolean(studentId),
  });
}