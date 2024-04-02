<template>
    <img v-if="project && yPos && xPos" :src="project.img" class="preview"
        :style="{ transform: `translate(${xPos}px, ${yPos}px)` }">
</template>

<script setup lang="ts">
import type { Project } from '@/types/Project';

const props = defineProps({
    xPos: Number,
    yPos: Number,
    project: Object as () => Project | null
});
</script>

<style lang="scss" scoped>
.preview {
    height: 200px;
    position: fixed;
    left: 0;
    top: -200px;
    transition: all .1s ease-out;
    pointer-events: none;
    aspect-ratio: 16/9;
    object-fit: cover;
    z-index: 1;
}
</style>
