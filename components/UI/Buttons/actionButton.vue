<template>
  <button class="actionButton">
    <slot/>
  </button>
</template>

<style>
.actionButton .nuxt-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.greyBackground .nuxt-icon svg  {
  color: #A4A9AF;
}
</style>
<style lang="scss" scoped>
.actionButton {
  @include flexBetween;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  border-radius: 8px;
  border: 2px solid $grey;
  background: $white;
  font-size: $font-sm;
  font-weight: $fw-medium;
}

.iconText {
  padding-inline: 1rem;
  color: $main-dark;
  gap: 8px;
}
.greyBackground {
  background: $grey;
}
</style>
