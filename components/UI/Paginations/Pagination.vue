<template>
  <div class="pagination">
    <ul>
      <li :class="`btn prev ${page === 1 && 'firstPage' }`" @click="createPagination(page - 1)">
        <nuxt-icon filled name="reused/CaretRight"/>
      </li>
      <li v-if="page > 2" class="first numb" @click="createPagination(1)">
        <span>1</span>
      </li>
      <li v-if="page > 3" class="dots"><span>...</span></li>
      <li v-for="plength in paginationRange" :key="plength" :class="['numb', { active: page === plength }]"
          @click="createPagination(plength)">
        <span>{{ plength }}</span>
      </li>
      <li v-if="page < totalPages - 2" class="dots"><span>...</span></li>
      <li v-if="page < totalPages - 1" class="last numb" @click="createPagination(totalPages)">
        <span>{{ totalPages }}</span>
      </li>
      <li :class="`btn next ${page >= totalPages && 'lastPage' }`" @click="createPagination(page + 1)">
        <nuxt-icon filled name="reused/CaretRight"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  commonPages: {
    type: Number,
    required: true
  }
});

const totalPages = props.commonPages;
const page = ref(1);

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
  if (newPage < 1) {
    return;
  }
  if (newPage > totalPages) {
    return;
  }
  page.value = newPage;
}

</script>


<style lang="scss">
.pagination ul li.btn.prev .nuxt-icon svg {
  rotate: 180deg;
}

.pagination ul li.btn .nuxt-icon svg path {
  stroke: $main-dark;
}

.pagination ul li.btn.lastPage .nuxt-icon svg path {
  stroke: $dark-grey;
}

.pagination ul li.btn.firstPage .nuxt-icon svg path {
  stroke: $dark-grey;
}
</style>

<style lang="scss" scoped>
.pagination {
  ul {
    @include flexCenter;
    width: 100%;
    flex-wrap: wrap;

    li {
      color: $dark-grey;
      list-style: none;
      text-align: center;
      font-size: 0.875rem;
      font-weight: $fw-regular;
      cursor: pointer;
      user-select: none;
      transition: all 0.3s ease;

      &.numb {
        list-style: none;
        margin-inline: 1rem;
        border-radius: 50%;
      }

      &.dots {
        font-size: 1.375rem;
        cursor: default;
      }

      &.btn {
        @include flexCenter;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        background: $back;
      }

      &.active,
      &:hover,
      &:first-child:hover,
      &:last-child:hover {
        color: $main-dark;
      }
    }
  }
}
</style>

