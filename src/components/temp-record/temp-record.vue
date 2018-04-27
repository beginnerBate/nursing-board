<template>
  <div class="message-box-wrapper">
    <div class="message-box">
      <div class="temp-record">
        <header class="message-box-header">
          <h1>{{title}}(床号:{{bedNumber}})</h1>
          <div>
            <span @click="closeMessage()">×</span>
          </div>
        </header>
        <div class="temp-record-content">
          <section class="temp-record-left">
            <!-- 体温记录 -->
            <temp-list :tempList="tempListData1"></temp-list>
            <footer>
              <span @click="prvePage()" :class="{disabled: page == 1}">上一页</span>
              <i><i class="currentpage">{{page}}</i>/{{pageCount}}</i>
              <span @click="nextPage()" :class="{disabled: pageCount==page}">下一页</span>
            </footer>
          </section>
          <section class="temp-record-right">
            <!-- 体温图表 -->
            <temp-chart :tempData="tempListData"></temp-chart>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/js/date.js'
import TempList from 'components/temp-list/temp-list'
import TempChart from 'components/temp-chart/temp-chart'
import {getTempByBed} from 'api/temp' //根据床号获取体温数据
export default {
  props: {
    title: {
      type: String,
      default:'体温历史记录 '
    },
    bedNumber:{
      type:String,
      require: true
    }
  },
  data(){
    return{
      tempListData:[],
      tempListData1:[],
      page: 1,
      rows: 10,
      pageCount:'',
      lastPage:''
    }
  },
  created() {
    this.getTempByBed()
  },
  watch: {
    page(newValue, oldValue) {
      this.getTempByBed()
    }
  },
  methods: {
    // 根据床号获取温度
    getTempByBed(){
      if(this.bedNumber.length == 0){ return false}
      let mydata = {
        page: this.page,
        rows: this.rows,
        bedNumber: this.bedNumber
      }
      getTempByBed(mydata).then((res)=>{
        if (res.code=='200') {
         
          // 分页处理
          // this.tempListData = []
          this.tempListData1 = []
          this.page = res.curPage
          this.pageCount = res.pageCount
          let array = []
          for (let i=0; i<res.data.length; i++) {
            // this.tempListData.push({temp: res.data[i].temperatureValue,time: this.formatDate(res.data[i].recordTime)})
            this.tempListData1.push({temp: res.data[i].temperatureValue,time: this.formatDate1(res.data[i].recordTime)})
          }
         return Promise.resolve((res.pageCount-(res.curPage-1)))            
        }else {
          this.tempListData1 = []
        }
      }).then((res)=>{
        this.lastPage = res
        let mydata = {
          page: this.lastPage,
          rows: this.rows,
          bedNumber: this.bedNumber
        }
        getTempByBed(mydata).then((res)=>{
          //  console.log(res)
          if (res.code=='200') {
            // 分页处理
            this.tempListData = []
            let array = []
            for (let i=res.data.length-1; i>=0; i--) {
              this.tempListData.push({temp: res.data[i].temperatureValue,time: this.formatDate(res.data[i].recordTime)})
            }           
          }else {
            this.tempListData = []
          }
        })
      })
    },
    prvePage(){
      if(this.page==1) return
      this.page =  this.page -1
    },
    nextPage(){
      if( this.page>=this.pageCount){
        return
      }
      this.page = this.page + 1 
    },
    closeMessage(){
      this.$emit('hide')
    },
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'hh:mm:ss')
    },
    formatDate1(time) {
      let date = new Date(time)
      return formatDate(date, 'MM-dd hh:mm:ss')
    }
  },
  components: { TempList, TempChart}
}
</script>
<style lang="stylus" scoped>
.message-box-wrapper
  position fixed
  top 0 
  right 0
  bottom 0
  left 0
  background-color rgba(0,0,0,0.5)
  text-align center 
  font-size 0
  white-space nowrap
  overflow auto
.message-box-wrapper:after
  content ''
  display inline-block
  height 100%
  vertical-align middle
.message-box
  display inline-block
  vertical-align middle 
  text-align left 
  font-size 14px
  white-space normal
  min-width 80vw
  max-width 90vw
  min-height 60vh
  max-height 60vh
  background #ffffff
.message-box-header
  display flex
  justify-content space-between
  background #398dee
  h1    
    padding-left 20px
    font-size 16px
    letter-spacing 2px
    font-weight 600
  div
    color #dedede
    cursor pointer
    font-size 30px
    padding 10px
  div:hover
    color #ffffff
.temp-record
  min-height 60vh
  max-height 60vh
  display flex
  flex-direction column
  header
    flex 0 0 40px
    display flex    
    align-items center 
    color #ffffff
  .temp-record-content
    flex 1
    display flex
    .temp-record-left
      background-color #fafafa
      flex 1 1 250px
      max-width 260px
      display flex
      flex-direction column
      border-right 1px solid #d4d4d4
      footer
        flex 0 0 40px
        display flex
        justify-content space-around
        align-items center
        width 100%;
        color: #393939;
        i
          letter-spacing 2px
        span 
          display inline-block
          line-height 30px
          padding 0 12px
          border-radius 4px
          background-color #0056b9
          color #ffffff
          margin 0 12px
          cursor pointer
          height 30px
        span.disabled
          background-color #999
          color #393939  
    .temp-record-right
      flex 1
  .currentpage
    color #398dee
      
</style>