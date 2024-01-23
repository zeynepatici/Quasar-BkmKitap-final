import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'uyeGiris', component: () => import('pages/TheUyeGirisPage.vue') },
      { path: 'singup', component: () => import('pages/SingUpPage.vue') },
      { path: 'icon', component: () => import('pages/IconGeneralPage.vue') },
      { path: 'swiper', component: () => import('pages/TheSwiperPage.vue') },
      { path: 'footer', component: () => import('pages/TheFooterPage.vue') },
      { path: 'header', component: () => import('pages/TheHeaderPage.vue') },
      { path: 'filtre', component: () => import('pages/TheFiltrePage.vue') },
      { path: 'kargo', component: () => import('pages/TheKargoPage.vue') }, 
      { path: 'sepet', component: () => import('pages/TheSepetPage.vue') },
      { path: 'urun', component: () => import('pages/TheUrunPage.vue') },
      { path: 'hakkimizda', component: () => import('pages/TheHakkimizdaPage.vue') },
     
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];


export default routes;

