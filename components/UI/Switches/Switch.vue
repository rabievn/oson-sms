<template>
    <label class="switch">
        <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
        <span class="slider"></span>
    </label>
</template>

<script setup>

const props = defineProps({
  modelValue: Boolean
});

</script>

<style lang="scss" scoped>
/* The switch - the box around the slider */
.switch {
 font-size: 1rem;
 position: relative;
 display: inline-block;
 width: 2.625rem;
 height: 1.5rem;
}

/* Hide default HTML checkbox */
.switch input {
 opacity: 1;
 width: 0;
 height: 0;
}

/* The slider */
.slider {
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: $dark-grey;
 transition: .3s;
 border-radius: 2.5rem;
//  border: 1px solid #ccc;
}

.slider:before {
 position: absolute;
 content: "";
 height: 1.25rem;
 width: 1.25rem;
 border-radius: 1rem;
 left: 0.125rem;
 top: 0.125rem;
 bottom: 0;
 background-color: white;
 transition: .3s;
}

input:checked + .slider {
 background-color: $yellow;
//  border: 1px solid transparent;
}

input:checked + .slider:before {
 transform: translateX(1.125rem);
}
</style>