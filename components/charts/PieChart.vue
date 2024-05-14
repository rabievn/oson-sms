<template>
    <card class="chart-card" bordered>
        <template #header>
            <h1>{{ title }}</h1>
        </template>
        <template #main>
            <ClientOnly>
                <div class="chart-block">
                    <apexchart :height="'100%'" :options="chartOptions" :series="series"> </apexchart>
                    <div class="chart-data">
                        <div v-for="part in parts" :key="parts.name">
                            <div v-if="part.series > 0">
                                {{ part.label }} - {{ part.series }}
                            </div>
                        </div>
                        <div class="fake"></div>
                    </div>
                </div>
            </ClientOnly>
        </template>
        <template #footer>
            <div class="chart-card__footer">
                <ul class="chart-legend">
                    <li v-for="part in parts" :key="parts.name" class="chart-legend__item">
                        <span class="chart-legend__dot" :style="`background-color: ${part.color}`"></span>
                        <span class="chart-legend__text">{{ part.label }}</span>
                    </li>
                </ul>
            </div>
        </template>
    </card>
</template>

<script setup>
const props = defineProps({
    title: String,
    parts: Array
})
const labels = props.parts?.map(part => part?.label)
const series = props.parts?.map(part => part?.series)
const colors = props.parts?.map(part => part?.color)
const chartOptions = {
    chart: {
        type: 'donut',
    },
    legend: {
        show: false, // Display the legend
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
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            donut: {
                size: '75%'
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

<style lang="scss" scoped>
.chart-block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18.0625rem;
    max-height: 18.0625rem;   
}

.chart-data {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    line-height: 1.2rem;
    font-size: $font-sm;
    color: $main-dark;

    .fake {
        height: 20px;
        width: 100%;
    }
    
}

.chart-legend {
    display: flex;
    justify-content: center;
    gap: 1rem;

    &__item {
        display: flex;
        white-space: nowrap;
        align-items: center;
        gap: 0.5rem;
    }

    &__dot {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
    }
}

</style>