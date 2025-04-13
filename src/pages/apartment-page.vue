<template>
  <div class="apartment-page">
    <div class="apartment-page__details" v-if="apartment">
      <h2 class="apartment-page__title">{{ apartment.address }}</h2>
      <img :src="apartment.image" alt="Фото квартиры" class="apartment-page__image" />
      <p class="apartment-page__info">Площадь: {{ apartment.area }} м²</p>
      <p class="apartment-page__info">Комнат: {{ apartment.rooms }}</p>
      <router-link to="/" class="apartment-page__back-link">
        <pv-button
          label="Назад"
          variant="text"
          icon="pi pi-arrow-left"
          icon-pos="left"
          size="small"
        />
      </router-link>
    </div>

    <div v-else-if="apartment === null && error === ''" class="apartment-page__loading">
      <p>Загрузка...</p>
    </div>

    <div v-else class="apartment-page__error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PvButton from 'primevue/button'
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
@use '#app/styles/mixins' as *;

.apartment-page {
  padding: $spacing-unit * 2;
  display: flex;
  justify-content: center;

  &__details {
    max-width: 800px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    padding: $spacing-unit * 2;
    color: $text-primary;
  }

  &__title {
    margin-bottom: $spacing-unit;
    font-size: 1.4rem;
    font-weight: 600;
    color: $color-secondary;
  }

  &__image {
    max-width: 100%;
    height: auto;
    margin: $spacing-unit 0;
    border-radius: 8px;
    object-fit: cover;
  }

  &__info {
    margin-bottom: $spacing-unit;
    color: $text-secondary;
  }

  &__back-link {
    display: inline-block;
    margin-top: $spacing-unit;
    color: $color-primary;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: darken($color-primary, 10%);
    }
  }

  &__loading,
  &__error {
    @include center-flex;
    flex-direction: column;
    max-width: 800px;
    min-height: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    padding: $spacing-unit * 2;
    text-align: center;
    color: $text-secondary;
  }
}
</style>
