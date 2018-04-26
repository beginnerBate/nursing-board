<template>
  <div class="board">
    <canvas ref="myboard" ></canvas>
    <div  class="board-menu">
      <div class="choose-color">
        <!-- <input type="color"   v-model="colorValue"> -->
        <colorPicker v-model="colorValue" @change="selectColor($event)"></colorPicker>
      </div>
      <div class="choose-size">
        <span class="btn-size" @click="showLine=!showLine">粗细</span>
        <ul class="size-list" v-show="showLine">
          <li v-for="(item,index) in linelist" :key="index" @click="selectLine(item)">
            <span :style='{height:item +"px"}'></span>
          </li>
        </ul>
      </div>
      <div class="choose-shape" ref="chooseBtn">
        <span @click="choosePen($event)" class="choose-active">画笔</span>
        <span @click="chooseLine()">直线</span>
        <span @click="chooseRect()">矩形</span>
        <span @click="chooseCircle()">圆形</span>
      </div>
      <div class="choose-operate" ref="chooseBtn1">
        <span @click="chooseEaser()">皮擦</span>
        <span @click="chooseCancel()">撤销</span>
        <span @click="chooseClear()">清空</span>
        <span @click="choosesave()">保存</span>
      </div>
      <div class="choose-index">
        <span @click="backHome()" class="btn btn-green">首页</span>
      </div>
      <!-- 保存白板 加载白板 -->
      <div class="choose-new">
        
      </div>
    </div>
    <div class="board-show" v-if="showImage.length>0">
       <ul>
         <li>
           <img :src="showImage[0]" alt="">
           <span>画板01</span>
         </li>
       </ul>
    </div>
  </div>
