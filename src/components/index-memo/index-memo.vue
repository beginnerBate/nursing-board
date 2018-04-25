<template>
  <div class="index-doctor">
    <base-box title="备忘录" icon="fa-pencil" @open="open()">
      <div class="index-memo-wrapper">
        <table class="memo-table">
          <thead>
            <tr>
              <th>标题</th>
              <th>发布时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>我是一条备忘录</th>
              <th>2017-05-12 12:25:59</th>
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
export default {
  components: {
    BaseBox
  },
  created(){
    this.getMemo()
  },
  methods: {
    open() {
      this.$store.commit('setMemo', true)
    },
    getMemo () {
      getMemo().then((res)=>{
        console.log(res)
      })
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

