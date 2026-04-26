<script setup lang="ts">

    defineProps({
        title: {
            type: String,
            default: '',
            required: true
        }
    })

</script>

<template>
    <div class="app-heading">
        <h1>{{ title }}</h1>
    </div>   
</template>