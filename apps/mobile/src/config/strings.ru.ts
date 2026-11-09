export const strings = {
  app: {
    name: 'AI-ассистент учителя',
    subtitle: 'Помощник учителя информатики для начальных классов',
  },
  common: {
    login: 'Войти',
    loading: 'Загрузка…',
    empty: 'Пока ничего нет',
    error: 'Произошла ошибка',
    retry: 'Повторить',
    back: 'Назад',
  },
  navigation: {
    home: 'Главная',
    students: 'Ученики',
    tests: 'Тесты',
    analytics: 'Аналитика',
    settings: 'Настройки',
  },
  tests: {
    statuses: {
      draft: 'Черновик',
      ready: 'Готов',
    },
    empty: 'Оценочных работ пока нет',
    loadError: 'Не удалось загрузить оценочные работы.',
    notFound: 'Оценочная работа не найдена',
    questionCount: 'Количество вопросов',
    maximumScore: 'Максимальный балл',
    timeLimit: 'Время, мин',
    questionsTitle: 'Вопросы',
    questionNumber: 'Вопрос',
    topic: 'Тема',
  },
} as const;

export type AppStrings = typeof strings;