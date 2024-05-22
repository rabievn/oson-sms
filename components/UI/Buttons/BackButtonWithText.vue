<template>
    <div class="back-button-with-text">
        <BackButton @back-click="$router.go(-1)" />
        <h1>
            <slot />
        </h1>
    </div>
</template>

<script setup>
import BackButton from '~/components/UI/Buttons/BackButton.vue'
</script>

<style lang="scss" scoped>
.back-button-with-text {
    display: flex;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
}
</style>