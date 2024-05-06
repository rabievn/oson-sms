<template>
  <select class="select">
    <option selected disabled>Choose</option>
  </select>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.select {
  background: $light-grey;
  height: 64px;
  border-radius: 12px;
  padding-inline: 16px;
  color: $blue-grey;

  &:hover {
    border: 1px $secondary-black solid;
  }

  &:focus {
    background: $white;
    border: 1px $main-dark solid;
  }

}


</style>