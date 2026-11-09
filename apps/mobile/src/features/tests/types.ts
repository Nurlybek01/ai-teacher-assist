export type TestStatus = 'draft' | 'ready';

export type QuestionBase = {
  id: string;
  text: string;
  topic: string;
  imageUri?: string;
  points: number;
};

export type QuestionOption = {
  id: string;
  text: string;
};

export type SingleChoiceQuestion = QuestionBase & {
  type: 'single_choice';
  options: QuestionOption[];
  correctOptionId: string;
};

export type MatchingItem = {
  id: string;
  text: string;
  imageUri?: string;
};

export type MatchingPair = {
  leftItemId: string;
  rightItemId: string;
};

export type MatchingQuestion = QuestionBase & {
  type: 'matching';
  leftItems: MatchingItem[];
  rightItems: MatchingItem[];
  correctPairs: MatchingPair[];
};

export type TextAnswerQuestion = QuestionBase & {
  type: 'text_answer';
  sampleAnswer?: string;
  gradingCriteria?: string;
};

export type FillBlank = {
  id: string;
  label: string;
  acceptedAnswers: string[];
};

export type FillBlanksQuestion = QuestionBase & {
  type: 'fill_blanks';
  blanks: FillBlank[];
};

export type CreativeQuestion = QuestionBase & {
  type: 'creative';
  instructions: string;
  gradingCriteria?: string;
};

// Полная модель форматов, которые будем подключать поэтапно.
export type AssessmentQuestion =
  | SingleChoiceQuestion
  | MatchingQuestion
  | TextAnswerQuestion
  | FillBlanksQuestion
  | CreativeQuestion;

// Пока API и экран поддерживают только выбор одного ответа.
// Расширим этот тип после подготовки обработки остальных форматов.
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