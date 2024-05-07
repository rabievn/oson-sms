<template>

    <div>
        <div class="logo">
            <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="profile">
            <div class="profile-img">
                <img src="@/assets/images/user.png" alt="">
            </div>
            <div class="profile-info">
                <div class="profile-info__title">ЧП "Ахмедов"</div>
                <div class="profile-info__name">Алимов Алишер</div>
                <div class="profile-info__balance">560,00 с.</div>
            </div>
        </div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <green-button>
                        <nuxt-icon name="EnvelopSimple" filled />
                        Новая рассылка
                    </green-button>
                </li>
                <li class="nav__item" v-for="route in routes" :key="route.title">
                    <side-item :route="route">
                        <nuxt-icon :name="route.icon" filled />
                        {{ route.title }}
                    </side-item>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import greenButton from './UI/Buttons/Button/greenButton.vue';
import sideItem from './UI/Buttons/Button/sideItem.vue';

const routes = [
    {
        path:'/',
        title: 'Главная',
        icon: 'HouseLine' 
    },
    {
        path:'/clients',
        title: 'Клиенты',
        icon: 'Users' 
    },
    {
        path:'/layouts',
        title: 'Шаблоны рассылок',
        icon: 'Star' 
    },
    {
        path:'/history',
        title: 'История рассылок',
        icon: 'Clock' 
    },
    {
        path:'/sms',
        title: 'Детилизация SMS',
        icon: 'EnvelopeOpen' 
    },
    {
        path:'/charts',
        title: 'Графические отчеты',
        icon: 'ChartPieSlice' 
    },
    {
        path:'/branches',
        title: 'Филлиалы',
        icon: 'TreeStructure' 
    },
    {
        path:'/accounts',
        title: 'Акты и счета',
        icon: 'FileText' 
    },
    {
        path:'/partner',
        title: 'Партнерская программа',
        icon: 'Crown' 
    },
    {
        path:'/company',
        title: 'Компания',
        icon: 'Buildings' 
    },
    {
        path:'/auth',
        title: 'Выйти',
        icon: 'Power' 
    },
]

</script>

<style lang="scss" scoped>
.logo {
    & img {
        width: 12rem; // 192px 
    }
}

.profile {
    margin: 2rem 0; // 32px 
    border-top: 1px solid $back;
    padding-top: 2rem; // 32px 
    display: flex;
}

.profile-img {
    width: 3rem; // 48px
}

.profile-info {
    padding-left: 1rem;
    white-space: nowrap;

    &__title {
        font-weight: $fw-bold;
    }

    &__name {}

    &__balance {
        font-size: $font-sm;
        padding-top: 0.25rem;
    }
}

.nav {
    &__list{
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }
    &__item {

    }
}
</style>