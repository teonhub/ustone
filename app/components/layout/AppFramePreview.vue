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
        <div class="layout-compare">
            <button type="button" class="btn-compare">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.0" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 237 281.25" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><g><polygon class="fil0" points="118,0 144,84 237,86 165,137 191,225 121,172 45,225 73,142 0,86 88,87 "/></g></svg>
            </button>
        </div>
        <div class="commodity-image">
            <NuxtLink :to="frame_url">
                <img :src="`/files/image/season/${frame_img}`" :alt="frame_name" />
            </NuxtLink>
        </div>
        <div class="commodity-group">
            <div class="group-name">{{ frame_bran }}</div>
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
                <NuxtLink :to="frame_url" area-label="Узнать больше">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                        <polygon points="22.5,50 27.9,55.4 56.7,55.4 42.6,69.6 50.2,77.3 77.5,50 50.2,22.7 42.6,30.4 56.7,44.6 27.9,44.6 "/>
                    </svg>
                    <!--
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                        <path d="M22.5,50l5.4,5.4h28.8L42.6,69.6l7.7,7.7L77.5,50L50.2,22.7l-7.7,7.7l14.2,14.2H27.9L22.5,50z M56.7,46.6h4.8l-3.4-3.4  L45.4,30.4l4.8-4.8L74.7,50L50.2,74.4l-4.8-4.8l12.7-12.7l3.4-3.4h-4.8h-28L25.3,50l3.4-3.4H56.7z"/>
                    </svg>
                    -->
                 </NuxtLink>
            </div>
        </div>
    </div>
</template>