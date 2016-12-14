/**
 * 微信单页应用路由配置
 */

module.exports = {
  '/': {
    title: "首页",
    name: "index",
    component: require('./pages/index').App
  },
  '/detail': {
    title: "详情页",
    name: "detail",
    component: require('./pages/detail').App
  },
  '/comment': {
    title: "评论页",
    name: "comment",
    component: require('./pages/comment').App
  },
  '/message': {
    title: "消息",
    name: "message",
    component: require('./pages/message').App
  },
  '/myaboutus': {
    title: "关于我们",
    name: "myaboutus",
    component: require('./pages/my/myaboutus').App
  },
  '/itemeva': {
    title: "全部评论",
    name: "itemeva",
    component: require('./pages/item/itemeva').App
  },
  '/itemlogistics': {
    title: "物流信息",
    name: "itemlogistics",
    component: require('./pages/item/itemlogistics').App
  },
  '/itemmeichant': {
    title: "商家页面",
    name: "itemmeichant",
    component: require('./pages/item/itemmeichant').App
  },
  '/itemmeichantdetail': {
    title: "商家详情",
    name: "itemmeichantdetail",
    component: require('./pages/item/itemmeichantdetail').App
  },
  '/login': {
    title: "登录",
    name: "login",
    component: require('./pages/logreg/login').App
  },
  '/reg': {
    title: "注册",
    name: "reg",
    component: require('./pages/logreg/reg').App
  },
  '/resetpsd': {
    title: "修改密码",
    name: "resetpsd",
    component: require('./pages/logreg/resetpsd').App
  },
  '/mybrowserecord': {
    title: "浏览记录",
    name: "mybrowserecord",
    component: require('./pages/my/mybrowserecord').App
  },
  '/mybrowserecordset': {
    title: "浏览记录",
    name: "mybrowserecordset",
    component: require('./pages/my/mybrowserecordset').App
  },
  '/mycollect': {
    title: "我的收藏",
    name: "mycollect",
    component: require('./pages/my/mycollect').App
  },
  '/mycollectset': {
    title: "我的收藏",
    name: "mycollectset",
    component: require('./pages/my/mycollectset').App
  },
  '/mylist': {
    title: "我的订单",
    name: "mylist",
    component: require('./pages/my/mylist').App
  },
  '/mylistdetail': {
    title: "订单详情",
    name: "mylistdetail",
    component: require('./pages/my/mylistdetail').App
  },
  '/mynewadd': {
    title: "新增地址",
    name: "mynewadd",
    component: require('./pages/my/mynewadd').App
  },
  '/mymanageaddset': {
    title: "编辑地址",
    name: "mymanageaddset",
    component: require('./pages/my/mymanageaddset').App
  },
  '/myucenter': {
    title: "个人中心",
    name: "myucenter",
    component: require('./pages/my/myucenter').App
  },
  '/mycoupon': {
    title: "优惠券",
    name: "mycoupon",
    component: require('./pages/my/mycoupon').App
  },
  '/myevashare': {
    title: "评价晒单",
    name: "myevashare",
    component: require('./pages/my/myevashare').App
  },
  '/myevashareset': {
    title: "评价晒单",
    name: "myevashareset",
    component: require('./pages/my/myevashareset').App
  },
  '/myfeedback': {
    title: "意见反馈",
    name: "myevashare",
    component: require('./pages/my/myevashare').App
  },
  '/myhelp': {
    title: "帮助中心",
    name: "myhelp",
    component: require('./pages/my/myhelp').App
  },
  '/mymanageadd': {
    title: "地址管理",
    name: "mymanageadd",
    component: require('./pages/my/mymanageadd').App
  },
  '/setucenter': {
    title: "设置",
    name: "setucenter",
    component: require('./pages/my/setucenter').App
  },
  '/setsystem': {
    title: "系统设置",
    name: "setsystem",
    component: require('./pages/my/setsystem').App
  },
  '/setaccountbind': {
    title: "账号绑定",
    name: "setaccountbind",
    component: require('./pages/my/setaccountbind').App
  },
  '/setaccountsecurity': {
    title: "账号安全",
    name: "setaccountsecurity",
    component: require('./pages/my/setaccountsecurity').App
  },
  '/setunbindphone': {
    title: "解绑手机号",
    name: "setunbindphone",
    component: require('./pages/my/setunbindphone').App
  },
  '/setbindphone': {
    title: "绑定手机号",
    name: "setbindphone",
    component: require('./pages/my/setbindphone').App
  }
};