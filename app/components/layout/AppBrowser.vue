<script setup lang="ts">

    import type { Product, FilterConfig } from '~/types/product'

    const props = defineProps<{
        items: Product[]
    }>()

    const FILTER_CONFIG: FilterConfig[] = [
        { label: 'Коллекции', queryKey: 'series', storeKey: 'series' },
        { label: 'Цвета', queryKey: 'color', storeKey: 'base_color' },
        { label: 'Высота', queryKey: 'height', storeKey: 'height' },
        { label: 'Поверхность', queryKey: 'surface', storeKey: 'surface' }
    ]

    const itemsRef = computed(() => props.items)

    const { 
        filterOptions, 
        activeFilters, 
        filteredItems, 
        hasActiveFilters, 
        setFilter, 
        resetAll, 
        isFilterActive 
    } = useProductFilter(itemsRef, FILTER_CONFIG)

    const { 
        paginatedItems, 
        hasMore, 
        remainingCount, 
        loadMore 
    } = usePagination(filteredItems, 24)

</script>

<template>
    <main>
        <section class="season-commodity">
            <div class="container-large">
                <InterfaceBreadcrumbs />
                <InterfaceHeading title="Тротуарная плитка" />
                <InterfaceFetchFilter :config="FILTER_CONFIG"
                    :options="filterOptions"
                    :active-filters="activeFilters"
                    :has-active-filters="hasActiveFilters"
                    @set-filter="setFilter" @reset-all="resetAll"
                />
                <div class="grid-season" v-if="paginatedItems.length">
                    <LayoutAppFramePreview v-for="stone in paginatedItems"
                        :key="stone.id"
                        :frame_url="`/trotuarnaya-plita/${stone.slug}`"
                        :frame_img="stone.picture"
                        :frame_name="stone.name"
                        :frame_rate="stone.price"
                        :frame_bran="stone.manufacturer"
                    />
                </div>
                <div v-else class="empty-msg">
                    Товары отсутствуют
                </div>
                <InterfaceFetchPagination v-if="hasMore"
                    :has-more="hasMore"
                    :remaining-count="remainingCount"
                    @load-more="loadMore"
                />
            </div>
        </section>
    </main>
</template>