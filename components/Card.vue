<template>
    <div :class="`card ${bordered ? 'bordered' : ''}`">
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
defineProps({
    bordered: Boolean
})
</script>

<style lang="scss">
$border: 1px solid $grey;

.card {
    &.bordered {
        border: $border;
    }

    background: $white;
    border-radius: 1.25rem;
    padding: 2rem;

    &__header {
     @include flexBetween;
    }

    &__main {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: $border;
    }

    &__footer {
        padding-top: 2rem;
        border-top: $border;
    }
}
</style>
