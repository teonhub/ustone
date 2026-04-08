<script setup lang="ts">

    defineProps<{
        url: string,
        name: string,
        context: string,
        custom?: string
    }>();
    
</script>

<template>
    <NuxtLink :to="url">
        <div :class="['group', custom]">
            <div class="group-heading">{{ name }}</div>
            <div class="group-items">{{ context }}</div>
        </div>
    </NuxtLink>
</template>