import { QueryClient } from '@tanstack/react-query';

// Единый клиент TanStack Query для всего приложения.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});