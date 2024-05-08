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
    gap: 2rem;
    align-items: flex-start;
    height: 100%;

    &__content {
        display: flex;
        flex: 0 0 63.3125rem;
        flex-direction: column;
        gap: 2rem;
    }

    &__sidebar {
        flex: 0 0 30.6875rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }


}
</style>