<template>
    <card class="chart" bordered>
        <template #header>
            <h1>Количество SMS</h1>
        </template>
        <template #main>
            chart
        </template>
        <template #footer>
            <div class="chart__footer">
                <span> Количество SMS : {{ '11 422' }} шт.</span>
                <span>Сумма: {{"1 100"}} c.</span>
            </div>
        </template>
    </card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.chart {

    &__footer {
        display: flex;
        justify-content: space-between;
    }
}
</style>