<template>
  <div class="apartment-page">
    <div class="apartment-page__details" v-if="apartment">
      <h2 class="apartment-page__title">{{ apartment.address }}</h2>
      <img :src="apartment.image" alt="Фото квартиры" class="apartment-page__image" />
      <p class="apartment-page__info">Площадь: {{ apartment.area }} м²</p>
      <p class="apartment-page__info">Комнат: {{ apartment.rooms }}</p>
      <router-link to="/" class="apartment-page__back-link"> ← Вернуться к поиску</router-link>
    </div>

    <div v-else-if="apartment === null && error === ''" class="apartment-page__loading">
      <p>Загрузка...</p>
    </div>
    <div v-else class="apartment-page__loading">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getApartmentById } from '#shared/api/apartments.ts'
import type { Apartment } from '#shared/config/apartments.ts'

const route = useRoute()
const apartmentId = computed(() => Number(route.params.id))

const apartment = ref<Apartment | null>(null)
const error = ref('')

async function getApartment() {
  try {
    apartment.value = await getApartmentById(apartmentId.value)
  } catch (err) {
    const e = err as Error
    error.value = e.message || 'Неизвестная ошибка'
  }
}

onMounted(getApartment)
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.apartment-page {
  &__details {
    padding: $spacing-unit * 2;
  }

  &__title {
    margin-bottom: $spacing-unit;
  }

  &__image {
    max-width: 100%;
    height: auto;
    margin: $spacing-unit 0;
    border-radius: 4px;
  }

  &__info {
    margin-bottom: $spacing-unit;
  }

  &__back-link {
    display: inline-block;
    margin-top: $spacing-unit;
  }

  &__loading {
    padding: $spacing-unit * 2;
  }
}
</style>
