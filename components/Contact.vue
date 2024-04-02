<script setup lang="ts">
import { TitlePosition } from '@/enums/TitlePosition';
</script>

<template>
    <section>
        <SectionTitle :position="TitlePosition.CENTER" id="contact">
            Contact
        </SectionTitle>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut felis ac nulla volutpat egestas a sed
            dolor. Mauris porta et dui in pellentesque. Duis scelerisque elit vitae turpis interdum euismod.</p>
        <p>Nulla facilisi. Aliquam pharetra, ex eget lacinia bibendum, erat nunc pharetra ligula, iaculis pretium
            turpis risus in lectus.</p>

        <ul>
            <li>
                <a href="mailto:hugo.mandou@gmail.com">
                    <img src="/svg/email.svg" alt="Email">
                </a>
            </li>
            <li>
                <a href="https://github.com/Atlenexe" target="_blank">
                    <img src="/svg/github.svg" alt="GitHub">
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/hugomandou/" target="_blank">
                    <img src="/svg/linkedin.svg" alt="Linkedin">
                </a>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;

    img {
        height: 50px;
        transition: transform .3s;

        &:hover {
            transform: scale(1.1);
            filter: drop-shadow(0 0 2px var(--white));
        }
    }
}
</style>