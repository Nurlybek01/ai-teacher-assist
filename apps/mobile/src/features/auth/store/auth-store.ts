import { create } from 'zustand';

// Фейковое состояние авторизации.
// Позже здесь появится проверка через Supabase.

type AuthState = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,

  login: () => {
    set({ isAuthenticated: true });
  },

  logout: () => {
    set({ isAuthenticated: false });
  },
}));