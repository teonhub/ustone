<script setup>

    import { useProduceStore } from '~/stores/produce'
    const store = useProduceStore()
    
    await useAsyncData('stones', () => store.fetchStones())

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
.product-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.pagination-container { display: flex; justify-content: center; margin: 40px 0; }
.empty-msg { text-align: center; padding: 40px; color: #999; }
</style>
