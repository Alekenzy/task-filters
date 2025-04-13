<template>
  <div class="apartment-list">
    <div v-for="apt in props.apartments" :key="apt.id" class="apartment-list__card">
      <pv-card>
        <template #header>
          <img
            :src="apt.image || '/images/empty-photo.png'"
            alt="Фото квартиры"
            class="apartment-list__image"
            :style="{ opacity: apt.image ? '1' : '0.7' }"
          />
        </template>
        <template #title>{{ apt.address }}</template>
        <template #content>
          <p>Площадь: {{ apt.area }} м²</p>
          <p>Комнат: {{ apt.rooms }}</p>
          <router-link :to="`/apartment/${apt.id}`">Подробнее</router-link>
        </template>
      </pv-card>
    </div>
    <div v-if="!apartments.length">Нет данных...</div>
  </div>
</template>

<script setup lang="ts">
import PvCard from 'primevue/card'
import type { Apartment } from '#shared/config/apartments.ts'

const props = defineProps<{
  apartments: Apartment[]
}>()
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.apartment-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: $spacing-unit * 2;

  &__card {
    /* Можно доп. стили */
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
}
</style>
