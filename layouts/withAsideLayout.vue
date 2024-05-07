<template>
    <div class="page">
        <div class="page__content">
            <slot name="default"/>

        </div>
        <div class="page__sidebar">
            <slot name="aside" class="page__sidebar" />
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: flex-start;
    height: 100%;

    &__content {
        flex: 1 1 63.3125%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &__sidebar {
        flex: 0 1 30.6875%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }


}
</style>