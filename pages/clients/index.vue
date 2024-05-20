<template>
  <WithAsideLayout>

    <template #default>
      <card class="mailing-card">
        <template #header>
          <h1>Клиенты</h1>
          <div class="mailing-card__header-buttons">
            <action-button class="iconText">
              <nuxt-icon filled name="clients/FileArrowDown"/>
              Импорт из Excel
            </action-button>
            <action-button class="iconText">
              <nuxt-icon filled name="clients/FileArrowDown"/>
              Скачать шаблон Excel
            </action-button>
            <action-button @click="$router.push('/clients/new-client')">
              <nuxt-icon filled name="clients/UserPlus"/>
            </action-button>
            <action-button disabled>
              <nuxt-icon filled name="clients/Trash"/>
            </action-button>
            <action-button disabled>
              <nuxt-icon filled name="clients/UsersThree"/>
            </action-button>
          </div>
        </template>
        <template #main>
          <div class="client__main">
            <search v-model="searchValue" placeholder="имя, номер телефона"/>
            <Table :is-checkbox-exist="true" :items="dataTable" :headers="headers"/>
          </div>
        </template>
      </card>
    </template>

    <template #aside>
      <ClientGroupsBage/>
      <card>
        <template #main class="blackList__template">
          <div class="blackList">
            <button class="blackList__button">
              Черный список (183)
            </button>
            <nuxt-icon filled name="reused/CaretRight"/>
          </div>
        </template>
      </card>
    </template>

  </WithAsideLayout>
</template>

<script setup>
import WithAsideLayout from "~/layouts/withAsideLayout.vue";
import ActionButton from "~/components/UI/Buttons/actionButton.vue";
import Search from "~/components/UI/Searches/Search.vue";
import Button from "~/components/UI/Buttons/button.vue";
import Table from "~/components/UI/Tables/Table.vue";
import devServerLogs from "#app/plugins/dev-server-logs.js";

const searchValue = ref("")

const items = ref([])

const headers = ref(['ФИО', '№ телефона', 'Дата рождения', 'Группа', 'Поздравить', 'Статус'])

const dataTable = [
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  },
  {
    FIO: "Ali Huseyin Yagiz",
    phone: "+992(92)707-1111",
    dob: "19.02.1983",
    group: "Мужчины",
    congratulate: false,
    status: false
  }
];


</script>

<style lang="scss" scoped>
.mailing-card {
  &__header-buttons {
    display: flex;
    gap: 8px;
  }
}

.blackList {
  @include flexBetween;
  width: 100%;

  button {
    font-size: $font-xl;
    color: $black;
    font-weight: $fw-bold;
  }
}

.client__main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

</style>