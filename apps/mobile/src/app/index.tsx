import { Redirect } from 'expo-router';

import { useAuthStore } from '@/features/auth/store/auth-store';

export default function RootIndex() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return <Redirect href={isAuthenticated ? '/(tabs)' : '/(auth)/login'} />;
}