<template>
<div class="n-index">
  <section class="n-index-top">
    <div>
      <!-- 今日值班医生  -->
      <index-doctor></index-doctor>
    </div>
    <div>
      <!-- 今日值班护士  -->
      <index-nurse></index-nurse>
    </div>
    <div>
      <!-- 备忘录  -->
      <index-memo></index-memo>
    </div>
  </section>
  <div class="n-index-bottom">
    <!-- fooetr -->
    <n-footer></n-footer>
  </div>
  <!-- 今日值班医生 -->
  <duty-today v-if="$store.state.dutyopen"></duty-today>
  <!-- 备忘录列表 -->
  <memo-box v-if="$store.state.memoopen"></memo-box>
</div>
</template>
<script>
import IndexDoctor from 'components/index-doctor/index-doctor'
import IndexNurse from 'components/index-nurse/index-nurse'
import IndexMemo from 'components/index-memo/index-memo'
import NFooter from 'components/n-footer/n-footer'
import DutyToday from 'components/duty-today/duty-today'
import MemoBox from 'components/memo-box/memo-box'
export default {
  components: {
    IndexDoctor,
    IndexNurse,
    IndexMemo,
    NFooter,
    DutyToday,
    MemoBox
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'首页'})
    this.$store.dispatch('getdutyList')
  }
}
</script>