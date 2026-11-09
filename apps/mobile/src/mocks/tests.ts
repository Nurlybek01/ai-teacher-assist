import type { AssessmentTest } from '@/features/tests/types';

// Моковые данные близки к будущей структуре Supabase:
// у теста есть статус, класс, вопросы и время выполнения.
export const mockTests: AssessmentTest[] = [
  {
    id: 'test-1',
    title: 'Основы алгоритмов',
    description: 'Проверка понимания алгоритма, исполнителя и последовательности действий.',
    className: '4 «А»',
    status: 'ready',
    timeLimitMinutes: 15,
    createdAt: '2026-11-01T09:00:00.000Z',
    updatedAt: '2026-11-05T14:30:00.000Z',
    questions: [
      {
        id: 'question-1',
        type: 'single_choice',
        text: 'Что такое алгоритм?',
        topic: 'Алгоритмы',
        points: 1,
        options: [
          { id: 'option-1', text: 'Последовательность действий для решения задачи' },
          { id: 'option-2', text: 'Любая картинка на экране' },
          { id: 'option-3', text: 'Название программы' },
        ],
        correctOptionId: 'option-1',
      },
      {
        id: 'question-2',
        type: 'single_choice',
        text: 'Какое действие выполняется первым в алгоритме?',
        topic: 'Алгоритмы',
        points: 1,
        options: [
          { id: 'option-4', text: 'Первое действие последовательности' },
          { id: 'option-5', text: 'Последнее действие последовательности' },
          { id: 'option-6', text: 'Любое действие по желанию' },
        ],
        correctOptionId: 'option-4',
      },
    ],
  },
  {
    id: 'test-2',
    title: 'Устройство компьютера',
    description: 'Проверка знаний об основных устройствах компьютера.',
    className: '4 «А»',
    status: 'draft',
    timeLimitMinutes: 10,
    createdAt: '2026-11-02T10:15:00.000Z',
    updatedAt: '2026-11-06T11:45:00.000Z',
    questions: [
      {
        id: 'question-3',
        type: 'single_choice',
        text: 'Какое устройство ввода позволяет набирать текст?',
        topic: 'Устройства компьютера',
        points: 1,
        options: [
          { id: 'option-7', text: 'Клавиатура' },
          { id: 'option-8', text: 'Монитор' },
          { id: 'option-9', text: 'Принтер' },
        ],
        correctOptionId: 'option-7',
      },
    ],
  },
  {
    id: 'test-3',
    title: 'Информация и данные',
    description: 'Короткая проверочная работа по теме «Информация и данные».',
    className: '4 «А»',
    status: 'ready',
    timeLimitMinutes: 12,
    createdAt: '2026-11-03T08:00:00.000Z',
    updatedAt: '2026-11-07T16:20:00.000Z',
    questions: [
      {
        id: 'question-4',
        type: 'single_choice',
        text: 'Что является носителем информации?',
        topic: 'Информация',
        points: 1,
        options: [
          { id: 'option-10', text: 'Флешка' },
          { id: 'option-11', text: 'Мышь' },
          { id: 'option-12', text: 'Наушники' },
        ],
        correctOptionId: 'option-10',
      },
    ],
  },
];