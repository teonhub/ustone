<script setup>

    const route = useRoute()
    const router = useRouter()

    const breadcrumbs = computed(() => {
    const fullPath = route.path
    const segments = fullPath.split('/').filter(segment => segment)
  
    // Стартовая крошка
    const crumbs = [{ label: 'Главная', to: '/' }]

    let currentPath = ''

    segments.forEach((segment, index) => {

        currentPath += `/${segment}`
    
        // Получаем информацию о маршруте
        const resolved = router.resolve(currentPath)

        // ЛОГИКА ПРИОРИТЕТОВ:
        // 1. Смотрим meta.breadcrumb (наше кастомное поле)
        // 2. Если нет, смотрим meta.title
        // 3. Если нет, просто берем кусок URL (segment)
        let label = resolved.meta.breadcrumb || resolved.meta.title || segment

        // Проверка для текущей страницы (если мы динамически меняли meta в script setup)
        if (index === segments.length - 1) {
        // Если в текущем route.meta переопределили breadcrumb динамически
            label = route.meta.breadcrumb || label
        }

        crumbs.push({
            label: label,
            to: currentPath,
            disabled: index === segments.length - 1
        })
    })
    return crumbs
})

</script>

<template>
    <div class="bread-crumbs" aria-label="Хлебные крошки">
        <ol class="breadcrumb">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
                <NuxtLink v-if="!crumb.disabled" :to="crumb.to">{{ crumb.label }}</NuxtLink>
                <span v-else class="active">{{ crumb.label }}</span>
            </li>
        </ol>
    </div>
</template>
