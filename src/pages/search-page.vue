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

    <div :style="`${loading ? 'opacity: 0.6; pointer-events: none;' : ''}`">
      <pv-paginator
        :rows="pagination.size"
        :rows-per-page-options="[6, 12, 48, 100]"
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
  size: 6,
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
  max-width: 1200px;
  margin: 0 auto;
  padding: $spacing-unit * 2;
  display: flex;
  flex-direction: column;
  gap: $spacing-unit * 2;
  color: $text-primary;

  &__title {
    margin-bottom: $spacing-unit;
    font-size: 2rem;
    font-weight: 600;
    color: $text-primary;
  }

  &__filters {
    align-self: stretch;
  }

  &__results {
    align-self: stretch;
  }

  &__paginator {
    margin-top: $spacing-unit * 2;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: $spacing-unit;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

    .p-paginator .p-paginator-pages .p-paginator-page {
      border-radius: 4px;
      border: none;
      color: $text-primary;
    }
    .p-paginator .p-paginator-icon {
      color: $text-secondary;
    }
    .p-dropdown {
      border-radius: 4px;
    }
  }
}
</style>
