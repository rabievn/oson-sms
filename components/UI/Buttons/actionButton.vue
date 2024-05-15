<template>
  <button class="actionButton">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.actionButton {
  @include flexBetween;
  gap: 8px;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 8px;
  border: 2px solid $grey;
  background: $white;
}
</style>
