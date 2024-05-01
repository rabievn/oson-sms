<template>
    <div>
        <h1>Главная</h1>
        <div class="text">base text</div>
    </div>
    <!-- <button @click="increment">increment+</button> -->
</template>

<script setup>

const store = useMainStore()

const { text, count } = storeToRefs(store)
const {increment} = store

</script>

<style lang="scss">
.text {
    font-size:  $font-md;
}
</style>