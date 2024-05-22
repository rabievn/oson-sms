<template>
    <card>
        <template #header>
            <h1>Системные шаблоны</h1>
        </template>
        <template #main>
            <ul class="templates-list">
                <li>День рождения</li>
                <li>Новый год - 31 декабря</li>
                <li>День Валентина - 14 февраля</li>
                <li>День защитника отечества - 23 февраля</li>
                <li>Международный женский день - 8 марта</li>
                <li>Навруз - 21 марта</li>
                <li>День трудящихся - 1 мая</li>
                <li>День победы - 9 мая</li>
                <li>Иди Рамазон - дата меняется ежегодно</li>
                <li>День единства - 27 июня</li>
                <li>Иди Курбон - Дата меняется ежегодно</li>
                <li>День независимости - 9 сентября</li>
                <li>День Конституции - 6 ноября</li>
            </ul>
        </template>
    </card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.templates-list {
        li:not(:last-child) {
            margin-bottom: 1rem;
        }
        
    }
</style>