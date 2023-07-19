configuracion de axios en main.js
    import axios from 'axios'

    axios.defaults.baseURL = 'http://127.0.0.1:8000' direccion para django
    createApp(App).use(store).use(router, axios).mount('#app')

    en el mismo archivo configuramos bulma
    @import '../node_modules/bulma'

creamos nuestra pagina de menu en el componente
    layout/NavBar.vue

dentro de la App.vue, exportamos nuestro componente
    script

creamos la vista de registrate en views creamos un formulario de registro


creamos la vista de inisio de session en views creamos un formulario de registro




creamos la vista de inisio de session en views creamos un formulario de registro


creamos la vista del dashboard de session en views 

configuracion del vuex en la carpeta store
            import { createStore } from 'vuex'

        export default createStore({
        state: {
            isLoading: false,
            isAuthenticated: false,
            token: ''
        },
        getters: {
        },
        mutations: {
            initializeStore(state){
            if(localStorage.getItem('token')){
                state.token = ''
                state.isAuthenticated = false
            }
            },
            setIsLoading(state, status){
            state.isLoading = status
            },

            setToken(state){
            state.token = ''
            state.isAuthenticated = false
            }, 

            removeToken(state){
            state.token = ''
            state.isAuthenticated = false
            },

            

        },
        actions: {
        },
        modules: {
        }
        })

    y en el archivo app. vue agregar la siguiente linea de codigo dentro del script

    e importamos axios
    import axios from 'axios';

      beforeCreate(){
    this.$store.commit('initializeStore')
  }

  quedando asi:
    
        export default {
        name: 'App',
        components: {
            NavBar
        },

        beforeCreate() {
            this.$store.commit('initializeStore')

            if (this.$store.state.token) {
            axios.defaults.header.common['Authorization'] = "Token" + this.$store.state.token
            } else {
            axios.defaults.header.common['Authorization'] = ""
            }
         }
        }

configuramos los routers
    dentro de router/inde.js importamos vuex store
        import  Store  from 'vuex'

        