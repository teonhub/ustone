<script setup lang="ts">
    
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    interface SeriesElement {
        series_url:   string;
        series_image: string;
        series_name:  string;
    }

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
    <header>
        <div class="header-ui">
            <div class="ustone-logotype">
                <NuxtLink to="/">
                    <LayoutAppLogotype />
                </NuxtLink>
            </div>
            <div class="ustone-search">
                <form action="#">
                    <input type="search" name="" placeholder="Поиск" />
                    <button type="submit" class="btn-search">Найти</button>
                </form>
            </div>
            <div class="ustone-compare">
                <button type="button" class="btn-compare">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.0" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 237 281.25" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><g><polygon class="fil0" points="118,0 144,84 237,86 165,137 191,225 121,172 45,225 73,142 0,86 88,87 "/></g></svg> Избранное
                </button>
                <div class="adress">
                    <a target="_blank" href="https://yandex.ru/maps/-/CPv8bUP~">ул. Московская, 43А</a>
                </div>
            </div>
        </div>
        
        <div class="main-menu">
            <div class="btn-menu">
                <nav>
                    <ul>
                        <li>
                            <button type="button" class="menu-item menu-dropdown" @click.prevent="toggleMenu">Каталог</button>
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
                            </li>
                        <li><NuxtLink to="/">Распродажа</NuxtLink></li>
                        <li><NuxtLink to="/">Бренды</NuxtLink></li>
                        <li><NuxtLink to="/sertificate">Сертификаты</NuxtLink></li>
                        <li><NuxtLink to="/contact">Магазин</NuxtLink></li>
                        <li><NuxtLink to="/">+7 (962) 475 24 00</NuxtLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>