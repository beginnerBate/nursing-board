<template>
  <div class="n-common">
    <!-- n-order-top -->
    <section class="n-common-top">
      <div class="m-temp" ref="tempWrapper">
        <div class="m-temp-content">
          <template v-for="(item, index) in listData">
          <div class="m-temp-item" :key="index" @touchstart="showTemp(item.bedNumber)">
            <p class="bed-num">床号：{{item.bedNumber}}</p>
            <p class="temp-txt">{{item.temperatureValue}}℃</p>
            <p class="time">{{item.recordTime|formatDate}}</p>
          </div>
          </template>
          <template v-for="(item,index) in nullData">
            <div class="m-temp-item" :key="item + index+ 1000" style="background:transparent;box-shadow:none"></div>
          </template>
        </div>
        <!-- temp-record -->
        <temp-record v-if="showBedNumber" :bedNumber= "showBedNumber" @hide="showBedNumber=''"></temp-record>
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
import {getTemp} from 'api/temp.js'
import {formatDate} from 'common/js/date.js'
import Bscroll from 'better-scroll'
import TempRecord from 'components/temp-record/temp-record'
import NFooter from 'components/n-footer/n-footer'
export default {
  components: {
    NFooter,TempRecord
  },
  data() {
    return {
      listData: '',
      nullData:["1","1","1","1","1","1","1","1","1","1","1","1","1"],
      tempDateTimer:'',
      startTime:'',
      showBedNumber:''
    }
  },
  filters:{
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'hh:mm:ss')
      }
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'体温监测'})
   this.getTempData()
   let that = this
   this.tempDateTimer = setInterval(function(){
      that.getTempData()
   },2000)
  },
  mounted () {
    this.$nextTick(() => {
    this.scroll = new Bscroll(this.$refs.tempWrapper, {
        click:true
    })
    })
  },
  destroyed () {
    // 清除定时器
    clearInterval(this.tempDateTimer)
  },
  methods:{
    getTempData () {
      getTemp().then ((res)=>{
        if (res.code == '200') {
          this.listData = res.data
        }else{
          this.listData = ''
        }  
      })
    },
    // 显示弹出框
    showTemp(num){
      this.showBedNumber = num
    }
  }
}
</script>

