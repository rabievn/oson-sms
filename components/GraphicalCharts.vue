<template>
    <card>
        <template #header>
            <h1>Графические отчёты</h1>
        </template>
        <template #main>
            <div class="charts">
                <div>filter</div>

                <SMSCountChart />
            </div>
        </template>
    </card>
</template>

<script setup>
import SMSCountChart from './charts/SMSCountChart.vue';

</script>

<style lang="scss" scoped></style>