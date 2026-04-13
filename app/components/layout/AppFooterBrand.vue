<script setup lang="ts">

    defineProps<{
        name: string
    }>();
    
</script>

<template>
    <div class="contact-cell">
        <div class="contact-heading"><span>{{ name }}</span></div>
    </div>
</template>