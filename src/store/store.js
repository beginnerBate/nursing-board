import Vue from 'vue'
import Vuex from 'vuex'
import duty from './modules/duty'
import loS from '@/common/js/loStorage'

// 在使用vuex之前使用，先初始化相关数据
const init = [
    {name: 'isLogin', value: ''},
    {name: 'token', value: ''},
    {name: 'headmenu', value: '首页'},
    {name: 'headText', value: '<未登录>'},
    {name: 'themeType',  value: 'theme-day'},
]
loS.initData(init)
Vue.use(Vuex)
const state = {
    headmenu: loS.getItem('headmenu', true),
    themeType: loS.getItem('themeType', true),
    isLogin: loS.getItem('isLogin', true),
    headText: loS.getItem('headText', true),
    token: loS.getItem('token',true),
    tabdisplay: false,
    dutyopen:false
}
const mutations = {
    changeheadmenu (state, name) {
        loS.setItem('headmenu',name);
        state.headmenu = loS.getItem('headmenu',true)
    },
    changeheadText (state, name) {
        loS.setItem('headText',name);
        state.headText = loS.getItem('headText',true)
    },
    setTheme (state, code) {
        loS.setItem('themeType',code);
        state.themeType = loS.getItem('themeType',true)
    },
    setLogin (state, code) {
        loS.setItem('isLogin', code)
        state.isLogin = loS.getItem('isLogin',true)
    },
    setToken (state, code) {
        loS.setItem('token', code)
        state.token = loS.getItem('token',true)
    },
    setTab (state, code) {
        state.tabdisplay = code
    },
    setDuty (state, code) {
        state.dutyopen = code
    }
}
export default new Vuex.Store({
    modules: {
        duty
    },
    state,
    mutations
})