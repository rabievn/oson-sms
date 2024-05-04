<template>
  <div class="form">
    <div class="form__subtitle">
      Добро пожаловать в форму регистрации компании в сервисе по отправке SMS рассылки OsonSMS.
    </div>
    <Input type="number" placeholder="Номер телефона"/>
    <Button>Отправить код</Button>
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
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  color: $main-dark;
  margin-top: 4.72dvh;
  font-size: $font-md;
  font-weight: $fw-medium;
  text-wrap: balance;
}
</style>