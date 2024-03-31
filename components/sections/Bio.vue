<script setup lang="ts">
import { TitlePosition } from '@/enums/TitlePosition';
</script>

<template>
    <section>
        <SectionTitle :position="TitlePosition.LEFT" id="bio">
            Bio
        </SectionTitle>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut felis ac nulla volutpat egestas a sed
            dolor. Mauris porta et dui in pellentesque. Duis scelerisque elit vitae turpis interdum euismod.</p>
        <p>Nulla facilisi. Aliquam pharetra, ex eget lacinia bibendum, erat nunc pharetra ligula, iaculis pretium
            turpis risus in lectus.</p>
    </section>
</template>