import { Redirect, Tabs } from 'expo-router';

import { strings } from '@/config/strings.ru';
import { useAuthStore } from '@/features/auth/store/auth-store';

export default function TabsLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: strings.navigation.home,
        }}
      />

      <Tabs.Screen
        name="students"
        options={{
          title: strings.navigation.students,
        }}
      />

      <Tabs.Screen
        name="tests"
        options={{
          title: strings.navigation.tests,
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: strings.navigation.analytics,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: strings.navigation.settings,
        }}
      />
    </Tabs>
  );
}