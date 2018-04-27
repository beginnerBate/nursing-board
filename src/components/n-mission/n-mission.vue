<template>
  <div class="n-common">
    <section class="n-common-top n-miss">
      <div class="n-miss-left">
        <div class="miss-menu-h">护士宣教</div>
        <router-link  tag="div" class="miss-menu-item" v-for="(item,index) in tab" :key="index" :to="'/mission/'+index">
          <span><i class="fa" :class="item.typeName=='文件'? 'fa-file-word-o':'fa-file-video-o'"></i></span>
          <span>{{item.typeName}}</span>
          <span>{{item.count}}</span>
        </router-link>
        <!-- <router-link to="/mission/file" tag="div" class="miss-menu-item">
          <span><i class="fa fa-file-word-o"></i></span>
          <span>文档</span>
          <span>1</span>        
        </router-link> -->
      </div>
      <div class="n-miss-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
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
import {nurseFiles} from 'api/mission'
export default {
  components: {
    NFooter,
    nurseFiles
  },
  data() {
    return {
      tab: ''
    }
  },
  created () {
    this.$store.dispatch('initPage', {tab:false,headmenu:'护士宣教'})
    this.nurseFiles()
  },
  methods: {
    nurseFiles() {
      nurseFiles().then((res)=>{
        if (res.code ==200){
          this.tab = res.data
        }
      })
    }
  },
}
</script>
