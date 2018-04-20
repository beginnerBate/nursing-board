import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 引入组件
import NHome from 'components/n-home/n-home'
import NIndex from 'components/n-index/n-index'
import NOrder from 'components/n-order/n-order'
import NCare from 'components/n-care/n-care'
import NTemp from 'components/n-temp/n-temp'
import NTrans from 'components/n-trans/n-trans'
import NMission from 'components/n-mission/n-mission'
import NBoard from 'components/n-board/n-board'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: NHome,
      redirect:'/index',
      children:[
        {
          path: 'index',
          name: 'index',
          component: NIndex
        },
        {
          path: 'order',
          name: 'order',
          component: NOrder
        },
        {
          path: 'care',
          name: 'care',
          component: NCare
        },
        {
          path: 'temp',
          name: 'temp',
          component: NTemp
        },
        {
          path: 'trans',
          name: 'trans',
          component: NTrans
        },
        {
          path: 'mission',
          name: 'mission',
          component: NMission
        },
        {
          path: 'board',
          name: 'board',
          component: NBoard
        },
      ]
    }
  ]
})
