<template>
    <nav class="bg-green-100 vshadow">
        <router-link to="/">Home</router-link> |
        <router-link :to="{name: 'auth'}">Login / Register</router-link> |
        <router-link :to="{name: 'auth-firebase'}">Firebase login</router-link> 
    </nav>
    <div class="container vshadow">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

nav {
    margin: 0.8em;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    border: 2px solid gray;
    border-radius: 0.9em;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.container{
    padding: 0.8em;
    background-color: rgb(20, 20, 20, 0.1);
    border-radius: 0.9em;
    margin-left: auto;
    margin-right: auto;
}

.vshadow{
    box-shadow: 5px 2px gray;
}
</style>
