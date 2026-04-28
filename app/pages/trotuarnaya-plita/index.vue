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