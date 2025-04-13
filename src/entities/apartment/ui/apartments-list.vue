<template>
  <div class="apartments-list">
    <pv-card
      v-for="apt in props.apartments"
      :key="apt.id"
      overflow="hidden"
      class="apartments-list__card"
    >
      <template #header>
        <img
          :src="apt.image || '/images/empty-photo.png'"
          alt="Фото квартиры"
          class="apartments-list__image"
          :style="{ opacity: apt.image ? '1' : '0.7' }"
        />
      </template>
      <template #title>{{ apt.address }}</template>
      <template #content>
        <p>Площадь: {{ apt.area }} м²</p>
        <p>Комнат: {{ apt.rooms }}</p>
      </template>
      <template #footer>
        <router-link :to="`/apartment/${apt.id}`"><pv-button label="Подробнее" /></router-link>
      </template>
    </pv-card>
    <div v-if="!apartments.length" class="apartments-list__empty">Нет данных...</div>
  </div>
</template>

<script setup lang="ts">
import PvCard from 'primevue/card'
import PvButton from 'primevue/button'
import type { Apartment } from '#shared/config/apartments.ts'

const props = defineProps<{
  apartments: Apartment[]
}>()
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.apartments-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: $spacing-unit * 2;

  a {
    text-decoration: none;
  }

  &__card {
    transition:
      box-shadow 0.3s,
      transform 0.3s;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  }

  &__image {
    max-width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
    object-fit: fill;
    object-position: center;
  }

  &__empty {
    grid-column: 1 / -1;
    text-align: center;
    opacity: 0.7;
    color: $text-secondary;
  }
}
</style>
