<template>
  <form @submit.prevent class="form">
    <div class="form__title">
      Регистрация
    </div>
    <div class="form__userInfo">
      <Input type="text" placeholder="ФИО"/>
      <Input type="number" placeholder="+992(92) 707-1111"/>
      <Input type="text" placeholder="Название компании"/>
      <Input type="text" placeholder="SMS отправитель" v-model="sender"/>
      <Select/>
    </div>
    <div class="form__register">
      <Input type="text" placeholder="Логин"/>
      <Input type="password" placeholder="Пароль"/>
      <Input type="password" placeholder="Повторить пароль"/>
    </div>
    <Button>Отправить код</Button>
  </form>
</template>

<script setup>
import Input from "~/components/UI/Inputs/input.vue";
import Button from "~/components/UI/Buttons/Button/button.vue";
import Select from "~/components/UI/Selects/Select.vue";

definePageMeta({
  layout: 'auth-layout'
})

const sender = ref('OsonSMS')

</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  color: $main-dark;

  font-size: $font-md;
  font-weight: $fw-medium;
  text-wrap: balance;

  &__title {
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