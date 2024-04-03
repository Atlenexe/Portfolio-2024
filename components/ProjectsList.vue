<script setup lang="ts">
import type { Project } from '@/types/Project';
import { projects } from '@/assets/projects';

const xPos = ref(0)
const yPos = ref(0)
const backgroundYPos = ref(0);
const backgroundHeight = ref(0);
const hoveredProject = ref<Project | null>(null);

//Update the cursor position & get the hovered project
const updatePosition = (event: MouseEvent) => {
    [xPos.value, yPos.value] = [event.clientX, event.clientY];
    const hoveredElement = event.target as HTMLElement;
    hoveredProject.value = projects.find(project => project.id === (hoveredElement.closest('li')?.getAttribute('project-id') ?? null)) || null;

    const rect = hoveredElement.getBoundingClientRect();
    backgroundYPos.value = rect.top;
    backgroundHeight.value = rect.height;
};

const resetHoveredProject = () => {
    hoveredProject.value = null;
}

const getStacksToString = (stacks: string[]) => {
    return stacks.join(' + ');
}
</script>

<template>
    <ul @mousemove="updatePosition" @mouseleave="resetHoveredProject">
        <li v-for="project in projects" :key="project.id" :project-id="project.id">
            <nuxt-link :to="'/projet/' + project.id">
                <span class="name">{{ project.name }}</span>
                <span class="stack">{{ getStacksToString(project.stacks) }}</span>
                <span class="year">{{ project.year }}</span>
                <span class="icon">+</span>
            </nuxt-link>
        </li>
    </ul>

    <div class="project-background" v-if="hoveredProject"
        :style="{ transform: `translateY(${backgroundYPos - 2}px)`, height: (backgroundHeight + 4) + 'px' }"></div>

    <ProjectPreview :xPos="xPos" :yPos="yPos" :project="hoveredProject" />
</template>

<style lang="scss" scoped>
.project-background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    background-color: var(--white);
    z-index: 0;
    pointer-events: none;
    transition: transform .15s ease-out;
}

li {
    border-top: 2px solid var(--white);
    position: relative;
    z-index: 1;

    a {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        padding: 30px 0;

        span {
            position: relative;
            pointer-events: none;
        }

        .name {
            grid-area: 1 / 1 / 2 / 5;

            font-weight: bold;
        }

        .stack {
            grid-area: 1 / 5 / 2 / 9;
        }

        .year {
            grid-area: 1 / 9 / 2 / 11;

            display: flex;
            justify-content: flex-end;
        }

        .icon {
            grid-area: 1 / 11 / 2 / 12;

            display: flex;
            justify-content: flex-end;
        }
    }

    &:last-child {
        border-bottom: 2px solid var(--white);
    }

    &:hover {
        span {
            color: var(--black);
        }
    }
}

@media only screen and (max-width: 768px) {
    li {
        a {
            grid-template-rows: repeat(2, 1fr);
            grid-row-gap: 5px;

            .name {
                grid-area: 1 / 1 / 2 / 11;
            }

            .stack {
                grid-area: 2 / 4 / 3 / 11;
            }

            .year {
                grid-area: 2 / 1 / 3 / 4;
                justify-content: flex-start;
            }

            .icon {
                grid-area: 1 / 11 / 3 / 12;
                align-items: center;
            }
        }
    }
}

@media only screen and (max-width: 480px) {
    li {
        a {
            &:hover {
                span {
                    color: var(--white);
                }
            }
        }
    }

    .project-background {
        display: none;
    }
}
</style>