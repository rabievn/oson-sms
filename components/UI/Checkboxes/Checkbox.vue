<template>
  <label class="container">
    <input type="checkbox" >
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
</script>

<style lang="scss" scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  font-size: 1.375rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5625rem;
  width: 1.5625rem;
  border: 0.125rem solid $main-dark;
  border-radius: 0.375rem;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: $main-dark;
  border-radius: 0.375rem;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 0.5625rem;
  top: 0.3125rem;
  width: 0.3125rem;
  height: 0.625rem;
  border: solid white;
  border-width: 0 0.1875rem 0.1875rem 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>