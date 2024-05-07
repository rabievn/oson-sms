<template>
  <form @submit.prevent class="form" @submit="$router.push('/')">
    <div class="form__title">
      Регистрация
    </div>
    <div class="form__userInfo">
      <Input type="text" placeholder="ФИО"/>
      <Input type="number" placeholder="+992(92) 707-1111"/>
      <Input type="text" placeholder="Название компании"/>
      <Input type="text" placeholder="SMS отправитель" value="OsonSMS"/>
      <Select defaultOption="Частный предприниматель"/>
    </div>
    <div class="form__register">
      <Input type="text" placeholder="Логин"/>
      <Input type="password" placeholder="Пароль"/>
      <Input type="password" placeholder="Повторить пароль"/>
    </div>
    <Button>Зарегистрироваться</Button>
  </form>
</template>

<script setup>
import Input from "~/components/UI/Inputs/input.vue";
import Button from "~/components/UI/Buttons/Button/button.vue";
import Select from "~/components/UI/Selects/Select.vue";

definePageMeta({
  layout: 'auth-layout'
})

</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  color: $main-dark;
  font-weight: $fw-medium;

  &__title {
    font-size: $font-xl;
    font-weight: $fw-semibold;
    margin-top: 48px;
  }

  &__userInfo, &__register {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

}
</style>