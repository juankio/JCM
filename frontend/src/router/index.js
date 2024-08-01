import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppointmentsLayout from '../views/appointments/AppointmentsLayout.vue'
import AuthAPI from '@/api/AuthAPI'
import { resolveTypeElements } from 'vue/compiler-sfc'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component:HomeView
    },
    {
      path:'/about',
      name: 'about',
      component: ()=> import('../views/About.vue'),
    },
    {
      path:'/galeria',
      name: 'galeria',
      component: ()=> import('../views/galeria.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      meta: { requiresAdmin: true },
      children: [
        {
          path: 'citas',
          name: 'admin-appointments',
          component: () => import('../views/admin/AppointmentsView.vue'),
        },
        {
          path: 'actualizar-catalogo',
          name: 'update-catalog',
          component: () => import('../views/admin/UpdateCatalogView.vue'),
        }
      ]
    },
    {
      path:'/reservaciones',
      name: 'appointments',
      component:AppointmentsLayout,
      meta:{requiresAuth:true},
      children:[
        {
          path:'',
          name:'my-appointments',
          component: ()=> import('../views/appointments/MyAppointmentsView.vue'),

        },
       
        {
          path:'nueva',
          component: ()=> import('../views/appointments/NewAppointmentLayout.vue'),
          children:[
            {
              path:'',
              name:'new-appointment',
              component: ()=> import('../views/appointments/ServicesView.vue'),
            },
            {
              path:'detalles',
              name:'appointment-details',
              component: ()=> import('../views/appointments/AppointmentView.vue'),
            },
            
          ]
        },
        {
          path:':id/editar',
          component: ()=> import('../views/appointments/EditAppointmentLayout.vue'),
          children:[
            {
              path:'',
              name:'edit-appointment',
              component: ()=> import('../views/appointments/ServicesView.vue'),
            },
            {
              path:'detalles',
              name:'edit-appointment-details',
              component: ()=> import('../views/appointments/AppointmentView.vue'),
            }
          ]
        },
        {
          path:'comentarios',
          name:'comentario',
          component: ()=> import('../views/comentarios/NewComentariosLayout.vue'),
        },
        {
          path:'',
          component: ()=> import('../views/comentarios/EditComentarioLayout.vue'),
          children:[
            {
              path:'newcomentario/:servicioId',
              name:'new-comentario',
              component: ()=> import('../views/comentarios/comentario.vue'),
            },
            {
              path:'comentarios/:servicioId',
              name:'todo-comentario',
              component: ()=> import('../views/comentarios/comentariosGeneral.vue'),
            }
          ]
        },
       

      ]
    },
    
    {
      path:'/auth',
      name:'auth',
      component: ()=> import('../views/auth/AuthLayout.vue'),
      children:[
        {
          path:'registro',
          name:'register',
          component: ()=> import('../views/auth/RegisterView.vue'),
        },
        {
          path:'confirmar-cuenta/:token',
          name:'confir-account',
          component: ()=> import('../views/auth/ConfirmAccountView.vue'),
        },
        {
          path:'login',
          name:'login',
          component: ()=> import('../views/auth/LoginView.vue'),
        },
        {
          path:'olvide-password',
          name:'forgot-password',
          component: ()=> import('../views/auth/ForgotPasswordView.vue'),
        },
        {
          path:'olvide-password/:token',
          name:'new-password',
          component: ()=> import('../views/auth/NewPasswordView.vue'),
        },
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  if (requiresAuth) {
    try {
      const { data } = await AuthAPI.auth()
      if (data.admin) {
        next({ name: 'admin-appointments' })
      } else {
        next()
      }
    } catch (error) {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

router.beforeEach(async (to, from, next) => {
  const requiresAdmin = to.matched.some(url => url.meta.requiresAdmin)
  if (requiresAdmin) {
    try {
      await AuthAPI.admin()
      next()
    } catch (error) {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
