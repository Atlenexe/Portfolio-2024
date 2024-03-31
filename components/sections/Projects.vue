<script setup lang="ts">
import { TitlePosition } from '@/enums/TitlePosition';
</script>

<template>
    <section>
        <SectionTitle :position="TitlePosition.LEFT" id="projets">
            Projets
        </SectionTitle>
        <ProjectsList />
    </section>
</template>