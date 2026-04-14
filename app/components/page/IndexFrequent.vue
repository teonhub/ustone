<script setup lang="ts">

    import { useFrequentElementsStore } from '@/stores/frequent';
    const elements = useFrequentElementsStore();

</script>

<template>
    <section class="season-commodity">
        <div class="container-large">
            <h3>Тротуарная плитка в Орле</h3>
                <div class="grid-season">
                    <LayoutAppFramePreview v-for="element in elements.frequentElements" :key="element.frame_name" v-bind="element" />
                </div>
            </div>
        </section>
</template>