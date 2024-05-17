<template>
  <form @submit.prevent class="form" @submit="$router.push('/')">
    <div class="form__title">
      Регистрация
    </div>
    <div class="form__userInfo">
      <Input v-model="name" type="text" placeholder="ФИО"/>
      <Input v-model="phone" :type="text" type="number" placeholder="+992(92) 707-1111" :isPhone="true"/>
      <Input v-model="company" type="text" placeholder="Название компании"/>
      <Input v-model="sender" type="text" placeholder="SMS отправитель" value="OsonSMS"/>
      <Select defaultOption="Частный предприниматель" :options="['Khujand']"/>
    </div>
    <div class="form__register">
      <Input v-model="login" type="text" placeholder="Логин"/>
      <Input v-model="password" type="password" placeholder="Пароль"/>
      <Input v-model="repeatPassword" type="password" placeholder="Повторить пароль"/>
    </div>
    <Button>Зарегистрироваться</Button>
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'auth-layout'
})
import Input from "~/components/UI/Inputs/Input.vue";
import Button from "~/components/UI/Buttons/Button.vue";
import Select from "~/components/UI/Selects/select.vue";

const name = ref('')
const phone = ref('')
const company = ref('')
const sender = ref('')
const login = ref('')
const password = ref('')
const repeatPassword = ref('')

</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  color: $main-dark;
  font-weight: $fw-medium;
  padding-bottom: 20px;

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