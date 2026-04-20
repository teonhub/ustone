<script setup>

    import { computed } from 'vue'
    import { useProduceStore } from '~/stores/produce'
    import { useRoute, useRouter } from 'vue-router'

    const store = useProduceStore()
    const route = useRoute()
    const router = useRouter()

    // Получаем текущий слаг серии из URL
    const currentFilterSlug = computed(() => route.query.series)

    // Формируем список уникальных серий с их слагами для кнопок
    const uniqueSeries = computed(() => {
        const seriesMap = new Map()
        
        store.stones.forEach(stone => {
            const slug = slugify(stone.series) // используем нашу утилиту
                if (!seriesMap.has(slug)) {
                seriesMap.set(slug, stone.series)
            }
        })

        // Возвращаем массив объектов { slug, name }
        return Array.from(seriesMap).map(([slug, name]) => ({ slug, name }))
    })

    // Фильтруем товары на основе слага в URL
    const filteredStones = computed(() => {
        if (!currentFilterSlug.value) {
            return store.stones
        }
    
        return store.stones.filter(stone => slugify(stone.series) === currentFilterSlug.value)
    })

    // Функция для обновления URL при нажатии на кнопку
    const updateFilter = (slug) => {
        router.push({
            query: {
            ...route.query,
                series: slug || undefined
            }
        })
    }

    definePageMeta({
        breadcrumb: 'Тротуарная плитка'
    })

</script>

<template>
    <main>
        <section class="season-commodity">
            <div class="container-large">
                <div class="bread-crumbs" aria-label="Хлебные крошки">
                    <UiAppBreadcrumbs />
                    <h1>Тротуарная плитка</h1>
                </div>


                <div>
                    <!-- Кнопки фильтрации -->
                    <div class="filter-buttons">
                    <!-- Кнопка "Все" — удаляет параметр из URL -->
                    <button :class="{ active: !currentFilterSlug }" @click="updateFilter(null)">Все серии</button>

                    <!-- Кнопки уникальных серий -->
                    <button v-for="series in uniqueSeries" :key="series.slug" :class="{ active: currentFilterSlug === series.slug }" @click="updateFilter(series.slug)">
                        <span>{{ series.name }}</span>
                    </button>
                </div>
    
                <div class="grid-season">
                    <LayoutAppFramePreview v-for="stone in filteredStones" 
                        :key="stone.id"
                        :frame_url="`/trotuarnaya-plita/${stone.slug}`"
                        :frame_img="stone.picture"
                        :frame_name="stone.name"
                        :frame_rate="stone.price"
                        :frame_bran="stone.manufacturer"
                    />
                </div>
                <div v-if="filteredStones.length === 0">
                    <p>В этой категории пока нет товаров.</p>
                </div>
            </div>
        </div>
    </section>
</main>
</template>


<style scoped>
.filter-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: #f9f9f9;
  cursor: pointer;
  border-radius: 5px;
}
button.active {
  background: #000;
  color: #fff;
  border-color: #000;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>
