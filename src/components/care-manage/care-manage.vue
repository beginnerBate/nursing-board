<template>
  <div class="care-manage">
    <popup-box title="执行详细情况" :off="off" @hide="$store.commit('setcareshow',false)">
      <div class="care-box-content">
        <!-- left -->
        <section>
          <div class="care-header">
            <div class="care-header-title">
              <div>
                <img src="./girl.png" alt="">
              </div>
              <h1>伟晴轩</h1>
            </div>
            <div class='bg-animate'>
              <v-wave></v-wave>
            </div>
          </div>
          <ul class="care-list">
            <li><span>年龄</span><span>84岁</span></li>
            <li><span>性别</span><span>男</span></li>
            <li><span>住院号</span><span>172960</span></li>
            <li><span>护理等级</span><span>I等级</span></li>
            <li><span>入院时间</span><span>18-12-08 21:26</span></li>
            <li><span>预付款</span><span>空</span></li>
            <li><span>医保</span><span>自费</span></li>
            <li><span>总花费</span><span>空</span></li>
            <li><span>余额</span><span>-3446.63</span></li>
            <li><span>过敏</span><span>花粉过敏，汽油过敏</span></li>
          </ul>
          <ul class="care-list">
            <li><span>联系方式</span><span>1254566122</span></li>
            <li><span>床位</span><span>52</span></li>
          </ul>
          <ul class="care-list">
            <li><span>诊断</span><span>肺炎</span></li>
          </ul>
        </section>
        <!-- right -->
        <section>
        <div class="care-right-top">
          <keep-alive>
          <router-view></router-view>
          </keep-alive>
        </div>
        <div class="care-right-footer">
          <ul>
            <router-link to="/care/one" tag="li"><span>医嘱执行单</span></router-link>
            <router-link to="/care/two" tag="li"><span>护理列表</span></router-link>
            <router-link to="/care/three" tag="li"><span>临时医嘱</span></router-link>
            <router-link to="/care/four" tag="li"><span>长期医嘱</span></router-link>
            <router-link to="/care/five" tag="li"><span>生命体征</span></router-link>
          </ul>
        </div>
        </section>
      </div> 
    </popup-box>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
import VWave from 'base/v-wave/v-wave'
import {mapState} from 'vuex'
export default {
  components: {
    PopupBox,
    VWave
  },
  data() {
    return {
      off: true
    }
  },
  computed: {
    ...mapState({
      list: state=>state.care.patInfo
    })
  },
}
</script>
<style lang="stylus" scoped>
</style>
