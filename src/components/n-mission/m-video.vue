<template>
  <div class="m-video">
   <ul class="m-video-list">
     <li class="m-video-list-item" @click="play()">
       <p><i class="fa fa-play-circle-o"></i></p>
       <p>护士宣教视频</p>
     </li>
   </ul>
<!-- 视频播放弹出窗 -->
<video-play v-if="$store.state.mission.videoshow"></video-play>
  </div>
</template>
<script>
import VideoPlay from './video-play'
export default {
  components:{
    VideoPlay
  },
  methods: {
    play() {
      let mydata = [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }]
      this.$store.commit('setvideoTitle','护士宣教视频')
      this.$store.commit('setvideoData',mydata)
      this.$store.commit('setvideoshow',true)
    }      
  }
}
</script>
<style lang="stylus" scoped>
.m-video
  width 100%
.m-video-list
  display flex
  flex-wrap wrap
.m-video-list-item
  padding-top 15px
  flex 0 0 200px
  height 120px
  margin 15px
  background #def4ff
  border-radius 8px
  color #999
  display flex
  flex-direction column
  justify-content space-around
  align-content center
  p:first-child
    font-size 40px
    text-align center
  &:hover
    color #45aee0 
  p:last-child
    text-align center
</style>

