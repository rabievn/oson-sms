<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="../../assets/images/logo.svg" alt="Logo icon">
    </div>
    <form @click.prevent class="auth__form" action="">
      <Input type="text" placeholder="Логин"/>
      <Input type="text" placeholder="Пароль"/>
      <Button>Войти</Button>
      <span class="auth__registrationLink">
        Нет аккаунта? <NuxtLink to="/register" class="">Зарегистрироваться</NuxtLink>
      </span>
    </form>
  </div>
</template>

<script setup>
import Input from "~/components/UI/Inputs/input.vue";
import Button from "~/components/UI/Buttons/Button/button.vue";

definePageMeta({
  layout: 'auth-layout'
})
</script>

<style lang="scss" scoped>
.auth {
  margin-top: 170px;
  width: 100%;

  &__logo {
    display: flex;
    justify-content: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 51px;
    gap: 16px;
  }

  &__registrationLink {
    font-size: $font-sm;
    text-align: center;
    color: $main-dark;
    a {
      text-decoration: underline;
      font-weight: $fw-semibold;
      color: $main-dark;
      cursor: pointer;
    }
  }
}


</style>