<template>
  <div class="n-common n-order">
    <!-- n-order-top -->
    <section class="n-common-top">
      <ul class="order-list">
        <li class="order-list-date">
          <div></div>
          <div>2018-04-16 周一</div>
          <div>2018-04-17 周二</div>
          <div>2018-04-18 周三</div>
          <div>2018-04-19 周四</div>
          <div>2018-04-20 周五</div>
          <div>2018-04-21 周六</div>
          <div>2018-04-22 周日</div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
        <li class="order-list-item">
          <div>
            <h1>谢晓燕</h1>
            <h1>医师</h1>
          </div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
          <div><img src="" alt=""></div>
        </li>
      </ul>
    </section>
    <!-- n-order-bottom -->
    <section class="n-common-bottom">
      <!-- footer -->
      <n-footer>
        <ul class="order-footer">
          <li>
            <span class="btn-cancle">上周</span>
          </li>
          <li>
            <span class="btn-cancle" @click="changeDate()">
              <label for="data">日期选择</label>
            </span>
            <input type="date" name="data" id="data" hidden>
          </li>
          <li>
            <span class="btn-cancle">下周</span>
          </li>
          <li>
            <span class="btn-select">医生</span>
          </li>
          <li>
            <span class="btn-select">护士</span>
          </li>          
        </ul>
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
    this.$store.dispatch('initPage', {tab:false,headmenu:'病区排班'})
  },
  methods: {
    changeDate() {
      document.getElementById('data').hidden=false
    }
  },
}
</script>
