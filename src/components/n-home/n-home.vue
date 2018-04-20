<template>
  <div :class="this.$store.state.themeType">
    <!-- n-header -->
    <n-header @changeTheme='changeTheme()'></n-header>
    <!-- router-wiew -->
    <section class="n-home-content">
      <router-view></router-view>
    </section>
    <!-- n-menu transition <过渡效果>-->
    <transition name="slide-fade"><n-menu v-if="$store.state.tabdisplay"></n-menu></transition>
    <!-- login.vue -->
    <n-login v-if="!$store.state.isLogin"></n-login>
  </div>
</template>
<script>
import NHeader from 'components/n-header/n-header'
import NMenu from 'components/n-menu/n-menu'
import NLogin from 'components/n-login/n-login'
  export default {
    components: { 
      NHeader,
      NMenu,
      NLogin
    },
    data() {
      return {
        theme: this.$store.state.themeType
      }
    },
    methods: {
      changeTheme() {
        // this.theme=="theme-day"? this.theme="theme-night":this.theme="theme-day"
        if (this.$store.state.themeType === 'theme-day') {
          this.$store.commit('setTheme','theme-night')
        }else if (this.$store.state.themeType=== 'theme-night') {
          this.$store.commit('setTheme','theme-day')
        }
      }
    },
  }
</script>