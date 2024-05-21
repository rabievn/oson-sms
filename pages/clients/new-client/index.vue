<template>
    <WithAsideLayout>

        <template #default>
            <card class="new-client-card">
                <template #header>
                    <div class="new-client-card__header">
                        <back-button @back-click="$router.go(-1)"/>
                        <h1>Новый Клиент</h1>
                    </div>
                </template>
                <template #main>
                    <div class="new-client-card__main">
                        <div class="new-client-card__selects">
                            <Input v-model="data.fio" :placeholder="'ФИО'" />
                            <Select v-model="data.phone" :defaultOption="'Номер телефона'" :options="phoneNumbers" />
                            <Select v-model="data.group" :defaultOption="'Группа'" :options="groups" />
                            <Input v-model="data.birthday" :type="'date'" :placeholder="'День рождения'" />
                            <Select v-model="data.smsLayout" :defaultOption="'Шаблон сообщений'"
                                :options="smsLayouts" />
                        </div>
                        <div class="border-line"></div>
                        <ul class="option-list">
                            <li class="option">
                                <span class="option__text">Поздравлять на День рождения</span>
                                <Switch class="option__switch" v-model="data.options.option1" />
                            </li>
                            <li class="option">
                                <span class="option__text">Статус клиента (включите, чтобы отправлять SMS)</span>
                                <Switch class="option__switch" v-model="data.options.option2" />
                            </li>
                        </ul>
                        <div class="border-line"></div>
                        <div class="new-client-card__params">
                            <Input v-model="data.params.param1" :placeholder="'Param 1'" />
                            <Input v-model="data.params.param2" :placeholder="'Param 2'" />
                            <Input v-model="data.params.param3" :placeholder="'Param 3'" />
                            <Input v-model="data.params.param4" :placeholder="'Param 4'" />
                            <Input v-model="data.params.param5" :placeholder="'Param 5'" />
                        </div>
                        <div class="card-control-buttons">
                            <ButtonSecondary>Отменить</ButtonSecondary>
                            <Button class="">Создать</Button>
                        </div>
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
import BlackListBage from '~/components/BlackListBage.vue'
import ButtonSecondary from '~/components/UI/Buttons/ButtonSecondary.vue'
import Button from '~/components/UI/Buttons/Button.vue'
import Switch from '~/components/UI/Switches/Switch.vue'
import Select from '~/components/UI/Selects/select.vue'
import Input from '~/components/UI/Inputs/Input.vue'
import BackButton from '~/components/UI/Buttons/backButton.vue'
import WithAsideLayout from "~/layouts/withAsideLayout.vue";


const data = ref({
    fio: '',
    phone: '',
    group: '',
    birthday: '',
    smsLayout: '',
    options: {
        option1: true,
        options2: false
    },
    params: {
        param1: '',
        param2: '',
        param3: '',
        param4: '',
        param5: '',
    }
})
const phoneNumbers = ref(['+992920000000'])
const groups = ref(['1'])
const smsLayouts = ref(['1'])

</script>

<style lang="scss" scoped>
.new-client-card {

    &__header {
        display: flex;
        align-items: center;
        gap: 1rem;
        white-space: nowrap;
    }

    &__main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &__selects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    &__params {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
}
</style>