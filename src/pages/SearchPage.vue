<template>
  <div class="search-page">
    <h1>Поиск квартир</h1>
    <!-- Блок фильтров -->
    <div class="filters">
      <InputText v-model="searchQuery" placeholder="Адрес..." />
      <InputNumber v-model="areaMin" :min="0" placeholder="Мин. площадь" />
      <InputNumber v-model="areaMax" :min="0" placeholder="Макс. площадь" />
      <InputNumber v-model="roomsMin" :min="0" placeholder="Мин. комнат" />
      <InputNumber v-model="roomsMax" :min="0" placeholder="Макс. комнат" />
    </div>

    <!-- Список отфильтрованных квартир -->
    <div class="results">
      <div v-for="apt in displayedApartments" :key="apt.id" class="apartment-card">
        <Card>
          <template #header>
            <img :src="apt.image" alt="Фото квартиры" style="width: 100%; height: auto" />
          </template>
          <template #title>{{ apt.address }}</template>
          <template #content>
            <p>Площадь: {{ apt.area }} м²</p>
            <p>Комнат: {{ apt.rooms }}</p>
            <RouterLink :to="`/apartment/${apt.id}`">Подробнее</RouterLink>
          </template>
        </Card>
      </div>
    </div>

    <!-- Пагинация -->
    <Paginator
      :rows="rowsPerPage"
      :first="(currentPage - 1) * rowsPerPage"
      :totalRecords="filteredApartments.length"
      @page="onPageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'

// Reactive state for filters
const searchQuery = ref('')
const areaMin = ref<number | null>(null)
const areaMax = ref<number | null>(null)
const roomsMin = ref<number | null>(null)
const roomsMax = ref<number | null>(null)

const { data: apartments, isFetching, error } = useFetch('/apartments.json').json()

// Pagination state
const currentPage = ref(1)
const rowsPerPage = 10

// Compute filtered apartments based on filters
const filteredApartments = computed(() => {
  const list = apartments.value || []
  return list.filter((apt: any) => {
    const matchesAddress = apt.address.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesArea =
      (!areaMin.value || apt.area >= areaMin.value) && (!areaMax.value || apt.area <= areaMax.value)
    const matchesRooms =
      (!roomsMin.value || apt.rooms >= roomsMin.value) &&
      (!roomsMax.value || apt.rooms <= roomsMax.value)
    return matchesAddress && matchesArea && matchesRooms
  })
})

// Compute apartments to display on the current page
const displayedApartments = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  const end = start + rowsPerPage
  return filteredApartments.value.slice(start, end)
})

// Handle page change events from Paginator
function onPageChange(event: any) {
  // PrimeVue Paginator emits event with 0-based page index
  if (event.page !== undefined) {
    currentPage.value = event.page + 1
  }
}
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.search-page {
  padding: $spacing-unit * 2;
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-unit;
    margin-bottom: $spacing-unit * 2;
    .p-inputtext,
    .p-inputnumber {
      width: 180px;
    }
  }
  .results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: $spacing-unit * 2;
    .apartment-card {
      /* Карточка квартиры: стили можно дополнять при необходимости */
    }
  }
}
</style>
