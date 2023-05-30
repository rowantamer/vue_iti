import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory,createRouter } from 'vue-router';
import allUserComponent from './components/pages/allUsers.vue'
import userdetailsApp from './components/pages/userDetails.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const routes = [
    {
        path:'/',component:allUserComponent,alias:'/users',
    },
    {
        path:'/user/:id',component:userdetailsApp
    }

];
const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
