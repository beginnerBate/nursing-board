<template>
  <div class="n-common">
    <!-- n-order-top -->
    <section  class="n-common-top care-top" ref="carewrapper">
      <ul class="care-list">
        <li v-for="(item,index) in dataList" :key="index" class="care-list-item">
          <div class="item-title">
              <span>{{item.Doctor}}</span>
              <span>简介</span>
              <span>患者({{item.Prompt}})</span>
              <span class="fa " :class="{'icon-page1': !(index===i),'icon-icon_page_close': (index===i)}" @click="showBq(index)" ref='showBtn'></span>
          </div>
          <div class="item-content" v-show='index===i? false : true'>
            <div v-for="(itemchild,n) in item.Patients" :key="itemchild.length">
              <section class="rycw" v-if="n%4 ==3">
                <header>
                  <h1>{{itemchild.rycw}}</h1>
                  <p class="rycw-title">
                    <span>轻</span>
                    <span></span>
                  </p>
                </header>
                <div class="rycw-info">
                  <p class="rycw-info-item">
                    <span>文洁华</span>
                    <span>172739</span>
                  </p>
                  <p class="rycw-info-item">
                    <span>男 36岁</span>
                    <span>12-05</span>
                  </p>
                  <p class="rycw-info-day">
                    <span>142天</span>
                  </p>
                  <p class="rycw-title">
                    <span></span>
                    <span>径</span>
                  </p>
                  <p class="rycw-name">
                    <span></span>
                    <span>医护:<i>何耀琴</i>/黄丽雪</span>
                  </p>
                </div>      
              </section> 
              <section class="rycw medium" v-if="n%4 ==2">
                <header>
                  <h1>{{itemchild.rycw}}</h1>
                  <p class="rycw-title">
                    <span>轻</span>
                    <span></span>
                  </p>
                </header>
                <div class="rycw-info">
                  <p class="rycw-info-item">
                    <span>文洁华</span>
                    <span>172739</span>
                  </p>
                  <p class="rycw-info-item">
                    <span>男 36岁</span>
                    <span>12-05</span>
                  </p>
                  <p class="rycw-info-day">
                    <span>142天</span>
                  </p>
                  <p class="rycw-title">
                    <span></span>
                    <span>径</span>
                  </p>
                  <p class="rycw-name">
                    <span></span>
                    <span>医护:<i>何耀琴</i>/黄丽雪</span>
                  </p>
                </div>      
              </section> 
              <section class="rycw third" v-if="n%4 ==1">
                <header>
                  <h1>{{itemchild.rycw}}</h1>
                  <p class="rycw-title">
                    <span>轻</span>
                    <span></span>
                  </p>
                </header>
                <div class="rycw-info">
                  <p class="rycw-info-item">
                    <span>文洁华</span>
                    <span>172739</span>
                  </p>
                  <p class="rycw-info-item">
                    <span>男 36岁</span>
                    <span>12-05</span>
                  </p>
                  <p class="rycw-info-day">
                    <span>142天</span>
                  </p>
                  <p class="rycw-title">
                    <span></span>
                    <span>径</span>
                  </p>
                  <p class="rycw-name">
                    <span></span>
                    <span>医护:<i>何耀琴</i>/黄丽雪</span>
                  </p>
                </div>      
              </section>
              <section v-if="n%4 ==0">
                <header>{{itemchild.rycw}}</header>
                <div class="rycw-info-emptybed">
                    <i class="icon-emptybed"></i>
                </div>      
              </section>  
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- n-order-bottom -->
    <section class="n-common-bottom">
      <!-- footer -->
      <n-footer>
      </n-footer>
    </section>
    <!-- care-manage -->
    <care-manage></care-manage>
  </div>
</template>

<script>
import NFooter from 'components/n-footer/n-footer'
import Bscroll from 'better-scroll'
import {datalist} from 'api/care'
import CareManage from 'components/care-manage/care-manage'
export default {
  components: {
    NFooter, CareManage
  },
  data () {
    return {
      i: -1,
      itemShow: true,
      dataList: null,
      classObject:{
             'icon-page1': true,
             'icon-icon_page_close': false
           }
    }
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'责任医护'})
    this.fetchData()
  },
  mounted () {
      var that = this
        this.$nextTick(()=> {
          setTimeout(function(){
            that.scroll = new Bscroll(that.$refs.carewrapper,{click:true})
          },1000)

        })
    },
    methods: {
      fetchData () {
           this.error = this.post = null
           this.loading = true
            //  请求数据
            var that = this;
            datalist().then((res)=>{
              that.dataList = res.businessInfo.rows
              console.log(that.datalist)
            })
        },
      showBq(index) {
        this.i === index ? this.i = -1 :  this.i = index
       console.log(this.i,index)
      }
    }
}
</script>
