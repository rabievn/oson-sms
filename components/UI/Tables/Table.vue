<template>
  <table class="table">
    <thead class="table__mainHead">
    <tr class="table__headRow">
      <th v-show="isCheckboxExist" class="table__headCell">
        <Checkbox/>
      </th>
      <th class="table__headCell" v-for="header in headers" :key="header.id">{{ header }}</th>
    </tr>
    </thead>
    <tbody class="table__body">
    <tr class="table__bodyRow" v-for="(item, index) in items" :key="index">
      <td v-show="isCheckboxExist" class="table__headCell">
        <Checkbox/>
      </td>
      <td class="table__bodyData" v-for="(value, key) in item" :key="key">
        <Switch class="table__bodySwitcher" v-if="typeof value === 'boolean'" v-model="item[key]"/>
        <span class="table__bodyValue" v-else>{{ value }}</span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import Switch from "~/components/UI/Switches/Switch.vue";
import Checkbox from "~/components/UI/Checkboxes/Checkbox.vue";

defineProps({
  headers: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  isCheckboxExist: {
    type: Boolean,
    required: false
  },
})


</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  text-align: left;
  vertical-align: center;

  &__mainHead {
  }

  &__headRow {
  }

  &__headCell {
    padding-block: 0.75rem;
    font-weight: $fw-bold;
  }

  &__body {

  }

  &__bodyRow {

  }

  &__bodyData {
    padding-block: 0.75rem;
    color: $secondary-black;
    max-width: 24.3125rem;

    vertical-align: center;
  }
}

</style>