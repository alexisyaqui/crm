<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Inicio de Sesion</h1>

                <form @submit.prevent="submitForm">

                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="email" name="email" class="input" v-model="username">
                        </div>
                    </div>


                    <div class="field">
                        <label>Contraseña</label>
                        <div class="control">
                            <input type="password" name="password" class="input" v-model="password1">
                        </div>
                    </div>

                    <!----
                    =================================
                    notificacion
                    ================================
                    ---->

                    <div class="notifaction is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-success">Guardar</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios'



export default {
    name: 'InicioSesion',

    data() {
        return {
            username: '',
            password1: '',
            errors: []
        }
    },

    methods: {
        submitForm() {
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.removeItem('token')

            const formData = {
                username: this.username,
                password: this.password1
            }

            axios
                .post('/api/v1/token/login/', formData)
                .then(response => {
                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)

                    axios.defaults.headers.common['Authorization'] = 'Token' + token

                    localStorage.getItem('token', token)

                    this.$router.push('/dashboard/micuenta')
                })

                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else if (error.message) {
                        this.errors.push('Datos incorrectos, vuelva a intentarlo')
                    }
                })
        }

    }
}
</script>