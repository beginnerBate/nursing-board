<template>
  <div class="memo-manage" :class="(title=='删除备忘录')?'del':''">
    <popup-box :title="title" :icon='icon' :off="off" @hide="$store.commit('setmemoshow',false)">
      <div class="memo-box-content">
        <form v-if="!(title=='删除备忘录')">
          <div>
            <label for="">标题:</label>
            <input type="text" class="input" v-model="data.title">
          </div>
          <div>
            <label for="">内容:</label>
            <textarea v-model="data.txt"></textarea>
          </div>
          <div>
            <span class="btn btn-theme" @click="post()">保存</span>
            <span class="btn btn-cancle" @click="$store.commit('setmemoshow',false)">取消</span>
          </div>
        </form>
        <section v-if="title=='删除备忘录'" class="del-content">
          <h1>确定删除备忘录么</h1>
            <div>
            <span class="btn btn-theme" @click="del()">确定</span>
            <span class="btn btn-cancle" @click="$store.commit('setmemoshow',false)">取消</span>
          </div>
        </section>
      </div> 
      <!-- notice -->
      <v-notice v-if="notice.type" :type="notice.type" :info="notice.info"></v-notice>
    </popup-box>
  </div>
</template>
<script>
import {addMemo, updateMemo,deleteMemo} from 'api/memo'
import PopupBox from 'base/popup-box/popup-box'
import {mapState} from 'vuex'
import VNotice from 'base/v-notice/v-notice'
export default {
  components: {
    PopupBox,
    VNotice
  },
  data() {
    return {
      off: true,
      notice:{
        type:'',
        info:'',
      }
    }
  },
  computed: {
    ...mapState({
      title: state => state.memo.title,
      icon: state => state.memo.icon,
      data: state => state.memo.data
    })
  },
  methods: {
    post() {
      // 判断是添加还是修改
      const that = this
      if (this.data.hasOwnProperty('id')===false) {
        // 添加
        this.notice.type = 'loading'
        this.notice.info = '添加中'
        addMemo({title: this.data.title, context: this.data.txt}).then((res)=>{
            if (res.code == '200') {
            // console.log('添加成功')
            that.notice.type = 'success'
            that.notice.info = '添加成功'
            that.$store.dispatch('getmomelist')
            that._display()
          }else {
            that.notice.type = 'error'
            that.notice.info = '添加失败'
            that._display()            
          }
        }).catch((err)=>{
            that.notice.type = 'error'
            that.notice.info = '添加失败'
            that._display()  
            console.log(err) 
        })
      }else {
        // 修改
        this.notice.type = 'loading'
        this.notice.info = '修改中'
        updateMemo({title: this.data.title, context: this.data.txt},this.data.id).then((res)=>{
            if (res.code == '200') {
            // console.log('添加成功')
            that.notice.type = 'success'
            that.notice.info = '修改成功'
            that.$store.dispatch('getmomelist')
            that._display()
          }else {
            that.notice.type = 'error'
            that.notice.info = '修改失败'
            that._display()            
          }
        }).catch((err)=>{
            that.notice.type = 'error'
            that.notice.info = '修改失败'
            that._display()  
            console.log(err) 
        })        
      }   
    },
    del(){
      const that =this
      deleteMemo(this.data.id).then((res)=>{
        // 删除
        this.notice.type = 'loading'
        this.notice.info = '删除中'
            if (res.code == '200') {
            // console.log('添加成功')
            that.notice.type = 'success'
            that.notice.info = '删除成功'
            that._display()
            that.$store.dispatch('getmomelist')
          }else {
            that.notice.type = 'error'
            that.notice.info = '删除失败'
            that._display()            
          }
        }).catch((err)=>{
            that.notice.type = 'error'
            that.notice.info = '删除失败'
            that._display()  
        })     
    },
    _display(){
      setTimeout(()=>{
        this.notice.type = ''
        this.notice.info = ''
      },1000)
    }
  },
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
.del-content
  flex 1
  flex-direction column
  height 100px
  justify-content space-around
  h1
    flex 1
    font-size 18px
    height 75%
    display flex
    align-items center
    justify-content center
  div
    display flex
    justify-content flex-end
</style>



