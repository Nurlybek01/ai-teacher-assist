import type { AssessmentTest } from '@/features/tests/types';

// Содержимое работы на момент запуска проведения.
// Не содержит статуса и дат редактирования исходной работы.
export type TestSnapshot = Pick<
  AssessmentTest,
  | 'title'
  | 'description'
  | 'className'
  | 'timeLimitMinutes'
  | 'questions'
>;

type TestSessionBase = {
  id: string;
  testId: string;
  testSnapshot: TestSnapshot;
  startedAt: string;
};

export type InProgressTestSession = TestSessionBase & {
  status: 'in_progress';
  entryClosedAt: null;
  completedAt: null;
};

export type EntryClosedTestSession = TestSessionBase & {
  status: 'entry_closed';
  entryClosedAt: string;
  completedAt: null;
};

export type CompletedTestSession = TestSessionBase & {
  status: 'completed';
  entryClosedAt: string;
  completedAt: string;
};

export type TestSession =
  | InProgressTestSession
  | EntryClosedTestSession
  | CompletedTestSession;

export type TestSessionStatus = TestSession['status'];