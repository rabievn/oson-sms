<template>
    <div class="back-button">
        <nuxt-icon class="back-button__icon" name="reused/ArrowLeft" filled />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.back-button {
    background-color: $main-dark;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid $grey;
    @include flexCenter;

    &__icon {
        background: #000;
        width: 1.5rem;
        height: 1.5rem;

        svg {
            fill: red !important;
            stroke: red !important;
        }
    }
}

.nuxt-icon svg {
    fill: red !important;
    stroke: red !important;

}
</style>