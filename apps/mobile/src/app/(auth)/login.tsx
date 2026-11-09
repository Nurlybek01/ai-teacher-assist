import { zodResolver } from '@hookform/resolvers/zod';
import { Redirect } from 'expo-router';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { z } from 'zod';

import { strings } from '@/config/strings.ru';
import { useAuthStore } from '@/features/auth/store/auth-store';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Введите email')
    .email('Введите корректный email'),
  password: z
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  const onSubmit: SubmitHandler<LoginFormValues> = () => {
    // Пока вход фейковый: любые корректные данные пропускают дальше.
    login();
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.content}>
        <Text variant="headlineMedium">{strings.app.name}</Text>

        <Text variant="bodyMedium" style={styles.subtitle}>
          Войдите, чтобы управлять классом и тестами
        </Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Email"
              mode="outlined"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              error={Boolean(errors.email)}
            />
          )}
        />

        {errors.email ? (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        ) : null}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Пароль"
              mode="outlined"
              value={value}
              onChangeText={onChange}
              secureTextEntry
              autoComplete="password"
              error={Boolean(errors.password)}
            />
          )}
        />

        {errors.password ? (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        ) : null}

        <Button
          mode="contained"
          onPress={() => {
          void handleSubmit(onSubmit)();
          }}
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {strings.common.login}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    gap: 12,
  },
  subtitle: {
    marginBottom: 12,
    opacity: 0.7,
  },
  errorText: {
    color: 'red',
  },
});