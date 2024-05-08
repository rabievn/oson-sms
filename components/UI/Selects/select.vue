<template>
  <div class="select">
    <select class="select__field">
      <option selected disabled>{{ defaultOption }}</option>
    </select>
    <div class="select__icon">
      <nuxt-icon name="reused/Arrow" filled/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  defaultOption: String,
});
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &__field {
    background: $light-grey;
    height: 64px;
    border-radius: 12px;
    padding-inline: 16px;
    color: $blue-grey;
    width: 100%;

    &:hover {
      border: 1px $secondary-black solid;
    }

    &:focus {
      background: $white;
      border: 1px $main-dark solid;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}

</style>