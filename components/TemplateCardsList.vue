<template>
    <div class="template-cards-list">
        <div class="card" v-for="card in templates" :key="card.id">
            <div class="card__title">
                {{ card.title }}
            </div>
            <div class="card__text">
                {{ card.text }}
            </div>
            <div class="card__buttons">
                <IconButtonDark type="change" />
                <IconButtonDark type="delete" />
            </div>
            <div class="card__subtext">
                <span>Количество использований: {{ card.use_count }} </span>
                <br />
                <span>Последнее использование: {{ card.last_use_at }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconButtonDark from './UI/Buttons/IconButtonDark.vue';

const templates = [
    {
        title: 'Выясните, что нужно потребителям',
        text: 'ы снизили цены, спешите закупиться! 11-15.03 куриные окорочка — 100р за кг, помидоры – 90р за кг, молоко – 70р за л. Звони: 69485',
        use_count: 24,
        last_use_at: '12.03.2023'
    },
    {
        title: 'Покажите выгоду клиенту',
        text: 'Нет хорошего салона красоты рядом с домом? Звони нам! 66885 Скидки на маникюр и окрашивание волос!',
        use_count: 24,
        last_use_at: '12.03.2023'
    },

    {
        title: 'Проверяйте перед отправкой',
        text: 'Пора на фитнес! Запишись сейчас и получи первое занятие бесплатно. Подробности по телефону: 39853 Сайт: fitnessruss.ru',
        use_count: 24,
        last_use_at: '12.03.2023'
    },
    {
        title: 'Адаптируйте СМС под аудиторию',
        text: 'Купите вашей кошке лакомство от Muri! В наличии осталось всего 30 штук! Телефон 6777» \n « Новая когтеточка от Catt. Вторая со скидкой 30%.',
        use_count: 24,
        last_use_at: '12.03.2023'
    },
    {
        title: 'Заинтересуйте получателя',
        text: 'РАСПРОДАЖА! 2 товара по цене 1. Спеши и получи обувь по лучшей цене! Телефон: 444',
        use_count: 24,
        last_use_at: '12.03.2023'
    },
    {
        title: 'Выясните, что нужно потребителям',
        text: 'ы снизили цены, спешите закупиться! 11-15.03 куриные окорочка — 100р за кг, помидоры – 90р за кг, молоко – 70р за л. Звони: 69485',
        use_count: 24,
        last_use_at: '12.03.2023'
    },
]

</script>

<style lang="scss" scoped>
   .template-cards-list  {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .card {
        border:1px solid $grey;
        border-radius: 1.25rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__title {
            font-weight: $fw-bold;
            color: $black;
        }
        &__text {
            color: $black;
        }
        &__buttons {
            display: flex;
            gap: 0.5rem;
        }
        &__subtext {
            color: $dark-grey;
            font-size: $font-xsm;

        }

    }
   }
</style>