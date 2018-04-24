// 备忘录管理
const state = {
  title:'',
  data:'',
  careManageshow: false
}
// mutations
const mutations = {
  setcareTitle (state, code) {
    state.title = code
  },
  setcareData (state, code) {
    state.data = code
  },
  setcareshow (state, code) {
    state.memoManageshow = code
  }
}
//acions 
const actions = {
  careManage({state, commit},{icon, title, data}){
    commit('setcareTitle',title)
    setTimeout (()=>{
      commit('setcareData',data)
    },3000)
  }
}
export default {
  state,
  actions,
  mutations
}