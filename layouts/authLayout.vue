<template>
  <div class="layout">
    <div class="layout__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout {
  max-width: 395px;
  margin-inline: auto;
}

.layout__content {
  display: flex;
  justify-content: center;
}
</style>