
<script setup>

const props = defineProps({
    parts: Array
})

const labels = props.parts?.map(part => part?.label)
const series = props.parts?.map(part => part?.series)
const colors = props.parts?.map(part => part?.color)
const chartOptions = {
    chart: {
        id: 'vuechart-operators',
        type: 'donut'
    },

    legend: {
        show: true, // Display the legend
        position: 'bottom'

    },
    labels: labels,
    colors: colors,
    
    dataLabels: {
      enabled: false,
    },
    tooltip: {
        enabled: false
    },
    // sizes 
    plotOptions: {
        pie: {
            donut: {
                size: '70%'
            }
        }
    },


    // style on hover  
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
        hover: {
            filter: {
                type: 'lighten',
                value: 0.15,
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'darken',
                value: 0.15,
            }
        },
    }
};
// const series = [
//     5000, 6000, 4000, 3000
// ];
</script>

<template>
    <div class="chart-block">
        <apexchart :width="500" :options="chartOptions" :series="series"> </apexchart>
        <div class="chart-data">
            <div v-for="part in parts" :key="parts.name">
                {{ part.label }} - {{ part.series }}
            </div>
        </div>
    </div>
</template>

<style>
.chart-block {
    position: relative;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
}
.chart-data {
    position: absolute;
    text-align: center;
    padding-bottom: 30px;
    /* top: 0%;
    left: 0%; */
}
</style>