<template>
    <div class="container">
        <div class="columns is-multinle">
            <div class="column is-12">
                <h1 class="title">Mi cuenta</h1>
            </div>

            <div class="column is-12">
                <button @click="logout()" class="button is-danger">Cerrar sesion</button>
            </div>

        </div>
    </div>
</template>


<script>

import axios from 'axios'

export default {
    name: 'Micuenta',
    methods: {
        async logout() {
            await axios
                .post('http://127.0.0.1:8000/api/v1/token/logout/')
                .then(response => {
                    console.log('sesion cerrada!.')
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })

            axios.defaults.headers.common['Authorization'] = ''
            localStorage.removeItem('token')
            this.$store.commit('removeToken')

            this.$router.push('/')
        }

    }
}
</script>