<template>
  <div class="n-common">
    <section class="n-common-top">
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
    this.$store.dispatch('initPage', {tab:false,headmenu:'责任医护'})
  }
}
</script>
