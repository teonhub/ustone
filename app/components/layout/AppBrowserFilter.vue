<script setup lang="ts">

    import type { FilterConfig, FilterOption } from '~/types/product'

    const props = defineProps<{
        config: FilterConfig[]
        options: Record<string, FilterOption[]>
        activeFilters: Record<string, string>
        hasActiveFilters: boolean
    }>()

    const emit = defineEmits<{
        setFilter: [key: string, slug: string | null]
        resetAll: []
    }>()

    const isActive = (key: string, slug: string | null) => {
        return slug ? props.activeFilters[key] === slug : !props.activeFilters[key]
    }

</script>

<template>
    <div class="filters-container">
        <div v-for="group in config" :key="group.queryKey" class="filter-group">
            <h4>{{ group.label }}:</h4>
                <div class="buttons">
                    <button :class="{ active: isActive(group.queryKey, null) }" @click="emit('setFilter', group.queryKey, null)">
                        <span>Все</span>
                    </button>
                    <button v-for="item in options[group.queryKey]" :key="item.slug" :class="{ active: isActive(group.queryKey, item.slug) }" @click="emit('setFilter', group.queryKey, item.slug)">
                        <span>{{ item.name }}</span>
                    </button>
                </div>
            </div>

        <button v-if="hasActiveFilters" class="reset-btn" @click="emit('resetAll')">
            <span>Сбросить все фильтры</span>
        </button>
    </div>
</template>