<template>
    <div>
        {{ text }}
        {{ count }}
    </div>
    <button @click="increment">increment+</button>
</template>

<script setup>
const store = useMainStore()

const { text, count } = storeToRefs(store)
const {increment} = store

</script>

<style lang="scss" scoped></style>