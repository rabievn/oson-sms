<template>
  <div class="select">
    <div class="select__optionHidden" :class="{ 'active': selectOption }">
      {{ defaultOption }}
    </div>
    <select v-model="selectOption" class="select__field" @change="updateSelectOption">
      <option disabled selected hidden></option>
      <option v-for="option in options">{{ option }}</option>
    </select>
    <div class="select__icon">
      <nuxt-icon name="reused/Arrow" filled />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  defaultOption: String,
  options: Array
});

const selectOption = ref(null)

function updateSelectOption(event) {
  selectOption.value = event.target.value;
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  max-width: 100%;

  select {
    max-width: 100%;
    width: 100%;
  }

  &__optionHidden {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: $font-md;
    color: $blue-grey;
    user-select: none;
    pointer-events: none;
    max-width: 100%;
  }

  &__optionHidden.active {
    transition: top 0.15s ease, font-size 0.15s ease;
    top: 20px;
    font-size: $font-sm;
  }

  &__field {
    background: $light-grey;
    height: 64px;
    border-radius: 12px;
    padding-inline: 16px;
    padding-top: 15px;
    width: 100%;
    color: $dark-blue;
    font-weight: $fw-semibold;
    max-width: 100%;

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
    pointer-events: none;
  }
}
</style>