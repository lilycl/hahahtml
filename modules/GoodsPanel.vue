<template>
  <div @click="fn" v-show="!edit" class="xm-category" style="background:{{bg}}">
    <div class="xm-point"><i v-if="selected"></i></div>
    <div class="clear">
      <div class="fl imgwrap0"><img src="" /></div>
      <div class="xm-category0-text0 fl">
        <p class="p0">{{item.name}}</p>
        <p class="p1">{{item.desc}}</p>
        <p class="p2">￥{{item.price}}<em>¥ 1928</em> </p>
      </div>
      <div class="fr goods-amount">&#215;1</div>
    </div>
  </div>

  <div v-show="edit" class="xm-category0 xm-add0" style="background:{{bg}}">
    <div class="xm-point"><i></i></div>
    <div class="clear">
      <div class="fl imgwrap0"><img src="" /></div>
      <div class="category-detail fr">
        <p>男款42码 米色 <i></i></p>
        <div class="amount">
          <input class="jian" type="button" value="-" style="" />
          <input class="text_box" type="text" value="10" style="" />
          <input class="jia_01" type="button" value="+" style="" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // 商品面板
	import S from 'service';

  const props = ['item', 'edit', 'bg', 'selected']

  const events = {
    ITEM_CLICK: 'item-click'
  };

  export default {
    props: props,

    methods: {
      fn(index) {
          this.$dispatch(events.ITEM_CLICK, this.item)
      }
    },
    ready() {
			this.init();
    }
  };   

</script>
<style scoped>
  .xm-category h2 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 14px;
    font-size: 11px;
    border-bottom: 1px solid #e9e9e9;
  }
  
  .xm-category0 {
    position: relative;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #E9E9E9;
  }
  
  .xm-category0:active {
    background: #fff;
  }
  
  .xm-category0 .imgwrap0 {
    width: 55px;
    height: 55px;
    margin: 10px 0 0 40px;
    text-align: center;
  }
  
  .xm-category0 img {
    width: 55px;
    height: 55px;
  }
  
  .xm-category0 .xm-category0-text0 {
    width: 150px;
    height: 65px;
    margin: 10px 0px 0px 10px;
  }
  
  .xm-category0 .xm-category0-text0 .p0 {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 11px;
    color: #000;
    line-height: 10px;
  }
  
  .xm-category0-text0 .p1 {
    font-size: 10px;
    color: #9B9B9B;
    line-height: 16px;
  }
  
  .xm-category0-text0 .p2 {
    font-size: 12px;
    color: #000;
    margin-top: 10px;
  }
  
  .xm-category0-text0 .p2 em {
    font-size: 10px;
    color: #9B9B9B;
    margin-left: 12px;
    text-decoration: line-through
  }
  
  .xm-point {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0.5px solid #E0DEDE;
    position: absolute;
    left: 15px;
    top: 32px;
  }
  
  .xm-point i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    left: 2px;
    top: 2px;
  }
  
  .xm-category0 .goods-amount {
    top: 30px;
    right: 15px;
    position: relative;
    font-size: 11px;
  }
  
  .cart-h2 {
    height: 40px;
    line-height: 40px;
    font-size: 11px;
    border-bottom: 1px solid #E9E9E9;
    text-indent: 15px;
    font-weight: normal;
  }
  
  .cart-label {
    width: 22px;
    height: 10px;
    border: 1px solid #9B9B9B;
    border-radius: 2px;
    font-size: 8px;
    color: #4a4a4a;
    text-align: center;
    top: 30px;
    left: 10px;
    position: absolute;
    background: #fff;
  }
</style>