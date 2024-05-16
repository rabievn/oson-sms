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
            <action-button @click="$router.push('/clients/new-client')">
              <nuxt-icon name="clients/UserPlus"/>
            </action-button>
            <action-button disabled>
              <nuxt-icon name="clients/Trash"/>
            </action-button>
            <action-button disabled>
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
      <ClientGroupsBage/>
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


</style>