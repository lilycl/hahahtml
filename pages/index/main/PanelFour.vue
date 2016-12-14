<template>
    <ul class="clear about-goods meichant-goods">
        <li>
            <div class="li-img"><img src=""/></div>
            <p class="p0">健身&肌肉训练</p>
            <p class="p1">¥ 1928</p>
        </li>
    </ul>
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
.about-goods{width: 100%; background: #fff; margin-top: 10px; padding-bottom: 15px;}
.about-goods li{width:159px; height: 159px; border-bottom: 1px solid #e9e9e9; border-right: 1px solid #e9e9e9; float: left; }
.about-goods .li-img{height:68px;position: relative; margin-top: 25px}
 .li-img img{ max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;-webkit-transform-origin:50% 50%;-webkit-transform:translate3d(-50%,-50%,0); background:#9b9b9b;}
.about-goods li .p0{font-size: 8px; color: #000;text-align: center; line-height: 25px; margin-top: 10px}
.about-goods li .p1{font-size: 8px; color:red;text-align: center}
.meichant-goods{margin-top: 0px; padding-bottom: 0px;}
</style>