</template>
<script>
import colorPicker from './color-picker'
var MYDATA = []
var startEvent,moveEvent,endEvent
export default {
  components:{colorPicker},
  data () {
      return {
          showImage:[],
          showLine:false,
          linelist:[3,6,9,12,15,20],
          colorValue: '#F00056',
          sizeValue: 5,
          W: 0,
          H: 0,
          CTX: null,
          COLOR:'#F00056',
          LINE: 5,
          PENS:0,
          ERAS:0,
          TIMER: null,
          isactive:false
      }
  },
  created() {
    this.$store.commit('setTab',false)
  },
  methods: {
    //  start init canvas
    init () {
      this._showBoard()
      this._drawPen()
    },
    _showBoard () {
      // 显示画板
      this.$refs.myboard.width = this.W = document.querySelector('canvas').clientWidth
      this.$refs.myboard.height = this.H = document.querySelector('canvas').clientHeight
      this.CTX = this.$refs.myboard.getContext('2d')
    },
    _drawPen () {
      // 画笔功能
      const that = this
      const ele = this.$refs.myboard
      ele.ontouchstart = function(EV){
        let ev = EV || event
        let sx = ev.changedTouches[0].clientX
        let sy =  ev.changedTouches[0].clientY 
        this.PENS++
        // 画笔性能优化  每36ms去一个点
        let onOff = true
        ele.ontouchmove = function(EV) {
          if(!onOff) return
          onOff = false
          setTimeout(function(){
            onOff = true
          },36)
          let ev = EV || event
          let ex =  ev.changedTouches[0].clientX
          let ey =  ev.changedTouches[0].clientY 
          let n = MYDATA.length
          MYDATA[n] = new Object()
          // 为画笔绘制的对象定义属性 'point-line'
          // 该对象存入绘制数据
          MYDATA[n].attr = 'point-line'
          MYDATA[n].count = that.PENS
          MYDATA[n].sx = sx
          MYDATA[n].sy = sy
          MYDATA[n].ex = ex
          MYDATA[n].ey = ey
          MYDATA[n].w = that.LINE
          MYDATA[n].c = that.COLOR
          // 直接绘制
          that.CTX.beginPath()
          that.CTX.moveTo(sx,sy)
          that.CTX.lineTo(ex,ey)
          that.CTX.closePath()
          that.CTX.strokeStyle = that.COLOR
          that.CTX.lineJoin = 'round'
          that.CTX.lineCap = 'round'
          that.CTX.lineWidth = that.LINE
          that.CTX.stroke()
          //  存储数据
          sx = ex
          sy = ey
        }
         ev.target.ontouchend = function() {
                 ev.target.ontouchmove = ' '
        }
        return false
        }
        //画笔pc端
      ele.onmousedown = function(EV){
        let ev = EV || event
        let sx = ev.clientX
        let sy =  ev.clientY 
        this.PENS++
        // 画笔性能优化  每36ms去一个点
        let onOff = true
        ele.onmousemove = function(EV) {
          if(!onOff) return
          onOff = false
          setTimeout(function(){
            onOff = true
          },36)
          let ev = EV || event
          let ex =  ev.clientX
          let ey =  ev.clientY 
          let n = MYDATA.length
          MYDATA[n] = new Object()
          // 为画笔绘制的对象定义属性 'point-line'
          // 该对象存入绘制数据
          MYDATA[n].attr = 'point-line'
          MYDATA[n].count = that.PENS
          MYDATA[n].sx = sx
          MYDATA[n].sy = sy
          MYDATA[n].ex = ex
          MYDATA[n].ey = ey
          MYDATA[n].w = that.LINE
          MYDATA[n].c = that.COLOR
          // 直接绘制
          that.CTX.beginPath()
          that.CTX.moveTo(sx,sy)
          that.CTX.lineTo(ex,ey)
          that.CTX.closePath()
          that.CTX.strokeStyle = that.COLOR
          that.CTX.lineJoin = 'round'
          that.CTX.lineCap = 'round'
          that.CTX.lineWidth = that.LINE
          that.CTX.stroke()
          //  存储数据
          sx = ex
          sy = ey
        }
        ev.target.onmouseup = function() {
          ev.target.onmousemove = ' '
        }
        return false
        }         
    },
    // 直线绘制
    _drawLine (){
      const that = this
      const ele = this.$refs.myboard
      ele.ontouchstart = function(EV){
        let ev = EV || event
        let sx =  ev.changedTouches[0].clientX
        let sy = ev.changedTouches[0].clientY
        let n = MYDATA.length
        ev.target.ontouchmove = function(EV) {
          let ev = EV || event
          let ex = ev.changedTouches[0].clientX
          let ey = ev.changedTouches[0].clientY 
          MYDATA[n] = new Object()
          // 该对象存入绘制数据
          MYDATA[n].attr = 'line'
          MYDATA[n].sx = sx
          MYDATA[n].sy = sy
          MYDATA[n].ex = ex
          MYDATA[n].ey = ey
          MYDATA[n].w = that.LINE
          MYDATA[n].c = that.COLOR
          // 直接绘制时，实时渲染
          that._canvasrender()
        }
        ev.target.ontouchend = function() {
          ev.target.ontouchmove = ' '
        }
        return false
      }
      // 直线PC端 onmousedown  onmousemove  onmouseup
      ele.onmousedown = function(EV){
        let ev = EV || event
        let sx =  ev.clientX
        let sy = ev.clientY
        let n = MYDATA.length
        ev.target.onmousemove = function(EV) {
          let ev = EV || event
          let ex = ev.clientX
          let ey = ev.clientY 
          MYDATA[n] = new Object()
          // 该对象存入绘制数据
          MYDATA[n].attr = 'line'
          MYDATA[n].sx = sx
          MYDATA[n].sy = sy
          MYDATA[n].ex = ex
          MYDATA[n].ey = ey
          MYDATA[n].w = that.LINE
          MYDATA[n].c = that.COLOR
          // 直接绘制时，实时渲染
          that._canvasrender()
        }
        ev.target.onmouseup = function() {
          ev.target.onmousemove = ' '
        }
        return false
      }      
        
    },
    // 绘制圆形
    _drawCircle(){
      const that = this
      const ele = this.$refs.myboard
      ele.ontouchstart = function (EV){
        let ev = EV || event
        let sx = ev.changedTouches[0].clientX
        let sy =  ev.changedTouches[0].clientY
        let n = MYDATA.length
        ev.target.ontouchmove = function (EV) {
          let ev = EV || event
          let ex = ev.changedTouches[0].clientX
          let ey = ev.changedTouches[0].clientY
          
          let cx = ex - sx
          let cy = ey - sy
          let R = Math.sqrt(cx * cx + cy * cy)/2
          MYDATA[n] = new Object()
          MYDATA[n].attr = 'circle'
          MYDATA[n].x = cx/2 + sx
          MYDATA[n].y = cy/2 + sy
          MYDATA[n].r = R
          MYDATA[n].c = that.COLOR
          that._canvasrender()
        }
        ev.target.ontouchend = function () {
              ev.target.ontouchmove = ''
          }
          return false;
      }
      // 绘制圆形PC端 onmousedown  onmousemove  onmouseup
      ele.onmousedown = function (EV){
        let ev = EV || event
        let sx = ev.clientX 
        let sy = ev.clientY 
        let n = MYDATA.length
        ev.target.onmousemove = function (EV) {
          let ev = EV || event
          let ex = ev.clientX 
          let ey = ev.clientY 
          
          let cx = ex - sx
          let cy = ey - sy
          let R = Math.sqrt(cx * cx + cy * cy)/2
          MYDATA[n] = new Object()
          MYDATA[n].attr = 'circle'
          MYDATA[n].x = cx/2 + sx
          MYDATA[n].y = cy/2 + sy
          MYDATA[n].r = R
          MYDATA[n].c = that.COLOR
          that._canvasrender()
        }
        ev.target.onmouseup = function () {
              ev.target.onmousemove = ''
          }
          return false;
      }
    },
    // 绘制矩形
    _drawRect(){
      const that = this
      const ele = this.$refs.myboard
      ele.ontouchstart = function (EV){
        let ev = EV || event
        let sx = ev.clientX || ev.changedTouches[0].clientX
        let sy = ev.clientY || ev.changedTouches[0].clientY
        let n = MYDATA.length
        ev.target.ontouchmove = function (EV) {
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY
          let cx = ex - sx
          let cy = ey - sy
          MYDATA[n] = new Object()
          MYDATA[n].attr = 'rect'
          MYDATA[n].x = sx
          MYDATA[n].y = sy
          MYDATA[n].w = cx
          MYDATA[n].h = cy
          MYDATA[n].c = that.COLOR
          that._canvasrender()
      }
      ev.target.ontouchend = function () {
            ev.target.ontouchmove = ''
        }
        return false;
      }
      // 绘制矩形PC端 onmousedown  onmousemove  onmouseup
      ele.onmousedown = function (EV){
        let ev = EV || event
        let sx = ev.clientX || ev.changedTouches[0].clientX
        let sy = ev.clientY || ev.changedTouches[0].clientY
        let n = MYDATA.length
        ev.target.onmousemove = function (EV) {
          let ev = EV || event
          let ex = ev.clientX || ev.changedTouches[0].clientX
          let ey = ev.clientY || ev.changedTouches[0].clientY
          let cx = ex - sx
          let cy = ey - sy
          MYDATA[n] = new Object()
          MYDATA[n].attr = 'rect'
          MYDATA[n].x = sx
          MYDATA[n].y = sy
          MYDATA[n].w = cx
          MYDATA[n].h = cy
          MYDATA[n].c = that.COLOR
          that._canvasrender()
      }
      ev.target.onmouseup = function () {
            ev.target.onmousemove = ''
        }
        return false;
      }
    },
    // 橡皮檫
    _eraser(){
      const that = this
      const ele = this.$refs.myboard
      ele.ontouchstart =function(EV) {
        let ev = EV || event
        that.ERAS++
        ev.target.ontouchmove = function (EV) {
          let ev = EV || event
          let ex = ev.changedTouches[0].clientX
          let ey = ev.changedTouches[0].clientY
          let n = MYDATA.length
          MYDATA[n] = new Object()
          // 为橡皮擦绘制的方块定义属性 'clear-rect'
          MYDATA[n].attr = 'clear-rect'
          MYDATA[n].count = that.ERAS
          MYDATA[n].x = ex - 15
          MYDATA[n].y = ey - 15
          // 为橡皮檫固定高度
          MYDATA[n].w = 30
          MYDATA[n].h = 30
          MYDATA[n].c = "#fff"
          that.CTX.fillStyle = "#fff"
          that.CTX.beginPath()
          that.CTX.fillRect(ex - 15, ey -15,30,30)
          that.CTX.closePath()
          that.CTX.fill()
      }
      ev.target.ontouchend = function () {
            ev.target.ontouchmove = ''
        }
        return false;
      }
      // 橡皮檫PC端 onmousedown  onmousemove  onmouseup
      ele.onmousedown =function(EV) {
        let ev = EV || event
        that.ERAS++
        ev.target.onmousemove = function (EV) {
          let ev = EV || event
          let ex = ev.clientX
          let ey = ev.clientY
          let n = MYDATA.length
          MYDATA[n] = new Object()
          // 为橡皮擦绘制的方块定义属性 'clear-rect'
          MYDATA[n].attr = 'clear-rect'
          MYDATA[n].count = that.ERAS
          MYDATA[n].x = ex - 15
          MYDATA[n].y = ey - 15
          // 为橡皮檫固定高度
          MYDATA[n].w = 30
          MYDATA[n].h = 30
          MYDATA[n].c = "#fff"
          that.CTX.fillStyle = "#fff"
          that.CTX.beginPath()
          that.CTX.fillRect(ex - 15, ey -15,30,30)
          that.CTX.closePath()
          that.CTX.fill()
      }
      ev.target.onmouseup = function () {
            ev.target.onmousemove = ''
        }
        return false;
      }
    },
    // 渲染图像
    _canvasrender(){
      //清空画布
      this.CTX.clearRect(0,0,this.W,this.H)
      const that = this
      for (let i = 0; i < MYDATA.length; i++) {
        switch(MYDATA[i].attr) {
          // 橡皮擦矩形
          case 'clear-rect':
          case 'rect':
            that.CTX.fillStyle = MYDATA[i].c
            that.CTX.beginPath()
            that.CTX.fillRect(MYDATA[i].x,MYDATA[i].y,MYDATA[i].w,MYDATA[i].h)
            that.CTX.fill()
            that.CTX.closePath()
          break;
          // 圆形
          case 'circle':
            that.CTX.beginPath()
            that.CTX.arc(MYDATA[i].x, MYDATA[i].y, MYDATA[i].r, 0, 2 * Math.PI, false)
            that.CTX.closePath()
            that.CTX.fillStyle = MYDATA[i].c
            that.CTX.fill()
          break;
          // 画笔，直线按下列规则绘制
          case 'point-line':
          case 'line':
            that.CTX.beginPath()
            that.CTX.moveTo(MYDATA[i].sx, MYDATA[i].sy)
            that.CTX.lineTo(MYDATA[i].ex, MYDATA[i].ey)
            that.CTX.closePath()
            that.CTX.lineJoin = 'round'
            that.CTX.lineCap = 'round'
            that.CTX.strokeStyle = MYDATA[i].c
            that.CTX.lineWidth = MYDATA[i].w
            that.CTX.stroke()
          break;
        }
      }
    },
    // 选择颜色
    selectColor(event){
      const that = this
      this.COLOR = this.colorValue
      console.log('---你重新选择了颜色----',that.COLOR)
    },
    // 选择线条粗线
    selectLine (item) {
      // const that = this
      this.LINE = item
      this.showLine = false
    },
    toBack (){
      const that = this
      let lastData = MYDATA[MYDATA.length-1]
      if(!lastData){
        // console.log('撤退无效！你没有绘画')
        return false
      }
      let attr = lastData.attr
      switch (attr) {
        case 'line':
        case 'circle':
        case 'rect':
          MYDATA.pop()
        break;
        case 'point-line':
        case 'clear-rect':
          let count = MYDATA[MYDATA.length -1].count
          for (var i = MYDATA.length -1; i>=0; i--){
            if (attr == MYDATA.attr && count == MYDATA[i].count) {
              MYDATA.pop()
            }else {
              break;
            }
          }
        break;
      }
      that._canvasrender()
      return true
    },
    choosePen (event) {
      this._drawPen()
      let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },
    chooseLine () {
      this._drawLine()
      let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },
    chooseRect() {
      this._drawRect()
           let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    }, 
    chooseCircle () {
      this._drawCircle()
            let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },
    chooseEaser() {
      this._eraser()
            let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },   
    chooseCancel() {
      this.toBack()
            let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },    
    chooseClear() {
      this.CTX.clearRect(0,0,this.W,this.H)
      MYDATA.length = 0
            let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },
    backHome () {
      this.$router.push({path:'/'})
            let chooseBtn = this.$refs.chooseBtn.querySelectorAll('span')
      let chooseBtn1 = this.$refs.chooseBtn1.querySelectorAll('span')
      chooseBtn.forEach(element => {
        element.classList.remove('choose-active')
      });
      chooseBtn1.forEach(element => {
        element.classList.remove('choose-active')
      });
      event.target.classList.add('choose-active')
    },
    // 保存白板
    choosesave(){
      this.showImage.push(this.$refs.myboard.toDataURL("image/png"))
      console.log(this.showImage)
    },
    convert(canvas) { //画布转化为图片
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            return image;
        } 
  },
  mounted () {
    this.$nextTick(()=>{
      this.init()
    })
  }
}
</script>