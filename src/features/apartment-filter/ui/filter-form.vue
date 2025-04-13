<template>
  <form class="filter-form" @submit.prevent="applyFilter">
    <pv-input-text
      v-model="reactiveFilterState.address"
      placeholder="Адрес..."
      class="filter-form__input"
      :disabled="loading"
    />
    <pv-input-number
      v-model="reactiveFilterState.minArea"
      :min="0"
      placeholder="Мин. площадь"
      class="filter-form__input"
      :disabled="loading"
    />
    <pv-input-number
      v-model="reactiveFilterState.maxArea"
      :min="0"
      placeholder="Макс. площадь"
      class="filter-form__input"
      :disabled="loading"
    />
    <pv-input-number
      v-model="reactiveFilterState.minRooms"
      :min="0"
      placeholder="Мин. комнат"
      class="filter-form__input"
      :disabled="loading"
    />
    <pv-input-number
      v-model="reactiveFilterState.maxRooms"
      :min="0"
      placeholder="Макс. комнат"
      class="filter-form__input"
      :disabled="loading"
    />

    <pv-button
      label="Применить"
      class="filter-form__button"
      type="submit"
      :loading="props.loading"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import PvInputText from 'primevue/inputtext'
import PvInputNumber from 'primevue/inputnumber'
import PvButton from 'primevue/button'
import type { BaseFilterQuery } from '#shared/config/apartments.ts'

const props = defineProps<{
  filterState: BaseFilterQuery
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'applyFilter', v: BaseFilterQuery): void
}>()

const reactiveFilterState = reactive<BaseFilterQuery>({
  address: props.filterState.address,
  minArea: props.filterState.minArea,
  maxArea: props.filterState.maxArea,
  minRooms: props.filterState.minRooms,
  maxRooms: props.filterState.maxRooms,
})

function applyFilter() {
  emit('applyFilter', reactiveFilterState)
}
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.filter-form {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-unit;

  &__input {
    width: 180px;
  }

  &__button {
    // Можно задать стили для кнопки
  }
}
</style>
