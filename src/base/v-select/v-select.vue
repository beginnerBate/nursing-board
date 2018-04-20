<template>
  <div class="v-select">
    <input type="text" v-model="sData" @click='listShow = !listShow' class="input">
    <div v-show="listShow" class="v-select-list" ref="selectWrapper">
      <ul>
        <li v-for="(item,index) in listdata " :value="index" @click="onItemclick(index)" :key="index">{{item.text}}</li>
      </ul>
    </div>  
  </div>
</template>
<script>
// import Bscroll from 'better-scroll'
export default {
  name:'v-select',
  model: {
    prop: 'model',
    event: 'change'
  },
  props:{
    listdata: {
      type: [String, Array, Object],
      require: true
    },
    model: {
      type: [String, Number],
      require: true
    },
    valueItem: {
      type: [String, Number, Object],
      default:''
    }
  },
  data () {
    return {
      sData:this.valueItem,
      listShow: false,
    }
  },
  created() {
    console.log(this.listdata,this.valueItem)
  },
  methods: {
    onItemclick(value) {
      this.sData = this.list[value].text
      this.listShow = false
      this.$emit('change',this.list[value].value)
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-select
  position relative
.v-select-list
  width 100%
  max-height 160px
  // height 100px
  overflow-y auto
  background #ffffff
  border 1px
  margin-top 4px
  box-sizing border-box
  border-radius 8px
  border: 1px solid;
  border-color: #d6d6d6;
  position absolute
  z-index 1
.v-select-list ul
  width 100%
  li
    height 36px
    line-height 36px
    color #393939
    border-bottom: 1px solid #e2e2e2
    padding-left 20px
    cursor pointer
  li:hover
    background-color: #eaeaea
    color: #398dee
</style>


