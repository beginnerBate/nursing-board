<template>
  <div class="duty-today">
    <popup-box :min="min" :max="max" :icon="icon" :title="title" type='close' @hide="$store.commit('setDuty',false)">
      <div class="duty-today-wrapper">
        <!-- 今日值班列表 -->
        <section>
          <div class="duty-show" v-if="dutylist">
            <h1 v-if="dutylist.frontLineList.length>0">一线</h1>
            <ul>
              <li v-for="(item,index) in dutylist.frontLineList" :key='index+1000'>
                <span class="name">{{item.userName}}</span>
                <span class="btn btn-del" @click="remove(item)">删除</span>
              </li>
            </ul>
            <h1 v-if="dutylist.secondLineList.length>0">二线</h1>
            <ul>
              <li v-for="(item,index) in dutylist.secondLineList" :key='index+2000'>
                <span class="name">{{item.userName}}</span>
                <span class="btn btn-del" @click="remove(item)">删除</span>
              </li>
            </ul>
            <h1 v-if="dutylist.threeLineList.length>0">三线</h1>
            <ul>
              <li v-for="(item,index) in dutylist.threeLineList" :key='index+3000'>
                <span class="name">{{item.userName}}</span>
                <span class="btn btn-del" @click="remove(item)">删除</span>
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
              <div class="duty-select-item">
                <input type="text" class="input" v-model="inputValue">
                </div>
              <div><span class="btn btn-info" @click="add()">添加</span></div>
            </form>
        </section>
        <!-- 今日值班医生/护士 -->
        <section class="duty-select-list">
          <ul v-if="dutylist">
            <!-- <li><span>刘生长</span></li> -->
            <li v-for="(item,index) in dutylist.allUsersList" :key='index+3000'>
              <span class="name" @click="selectduty(item)">{{item.userName}}</span>
            </li>
          </ul>
        </section>
      </div>
    </popup-box>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
import VSelect from 'base/v-select/v-select'
import {mapState,mapGetters} from 'vuex'
import {deleteduty,addDuty} from 'api/duty'
export default {
  components:{PopupBox, VSelect}, 
  props: {
    min: false,
    max: false,
    // dutylist:'',
    selectList:{
      default:() => [{text:'一线',value:0},{text:'二线',value:1},{text:'三线',value:2}]
    }
  },
  data () {
    return {
      selectValue:'',
      selectId:'',
      inputValue:''
    }
  },
  computed: {
    ...mapState({
      title: state => state.duty.title,
      icon: state => state.duty.icon,
      onDuty: state => state.duty.onDuty,
      nursinglist: state=>state.duty.nursinglist,
      doctorlist: state=>state.duty.doctorlist
    }),
    ...mapGetters(['dutylist'])
  },
  methods: {
    remove(item) {
      deleteduty(item.id).then((res)=>{
        if(res.code==200){
          this.$store.dispatch('getdutyList')
          // this._seresh()
        }
      })
    },
    add(){
      addDuty(this.selectId,{line:this.selectValue}).then((res)=>{
        if(res.code==200){
          this.$store.dispatch('getdutyList')
          // this._seresh()
        }
      })
    },
    selectduty(item){
      this.inputValue = item.userName
      this.selectId = item.id
    }
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


