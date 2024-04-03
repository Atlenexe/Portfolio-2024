<script setup lang="ts">
import { TitlePosition } from '@/enums/TitlePosition';
</script>

<template>
    <section>
        <SectionTitle :position="TitlePosition.LEFT" id="apropos">
            À propos
        </SectionTitle>

        <div class="content">
            <p><strong>Bonjour !</strong></p>
            <p>Jeune diplômé aux métiers de l'informatique (Licence professionnelle MIAR à l'IUT Nantes), je suis un développeur web de 21 ans <strong>touche à tout</strong>, passionné par l'univers d'Internet !</p>
            <p>J'accorde une grande importance à <strong>l'esthétisme</strong> et à <strong>l'ergonomie</strong> dans mes projets, choses que je mélange avec ma passion pour le développement web. Je pense également à la bonne <strong>accessibilité</strong> des applications sur lesquels je travaille, pour que celles-ci soient confortables pour tout le monde.</p>
            <p>Me casser la tête à <strong>résoudre des problèmes</strong> fait partie des choses que j'adore dans ce milieu, sans ça, on ne s'amuse plus ! (moins valable quand il s'agit de config...)</p>
            <p>Je maîtrise les technologies les plus populaires, tels que <strong>React, Vue, Angular et leurs surcouches Nuxt et Next.js</strong>, mais je n'ai pas oublié comment faire du front sans tous ces frameworks ! Bien sûr, <strong>PHP, Symfony et NodeJS</strong> ne me font pas peur, tout comme <strong>créer et gérer une base de données</strong> !</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    strong {
        font-weight: 800;
    }
}
</style>