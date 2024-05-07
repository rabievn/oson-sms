<template>
  <div class="layout">
    <div class="layout__content">
      <div :class="authClass" class="auth">
        <div class="auth__logo">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const register = '/register';

const authClass = computed(() => {
  return {
    'register': route.path === register
  };
});
</script>

<style lang="scss" scoped>
.layout {
  max-width: 394px;
  margin-inline: auto;
}

.layout__content {
  display: flex;
  justify-content: center;
}
.auth {
  margin-top: 15dvh;
  width: 100%;

  &__logo {
    display: flex;
    justify-content: center;
  }
}
.register {
  margin-top: 48px;
}
</style>