<template>
    <div class="con-moudle">
        <div class="w-100" style="margin-bottom: 10px">
            <div class="w-290">
                <h2>游泳<i></i></h2>
                <ul class="classes clear">
                    <li><a >上装</a></li>
                    <li><a href="javascript:;">下装</a></li>
                    <li><a href="javascript:;">内衣 </a></li>
                    <li><a href="javascript:;">配件</a></li>
                    <li><a href="javascript:;">袜</a></li>
                </ul>
                <div class="ad"><img src=""/></div>
                <div class="about-goods" id="goods">
                    <ul class="clear">
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src=""/></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
const props = {
    items: {
      type: Array,
      default: []
    }
  };

  export default {
    props: props,
    methods: {
    },
    ready() {
    }
  };
</script>
<style type="text/css">
.swiper-slide {text-align: center;display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-box-pack: center; -ms-flex-pack: center;-webkit-justify-content: center;justify-content: center; -webkit-box-align: center; -ms-flex-align: center;-webkit-align-items: center;align-items: center;}
.swiper-container {width:100%;height: 100%;}
.xm-container{position: relative;width: 100%}   
.about-goods{width: 100%; background: #fff; margin-top: 10px; padding-bottom: 15px;}
.about-goods li{width:159px; height: 159px; border-bottom: 1px solid #e9e9e9; border-right: 1px solid #e9e9e9; float: left; }
.about-goods .li-img{height:68px;position: relative; margin-top: 25px}
 .li-img img{ max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;-webkit-transform-origin:50% 50%;-webkit-transform:translate3d(-50%,-50%,0); background:#9b9b9b;}
.about-goods li .p0{font-size: 8px; color: #000;text-align: center; line-height: 25px; margin-top: 10px}
.about-goods li .p1{font-size: 8px; color:red;text-align: center}
.slide{width: 320px;height:35px;line-height:35px;}
.slide ul{width:300px;}
.slide li{text-align: center;float: left;margin-left:4px;}
.slide li:active{background: #FAFAFA}
.slide li a{font-size: 12px;color: #000; height: 22px; line-height: 22px;  padding:7px 2px 8px 2px; display: block; font-size: 12px;}
.slide  .active{border-bottom:1px solid #000; }
.meichant-goods{margin-top: 0px; padding-bottom: 0px;}
.index-banner{width: 320px; height:145px; background: #fff; text-align: center;    border-top: 1px solid #e9e9e9;}
.index-banner img{max-width:70%;max-height:70%;position:absolute;top:50%;left:50%;-webkit-transform-origin:50% 50%;-webkit-transform:translate3d(-50%,-50%,0);}

.con-moudle{width:100%; margin-top: 10px}
.con-moudle h2{height: 41px;border-bottom:1px solid #9b9b9b;text-align: center;position: relative;font-size: 12px;font-weight: 400; line-height: 39px; color: #000}
.con-moudle h2 i{width:7px;height:7px;position: absolute;
    border: solid; border-width: 1px 1px 0px 0px;display: inline-block;vertical-align: middle;     transform: rotate(45deg); color: #9b9b9b; top:16px; margin-left: 5px}
.con-moudle .classes li{float: left;height: 38px; line-height: 38px}
.classes li a{padding:0 6px;color: #000; }
.con-moudle .ad{height: 70px;background: #e9e9e9;}
.con-moudle  ul{}
#goods ul{width: 289px; margin-top: 10px;border-left: 1px solid #E9E9E9;border-top: 1px solid #E9E9E9; height: 166px;}
#goods ul li{width:24.65%;height: 82px;border-right: 1px solid #E9E9E9;border-bottom: 1px solid #E9E9E9;}
#goods  img{max-width: 45px;max-height: 30px;}
#goods .li-img{height: 30px;margin-top: 10px;}
#goods .p0{color: #000;margin-top: 10px;line-height: 14px;}
#goods .p1{color:#e60000;line-height: 14px;}
</style>