import { createRouter, createWebHashHistory } from 'vue-router/dist/vue-router';


const routes = [
    {
        path:'',
        name:'main',
        component:()=> import('../pages/mainPage'),
        children:[
            {
                path:'',
                name:'home',
                component:()=> import('../pages/homePage'),
            },
            {
                path:'about',
                name:'about',
                component:()=> import('../pages/aboutPage'),
            },
            {
                path:'contact',
                name:'contact',
                component:()=> import('../pages/contactPage'),
            },
            {
                path:'login',
                name:'login',
                component:()=> import('../pages/loginPage'),
            },
            {
                path:'register',
                name:'register',
                component:()=> import('../pages/registerPage'),
            },
            {
                path:'account',
                name:'account',
                component:()=> import('../pages/profile/userInfoPage'),
            },
            {
                path:'address',
                name:'address',
                component:()=> import('../pages/profile/addressPage'),
            },
            {
                path:'change-password',
                name:'change-password',
                component:()=> import('../pages/profile/userInfoPage'),
            },
            {
                path:'wish-list',
                name:'wish-list',
                component:()=> import('../pages/profile/wishListPage'),
            },
            {
                path:'show/:id',
                name:'show',
                component:()=> import('../pages/viewPage'),
            },
            {
                path:'cart',
                name:'cart',
                component:()=> import('../pages/profile/cartPage'),
            },
            {
                path:'search',
                name:'search',
                component:()=> import('../pages/searchPage'),
            },
            {
                path:'search/:query',
                name:'search-query',
                component:()=> import('../pages/searchPage'),
            },
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next)=>{
    const publicPages = ['/','/search','/about','/contact','/login', '/register']
    const authRequired =!publicPages.includes(to.path)
    const auth = sessionStorage.getItem('token')
    if (authRequired && !auth){
        next({
            path:'/login'
        })
    }else next()

})
export default router
