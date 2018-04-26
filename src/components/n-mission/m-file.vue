<template>
  <div class="m-video">
   <ul class="m-video-list">
     <li class="m-video-list-item" @click="play()">
       <p><i class="fa fa-folder-open-o"></i></p>
       <p>护士的自我修养</p>
     </li>
     <li class="m-video-list-item" @click="play()">
       <p><i class="fa fa-folder-open-o"></i></p>
       <p>护士入门芝兰</p>
     </li>
     <li class="m-video-list-item" @click="play()">
       <p><i class="fa fa-folder-open-o"></i></p>
       <p>沪指扎挣教程</p>
     </li>
     <li class="m-video-list-item" @click="play()">
       <p><i class="fa fa-folder-open-o"></i></p>
       <p>护士必读课程</p>
     </li>
   </ul>
<!-- 视频播放弹出窗 -->
<!-- <video-play v-if="$store.state.mission.videoshow"></video-play> -->
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
      // this.$store.commit('setvideoshow',true)
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

