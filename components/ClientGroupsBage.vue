<template>
    <card>
        <template #header>
            <h1>Группы</h1>
            <action-button class="iconText" :goTo="'/clients/new-group'">
                <nuxt-icon filled class="aside__actionButton-icon" name="clients/PlusCircle" />
                Создать группу
            </action-button>
        </template>
        <template #main>
            <ul>
                <li>
                    <button class="layout-list__button">
                        <span> Мужчины (500) </span>
                        <nuxt-icon filled name="reused/CaretRight" />
                    </button>
                </li>
                <li>
                    <button class="layout-list__button">
                        <span> Женщины (400) </span>
                        <nuxt-icon filled name="reused/CaretRight" />
                    </button>
                </li>
                <li>
                    <button class="layout-list__button">
                        <span> 18-25 лет (700) </span>
                        <nuxt-icon filled name="reused/CaretRight" />
                    </button>
                </li>
                <li>
                    <button class="layout-list__button">
                        <span> 25-40 лет (951) </span>
                        <nuxt-icon filled name="reused/CaretRight" />
                    </button>
                </li>
            </ul>
        </template>
    </card>
</template>

<script setup>
import ActionButton from "~/components/UI/Buttons/actionButton.vue";

</script>

<style lang="scss" scoped>
.layout-list__button {
  @include flexBetween;
  width: 100%;
  height: 2.5rem;
  color: $secondary-black;
  background: transparent;
}
</style>