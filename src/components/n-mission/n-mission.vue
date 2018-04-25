<template>
  <div class="n-common">
    <section class="n-common-top n-miss">
      <div class="n-miss-left">
        <div class="miss-menu-h">护士宣教</div>
        <router-link to="/mission/video" tag="div" class="miss-menu-item">
          <span><i class="fa fa-file-video-o"></i></span>
          <span>视频</span>
          <span>2</span>
        </router-link>
        <router-link to="/mission/file" tag="div" class="miss-menu-item">
          <span><i class="fa fa-file-word-o"></i></span>
          <span>文档</span>
          <span>1</span>        
        </router-link>
      </div>
      <div class="n-miss-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </section>
    <section class="n-common-bottom">
      <!-- footer -->
      <n-footer>
      </n-footer>
    </section>
  </div>
</template>

<script>
import NFooter from 'components/n-footer/n-footer'
export default {
  components: {
    NFooter
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'护士宣教'})
  }
}
</script>
