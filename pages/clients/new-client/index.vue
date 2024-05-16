<template>
    <WithAsideLayout>

        <template #default>
            <card class="new-client-card">
                <template #header>
                    <div class="new-client-card__header">
                        <back-button />
                        <h1>Новый Клиент</h1>
                    </div>
                </template>
                <template #main>
                    <div class="new-client-card__main">
                        <div class="new-client-card__selects">
                            <Input v-model="data.fio" :placeholder="'ФИО'"/>
                            <Select :defaultOption="'Номер телефона'" :options="phoneNumbers"/>
                            <Select :defaultOption="'Группа'" :options="groups"/>
                            <Input :type="'date'" :placeholder="'День рождения'"/>
                            <Select :defaultOption="'Шаблон сообщений'" :options="smsLayouts"/>
                        </div>
                        <div class="new-client-card__options">
                            options
                        </div>
                        <div class="new-client-card__border"></div>
                        <div class="new-client-card__params">
                            params
                        </div>
                    </div>
                </template>
            </card>
        </template>

        <template #aside>
            <ClientGroupsBage />
        </template>

    </WithAsideLayout>
</template>

<script setup>
import Select from '~/components/UI/Selects/select.vue'
import Input from '~/components/UI/Inputs/input.vue'
import BackButton from '~/components/UI/Buttons/BackButton.vue'
import WithAsideLayout from "~/layouts/withAsideLayout.vue";


const data = ref({
    fio: ''
})
const phoneNumbers = ref(['+992920000000'])
const groups = ref(['1'])
const smsLayouts = ref(['1'])

</script>

<style lang="scss" scoped>
.new-client-card {
    &__border {
        border-bottom: $border;
    }

    &__header {
        display: flex;
        align-items: center;
        gap: 1rem;
        white-space: nowrap;
    }

    &__main {

    }

    &__selects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;

    }

}
</style>