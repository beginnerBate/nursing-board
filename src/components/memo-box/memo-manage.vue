<template>
  <div class="memo-manage">
    <popup-box :title="title" :icon='icon' :off="off" @hide="$store.commit('setmemoshow',false)">
      <div class="memo-box-content">
        <form>
          <div>
            <label for="">标题:</label>
            <input type="text" class="input" v-model="data.title">
          </div>
          <div>
            <label for="">内容:</label>
            <textarea v-model="data.txt"></textarea>
          </div>
          <div>
            <span class="btn btn-theme">保存</span>
            <span class="btn btn-cancle">取消</span>
          </div>
        </form>
      </div> 
    </popup-box>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
import {mapState} from 'vuex'
export default {
  components: {
    PopupBox
  },
  data() {
    return {
      off: true
    }
  },
  computed: {
    ...mapState({
      title: state => state.memo.title,
      icon: state => state.memo.icon,
      data: state => state.memo.data
    })
  }
}
</script>
<style lang="stylus" scoped>
.memo-box-content>form
  height 360px
  display flex
  flex-direction column
  width 100%
  div
    margin 10px 20px
    display flex
    &:nth-child(2)
      flex 1
    input,textarea
      flex 1
      margin-left 15px
      outline none
      font-size 16px
  div:last-child
    justify-content flex-end
  div:first-child
    align-items center

</style>



