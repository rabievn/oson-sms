<template>
    <card>
        <template #main>
            <button class="blackList" @click="$router.push('/clients/black-list')">
                    <h1>
                        Черный список (183)
                    </h1>
                <nuxt-icon filled name="reused/CaretRight" />
            </button>
        </template>
    </card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.blackList {
    @include flexBetween;
    width:100%;
}
</style>