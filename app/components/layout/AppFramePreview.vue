<script setup lang="ts">

    defineProps<{
        url: string,
        image: string,
        name: string,
        price: string,
        group: string,
        status: string
    }>();
    
</script>

<template>
    <div class="commodity-wrap">
        <div class="commodity-image">
            <NuxtLink :to="url">
                <img :src="`/files/image/season/${image}`" :alt="name" />
            </NuxtLink>
        </div>
        <div class="commodity-name">
            <NuxtLink :to="url">
                {{ name }}
            </NuxtLink>
        </div>
        <div class="commodity-value">
            <div class="prefix">от</div>
            <div class="value">{{ price }}</div>
            <div class="currency">&#8381;</div>
        </div>
        <div class="commodity-group">
            <div class="group-name">
                {{ group }}
            </div>
            <div class="group-status">
                {{ status }}
            </div>
        </div>
        <div class="commodity-link">
            <NuxtLink :to="url">
                Узнать больше
            </NuxtLink>
        </div>
    </div>
</template>