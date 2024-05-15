<template>
  <input type="text" class="search"/>
</template>

<script setup>

import Input from "~/components/UI/Inputs/input.vue";
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 64px;
  border-radius: 12px;
  padding-inline: 1rem;
  background: $light-grey;
  color: $dark-blue;
  &::placeholder {
    color: $blue-grey;
  }
}

</style>