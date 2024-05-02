<template>
    <button 
    ref="button"
    :class="`
        side-item 
        ${route.path === $route.path ? 'active' : ''}
        ${pressed ? 'pressed' : ''}
    `" 
    @click="$router.push(route.path)"
    @mousedown="button.classList.add('pressed')"
    @mouseup="button.classList.remove('pressed')"
    @mouseleave="button.classList.remove('pressed')"
    >
        <slot />
    </button>

</template>

<script setup>
const pressed = false
defineProps(['route'])
const button = ref('button')
</script>

<style lang="scss">
.side-item {
    width: 100%;
    white-space: nowrap;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0.75rem;
    border-radius: 0.5rem;
    font-weight: $fw-semibold;
    background: $white;
    color: $dark-grey;
    transition: $transition-1;

    &:hover {
        background: $back;
    }

    &.active {
        background: $main-dark;
        color: $white;
        &.nuxt-icon svg path {
            stroke: $white;
        }
    }

    &.pressed {
        background: rgba($color: #000000, $alpha: .1);
    }
}

.side-item .nuxt-icon svg {
    width: 1.5rem;
    height: 1.5rem;
}

.side-item .nuxt-icon svg path {
    stroke: $dark-grey;
}
</style>