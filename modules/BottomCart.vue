<template>
	<div class="xm-bottom item-bottom clear">
    <div class="bottom-left fl">
        <span><img src="" /> </span>
        <span class="span0"><img src=""/><i>1</i></span>
    </div>
    <div class="bottom-right fr">
        <span class="span0">{{title}}</span>
        <span @click="buy" class="span1 buy">立即购买</span>
    </div>
	</div>
</template>    

<script>
  const props = {
    /**
     * 导航索引
     * @type {Object}
     */
    title: {
      type: String,
      default: '放入购物车'
    }
  };

  const events = {
  	BUY: 'cart-buy'
  };

  export default {
    props: props,
    methods: {
			buy() {
				this.$dispatch(events.BUY, '123');
			}
    },
    ready() {}
  };    
</script>

<style scoped>
	.xm-bottom{position: fixed; bottom:0px;height:44px;background: #fff;font-size: 12px; border-top: 0.5px solid #F2F2F2;}
	.item-bottom{height: 40px; z-index: 999;width: 100%;}
	.bottom-left{ width: 80px;}
	.bottom-left span{width: 39px;  height:39px;  border-right: 1px solid #d8d8d8; display:inline-block;border-top: 1px solid #d8d8d8;float: left; position: relative}
	.bottom-left span img{ max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;-webkit-transform-origin:50% 50%;-webkit-transform:translate3d(-50%,-50%,0); background:#9b9b9b;}
	.bottom-left .span0{width: 40px ; border-right: none;}
	.bottom-left .span0 i{width: 9px; height: 9px; border-radius: 50%; background: #000; position: absolute; right: 0; top:0; font-size: 5px; color: #fff; text-align: center}
	.bottom-right{ width: 240px;}
	.bottom-right span{width: 120px;  height:40px; display:inline-block;float: left; text-align: center; line-height: 40px; font-size: 12px; color:#000;}
	.bottom-right .span0{ background: #e9e9e9;}
	.bottom-right .span1{ background: #CBCBCB;}
</style>