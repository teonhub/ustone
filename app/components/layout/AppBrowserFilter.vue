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

    const expandedGroups = ref<Set<string>>(new Set())

    const toggleGroup = (queryKey: string) => {
        const next = new Set(expandedGroups.value)
        next.has(queryKey) ? next.delete(queryKey) : next.add(queryKey)
        expandedGroups.value = next
    }

    const isExpanded = (queryKey: string) => expandedGroups.value.has(queryKey)

    watch(
        () => props.activeFilters,
        (filters) => {
            Object.entries(filters).forEach(([key]) => {
                if (key) expandedGroups.value.add(key)
            })
        },
        { immediate: true, deep: true }
    )

</script>

<template>
    <div class="layout-filters">
        <div v-for="group in config" :key="group.queryKey" class="filter-group" :class="{ 'is-expanded': isExpanded(group.queryKey) }">
            <button type="button" class="filter-toggle" :aria-expanded="isExpanded(group.queryKey)" :aria-controls="`filter-panel-${group.queryKey}`" @click="toggleGroup(group.queryKey)">
                <span class="filter-label">{{ group.label }}</span>
                <span class="filter-indicator" aria-hidden="true"><svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" /></svg></span>
            </button>
            <Transition name="filter-expand">
                <div v-show="isExpanded(group.queryKey)" :id="`filter-panel-${group.queryKey}`" class="filter-panel" role="region">
                    <div class="filter-btns">
                        <button type="button" :class="{ active: isActive(group.queryKey, null) }" @click="emit('setFilter', group.queryKey, null)">
                            <span>Все</span>
                        </button>
                        <button type="button" v-for="item in options[group.queryKey]" :key="item.slug" :class="{ active: isActive(group.queryKey, item.slug) }" @click="emit('setFilter', group.queryKey, item.slug)">
                            <span>{{ item.name }}</span>
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
        <button type="button" class="reset-btn" v-if="hasActiveFilters" @click="emit('resetAll')">
            <span>Сбросить все фильтры</span>
        </button>
    </div>
</template>

<style scoped>

.layout-filters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;
    margin-bottom: 25px;
    background-color: #f9f9f9;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 9px;
}

.filter-group {
    height: 46px;
    position: relative;
    border-radius: 4px;
    background: #f5f5f5;
    box-sizing: border-box;
    padding: 0 15px;
}

.filter-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    transition: color 0.2s;
}

.filter-toggle:hover {
    color: #f78224;
}

.filter-toggle:focus-visible {
    outline: 2px solid #f78224;
    outline-offset: 2px;
    border-radius: 4px;
}

.filter-label {
    display: flex;
    align-items: center;
    gap: 8px;
}

.filter-group:has(.filter-btns button.active:not(:first-child)) .filter-label::after {
    content: '';
    width: 6px;
    height: 6px;
    background: #f78224;
    border-radius: 50%;
    flex-shrink: 0;
}

.filter-indicator {
    display: flex;
    align-items: center;
    transition: transform 0.25s ease;
}

.chevron {
    width: 16px;
    height: 16px;
}

.filter-group.is-expanded .filter-indicator {
    transform: rotate(180deg);
}

.filter-panel {
    position: absolute;
    left: 0; top: 44px;
    z-index: 50;
    overflow-y: scroll;
    max-height: 300px;
    width: 100%;
    border-top: 0;
    background-color: #f5f5f5;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-sizing: border-box;
    padding: 15px;
    transition: all 0.2s ease-in-out 0s;
}

.filter-expand-enter-active,
.filter-expand-leave-active {
    transition: all 0.2s ease-in-out 0s;
    overflow: hidden;
}

.filter-expand-enter-from,
.filter-expand-leave-to {
    opacity: 0;
    max-height: 0;
    padding-bottom: 0;
}

.filter-expand-enter-to,
.filter-expand-leave-from {
    opacity: 1;
    max-height: 200px;
}

.filter-btns {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    max-width: 215px;
}

.filter-btns button {
    display: block;
    width: 100%;
    height: 40px;
    text-align: left;
    box-sizing: border-box;
    padding: 0 15px;
    background: white;
    cursor: pointer;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 400;
    color: #000;
    transition: all 0.15s;
}

.filter-btns button:hover {
    border-color: #f78224;
    color: #f78224;
}

.filter-btns button.active {
    background: #000;
    color: #fff;
    border-color: #000;
}

.reset-btn {
    width: 100%;
    height: 46px;
    background: #000;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    font-size: 13px;
    transition: all 0.2s;
}

.reset-btn:hover {
    color: #fff;
    background: #f78224;
}

</style>