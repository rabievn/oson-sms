<template>
    <div class="layout">
        <Sidebar class="sidebar" />
        <div class="slot">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    min-height: 100dvh;
    min-width: 700px;
    container: layout / inline-size;
    background: $grey;
    overflow: auto;
}
</style>

<style lang="scss">
.sidebar {
    
    background: $white;
    display: flex;
    flex-direction: column;
    flex: 0 0 20rem;
    padding: px-to-vw(48px) px-to-vw(32px) ; //48px 32px 
}
.slot {
    flex: 1 1 auto;
    padding: 2rem;
}
</style>
