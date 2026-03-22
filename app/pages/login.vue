<script lang="ts" setup>
const router = useRouter()

const errorMessage = ref('')
const loading = ref(false)

async function login(event: SubmitEvent) {
  const form = event.target as HTMLFormElement

  // 1. Достаем данные из формы
  const formData = new FormData(form)
  const email = formData.get('email')
  const password = formData.get('password')

  loading.value = true
  errorMessage.value = ''

  try {
    // 2. Запрос к /api/auth/login
    const { data, error } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: {
        email,
        password
      }
    })

    // 3. Проверяем результат
    if (error.value) {
      errorMessage.value = error.value.data?.message || 'Ошибка входа'
      return
    }

    // если ошибок нет — редирект
    await router.push('/profile')
  } catch (err) {
    errorMessage.value = 'Не удалось выполнить вход'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="login" method="post" class="login-form">
    <h2>Вход</h2>

    <input
      type="email"
      name="email"
      placeholder="Email"
      required
    />

    <input
      type="password"
      name="password"
      placeholder="Пароль"
      required
    />

    <button type="submit" :disabled="loading">
      {{ loading ? 'Входим...' : 'Войти' }}
    </button>

    <p v-if="errorMessage" class="error">
      {{ errorMessage }}
    </p>

    <NuxtLink to="/signup">Создать аккаунт</NuxtLink>
  </form>
</template>

