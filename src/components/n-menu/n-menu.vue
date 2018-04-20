<template>
  <div class="n-menu">
    <ul>
      <router-link v-for="(item, index) in menuData" :key="index" :to="item.link" tag="li">
        <span class="fa" :class="item.icon"></span>
        <span>{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        {name: '首页', icon: 'fa-home', link: '/index'},
        {name: '病区排班', icon: 'icon-menu_bqpb', link: '/order'},
        {name: '责任医护', icon: 'icon-menu_zryh', link: '/care'},
        {name: '输液监测', icon: 'icon_sy', link: '/trans'},
        {name: '体温监测', icon: 'fa-thermometer-half', link: '/temp'},
        {name: '护士宣教', icon: 'icon-menu_hsxj', link: '/mission'},
        {name: '电子白板', icon: 'icon-menu_pannel', link: '/board'}
      ]
    }
  }
}
</script>


