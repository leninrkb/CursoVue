_app.component('menu-component',{
    template:`
        <v-app-bar :elevation="1">
        <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>
    
        <v-btn icon="mdi-magnify"></v-btn>
    
        <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
        </v-app-bar>
    `
})