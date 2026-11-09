// Все тексты интерфейса хранятся здесь,
// чтобы не вшивать русский текст в компоненты.

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
  },
  navigation: {
    home: 'Главная',
    students: 'Ученики',
    tests: 'Тесты',
    analytics: 'Аналитика',
    settings: 'Настройки',
  },
} as const;

export type AppStrings = typeof strings;