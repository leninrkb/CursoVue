_app.component('menu-component', {
    template: ` 
    <nav class="indigo darken">
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">{{usuario}}</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
        </div>
    </nav>
    `,
    props: {
        usuario: String
    },
    data() {
        return {
            miUsuario: this.usuario
        }
    }
});