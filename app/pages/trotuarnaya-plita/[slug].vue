<template>
  <div v-if="product" class="product-detail">
    <h1>{{ product.name }}</h1>
    
    <div class="full-info">
      <img :src="`/files/image/season/${product.picture}`" :alt="product.name">
      
      <div class="specs">
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Артикул (SKU):</strong> {{ product.sku }}</p>
        <p><strong>Тип:</strong> {{ product.type }}</p>
        <p><strong>Серия:</strong> {{ product.series }}</p>
        <p><strong>Базовый цвет:</strong> {{ product.base_color }}</p>
        <p><strong>Тип цвета:</strong> {{ product.type_color }}</p>
        <p><strong>Поверхность:</strong> {{ product.surface }}</p>
        <p><strong>Высота:</strong> {{ product.height }} мм</p>
        <p><strong>Размер:</strong> {{ product.size }}</p>
        <p><strong>Количество:</strong> {{ product.quantity }}</p>
        <p><strong>Производитель:</strong> {{ product.manufacturer }}</p>
        <p><strong>Цена:</strong> {{ product.price }} ₽</p>
        <p v-if="product.discounted !== '0'"><strong>Скидка:</strong> {{ product.discounted }}%</p>
      </div>
    </div>

    <NuxtLink to="/">Вернуться назад</NuxtLink>
  </div>
  <div v-else>
    <p>Товар не найден</p>
    <NuxtLink to="/">В каталог</NuxtLink>
  </div>
</template>

<script setup>
import { useProduceStore } from '~/stores/produce'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useProduceStore()

// Ищем конкретный товар по слагу из адреса
const product = computed(() => {
  return store.stones.find(s => s.slug === route.params.slug)
})

// Настройка SEO (заголовок страницы)
useHead({
  title: product.value ? product.value.name : 'Загрузка...'
})
</script>