<template>
    <WithAsideLayout>
        <template #default>

            <graphical-charts />

            <card class="mailing-card">
                <template #header>
                    <h1>{{ "Рассылки в Октябре" }}</h1>
                </template>
                <template #main>

                    <mailing-list />

                </template>
            </card>
        </template>

        <template #aside>

            <system-templates-badge />
            <payments-badge />

        </template>
    </WithAsideLayout>
</template>
<script setup>
import WithAsideLayout from '~/layouts/withAsideLayout.vue';
import SystemTemplatesBadge from '~/components/badges/SystemTemplatesBadge.vue'
import PaymentsBadge from '~/components/badges/PaymentsBadge.vue'

const store = useMainStore();

const { text, count } = storeToRefs(store);
const { increment } = store;
</script>

<style lang="scss"></style>
