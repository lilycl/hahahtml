<template>
<div class="cat-sort">
    <li><a href="javascript:void(0);" class="active">最新</a></li>
    <li><a href="javascript:void(0);">销量<i></i></a></li>
    <li><a href="javascript:void(0);">价格<i></i></a></li>
</div>
</template>

<script>
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
.cat-sort{height:30px; width: 100%; background: #fff; border-bottom: 0.5px solid #e9e9e9;}
.cat-sort li{width: 33%;float: left;border-right: 1px solid #e9e9e9;text-align: center; height: 20px; line-height: 20px; margin-top: 5px;position: relative;}
.cat-sort li a{color: #000;}
.cat-sort li:last-child{border-right: none; }
.cat-sort>li i{width: 8px; height: 12px; background: #9b9b9b; position: absolute; right: 20px; top:4px;}
.cat-sort .active{color: red}
</style>