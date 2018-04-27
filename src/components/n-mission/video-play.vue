<template>
<div class="video-play">
    <popup-box type="close" :off='off' title="护士宣教视频" @hide="$store.commit('setvideoshow',false)">
      <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
                 @ready="playerReadied">
      </video-player>
  </popup-box>
</div>
</template>
 
<script>
import PopupBox from 'base/popup-box/popup-box'
import 'video.js/dist/video-js.css'
import {videoPlayer} from 'vue-video-player'
  export default {
    components:{
      videoPlayer,
      PopupBox
    },
    data() {
      return {
        off:true,
        playerOptions: {
          // videojs options
          autoplay:true,
          width:'800',
          height:'400',
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: this.$store.state.mission.data
        }
      }
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event
 
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
 
      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>
