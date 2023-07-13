const Mock = require('mockjs');
//轮播图
const lunbo = [
  {
    img: require('../assets/img/L1.jpg')
  },
  {
    img: require('../assets/img/L2.jpg'),
  },
  {
    img: require('../assets/img/L3.jpg'),
  }
]

Mock.mock(/\/api\/lunbo/, 'get', lunbo);
//文章
const essayContect = [
  {
    id: 0,
    img: require("@/assets/img/L1.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "张三",
    num: 21,

  },
  {
    id: 1,
    img: require("@/assets/img/L2.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "李四",
    num: 2
  },
  {
    id: 2,
    img: require("@/assets/img/L3.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "王五",
    num: 0
  },
  {
    id: 3,
    img: require("@/assets/img/L1.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "王三",
    num: 10
  },
  {
    id: 4,
    img: require("@/assets/img/L2.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "李五",
    num: 3
  },
]
Mock.mock(/\/api\/essayContect/, 'get', essayContect)

//品牌
const brands = {
  AZs: [
    {
      id: 1,
      img: require('@/assets/img/Samsung.jpg'),
      name: 'Samsung'
    },
    {
      id: 2,
      img: require('@/assets/img/huawei.jpg'),
      name: '华为'
    },
    {
      id: 3,
      img: require('@/assets/img/mi.jpg'),
      name: '小米'
    },
    {
      id: 4,
      img: require('@/assets/img/1+.jpg'),
      name: '一加'
    },
    {
      id: 5,
      img: require('@/assets/img/oppo.jpg'),
      name: 'OPPO'
    },
    {
      id: 6,
      img: require('@/assets/img/smartisan.jpg'),
      name: '锤子'
    },
  ],
  watchs: [
    {
      id: 7,
      img: require('@/assets/img/apple.jpg'),
      name: 'Apple'
    },
    {
      id: 8,
      img: require('@/assets/img/Samsung.jpg'),
      name: 'Samsung'
    },
    {
      id: 9,
      img: require('@/assets/img/mi.jpg'),
      name: '小米'
    },
  ],
  pads: [
    {
      id: 10,
      img: require('@/assets/img/apple.jpg'),
      name: 'Apple'
    },
    {
      id: 11,
      img: require('@/assets/img/Samsung.jpg'),
      name: 'Samsung'
    },
    {
      id: 12,
      img: require('@/assets/img/mi.jpg'),
      name: '小米'
    },
    {
      id: 13,
      img: require('@/assets/img/huawei.jpg'),
      name: '华为'
    },
  ],
  PCs: [
    {
      id: 14,
      img: require('@/assets/img/apple.jpg'),
      name: 'Apple'
    },
    {
      id: 15,
      img: require('@/assets/img/Samsung.jpg'),
      name: 'Samsung'
    },
    {
      id: 16,
      img: require('@/assets/img/huawei.jpg'),
      name: '华为'
    },
    {
      id: 17,
      img: require('@/assets/img/lenovo.jpg'),
      name: '联想'
    }
  ],
  PJs: [
    {
      id: 18,
      img: require('@/assets/img/apple.jpg'),
      name: 'Apple'
    },
    {
      id: 19,
      img: require('@/assets/img/Samsung.jpg'),
      name: 'Samsung'
    },
  ],
}
Mock.mock(/\/api\/product/, 'get', brands)
//产品选择
const phones = [
  {
    id: 1,
    info: [
      {
        no: 1,
        img: require("@/assets/img/iPhone11 Pro Max.jpg"),
        name: 'iPhone11 Pro Max',
        cpu: 'A13',
        feature1: 'HDR10',
        feature2: '后置三摄',
        price: 9599
      },
      {
        no: 2,
        img: require("@/assets/img/iPhone11.jpg"),
        name: 'iPhone11',
        cpu: 'A13',
        feature1: '夜景模式',
        feature2: 'GPU抗锯齿',
        price: 5499
      },
      {
        no: 3,
        img: require("@/assets/img/iPhone11 Pro.jpg"),
        name: 'iPhone11 Pro',
        cpu: 'A13',
        feature1: 'HDR10',
        feature2: '后置三摄',
        price: 9599
      },
      {
        no: 4,
        img: require("@/assets/img/iPhoneXR.jpg"),
        name: 'iPhone11 XR',
        cpu: 'A12',
        feature1: '双卡双待',
        feature2: '超长续航',
        price: 4599
      },
      {
        no: 5,
        img: require("@/assets/img/iPhoneX.jpg"),
        name: 'iPhoneX',
        cpu: 'A11',
        feature1: 'FaceID',
        feature2: '无线充电',
        price: 5999
      },
      {
        no: 6,
        img: require("@/assets/img/iPhoneXS Max.jpg"),
        name: 'iPhoneXS Max',
        cpu: 'A12',
        feature1: '双卡双待',
        feature2: '后置双摄',
        price: 5138
      },
      {
        no: 7,
        img: require("@/assets/img/iPhone8.jpg"),
        name: 'iPhone8',
        cpu: 'A11',
        feature1: '双面玻璃',
        feature2: '无线充电',
        price: 3399
      },
      {
        no: 8,
        img: require("@/assets/img/iPhone8 Plus.jpg"),
        name: 'iPhone8 Plus',
        cpu: 'A11',
        feature1: '双面玻璃',
        feature2: '无线充电',
        price: 5999
      },
      {
        no: 9,
        img: require("@/assets/img/iPhoneXS.jpg"),
        name: 'iPhoneXS',
        cpu: 'A12',
        feature1: '超视网膜屏幕',
        feature2: '后置双摄',
        price: 5138
      },
    ]
  },
  {
    id: 2,
    info: [
      {
        no: 10,
        img: require("@/assets/img/S20.jpg"),
        name: '三星Galaxy S20',
        cpu: '高通骁龙865',
        feature1: '6400万主摄',
        feature2: 'LPDDR5',
        price: 6999
      },
      {
        no: 11,
        img: require("@/assets/img/Note10.jpg"),
        name: '三星Galaxy Note10+ 5G',
        cpu: '高通骁龙855',
        feature1: '疾速5G',
        feature2: '智慧型S Pen',
        price: 6199
      },
      {
        no: 12,
        img: require("@/assets/img/Fold.jpg"),
        name: '三星Galaxy Fold',
        cpu: '高通骁龙855',
        feature1: '折叠屏',
        feature2: '6摄',
        price: 12999
      },
      {
        no: 13,
        img: require("@/assets/img/Z Flip.jpg"),
        name: '三星Galaxy Z Flip',
        cpu: '高通骁龙855',
        feature1: '灵动外屏',
        feature2: '折叠手机',
        price: 11999
      },
      {
        no: 14,
        img: require("@/assets/img/S10.jpg"),
        name: '三星Galaxy S10',
        cpu: '高通骁龙855',
        feature1: '超声波指纹识别',
        feature2: '超广角摄像头',
        price: 3699
      },
      {
        no: 15,
        img: require("@/assets/img/W20.jpg"),
        name: '三星W20 5G',
        cpu: '高通骁龙855+',
        feature1: '折叠屏',
        feature2: '全方位摄像头',
        price: 19999
      },
      {
        no: 16,
        img: require("@/assets/img/S20 Ultra.jpg"),
        name: '三星Galaxy S20 Ultra',
        cpu: '高通骁龙865',
        feature1: '1.08亿后置主摄',
        feature2: '100倍混合变焦',
        price: 9999
      },
      {
        no: 17,
        img: require("@/assets/img/S10+.jpg"),
        name: '三星Galaxy S10+',
        cpu: '高通骁龙855',
        feature1: '超声波指纹识别',
        feature2: '超广角摄像头',
        price: 4199
      },
      {
        no: 18,
        img: require("@/assets/img/Note10.jpg"),
        name: '三星Galaxy Note10',
        cpu: '高通骁龙855',
        feature1: '智慧型S Pen',
        feature2: 'TOF摄像头',
        price: 5399
      },
      {
        no: 19,
        img: require("@/assets/img/S20+.jpg"),
        name: '三星Galaxy S20+',
        cpu: '高通骁龙',
        feature1: '8K拍摄',
        feature2: '30倍超视觉空间变焦',
        price: 7999
      },
      {
        no: 20,
        img: require("@/assets/img/Note9.jpg"),
        name: '三星Galaxy Note9',
        cpu: '高通骁龙845',
        feature1: '蓝牙S Pen',
        feature2: '钻石切割工艺',
        price: 4637
      },
      {
        no: 21,
        img: require("@/assets/img/S9.jpg"),
        name: '三星Galaxy S9',
        cpu: '高通骁龙845',
        feature1: '虹膜识别',
        feature2: '无线快充',
        price: 3299
      },
      {
        no: 22,
        img: require("@/assets/img/W2019.jpg"),
        name: '三星W2019',
        cpu: '高通骁龙845',
        feature1: 'Bixby',
        feature2: 'PCD切割工艺',
        price: 8828
      },
      {
        no: 23,
        img: require("@/assets/img/Note8.jpg"),
        name: '三星Galaxy Note8',
        cpu: '高通骁龙835',
        feature1: 'S Pen',
        feature2: '全视曲面屏',
        price: 3498
      },
      {
        no: 24,
        img: require("@/assets/img/S8.jpg"),
        name: '三星Galaxy S8',
        cpu: '高通骁龙835',
        feature1: '全视曲面屏',
        feature2: 'Bixby',
        price: 2942
      },
    ]
  },
  {
    id: 3,
    info: [
      {
        no: 25,
        img: require("@/assets/img/Mate Xs.jpg"),
        name: '华为Mate Xs',
        cpu: '麒麟990',
        feature1: '折叠屏',
        feature2: '大电池',
        price: 16999
      },
      {
        no: 26,
        img: require("@/assets/img/Mate30 Pro.jpg"),
        name: '华为Mate30 Pro',
        cpu: '麒麟990',
        feature1: '环幕屏',
        feature2: '双4000万徕卡四摄',
        price: 5799
      },
      {
        no: 27,
        img: require("@/assets/img/P30 Pro.jpg"),
        name: '华为P30 Pro',
        cpu: '麒麟980',
        feature1: '徕卡四摄',
        feature2: '曲面屏',
        price: 16999
      }
    ]
  },
  {
    id: 4,
    info: [
      {
        no: 28,
        img: require("@/assets/img/10 Pro.jpg"),
        name: '小米10 Pro',
        cpu: '高通骁龙865',
        feature1: '50倍混合变焦',
        feature2: '双模5G',
        price: 4999
      },
      {
        no: 29,
        img: require("@/assets/img/CC9 Pro.jpg"),
        name: '小米CC9 Pro',
        cpu: '高通骁龙730G',
        feature1: '一亿像素',
        feature2: '10倍混合变焦',
        price: 2599
      },
      {
        no: 30,
        img: require("@/assets/img/MIX Alpha.jpg"),
        name: '小米MIX Alpha',
        cpu: '高通骁龙855+',
        feature1: '环绕屏',
        feature2: '1亿像素',
        price: 19999
      },
    ]
  },
  {
    id: 5,
    info: [
      {
        no: 31,
        img: require("@/assets/img/7T Pro.jpg"),
        name: '一加7T Pro',
        cpu: '高通骁龙855+',
        feature1: '2K+90HZ流体屏',
        feature2: '超广角三摄',
        price: 3969
      },
      {
        no: 32,
        img: require("@/assets/img/7 Pro.jpg"),
        name: '一加7 Pro',
        cpu: '高通骁龙855',
        feature1: '90HZ流体屏',
        feature2: '电竞模式',
        price: 3699
      },
    ]
  },
  {
    id: 6,
    info: [
      {
        no: 33,
        img: require("@/assets/img/Reno3 Pro.jpg"),
        name: 'OPPO Reno3 Pro',
        cpu: '高通骁龙765G',
        feature1: 'VOOC闪充4.0',
        feature2: '超级双摄防抖',
        price: 3999
      },
      {
        no: 34,
        img: require("@/assets/img/Find X.jpg"),
        name: 'OPPO Find X',
        cpu: '高通骁龙845',
        feature1: '隐藏式3D摄像头',
        feature2: '双曲面屏',
        price: 3999
      },
    ]
  },
  {
    id: 7,
    info: [
      {
        no: 35,
        img: require("@/assets/img/Pro3.jpg"),
        name: '锤子坚果Pro 3',
        cpu: '高通骁龙855+',
        feature1: '4800万像素',
        feature2: 'Smartisan OS 7.0',
        price: 2599
      },
      {
        no: 36,
        img: require("@/assets/img/Pro2S.jpg"),
        name: '锤子坚果Pro 2S',
        cpu: '高通骁龙710',
        feature1: '线性马达',
        feature2: '子弹短信',
        price: 1149
      },
      {
        no: 37,
        img: require("@/assets/img/R1.jpg"),
        name: '锤子坚果R1',
        cpu: '高通骁龙845',
        feature1: '旗舰处理器',
        feature2: 'AI引擎',
        price: 1948
      },
    ]
  },
  {
    id: 8,
    info: [
      {
        no: 38,
        img: require("@/assets/img/Apple watch 5.jpg"),
        name: 'Apple Watch Series 5',
        cpu: 'S5+W3',
        feature1: 'GPS',
        feature2: '无线充电',
        price: 2942
      }
    ]
  },
  {
    id: 9,
    info: [
      {
        no: 39,
        img: require("@/assets/img/Galaxy watch.jpg"),
        name: '三星Galaxy Watch',
        cpu: '最新Exynos 9110',
        feature1: '50米防水',
        feature2: 'Bixby',
        price: 2199
      },
      {
        no: 40,
        img: require("@/assets/img/watch active.jpg"),
        name: '三星Galaxy Watch Active2',
        cpu: '最新Exynos 9110',
        feature1: '50米防水',
        feature2: 'Bixby',
        price: 1899
      }
    ]
  },
  {
    id: 10,
    info: [
      {
        no: 41,
        img: require("@/assets/img/mi watch.jpg"),
        name: '小米手表',
        cpu: '高通骁龙3100',
        feature1: '运动监测',
        feature2: 'Wear OS',
        price: 1299
      },
    ]
  },
  {
    id: 11,
    info: [
      {
        no: 42,
        img: require("@/assets/img/iPad Pro.jpg"),
        name: 'iPad Pro 11寸',
        cpu: 'A12X',
        feature1: '120Hz触控采样率',
        feature2: '全面屏',
        price: 5999
      },
      {
        no: 43,
        img: require("@/assets/img/iPad 2019.jpg"),
        name: 'iPad 2019',
        cpu: 'A10',
        feature1: '支持Apple Pencil',
        feature2: '10.2英寸',
        price: 2499
      },
      {
        no: 44,
        img: require("@/assets/img/iPad mini5.jpg"),
        name: 'iPad mini5',
        cpu: 'A12',
        feature1: '支持Apple Pencil',
        feature2: '7.9英寸',
        price: 2828
      },
    ]
  },
  {
    id: 12,
    info: [
      {
        no: 45,
        img: require("@/assets/img/Tab S6.jpg"),
        name: '三星Galaxy Tab S6',
        cpu: '高通骁龙855',
        feature1: '屏下指纹',
        feature2: 'Super AMOLED屏幕',
        price: 5099
      },
      {
        no: 46,
        img: require("@/assets/img/Tab S5e.jpg"),
        name: '三星Galaxy Tab S5e',
        cpu: '高通骁龙670',
        feature1: '侧边指纹',
        feature2: 'Super AMOLED屏幕',
        price: 2599
      },
    ]
  },
  {
    id: 13,
    info: [
      {
        no: 47,
        img: require("@/assets/img/4 plus.jpg"),
        name: '小米平板4 Plus',
        cpu: '高通骁龙660',
        feature1: '金属机身',
        feature2: '超长续航',
        price: 1899
      }
    ]
  },
  {
    id: 14,
    info: [
      {
        no: 48,
        img: require("@/assets/img/MatePad Pro.jpg"),
        name: '华为MatePad Pro',
        cpu: '麒麟990',
        feature1: '挖孔屏',
        feature2: '多屏协同',
        price: 3299
      }
    ]
  },
  {
    id: 15,
    info: [
      {
        no: 49,
        img: require("@/assets/img/Macbook pro 16.jpg"),
        name: 'MacBook Pro 16寸',
        cpu: '酷睿9代',
        feature1: '4G独显',
        feature2: 'IPS屏',
        price: 18799
      },
      {
        no: 50,
        img: require("@/assets/img/Macbook pro 13.3.jpg"),
        name: 'MacBook Pro 13.3寸',
        cpu: '酷睿8代',
        feature1: '集显',
        feature2: '背光键盘',
        price: 7500
      }
    ]
  },
  {
    id: 16,
    info: [
      {
        no: 51,
        img: require("@/assets/img/book flex.png"),
        name: '三星Galaxy Book Flex',
        cpu: '酷睿十代',
        feature1: 'QLED显示屏',
        feature2: '升级版SPEN',
        price: 11999
      },
      {
        no: 52,
        img: require("@/assets/img/book lon.png"),
        name: '三星Galaxy Book Lon',
        cpu: '酷睿十代',
        feature1: 'QLED显示屏',
        feature2: '触控板无线充电',
        price: 7999
      },
    ]
  },
  {
    id: 17,
    info: [
      {
        no: 53,
        img: require("@/assets/img/Matebook.jpg"),
        name: '华为MateBook 14',
        cpu: '酷睿十代',
        feature1: '触控屏',
        feature2: '2G独显',
        price: 5899
      }
    ]
  },
  {
    id: 18,
    info: [
      {
        no: 54,
        img: require("@/assets/img/xiaoxin pro.jpg"),
        name: '联想小新Pro 13',
        cpu: '酷睿十代',
        feature1: '集显',
        feature2: '高色域显示屏',
        price: 4999
      }
    ]
  },
  {
    id: 19,
    info: [
      {
        no: 55,
        img: require("@/assets/img/airpods pro.jpg"),
        name: 'AirPods Pro',
        cpu: 'H1芯片',
        feature1: '主动降噪',
        feature2: '新一代无线耳机',
        price: 1899
      },
      {
        no: 56,
        img: require("@/assets/img/airpods2.jpg"),
        name: 'AirPods 2',
        cpu: 'H1芯片',
        feature1: '双击唤醒Siri',
        feature2: '新一代无线耳机',
        price: 899
      },
    ]
  },
  {
    id: 20,
    info: [
      {
        no: 57,
        img: require("@/assets/img/buds+.jpg"),
        name: '三星Galaxy Buds+',
        cpu: '动圈耳机',
        feature1: '11小时续航',
        feature2: 'AKG调音',
        price: 999
      },
      {
        no: 58,
        img: require("@/assets/img/buds.jpg"),
        name: '三星Galaxy Buds',
        cpu: '动圈耳机',
        feature1: '9小时续航',
        feature2: 'AKG调音',
        price: 699
      },
    ]
  },

]
Mock.mock("/api/phones", "post", function (options) {
  let index = options.body;
  return phones[index];
})
//产品详细
const phonesDet = [
  {
    no: 1,
    img: require("@/assets/img/iPhone11 Pro Max.jpg"),
    name: 'iPhone11 Pro Max',
    cpu: 'A13',
    feature1: 'HDR10',
    feature2: '后置三摄',
    price: 9599
  },
  {
    no: 2,
    img: require("@/assets/img/iPhone11.jpg"),
    name: 'iPhone11',
    cpu: 'A13',
    feature1: '夜景模式',
    feature2: 'GPU抗锯齿',
    price: 5499
  },
  {
    no: 3,
    img: require("@/assets/img/iPhone11 Pro.jpg"),
    name: 'iPhone11 Pro',
    cpu: 'A13',
    feature1: 'HDR10',
    feature2: '后置三摄',
    price: 9599
  },
  {
    no: 4,
    img: require("@/assets/img/iPhoneXR.jpg"),
    name: 'iPhone11 XR',
    cpu: 'A12',
    feature1: '双卡双待',
    feature2: '超长续航',
    price: 4599
  },
  {
    no: 5,
    img: require("@/assets/img/iPhoneX.jpg"),
    name: 'iPhoneX',
    cpu: 'A11',
    feature1: 'FaceID',
    feature2: '无线充电',
    price: 5999
  },
  {
    no: 6,
    img: require("@/assets/img/iPhoneXS Max.jpg"),
    name: 'iPhoneXS Max',
    cpu: 'A12',
    feature1: '双卡双待',
    feature2: '后置双摄',
    price: 5138
  },
  {
    no: 7,
    img: require("@/assets/img/iPhone8.jpg"),
    name: 'iPhone8',
    cpu: 'A11',
    feature1: '双面玻璃',
    feature2: '无线充电',
    price: 3399
  },
  {
    no: 8,
    img: require("@/assets/img/iPhone8 Plus.jpg"),
    name: 'iPhone8 Plus',
    cpu: 'A11',
    feature1: '双面玻璃',
    feature2: '无线充电',
    price: 5999
  },
  {
    no: 9,
    img: require("@/assets/img/iPhoneXS.jpg"),
    name: 'iPhoneXS',
    cpu: 'A12',
    feature1: '超视网膜屏幕',
    feature2: '后置双摄',
    price: 5138
  },
  {
    no: 10,
    img: require("@/assets/img/S20.jpg"),
    name: '三星Galaxy S20',
    cpu: '高通骁龙865',
    feature1: '6400万主摄',
    feature2: 'LPDDR5',
    price: 6999
  },
  {
    no: 11,
    img: require("@/assets/img/Note10.jpg"),
    name: '三星Galaxy Note10+ 5G',
    cpu: '高通骁龙855',
    feature1: '疾速5G',
    feature2: '智慧型S Pen',
    price: 6199
  },
  {
    no: 12,
    img: require("@/assets/img/Fold.jpg"),
    name: '三星Galaxy Fold',
    cpu: '高通骁龙855',
    feature1: '折叠屏',
    feature2: '6摄',
    price: 12999
  },
  {
    no: 13,
    img: require("@/assets/img/Z Flip.jpg"),
    name: '三星Galaxy Z Flip',
    cpu: '高通骁龙855',
    feature1: '灵动外屏',
    feature2: '折叠手机',
    price: 11999
  },
  {
    no: 14,
    img: require("@/assets/img/S10.jpg"),
    name: '三星Galaxy S10',
    cpu: '高通骁龙855',
    feature1: '超声波指纹识别',
    feature2: '超广角摄像头',
    price: 3699
  },
  {
    no: 15,
    img: require("@/assets/img/W20.jpg"),
    name: '三星W20 5G',
    cpu: '高通骁龙855+',
    feature1: '折叠屏',
    feature2: '全方位摄像头',
    price: 19999
  },
  {
    no: 16,
    img: require("@/assets/img/S20 Ultra.jpg"),
    name: '三星Galaxy S20 Ultra',
    cpu: '高通骁龙865',
    feature1: '1.08亿后置主摄',
    feature2: '100倍混合变焦',
    price: 9999
  },
  {
    no: 17,
    img: require("@/assets/img/S10+.jpg"),
    name: '三星Galaxy S10+',
    cpu: '高通骁龙855',
    feature1: '超声波指纹识别',
    feature2: '超广角摄像头',
    price: 4199
  },
  {
    no: 18,
    img: require("@/assets/img/Note10.jpg"),
    name: '三星Galaxy Note10',
    cpu: '高通骁龙855',
    feature1: '智慧型S Pen',
    feature2: 'TOF摄像头',
    price: 5399
  },
  {
    no: 19,
    img: require("@/assets/img/S20+.jpg"),
    name: '三星Galaxy S20+',
    cpu: '高通骁龙',
    feature1: '8K拍摄',
    feature2: '30倍超视觉空间变焦',
    price: 7999
  },
  {
    no: 20,
    img: require("@/assets/img/Note9.jpg"),
    name: '三星Galaxy Note9',
    cpu: '高通骁龙845',
    feature1: '蓝牙S Pen',
    feature2: '钻石切割工艺',
    price: 4637
  },
  {
    no: 21,
    img: require("@/assets/img/S9.jpg"),
    name: '三星Galaxy S9',
    cpu: '高通骁龙845',
    feature1: '虹膜识别',
    feature2: '无线快充',
    price: 3299
  },
  {
    no: 22,
    img: require("@/assets/img/W2019.jpg"),
    name: '三星W2019',
    cpu: '高通骁龙845',
    feature1: 'Bixby',
    feature2: 'PCD切割工艺',
    price: 8828
  },
  {
    no: 23,
    img: require("@/assets/img/Note8.jpg"),
    name: '三星Galaxy Note8',
    cpu: '高通骁龙835',
    feature1: 'S Pen',
    feature2: '全视曲面屏',
    price: 3498
  },
  {
    no: 24,
    img: require("@/assets/img/S8.jpg"),
    name: '三星Galaxy S8',
    cpu: '高通骁龙835',
    feature1: '全视曲面屏',
    feature2: 'Bixby',
    price: 2942
  },
  {
    no: 25,
    img: require("@/assets/img/Mate Xs.jpg"),
    name: '华为Mate Xs',
    cpu: '麒麟990',
    feature1: '折叠屏',
    feature2: '大电池',
    price: 16999
  },
  {
    no: 26,
    img: require("@/assets/img/Mate30 Pro.jpg"),
    name: '华为Mate30 Pro',
    cpu: '麒麟990',
    feature1: '环幕屏',
    feature2: '双4000万徕卡四摄',
    price: 5799
  },
  {
    no: 27,
    img: require("@/assets/img/P30 Pro.jpg"),
    name: '华为P30 Pro',
    cpu: '麒麟980',
    feature1: '徕卡四摄',
    feature2: '曲面屏',
    price: 16999
  },
  {
    no: 28,
    img: require("@/assets/img/10 Pro.jpg"),
    name: '小米10 Pro',
    cpu: '高通骁龙865',
    feature1: '50倍混合变焦',
    feature2: '双模5G',
    price: 4999
  },
  {
    no: 29,
    img: require("@/assets/img/CC9 Pro.jpg"),
    name: '小米CC9 Pro',
    cpu: '高通骁龙730G',
    feature1: '一亿像素',
    feature2: '10倍混合变焦',
    price: 2599
  },
  {
    no: 30,
    img: require("@/assets/img/MIX Alpha.jpg"),
    name: '小米MIX Alpha',
    cpu: '高通骁龙855+',
    feature1: '环绕屏',
    feature2: '1亿像素',
    price: 19999
  },
  {
    no: 31,
    img: require("@/assets/img/7T Pro.jpg"),
    name: '一加7T Pro',
    cpu: '高通骁龙855+',
    feature1: '2K+90HZ流体屏',
    feature2: '超广角三摄',
    price: 3969
  },
  {
    no: 32,
    img: require("@/assets/img/7 Pro.jpg"),
    name: '一加7 Pro',
    cpu: '高通骁龙855',
    feature1: '90HZ流体屏',
    feature2: '电竞模式',
    price: 3699
  }, {
    no: 33,
    img: require("@/assets/img/Reno3 Pro.jpg"),
    name: 'OPPO Reno3 Pro',
    cpu: '高通骁龙765G',
    feature1: 'VOOC闪充4.0',
    feature2: '超级双摄防抖',
    price: 3999
  },
  {
    no: 34,
    img: require("@/assets/img/Find X.jpg"),
    name: 'OPPO Find X',
    cpu: '高通骁龙845',
    feature1: '隐藏式3D摄像头',
    feature2: '双曲面屏',
    price: 3999
  },
  {
    no: 35,
    img: require("@/assets/img/Pro3.jpg"),
    name: '锤子坚果Pro 3',
    cpu: '高通骁龙855+',
    feature1: '4800万像素',
    feature2: 'Smartisan OS 7.0',
    price: 2599
  },
  {
    no: 36,
    img: require("@/assets/img/Pro2S.jpg"),
    name: '锤子坚果Pro 2S',
    cpu: '高通骁龙710',
    feature1: '线性马达',
    feature2: '子弹短信',
    price: 1149
  },
  {
    no: 37,
    img: require("@/assets/img/R1.jpg"),
    name: '锤子坚果R1',
    cpu: '高通骁龙845',
    feature1: '旗舰处理器',
    feature2: 'AI引擎',
    price: 1948
  },
  {
    no: 38,
    img: require("@/assets/img/Apple watch 5.jpg"),
    name: 'Apple Watch Series 5',
    cpu: 'S5+W3',
    feature1: 'GPS',
    feature2: '无线充电',
    price: 2942
  },
  {
    no: 39,
    img: require("@/assets/img/Galaxy watch.jpg"),
    name: '三星Galaxy Watch',
    cpu: '最新Exynos 9110',
    feature1: '50米防水',
    feature2: 'Bixby',
    price: 2199
  },
  {
    no: 40,
    img: require("@/assets/img/watch active.jpg"),
    name: '三星Galaxy Watch Active2',
    cpu: '最新Exynos 9110',
    feature1: '50米防水',
    feature2: 'Bixby',
    price: 1899
  },
  {
    no: 41,
    img: require("@/assets/img/mi watch.jpg"),
    name: '小米手表',
    cpu: '高通骁龙3100',
    feature1: '运动监测',
    feature2: 'Wear OS',
    price: 1299
  },
  {
    no: 42,
    img: require("@/assets/img/iPad Pro.jpg"),
    name: 'iPad Pro 11寸',
    cpu: 'A12X',
    feature1: '120Hz触控采样率',
    feature2: '全面屏',
    price: 5999
  },
  {
    no: 43,
    img: require("@/assets/img/iPad 2019.jpg"),
    name: 'iPad 2019',
    cpu: 'A10',
    feature1: '支持Apple Pencil',
    feature2: '10.2英寸',
    price: 2499
  },
  {
    no: 44,
    img: require("@/assets/img/iPad mini5.jpg"),
    name: 'iPad mini5',
    cpu: 'A12',
    feature1: '支持Apple Pencil',
    feature2: '7.9英寸',
    price: 2828
  },
  {
    no: 45,
    img: require("@/assets/img/Tab S6.jpg"),
    name: '三星Galaxy Tab S6',
    cpu: '高通骁龙855',
    feature1: '屏下指纹',
    feature2: 'Super AMOLED屏幕',
    price: 5099
  },
  {
    no: 46,
    img: require("@/assets/img/Tab S5e.jpg"),
    name: '三星Galaxy Tab S5e',
    cpu: '高通骁龙670',
    feature1: '侧边指纹',
    feature2: 'Super AMOLED屏幕',
    price: 2599
  },
  {
    no: 47,
    img: require("@/assets/img/4 plus.jpg"),
    name: '小米平板4 Plus',
    cpu: '高通骁龙660',
    feature1: '金属机身',
    feature2: '超长续航',
    price: 1899
  },
  {
    no: 48,
    img: require("@/assets/img/MatePad Pro.jpg"),
    name: '华为MatePad Pro',
    cpu: '麒麟990',
    feature1: '挖孔屏',
    feature2: '多屏协同',
    price: 3299
  },
  {
    no: 49,
    img: require("@/assets/img/Macbook pro 16.jpg"),
    name: 'MacBook Pro 16寸',
    cpu: '酷睿9代',
    feature1: '4G独显',
    feature2: 'IPS屏',
    price: 18799
  },
  {
    no: 50,
    img: require("@/assets/img/Macbook pro 13.3.jpg"),
    name: 'MacBook Pro 13.3寸',
    cpu: '酷睿8代',
    feature1: '集显',
    feature2: '背光键盘',
    price: 7500
  },
  {
    no: 51,
    img: require("@/assets/img/book flex.png"),
    name: '三星Galaxy Book Flex',
    cpu: '酷睿十代',
    feature1: 'QLED显示屏',
    feature2: '升级版SPEN',
    price: 11999
  },
  {
    no: 52,
    img: require("@/assets/img/book lon.png"),
    name: '三星Galaxy Book Lon',
    cpu: '酷睿十代',
    feature1: 'QLED显示屏',
    feature2: '触控板无线充电',
    price: 7999
  },
  {
    no: 53,
    img: require("@/assets/img/Matebook.jpg"),
    name: '华为MateBook 14',
    cpu: '酷睿十代',
    feature1: '触控屏',
    feature2: '2G独显',
    price: 5899
  }, {
    no: 54,
    img: require("@/assets/img/xiaoxin pro.jpg"),
    name: '联想小新Pro 13',
    cpu: '酷睿十代',
    feature1: '集显',
    feature2: '高色域显示屏',
    price: 4999
  },
  {
    no: 55,
    img: require("@/assets/img/airpods pro.jpg"),
    name: 'AirPods Pro',
    cpu: 'H1芯片',
    feature1: '主动降噪',
    feature2: '新一代无线耳机',
    price: 1899
  },
  {
    no: 56,
    img: require("@/assets/img/airpods2.jpg"),
    name: 'AirPods 2',
    cpu: 'H1芯片',
    feature1: '双击唤醒Siri',
    feature2: '新一代无线耳机',
    price: 899
  },
  {
    no: 57,
    img: require("@/assets/img/buds+.jpg"),
    name: '三星Galaxy Buds+',
    cpu: '动圈耳机',
    feature1: '11小时续航',
    feature2: 'AKG调音',
    price: 999
  },
  {
    no: 58,
    img: require("@/assets/img/buds.jpg"),
    name: '三星Galaxy Buds',
    cpu: '动圈耳机',
    feature1: '9小时续航',
    feature2: 'AKG调音',
    price: 699
  },
]
Mock.mock("/api/phonesDet", "post", function (options) {
  let index = options.body;
  return phonesDet[index];
})
// 商城商品
const goods = [
  {
    id: 0,
    img: require("@/assets/img/iPhone11 Pro Max.jpg"),
    name: '苹果 iPhone 11 Pro Max',
    price: 9599
  },
  {
    id: 1,
    img: require("@/assets/img/S20 Ultra.jpg"),
    name: '三星Galaxy S20 Ultra',
    price: 9999
  },
  {
    id: 2,
    img: require("@/assets/img/Tab S6.jpg"),
    name: '三星Galaxy Tab S6',
    price: 5099
  },
  {
    id: 3,
    img: require("@/assets/img/iPad Pro.jpg"),
    name: 'Apple iPad Pro 11寸',
    price: 5999
  },
  {
    id: 4,
    img: require("@/assets/img/airpods pro.jpg"),
    name: 'Apple AirPods Pro',
    price: 1899
  },
  {
    id: 5,
    img: require("@/assets/img/buds+.jpg"),
    name: '三星Galaxy Buds+',
    price: 999
  }
]
Mock.mock(/\/api\/shopping/, 'get', goods)

//点击商品
const ShoppingGoods = [
  {
    id: 0,
    img: require("@/assets/img/iPhone11 Pro Max.jpg"),
    name: "iPhone11 Pro Max",
    price: 9599,
    cpu: 'A13',
    feature1: 'HDR10',
    feature2: '后置三摄',
    num: 1
  },
  {
    id: 1,
    img: require("@/assets/img/S20 Ultra.jpg"),
    name: '三星Galaxy S20 Ultra',
    cpu: '高通骁龙865',
    feature1: '1.08亿后置主摄',
    feature2: '100倍混合变焦',
    price: 9999,
    num: 1
  },
  {
    id: 2,
    img: require("@/assets/img/Tab S6.jpg"),
    name: '三星Galaxy Tab S6',
    cpu: '高通骁龙855',
    feature1: '屏下指纹',
    feature2: 'Super AMOLED屏幕',
    price: 5099,
    num: 1
  },
  {
    id: 3,
    img: require("@/assets/img/iPad Pro.jpg"),
    name: 'iPad Pro 11寸',
    cpu: 'A12X',
    feature1: '120Hz触控采样率',
    feature2: '全面屏',
    price: 5999,
    num: 1
  },
  {
    id: 4,
    img: require("@/assets/img/airpods pro.jpg"),
    name: 'AirPods Pro',
    cpu: 'H1芯片',
    feature1: '主动降噪',
    feature2: '新一代无线耳机',
    price: 1899,
    num: 1
  },
  {
    id: 5,
    img: require("@/assets/img/buds+.jpg"),
    name: '三星Galaxy Buds+',
    cpu: '动圈耳机',
    feature1: '11小时续航',
    feature2: 'AKG调音',
    price: 999,
    num: 1
  }
]
Mock.mock("/api/ShoppingDetail", "post", function (options) {
  let index = options.body;
  return ShoppingGoods[index];
})
//点击文章
const essays = [
  {
    id: 0,
    img: require("@/assets/img/L1.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "张三",
    num: 0,
    content: "折叠屏手机传了很多年,终于在去年成功上市,而且的确获得了很多高端用户的青睐。三星作为折叠屏设计的先锋,其首款大作Galaxy Fold 可以说是惊艳四座。近日,有外媒曝光了第二代三星Galaxy Fold ,新机将拥有更高的屏占比。"
  },
  {
    id: 1,
    img: require("@/assets/img/L2.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "李四",
    num: 0,
    content: "折叠屏手机传了很多年,终于在去年成功上市,而且的确获得了很多高端用户的青睐。三星作为折叠屏设计的先锋,其首款大作Galaxy Fold 可以说是惊艳四座。近日,有外媒曝光了第二代三星Galaxy Fold ,新机将拥有更高的屏占比。"
  },
  {
    id: 2,
    img: require("@/assets/img/L3.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "王五",
    num: 0,
    content: "折叠屏手机传了很多年,终于在去年成功上市,而且的确获得了很多高端用户的青睐。三星作为折叠屏设计的先锋,其首款大作Galaxy Fold 可以说是惊艳四座。近日,有外媒曝光了第二代三星Galaxy Fold ,新机将拥有更高的屏占比。"
  },
  {
    id: 3,
    img: require("@/assets/img/L1.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "王三",
    num: 0,
    content: "折叠屏手机传了很多年,终于在去年成功上市,而且的确获得了很多高端用户的青睐。三星作为折叠屏设计的先锋,其首款大作Galaxy Fold 可以说是惊艳四座。近日,有外媒曝光了第二代三星Galaxy Fold ,新机将拥有更高的屏占比。"
  },
  {
    id: 4,
    img: require("@/assets/img/L2.jpg"),
    title: "线缆的撒大苏发射点犯得上发生发射点发射点打",
    name: "李五",
    num: 0,
    content: "折叠屏手机传了很多年,终于在去年成功上市,而且的确获得了很多高端用户的青睐。三星作为折叠屏设计的先锋,其首款大作Galaxy Fold 可以说是惊艳四座。近日,有外媒曝光了第二代三星Galaxy Fold ,新机将拥有更高的屏占比。"
  },
]

Mock.mock("/api/essay", "post", function (options) {
  let index = options.body;
  return essays[index];
})
//所有产品
const allProduct = [
  {
    no: 1,
    img: require("@/assets/img/iPhone11 Pro Max.jpg"),
    name: 'iPhone11 Pro Max',
    cpu: 'A13',
    feature1: 'HDR10',
    feature2: '后置三摄',
    price: 9599
  },
  {
    no: 2,
    img: require("@/assets/img/iPhone11.jpg"),
    name: 'iPhone11',
    cpu: 'A13',
    feature1: '夜景模式',
    feature2: 'GPU抗锯齿',
    price: 5499
  },
  {
    no: 3,
    img: require("@/assets/img/iPhone11 Pro.jpg"),
    name: 'iPhone11 Pro',
    cpu: 'A13',
    feature1: 'HDR10',
    feature2: '后置三摄',
    price: 9599
  },
  {
    no: 4,
    img: require("@/assets/img/iPhoneXR.jpg"),
    name: 'iPhone11 XR',
    cpu: 'A12',
    feature1: '双卡双待',
    feature2: '超长续航',
    price: 4599
  },
  {
    no: 5,
    img: require("@/assets/img/iPhoneX.jpg"),
    name: 'iPhoneX',
    cpu: 'A11',
    feature1: 'FaceID',
    feature2: '无线充电',
    price: 5999
  },
  {
    no: 6,
    img: require("@/assets/img/iPhoneXS Max.jpg"),
    name: 'iPhoneXS Max',
    cpu: 'A12',
    feature1: '双卡双待',
    feature2: '后置双摄',
    price: 5138
  },
  {
    no: 7,
    img: require("@/assets/img/iPhone8.jpg"),
    name: 'iPhone8',
    cpu: 'A11',
    feature1: '双面玻璃',
    feature2: '无线充电',
    price: 3399
  },
  {
    no: 8,
    img: require("@/assets/img/iPhone8 Plus.jpg"),
    name: 'iPhone8 Plus',
    cpu: 'A11',
    feature1: '双面玻璃',
    feature2: '无线充电',
    price: 5999
  },
  {
    no: 9,
    img: require("@/assets/img/iPhoneXS.jpg"),
    name: 'iPhoneXS',
    cpu: 'A12',
    feature1: '超视网膜屏幕',
    feature2: '后置双摄',
    price: 5138
  },
  {
    no: 10,
    img: require("@/assets/img/S20.jpg"),
    name: '三星Galaxy S20',
    cpu: '高通骁龙865',
    feature1: '6400万主摄',
    feature2: 'LPDDR5',
    price: 6999
  },
  {
    no: 11,
    img: require("@/assets/img/Note10.jpg"),
    name: '三星Galaxy Note10+ 5G',
    cpu: '高通骁龙855',
    feature1: '疾速5G',
    feature2: '智慧型S Pen',
    price: 6199
  },
  {
    no: 12,
    img: require("@/assets/img/Fold.jpg"),
    name: '三星Galaxy Fold',
    cpu: '高通骁龙855',
    feature1: '折叠屏',
    feature2: '6摄',
    price: 12999
  },
  {
    no: 13,
    img: require("@/assets/img/Z Flip.jpg"),
    name: '三星Galaxy Z Flip',
    cpu: '高通骁龙855',
    feature1: '灵动外屏',
    feature2: '折叠手机',
    price: 11999
  },
  {
    no: 14,
    img: require("@/assets/img/S10.jpg"),
    name: '三星Galaxy S10',
    cpu: '高通骁龙855',
    feature1: '超声波指纹识别',
    feature2: '超广角摄像头',
    price: 3699
  },
  {
    no: 15,
    img: require("@/assets/img/W20.jpg"),
    name: '三星W20 5G',
    cpu: '高通骁龙855+',
    feature1: '折叠屏',
    feature2: '全方位摄像头',
    price: 19999
  },
  {
    no: 16,
    img: require("@/assets/img/S20 Ultra.jpg"),
    name: '三星Galaxy S20 Ultra',
    cpu: '高通骁龙865',
    feature1: '1.08亿后置主摄',
    feature2: '100倍混合变焦',
    price: 9999
  },
  {
    no: 17,
    img: require("@/assets/img/S10+.jpg"),
    name: '三星Galaxy S10+',
    cpu: '高通骁龙855',
    feature1: '超声波指纹识别',
    feature2: '超广角摄像头',
    price: 4199
  },
  {
    no: 18,
    img: require("@/assets/img/Note10.jpg"),
    name: '三星Galaxy Note10',
    cpu: '高通骁龙855',
    feature1: '智慧型S Pen',
    feature2: 'TOF摄像头',
    price: 5399
  },
  {
    no: 19,
    img: require("@/assets/img/S20+.jpg"),
    name: '三星Galaxy S20+',
    cpu: '高通骁龙',
    feature1: '8K拍摄',
    feature2: '30倍超视觉空间变焦',
    price: 7999
  },
  {
    no: 20,
    img: require("@/assets/img/Note9.jpg"),
    name: '三星Galaxy Note9',
    cpu: '高通骁龙845',
    feature1: '蓝牙S Pen',
    feature2: '钻石切割工艺',
    price: 4637
  },
  {
    no: 21,
    img: require("@/assets/img/S9.jpg"),
    name: '三星Galaxy S9',
    cpu: '高通骁龙845',
    feature1: '虹膜识别',
    feature2: '无线快充',
    price: 3299
  },
  {
    no: 22,
    img: require("@/assets/img/W2019.jpg"),
    name: '三星W2019',
    cpu: '高通骁龙845',
    feature1: 'Bixby',
    feature2: 'PCD切割工艺',
    price: 8828
  },
  {
    no: 23,
    img: require("@/assets/img/Note8.jpg"),
    name: '三星Galaxy Note8',
    cpu: '高通骁龙835',
    feature1: 'S Pen',
    feature2: '全视曲面屏',
    price: 3498
  },
  {
    no: 24,
    img: require("@/assets/img/S8.jpg"),
    name: '三星Galaxy S8',
    cpu: '高通骁龙835',
    feature1: '全视曲面屏',
    feature2: 'Bixby',
    price: 2942
  },
  {
    no: 25,
    img: require("@/assets/img/Mate Xs.jpg"),
    name: '华为Mate Xs',
    cpu: '麒麟990',
    feature1: '折叠屏',
    feature2: '大电池',
    price: 16999
  },
  {
    no: 26,
    img: require("@/assets/img/Mate30 Pro.jpg"),
    name: '华为Mate30 Pro',
    cpu: '麒麟990',
    feature1: '环幕屏',
    feature2: '双4000万徕卡四摄',
    price: 5799
  },
  {
    no: 27,
    img: require("@/assets/img/P30 Pro.jpg"),
    name: '华为P30 Pro',
    cpu: '麒麟980',
    feature1: '徕卡四摄',
    feature2: '曲面屏',
    price: 16999
  },
  {
    no: 28,
    img: require("@/assets/img/10 Pro.jpg"),
    name: '小米10 Pro',
    cpu: '高通骁龙865',
    feature1: '50倍混合变焦',
    feature2: '双模5G',
    price: 4999
  },
  {
    no: 29,
    img: require("@/assets/img/CC9 Pro.jpg"),
    name: '小米CC9 Pro',
    cpu: '高通骁龙730G',
    feature1: '一亿像素',
    feature2: '10倍混合变焦',
    price: 2599
  },
  {
    no: 30,
    img: require("@/assets/img/MIX Alpha.jpg"),
    name: '小米MIX Alpha',
    cpu: '高通骁龙855+',
    feature1: '环绕屏',
    feature2: '1亿像素',
    price: 19999
  },
  {
    no: 31,
    img: require("@/assets/img/7T Pro.jpg"),
    name: '一加7T Pro',
    cpu: '高通骁龙855+',
    feature1: '2K+90HZ流体屏',
    feature2: '超广角三摄',
    price: 3969
  },
  {
    no: 32,
    img: require("@/assets/img/7 Pro.jpg"),
    name: '一加7 Pro',
    cpu: '高通骁龙855',
    feature1: '90HZ流体屏',
    feature2: '电竞模式',
    price: 3699
  }, {
    no: 33,
    img: require("@/assets/img/Reno3 Pro.jpg"),
    name: 'OPPO Reno3 Pro',
    cpu: '高通骁龙765G',
    feature1: 'VOOC闪充4.0',
    feature2: '超级双摄防抖',
    price: 3999
  },
  {
    no: 34,
    img: require("@/assets/img/Find X.jpg"),
    name: 'OPPO Find X',
    cpu: '高通骁龙845',
    feature1: '隐藏式3D摄像头',
    feature2: '双曲面屏',
    price: 3999
  },
  {
    no: 35,
    img: require("@/assets/img/Pro3.jpg"),
    name: '锤子坚果Pro 3',
    cpu: '高通骁龙855+',
    feature1: '4800万像素',
    feature2: 'Smartisan OS 7.0',
    price: 2599
  },
  {
    no: 36,
    img: require("@/assets/img/Pro2S.jpg"),
    name: '锤子坚果Pro 2S',
    cpu: '高通骁龙710',
    feature1: '线性马达',
    feature2: '子弹短信',
    price: 1149
  },
  {
    no: 37,
    img: require("@/assets/img/R1.jpg"),
    name: '锤子坚果R1',
    cpu: '高通骁龙845',
    feature1: '旗舰处理器',
    feature2: 'AI引擎',
    price: 1948
  },
  {
    no: 38,
    img: require("@/assets/img/Apple watch 5.jpg"),
    name: 'Apple Watch Series 5',
    cpu: 'S5+W3',
    feature1: 'GPS',
    feature2: '无线充电',
    price: 2942
  },
  {
    no: 39,
    img: require("@/assets/img/Galaxy watch.jpg"),
    name: '三星Galaxy Watch',
    cpu: '最新Exynos 9110',
    feature1: '50米防水',
    feature2: 'Bixby',
    price: 2199
  },
  {
    no: 40,
    img: require("@/assets/img/watch active.jpg"),
    name: '三星Galaxy Watch Active2',
    cpu: '最新Exynos 9110',
    feature1: '50米防水',
    feature2: 'Bixby',
    price: 1899
  },
  {
    no: 41,
    img: require("@/assets/img/mi watch.jpg"),
    name: '小米手表',
    cpu: '高通骁龙3100',
    feature1: '运动监测',
    feature2: 'Wear OS',
    price: 1299
  },
  {
    no: 42,
    img: require("@/assets/img/iPad Pro.jpg"),
    name: 'iPad Pro 11寸',
    cpu: 'A12X',
    feature1: '120Hz触控采样率',
    feature2: '全面屏',
    price: 5999
  },
  {
    no: 43,
    img: require("@/assets/img/iPad 2019.jpg"),
    name: 'iPad 2019',
    cpu: 'A10',
    feature1: '支持Apple Pencil',
    feature2: '10.2英寸',
    price: 2499
  },
  {
    no: 44,
    img: require("@/assets/img/iPad mini5.jpg"),
    name: 'iPad mini5',
    cpu: 'A12',
    feature1: '支持Apple Pencil',
    feature2: '7.9英寸',
    price: 2828
  },
  {
    no: 45,
    img: require("@/assets/img/Tab S6.jpg"),
    name: '三星Galaxy Tab S6',
    cpu: '高通骁龙855',
    feature1: '屏下指纹',
    feature2: 'Super AMOLED屏幕',
    price: 5099
  },
  {
    no: 46,
    img: require("@/assets/img/Tab S5e.jpg"),
    name: '三星Galaxy Tab S5e',
    cpu: '高通骁龙670',
    feature1: '侧边指纹',
    feature2: 'Super AMOLED屏幕',
    price: 2599
  },
  {
    no: 47,
    img: require("@/assets/img/4 plus.jpg"),
    name: '小米平板4 Plus',
    cpu: '高通骁龙660',
    feature1: '金属机身',
    feature2: '超长续航',
    price: 1899
  },
  {
    no: 48,
    img: require("@/assets/img/MatePad Pro.jpg"),
    name: '华为MatePad Pro',
    cpu: '麒麟990',
    feature1: '挖孔屏',
    feature2: '多屏协同',
    price: 3299
  },
  {
    no: 49,
    img: require("@/assets/img/Macbook pro 16.jpg"),
    name: 'MacBook Pro 16寸',
    cpu: '酷睿9代',
    feature1: '4G独显',
    feature2: 'IPS屏',
    price: 18799
  },
  {
    no: 50,
    img: require("@/assets/img/Macbook pro 13.3.jpg"),
    name: 'MacBook Pro 13.3寸',
    cpu: '酷睿8代',
    feature1: '集显',
    feature2: '背光键盘',
    price: 7500
  },
  {
    no: 51,
    img: require("@/assets/img/book flex.png"),
    name: '三星Galaxy Book Flex',
    cpu: '酷睿十代',
    feature1: 'QLED显示屏',
    feature2: '升级版SPEN',
    price: 11999
  },
  {
    no: 52,
    img: require("@/assets/img/book lon.png"),
    name: '三星Galaxy Book Lon',
    cpu: '酷睿十代',
    feature1: 'QLED显示屏',
    feature2: '触控板无线充电',
    price: 7999
  },
  {
    no: 53,
    img: require("@/assets/img/Matebook.jpg"),
    name: '华为MateBook 14',
    cpu: '酷睿十代',
    feature1: '触控屏',
    feature2: '2G独显',
    price: 5899
  }, {
    no: 54,
    img: require("@/assets/img/xiaoxin pro.jpg"),
    name: '联想小新Pro 13',
    cpu: '酷睿十代',
    feature1: '集显',
    feature2: '高色域显示屏',
    price: 4999
  },
  {
    no: 55,
    img: require("@/assets/img/airpods pro.jpg"),
    name: 'AirPods Pro',
    cpu: 'H1芯片',
    feature1: '主动降噪',
    feature2: '新一代无线耳机',
    price: 1899
  },
  {
    no: 56,
    img: require("@/assets/img/airpods2.jpg"),
    name: 'AirPods 2',
    cpu: 'H1芯片',
    feature1: '双击唤醒Siri',
    feature2: '新一代无线耳机',
    price: 899
  },
  {
    no: 57,
    img: require("@/assets/img/buds+.jpg"),
    name: '三星Galaxy Buds+',
    cpu: '动圈耳机',
    feature1: '11小时续航',
    feature2: 'AKG调音',
    price: 999
  },
  {
    no: 58,
    img: require("@/assets/img/buds.jpg"),
    name: '三星Galaxy Buds',
    cpu: '动圈耳机',
    feature1: '9小时续航',
    feature2: 'AKG调音',
    price: 699
  },
]
Mock.mock(/\/api\/search/, 'get', allProduct);
// //文章评论
// let comments = [];
// let addComment = (options) => {
//   console.log(JSON.parse(options.body).params.obj);
//   let obj = JSON.parse(options.body).params.obj;
//   comments.push(obj) 
// }
// Mock.mock("/api/addComments", "post", addComment)