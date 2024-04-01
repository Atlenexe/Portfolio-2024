<script setup lang="ts">
import type { Project } from '@/types/Project';
import { projects } from '@/assets/projects';

const xPos = ref(0)
const yPos = ref(0)
const hoveredProject = ref<Project | null>(null);

//Update the cursor position & get the hovered project
const updatePosition = (event: MouseEvent) => {
    [xPos.value, yPos.value] = [event.clientX, event.clientY];
    const hoveredElement = event.target as HTMLElement;
    hoveredProject.value = projects.find(project => project.id === (hoveredElement.closest('li')?.getAttribute('project-id') ?? null)) || null;
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

    <ProjectPreview :xPos="xPos" :yPos="yPos" :project="hoveredProject" />
</template>

<style lang="scss" scoped>
li {
    border-top: 2px solid var(--white);
    position: relative;

    a {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        span {
            padding: 30px 0;
            position: relative;
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

    &::before {
        content: '';
        width: 100vw;
        height: 100%;
        position: absolute;
        left: calc(-1 * var(--main-h-padding));
        top: -2px;
        background-color: var(--white);
        z-index: 0;
        border-top: 2px solid var(--white);
        border-bottom: 2px solid var(--white);
        opacity: 0;
        transition: opacity .15s linear;
    }

    &:hover::before {
        opacity: 1;
    }
}
</style>