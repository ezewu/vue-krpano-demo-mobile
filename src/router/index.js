import Vue from 'vue'
import Router from 'vue-router'

const quyu = (resolve) => {
  import ('@/quyu/quyu').then((module) => {
    resolve(module)
  })
}

const shangjie = (resolve) => {
  import ('@/shangjie/shangjie').then((module) => {
    resolve(module)
  })
}

const shinei = (resolve) => {
  import ('@/shinei/shinei').then((module) => {
    resolve(module)
  })
}

const lxwm = (resolve) => {
  import ('@/lxwm/lxwm').then((module) => {
    resolve(module)
  })
}

const err = (resolve) => {
  import ('@/err/err').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/shangjie'
    },
    {
      path: '/quyu',
      name: 'quyu',
      component: quyu
    },
    {
      path: '/shangjie',
      name: 'shangjie',
      component: shangjie
    },
    {
      path: '/shinei',
      name: 'shinei',
      component: shinei
    },
    {
      path: '/lxwm',
      name: 'lxwm',
      component: lxwm
    },
    {
      path: '/err',
      name: 'err',
      component: err
    }
  ],
  linkActiveClass: 'tab-active'
})


function browserRedirect() {
  let sUserAgent = navigator.userAgent.toLowerCase()
  let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
  let bIsMidp = sUserAgent.match(/midp/i) == 'midp'
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
  let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
  let bIsAndroid = sUserAgent.match(/android/i) == 'android'
  let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
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
