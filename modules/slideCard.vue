<template>
<div style="position: relative;" v-for="l in list">
    <div class="xm-add0 clear xm-browser-record" id="xm-es">
        <div class="xm-add0-l fl img">
            <img src="" />
        </div>
        <div class="xm-add0-r fl">
            <a href="javascript:;"><p class="p0">{{l.itemName}}</p></a>
            <p class="p1">{{l.itemName}}</p>
            <p class="p2">¥ 1928</p>
        </div>
        <span v-if="showSpan">评价</span>
   </div>
   <div class="xm-add-clear dn"><i></i></div>
</div>
</template>	
<script type="text/javascript">
import S from 'service';
	export default{
        props:{
            showSpan:{
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                list: []
            };
        },
        methods: {
            init() {
               
            }
        },
        ready() {
        this.init();


        var match,scale,TARGET_WIDTH = 320;
        if (match = navigator.userAgent.match(/Android (\d+\.\d+)/)) {
        scale = window.screen.width / TARGET_WIDTH;
        if (parseFloat(match[1]) < 4.4) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH + ',initial-scale = ' + scale + ', user-scalable=no');
        } else {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH + ',initial-scale = ' + scale + ', target-densitydpi=device-dpi,user-scalable=no');
            }
        } else {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH+',user-scalable=no');
        }
        
        document.addEventListener("touchstart", function(){}, true);
      }
}

</script>
<style type="text/css">
.xm-browser-record{padding: 10px 10px; background: #fff;margin: 0 auto;position: relative; border-bottom:0.5px solid #E9E9E9; padding: 10px 10px;}
.xm-browser-record:last-child{border-bottom: none;}
.xm-browser-record .img{width: 55px; height: 55px; text-align: center; line-height:55px; margin-left:0px;}
.xm-browser-record img{max-height: 55px; max-width: 55px;    vertical-align: middle; }
.xm-browser-record .xm-add0-r .p0{font-size: 11px; color: #4a4a4a;}
.xm-browser-record .xm-add0-r .p1{font-size: 10px; color: #9B9B9B; white-space: nowrap;}
.xm-browser-record .xm-add0-r .p2{font-size: 12px; color: #000; margin-top:10px;}
#xm-es span{width:58px; height: 18px; border-radius: 2px; background: #fff; line-height: 18px; text-align: center;color: #000; border: 0.5px solid #E9E9E9; font-size: 8px;margin-top:40px;display: block; float: right}
#xm-es span:active{background:#FAFAFA;}
</style>