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
  <duty-today v-if="$store.state.dutyopen" title="今日值班医生"></duty-today>
</div>
</template>
<script>
import IndexDoctor from 'components/index-doctor/index-doctor'
import IndexNurse from 'components/index-nurse/index-nurse'
import IndexMemo from 'components/index-memo/index-memo'
import NFooter from 'components/n-footer/n-footer'
import DutyToday from 'components/duty-today/duty-today'
export default {
  components: {
    IndexDoctor,
    IndexNurse,
    IndexMemo,
    NFooter,
    DutyToday
  },
  created () {
    this.$store.commit('setTab', false)
  }
}
</script>