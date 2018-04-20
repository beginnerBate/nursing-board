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
                <span>删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span>删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span>删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span>删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span>删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span>删除</span>
              </li>
              <li>
                <span>曹军</span>
                <span>删除</span>
              </li>
            </ul>
          </div>
        </section>
        <!-- 今日值班选择 -->
        <section class="duty-select">
            <form>
              <label>分类</label>
              <div>
                <v-select :listdata="selectList" v-model="selectValue" valueItem='一线'></v-select>
              </div>
              <div><input type="text"></div>
            </form>
        </section>
      </div>
    </popup-box>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
import VSelect from 'base/v-select/v-select'
export default {
  components:{PopupBox, VSelect},
  props: {
    min: false,
    max: false,
    icon:'',
    title:'',
    dutyList:'',
    selectList:{
      default:() => [{text:'一线',value:'01'},{text:'二线',value:'02'},{text:'三线',value:'03'}]
    },
    selectValue:'',
    options:[
          {text:'输液监控器',value:'01'},
          {text:'体温计',value:'03'},
        ],
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.duty-show
  width 100%
  h1
    font-size 18px
    text-indent 20px
  ul
    display flex
    flex-wrap wrap    
    li
      flex 1 1 25%
      max-width 25%
      padding 10px
.duty-select
  font-size $fs-medium-l
  padding 10px 32px
  form
    display flex
    label
      padding-right 20px

</style>


