para la configuracion de las librerias de django, agregamos en en settings, install apps

    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'dojser'

para los corsheaders agregamos en settings debajo de ALLOWED_HOSTS = []

        CORS_ALLOWED_ORIGINS = [
        'http://localhost:8080'
    ]

    y en el midleware agreagar el corsmiddleware

    'corsheaders.middleware.CorsMiddleware',


configuramos nuestras rutas de urls principal del proyecto importamos  include para uitilizar djoser.

    from django.urls import path, include

        path('api/v1/', include('djoser.urls')),
        path('api/v1/', include('djoser.urls.authtoken'))


configuramos nuestro proyecto de django con vue.
    dentro del form utilizamos @submit.prevent="submitForm"
    dentro de los input agregamos nuestras variables declaradas anteriormente dentro de las  propiedades de vue <input v-model="username">
    <input v-model="password1">
    <input v-model="password2">

    tambien manejamos el control de errores

    comenzamos a trabajar en la parte del script del registro

    
<script>

import axios from 'axios'
import { toast } from 'bulma-toast'


export default {
    name: 'Registro',
    data() {
        return {
            username: '',
            password1: '',
            password2: '',
            errors: [],
        }
    },
    methods: {
        submitForm() {
            this.errors = []

            if (this.username === '') {
                this.errors.push('El usuario ingresado es invalido!')
            }
            


            if (this.password1 === '') {
                this.errors.push('la contraseña es muy corta')

            }

            if (this.password1 !== this.password2) {
                this.errors.psush('La contraseña ingresada es incorrecta')
            }

            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password1
                }


                axios
                    .post('/api/v1/users/', formData)
                    .then(response => {
                        toast({
                            message: 'Cuenta creada con exito!!!.',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })

                        this.$router.push('/iniciosesion')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }

                        } else if (error.message) {
                            this.errors.push('Contraseña es muy corta, intente de nuevo por favor!.')
                        }
                    })

            }
        }
    }
}
</script>

    ===========================================================
    inicio de sesion
    ===========================================================

    