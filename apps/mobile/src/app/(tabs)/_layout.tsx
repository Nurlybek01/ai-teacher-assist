import { Tabs } from 'expo-router';

import { strings } from '@/config/strings.ru';

export default function TabsLayout() {
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
    </Tabs>
  );
}