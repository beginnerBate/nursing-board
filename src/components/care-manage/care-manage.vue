<template>
  <div class="care-manage">
    <popup-box title="执行详细情况" :off="off">
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
              <div><img src="./move_img1.png" alt=""></div>
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
          <ul>
            <li></li>
          </ul>
        </section>
        <!-- right -->
        <section>right</section>
      </div> 
    </popup-box>
  </div>
</template>
<script>
import PopupBox from 'base/popup-box/popup-box'
export default {
  components: {
    PopupBox
  },
  data() {
    return {
      off: true
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
