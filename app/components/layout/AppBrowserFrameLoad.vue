<script setup lang="ts">

    defineProps<{
        hasMore: boolean
        remainingCount: number
    }>()
    
    defineEmits<{
        loadMore: []
    }>()

</script>

<template>
    <div v-if="hasMore" class="pagination-container">
        <button class="show-more-btn" @click="$emit('loadMore')">
            <span>Показать ещё {{ remainingCount }}</span>
        </button>
    </div>
</template>