<template>
  <div class="m-video">
   <ul class="m-video-list" v-if="list">
     <li class="m-video-list-item" v-for="(item,index) in list" :key='index' @click="play(item)">
       <p><i class="fa fa-play-circle-o"></i></p>
       <p>{{item.name}}</p>
     </li>
   </ul>
<!-- 视频播放弹出窗 -->
<video-play v-if="$store.state.mission.videoshow"></video-play>
  </div>
</template>
<script>
import VideoPlay from './video-play'
import {nurseFilesType} from 'api/mission'
export default {
  components:{
    VideoPlay
  },
  data () {
    return {
      list:''
    }
  },
  created(){
    this.nurseFilesType()
  },
  methods: {
    play(item) {
      let mydata = [{
            type: `video/${item.type}`,
            src: item.url
          }]

      this.$store.commit('setvideoTitle','护士宣教视频')
      this.$store.commit('setvideoData',mydata)
      this.$store.commit('setvideoshow',true)
    },
    nurseFilesType () {
      nurseFilesType({typeName:'视频'}).then((res)=>{
        if(res.code ==200){
          this.list = res.data
        }
      })
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

