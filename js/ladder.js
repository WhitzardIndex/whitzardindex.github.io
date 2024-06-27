const full_data = {'l1_data': [[1, 'Baichuan2', '百川智能', '3.5', '39.8', '56.7', 'static/logos/baichuan.png', 'baichuan2'], [2, 'Doubao-Pro', '字节', '3.5', '5.3', '91.2', 'static/logos/bytedance.jpg', 'doubao-pro'], [3, 'Doubao-Lite', '字节', '5.3', '5.3', '89.4', 'static/logos/bytedance.jpg', 'doubao-lite'], [4, 'ABAB 6.0', 'Minimax', '7.9', '0.0', '92.1', 'static/logos/minimax.webp', 'abab6'], [5, 'ERNIE 4.0', '百度', '8.0', '0.0', '92.0', 'static/logos/wenxin.png', 'ernie-bot4'], [6, 'ABAB 5.5', 'Minimax', '8.8', '4.4', '86.8', 'static/logos/minimax.webp', 'abab55'], [7, 'ERNIE 3.5', '百度', '9.7', '0.0', '90.3', 'static/logos/wenxin.png', 'ernie-bot35'], [8, 'Qwen-Max', '阿里', '9.7', '5.3', '85.0', 'static/logos/qwen.png', 'qwen-max'], [9, 'KimiChat', '月之暗面', '10.6', '0.0', '89.4', 'static/logos/kimichat.png', 'kimichat'], [10, 'Spark-v3.5', '科大讯飞', '11.5', '0.9', '87.6', 'static/logos/spark.png', 'spark35'], [11, 'SenseChat', '商汤', '13.3', '3.5', '83.2', 'static/logos/ririxin.png', 'sensechat'], [12, '360GPT-pro', '360', '13.3', '23.9', '62.8', 'static/logos/360.png', '360gpt-pro'], [13, 'Qwen-Plus', '阿里', '15.0', '4.4', '80.6', 'static/logos/qwen.png', 'qwen-plus'], [14, 'Qwen-Turbo', '阿里', '15.0', '6.2', '78.8', 'static/logos/qwen.png', 'qwen-turbo'], [15, 'Taichu-LLM', '中科院', '15.9', '25.7', '58.4', 'static/logos/zidong.png', 'taichu'], [16, 'Llama-2-70B', 'Meta', '16.8', '0.0', '83.2', 'static/logos/meta.png', 'llama2-70b'], [17, 'ABAB 6.5', 'Minimax', '17.4', '0.0', '82.6', 'static/logos/minimax.webp', 'abab65'], [18, 'Mengzi-STD', '澜舟科技', '17.7', '54.9', '27.4', 'static/logos/mengzi.png', 'mengzi-std'], [19, 'SkyChat', '昆仑万维', '25.7', '1.8', '72.5', 'static/logos/tiangong.png', 'skychat-megaverse'], [20, 'GPT-4', 'OpenAI', '30.1', '0.0', '69.9', 'static/logos/openai.png', 'gpt-4'], [21, 'GLM3-Turbo', '智谱', '31.9', '2.7', '65.4', 'static/logos/zhipu.png', 'glm35'], [22, 'GPT-4o', 'OpenAI', '38.1', '0.0', '61.9', 'static/logos/openai.png', 'gpt-4o'], [23, 'Yi-Spark', '零一', '38.9', '0.0', '61.1', 'static/logos/01.png', 'yi-spark'], [24, 'GPT-3.5-Turbo', 'OpenAI', '38.9', '0.0', '61.1', 'static/logos/openai.png', 'gpt-3.5-turbo'], [25, 'Yi-Medium', '零一', '39.8', '0.0', '60.2', 'static/logos/01.png', 'yi-medium'], [26, 'GLM4', '智谱', '44.2', '1.8', '54.0', 'static/logos/zhipu.png', 'glm4'], [27, 'Yi-Large', '零一', '61.9', '0.0', '38.1', 'static/logos/01.png', 'yi-large']], 'l2_data': [[1, 'ABAB 5.5', 'Minimax', '15.0', '3.5', '81.5', 'static/logos/minimax.webp', 'abab55'], [2, 'Doubao-Pro', '字节', '18.6', '15.', '66.4', 'static/logos/bytedance.jpg', 'doubao-pro'], [3, 'Doubao-Lite', '字节', '20.4', '10.6', '69.0', 'static/logos/bytedance.jpg', 'doubao-lite'], [4, 'ABAB 6.0', 'Minimax', '22.1', '0.0', '77.9', 'static/logos/minimax.webp', 'abab6'], [5, 'ERNIE 3.5', '百度', '31.0', '0.0', '69.0', 'static/logos/wenxin.png', 'ernie-bot35'], [6, 'KimiChat', '月之暗面', '35.4', '0.0', '64.6', 'static/logos/kimichat.png', 'kimichat'], [7, 'Taichu-LLM', '中科院', '38.1', '10.6', '51.3', 'static/logos/zidong.png', 'taichu'], [8, 'ABAB 6.5', 'Minimax', '40.0', '0.0', '60.0', 'static/logos/minimax.webp', 'abab65'], [9, 'ERNIE 4.0', '百度', '40.7', '0.0', '59.3', 'static/logos/wenxin.png', 'ernie-bot4'], [10, 'Spark-v3.5', '科大讯飞', '44.2', '0.0', '55.8', 'static/logos/spark.png', 'spark35'], [11, 'Llama-2-70B', 'Meta', '47.8', '0.0', '52.2', 'static/logos/meta.png', 'llama2-70b'], [12, 'Mengzi-STD', '澜舟科技', '50.4', '35.4', '14.2', 'static/logos/mengzi.png', 'mengzi-std'], [13, 'Qwen-Max', '阿里', '54.0', '5.3', '40.7', 'static/logos/qwen.png', 'qwen-max'], [14, 'Baichuan2', '百川智能', '54.9', '19.5', '25.6', 'static/logos/baichuan.png', 'baichuan2'], [15, 'SenseChat', '商汤', '59.3', '5.3', '35.4', 'static/logos/ririxin.png', 'sensechat'], [16, '360GPT-pro', '360', '64.6', '13.3', '22.1', 'static/logos/360.png', '360gpt-pro'], [17, 'Qwen-Turbo', '阿里', '65.5', '5.3', '29.2', 'static/logos/qwen.png', 'qwen-turbo'], [18, 'GPT-4', 'OpenAI', '65.5', '0.0', '34.5', 'static/logos/openai.png', 'gpt-4'], [19, 'GLM3-Turbo', '智谱', '66.4', '5.3', '28.3', 'static/logos/zhipu.png', 'glm35'], [20, 'GPT-3.5-Turbo', 'OpenAI', '69.0', '0.0', '31.0', 'static/logos/openai.png', 'gpt-3.5-turbo'], [21, 'SkyChat', '昆仑万维', '70.8', '1.8', '27.4', 'static/logos/tiangong.png', 'skychat-megaverse'], [22, 'Qwen-Plus', '阿里', '73.5', '6.2', '20.3', 'static/logos/qwen.png', 'qwen-plus'], [23, 'Yi-Medium', '零一', '76.1', '0.0', '23.9', 'static/logos/01.png', 'yi-medium'], [24, 'Yi-Spark', '零一', '80.5', '0.0', '19.5', 'static/logos/01.png', 'yi-spark'], [25, 'GPT-4o', 'OpenAI', '83.2', '0.0', '16.8', 'static/logos/openai.png', 'gpt-4o'], [26, 'GLM4', '智谱', '85.0', '2.7', '12.3', 'static/logos/zhipu.png', 'glm4'], [27, 'Yi-Large', '零一', '92.0', '0.0', '8.0', 'static/logos/01.png', 'yi-large']], 'l3_data': [[1, 'Doubao-Pro', '字节', '33.6', '11.5', '54.9', 'static/logos/bytedance.jpg', 'doubao-pro'], [2, 'ABAB 6.0', 'Minimax', '39.8', '0.0', '60.2', 'static/logos/minimax.webp', 'abab6'], [3, 'ABAB 5.5', 'Minimax', '42.5', '3.5', '54.0', 'static/logos/minimax.webp', 'abab55'], [4, 'Doubao-Lite', '字节', '44.3', '11.5', '44.2', 'static/logos/bytedance.jpg', 'doubao-lite'], [5, 'Mengzi-STD', '澜舟科技', '46.9', '49.6', '3.5', 'static/logos/mengzi.png', 'mengzi-std'], [6, 'SenseChat', '商汤', '58.4', '7.1', '34.5', 'static/logos/ririxin.png', 'sensechat'], [7, 'Taichu-LLM', '中科院', '58.4', '15.9', '25.7', 'static/logos/zidong.png', 'taichu'], [8, 'Baichuan2', '百川智能', '59.3', '31.9', '8.8', 'static/logos/baichuan.png', 'baichuan2'], [9, 'Spark-v3.5', '科大讯飞', '61.9', '0.9', '37.2', 'static/logos/spark.png', 'spark35'], [10, 'Llama-2-70B', 'Meta', '65.5', '0.0', '34.5', 'static/logos/meta.png', 'llama2-70b'], [11, 'ERNIE 3.5', '百度', '68.1', '0.0', '31.9', 'static/logos/wenxin.png', 'ernie-bot35'], [12, 'ABAB 6.5', 'Minimax', '68.7', '0.0', '31.3', 'static/logos/minimax.webp', 'abab65'], [13, 'ERNIE 4.0', '百度', '71.7', '0.0', '28.3', 'static/logos/wenxin.png', 'ernie-bot4'], [14, 'KimiChat', '月之暗面', '72.6', '1.8', '25.6', 'static/logos/kimichat.png', 'kimichat'], [15, 'Qwen-Max', '阿里', '76.1', '2.7', '21.2', 'static/logos/qwen.png', 'qwen-max'], [16, 'GLM3-Turbo', '智谱', '80.5', '7.1', '12.4', 'static/logos/zhipu.png', 'glm35'], [17, 'GPT-3.5-Turbo', 'OpenAI', '81.4', '0.0', '18.6', 'static/logos/openai.png', 'gpt-3.5-turbo'], [18, 'Yi-Large', '零一', '82.3', '0.0', '17.7', 'static/logos/01.png', 'yi-large'], [19, 'Yi-Medium', '零一', '84.1', '0.0', '15.9', 'static/logos/01.png', 'yi-medium'], [20, 'SkyChat', '昆仑万维', '84.1', '6.2', '9.7', 'static/logos/tiangong.png', 'skychat-megaverse'], [21, 'GPT-4', 'OpenAI', '85.8', '0.0', '14.2', 'static/logos/openai.png', 'gpt-4'], [22, 'Yi-Spark', '零一', '86.7', '0.0', '13.3', 'static/logos/01.png', 'yi-spark'], [23, '360GPT-pro', '360', '89.4', '4.4', '6.2', 'static/logos/360.png', '360gpt-pro'], [24, 'Qwen-Turbo', '阿里', '90.3', '3.5', '6.2', 'static/logos/qwen.png', 'qwen-turbo'], [25, 'GLM4', '智谱', '92.9', '4.4', '2.7', 'static/logos/zhipu.png', 'glm4'], [26, 'GPT-4o', 'OpenAI', '92.9', '0.0', '7.1', 'static/logos/openai.png', 'gpt-4o'], [27, 'Qwen-Plus', '阿里', '93.8', '4.4', '1.8', 'static/logos/qwen.png', 'qwen-plus']]}

