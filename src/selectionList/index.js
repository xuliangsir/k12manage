/**
 * Created by HarryLee on 2017/6/16.
 */


export const selectionList = {
  name:{
    value:'',
      title:'动作名称',
      isSelection:false,
      isInput:true,
      isCascader:false,
  },
  bodypart:{
    value:'',
      title:'训练部位',
      isSelection:true,
      isInput:false,
      isCascader:false,
      options:[
      {
        value:101,
        label:'胸部'
      },
      {
        value:102,
        label:'肩部'
      },
      {
        value:103,
        label:'背部'
      },
      {
        value:104,
        label:'手臂'
      },
      {
        value:105,
        label:'腹部'
      },
      {
        value:106,
        label:'臀部'
      },
      {
        value:107,
        label:'腿部'
      },
      {
        value:108,
        label:'全身综合'
      }
    ]
  },
  appliance:{
    value:[],
      title:'训练器械',
      isSelection:false,
      isInput:false,
      isCascader:true,
      cascaderOptions: [{
      value: 200,
      label: '自由器械',
      children: [
        {
          value:201,
          label:'哑铃'
        },
        {
          value:202,
          label:'杠铃'
        },
        {
          value:203,
          label:'壶铃'
        },
        {
          value:204,
          label:'弹力带'
        },
        {
          value:205,
          label:'TRX绳'
        },
        {
          value:206,
          label:'战绳'
        },
        {
          value:207,
          label:'药球'
        },
        {
          value:208,
          label:'瑞士球'
        },
        {
          value:209,
          label:'波速球'
        },
        {
          value:210,
          label:'泡沫轴'
        }
      ]
    }, {
      value: 300,
      label: '固定器械',
      children: [
        {
          value:301,
          label:'龙门架'
        },
        {
          value:302,
          label:'史密斯机'
        },
        {
          value:303,
          label:'推胸机'
        },
        {
          value:304,
          label:'悍马机'
        },
        {
          value:305,
          label:'夹胸器'
        },
        {
          value:306,
          label:'划船机'
        },
        {
          value:307,
          label:'下拉机'
        },
        {
          value:308,
          label:'地雷架'
        },
        {
          value:309,
          label:'推肩器'
        },
        {
          value:310,
          label:'倒蹬机'
        },
        {
          value:311,
          label:'哈克机'
        },
        {
          value:312,
          label:'腿弯举机'
        },
        {
          value:313,
          label:'腿屈伸机'
        },
        {
          value:314,
          label:'提踵机'
        },
        {
          value:315,
          label:'单杠'
        },
        {
          value:316,
          label:'双杠'
        },
        {
          value:317,
          label:'仰卧板'
        },
        {
          value:318,
          label:'罗马椅'
        },
        {
          value:319,
          label:'牧师凳'
        },
        {
          value:320,
          label:'台阶机'
        },
        {
          value:321,
          label:'动感单车'
        },
        {
          value:322,
          label:'椭圆机'
        },
        {
          value:323,
          label:'跑步机'
        }
      ]
    }, {
      value: 400,
      label: '徒手训练',
      children: [
        {
          value:400,
          label:'徒手训练'
        }
      ]
    }],
  },
  target:{
    value:'',
      title:'训练目标',
      isSelection:true,
      isInput:false,
      isCascader:false,
      options:[
      {
        value: 501,
        label: '增肌'
      },
      {
        value: 502,
        label: '减脂'
      },
      {
        value: 503,
        label: '塑形'
      },
      {
        value: 504,
        label: '拉伸'
      }
    ]
  },
  grade:{
    value:'',
      title:'训练级别',
      isSelection:true,
      isInput:false,
      isCascader:false,
      options:[
      {
        value: 601,
        label: '初级'
      },
      {
        value: 602,
        label: '中级'
      },
      {
        value: 603,
        label: '高级'
      }
    ]
  },
  main_muscle:{
    value:'',
      title:'主肌肉群',
      isSelection:false,
      isInput:true,
      isCascader:false,
  },
};
