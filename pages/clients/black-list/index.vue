<template>
    <WithAsideLayout>

        <template #default>
            <card class="mailing-card">
                <template #header>
                    <h1>Черный список</h1>
                    <div class="mailing-card__header-buttons">
                        <action-button class="iconText">
                            <nuxt-icon filled name="clients/FileArrowDown" />
                            Импорт из Excel
                        </action-button>
                        <action-button class="iconText">
                            <nuxt-icon filled name="clients/FileArrowDown" />
                            Скачать шаблон Excel
                        </action-button>
                        <action-button @click="$router.push('/clients/new-client')">
                            <nuxt-icon filled name="clients/UserPlus" />
                        </action-button>
                        <action-button disabled>
                            <nuxt-icon filled name="clients/Trash" />
                        </action-button>
                        <action-button disabled>
                            <nuxt-icon filled name="clients/UsersThree" />
                        </action-button>
                    </div>
                </template>
                <template #main>
                    <div class="client__main">
                        <search v-model="searchValue" placeholder="Название группы" />
                        <ul class="option-list">
                            <li class="option">
                                <span class="option__text">Активировать группу</span>
                                <Switch class="option__switch" v-model="options.activate" />
                            </li>
                        </ul>
                        <div class="border-line"></div>
                        <Table :is-checkbox-exist="true" :items="dataTable" :headers="headers" />
                        <!-- <div class="card-control-buttons">
                            <ButtonSecondary>Отменить</ButtonSecondary>
                            <Button class="">Создать</Button>
                        </div> -->
                        <div class="border-line"></div>
                        <pagination />
                    </div>
                </template>
            </card>
        </template>

        <template #aside>
            <ClientGroupsBage />
            <BlackListBage />
        </template>

    </WithAsideLayout>
</template>

<script setup>
import pagination from '~/components/UI/Paginations/pagination.vue'
import BlackListBage from '~/components/BlackListBage.vue'
import ButtonSecondary from '~/components/UI/Buttons/ButtonSecondary.vue'
import WithAsideLayout from "~/layouts/withAsideLayout.vue";
import ActionButton from "~/components/UI/Buttons/actionButton.vue";
import Search from "~/components/UI/Searches/Search.vue";
import Button from "~/components/UI/Buttons/button.vue";
import Table from "~/components/UI/Tables/table.vue";
import devServerLogs from "#app/plugins/dev-server-logs.js";
import Switch from "~/components/UI/Switches/Switch.vue";

const options = {
    activate: false
}

const searchValue = ref("")

const items = ref([])

const headers = ref(['ФИО', '№ телефона', 'Дата рождения', 'Группа'])

const dataTable = [
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",
    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    },
    {
        FIO: "Ali Huseyin Yagiz",
        phone: "+992(92)707-1111",
        dob: "19.02.1983",
        group: "Мужчины",

    }
];


</script>

<style lang="scss" scoped>
.mailing-card {
    &__header-buttons {
        display: flex;
        gap: 0.5rem;
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