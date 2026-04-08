<script setup lang="ts">

    defineProps<{
        url: string,
        image: string,
        name: string
    }>();
    
</script>

<template>
    <div>
        <NuxtLink :to="url">
            <span><img :src="`/files/image/category/${image}`" :alt="name" /></span>
            <span>{{ name }}</span>
        </NuxtLink>
    </div>
</template>