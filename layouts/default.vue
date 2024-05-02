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
    min-width: 720px;
    container: layout / inline-size;
}
</style>

<style lang="scss">
.sidebar {
    background: #999;

    display: flex;
    flex-direction: column;
    flex: 0 1 16.667%;
    padding: px-to-vw(48px) px-to-vw(32px) ; //48px 32px 
}
</style>