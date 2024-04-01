<script setup lang="ts">
import type { TitlePosition } from '@/enums/TitlePosition';

const { position } = defineProps<{
    position: TitlePosition
}>();
</script>

<template>
    <header :style="{ justifyContent: position }">
        <h3>
            <slot></slot>
        </h3>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;

    h3 {
        border: 2px solid var(--white);
        padding: 0px 10px;
        display: inline-block;
        margin-bottom: 80px;
    }
}
</style>