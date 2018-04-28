<template>
  <div class="m-one">
    <div class="c-one-table">
      <table class="c-table">
        <thead>
          <tr>
            <th>医嘱内容</th>
            <th>执行单量</th>
            <th>用法</th>
            <th>执行频次</th>
            <th>校队时间</th>
            <th>执行时间</th>
            <th>选择执行</th>
            <th>执行人</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>医嘱内容</th>
            <th>执行单量</th>
            <th>用法</th>
            <th>执行频次</th>
            <th>校队时间</th>
            <th>执行时间</th>
            <th>选择执行</th>
            <th>执行人</th>
          </tr>
          <tr>
            <th>医嘱内容</th>
            <th>执行单量</th>
            <th>用法</th>
            <th>执行频次</th>
            <th>校队时间</th>
            <th>执行时间</th>
            <th>选择执行</th>
            <th>执行人</th>
          </tr>
          <tr>
            <th>医嘱内容</th>
            <th>执行单量</th>
            <th>用法</th>
            <th>执行频次</th>
            <th>校队时间</th>
            <th>执行时间</th>
            <th>选择执行</th>
            <th>执行人</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="c-one-footer">
      <span class="btn btn-green"><i class="fa fa-check"></i> 执行</span>
      <span class="btn btn-select"><i class="fa fa-exclamation-triangle"></i> 全选</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      list: state =>state.care.orders
    }),
    created(){
      console.log(list)
    }
  }
}
</script>

<style scoped>

</style>