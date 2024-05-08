<template>
    <WithAsideLayout>
        <template #default>
                <graphical-charts />
                <card class="mailing-card">
                    <template #header>
                        <h1>{{ "Рассылки в Октябре" }}</h1>
                    </template>
                    <template #main>
                        <ul class="mailing-list">
                            <li>
                                <span class="mailing-list__date">10.12.2023 </span><span class="mailing-list__text">До
                                    17.10.2023 получите скидку -15% на все товары для мытья
                                    волос </span><span class="mailing-list__status status-pending">В процессе</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">09.12.2023 </span><span class="mailing-list__text">-20%
                                    на
                                    товары с красным ценником</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">08.12.2023 </span><span class="mailing-list__text">Sed
                                    ut
                                    perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, to</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">07.12.2023 </span><span
                                    class="mailing-list__text">Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa
                                    qui officia deserunt mollit anim id es</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">08.11.2023 </span><span class="mailing-list__text">Ut
                                    enim
                                    ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut al</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">08.11.2023 </span><span class="mailing-list__text">Quis
                                    autem vel eum iure reprehenderit qui in ea voluptate velit
                                    esse quam nihil molestiae consequatu</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">30.10.2023 </span><span class="mailing-list__text">Ut
                                    enim
                                    ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo con</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">05.09.2023 </span><span class="mailing-list__text">Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia consequuntur ma</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                            <li>
                                <span class="mailing-list__date">03.08.2023 </span><span class="mailing-list__text">Sed
                                    ut
                                    perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, to</span>
                                <span class="mailing-list__status status-success">Завершена</span>
                            </li>
                        </ul>
                    </template>
                </card>
        </template>

        <template #aside>
            <card>
                <template #header>
                    <h1>Системные шаблоны</h1>
                </template>
                <template #main>
                    <ul class="layout-list">
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
    </WithAsideLayout>
</template>
<script setup>
import WithAsideLayout from '~/layouts/withAsideLayout.vue';

const store = useMainStore();

const { text, count } = storeToRefs(store);
const { increment } = store;
</script>

<style lang="scss">
.layout-list {
        li:not(:last-child) {
            margin-bottom: 1rem;
        }
        
    }
    .mailing-card {}
    
    .mailing-list {
        li {
            :not(:last-child) {
                margin-bottom: 1rem;
            }
            max-width: 100%;
            display: flex;
            gap: 2rem;
            white-space: nowrap;
            // justify-content: space-between;
        }

        &__date {
            // flex: 0 1 10.65%;
        }

        &__text {
            text-overflow: ellipsis;
            max-width: 40.9375rem;
            overflow: hidden;
        }

        &__status {
            margin-left: auto;
        }

        .status-pending {
            color: $yellow;
        }

        .status-success {
            color: $green;
        }
    }

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
