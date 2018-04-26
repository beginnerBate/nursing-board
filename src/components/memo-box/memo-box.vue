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
            <!-- 静态数据模拟 -->
            <!-- <tr>
              <th>下班关电脑</th>
              <th>下班关电脑不要忘记倒垃圾灌水点</th>
              <th>2017-09-16</th>
              <th colspan="2"><span class="btn btn-warning" @click="edit">修改</span><span class="btn btn-risk">删除</span></th>              
            </tr> -->
            <tr v-if='memolist' v-for="(item,index) in memolist" :key="index">
              <th>{{item.title}}</th>
              <th>{{item.context}}</th>
              <th>{{item.createTime|formatDate}}</th>
              <th colspan="2"><span class="btn btn-warning" @click="edit(item)">修改</span><span class="btn btn-risk" @click="remove(item.id)">删除</span></th>
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
import {formatDate} from 'common/js/date'
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
  computed:{
    ...mapState({
      memolist: state=>state.memo.memolist,
      show: state => state.memo.memoManageshow
    })
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods: {
    add () {
      this.$store.commit('setmemoshow',true)
      this.$store.dispatch('memoManage',{title:"备忘录添加", icon:"fa-plus", data:{title:"",txt:""}})
    },
    edit (item) {
      this.$store.commit('setmemoshow',true)
      this.$store.dispatch('memoManage',{title:"备忘录修改", icon:"fa-pencil-square-o", data:{title:item.title,txt:item.context,id:item.id}})     
    },
    remove(id){
      this.$store.commit('setmemoshow',true)
      this.$store.dispatch('memoManage',{title:"删除备忘录", icon:"fa-delete", data:{id:id}})
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


