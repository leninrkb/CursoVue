<template>
    <div class="">
        <div class="row">
            <div id="presentacion" class="col m10 white-text">
                <div class="contenedor">
                    <p class="saludo">!Hola 👋, soy!</p>
                    <h1 class="nombre">Lenin Acosta</h1>
                    <p class="descripcion">Desarrollador de software</p>
                </div>
            </div>
            <div class="margenes">
                <div class="col m8">
                    <div class="card-panel cyan darken-4">
                        <span class="white-text">
                            <blockquote class="flow-text justificado">
                                Como apasionado de la tecnología,
                                he desarrollado habilidades en lenguajes de
                                programación como Python y Java. Tengo
                                experiencia en Inteligencia Artificial y desarrollo web. ¡Estoy
                                emocionado de compartir mi experiencia y habilidades
                                con ustedes. Espero trabajar en proyectos
                                emocionantes en el futuro!
                            </blockquote>
                        </span>
                    </div>
                </div>
                <div class="col m4">
                    <img width="65%" class="circle responsive-img" src="../assets/foto.jpg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PersonalView'
}
</script>

<style scoped>

.margenes {
    padding: 5%;
}

#presentacion {
    margin-top: 1em;
    margin-left: 3em;
    margin-bottom: 4em;
}

.contenedor {
    text-align: left;
    line-height: 1.2em;
}

.saludo {
    font-size: 3em;
    margin-bottom: 0;
}

.nombre {
    font-size: 5em;
    margin-top: 8px;
    margin-bottom: 2px;
}

.descripcion {
    font-size: 2em;
    margin: 0;
}

.justificado {
    text-align: justify;
}
</style>