<template>
  <div class="n-common">
    <!-- n-order-top -->
    <section class="n-common-top">
    </section>
    <!-- n-order-bottom -->
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
    this.$store.dispatch('initPage', {tab:false,headmenu:'输液监测'})
  }
}
</script>
