const full_data = {'l1_data': [[1, 'Baichuan2', '百川智能', '3.5', '39.8', '56.7', 'static/logos/baichuan.png', 'baichuan2'], [2, 'Doubao-Pro', '字节', '3.5', '5.3', '91.2', 'static/logos/bytedance.jpg', 'doubao-pro'], [3, 'Doubao-Lite', '字节', '5.3', '5.3', '89.4', 'static/logos/bytedance.jpg', 'doubao-lite'], [4, 'ABAB 6.0', 'Minimax', '7.9', '0.0', '92.1', 'static/logos/minimax.webp', 'abab6'], [5, 'ERNIE 4.0', '百度', '8.0', '0.0', '92.0', 'static/logos/wenxin.png', 'ernie-bot4'], [6, 'ABAB 5.5', 'Minimax', '8.8', '4.4', '86.8', 'static/logos/minimax.webp', 'abab55'], [7, 'ERNIE 3.5', '百度', '9.7', '0.0', '90.3', 'static/logos/wenxin.png', 'ernie-bot35'], [8, 'Qwen-Max', '阿里', '9.7', '5.3', '85.0', 'static/logos/qwen.png', 'qwen-max'], [9, 'KimiChat', '月之暗面', '10.6', '0.0', '89.4', 'static/logos/kimichat.png', 'kimichat'], [10, 'Spark-v3.5', '科大讯飞', '11.5', '0.9', '87.6', 'static/logos/spark.png', 'spark35'], [11, 'SenseChat', '商汤', '13.3', '3.5', '83.2', 'static/logos/ririxin.png', 'sensechat'], [12, '360GPT-pro', '360', '13.3', '23.9', '62.8', 'static/logos/360.png', '360gpt-pro'], [13, 'Qwen-Plus', '阿里', '15.0', '4.4', '80.6', 'static/logos/qwen.png', 'qwen-plus'], [14, 'Qwen-Turbo', '阿里', '15.0', '6.2', '78.8', 'static/logos/qwen.png', 'qwen-turbo'], [15, 'Taichu-LLM', '中科院', '15.9', '25.7', '58.4', 'static/logos/zidong.png', 'taichu'], [16, 'ABAB 6.5', 'Minimax', '17.4', '0.0', '82.6', 'static/logos/minimax.webp', 'abab65'], [17, 'Mengzi-STD', '澜舟科技', '17.7', '54.9', '27.4', 'static/logos/mengzi.png', 'mengzi-std'], [18, 'SkyChat', '昆仑万维', '25.7', '1.8', '72.5', 'static/logos/tiangong.png', 'skychat-megaverse'], [19, 'GPT-4', 'OpenAI', '30.1', '0.0', '69.9', 'static/logos/openai.png', 'gpt-4'], [20, 'GLM3-Turbo', '智谱', '31.9', '2.7', '65.4', 'static/logos/zhipu.png', 'glm35'], [21, 'GPT-4o', 'OpenAI', '38.1', '0.0', '61.9', 'static/logos/openai.png', 'gpt-4o'], [22, 'Yi-Spark', '零一', '38.9', '0.0', '61.1', 'static/logos/01.png', 'yi-spark'], [23, 'GPT-3.5-Turbo', 'OpenAI', '38.9', '0.0', '61.1', 'static/logos/openai.png', 'gpt-3.5-turbo'], [24, 'Yi-Medium', '零一', '39.8', '0.0', '60.2', 'static/logos/01.png', 'yi-medium'], [25, 'GLM4', '智谱', '44.2', '1.8', '54.0', 'static/logos/zhipu.png', 'glm4'], [26, 'Yi-Large', '零一', '61.9', '0.0', '38.1', 'static/logos/01.png', 'yi-large']], 'l2_data': [[1, 'ABAB 5.5', 'Minimax', '15.0', '3.5', '81.5', 'static/logos/minimax.webp', 'abab55'], [2, 'Doubao-Pro', '字节', '18.6', '15.', '66.4', 'static/logos/bytedance.jpg', 'doubao-pro'], [3, 'Doubao-Lite', '字节', '20.4', '10.6', '69.0', 'static/logos/bytedance.jpg', 'doubao-lite'], [4, 'ABAB 6.0', 'Minimax', '22.1', '0.0', '77.9', 'static/logos/minimax.webp', 'abab6'], [5, 'ERNIE 3.5', '百度', '31.0', '0.0', '69.0', 'static/logos/wenxin.png', 'ernie-bot35'], [6, 'KimiChat', '月之暗面', '35.4', '0.0', '64.6', 'static/logos/kimichat.png', 'kimichat'], [7, 'Taichu-LLM', '中科院', '38.1', '10.6', '51.3', 'static/logos/zidong.png', 'taichu'], [8, 'ABAB 6.5', 'Minimax', '40.0', '0.0', '60.0', 'static/logos/minimax.webp', 'abab65'], [9, 'ERNIE 4.0', '百度', '40.7', '0.0', '59.3', 'static/logos/wenxin.png', 'ernie-bot4'], [10, 'Spark-v3.5', '科大讯飞', '44.2', '0.0', '55.8', 'static/logos/spark.png', 'spark35'], [11, 'Mengzi-STD', '澜舟科技', '50.4', '35.4', '14.2', 'static/logos/mengzi.png', 'mengzi-std'], [12, 'Qwen-Max', '阿里', '54.0', '5.3', '40.7', 'static/logos/qwen.png', 'qwen-max'], [13, 'Baichuan2', '百川智能', '54.9', '19.5', '25.6', 'static/logos/baichuan.png', 'baichuan2'], [14, 'SenseChat', '商汤', '59.3', '5.3', '35.4', 'static/logos/ririxin.png', 'sensechat'], [15, '360GPT-pro', '360', '64.6', '13.3', '22.1', 'static/logos/360.png', '360gpt-pro'], [16, 'Qwen-Turbo', '阿里', '65.5', '5.3', '29.2', 'static/logos/qwen.png', 'qwen-turbo'], [17, 'GPT-4', 'OpenAI', '65.5', '0.0', '34.5', 'static/logos/openai.png', 'gpt-4'], [18, 'GLM3-Turbo', '智谱', '66.4', '5.3', '28.3', 'static/logos/zhipu.png', 'glm35'], [19, 'GPT-3.5-Turbo', 'OpenAI', '69.0', '0.0', '31.0', 'static/logos/openai.png', 'gpt-3.5-turbo'], [20, 'SkyChat', '昆仑万维', '70.8', '1.8', '27.4', 'static/logos/tiangong.png', 'skychat-megaverse'], [21, 'Qwen-Plus', '阿里', '73.5', '6.2', '20.3', 'static/logos/qwen.png', 'qwen-plus'], [22, 'Yi-Medium', '零一', '76.1', '0.0', '23.9', 'static/logos/01.png', 'yi-medium'], [23, 'Yi-Spark', '零一', '80.5', '0.0', '19.5', 'static/logos/01.png', 'yi-spark'], [24, 'GPT-4o', 'OpenAI', '83.2', '0.0', '16.8', 'static/logos/openai.png', 'gpt-4o'], [25, 'GLM4', '智谱', '85.0', '2.7', '12.3', 'static/logos/zhipu.png', 'glm4'], [26, 'Yi-Large', '零一', '92.0', '0.0', '8.0', 'static/logos/01.png', 'yi-large']], 'l3_data': [[1, 'Doubao-Pro', '字节', '33.6', '11.5', '54.9', 'static/logos/bytedance.jpg', 'doubao-pro'], [2, 'ABAB 6.0', 'Minimax', '39.8', '0.0', '60.2', 'static/logos/minimax.webp', 'abab6'], [3, 'ABAB 5.5', 'Minimax', '42.5', '3.5', '54.0', 'static/logos/minimax.webp', 'abab55'], [4, 'Doubao-Lite', '字节', '44.3', '11.5', '44.2', 'static/logos/bytedance.jpg', 'doubao-lite'], [5, 'Mengzi-STD', '澜舟科技', '46.9', '49.6', '3.5', 'static/logos/mengzi.png', 'mengzi-std'], [6, 'SenseChat', '商汤', '58.4', '7.1', '34.5', 'static/logos/ririxin.png', 'sensechat'], [7, 'Taichu-LLM', '中科院', '58.4', '15.9', '25.7', 'static/logos/zidong.png', 'taichu'], [8, 'Baichuan2', '百川智能', '59.3', '31.9', '8.8', 'static/logos/baichuan.png', 'baichuan2'], [9, 'Spark-v3.5', '科大讯飞', '61.9', '0.9', '37.2', 'static/logos/spark.png', 'spark35'], [10, 'ERNIE 3.5', '百度', '68.1', '0.0', '31.9', 'static/logos/wenxin.png', 'ernie-bot35'], [11, 'ABAB 6.5', 'Minimax', '68.7', '0.0', '31.3', 'static/logos/minimax.webp', 'abab65'], [12, 'ERNIE 4.0', '百度', '71.7', '0.0', '28.3', 'static/logos/wenxin.png', 'ernie-bot4'], [13, 'KimiChat', '月之暗面', '72.6', '1.8', '25.6', 'static/logos/kimichat.png', 'kimichat'], [14, 'Qwen-Max', '阿里', '76.1', '2.7', '21.2', 'static/logos/qwen.png', 'qwen-max'], [15, 'GLM3-Turbo', '智谱', '80.5', '7.1', '12.4', 'static/logos/zhipu.png', 'glm35'], [16, 'GPT-3.5-Turbo', 'OpenAI', '81.4', '0.0', '18.6', 'static/logos/openai.png', 'gpt-3.5-turbo'], [17, 'Yi-Large', '零一', '82.3', '0.0', '17.7', 'static/logos/01.png', 'yi-large'], [18, 'Yi-Medium', '零一', '84.1', '0.0', '15.9', 'static/logos/01.png', 'yi-medium'], [19, 'SkyChat', '昆仑万维', '84.1', '6.2', '9.7', 'static/logos/tiangong.png', 'skychat-megaverse'], [20, 'GPT-4', 'OpenAI', '85.8', '0.0', '14.2', 'static/logos/openai.png', 'gpt-4'], [21, 'Yi-Spark', '零一', '86.7', '0.0', '13.3', 'static/logos/01.png', 'yi-spark'], [22, '360GPT-pro', '360', '89.4', '4.4', '6.2', 'static/logos/360.png', '360gpt-pro'], [23, 'Qwen-Turbo', '阿里', '90.3', '3.5', '6.2', 'static/logos/qwen.png', 'qwen-turbo'], [24, 'GLM4', '智谱', '92.9', '4.4', '2.7', 'static/logos/zhipu.png', 'glm4'], [25, 'GPT-4o', 'OpenAI', '92.9', '0.0', '7.1', 'static/logos/openai.png', 'gpt-4o'], [26, 'Qwen-Plus', '阿里', '93.8', '4.4', '1.8', 'static/logos/qwen.png', 'qwen-plus']]}

