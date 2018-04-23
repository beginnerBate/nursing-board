<template>
  <div class="memo-box">
    <popup-box title="备忘录列表" icon='fa-pencil' :min="min" :max="max" type='close' @hide="$store.commit('setMemo',false)">
      <div class="memo-box-content">
        <table class="memo-box-table">
          <thead>
            <tr>
              <th>标题</th>
              <th>内容</th>
              <th>时间</th>
              <th width=240px><span class="fa fa-plus memo-add" @click="add()"></span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>下班关电脑</th>
              <th>下班关电脑不要忘记倒垃圾灌水点</th>
              <th>2017-09-16</th>
              <th colspan="2"><span class="btn btn-warning" @click="edit">修改</span><span class="btn btn-risk">删除</span></th>
            </tr>
          </tbody>
        </table>
      </div> 
    </popup-box>
    <!-- memo-manage -->
    <memo-manage v-if="show"></memo-manage>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
import MemoManage from 'components/memo-box/memo-manage'
import {mapState} from 'vuex'
export default {
  components: {
    PopupBox,
    MemoManage
  },
  data() {
    return {
      min: false,
      max: false
    }
  },
  computed: {
    ...mapState({
      show: state => state.memo.memoManageshow
    })
  },
  methods: {
    add () {
      this.$store.commit('setmemoshow',true)
      this.$store.dispatch('memoManage',{title:"备忘录添加", icon:"fa-plus", data:{title:"",txt:""}})
    },
    edit () {
      this.$store.commit('setmemoshow',true)
      this.$store.dispatch('memoManage',{title:"备忘录修改", icon:"fa-pencil-square-o", data:{title:"备忘录01",txt:"2018年开始哈哈哈"}})     
    }
  },
}
</script>
<style lang="stylus" scoped>
.memo-box-table
  width 100%
  text-align center
  thead
    font-size 18px
    line-height 40px
    font-weight 600
    letter-spacing 2px
  tbody
    line-height 38px
.memo-add
  cursor pointer
.memo-box-content
  width 80vw
</style>


