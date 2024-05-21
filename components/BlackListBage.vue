<template>
    <card>
        <template #main class="blackList__template">
            <div class="blackList">
                <button class="blackList__button">
                    Черный список (183)
                </button>
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
  width: 100%;

  button {
    font-size: $font-xl;
    color: $black;
    font-weight: $fw-bold;
  }
}
</style>