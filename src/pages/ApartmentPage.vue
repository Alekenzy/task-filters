<template>
  <div class="apartment-details" v-if="apartment">
    <h2>{{ apartment.address }}</h2>
    <img :src="apartment.image" alt="Фото квартиры" style="max-width: 100%; height: auto" />
    <p>Площадь: {{ apartment.area }} м²</p>
    <p>Комнат: {{ apartment.rooms }}</p>
    <RouterLink to="/">← Вернуться к поиску</RouterLink>
  </div>
  <div v-else>
    <p>Загрузка...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core'

const route = useRoute()
const apartmentId = computed(() => Number(route.params.id))

// Загружаем список квартир (можно оптимизировать, используя кэш из SearchPage)
const { data: apartments } = useFetch('/apartments.json').json()

// Находим квартиру по ID
const apartment = computed(() => {
  return apartments.value?.find((apt: any) => apt.id === apartmentId.value)
})
</script>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.apartment-details {
  padding: $spacing-unit * 2;

  img {
    margin: $spacing-unit 0;
    border-radius: 4px;
  }
}
</style>
