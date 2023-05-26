import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory,createRouter } from 'vue-router';
import allusersApp from './components/pages/allusers.vue';
import userdetailsApp from "./components/pages/userdetails.vue";
import errorApp from './components/pages/error.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import updates from './components/pages/updateForm.vue';
import registeration from './components/pages/registerForm.vue';
import '@fortawesome/fontawesome-free/css/all.css'


const routes = [
    {
        path:'/',component:allusersApp,alias:'/users',
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/user/:id/update',component:updates
    },
    {
        path:'/register',component:registeration
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
