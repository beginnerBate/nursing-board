<template>
  <div class="base-box">
    <header class="base-box-header" @click="clickEvent()">
      <span class="fa" :class="icon"></span>
      <span>{{title}}</span>
    </header>
    <div class="base-box-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickEvent() {
      this.$emit('open')
    }
  },
}
</script>

