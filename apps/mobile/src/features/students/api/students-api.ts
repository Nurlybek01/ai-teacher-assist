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

export async function getStudentById(
  studentId: string,
): Promise<StudentListItem> {
  await delay(300);

  const student = mockStudents.find((item) => item.id === studentId);

  if (!student) {
    throw new Error('Ученик не найден');
  }

  return student;
}