<template>
  <div class="input-field">
    <ClientOnly>
      <input v-maska data-maska="+992 (##) ###-##-##" :type="type" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" v-if="isPhone" />
      <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-else />
    </ClientOnly>

    <label>{{ placeholder }}</label>
    <button @click="clearInput" v-if="input !== ''">
      <nuxt-icon name="reused/Close" filled />
    </button>
  </div>

</template>

<script setup>
import Button from "~/components/UI/Buttons/Button/button.vue";

const props = defineProps({
  placeholder: String,
  type: String,
  modelValue: String,
  isPhone: Boolean
});

const input = ref(props.value);

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
    width: 100%;
    height: 64px;
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
    color: $dark-blue;

    &:hover {
      border: 1px $main-dark solid;
    }

    &:focus {
      background: $white;
      color: $main-dark;
      border: 1px $main-dark solid;
    }
  }

  button {
    display: none;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: transparent;
    cursor: pointer;
    outline: none;
  }
}

.input-field input:focus~label,
.input-field input:valid~label {
  font-size: $font-xsm;
  top: 20px;
  left: 16px;
}

.input-field:focus-within button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.danger {
  input {
    border: 1px $red solid;
    background: rgba($red, 0.1);

    &:hover {
      border: 1px $red solid;
    }

    &:focus {
      border: 1px $red solid;
      background: rgba($red, 0.1);
    }
  }

  label {
    color: $red;
  }
}
</style>
