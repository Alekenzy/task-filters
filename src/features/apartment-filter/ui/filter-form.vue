<template>
  <form class="filter-form" @submit.prevent="applyFilter" autocomplete="off">
    <float-label variant="on" class="filter-form__field">
      <pv-input-text inputId="address" v-model="reactiveFilterState.address" :disabled="loading" />
      <label for="address">Адрес...</label>
    </float-label>
    <float-label variant="on" class="filter-form__field">
      <pv-input-number
        inputId="minArea"
        v-model="reactiveFilterState.minArea"
        :min="0"
        :disabled="loading"
      />
      <label for="minArea">Мин. площадь</label>
    </float-label>
    <float-label variant="on" class="filter-form__field">
      <pv-input-number
        inputId="minArea"
        v-model="reactiveFilterState.maxArea"
        :min="0"
        :disabled="loading"
      />
      <label for="minArea">Макс. площадь</label>
    </float-label>
    <float-label variant="on" class="filter-form__field">
      <pv-input-number
        inputId="minRooms"
        v-model="reactiveFilterState.minRooms"
        :min="0"
        :disabled="loading"
      />
      <label for="minRooms">Мин. комнат</label>
    </float-label>
    <float-label variant="on" class="filter-form__field">
      <pv-input-number
        inputId="maxRooms"
        v-model="reactiveFilterState.maxRooms"
        :min="0"
        :disabled="loading"
      />
      <label for="maxRooms">Макс. комнат</label>
    </float-label>

    <pv-button
      label="Применить"
      class="filter-form__button"
      icon="pi pi-search"
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
import FloatLabel from 'primevue/floatlabel'
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
  gap: $spacing-unit * 2;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: $spacing-unit * 2;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

  &__field {
    flex: 1 1 180px;
    min-width: 140px;

    :deep() {
      .p-inputtext,
      .p-inputnumber {
        width: 100%;
        border-radius: 4px;
        color: $text-primary;
        background-color: #fff;
        padding-right: 0;
      }
    }
  }
}
</style>
