<script setup lang="ts">

    defineProps<{
        frame_url:  string;
        frame_img:  string;
        frame_name: string;
        frame_rate: string;
        frame_bran: string;
    }>();

</script>

<template>
    <div class="commodity-wrap">
        <div class="commodity-image">
            <NuxtLink :to="frame_url">
                <img :src="`/files/image/season/${frame_img}`" :alt="frame_name" />
            </NuxtLink>
        </div>
        <div class="commodity-group">
            <div class="group-name">[ {{ frame_bran }} ]</div>
        </div>
        <div class="commodity-name">
            <NuxtLink :to="frame_url">
                {{ frame_name }}
            </NuxtLink>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;">
            <div class="commodity-value">
                <div class="value">{{ frame_rate }} ₽</div>
            </div>
            <div class="commodity-link">
                <NuxtLink :to="frame_url">
                    Подробнее
                </NuxtLink>
            </div>
        </div>
    </div>
</template>