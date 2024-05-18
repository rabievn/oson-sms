<template>
  <button @click="handleClick" class="back-button">
    <nuxt-icon class="back-button__icon" name="reused/ArrowLeft" filled />
  </button>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['backClick'])

const handleClick = () => {
  emit('backClick')
}
</script>


<style lang="scss">
.back-button {
    background-color: $main-dark;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid $grey;
    @include flexCenter;

    &__icon {
        width: 1.5rem;
        height: 1.5rem;

        svg,
        path {
            width: 100%;
            height: 100%;
            stroke: $white;
        }
    }
}
</style>