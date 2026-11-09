export type TestStatus = 'draft' | 'ready';

// На первом этапе конструктор поддерживает только один правильный ответ.
// Другие форматы заданий добавим отдельными типами позже.
export type SingleChoiceQuestion = {
  id: string;
  type: 'single_choice';
  text: string;
  topic: string;
  imageUri?: string;
  points: number;
  options: QuestionOption[];
  correctOptionId: string;
};

export type QuestionOption = {
  id: string;
  text: string;
};

export type TestQuestion = SingleChoiceQuestion;

export type AssessmentTest = {
  id: string;
  title: string;
  description: string;
  className: string;
  status: TestStatus;
  timeLimitMinutes: number;
  questions: TestQuestion[];
  createdAt: string;
  updatedAt: string;
};