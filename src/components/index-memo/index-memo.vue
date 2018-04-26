<template>
  <div class="index-doctor">
    <base-box title="备忘录" icon="fa-pencil" @open="open()">
      <div class="index-memo-wrapper">
        <table class="memo-table">
          <thead>
            <tr>
              <th>发布时间</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if='memolist' v-for="(item,index) in memolist" :key="index">
              <th>{{item.createTime|formatDate}}</th>
              <th>{{item.context}}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </base-box>
  </div>
</template>
<script>
import BaseBox from 'base/base-box/base-box'
import {getMemo} from 'api/memo.js'
import {formatDate} from 'common/js/date'
import {mapState,mapActions} from 'vuex'
export default {
  components: {
    BaseBox
  },
  computed:{
    ...mapState({
      memolist: state=>state.memo.memolist
    })
  },
  created(){
    this.getMemo()
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods: {
    open() {
      this.$store.commit('setMemo', true)
    },
    getMemo () {
      this.$store.dispatch('getmomelist')
      console.log(this.memolist)
    }
  }
}
</script>
<style lang="stylus" scoped>
.memo-table
  width 100%
  thead,tbody
    line-height 36px

</style>

