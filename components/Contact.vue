<script setup lang="ts">
import { TitlePosition } from '@/enums/TitlePosition';
</script>

<template>
    <section>
        <SectionTitle :position="TitlePosition.CENTER" id="contact">
            Contact
        </SectionTitle>

        <div class="content">
            <p>
                Que ce soit pour discuter de collaborations professionnelles, échanger des idées passionnantes ou
                simplement prendre contact, je suis toujours ouvert aux nouvelles opportunités !
            </p>

            <p>
                N'hésitez pas à m'envoyer un email pour une réponse rapide ou à me suivre sur LinkedIn et GitHub pour
                être au courant de mes derniers projets et contributions. Je suis impatient d'échanger avec vous et de
                découvrir comment nous pouvons travailler ensemble !
            </p>
            <a href="mailto:hugo.mandou@gmail.com">hugo.mandou[at]gmail.com</a>
        </div>

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
.content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 20%;

    a {
        width: fit-content;
        font-weight: bold;
    }
}

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

@media only screen and (max-width: 768px) {
    .content {
        padding: 0 10%;
    }
}

@media only screen and (max-width: 480px) {
    .content {
        padding: 0;
    }
}
</style>