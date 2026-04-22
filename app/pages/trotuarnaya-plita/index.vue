<script setup>

    import { useProduceStore } from '~/stores/produce'
    const store = useProduceStore()

    useHead({
        title: 'Тротуарная плитка',
        meta: [{ name: 'description', content: '...' }]
    })

    definePageMeta({
        breadcrumb: 'Тротуарная плитка'
    })

</script>

<template>
    <LayoutAppBrowser :items="store.stones" />
</template>








<style>
/* Стили оставляем те же, что были в предыдущем ответе */
.filters-container { background: #f4f4f4; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
.filter-group { margin-bottom: 15px; }
.filter-group h4 { margin: 0 0 10px 0; font-size: 14px; color: #666; }

/* ломает избранное */
.buttons { display: flex; gap: 8px; flex-wrap: wrap; }
button { padding: 6px 12px; border: 1px solid #ccc; background: white; cursor: pointer; border-radius: 4px; font-size: 13px; }
button.active { background: #007bff; color: white; border-color: #0056b3; }

.reset-btn { margin-top: 10px; background: #ff4d4d; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
.product-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.pagination-container { display: flex; justify-content: center; margin: 40px 0; }
.show-more-btn { padding: 15px 40px; background-color: #28a745; color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: bold; }
.empty-msg { text-align: center; padding: 40px; color: #999; }
</style>
