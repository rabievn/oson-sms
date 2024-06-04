<template>
  <WithAsideLayout>
    <card>
      <template #header>
        <div>
          <BackButtonWithText>
            До 17.10.2023 получите скидку -15% на все товары для мытья волос
          </BackButtonWithText>
        </div>
      </template>
      <template #main>

        123
      </template>
    </card>
    <card>
      <template #main>
        123
      </template>
    </card>
    <template #aside>
      <pie-chart class="charts__chart pie-chart" :title="'SMS  по статусам'" :parts="statusChartData"/>
    </template>
  </WithAsideLayout>
</template>

<script setup>
import BackButtonWithText from "~/components/UI/Buttons/BackButtonWithText.vue";
import WithAsideLayout from "~/layouts/withAsideLayout.vue";
import PieChart from "~/components/charts/PieChart.vue";

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
</script>

<style lang="scss" scoped>

</style>