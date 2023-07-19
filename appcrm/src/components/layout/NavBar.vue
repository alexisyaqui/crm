<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <strong>GANAR APPCRM</strong>
            </router-link>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/registro" class="button is-success"><strong>Registro</strong></router-link>
                        <router-link to="/inicioSesion" class="button is-light">Inicio de sesion</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
export default{
    name: 'Navbar'
}
</script>