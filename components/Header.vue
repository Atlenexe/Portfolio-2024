<template>
    <header>
        <h1>Hugo<br>Mandou</h1>
        <h2>Développeur web fullstack à Nantes</h2>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(70% calc(100vh * 0.9) at center, #dbdcff 0%, #3439b7 55%, #00011e 100%);
    position: relative;

    h1,
    h2 {
        display: inline-block;
        line-height: 1.05;
        z-index: 0;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url('/images/noise.png');
        background-size: cover;
        mix-blend-mode: overlay;
    }
}
</style>