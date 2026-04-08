<script setup lang="ts">

    defineProps<{
        url: string,
        name: string,
        type: string,
        size: string
    }>();
    
</script>

<template>
    <div class="document-item">
        <a target="_blank" :href="url">
            <div>
                {{ name }}
            </div>
            <div class="document-option">
                <div class="document-format">pdf</div>
                <div class="document-format">
                    {{ type }}
                </div>
                <div class="document-size">
                    {{ size }} кб
                </div>
            </div>
        </a>
    </div>
</template>