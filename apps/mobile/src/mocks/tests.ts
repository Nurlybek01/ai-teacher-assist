import type { AssessmentTest } from '@/features/tests/types';

export const mockTests: AssessmentTest[] = [
  {
    id: 'test-1',
    title: 'Устройства компьютера и безопасность',
    description: 'Проверочная работа по основам цифровой грамотности.',
    className: '2 «А»',
    status: 'ready',
    timeLimitMinutes: 20,
    questions: [
      {
        id: 'question-1',
        type: 'single_choice',
        text: 'Какое устройство показывает информацию на экране?',
        topic: 'Устройства компьютера',
        points: 1,
        options: [
          { id: 'option-1-1', text: 'Монитор' },
          { id: 'option-1-2', text: 'Клавиатура' },
          { id: 'option-1-3', text: 'Принтер' },
        ],
        correctOptionId: 'option-1-1',
      },
      {
        id: 'question-2',
        type: 'single_choice',
        text: 'Для чего нужна клавиатура?',
        topic: 'Устройства компьютера',
        points: 1,
        options: [
          { id: 'option-2-1', text: 'Для печати на бумаге' },
          { id: 'option-2-2', text: 'Для ввода текста, чисел и символов' },
          { id: 'option-2-3', text: 'Для воспроизведения звука' },
        ],
        correctOptionId: 'option-2-2',
      },
      {
        id: 'question-3',
        type: 'single_choice',
        text: 'Сайт обещает подарок и просит ввести личные данные. Что делать?',
        topic: 'Безопасность в Интернете',
        points: 2,
        options: [
          { id: 'option-3-1', text: 'Ввести свои данные' },
          { id: 'option-3-2', text: 'Отправить ссылку всем друзьям' },
          {
            id: 'option-3-3',
            text: 'Закрыть сайт и сообщить учителю',
          },
        ],
        correctOptionId: 'option-3-3',
      },
    ],
    createdAt: '2026-11-01T09:00:00.000Z',
    updatedAt: '2026-11-02T10:00:00.000Z',
  },
  {
    id: 'test-2',
    title: 'Первые алгоритмы',
    description: 'Черновик работы о последовательности действий.',
    className: '2 «А»',
    status: 'draft',
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'question-4',
        type: 'single_choice',
        text: 'Что такое алгоритм?',
        topic: 'Алгоритмы',
        points: 1,
        options: [
          {
            id: 'option-4-1',
            text: 'Понятная последовательность действий для решения задачи',
          },
          { id: 'option-4-2', text: 'Название устройства' },
          { id: 'option-4-3', text: 'Любая картинка' },
        ],
        correctOptionId: 'option-4-1',
      },
    ],
    createdAt: '2026-11-03T09:00:00.000Z',
    updatedAt: '2026-11-03T09:00:00.000Z',
  },
];