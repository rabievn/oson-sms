<template>
  <div class="layout">
    <div class="layout__content">
      <div class="auth">
        <div class="auth__logo">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>


<script setup>
</script>

<style lang="scss" scoped>
.layout {
  max-width: 394px;
  margin-inline: auto;
}

.layout__content {
  display: flex;
  justify-content: center;
  margin-inline: 10px;
}

.auth {
  margin-top: 15dvh;
  width: 100%;

  &__logo {
    display: flex;
    justify-content: center;
  }
}
</style>