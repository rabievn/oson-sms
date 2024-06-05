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
      <pie-chart class="charts__chart pie-chart" :title="'Статус рассылки'" :parts="statusChartData"/>
    </template>
  </WithAsideLayout>
</template>

<script setup>
import BackButtonWithText from "~/components/UI/Buttons/BackButtonWithText.vue";
import WithAsideLayout from "~/layouts/withAsideLayout.vue";
import PieChart from "~/components/charts/PieChart.vue";

const statusChartData = [
  {
    label: 'Успешно',
    series: 420,
    color: '#38b000'
  },
  {
    label: 'В очереди',
    series: 33,
    color: '#56CCF2'
  },
  {
    label: 'Ошибка',
    series: 5,
    color: '#dc2f02'
  }
];

</script>

<style lang="scss" scoped>

</style>