<template>
  <div class="index-doctor">
    <base-box title="今日值班医生" icon="fa-user-md" @open="open()">
      <div class="index-doctor-wrapper">
        <ul class="index-list" v-if="dutylist">
          <li v-for="(item,index) in dutylist.frontLineList" :key='index+8'>
            <span class="name">{{item.userName}}</span>
            <span class="level">[一线]</span>
          </li>
          <li v-for="(item,index) in dutylist.secondLineList" :key='index+80'>
            <span class="name">{{item.userName}}</span>
            <span class="level">[二线]</span>
          </li>
          <li v-for="(item,index) in dutylist.threeLineList" :key='index+900'>
            <span class="name">{{item.userName}}</span>
            <span class="level">[三线]</span>
          </li>
        </ul>
      </div>
    </base-box>
  </div>
</template>
<script>
import BaseBox from 'base/base-box/base-box'
import {mapActions, mapState} from 'vuex'
export default {
  components: {
    BaseBox
  },
  computed: {
    ...mapState({
      dutylist: state=>state.duty.doctorlist
    })    
  },
  created(){
  },
  methods: {
    open() {
      this.$store.commit('setDuty',true)
      this.openDuty({icon:'fa-user-md',title:"今日值班医生"})
      this.$store.commit('setdutylist',this.dutylist)
      this.$store.commit('ondutyOk',0)
    },
    ...mapActions([
      'openDuty'
    ])
  }
}
</script>
