<template>
    <card class="chart-card" bordered>
        <template #header>
            <h1>Количество SMS</h1>
        </template>
        <template #main>
            <ClientOnly>
                <div class="chart-card__chart">
                    <apexchart :id="'sms-count-chart'" height="100%" :options="chartOptions" :series="series">
                    </apexchart>
                </div>
            </ClientOnly>
        </template>
        <template #footer>
            <div class="chart-card__footer">
                <span> Количество SMS : {{ '11 422' }} шт.</span>
                <span>Сумма: {{ "1 100" }} c.</span>
            </div>
        </template>
    </card>
</template>

<script setup>

const series = [{
    name: 'Количество',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
}]

const selectedSeriesIndex = 4

const chartOptions = {
    chart: {
        id: 'sms-count-chart',
        type: 'bar',
        toolbar: {
            show: false
        }

    },
    plotOptions: {
        bar: {
            borderRadius: 0,
            barHeight: '100%',
        },
    },
    noData: {
        text: 'No data',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            color: undefined,
            fontSize: '14px',
            fontFamily: undefined
        }
    },
    colors: [function ({ dataPointIndex }) {
        if (dataPointIndex === selectedSeriesIndex) {
            return '#1B2559'
        } else {
            return '#EAEDF0'
        }
    }],

    dataLabels: {
        enabled: false,
        // formatter: function (val) {
        //     return val + "%";
        // },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#EAEDF0"]
        }
    },
    grid: {
        show: false
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
        hover: {
            filter: {
                type: 'darken',
                value: 0.3,
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'darken',
                value: 0.1,
            }
        },
    },
    xaxis: {
        categories: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        position: 'bottom',
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
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            // formatter: function (val) {
            //     return val + "%";
            // }
        }

    },

}

</script>

<style lang="scss" scoped>
.chart-card {
    &__chart {
        height: 18.0625rem;
        max-height: 18.0625rem;
        position: relative;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
    }
}
</style>