import {createRouter,createWebHistory} from 'vue-router'

import HomePage  from './views/HomePage.vue'
import BookPage  from './views/BookPage.vue'
import ViewBook  from './views/ViewBook.vue'
import LoginPage  from './views/LoginPage.vue'
import SignupPage  from './views/SignupPage.vue'
import ForgotPassword  from './views/ForgotPassword.vue'
import NewPassword  from './views/NewPassword.vue'
import ConfirmRegister  from './views/ConfirmRegister.vue'

const routes = [
   {path:'/',component:HomePage,name:'HomePage'},
   {path:'/book',component:BookPage,name:'BookPage'},
   {path:'/view-book',component:ViewBook,name:'ViewBook'},
   {path:'/login',component:LoginPage,name:'LoginPage'},
   {path:'/signup',component:SignupPage,name:'SignupPage'},
   {path:'/forgot-pass',component:ForgotPassword,name:'ForgotPassword'},
   {path:'/new-pass',component:NewPassword,name:'NewPassword'},
   {path:'/confirm',component: ConfirmRegister,name:' ConfirmRegister'},

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
