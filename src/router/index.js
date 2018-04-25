import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 引入组件
import NHome from 'components/n-home/n-home'
import NIndex from 'components/n-index/n-index'
import NOrder from 'components/n-order/n-order'
import NCare from 'components/n-care/n-care'
import MOne from 'components/care-manage/m-one'
import MTwo from 'components/care-manage/m-two'
import MThree from 'components/care-manage/m-three'
import MFour from 'components/care-manage/m-four'
import MFive from 'components/care-manage/m-five'
import NTemp from 'components/n-temp/n-temp'
import NTrans from 'components/n-trans/n-trans'
import NMission from 'components/n-mission/n-mission'
import MVideo from 'components/n-mission/m-video'
import MFile from 'components/n-mission/m-file'
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
          component: NCare,
          children: [
            {
              path:'one',
              name: 'one',
              component: MOne
            },
            {
              path:'two',
              name: 'two',
              component: MTwo
            },
            {
              path:'three',
              name: 'three',
              component: MThree
            },
            {
              path:'four',
              name: 'four',
              component: MFour
            },
            {
              path:'five',
              name: 'five',
              component: MFive
            },
          ]
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
          component: NMission,
          children:[
            {
              path:"video",
              name:'video',
              component:MVideo
            },
            {
              path: 'file',
              name:'file',
              component:MFile
            }
          ]
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
