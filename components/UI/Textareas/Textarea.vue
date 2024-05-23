<template>
    <div class="textarea-block">
        <textarea :value="modelValue" @input="$emit('update:ModelValue', $event.target.value)" rows="8" placeholder="Текст sms"></textarea>
        <div class="symbols-count">{{ 67 }} символов / 1 sms</div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: String
})
</script>

<style lang="scss" scoped>
.textarea-block {
    textarea {
        width: 100%;
        border-radius: 1rem;
        padding: 1.25rem;
        background-color: #EFF0F6;
        color: #6E7191;
        font-size: 0.9375rem;
        letter-spacing: 0.046875rem;
        font-family: $font-family-poppins;
    }
}

.symbols-count {
    margin-top: 0.5rem;

    color: #6E7191;
    font-family: $font-family-poppins;
    font-size: 0.8125rem;
    letter-spacing: 0.015625rem;
}
</style>