<template>
  <div class="input-field">
    <input required name="text" :type="type" v-model="input"/>
    <label>{{ placeholder }}</label>
    <button @click="clearInput" v-if="input !== ''">
      <nuxt-icon name="Close" filled/>
    </button>
  </div>
</template>

<script setup>

import Button from "~/components/UI/Buttons/Button/button.vue";

const props = defineProps({
  placeholder: String,
  type: String
});

const input = ref('');

const clearInput = () => {
  input.value = '';
}
</script>


<style lang="scss" scoped>
.input-field {
  position: relative;
  color: $blue-grey;


  label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: $font-md;
    pointer-events: none;
    transition: 0.15s ease;
  }

  input {
    width: calc(100% - 32px - 30px); // ширина - отступ справа для кнопки
    height: calc(64px - 15px);
    background: transparent;
    background: $light-grey;
    border-radius: 12px;
    border: none;
    outline: none;
    font-size: $font-md;
    padding-left: 16px;
    padding-right: 30px;
    padding-top: 15px;
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

  button {
    display: none;
    position: absolute;
    top: 50%;
    right: 24px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: transparent;
    cursor: pointer;
    outline: none;
  }
}

.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: $font-xsm;
  top: 20px;
  left: 16px;
}

.input-field:focus-within button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
