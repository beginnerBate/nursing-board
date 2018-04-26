import {getMemo} from 'api/memo'
// 备忘录管理
const state = {
  title:'',
  icon:'',
  data:'',
  memoManageshow: false,
  memolist:''
}
// mutations
const mutations = {
  setmemoIcon(state, code) {
      state.icon = code
  },
  setmemoTitle (state, code) {
    state.title = code
  },
  setmemoData (state, code) {
    state.data = code
  },
  setmemoshow (state, code) {
    state.memoManageshow = code
  },
  setmemolist (state,code) {
    state.memolist = code
  }
}
//acions 
const actions = {
  memoManage({state, commit},{icon, title, data}){
    commit('setmemoIcon',icon)
    commit('setmemoTitle',title)
    commit('setmemoData',data)
  },
  getmomelist({state,commit}){
    getMemo().then((res)=>{
      if (res.code ==200){
        commit('setmemolist',res.data)
      }else{
        commit('setmemolist',null)
      }
    })
  }
}
export default {
  state,
  actions,
  mutations
}