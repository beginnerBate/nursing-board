<template>
  <div>
    <!-- popup-box -->
    <popup-box :title="title" :min="min" :max="max">
      <div class="login-bg">
        <ul class="login-list">
          <template v-if="WList" v-for="(item,index) in WList">
            <li @click="toLogin(item)" :key="index">
              <span>{{item.wardName}}</span>
            </li>
          </template>
        </ul>
      </div>
    </popup-box>
  </div>
</template>

<script>
import PopupBox from 'base/popup-box/popup-box'
import {getWard} from 'api/wardInfo.js'
export default {
  components:{PopupBox},
  data() {
    return {
      title: '请点击所属区域登录',
      min:true,
      max: true,
      WList:[]
    }
  },
  created () {
    this.getWard()
  },
  methods: {
    toLogin(item) {
      this.$store.commit('setLogin','login')
      this.$store.commit('changeheadText',item.wardName)
      this.$store.commit('setwardId',item.wardId)
    },
    getWard () {
      getWard().then((res)=>{
        if (res.code==200) {
          this.WList = res.data
        }
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
.login-bg
  background-image url('./login_bag.jpg')
  background-size 100% 100%
  background-repeat no-repeat
  height 100%
.login-list
  display flex
  width 100%
  height 100%
  flex-wrap wrap
  justify-content flex-start
  align-content space-around
  li
    flex 1 1 18%
    margin 0 18px
    border-radius 8px
    font-size 20px
    letter-spacing 3px
    cursor pointer
    height 70px
    display flex
    justify-content center
    align-items center
</style>
