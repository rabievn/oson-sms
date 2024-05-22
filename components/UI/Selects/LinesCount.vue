<template>
  <div class="lines-count">
    <Dropdown >
      <template #header>
        <button  class="dropdown-toggle">{{ selected }}</button>
      </template>
      <template #menu>
        <div
            class="dropdown-item"
            v-for="item in items"
            :key="item"
            @click="selectItem(item)"
        >
          Строк: {{ item }}
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
import Dropdown from '~/components/UI/DropDowns/Dropdown.vue';

const items = [20, 50, 80, 100];
const selected = ref('Строк: 20');

const selectItem = (item) => {
  selected.value = `Строк: ${item}`;
};
</script>

<style scoped lang="scss">
.lines-count {
  position: relative;
}

.dropdown-toggle {
  padding-inline: 1rem;
  padding-block: 0.660rem;
  font-size: 1rem; // 16px
  font-weight: 400; // normal
  border: 0.125rem solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
}

.dropdown-item {
  padding: 0.625rem; // 10px to rem
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
}
</style>
