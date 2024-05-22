<template>
    <WithAsideLayout>

        <template #default>
            <card>
                <template #header>
                    <BackButtonWithText>
                        Новый шаблон
                    </BackButtonWithText>
                </template>
                <template #main>
                        <div class="inputs-grid">
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
                        <div class="inputs-grid">
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
                </template>
            </card>
        </template>

        <template #aside>
            <SystemTemplatesBadge/>
        </template>

    </WithAsideLayout>
</template>

<script setup>
import ButtonSecondary from '~/components/UI/Buttons/ButtonSecondary.vue'
import Button from '~/components/UI/Buttons/Button.vue'
import Switch from '~/components/UI/Switches/Switch.vue'
import Select from '~/components/UI/Selects/Select.vue'
import Input from '~/components/UI/Inputs/Input.vue'
import WithAsideLayout from "~/layouts/withAsideLayout.vue"
import SystemTemplatesBadge from '~/components/badges/SystemTemplatesBadge.vue'
import BackButtonWithText from '~/components/UI/Buttons/BackButtonWithText.vue'


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

</style>