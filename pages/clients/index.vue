<template>
  <WithAsideLayout>

    <template #default>
      <card class="mailing-card">
        <template #header>
          <h1>Клиенты</h1>
        </template>
        <template #main>
          123
        </template>
      </card>
    </template>

    <template #aside>
      <card>
        <template #header>
          <h1>Группы</h1>
          <div>
            123
          </div>
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

</script>

<style lang="scss" scoped>
.layout-list__button {
  @include flexBetween;
  width: 100%;
  height: 40px;
  color: $secondary-black;
}
</style>