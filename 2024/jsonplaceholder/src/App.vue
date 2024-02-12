<template>
    <nav>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link> |
        <router-link :to="{ name: 'posts-view' }">Posts</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

nav {
    background-color: rgb(100, 100, 100, 0.4);
    display: flex;
    justify-content: space-around;
    padding: 1em;
    margin: 0.5em;
    border-radius: 0.5em;
}

.router-link-active {
    color: red;
}
</style>
