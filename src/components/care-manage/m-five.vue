<template>
  <div class="m-five">
    <div>
      <table class="c-table five-table">
        <thead>
          <tr>
            <th colspan="8">
              <div class="page-head">
                <span class="btn btn-page" @click="prePage()">上一页</span>
                <span class="btn btn-page" @click="nextPage()">下一页</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>日期</th>
            <th>17-12-02</th>
            <th>03</th>
            <th>04</th>
            <th>05</th>
            <th>06</th>
            <th>07</th>
            <th>08</th>
          </tr>
          <tr>
            <th>住院天数</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
          </tr>
          <tr>
            <th>手术后天数</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
          </tr>
        </tbody>
      </table>
      <div class="echarts">
         <IEcharts :option="line" :loading="loading"></IEcharts>
      </div>
      <div class="five-info">
        <!-- info -->
        <div>
          <ul class="info-list">
            <li>
              <div class="info-list-first"><span>呼吸(次/分)</span></div>
              <div class="info-list-table1">
                <table>
                  <tbody>
                    <tr>
                      <th>22</th>
                      <th>33</th>
                      <th></th>
                      <th>33</th>
                      <th>55</th>
                      <th>66</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>22</th>
                      <th>33</th>
                      <th>33</th>
                      <th></th>
                      <th>55</th>
                      <th>66</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>22</th>
                      <th>33</th>
                      <th>33</th>
                      <th></th>
                      <th>55</th>
                      <th>66</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>22</th>
                      <th>33</th>
                      <th>33</th>
                      <th>33</th>
                      <th></th>
                      <th>66</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>22</th>
                      <th>33</th>
                      <th>33</th>
                      <th>33</th>
                      <th>55</th>
                      <th>66</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>22</th>
                      <th>33</th>
                      <th>33</th>
                      <th>33</th>
                      <th>55</th>
                      <th>66</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>血压</span></div>
              <div class="info-list-table1">
                <table>
                  <tbody>
                    <tr>
                      <th>189/45</th>
                      <th>189/45</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>189/45</th>
                      <th>189/45</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>189/45</th>
                      <th>189/45</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>189/45</th>
                      <th>189/45</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>189/45</th>
                      <th>189/45</th>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>189/45</th>
                      <th>189/45</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>腰围</span></div>
              <div class="info-list-table2">
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>腰围</span></div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>腰围</span></div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>腰围</span></div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>腰围</span></div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <div class="info-list-first"><span>腰围</span></div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/lite.js';
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/singleAxis'
export default {
  components: {
    IEcharts
  },
  props: {
    // tempData:{
    //   type:[Object,Array],
    //   default:''
    // }
  },
  data: () => ({
    loading: true,
    line: {
      legend: {
        data:['体温','脉搏']
      },
      grid:{
        show: true,
        left: '8%',
        top:'18%',
      },
      xAxis: {
        data: [],
        nameTextStyle:{
          fontSize:10,
          color: '#d4d4d4'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: ['#aaa', '#ddd']
            }
        },
        splitNumber: 20 
      },
      yAxis:[
         {
            type:'value',
            name:"体温(℃)",
            axisLabel: {
                formatter: '{value} °C'
            },
            min: 35,
            max:42,
            axisLine: {
                lineStyle: {
                    color: '#5793f3'
                }
            },
         },
         {
            type:'value',
            name:"脉搏(次/分)",
            axisLabel: {
                formatter: '{value}'
            },
            min: 40,
            max: 180,
            position: 'right',
            offset: 40,
            axisLine: {
                lineStyle: {
                    color: '#d14a61'
                }
            },
         },
      ],
      series: [
        {
          name: '体温',
          type: 'line',
          data: [],
          smooth: true,
          label: {
                  normal: {
                      show: true,
                      position: 'top'
                  }
              },
          lineStyle: {
              color: '#5793f3'
          }
        },
        {
          name: '脉搏',
          type: 'line',
          yAxisIndex: 1,
          data: [],
          smooth: true,
          label: {
                  normal: {
                      show: true,
                      position: 'top'
                  }
              },
          lineStyle: {
              color: '#d14a61'
          }        
        },
      ],
       color: ['#5793f3', '#d14a61', '#675bba']
    }
  }),
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      const that = this
      let dataX = []
      let dataV = []
      for (let i = 0; i<10; i++) {
        dataX.push(i+20)
        dataV.push(i+90)
      }
      that.line.series[0].data = ['36.2','37.2','38.2','36.7','36.8','36.3','38.2','37.6']
      that.line.series[1].data = dataV;
      that.line.xAxis.data = dataX;
      that.loading = !that.loading
    }
  },
  watch: {
    // tempData(value) {
    //   this.fillData()
    // }
  }
}
</script>
<style lang="stylus" scoped>
.page-head
  width 100%
  display flex
  justify-content flex-end
  font-size 12px
  span 
    margin 0 12px
.info-list>li
  display flex
  border-bottom 1px solid #d4d4d4
  border-left 1px solid #d4d4d4
  border-right 1px solid #d4d4d4
  line-height 30px
  &:first-child
    border-top 1px solid #d4d4d4
    line-height 45px
.info-list-first
  flex 0 0 125px
  display: flex
  justify-content center
  align-items center
  border-right 1px solid #d4d4d4
.info-list-table1
  display flex
  flex 1
.info-list-table1>table
    flex 1 1 200px
    max-width 200px
    border-right 1px solid #d4d4d4
    th
      border-right 1px solid #d4d4d4
      text-align center
.info-list-table2
  display flex
  flex 1
  table
    width 100%
    height 28px
    th
      border-right 1px solid #d4d4d4
      text-align center
</style>
