<template>
    <div class="contenedor">
        <p class="saludo">!Hola 👋! soy</p>
        <h1 class="nombre">Lenin Acosta</h1>
        <p class="descripcion">Desarrollador de software</p>
    </div>
</template>

<script>
export default {
    name: 'SaludoComponent'
}
</script>

<style scoped>

.contenedor {
    text-align: left;
    line-height: 1.2em;
}

.saludo {
    font-size: 3em;
    margin-bottom: 3px;
    line-height: normal;
}

.nombre {
    font-size: 5em;
    margin-top: 8px;
    margin-bottom: 2px;
    line-height: 80%;
}

.descripcion {
    font-size: 2em;
    margin: 0px;
    line-height: normal;
}
</style>