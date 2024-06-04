<template>
  <WithAsideLayout>

    <card class="mailing-card">
      <template #header>
        <h1>{{ "История рассылок" }}</h1>
        <LinesCount/>
      </template>
      <template #main>
        <Table :is-checkbox-exist="false" :items="smsTable" :headers="headers" path="/history" :is-route-exist="true"/>
        <div class="border-line"></div>
        <Pagination common-pages="24"/>
      </template>
    </card>
    <template #aside>
      <sms-count-chart class="charts_chart first-chart" :is-footer-exist="false" :sms-count="'11 422 sms / 1 100 c.'"/>
      <pie-chart class="charts__chart pie-chart" :title="'SMS  по статусам'" :parts="statusChartData"/>
      <pie-chart class="charts__chart pie-chart" :title="'SMS  по операторам'" :parts="operatorsChartData"/>
    </template>
  </WithAsideLayout>
</template>

<script setup>
import WithAsideLayout from "~/layouts/withAsideLayout.vue";
import PieChart from "~/components/charts/PieChart.vue";
import SmsCountChart from "~/components/charts/SMSCountChart.vue";
import Table from "~/components/UI/Tables/Table.vue";
import LinesCount from "~/components/UI/Selects/LinesCount.vue";
import Pagination from "~/components/UI/Paginations/Pagination.vue";

const headers = [
  'Дата и время',
  'Текст SMS',
  'Статус',
  'Получателей',
  'Кол-во SMS',
  'Стоимость'
];

const smsTable = [
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "В процессе",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  },
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "Завершена",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  },
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "Завершена",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  },
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "Завершена",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  },
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "Завершена",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  },
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "Завершена",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  },
  {
    dateAndTime: "01.02.2023",
    smsText: "До 17.10.2023 получите скидку -15% на все товары для мытья и чистки.",
    status: "Завершена",
    recipients: 1500,
    smsCount: 3000,
    cost: "500 с"
  }
];


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

</script>

<style lang="scss" scoped>

</style>