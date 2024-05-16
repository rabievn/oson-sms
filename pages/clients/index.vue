<template>
  <WithAsideLayout>

    <template #default>
      <card class="mailing-card">
        <template #header>
          <h1>Клиенты</h1>
          <div class="mailing-card__header-buttons">
            <action-button class="iconText">
              <nuxt-icon name="clients/FileArrowDown"/>
              Импорт из Excel
            </action-button>
            <action-button class="iconText">
              <nuxt-icon name="clients/FileArrowDown"/>
              Скачать шаблон Excel
            </action-button>
            <action-button>
              <nuxt-icon name="clients/UserPlus"/>
            </action-button>
            <action-button class="greyBackground">
              <nuxt-icon name="clients/Trash"/>
            </action-button>
            <action-button class="greyBackground">
              <nuxt-icon name="clients/UsersThree"/>
            </action-button>
          </div>
        </template>
        <template #main>
          <div>
            <search v-model="searchValue" placeholder="имя, номер телефона"/>
          </div>
        </template>
      </card>
    </template>

    <template #aside>
      <card>
        <template #header>
          <h1>Группы</h1>
          <action-button class="iconText">
            <nuxt-icon class="aside__actionButton-icon" name="clients/PlusCircle"/>
            Создать группу
          </action-button>
        </template>
        <template #main>
          <ul>
            <li>
              <button class="layout-list__button">
                <span>  Мужчины (500) </span>
                <nuxt-icon name="reused/CaretRight"/>
              </button>
            </li>
            <li>
              <button class="layout-list__button">
                <span>  Женщины (400) </span>
                <nuxt-icon name="reused/CaretRight"/>
              </button>
            </li>
            <li>
              <button class="layout-list__button">
                <span> 18-25 лет (700) </span>
                <nuxt-icon name="reused/CaretRight"/>
              </button>
            </li>
            <li>
              <button class="layout-list__button">
                <span>  25-40 лет (951) </span>
                <nuxt-icon name="reused/CaretRight"/>
              </button>
            </li>
          </ul>
        </template>
      </card>
    </template>

  </WithAsideLayout>
</template>

<script setup>
import WithAsideLayout from "~/layouts/withAsideLayout.vue";
import ActionButton from "~/components/UI/Buttons/actionButton.vue";
import Search from "~/components/UI/Searches/search.vue";

const searchValue = ref("")

</script>

<style lang="scss" scoped>
.mailing-card {
  &__header-buttons {
    display: flex;
    gap: 8px;
  }
}
.layout-list__button {
  @include flexBetween;
  width: 100%;
  height: 2.5rem;
  color: $secondary-black;
}

</style>