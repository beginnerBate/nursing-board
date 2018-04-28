// 责任医护
// platInfo 病人详情  orders 医嘱执行单
import {patInfo,orders} from 'api/care'
const state = {
  title:'',
  data:'',
  careManageshow: false,
  patInfo:'',
  orders:''
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
    state.careManageshow = code
  },
  setpatInfo (state, code) {
    state.patInfo = code
  },
  setorders (state, code) {
    state.orders = code
  }
}
//acions 
const actions = {
  careManage({state, commit},{icon, title, data}){
    commit('setcareTitle',title)
  },
  getcaredata ({commit},{patId}){
    patInfo(patId).then((res)=>{
      if(res.code ==200) {
        commit('setpatInfo',res.data)
      }
    })
    orders(patId).then((res)=>{
      if(res.code ==200) {
        commit('setorders',res.data)
      }
    })

  }
}
export default {
  state,
  actions,
  mutations
}