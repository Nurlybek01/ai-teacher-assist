import { mockStudents } from '@/mocks/students';
import type { StudentListItem } from '../types';

const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

// Пока возвращает моки. Позже здесь будут запросы к Supabase.
export async function getStudents(): Promise<StudentListItem[]> {
  await delay(500);

  return mockStudents;
}