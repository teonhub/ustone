<script setup lang="ts">

    import { useSeasonElementsStore } from '@/stores/season';
    const elements = useSeasonElementsStore();

</script>

<template>
    <section class="season-commodity">
        <div class="container-large">
            <h3>Товары сезона</h3>
                <div class="grid-season">
                    <LayoutAppFramePreview v-for="element in elements.seasonElements" :key="element.frame_name" v-bind="element" />
                </div>
            </div>
        </section>
</template>