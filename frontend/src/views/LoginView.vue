<template>
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Usuário</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
            placeholder="Digite seu usuário"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')

const authStore = useAuthStore()
const router = useRouter()

const submitLogin = () => {

  console.log('testes: ', username.value, typeof username.value, password.value)

  if (username.value === 'admin' && password.value === 'admin') {

    authStore.login()
    router.push({ name: 'home' })

  } else {
    authStore.logout()
    router.push({ name: 'login' })
  }
};
</script>

<style scoped>

</style>
