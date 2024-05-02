<template>
    <button class="green-button">
        <slot/>
    </button>

</template>

<script setup>


</script>

<style lang="scss" >
 .green-button {
    width: 100%;
    white-space: nowrap;
    display: flex;
    justify-content: start;
    align-items: center;
    gap:0.5rem;
    padding: 0.75rem 0.75rem;
    border-radius: 0.5rem;
    font-weight: $fw-semibold;
    background: $green;
    color: $white;
 }
 .green-button .nuxt-icon svg{
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem;
 }
 .green-button .nuxt-icon svg path{
    stroke: $white;
 }
</style>