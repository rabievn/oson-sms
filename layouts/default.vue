<template>
    <div class="layout">
        <Sidebar class="sidebar" />
        <div class="slot">
            <slot />
        </div>
    </div>
</template>

<script setup>
// definePageMeta(() => ({
//     title: 'My Nuxt App',
//     meta: [
//         { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
//         // ... другие метатеги
//     ],
//     link: [
//         // ... ссылки
//     ],
// }));
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
    padding: 2.5cqw 1.666cqw; //48px 32px 
}
</style>