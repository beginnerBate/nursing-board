// 备忘录管理
const state = {
  title:'',
  icon:'',
  data:'',
  memoManageshow: false
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
  }
}
//acions 
const actions = {
  memoManage({state, commit},{icon, title, data}){
    commit('setmemoIcon',icon)
    commit('setmemoTitle',title)
    setTimeout (()=>{
      commit('setmemoData',data)
    },3000)
  }
}
export default {
  state,
  actions,
  mutations
}