<template>
  <div>
    <div class="dropdown" :class="{ open: isOpen }">
      <button class="dropdown__button" @click.stop="toggleDropdown">
        <slot name="button"/>
        <nuxt-icon name="reused/Arrow" filled/>
      </button>
      <div
          class="overlay"
          v-show="isOpen"
          @click="closeDropdown"
      ></div>
      <div class="dropdown__main" v-show="isOpen">
        <div class="dropdown__header" v-if="$slots.header">
          <slot name="header"/>
        </div>
        <div class="dropdown__content" @click="closeDropdown">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown')) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss">
.dropdown__button .nuxt-icon svg {
  width: 0.625rem;
  height: 0.3125rem;
}
</style>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 2;

  &__button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding-inline: 1rem;
    padding-block: 0.65625rem;
    background-color: $white;
    border: 0.125rem solid $grey;
    border-radius: 0.5rem;
    font-weight: $fw-medium;
    font-size: $font-sm;
    color: $main-dark;
  }

  &__main {
    display: none;
    position: absolute;
    background-color: $white;
    width: 17.5rem;
    z-index: 2;
    margin-top: 0.625rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.75rem;
    padding: 1.5rem;
  }

  &__header {
    font-weight: $fw-bold;
    letter-spacing: -2%;
    color: $main-dark;
    padding-bottom: 1rem;
    border-bottom: 0.0625rem solid $grey;
    margin-bottom: 1rem;
    font-size: $font-md;
  }

  &__content {
    font-size: $font-md;
    font-weight: $fw-medium;
    color: $secondary-black;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    & > * {
      display: flex;
      align-items: center;
      height: 2.5rem;
      cursor: pointer;

      //&:hover {
      //  background: $light-grey;
      //}
    }
  }

  &.open .dropdown__main {
    display: block;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>
