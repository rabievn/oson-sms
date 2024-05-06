<template>
  <form @submit.prevent class="form">
    <div class="form__subtitle">
      Добро пожаловать в форму регистрации компании в сервисе по отправке SMS рассылки OsonSMS.
    </div>
    <Input type="number" placeholder="Номер телефона"/>
    <Button @click="sendCode = !sendCode">Отправить код</Button>
  </form>
  <form @submit.prevent v-show="sendCode" class=" sendCode">
    <div class="sendCode__text">
      SMS сообщение с кодом было успешно отправлено, введите код
    </div>
    <Input type="number" placeholder="4421"/>
    <Button @click="$router.push('/register')">Проверить код</Button>
  </form>
</template>

<script setup>
import Input from "~/components/UI/Inputs/input.vue";
import Button from "~/components/UI/Buttons/Button/button.vue";

definePageMeta({
  layout: 'auth-layout'
})
let sendCode = ref(false);

</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  color: $dark-grey;
  margin-top: 4.72dvh;
  font-size: $font-md;
  font-weight: $fw-medium;
  line-height: 24px;
  text-wrap: balance;
}

.sendCode {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 56px;
  text-align: center;

  &__text {
    color: $green;
  }
}
</style>