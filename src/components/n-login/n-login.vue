<template>
  <div>
    <!-- popup-box -->
    <popup-box :title="title" :min="min" :max="max">
      <div class="login-bg">
        <ul class="login-list">
          <li @click="toLogin()">内科一病区</li>
        </ul>
      </div>
    </popup-box>
  </div>
</template>

<script>
import PopupBox from 'base/popup-box/popup-box'
export default {
  components:{PopupBox},
  data() {
    return {
      title: '请点击所属区域登录',
      min:true,
      max: true
    }
  },
  methods: {
    toLogin() {
      // 登录模拟
      // this.loading = true
      // login().then((res)=>{
      //   this.loading = false
      // })
      this.$store.commit('setLogin','login')
      this.$store.commit('changeheadText','内科一病区')
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
  justify-content center
  align-items  center
  li
    padding 20px 50px
    border-radius 8px
    font-size 20px
    // font-weight 600
    letter-spacing 3px
    cursor pointer
</style>
