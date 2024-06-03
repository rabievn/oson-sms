<template>
  <div class="lines-count">
    <Dropdown>
      <template #button>
        <div>
          Строк: {{ selectedRowCount }}
        </div>
      </template>
      <template #header>
        <div>
          Количество строк
        </div>
      </template>
      <template #default>
          <div v-for="count in rowCounts" :key="count" @click="selectRowCount(count)">
            {{ count }} строк
          </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Dropdown from "~/components/UI/Dropdowns/Dropdown.vue"

const props = defineProps({
  header: {
    type: String,
    required: false
  },
  main: {
    type: Object,
    required: true
  }
})

const selectedRowCount = ref(20);
const rowCounts = [20, 50, 80, 100];

const selectRowCount = (count) => {
  selectedRowCount.value = count;
}
</script>

<style lang="scss" scoped>

</style>
