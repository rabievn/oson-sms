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
                        <Input v-model="data.title" :placeholder="'Название шаблона'" />
                        <Select v-model="data.sender" :defaultOption="'Отправитель SMS'" :options="senders" />
                        <Select v-model="data.group" :defaultOption="'Группа'" :options="groups" />
                        <Input v-model="data.sendDateTime" :type="'datetime-local'"
                            :placeholder="'Дата и время отправки'" />
                        <Select v-model="data.smsLayout" :defaultOption="'Шаблон сообщений'" :options="smsLayouts" />
                    </div>

                    <div class="text-edit-block">
                        <div class="text-edit-block__buttons">
                            <div class="text-edit-block__button">
                                <nuxt-icon name="reused/Smiley" filled />
                            </div>
                            <div class="text-edit-block__button">
                                <nuxt-icon name="reused/UserCircle" filled />
                            </div>
                            <div class="text-edit-block__button">
                                <nuxt-icon name="reused/Phone" filled />
                            </div>
                            <div class="text-edit-block__button">
                                <nuxt-icon name="reused/CalendarBlank" filled />
                            </div>
                            <div class="text-edit-block__button">
                                <nuxt-icon name="reused/Clock" filled />
                            </div>
                            <div class="text-edit-block__button">
                                <nuxt-icon name="reused/Megaphone" filled />
                            </div>
                            <div class="text-edit-block__button">
                                *1
                            </div>
                            <div class="text-edit-block__button">
                                *2
                            </div>
                            <div class="text-edit-block__button">
                                *3
                            </div>
                            <div class="text-edit-block__button">
                                *4
                            </div>
                            <div class="text-edit-block__button">
                                *5
                            </div>

                        </div>

                        <Textarea v-model="data.text"/>

                        <div class="border-line"></div>
                        <ul class="option-list">
                            <li class="option">
                                <span class="option__content">
                                    <div class="option__title">Включить короткие ссылки</div>
                                    <div class="option__subtitle">Данная опция добавит в текст СМС сообщения уникальную
                                        ссылку и Вы сможете отследить кто из получателей данного СМС прошел по этой
                                        ссылке.
                                    </div>
                                </span>
                                <Switch class="option__switch" v-model="data.options.activateShortLinks" />
                            </li>
                        </ul>
                    </div>

                    <div class="card-control-buttons">
                        <ButtonSecondary>Отменить</ButtonSecondary>
                        <Button class="">Создать</Button>
                    </div>
                </template>
            </card>
        </template>

        <template #aside>
            <SystemTemplatesBadge />
        </template>

    </WithAsideLayout>
</template>

<script setup>
import ActionButton from '~/components/UI/Buttons/ActionButton.vue'
import ButtonSecondary from '~/components/UI/Buttons/ButtonSecondary.vue'
import Button from '~/components/UI/Buttons/Button.vue'
import Switch from '~/components/UI/Switches/Switch.vue'
import Select from '~/components/UI/Selects/Select.vue'
import Input from '~/components/UI/Inputs/Input.vue'
import WithAsideLayout from "~/layouts/withAsideLayout.vue"
import SystemTemplatesBadge from '~/components/badges/SystemTemplatesBadge.vue'
import BackButtonWithText from '~/components/UI/Buttons/BackButtonWithText.vue'
import Textarea from '~/components/UI/Textareas/Textarea.vue'

const data = ref({
    title: '',
    sender: '',
    group: '',
    sendDateTime: '',
    smsLayout: '',
    text: '',
    options: {
        activateShortLinks: false
    }
})
const senders = ref(['Sender-1'])
const groups = ref(['1'])
const smsLayouts = ref(['1'])

</script>

<style lang="scss">
.text-edit-block {
    box-shadow: 0 0.25rem 2rem 0 rgba($color: #000000, $alpha: .08);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &__buttons {
        display: flex;
        gap: 0.5rem;
    }

    &__button {
        padding: 1rem;
        border: 1px solid $grey;
        border-radius: 0.5rem;

        .nuxt-icon {
            svg {
                width: 1.125rem;
                height: 1.125rem;
            }
        }
    }
}
</style>