<template>
  <form @submit.prevent class="form">
    <div class="form__subtitle">
      Добро пожаловать в форму регистрации компании в сервисе по отправке SMS рассылки OsonSMS.
    </div>
    <Input v-model="phone" :type="text" :placeholder="'Номер телефона'" :isPhone="true"/>
    <Button @click="sendCode = !sendCode">Отправить код</Button>
  </form>
  <form @submit.prevent v-show="sendCode" class=" sendCode">
    <div class="sendCode__text">
      SMS сообщение с кодом было успешно отправлено, введите код
    </div>
     <Input v-model="code" type="number" placeholder="4421"/>
    <Button @click="$router.push('/register')">Проверить код</Button>
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'auth-layout'
})
import Input from "~/components/UI/Inputs/Input.vue";
import Button from "~/components/UI/Buttons/Button.vue";

let sendCode = ref(false);

const phone = ref('')
const code = ref('')

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