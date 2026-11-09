export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  className: string;
};

export type StudentListItem = Student & {
  averageScore: number;
  completedTests: number;
};

export type StudentTopicResult = {
  topic: string;
  correctAnswers: number;
  totalAnswers: number;
  successRate: number;
};