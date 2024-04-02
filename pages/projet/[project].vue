<script setup lang="ts">
import type { Project } from '@/types/Project';
import { projects } from '@/assets/projects';

const router = useRoute();
const project = projects.find((project: Project) => project.id === router.params.project);
</script>

<template>
    <div v-if="project">
        <header>
            <div class="header-top">
                <nuxt-link to="/#projets" class="back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                    </svg>
                    Retour
                </nuxt-link>
                <div class="title">
                    <h1>{{ project.name }}<span class="year">({{ project.year }})</span></h1>
                </div>
            </div>
            <img v-if="project.img" :src="'/Portfolio-2024' + project.img" :alt="'Preview du site ' + project.name"
                class="banner">
        </header>
        <main>
            <section class="infos">
                <ul class="stacks">
                    <li v-for="stack in project.stacks" :key="stack" class="stack">{{ stack }}</li>
                </ul>
                <ul class="links">
                    <li v-if="project.githubUrl">
                        <a :href="project.githubUrl" target="_blank" class="link">Répertoire Github
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <polygon
                                    points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                            </svg>
                        </a>
                    </li>
                    <li v-if="project.websiteUrl">
                        <a :href="project.websiteUrl" target="_blank" class="link">Visiter le site
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <polygon
                                    points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </section>
            <p>{{ project.content }}</p>
        </main>
    </div>

    <div v-else>
        <h1>Projet non trouvé</h1>
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: var(--white);

    header {
        display: flex;
        flex-direction: column;

        * {
            color: var(--blue);
        }

        .header-top {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(7, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            padding: 40px;

            .back {
                grid-area: 1 / 1 / 2 / 2;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 8px 16px;
                width: fit-content;
                border: 2px solid var(--white);
                border-radius: 100%;
                transition: border-color .15s ease-in-out;

                &:hover {
                    border-color: var(--blue);
                }

                svg {
                    fill: var(--blue);
                    rotate: -135deg;
                }
            }

            .title {
                grid-area: 1 / 2 / 2 / 7;

                h1 {
                    font-size: 86px;
                    letter-spacing: normal;
                    text-align: center;

                    span {
                        letter-spacing: normal;
                        font-size: 26px;
                        font-family: Playfair, serif;
                    }
                }
            }
        }

        .banner {
            width: 100%;
            height: 550px;
            object-fit: cover;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        padding: var(--main-h-padding) 60px;
        gap: 80px;

        * {
            color: var(--black);
        }

        p {
            white-space: pre-line;
        }

        .infos {
            display: flex;
            align-items: center;
            justify-content: space-between;

            * {
                color: var(--blue);
            }

            .stacks,
            .links {
                display: flex;
                gap: 20px;
            }

            .stack,
            .link {
                font-weight: 600;
                border: 2px solid var(--blue);

                img {
                    color: var(--blue);
                }
            }

            .stack {
                padding: 3px 6px;
            }

            .link {
                padding: 10px 20px;
                border-radius: 100px;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: all .15s ease-in-out;

                svg {
                    fill: var(--blue);
                    transition: all .15s ease-in-out;
                }

                &:hover {
                    background-color: var(--blue);
                    color: var(--white);

                    svg {
                        fill: var(--white);
                    }
                }
            }
        }
    }
}
</style>