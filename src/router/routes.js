const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/program', component: () => import('pages/Program.vue') },
      { path: '/infos', component: () => import('pages/Infos.vue') },
      { path: '/shop', component: () => import('pages/Shop.vue') },
      { path: '/shop/item/:id', component: () => import('pages/Item.vue') },
      { path: '/sponsors', component: () => import('pages/Sponsors.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/basket', component: () => import('pages/Basket.vue') },
      { path: '/orders', component: () => import('pages/OrdersInfos.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
