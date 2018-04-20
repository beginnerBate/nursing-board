<template>
  <div class="index-doctor">
    <base-box title="今日值班护士" icon="fa-user-md">
      <div class="index-doctor-wrapper">
        <ul class="index-list">
          <li>
            <span class="name">吴来安</span>
            <span class="level">[一线]</span>
          </li>
          <li>
            <span class="name">顾飞</span>
            <span class="level">[二线]</span>
          </li>
          <li>
            <span class="name">小橙子</span>
            <span class="level">[三线]</span>
          </li>
        </ul>
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
