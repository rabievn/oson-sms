<template>
    <div class="card">
        <div class="card__header" v-if="$slots.header">
            <slot name="header" />
        </div>
        <div class="card__main" v-if="$slots.main">
            <slot name="main" />
        </div>
        <div class="card__footer" v-if="$slots.footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
$border: 1px solid $grey;

.card {
    background: $white;
    border-radius: 1.25rem;
    padding: 2rem;

    &__header {}

    &__main {
        margin-top: 2rem;
        padding: 2rem 0;
        border-top: $border;
    }

    &__footer {
        padding-top: 2rem;
        border-top: $border;
    }
}
</style>