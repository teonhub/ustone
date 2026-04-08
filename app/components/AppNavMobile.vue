<script setup lang="ts">

    import { ref } from 'vue';
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

</script>

<template>
    <header class="mobile">
        <div class="columns">
            <div>
                <NuxtLink to="/" class="unst-logotype-m">
                    <AppLogo />
                </NuxtLink>
            </div>
            <div>
                <a class="whatsapp" href="https://t.me/UnderStone57">Telegram</a>
            </div>
        </div>
        <div class="columns">
            <div>
                <button class="menu-active" @click.prevent="toggleMenu">
                    <span class="icon-navapp-mobile"></span>
                </button>
            </div>
            <div>
                <a class="phone-m" href="tel:+79624752400">+7 962 475 24 00</a>
            </div>
        </div>
        <nav class="navigation-items" :class="{ 'active-menu': isMenuOpen }">
            <ul>
                <li><NuxtLink to="/">Товарный бетон</NuxtLink></li>
                <li><NuxtLink to="/">Бордюрный камень</NuxtLink></li>
                <li><NuxtLink to="/">Водоотводные системы</NuxtLink></li>
                <li><NuxtLink to="/">Декоративный камень</NuxtLink></li>
                <li><NuxtLink to="/">Малые архитектурные формы</NuxtLink></li>
                <li><NuxtLink to="/">Стеновые материалы</NuxtLink></li>
                <li><NuxtLink to="/">Террасная доска</NuxtLink></li>
                <li><NuxtLink to="/">Тротуарная плитка</NuxtLink></li>
                <li><NuxtLink to="/">Ступени</NuxtLink></li>
                <li><NuxtLink to="/sertificate">Сертификаты</NuxtLink></li>
                <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
            </ul>    
        </nav>
    </header>
</template>