<template>
  <div v-if="tempList" class="temp-list-wrapper" ref="tempList">
    <ul class="temp-list">
      <li class="temp-list-title">
        <span>温度（℃）</span>
        <span class="temp-list-time">记录时间</span>
      </li>
      <li v-for="(item, index) in tempList" :key="index">
        <span>{{item.temp}}</span>
        <span class="temp-list-time">{{item.time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props:{
    tempList: {
      type: [Object,Array],
      default: ''
    }
  },
  mounted () {
  this.$nextTick(() => {
  this.scroll = new Bscroll(this.$refs.tempList, {
      click:true
  })
  })
},
}
</script>
<style lang="stylus" scoped>
.temp-list-wrapper
  // height 100%
  overflow hidden
  flex 1
.temp-list
  display flex
  flex-direction column 
  li
    flex 1 1 calc((60vh - 80px) / 11)
    max-height calc((60vh - 80px) / 11)
    color #999999
    font-size 14px
    padding 0 6px
    border-bottom 1px solid  #ededed
    display flex
    justify-content space-around
    align-items center
  li:nth-of-type(2n+1)
    background #ffffff
  .temp-list-title
    font-size 14px
    font-weight 600
    color #393939
</style>


