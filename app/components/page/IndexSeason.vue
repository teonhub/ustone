<script setup lang="ts">

    interface SeasonCommodity {
        frame_url:  string;
        frame_img:  string;
        frame_name: string;
        frame_rate: string;
        frame_bran: string;
        frame_stat: string;
    }

    const seasonCommodities: SeasonCommodity[] = [
        {
            frame_url: "/",
            frame_img: "maf-01.jpg",
            frame_name: "Вазон Daisy",
            frame_rate: "2 160",
            frame_bran: "Артстрой",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "maf-02.jpg",
            frame_name: "Отбойник Lighthouse",
            frame_rate: "14 320",
            frame_bran: "Артстрой",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "dpk-01.jpg",
            frame_name: "Заборная доска двусторонняя Ecodecking Титан",
            frame_rate: "656",
            frame_bran: "Ecodecking",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "dpk-02.jpg",
            frame_name: "Реечная фасадная панель Ecodecking Техно",
            frame_rate: "824",
            frame_bran: "Ecodecking",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "dpk-03.jpg",
            frame_name: "Фасадная доска Ecodecking Экстра",
            frame_rate: "470",
            frame_bran: "Ecodecking",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "dpk-04.jpg",
            frame_name: "Террасная доска Ecodecking Титан односторонняя обработка",
            frame_rate: "606",
            frame_bran: "Ecodecking",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "dpk-05.jpg",
            frame_name: "Террасная доска Ecodecking Техно плюс",
            frame_rate: "697",
            frame_bran: "Ecodecking",
            frame_stat: "В наличии"
        },
        {
            frame_url: "/",
            frame_img: "dpk-06.jpg",
            frame_name: "Террасная доска Ecodecking Техно плюс",
            frame_rate: "695",
            frame_bran: "Ecodecking",
            frame_stat: "В наличии"
        },
    ];

</script>

<template>
    <section class="season-commodity">
        <div class="container-large">
            <h3>Товары сезона</h3>
                <div class="grid-season">
                    <LayoutAppFramePreview v-for="commodity in seasonCommodities" :key="commodity.frame_name" v-bind="commodity" />
                </div>
            </div>
        </section>
</template>