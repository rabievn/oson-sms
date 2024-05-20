<template>
  <div class="search">
    <input type="text" class="search__input" :placeholder="placeholder" :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"/>
    <button class="search__button">
      <nuxt-icon filled class="search__icon" name="reused/Magnifier"/>
    </button>
  </div>
</template>

<script setup>
import Input from "~/components/UI/Inputs/Input.vue";

const props = defineProps({
  placeholder: String,
  modelValue: String,
});
</script>

<style>
.search__icon.nuxt-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
<style lang="scss" scoped>
.search {
  position: relative;

  &__input {
    width: 100%;
    height: 4rem;
    border-radius: 0.75rem;
    padding-inline: 1rem;
    background: $light-grey;
    color: $dark-blue;

    &:hover {
      border: 1px solid $main-dark;
    }

    &:focus {
      border: 1px solid $main-dark;
      background: $white;
    }

    &::placeholder {
      color: $blue-grey;
    }
  }

  &__button {
    position: absolute;
    background: transparent;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
}

</style>