<template>
    <div>
        <h1>Chart 1</h1>
        <ClientOnly>
            <Chart :parts="operationsChart" />
        </ClientOnly>
    </div>
</template>

<script setup>
import Chart from '~/components/charts/chart.vue';

const operationsChart = [
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

//     labels: ['Tcell', 'Babilon'],
//     colors: ['#7B61FF', '#EBC232'],
//     values: [5000, 6000]
// }
</script>

<style lang="scss" scoped></style>