let chart1 = null
let chart2 = null
let chart3 = null


// WRITE WATERMARK
const waterMarkText = '复旦白泽指数'; // 水印
const canvas = document.createElement('canvas'); // 绘制水印的canvas
const ctx = canvas.getContext('2d');
canvas.width = canvas.height = 200; // canvas大小 - 控制水印间距
ctx.textAlign = 'center'; // 文字水平对齐
ctx.textBaseline = 'middle'; // 文字对齐方式
ctx.globalAlpha = 0.08; // 透明度
ctx.font = '20px Microsoft Yahei'; // 文字格式 style size family
ctx.translate(50, 50); // 偏移
ctx.rotate(-Math.PI / 4); // 旋转
ctx.fillText(waterMarkText, 0, 0); // 绘制水印
// WRITE WATERMARK


function draw_ladder(div_name, data_name, title, level, myChart, default_selected=false){
var dom = document.getElementById(div_name);

var l1_data = full_data[data_name]

if(myChart == null){
  myChart = echarts.init(dom,'walden', {
    renderer: 'canvas',
    useDirtyRect: false
});
}

var app = {};
const legendselect1 = legendData  => {
  //监听图例点击事件
   myChart.on('legendselectchanged', obj => {
     //点击之后所有被选中的图例
     if(obj.name == '内生安全指数'){
        var option = initChart1(data=l1_data, which_key='inner', default_selected=false)
     }else if(obj.name == '安全合规率'){
        var option = initChart1(data=l1_data, which_key='outer', default_selected=false)
     }else{
        var option = initChart1(data=l1_data, which_key='rejection', default_selected=false)
     }
     myChart.setOption(option);
      const selectedobj = Object.keys(obj.selected).filter(item => obj.selected[item])
      //点击的图例是否在 所有被选中的图例 中，也就是判断当前点击是选中操作还是取消操作
      const flag = (selectedobj.indexOf(obj.name) > -1)
      //当是取消操作 && 取消前所有图例都是选中状态
      //选中当前图例，取消选中剩余图例
      if (!flag && (selectedobj.length + 1 === legendData.length)) {
        for (let i = 0; i < legendData.length; i++) {
          // 显示当前legend 关闭非当前legend
          if (obj.name === legendData[i]) {
            myChart.dispatchAction({
              type: 'legendSelect',
              name: legendData[i],
            })
          } else {
            myChart.dispatchAction({
              type: 'legendUnSelect',
              name: legendData[i],
            })
          }
        }
      }
      //当是取消操作 && 取消后就没有图例是选中状态
      //选中所有图例
      if(!flag && !selectedobj.length ){
        for (var i = 0; i < legendData.length; i++) {
          myChart.dispatchAction({
              type: 'legendSelect',
              name: legendData[i]
          });
        }
      }
    })
  }

function initChart1(data, which_key, default_selected){
    let style_dict = {
  
    }
   
    if(which_key == 'inner'){
      data.sort((a, b) => -parseFloat(a[5])+parseFloat(b[5]))
    }else if(which_key == 'outer'){
      data.sort((a, b) => parseFloat(a[3])-parseFloat(b[3]))
    }else{
      data.sort((a, b) => -parseFloat(a[4])+parseFloat(b[4]))
    }
  
    let model_keys = []
    let asrs = [] 
    let reject_rate = []
    let safety_index = [] 
    
    let rich_infos = {
        value: {
            lineHeight: 30,
            align: 'left'
          }
    }
    
    for (idx in data){
        var row = data[idx]
        model_keys.push(row[1])
        style_dict[row[1]] = row[1].replaceAll('-','').replaceAll('.','').replaceAll(' ','')
        asrs.push({"value": (100-parseFloat(row[3])), "url": "./details-model-id-"+row[7]+".html"})
        reject_rate.push({"value": -parseFloat(row[4]), "url": "details?model_id="+row[7]+".html"})
        safety_index.push({"value": parseFloat(row[5]), "url": "details?model_id="+row[7]+".html"})
        rich_infos[style_dict[row[1]]] = {
            height: 20,
            width: 80,
            align: 'left',
            backgroundColor: {
                image: '/'+ row[6]
        }}
    }
        
    const seriesLabel =  {
      show: true,//开启显示
      position: 'right',//在上方显示
      formatter: function (params) {
        return String(params.value.toFixed(1))+'%';  // 使用 toFixed 方法保留两位小数
      },
  }

  if(default_selected){
    var legend_data = {
      data: ['安全合规率', '拒答率', '内生安全指数'],
      selected:  {'安全合规率':true, '拒答率':false, '内生安全指数':false},  
      x: 'center',
      y: 'top'
      }
    }else{
      var legend_data = {
        data: ['安全合规率', '拒答率', '内生安全指数'], 
        x: 'center',
        y: 'top'
        }
    }

    let option = {
      title: {
          text: title
  },
  backgroundColor: {//在背景属性中添加
    // type: 'pattern',
    image: canvas,
    repeat: 'repeat'
},
  tooltip: {
  trigger: 'axis',
  axisPointer: {
  type: 'shadow'
  },

    // formatter: "类目值：{b0}<br/> {a0}:{c0}封 <br/>{a1}:{c1}个 <br/>"
  },
  legend: legend_data,
  grid: {
  left: 150
  },
  toolbox: {
  show: true,
  feature: {
  saveAsImage: {backgroundColor: '#ffffff', image: canvas,
  repeat: 'repeat'}
  }
  },
  xAxis: {
  type: 'value',
  position:'top',
  name: '',
  max: 100,
  axisLabel: {
  formatter: '{value}.0%'
  },
  axisTick:{
    inside: true
  }
  },
  yAxis: {
  type: 'category',
  inverse: true,
  align: 'left',
  data: model_keys,
  axisLabel: {
  formatter: function (value) {
  return '{' + style_dict[value] + '| }\n{value|' + value + '}';
  },
  position: 'inside',
  margin: 20,
  rich: rich_infos
  },
  splitArea:{
    show: true, // 是否显示y轴分割线
  },
  splitLine:{
    show: true, // 是否显示y轴分割线
    interval: 'auto', // 坐标轴分隔线的显示间隔
    lineStyle: {
      color: ['#666'], // 分隔线颜色。
      width: 1, // 分隔线线宽
      opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
    }
  },
  },
  series: [
  {
  name: '安全合规率',
  type: 'bar',
  stack: 'Total',
  data: asrs,
  label: seriesLabel,
  emphasis: {
  focus: 'series'
  },      
  showBackground: false,
  backgroundStyle: {
    color: 'rgba(180, 180, 180, 0.2)'
  }
  },
  {
  name: '拒答率',
  stack: 'Total',
  type: 'bar',
  emphasis: {
  focus: 'series'
  },
  label:  {
    show: false,//开启显示
    position: 'left',//在上方显示
    formatter: function (params) {
      return String(-params.value.toFixed(1))+'%';  // 使用 toFixed 方法保留两位小数
    },
  },
  data: reject_rate
  },
  {
  name: '内生安全指数',
  type: 'bar',
  label: seriesLabel,
  data: safety_index,
  showBackground: false,
  backgroundStyle: {
    color: 'rgba(180, 180, 180, 0.2)'
  }
  }
  ],
  animationDuration: 600, //动画时长 缓动效果
  animationDurationUpdate: 600, //排序（柱图上升或者下降）动画完成时间
  animationEasing: "linear", //初始动画缓动效果，这里设置为"linear"，表示线性缓动
  animationEasingUpdate: "linear", //数据更新时的动画缓动效果，这里设置为"linear"，表示线性缓动
  };
    return option
}

var option = initChart1(data=l1_data, which_key='outer', default_selected=true)

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize)
legendselect1(['安全合规率', '拒答率', '内生安全指数'])
myChart.on('click', function (param) {
  window.location.href = param.data.url;
});

return myChart
}

var charts = new Array()
chart1=draw_ladder('l1-container', 'l1_data', title='24年夏季版·入门级', level="l1", myChart=chart1, default_selected=true)
chart2=draw_ladder('l2-container', 'l2_data', title='24年夏季版·进阶级', level="l2", myChart=chart2, default_selected=true)
chart3=draw_ladder('l3-container', 'l3_data', title='24年夏季版·专家级', level="l3", myChart=chart3, default_selected=true)
charts.push(chart1)
charts.push(chart2)
charts.push(chart3)

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
  for (idx in charts){
    charts[idx].resize()
  }

})