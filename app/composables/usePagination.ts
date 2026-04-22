export function usePagination<T>(items: Ref<T[]>, itemsPerPage: number = 24) {

    const route = useRoute()
    const visibleCount = ref(itemsPerPage)

    watch(
        () => route.query,
        () => { visibleCount.value = itemsPerPage },
        { deep: true }
    )

    const paginatedItems = computed(() => 
        items.value.slice(0, visibleCount.value)
    )
    
    const totalItems = computed(() => items.value.length)
    const hasMore = computed(() => visibleCount.value < totalItems.value)
    
    const remainingCount = computed(() => {
        const diff = totalItems.value - visibleCount.value
        return Math.min(diff, itemsPerPage)
    })

    const loadMore = () => {
        visibleCount.value += itemsPerPage
    }
    
    const reset = () => {
        visibleCount.value = itemsPerPage
    }

    return {
        paginatedItems,
        totalItems,
        hasMore,
        remainingCount,
        loadMore,
        reset,
        visibleCount
    }
}