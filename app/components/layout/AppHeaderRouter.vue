<script setup lang="ts">
    
    import { ref } from 'vue';

    interface SeriesElement {
        series_url:   string;
        series_image: string;
        series_name:  string;
    }

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const series: SeriesElement[] = [
        { 
            series_url: "/",
            series_image: "beton.jpg",
            series_name: "Товарный бетон"
        },
        {
            series_url: "/",
            series_image: "bordr.jpg",
            series_name: "Бордюрный камень"
        },
        { 
            series_url: "/",
            series_image: "water.jpg",
            series_name: "Водоотводные системы"
        },
        { 
            series_url: "/",
            series_image: "dston.jpg",
            series_name: "Декоративный камень"
        },
        { 
            series_url: "/",
            series_image: "arhfo.jpg",
            series_name: "Малые архитектурные формы"
        },
        { 
            series_url: "/",
            series_image: "wallm.jpg",
            series_name: "Стеновые материалы"
        },
        { 
            series_url: "/",
            series_image: "trdpk.jpg",
            series_name: "Террасная доска"
        },
        { 
            series_url: "/",
            series_image: "trotu.jpg",
            series_name: "Тротуарная плитка"
        },
        { 
            series_url: "/",
            series_image: "klink.jpg",
            series_name: "Ступени"
        },
    ];

</script>

<template>
    <header class="desktop">
        <div class="unst-logotype">
            <NuxtLink to="/">
                <UiAppLogotype />
            </NuxtLink>
        </div>
        <div class="menu-main">
            <div class="menu-item menu-dropdown">
                <a href="#" @click.prevent="toggleMenu">Каталог</a>
                    <div class="menu-dropdown-items" :class="{ 'aggressive': isMenuOpen }">
                        <div v-for="serie in series" :key="serie.series_name" >
                            <NuxtLink :to="serie.series_url">
                                <span>
                                    <img :src="`/files/image/category/${serie.series_image}`" :alt="serie.series_name" />
                                </span>
                                <span>
                                    {{ serie.series_name }}
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="menu-item">
                    <NuxtLink to="/sertificate">Сертификаты</NuxtLink>
                </div>
                <div class="menu-item">
                    <NuxtLink to="/contact">Контакты</NuxtLink>
                </div>
                <div class="menu-item phone">
                    <NuxtLink to="/">
                        <span class="icon-phone">
                            <svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="-949 951 100 125" style="enable-background: new -949 951 100 100;" xml:space="preserve"><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1" /><g i:extraneous="self"><path d="M-860.6,1044.1c-1.9,2.9-5.2,4.6-8.7,4.4c-3.5-0.2-8-0.7-11.1-1.5c-13.8-3.6-28.1-12.2-40.2-24.3    c-12.1-12.1-20.7-26.4-24.3-40.2c-0.8-3.1-1.2-7.5-1.5-11c-0.2-3.4,1.4-6.7,4.3-8.6l12.3-8.2c3.2-2.1,7.5-1,9.2,2.4l10,19.3    c1.4,2.7,0.7,6.1-1.7,8l-9,7c3.6,6.7,7,12.1,13.6,18.6c6.1,6.1,11.4,9.7,18.3,13.4l7.1-9.1c1.9-2.4,5.3-3.2,8-1.7l19.4,10 c3.4,1.7,4.5,6,2.4,9.2L-860.6,1044.1z"/></g></switch></svg>
                        </span>
                        <span>+7 962 475 24 00</span>
                    </NuxtLink>
                </div>
                <div class="menu-item whatsapp">
                    <a href="https://t.me/UnderStone57" target="_blank">Telegram</a>
                </div>
            </div>
        </header>
</template>