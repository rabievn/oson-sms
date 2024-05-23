<template>
    <WithAsideLayout>
        <template #default>
            <card>
                <template #header>
                    <h1>Мои шаблоны</h1>
                    <action-button class="iconText" :goTo="'/templates/new-template'">
                        <nuxt-icon filled class="aside__actionButton-icon" name="clients/PlusCircle" />
                        Создать
                    </action-button>
                </template>
                <template #main>
                    <template-cards-list templates="" />
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
import TemplateCardsList from '~/components/TemplateCardsList.vue'
import WithAsideLayout from '~/layouts/withAsideLayout.vue';
import SystemTemplatesBadge from '~/components/badges/SystemTemplatesBadge.vue';

</script>

<style lang="scss" scoped></style>