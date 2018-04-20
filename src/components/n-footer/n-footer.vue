<template>
  <div class="n-footer">
    <slot></slot>
    <span class="btn" @click="setTab()">
      <i class="fa fa-bars"></i>
    </span>
  </div>
</template>
<script>
export default {
  methods: {
    setTab() {
      let value = !this.$store.state.tabdisplay
      this.$store.commit('setTab', value)
    }
  },
}
</script>