let chart1 = null
let chart2 = null
let chart3 = null


function draw_ladder(div_name, data_name, title, level, myChart){
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
        var option = initChart1(data=l1_data, which_key='inner')
     }else if(obj.name == '安全合规率'){
        var option = initChart1(data=l1_data, which_key='outer')
     }else{
        var option = initChart1(data=l1_data, which_key='rejection')
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

function initChart1(data, which_key){
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
        asrs.push({"value": (100-parseFloat(row[3])), "url": "details_43D23E941FF874F69310B980DBC7C855?model_id="+row[7]+"&level="+level})
        reject_rate.push({"value": parseFloat(row[4]), "url": "details_43D23E941FF874F69310B980DBC7C855?model_id="+row[7]+"&level="+level})
        safety_index.push({"value": parseFloat(row[5]), "url": "details_43D23E941FF874F69310B980DBC7C855?model_id="+row[7]+"&level="+level})
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

    let option = {
      title: {
          text: title
  },
  tooltip: {
  trigger: 'axis',
  axisPointer: {
  type: 'shadow'
  },

    // formatter: "类目值：{b0}<br/> {a0}:{c0}封 <br/>{a1}:{c1}个 <br/>"
  },
  legend: {
  data: ['安全合规率', '拒答率', '内生安全指数'],
  x: 'center',
  y: 'top'
  },
  grid: {
  left: 150
  },
  toolbox: {
  show: true,
  feature: {
  saveAsImage: {}
  }
  },
  xAxis: {
  type: 'value',
  position:'top',
  name: '',
  max: 100,
  axisLabel: {
  formatter: '{value}.0%'
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
  margin: 20,
  rich: rich_infos
  }
  },
  series: [
  {
  name: '安全合规率',
  type: 'bar',
  data: asrs,
  label: seriesLabel,
  emphasis: {
  focus: 'series'
  },
  backgroundColor: "gray"
  },
  {
  name: '拒答率',
  stack: 'Total',
  type: 'bar',
  emphasis: {
  focus: 'series'
  },
  label: {
  show: false
  },
  data: reject_rate
  },
  {
  name: '内生安全指数',
  type: 'bar',
  stack: 'Total',
  label: seriesLabel,
  data: safety_index
  }
  ],
  animationDuration: 600, //动画时长 缓动效果
  animationDurationUpdate: 600, //排序（柱图上升或者下降）动画完成时间
  animationEasing: "linear", //初始动画缓动效果，这里设置为"linear"，表示线性缓动
  animationEasingUpdate: "linear", //数据更新时的动画缓动效果，这里设置为"linear"，表示线性缓动
  };
    return option
}

var option = initChart1(data=l1_data, which_key='outer')

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

legendselect1(['安全合规率', '拒答率', '内生安全指数'])
window.addEventListener('resize', myChart.resize)
myChart.on('click', function (param) {
  window.location.href = param.data.url;
});

return myChart
}

var charts = new Array()
chart1=draw_ladder('l1-container', 'l1_data', title='24年夏季版·入门级', level="l1", myChart=chart1)
chart2=draw_ladder('l2-container', 'l2_data', title='24年夏季版·进阶级', level="l2", myChart=chart2)
chart3=draw_ladder('l3-container', 'l3_data', title='24年夏季版·专家级', level="l3", myChart=chart3)
charts.push(chart1)
charts.push(chart2)
charts.push(chart3)

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
  for (idx in charts){
    charts[idx].resize()
  }

})