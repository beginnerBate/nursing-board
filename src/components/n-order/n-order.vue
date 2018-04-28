<template>
  <div class="n-common n-order">
    <!-- n-order-top -->
    <section class="n-common-top">
      <ul class="order-list">
        <li class="order-list-date">
          <div></div>
          <div>{{startTime}} 周一</div>
          <div>{{startTime|dateAdd(2)}} 周二</div>
          <div>{{startTime|dateAdd(3)}} 周三</div>
          <div>{{startTime|dateAdd(4)}} 周四</div>
          <div>{{startTime|dateAdd(5)}} 周五</div>
          <div>{{startTime|dateAdd(6)}} 周六</div>
          <div>2{{startTime|dateAdd(7)}} 周日</div>
        </li>
        <li class="order-list-item" v-for="(item,index) in list" :key="index">
          <div>
            <h1>{{item.name}}</h1>
            <!-- <h1>医师</h1> -->
          </div>
          <div v-for="(data,index) in item.list" :key="index">
            <img :src='"./"+data.type+".png"' alt="">
          </div>
          <!-- <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div> -->
        </li>
        <!-- <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li> -->
      </ul>
    </section>
    <!-- n-order-bottom -->
    <section class="n-common-bottom">
      <!-- footer -->
      <n-footer>
        <ul class="order-footer">
          <li>
            <span class="btn-cancle">上周</span>
          </li>
          <li>
            <span class="btn-cancle" @click="changeDate()">
              <label for="data">日期选择</label>
            </span>
            <input type="date" name="data" id="data" hidden>
          </li>
          <li>
            <span class="btn-cancle">下周</span>
          </li>
          <li>
            <span class="btn-select" @click="doctorData()">医生</span>
          </li>
          <li>
            <span class="btn-select" @click="nurseData()">护士</span>
          </li>          
        </ul>
      </n-footer>
    </section>
  </div>
</template>

<script>
import NFooter from 'components/n-footer/n-footer'
import {getOrder} from 'api/order'
import {dateAdd} from 'common/js/date'
export default {
  components: {
    NFooter
  },
  data () {
    return {
      types: '0',
      time:'2018-1-1',
      week:'',
      startTime:'',
      list:'',
    }
  },
  filters: {
    dateAdd: function(value,day) {
      let startDate = new Date(value)
        startDate = startDate.getTime() + 1000 * 60 * 60 * 24 * parseInt(day)
        startDate = new Date(startDate);
        var nextStartDate = startDate.getFullYear()+"-"+(startDate.getMonth()+1)+"-"+startDate.getDate();
      return nextStartDate
    }
  },
  computed:{
    ranage(){
      let startDate = new Date(this.startTime)
        startDate = +startDate + 1000*60*60*24;
        startDate = new Date(startDate);
        var nextStartDate = startDate.getFullYear()+"-"+(startDate.getMonth()+1)+"-"+startDate.getDate();
        return nextStartDate
    }
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'病区排班'})
    this.getOrder()
  },
  watch: {
    types(newValue, oldValue) {
      this.getOrder()
    }
  },
  methods: {
    changeDate () {
      document.getElementById('data').hidden=false
    },
    getOrder () {
      getOrder({types:this.types, time: this.time}).then((res)=>{
        if (res.code ==200) {
          this.week = res.data.week
          this.startTime = res.data.startTime
          this.list = res.data.list
          console.log(this.list)
        }
      })
    },
    nurseData(){
       this.types = 0
    },
    doctorData(){
       this.types = 1
    }
  }
}
</script>
