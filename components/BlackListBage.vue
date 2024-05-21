<template>
    <card>
        <template #main>
            <div class="blackList">
                    <h1>
                        Черный список (183)
                    </h1>
                <nuxt-icon filled name="reused/CaretRight" />
            </div>
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
}
</style>