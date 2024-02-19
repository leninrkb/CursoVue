<template>
    <div class="container">
        <nav>
            <router-link :to="{ name: 'home' }">Home</router-link> |
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}


.container {
    margin: 0.2em;
    background-color: rgb(20, 20, 20, 0.1);
    border-radius: 0.5em;
    padding: 0.5em;
    height: 95vh;
}
</style>
