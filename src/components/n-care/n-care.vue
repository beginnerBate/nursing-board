<template>
  <div class="n-common">
    <!-- n-order-top -->
    <section  class="n-common-top care-top" ref="carewrapper">
      <ul class="care-list">
        <li v-for="(item,index) in dataList" :key="index" class="care-list-item">
          <div class="item-title">
              <span>{{item.docHead}}</span>
              <!-- <span>简介</span> -->
              <span>患者({{item.patcount}})</span>
              <span class="fa " :class="{'icon-page1': !(index===i),'icon-icon_page_close': (index===i)}" @click="showBq(index)" ref='showBtn'></span>
          </div>
          <div class="item-content" v-show='index===i? false : true'>
            <div v-for="(itemchild,n) in item.listForPat" :key="n+100" @click="showCare(itemchild.patId)">
              <section class="rycw">
                <header>
                  <h1>{{itemchild.bedIn}}</h1>
                  <p class="rycw-title">
                    <span>轻</span>
                    <span></span>
                  </p>
                </header>
                <div class="rycw-info">
                  <p class="rycw-info-item">
                    <span>{{itemchild.patName}}</span>
                    <span>{{itemchild.hospNo}}</span>
                  </p>
                  <p class="rycw-info-item">
                    <span>{{itemchild.sex|sex}} {{itemchild.age}}</span>
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
                    <span>医护:<i>{{itemchild.nurseResp}}</i>/{{item.docHead}}</span>
                  </p>
                </div>      
              </section> 
              <!-- <section class="rycw medium" v-if="n%4 ==2">
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
                    <span> 36岁</span>
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
              </section>   -->
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
    <care-manage v-show="show"></care-manage>
  </div>
</template>

<script>
import NFooter from 'components/n-footer/n-footer'
import Bscroll from 'better-scroll'
import {datalist} from 'api/care'
import CareManage from 'components/care-manage/care-manage'
import {mapState,mapActions} from 'vuex'
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
  filters:{
    sex: function(value){
      return value==0? '女' : '男'
    }
  },
  computed: {
    ...mapState({
      show: state => state.care.careManageshow
    })
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
              if (res.code =200) {
                that.dataList = res.data
              }else{
                that.dataList = ''
              }
            })
        },
      showBq (index) {
        this.i === index ? this.i = -1 :  this.i = index
      },
      showCare(patId) {        
        this.getcaredata({"patId":patId})
      },
      ...mapActions(['getcaredata'])
    }
}
</script>
