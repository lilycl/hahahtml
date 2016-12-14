<template>
 <div class="xm-category" style="background: #fff;">
        <h2>adidas 官方旗舰店</h2>
        <div class="xm-category0 xm-add0">
            <div class="xm-point"><i></i></div>
            <div class="clear">
                <div class="fl imgwrap0"><img src=""/></div>
                <div class="category-detail fr">
                    <p>男款42码  米色 <i></i></p>
                    <div class="amount">
                        <input class="jian" type="button" value="-" style=""/>
                        <input class="text_box" type="text" value="10" style=""/>
                        <input class="jia_01" type="button" value="+" style=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>    

<script>
  import S from 'service';

  const props = {
    /**
     * 购物车商品列表
     * @type {Object}
     */
    list: {
      type: Array,
      default: []
    }
  };

  const events = {
  };

  export default {
    props: props,
    data() {
      return {
        list: [],
        
      };
   
    },
    methods: {
      init() {
        S.order.getmyList({}).then(ret => {
          this.list = ret.data;

        }).catch(err => {

        });
      },
      
  },
    ready() {
      this.init();
    }
  };   

</script> 
<style scoped>
body,ul,p,h1,h2,h3,h4,dl,dd,form,input{padding:0;margin:0;}
.xm-category0 {position: relative;width: 100%;height: 75px;border-bottom: 1px solid #E9E9E9;}
.xm-category0:active{background:#fff;}
.xm-category0 .imgwrap0{width:55px; height:55px;margin:10px 0 0 40px;text-align:center;}
.xm-category0 img{width:55px; height:55px; }
.category-detail{position: absolute;right: 15px;}
.category-detail .amount{margin:10px 0 0 0px;}
.category-detail p{margin-top: 16px;text-align: center;font-size: 10px;color: #9b9b9b;position: relative;}
.category-detail p i{width: 8px;height: 4px;border: 1px solid red;position: absolute;right:0;top:4px;}
.amount{margin-top:15px;font-size: 10px;height:24px;line-height: 24px;border:0.5px solid #dfdfdf;border-radius: 2px;display: inline-block;margin-right: 6px;}
.jian{display: inline-block;width:27px;height: 23px;text-align: center;background: #F6F6F6;font-size: 18px; border-radius: 2px; border-right:0.5px solid #E7E7E7; color: #9B9B9B;}
.jian:active{background: #EDEDED;}
.text_box{display: inline-block;width:66px;text-align: center;font-size: 14px;}
.jia_01{display: inline-block;width:27px;height:24px;text-align:center;background:#F6F6F6;font-size: 18px; border-radius: 2px;border-left: 0.5px solid #E7E7E7; color: #9B9B9B;}
.jia_01:active{background: #EDEDED;}
</style>