import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '~/types/product'

export const useProduceStore = defineStore('stones', () => {
    const stones = ref<Product[]>([])

        async function fetchStones() {
            if (stones.value.length > 0) {
                return stones.value
            }
            try {
                const data = await $fetch<Product[]>('/api/stones')
                stones.value = data
                return stones.value
            } catch (e) {
                console.error('Ошибка при загрузке данных:', e)
                return []
            }
        }

    const getBySlug = (slug: string) => stones.value.find(s => s.slug === slug)

    return { stones, fetchStones, getBySlug }
})