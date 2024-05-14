<template>
    <card class="chart-card" bordered>
        <template #header>
            <h1>Сравнение по годам</h1>
        </template>
        <template #main>
            <div class="chart-card__chart-container">
                <div class="chart-card__chart-filter">
                    <div class="chart-select">
                        <select>
                            <option value="2022" selected>2022</option>
                        </select>
                        <nuxt-icon name="reused/Arrow" class="chart-select__icon" filled>x</nuxt-icon>
                    </div>
                    <div class="chart-select">
                        <select>
                            <option value="2023" selected>2023</option>
                        </select>
                        <nuxt-icon name="reused/Arrow" class="chart-select__icon" filled>x</nuxt-icon>
                    </div>
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
                <div class="chart-card__data">
                    <span class="chart-card__data-mark bg-grey"></span><span class="chart-card__data-text"> {{
                        series[0].data[selectedSeriesIndex] }}</span>
                </div>
                <div class="chart-card__data">
                    <span class="chart-card__data-mark bg-green"></span><span class="chart-card__data-text text-green"> {{
                        series[1].data[selectedSeriesIndex] }}</span>
                </div>

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
        display: flex;
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

    &__data {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    &__data-mark {
        width: 1.1875rem;
        height: 1.1875rem;
    }

    &__data-text {
        font-size: $font-sm;
        font-weight: $fw-medium;
        color: $secondary-black;
    }
}

.chart-select {
    position: relative;
    
    &:nth-of-type(2) {
        color: $green;
    }

    & select {
        padding-inline: 1rem 2.5rem;
        padding-block: 0.65625rem;
        border-radius: 0.5rem;
        margin-right: 0.5rem;
        border: 2px solid $grey;
        background-color: #fff;
        color: inherit;
    }

    &__icon {
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: calc(50% - 0.5rem);
        right: 1.2rem;
        pointer-events: none;
    }
}

.bg-green {
    background-color: $green;
}
.bg-grey {
    background-color: $secondary-black;
}
.text-green {
    color: $green;
}
</style>