<template>
    <card class="chart-card" bordered>
        <template #header>
            <h1>Сравнение по годам</h1>
        </template>
        <template #main>
            <div class="chart-card__chart-container">
                <div class="chart-card__chart-filter">
                    <select>
                        <option value="2022" selected>2022</option>
                    </select>
                    <select>
                        <option value="2023" selected>2023</option>
                    </select>
                </div>
                <ClientOnly>
                    <div class="chart-card__chart">
                        <apexchart :id="'year-comparison-chart'" height="100%" :options="chartOptions" :series="series">
                        </apexchart>
                    </div>
                </ClientOnly>
            </div>
        </template>
        <template #footer>
            <div class="chart-card__footer">
                <span> {{ series[0].data[selectedSeriesIndex] }}</span>
                <span> {{ series[1].data[selectedSeriesIndex] }}</span>
            </div>
        </template>
    </card>
</template>

<script setup>

const selectedSeriesIndex = 3


const series = [
    {
        name: 'Q1 Budget',
        group: 'budget',
        data: [1500, 1500, 1500, 10311, 20000, 1500, 1500, 1500, 1500, 1500, 1500, 1500]
    },
    {
        name: 'Q1 Actual',
        group: 'actual',
        data: [1500, 1500, 1500, 15135, 40000, 1500, 1500, 1500, 1500, 1500, 1500, 1500]
    },
]

const chartOptions = {
    chart: {
        type: 'bar',
        height: '100%',
        stacked: true
    },
    grid: {
        show: false,
    },
    axisBorder: {
        show: false
    },
    axisTicks: {
        show: false
    },
    crosshairs: {
        show: false
    },
    stroke: {
        width: 4,
        colors: ['#F9F9F9']
    },
    dataLabels: {
        enabled: false,
        // formatter: (val) => {
        //     return ''
        // }
    },
    plotOptions: {
        bar: {
            rangeBarGroupRows: false,
            barHeight: '100%',
        }
    },
    xaxis: {
        categories: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    },
    fill: {
        opacity: 1
    },
    colors: ['#5E6D84', '#38B000'],
    yaxis: {
        show: false,
        labels: {
            formatter: (val) => {
                return val / 1000 + 'K'
            }
        }
    },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left'
    }
}

</script>

<style lang="scss" scoped>
.chart-card {
    &__chart-container {
        background: #F9F9F9;
        border-radius: 1.25rem;
        height: 24.8125rem;
    }

    &__chart-filter {
        padding: 2rem 2rem 2rem 2rem;

        select {
            padding-inline: 1rem 2.5rem;
            padding-block: 0.65625rem;
            border-radius: 0.5rem;
            margin-right: 0.5rem;
            border: 2px solid $grey;
        }

    }

    &__chart {
        height: 16.3125rem;
        max-height: 16.3125rem;
        position: relative;
    }

    &__footer {
        display: flex;
        gap: 2rem;
    }
}
</style>