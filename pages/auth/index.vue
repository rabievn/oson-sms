<template>
  <form @submit.prevent="$router.push('/')" class="form">
    <Input v-model="login" type="text" placeholder="Логин"/>
    <Input v-model="password" type="password" placeholder="Пароль"/>
    <Button>Войти</Button>
    <span class="form__registrationLink">
       <span> Нет аккаунта?</span> <NuxtLink to="/register/phone-code" class="">Зарегистрироваться</NuxtLink>
      </span>
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'auth-layout'
})
import Input from "~/components/UI/Inputs/input.vue";
import Button from "~/components/UI/Buttons/button.vue";


const login = ref('');
const password = ref('')

</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 51px;
  gap: 16px;
  text-align: center;
  color: $main-dark;
}

.form__registrationLink {
  font-size: $font-sm;
  color: #475467;

  a {
    text-decoration: underline;
    font-weight: $fw-semibold;
    color: $main-dark;
    cursor: pointer;

    &:visited {
      color: $main-dark;
    }
  }
}

</style>