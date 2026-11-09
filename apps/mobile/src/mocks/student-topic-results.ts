import type { StudentTopicResult } from '@/features/students/types';

export const mockStudentTopicResults: StudentTopicResult[] = [
  {
    topic: 'Алгоритмы',
    correctAnswers: 18,
    totalAnswers: 20,
    successRate: 90,
  },
  {
    topic: 'Данные и информация',
    correctAnswers: 14,
    totalAnswers: 18,
    successRate: 78,
  },
  {
    topic: 'Программирование',
    correctAnswers: 9,
    totalAnswers: 15,
    successRate: 60,
  },
  {
    topic: 'Компьютерные сети',
    correctAnswers: 7,
    totalAnswers: 12,
    successRate: 58,
  },
];