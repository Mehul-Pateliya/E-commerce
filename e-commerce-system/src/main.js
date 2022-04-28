import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthentication } from './stores/authenticate'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

const auth = useAuthentication()
router.beforeEach((to,from,next)=>{
if(!auth.isAuthenticated && to.name!='Login'){
    next({name : 'Login'})
}
next()
});

app.mount('#app')
