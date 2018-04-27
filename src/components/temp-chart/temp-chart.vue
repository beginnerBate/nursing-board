<template>
  <div class="echarts">
    <IEcharts :option="line" :loading="loading"></IEcharts>
  </div>
</template>
 
<script>
// import IEcharts from 'vue-echarts-v3/src/full.js';
import IEcharts from 'vue-echarts-v3/src/lite.js';
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
export default {
  name: 'temp-record',
  components: {
    IEcharts
  },
  props: {
    tempData:{
      type:[Object,Array],
      default:''
    }
  },
  data: () => ({
    loading: true,
    line: {
      // title: {
      //   text: '体温历史记录'
      // },
      tooltip: {},
      grid:{
        left: '8%',
        top:'18%',
      },
      xAxis: {
        // type:'time',
        data: [],
        nameTextStyle:{
          fontSize:10
        }
      },
      yAxis: {
        type:'value',
        name:"体温(℃)",
        axisLabel: {
            formatter: '{value} °C'
        },
        min: function(value) {
          return Math.floor(value.min - 2)
        }
      },
      series: [{
        name: '体温记录',
        type: 'line',
        data: [],
        smooth: true,
        label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
      }]
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
      for (let i = 0; i<that.tempData.length; i++) {
        dataX.push(that.tempData[i].time)
        dataV.push(that.tempData[i].temp)
      }
      that.line.series[0].data = dataV;
      that.line.xAxis.data = dataX;
       that.loading = false;
    }
  },
  watch: {
    tempData(value) {
      this.fillData()
    }
  }
};
</script>
 
<style scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>