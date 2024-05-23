<template>
  <button @click="handleClick" class="back-button">
    <nuxt-icon class="back-button__icon" :name="'reused/'+getIcon()" filled />
  </button>
</template>

<script setup>

const props = defineProps({
  type: String
})
const emit = defineEmits(['backClick'])

const handleClick = () => {
  emit('backClick')
}

const getIcon = () => {
  switch (props.type) {
    case 'change':
      return 'PencilLine'
      break;
      case 'delete':
      return 'Trash'
      break;
  }
}
</script>


<style lang="scss">
.back-button {
  background-color: $main-dark;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  // border: 2px solid $grey;
  @include flexCenter;

  &:hover {
    background: $secondary-dark-blue;
  }

  &:active {
    background: $brown-black;
  }

  &__icon {
    display: block;
    flex: 0 0 1.5rem;
    height: 100%;

    svg,
    path {
      width: 1.5rem;
      min-width: 100%;
      height: 100%;
      stroke: $white;
    }
  }
}
</style>