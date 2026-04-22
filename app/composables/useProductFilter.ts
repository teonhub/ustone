import type { Product, FilterConfig, FilterOption } from '~/types/product'

export function useProductFilter(items: Ref<Product[]>, config: FilterConfig[]) {

    const route = useRoute()
    const router = useRouter()

    const filterOptions = computed(() => {
    const result: Record<string, FilterOption[]> = {}
    
    for (const group of config) {
        const seen = new Map<string, string>()
            for (const item of items.value) { const rawValue = item[group.storeKey]
                if (rawValue == null) continue
                
                const slug = slugify(String(rawValue))
                if (!seen.has(slug)) { seen.set(slug, String(rawValue)) }
            }

            result[group.queryKey] = Array.from(seen, ([slug, name]) => ({ slug, name }))
        }
        
        return result
    })

    const activeFilters = computed(() => {
        const filters: Record<string, string> = {}
        
        for (const { queryKey } of config) {
            const value = route.query[queryKey]
                if (value && typeof value === 'string') { filters[queryKey] = value }
            }
                
        return filters
    })

    const filteredItems = computed(() => {
        const filters = activeFilters.value
        
        if (Object.keys(filters).length === 0) return items.value
        
        return items.value.filter((item) => config.every((group) => {
            const filterValue = filters[group.queryKey]
            if (!filterValue) return true
        
            const itemValue = item[group.storeKey]
            return itemValue != null && slugify(String(itemValue)) === filterValue
        }))
    })

    const hasActiveFilters = computed(() => Object.keys(activeFilters.value).length > 0)

    const setFilter = (key: string, slug: string | null) => { const query = { ...route.query }
        if (slug) query[key] = slug
        else delete query[key]
        router.push({ query })
    }

    const resetAll = () => router.push({ query: {} })

    const isFilterActive = (key: string, slug: string | null) => {
        return slug ? activeFilters.value[key] === slug : !activeFilters.value[key]
    }

    return {
        filterOptions,
        activeFilters,
        filteredItems,
        hasActiveFilters,
        setFilter,
        resetAll,
        isFilterActive
    }
}