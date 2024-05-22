<template>
    <card>
        <template #header>
            <h1>Платежи</h1>
        </template>
        <template #main>
            <ul class="payments-list">
                <li>
                    <span class="payments-list__date">13.03.2023; 09:12 </span>
                    <span class="payments-list__sum">200 c. </span>
                </li>
                <li>
                    <span class="payments-list__date">13.03.2023; 09:12 </span>
                    <span class="payments-list__sum">200 c. </span>
                </li>
                <li>
                    <span class="payments-list__date">13.03.2023; 09:12 </span>
                    <span class="payments-list__sum">200 c. </span>
                </li>
                <li>
                    <span class="payments-list__date">13.03.2023; 09:12 </span>
                    <span class="payments-list__sum">200 c. </span>
                </li>
                <li>
                    <span class="payments-list__date">13.03.2023; 09:12 </span>
                    <span class="payments-list__sum">200 c. </span>
                </li>
                <li>
                    <span class="payments-list__date">13.03.2023; 09:12 </span>
                    <span class="payments-list__sum">200 c. </span>
                </li>
            </ul>
        </template>
    </card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.payments-list {
        li {
            :not(:last-child) {
                margin-bottom: 0.5rem;
            }

            display: flex;
            justify-content: space-between;
        }

        &__sum {
            margin-left: auto;
        }
    }
</style>