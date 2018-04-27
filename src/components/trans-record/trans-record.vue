<template>
  <div class="message-box-wrapper">
    <div class="message-box">
      <div class="temp-record">
        <header class="message-box-header">
          <h1>{{title}}(床号:{{item.bedNumber}})</h1>
          <div>
            <span @click="closeMessage()">×</span>
          </div>
        </header>
        <div class="temp-record-content">
          <section>
            <ul class="trans-list">
              <li>
                <span>液瓶容量:</span>
                <span>{{item.volum}} mL</span>
              </li>
              <li>
                <span>剩余容量:</span>
                <span>{{item.surplus}} mL</span>
              </li>
              <li>
                <span>液滴速度:</span>
                <span>{{item.dotRate}} 滴/分</span>
              </li>
              <li>
                <span>当前滴数:</span>
                <span>{{item.dotCnt}} 滴</span>
              </li>              
              <li>
                <span>输液计时:</span>
                <span>{{item.timer}} 秒</span>
              </li>              
              <li>
                <span>状态:</span>
                <span>{{item.status|formatStatus}}</span>
              </li>              
              <li>
                <span>记录时间:</span>
                <span>{{item.recordTime|formatDate}}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/js/date.js'
export default {
  props: {
    title: {
      type: String,
      default:'输液数据详情 '
    },
    item:''
  },
  filters:{
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    },
    formatStatus(status) {
      if (status == 0) {
        return '运行'
      }else {
        return '阻断'
      }
    }
  },
  methods: {
    closeMessage(){
      this.$emit('hide')
    }
  }
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
  background #ffffff
.message-box-header
  display flex
  justify-content space-between
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
  display flex
  flex-direction column
  header, footer 
    flex 0 0 40px
    background #398dee
    display flex    
    align-items center 
    color #ffffff
.trans-list
  border 1px solid #d4d4d4
  border-bottom none 
  li
    padding 8px 12px
    display flex
    width 400px
    justify-content space-between
    line-height 36px
    border-bottom 1px solid #d4d4d4
    span
     flex 1 1 50%
     color: #393939;
  li:nth-of-type(2n-1)
    background #fafafa      
</style>