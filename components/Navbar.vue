<template>
    <nav :class="{ 'scrolled': scrolled }">
        <span @click="scrollToTop" class="logo">Hugo Mandou</span>
        <ul>
            <li>
                <nuxt-link :to="{ path: '/', hash: '#apropos' }">À propos</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/', hash: '#projets' }">Projets</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/', hash: '#contact' }">Contact</nuxt-link>
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
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
            });
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
        font-size: 28px;
        opacity: 0;
        transition: opacity .2s linear;
        cursor: pointer;
        pointer-events: none;
    }

    ul {
        display: flex;
        justify-content: center;
        gap: 60px;
        list-style: none;
        padding: 5px 25px;
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
            pointer-events: all;
        }
    }
}

@media only screen and (max-width: 768px) {
    nav {
        padding: 50px 90px;
        bottom: 0;
        top: auto;

        .logo {
            display: none;
        }

        ul {
            width: 100%;
            justify-content: space-around;
            gap: 0;
            padding: 10px 25px;
        }
    }
}

@media only screen and (max-width: 480px) {
    nav {
        padding: 50px 20px;
    }
}
</style>