<template>
  <div class="duty-today">
    <popup-box :min="min" :max="max" :icon="icon" :title="title" type='close' @hide="$store.commit('setDuty',false)">
      <div class="duty-today-wrapper">
        <!-- 今日值班列表 -->
        <section>
          <div class="duty-show">
            <h1>一线</h1>
            <ul>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军发</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军吧吧</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
            </ul>
            <h1>二线</h1>
            <ul>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军发</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军吧吧</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span class="btn btn-del">删除</span>
              </li>
            </ul>
          </div>
        </section>
        <!-- 今日值班选择 -->
        <section class="duty-select">
            <form>
              <div><label>分类:</label></div>
              <div>
                <v-select v-if="selectList" :listdata="selectList" v-model="selectValue" valueItem='一线'></v-select>
              </div>
              <div class="duty-select-item"><input type="text" class="input"></div>
              <div><button class="btn btn-info">添加</button></div>
            </form>
        </section>
        <!-- 今日值班医生/护士 -->
        <section class="duty-select-list">
          <ul>
            <li><span>刘生长</span></li>
            <li><span>虎妈</span></li>
            <li><span>连连看</span></li>
            <li><span>对对对</span></li>
            <li><span>去去去</span></li>
            <li><span>我问问</span></li>
            <li><span>通天塔</span></li>
            <li><span>云音乐</span></li>
            <li><span>通天塔</span></li>
            <li><span>滚滚滚</span></li>
            <li><span>哈哈哈</span></li>
            <li><span>刘生长</span></li>
            <li><span>虎妈</span></li>
            <li><span>连连看</span></li>
            <li><span>对对对</span></li>
            <li><span>去去去</span></li>
            <li><span>我问问</span></li>
            <li><span>通天塔</span></li>
            <li><span>云音乐</span></li>
            <li><span>通天塔</span></li>
            <li><span>滚滚滚</span></li>
            <li><span>哈哈哈</span></li>
            <li><span>刘生长</span></li>
            <li><span>虎妈</span></li>
            <li><span>连连看</span></li>
            <li><span>对对对</span></li>
            <li><span>去去去</span></li>
            <li><span>我问问</span></li>
            <li><span>通天塔</span></li>
            <li><span>云音乐</span></li>
            <li><span>通天塔</span></li>
            <li><span>滚滚滚</span></li>
            <li><span>哈哈哈</span></li>
          </ul>
        </section>
      </div>
    </popup-box>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
import VSelect from 'base/v-select/v-select'
import {mapState} from 'vuex'
export default {
  components:{PopupBox, VSelect}, 
  props: {
    min: false,
    max: false,
    dutyList:'',
    selectList:{
      default:() => [{text:'一线',value:'01'},{text:'二线',value:'02'},{text:'三线',value:'03'}]
    }
  },
  data () {
    return {
      selectValue:''
    }
  },
  computed: {
    ...mapState({
      title: state => state.duty.title,
      icon: state => state.duty.icon,
      onDuty: state => state.duty.onDuty
    })
  },
  created () {
    console.log(this.title)
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.duty-show
  width 100%
  font-size 18px
  padding-top 12px
  h1
    text-indent 40px
  ul
    display flex
    flex-wrap wrap 
    margin-bottom 12px   
    li
      flex 1 1 25%
      max-width 25%
      padding 10px 40px
      padding-right 0
      display flex
      align-items center
      .btn-del
        max-width 50px
        margin-left 15px
        font-size 16px
      span:first-child
        flex 0 0 30%
.duty-select
  font-size $fs-medium-l
  padding 10px 32px
  form
    display flex
    align-items center
    label
      padding-right 20px
  .duty-select-item
    flex 1
    padding-left 20px
    .input
      width 100%
      border-radius 0
.duty-select-list
  font-size  $fs-medium-m
  padding 10px 32px
  ul
    display flex
    flex-wrap wrap
    li
      flex 1 1 20%
      max-width 20%
      padding 6px
      span
        display flex
        justify-content center
        align-items center
        border-radius 4px
        padding 10px 0
        width 100%
</style>


