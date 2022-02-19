import { createRouter, createWebHistory } from 'vue-router'
import panel from '../views/panel'

const routes = [
  
  {
    path: '/panel',
    name: 'panel',
    redirect:'/panel/dashboard',
    component: panel,
    meta:{
    requiresAuth:true
    },
    children: [
      {
        path:'dashboard',
        name:'dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue')
  
      },
      {
        path:'usuarios/crear',
        name:'Crear usuario',

        component: () => import(/* webpackChunkName: "about" */ '../views/createuser.vue'),
    
      },
      {
        path:'usuarios/editar/:id',
        name:'Editar usuario',
        component: () => import(/* webpackChunkName: "about" */ '../views/editaruser.vue'),

      },
    
      
      {
      path:'libros',
      name:'libros',
      component: () => import(/* webpackChunkName: "about" */ '../views/libros.vue'),
     
      },
      {
        path:'libros/crear',
        name:'Crear libro',

        component: () => import(/* webpackChunkName: "about" */ '../views/crearlibro.vue'),
    
      },
      {
        path:'libros/editar/:id',
        name:'Editar libro',
        component: () => import(/* webpackChunkName: "about" */ '../views/editarlibro.vue'),

      },
      {
      path:'usuarios',
      name:'usuarios',

      component: () => import(/* webpackChunkName: "about" */ '../views/usuarios.vue')

      },
      {
        path:'prestamos',
        name:'prestamos',
        component: () => import(/* webpackChunkName: "about" */ '../views/prestamos/listar.vue')
  
        },
        {
          path:'prestamos/crear',
          name:'Crear Prestamo',
          component: () => import(/* webpackChunkName: "about" */ '../views/prestamos/crear.vue'),
      
        },
        {
          path:'prestamos/editar/:id',
          name:'Editar Prestamo',
          component: () => import(/* webpackChunkName: "about" */ '../views/prestamos/editar.vue'),
  
        },
      
    ]
  },

  
  {
    path: '/login',
    name: 'login',
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('auth')){
         next('/panel')
      }
      else{
        next()
      }
    },
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path:"/:pathMatch(.*)",
    name:'notfound',
    component: () => import(/* webpackChunkName: "about" */ '../views/notfound.vue')

  },
  {
    path:"",
    redirect:'/panel',

    component: () => import(/* webpackChunkName: "about" */ '../views/notfound.vue')

  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  const protectedRoute= to.matched.some(record=>record.meta.requiresAuth)
  if(protectedRoute && !localStorage.getItem('auth')){
   next('login')
  }
  else{
    next();
  }
})

export default router
