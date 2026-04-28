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
            <span>Показать ещё {{ remainingCount }} товара</span>
        </button>
    </div>
</template>

<style scoped>

.pagination-container {
    display: flex;
    justify-content: center;
    margin: 40px 0;
}

.pagination-container .show-more-btn {
    width: 280px;
    height: 50px;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 400;
    border: 1px solid #e9e9e9;
    cursor: pointer;
}

</style>