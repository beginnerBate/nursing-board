<template>
  <div class="n-header">
    <div class="n-header-left">
      <span><i class="fa icon-icon1_nav"></i> 智能护理</span>
      <span> {{$store.state.headmenu}}</span>
      <span> {{$store.state.headText}}</span>
    </div>
    <div class="n-header-right">
      <span class="btn btn-danger" @click="toExit()"><i class="fa fa-power-off"></i></span>
      <span class="btn btn-normal" @click="changeTheme()"><i class="fa" :class="themeIcon"></i></span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    themeIcon () {
      return this.$store.state.themeType == 'theme-day'? 'fa-moon-o' : 'fa-sun-o'
    }
  },
  methods: {
    changeTheme() {
      this.$emit('changeTheme')
    },
    toExit(){
      this.$store.commit('setLogin','')
    }
  }
}
</script>