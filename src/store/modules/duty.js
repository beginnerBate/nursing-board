// initial state
const state = {
  icon:'',
  title:'',
  onDuty:'',
  dutyList:''
}
// mutations
const mutations = {
  setIcon (state,code) {
   state.icon = code
  },
  setTitle (state, code) {
    state.title = code
  },
  ondutyOk(state,code){
    state.onDuty = code
  }
}

// actions
const actions = {
  openDuty ({state,commit}, {icon, title}) {
    commit('setIcon',icon)
    commit('setTitle',title)
    const data= [{name:'李晓明',type:'一线'}]
    setTimeout(()=>{
      commit('ondutyOk', data)
    },3000)
  }
}

export default {
  state,
  actions,
  mutations
}