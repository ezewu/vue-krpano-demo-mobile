import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/shangjie',
  },
  {
    path: '/quyu',
    name: 'quyu',
    component: () => import('@/quyu/quyu'),
  },
  {
    path: '/shangjie',
    name: 'shangjie',
    component: () => import('@/shangjie/shangjie'),
  },
  {
    path: '/shinei',
    name: 'shinei',
    component: () => import('@/shinei/shinei'),
  },
  {
    path: '/lxwm',
    name: 'lxwm',
    component: () => import('@/lxwm/lxwm'),
  },
  {
    path: '/err',
    name: 'err',
    component: () => import('@/err/err'),
  },
  ],
  linkActiveClass: 'tab-active',
})

function browserRedirect() {
  // eslint-disable-next-line
  let sUserAgent = navigator.userAgent.toLowerCase()
  // eslint-disable-next-line
  let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
  // eslint-disable-next-line
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
  // eslint-disable-next-line
  let bIsMidp = sUserAgent.match(/midp/i) == 'midp'
  // eslint-disable-next-line
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
  // eslint-disable-next-line
  let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
  // eslint-disable-next-line
  let bIsAndroid = sUserAgent.match(/android/i) == 'android'
  // eslint-disable-next-line
  let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
  // eslint-disable-next-line
  let bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
  if (!(
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  )) {
    return true
  } else {
    return false
  }
}

router.beforeEach((to, from, next) => {
  if (!browserRedirect()) {
    next()
  } else {
    if (to.name === 'err') {
      next()
      return
    }
    next({
      path: '/err',
    })
  }
})

export default router
