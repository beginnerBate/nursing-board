<template>
  <div class="n-common">
    <!-- n-order-top -->
    <section class="n-common-top">
      <div class="m-trans">
        <div class="m-trans-wrapper" ref="transWrapper">
          <div class="m-trans-content">
            <template v-if="transDate" v-for="(item, index) in transDate">
            <div class="m-trans-item" :key="index" :class="[{wraning : item.surplus <= 20? true: false},{danger: item.surplus <= 10? true: false}]" @touchstart="showTrans(item)">
              <p>床号: {{item.bedNumber}}</p>
              <p>容量: {{item.volum}} <i>mL</i></p>
              <p>剩量: {{item.surplus}} <i>mL</i></p>
              <p>滴速: {{item.dotRate}}  <i> 滴/分</i></p>
            </div>
            </template>
            <template v-for="(item,index) in nullData">
              <div class="m-trans-item" :key="item + index+ 100" style="background:transparent;box-shadow:none"></div>
            </template>  
          </div>
        </div>
        <div class="m-trans-alarm">
          <div class="m-trans-alarm-warning">
            <!-- 20ml 报警 -->
            <h1>20mL 报警</h1>
            <div class="m-trans-alarm-wrapper" ref="alarm1">
              <ul>
                <li v-for="(item,index) in transDate20" :key="index">
                  <span>床号：{{item.bedNumber}}</span>
                  <span>剩量：{{item.surplus}}mL</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="m-trans-alarm-danger">
            <!-- 10ml 报警 -->
            <h1>10mL 报警</h1>
            <div class="m-trans-alarm-wrapper" ref="alarm2">
              <ul>
                <li v-for="(item,index) in transDate10" :key="index">
                  <span>床号：{{item.bedNumber}}</span>
                  <span>剩量：{{item.surplus}}mL</span>
                </li>         
              </ul>
            </div>
          </div>
          <!-- m-audio 声音报警 -->
          <!-- <m-audio ref="myAudio"></m-audio> -->
          <!-- <audio src="/static/sounds/warning.wav" id="alarmAudio"></audio> -->
        </div>
        <!-- trans-record -->
        <trans-record v-if="transItem" :item='transItem' @hide="transItem=''"></trans-record>
      </div>
    </section>
    <!-- n-order-bottom -->
    <section class="n-common-bottom">
      <!-- footer -->
      <n-footer>
      </n-footer>
    </section>
  </div>
</template>

<script>
import NFooter from 'components/n-footer/n-footer'
import {getTrans} from 'api/trans.js'
import {getServerTime} from 'api/getServerTime.js'
import Bscroll from 'better-scroll'
import {formatDate} from 'common/js/date.js'
import TransRecord from 'components/trans-record/trans-record'
import axios from 'axios'
export default {
  components: {
    NFooter,
    TransRecord
  },
  data() {
    return {
      transDate: '',
      transDate20: '',
      transDate10: '',
      nullData:["1","1","1","1","1","1","1","1","1","1","1","1","1"],
      transDateTimer:'',
      transDate20Timer:'',
      transDate10Timer:'',
      startTime: '',
      transItem:''
    }
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'输液监测'})
    this.getTransDate()
    this.getTransDate20()
    this.getTransDate10()
    // 实时监听
    let that = this
    this.transDateTimer = setInterval(function(){
      that.getTransDate()
    },2000)
    this.transDate20Timer = setInterval(function(){
      that.getTransDate20()
    },2000)
    this.transDate10Timer = setInterval(function(){
      that.getTransDate10()
    },2000)
  },
    methods: {
    getstartTime () {
        return axios.get('./static/config.json').then((res)=>{
        let mytime = res.data.startTime
        if (mytime && mytime.length>0){
          return Promise.resolve(mytime)
        }else {
          return getServerTime().then((res)=>{
            let mydate = new Date(res.sysDateTime)
            let date = new Date( mydate.setMinutes(mydate.getMinutes() - 10))
            this.startTime = formatDate(date, 'yyyy-MM-d hh:mm:ss')
            return Promise.resolve(this.startTime)
            // return Promise.resolve('2018-4-10 12:00:00')
          })
        }
      })     
      // return getServerTime().then((res)=>{
      //   let mydate = new Date(res.sysDateTime)
      //   let date = new Date( mydate.setMinutes(mydate.getMinutes() - 10))
      //   this.startTime = formatDate(date, 'yyyy-MM-d hh:mm:ss')
      //   // return Promise.resolve(this.startTime)
      //   return Promise.resolve('2018-4-10 12:00:00')
      // })
    },
   getTransDate () {
     this.getstartTime().then((data)=>{
      getTrans({startTime:data}).then((res)=>{
        if (res.code == '200') {
          this.transDate = res.data
        }else {
          this.transDate = ''
        }
      })
     })
   },
  //  &alarmValue1=10&&alarmValue2=20 排序
   getTransDate20 () {
     this.getstartTime().then((data)=>{
        getTrans({alarmValue1:10,alarmValue2:20,startTime: data,orderBy:'surplus'}).then((res)=>{
          if (res.code == '200') {
            this.transDate20 = res.data
          } else{
            this.transDate20 = ''
          }
        })
     })
   },
   getTransDate10 () {
      this.getstartTime().then((data)=>{
        getTrans({alarmValue1:10,startTime: data,orderBy:'surplus'}).then((res)=>{
          if (res.code == '200') {
            this.transDate10 = res.data
          }else {
            this.transDate10 = ''
          }
        })
     })
   },
   showTrans(item){
     console.log(item)
    this.transItem = item
   }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.alarm1, {
          click:true
      })
      this.scroll = new Bscroll(this.$refs.alarm2, {
          click:true
      })
      this.scroll = new Bscroll(this.$refs.transWrapper)
    })
  },
  destroyed () {
    // 清除定时器
    clearInterval(this.transDateTimer)
    clearInterval(this.transDate20Timer)
    clearInterval(this.transDate10Timer)
  }
}
</script>
