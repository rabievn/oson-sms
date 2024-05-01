<template>
  <input class="input" type="text">
</template>

<style lang="scss" scoped>
.input {
  height: 64px;
  background: $light-grey;
  padding-inline: 16px;
  border-radius: 12px;
  color: $blue-grey;
  font-weight: $fw-regular;
  outline: none;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;


  &::placeholder {
    color: $blue-grey;
  }
}

</style>
