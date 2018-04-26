// 备忘录管理
const state = {
  title:'',
  data:'',
  videoshow: false
}
// mutations
const mutations = {
  setvideoTitle (state, code) {
    state.title = code
  },
  setvideoData (state, code) {
    state.data = code
  },
  setvideoshow (state, code) {
    state.videoshow = code
  }
}
//acions 
const actions = {
  careManage({state, commit},{icon, title, data}){
    commit('setvideoTitle',title)
    commit('setvideoData',data)
  }
}
export default {
  state,
  actions,
  mutations
}