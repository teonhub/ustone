<script setup lang="ts">

    interface SeriesElement {
        series_url:     string;
        series_class:   string;
        series_name:    string;
        series_text:    string;
    }

    const series: SeriesElement[] = [
        {
            series_url: "/",
            series_class: "g",
            series_name: "Бетон и раствор",
            series_text: "Товарный бетон, Керамзитобетон, Тощий бетон, Монтажный раствор"
        },
        {
            series_url: "/",
            series_class: "b",
            series_name: "Бордюрный камень",
            series_text: "Садовый, Дорожный, Магистральный, Шарнирный"
        },
        {
            series_url: "/",
            series_class: "e",
            series_name: "Водоотводные системы",
            series_text: "Лотки водоотводные Gidrolica, Решетки, Комплекты"
        },
        {
            series_url: "/",
            series_class: "f",
            series_name: "Декоративный камень",
            series_text: "Гипсовый камень, Бетонный камень"
        },
        {
            series_url: "/",
            series_class: "c",
            series_name: "Малые архитектурные формы",
            series_text: "Вазоны, Лавки, Отбойник, Экотропа, Навершие, Бетонная плита, Пешеходное ограждение"
        },
        {
            series_url: "/",
            series_class: "d",
            series_name: "Стеновые материалы",
            series_text: "Бетонные блоки, Камень облицовочный"
        },
        {
            series_url: "/",
            series_class: "j",
            series_name: "Террасная доска",
            series_text: "Террасная доска, Фасадная доска, Заборная доска, Ступени, Огражаднения, Лавочный брус"
        },
        {
            series_url: "/trotuarnaya-plita",
            series_class: "a",
            series_name: "Тротуарная плитка",
            series_text: "Гранада, Валенсия, Паркет, Севилья, Парк Плейс, Новый город Лион, Старый город Штайн"
        },
        {
            series_url: "/",
            series_class: "h",
            series_name: "Ступени",
            series_text: "Клинкерные Interbau, Бетонные Артстрой"
        }
    ];

</script>

<template>
    <section class="main-groups">
        <div class="container-large">
            <div class="grid-group">
                <NuxtLink v-for="serie in series" :key="serie.series_name" :to="serie.series_url">
                    <div :class="['group', serie.series_class]">
                        <div class="group-heading">
                            {{ serie.series_name }}
                        </div>
                        <div class="group-items">
                            {{ serie.series_text }}
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>