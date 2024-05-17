<template>
  <div class="input-field">
    <ClientOnly>
      <input required ref="input" v-maska data-maska="+992 (##) ###-##-##" :type="type" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" v-if="isPhone" />
      <input required ref="input" @focus="isFocused = true" @blur="isFocused = false"
      :type="type === 'date' ? (isFocused || modelValue?.length > 0 ? 'date' : 'text') : type" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" v-else />
  
    </ClientOnly>
    <!-- <nuxt-icon class="input-field__icon" name="reused/CalendarBlank" filled @click="$refs.input.focus(); $refs.input.click()" v-if="type === 'date'" /> -->
    <label>{{ placeholder }}</label>
    <button @click="clearInput" v-if="modelValue !== '' && type !== 'date'">
      <nuxt-icon name="reused/Close" filled />
    </button>
  </div>

</template>

<script setup>

const props = defineProps({
  placeholder: String,
  type: String,
  modelValue: String,
  isPhone: Boolean
});

const isFocused = ref(false)

const emit = defineEmits(['update:modelValue']);

const clearInput = () => {
  emit('update:modelValue', "");
};

</script>


<style lang="scss">
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
    height: 4rem;
    background: transparent;
    background: $light-grey;
    border-radius: 0.75rem;
    font-size: $font-md;
    padding-left: 1rem;
    padding-right: 1.875rem;
    padding-top: 0.9375rem;
    font-weight: $fw-semibold;
    color: $dark-blue;

    &[type="date"]::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      display: block;
      background: url('/assets/icons/reused/CalendarBlank.svg') center / cover no-repeat;
      position: absolute;
      top:calc(50% - 0.75rem);
      right: 1rem;
      width: 1.5rem;
      height: 1.5rem;
      border-width: thin;
    }

    &:hover {
      border: 1px $main-dark solid;
    }

    &:focus {
      background: $white;
      color: $main-dark;
      border: 1px $main-dark solid;
    }
  }

  // &__icon {
  //   position: absolute;
  //   right: 1rem;
  //   top: calc(50% - 0.75rem);
  //   width: 1.5rem;
  //   height: 1.5rem;

  //   & svg {
  //     width: 100%;
  //     height: 100%;
  //   }
  // }

  button {
    display: none;
    position: absolute;
    top: 50%;
    right: 0.625rem;
    transform: translateY(-50%);
    background: transparent;
    cursor: pointer;
    outline: none;
  }


}

.input-field input:focus~label,
.input-field input:valid~label {
  font-size: $font-xsm;
  top: 1.25rem;
  left: 1rem;
}

.input-field:focus-within button {
  @include flexCenter;
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
