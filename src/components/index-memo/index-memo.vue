<template>
  <div class="index-doctor">
    <base-box title="备忘录" icon="fa-pencil">
      <div class="index-doctor-wrapper">
        <table>
          <thead>
            <tr>
              <th>标题</th>
              <th>发布时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>我是一条备忘录</th>
              <th>2017-05-12 12:25:59</th>
            </tr>
          </tbody>
        </table>
      </div>
    </base-box>
  </div>
</template>
<script>
import BaseBox from 'base/base-box/base-box'
export default {
  components: {
    BaseBox
  }
}
</script>
