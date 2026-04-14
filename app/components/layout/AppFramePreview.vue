<script setup lang="ts">

    defineProps<{
        frame_url:  string;
        frame_img:  string;
        frame_name: string;
        frame_rate: string;
        frame_bran: string;
        frame_stat: string;
    }>();

</script>

<template>
    <div class="commodity-wrap">
        <div class="commodity-image">
            <NuxtLink :to="frame_url">
                <img :src="`/files/image/season/${frame_img}`" :alt="frame_name" />
            </NuxtLink>
        </div>
        <div class="commodity-name">
            <NuxtLink :to="frame_url">
                {{ frame_name }}
            </NuxtLink>
        </div>
        <div class="commodity-value">
            <div class="prefix">от</div>
            <div class="value">{{ frame_rate }}</div>
            <div class="currency">₽</div>
        </div>
        <div class="commodity-group">
            <div class="group-name">{{ frame_bran }}</div>
            <div class="group-status">{{ frame_stat }}</div>
        </div>
        <div class="commodity-link">
            <NuxtLink :to="frame_url">Узнать больше</NuxtLink>
        </div>
    </div>
</template>