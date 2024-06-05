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
        <form class="changeForm">
          <div class="changeForm__row">
            <Input placeholder="Группа" v-model="formData.group"/>
            <Input placeholder="SMS отправитель" v-model="formData.smsSender"/>
          </div>
          <div class="changeForm__row">
            <Input placeholder="Дата создания" v-model="formData.creationDate"/>
            <Input placeholder="Дата завершения" v-model="formData.completionDate"/>
          </div>
          <div class="changeForm__row">
            <Input placeholder="Количество получателей" v-model="formData.recipients"/>
            <Input placeholder="SMS отправитель" v-model="formData.secondSmsSender"/>
          </div>
          <div class="changeForm__row">
            <Input placeholder="Сумма" v-model="formData.amount"/>
          </div>
        </form>
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
import Input from "~/components/UI/Inputs/Input.vue";

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

const formData = ref({
  group: 'Шаходатнома махсус',
  smsSender: 'RASIN SUGHD',
  creationDate: '13.01.2023 / 14:00:23',
  completionDate: '13.01.2023 / 14:00:23',
  recipients: '425',
  secondSmsSender: 'RASIN SUGHD',
  amount: '25,55 с.'
});
</script>

<style lang="scss" scoped>
.changeForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__row {
    display: flex;
    width: 100%;
    gap: 1.5rem;

    & > * {
      flex: 1 1 50%;
    }
  }


  &__row:last-child {
    & > * {
      flex: 0 0 calc(50% - 0.75rem);
    }
  }
}
</style>