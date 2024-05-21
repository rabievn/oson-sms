<template>
  <div class="pagination">
    <ul>
      <li class="btn prev" @click="createPagination(page - 1)">
        <span> Prev</span>
      </li>
      <li v-if="page > 2" class="first numb" @click="createPagination(1)">
        <span>1</span>
      </li>
      <li v-if="page > 3" class="dots"><span>...</span></li>
      <li v-for="plength in paginationRange" :key="plength" :class="['numb', { active: page === plength }]" @click="createPagination(plength)">
        <span>{{ plength }}</span>
      </li>
      <li v-if="page < totalPages - 2" class="dots"><span>...</span></li>
      <li v-if="page < totalPages - 1" class="last numb" @click="createPagination(totalPages)">
        <span>{{ totalPages }}</span>
      </li>
      <li class="btn next" @click="createPagination(page + 1)">
        <span>Next </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const totalPages = 20;
const page = ref(10);

const paginationRange = computed(() => {
  let range = [];
  let beforePage = page.value - 1;
  let afterPage = page.value + 1;

  if (page.value === totalPages) {
    beforePage -= 2;
  } else if (page.value === totalPages - 1) {
    beforePage -= 1;
  }

  if (page.value === 1) {
    afterPage += 2;
  } else if (page.value === 2) {
    afterPage += 1;
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > 0 && plength <= totalPages) {
      range.push(plength);
    }
  }
  return range;
});

function createPagination(newPage) {
  page.value = newPage;
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pagination ul li {
  color: $dark-grey;
  list-style: none;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.pagination ul li.numb {
  list-style: none;
  height: 45px;
  width: 45px;
  margin: 0 3px;
  line-height: 45px;
  border-radius: 50%;
}

.pagination ul li.numb.first {
  margin: 0px 3px 0 -5px;
}

.pagination ul li.numb.last {
  margin: 0px -5px 0 3px;
}

.pagination ul li.dots {
  font-size: 22px;
  cursor: default;
}

.pagination ul li.btn {
  padding: 0 20px;
  border-radius: 50px;
}

.pagination li.active,
.pagination ul li.numb:hover,
.pagination ul li:first-child:hover,
.pagination ul li:last-child:hover {
  color: $main-dark;
}
</style>
