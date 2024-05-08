<template>
    <card>
        <template #header>
            <h1>Графические отчёты</h1>
        </template>
        <template #main>
            <div class="charts">
                <sms-count-chart class="charts_chart first-chart" :class="$route.path === '/' ? 'full-width' : ''" />
                <pie-chart class="charts__chart pie-chart" :title="'SMS  по операторам'" :parts="operatorsChartData" />
                <pie-chart class="charts__chart pie-chart" :title="'SMS  по статусам'" :parts="statusChartData" />
            </div>
        </template>
    </card>
</template>

<script setup>
import SmsCountChart from './charts/SmsCountChart.vue';
import PieChart from './charts/PieChart.vue';

const operatorsChartData = [
    {
        label: 'Tcell',
        series: 5000,
        color: '#7B61FF'
    },
    {
        label: 'Babilon',
        series: 6000,
        color: '#EBC232'
    },
    {
        label: 'МегаФон',
        series: 4000,
        color: '#38B000'
    },
    {
        label: 'ZetMobile',
        series: 3000,
        color: '#F4943B'
    },
]

const statusChartData = [
    {
        label: 'Доставлено',
        series: 110,
        color: '#38B000'
    },
    {
        label: 'Не доставлено',
        series: 40,
        color: '#EAEDF0'
    },
    {
        label: 'Ошибка',
        series: 40,
        color: '#F4743B'
    }
]

//     labels: ['Tcell', 'Babilon'],
//     colors: ['#7B61FF', '#EBC232'],
//     values: [5000, 6000]
// }

</script>

<style lang="scss" scoped>
.charts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    &__chart {
        max-width:100%;
    }

    .full-width {
        grid-area: 1 / 1 / 2 / 3;
    }
    .pie-chart {
    }
}
</style>