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
            }
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
