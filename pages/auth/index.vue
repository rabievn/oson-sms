<template>
  <form @click.prevent class="form" action="">
    <Input type="text" placeholder="Логин"/>
    <Input type="password" placeholder="Пароль"/>
    <Button>Войти</Button>
    <span class="form__registrationLink">
        Нет аккаунта? <NuxtLink to="/register" class="">Зарегистрироваться</NuxtLink>
      </span>
  </form>
</template>

<script setup>
import Input from "~/components/UI/Inputs/input.vue";
import Button from "~/components/UI/Buttons/Button/button.vue";

definePageMeta({
  layout: 'auth-layout'
})
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 51px;
  gap: 16px;
  text-align: center;
  color: $main-dark;

  &__registrationLink {
    font-size: $font-sm;

    a {
      text-decoration: underline;
      font-weight: $fw-semibold;
      color: $main-dark;
      cursor: pointer;
    }
  }
}

</style>