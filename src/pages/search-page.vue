<template>
  <div class="search-page">
    <h1 class="search-page__title">Поиск квартир в Астане</h1>

    <filter-form
      :filter-state="filterState"
      @applyFilter="handleApplyFilter"
      class="search-page__filters"
      :loading="loading"
    />

    <apartments-list :apartments="apartments" class="search-page__results" />

    <div
      :style="`${loading ? 'opacity: 0.7; pointer-events: none; user-select: none' : 'opacity: 1; pointer-events: initial; user-select: initial'}`"
    >
      <pv-paginator
        class="search-page__paginator"
        :rows="pagination.size"
        :rows-per-page-options="[5, 10, 20, 50, 100]"
        :totalRecords="totalCount"
        @page="onPageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PvPaginator, { type PageState } from 'primevue/paginator'
import FilterForm from '#features/apartment-filter/ui/filter-form.vue'
import ApartmentsList from '#entities/apartment/ui/apartments-list.vue'
import { onMounted, ref } from 'vue'
import type {
  Apartment,
  BaseFilterQuery,
  BasePageQuery,
  GetApartmentsListParams,
} from '#shared/config/apartments.ts'
import { getApartmentsList } from '#shared/api/apartments.ts'

const apartments = ref<Apartment[]>([])
const loading = ref(false)
const error = ref('')
const pagination = ref<BasePageQuery>({
  page: 1,
  size: 10,
})
const filterState = ref<BaseFilterQuery>({})
const totalCount = ref(0)

async function getApartments() {
  loading.value = true
  const payload: GetApartmentsListParams = Object.assign({}, pagination.value, filterState.value)

  try {
    const response = await getApartmentsList(payload)
    apartments.value = response.data
    totalCount.value = response.totalCount
    pagination.value.page = response.page
    pagination.value.size = response.size
  } catch (err) {
    const e = err as Error
    error.value = e.message || 'Неизвестная ошибка'
  } finally {
    loading.value = false
  }
}

function handleApplyFilter(newFilterState: BaseFilterQuery) {
  filterState.value = newFilterState
  return getApartments()
}

function onPageChange(pageState: PageState) {
  pagination.value.page = pageState.page + 1
  pagination.value.size = pageState.rows
  return getApartments()
}

onMounted(getApartments)
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.search-page {
  padding: $spacing-unit * 2;

  &__title {
    margin-bottom: $spacing-unit * 2;
  }

  &__filters {
    margin-bottom: $spacing-unit * 2;
  }

  &__results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: $spacing-unit * 2;

    /* Твои стили apartment-card => можно убрать, ведь вынесли в ApartmentsList */
  }

  &__paginator {
    margin-top: $spacing-unit * 2;
  }
}
</style>
