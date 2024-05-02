<template>
  <div class="input-field">
    <input required="" name="text" type="text"/>
    <label>Enter your email</label>
  </div>
</template>

<script setup>
const input = null;

</script>

<style lang="scss" scoped>
.input-field {
  position: relative;
  color: $blue-grey;
}

.input-field label {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.15s ease;
}

.input-field input {
  width: calc(100% - 32px); //  width - padding-inline
  height: 64px;
  background: transparent;
  background: $light-grey;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  padding-inline: 16px;
  font-weight: $fw-semibold;

  &:hover {
    outline: 1px $main-dark solid;
  }

  &:focus {
    background: $white;
    color: $main-dark;
    outline: 1px $main-dark solid;
  }
}

.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: $font-xsm;
  top: 12px;
  left: 16px;
}
</style>
