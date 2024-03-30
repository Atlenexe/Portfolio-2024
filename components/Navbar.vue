<template>
    <nav :class="{ 'scrolled': scrolled }">
        <nuxt-link :to="{ path: '/', hash: '#top'}" class="logo">Hugo Mandou</nuxt-link>
        <ul>
            <li>
                <nuxt-link :to="{ path: '/', hash: '#bio'}">Bio</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/', hash: '#projets'}">Projets</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/', hash: '#contact'}">Contact</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            scrolled: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > window.innerHeight;
        }
    }
};
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    padding: 50px 70px;

    .logo {
        text-decoration: none;
        font-size: 28px;
        opacity: 0;
        transition: opacity .2s linear;
    }

    ul {
        display: flex;
        justify-content: center;
        gap: 60px;
        list-style: none;
        padding: 5px 15px;
        border: 2px solid var(--white);
        border-radius: 50px;
        background-color: var(--transparent-white);
        backdrop-filter: blur(10px);

        li {
            a {
                font-size: 18px;
                text-decoration: none;
                transition: all .15s linear;

                &:hover {
                    text-shadow: 0 0 2px var(--white);
                }
            }
        }
    }

    &.scrolled {
        .logo {
            opacity: 1;
        }
    }
}
</style>