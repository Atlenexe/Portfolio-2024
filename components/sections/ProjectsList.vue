<template>
    <ul>
        <li>
            <nuxt-link to="/">
                <span class="name">Portfolio</span>
                <span class="stack">Nuxt</span>
                <span class="year">2021</span>
                <span class="icon">+</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/">
                <span class="name">Portfolio</span>
                <span class="stack">Nuxt</span>
                <span class="year">2021</span>
                <span class="icon">+</span>
            </nuxt-link>
        </li>
    </ul>
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
            z-index: 100;
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