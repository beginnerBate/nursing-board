import {getusers} from 'api/duty'
// initial state
const state = {
  icon:'',
  title:'',
  onDuty:'',
  doctorlist:'',
  nursinglist:''
}
// getter
const getters = {
  dutylist: state=>{
    if (state.onDuty==1){
      return state.nursinglist
    }
    if (state.onDuty==0){
      return state.doctorlist
    }
  }
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
  },
  setdoctorlist(state, code){
    state.doctorlist = code
  },
  setnursinglist(state, code) {
    state.nursinglist = code
  },
  setdutylist (state, code) {
    state.dutylist = code
  }
}

// actions
const actions = {
  openDuty ({state,commit}, {icon, title}) {
    commit('setIcon',icon)
    commit('setTitle',title)
  },
  getdutyList({state,commit}){
    getusers(0).then((res)=>{
      if(res.code==200){
        commit('setdoctorlist',res.data)
      }else{
        commit('setdoctorlist',null)
      }
    })
    getusers(1).then((res)=>{
      if(res.code==200){
        commit('setnursinglist',res.data)
      }else{
        commit('setnursinglist',null)
      }
    })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}