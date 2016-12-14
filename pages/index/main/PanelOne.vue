<template>
	<div class="list clear">
      <div class="list-l fl">
          <div class="item clear">
              <div class="item-text fl">
                  <h4>新手入门</h4>
                  <p>智能新品智能预定</p>
              </div>
              <div class="item-img fr"><img src="../../../assets/img/1.png" /></div>
          </div>
          <div class="item">
              <div class="item-text fl">
                  <h4>专业推荐</h4>
                  <p>1块拿走心意的装备</p>
              </div>
              <div class="item-img fr"><img src="../../../assets/img/1.png" /></div>
          </div>
      </div>
      <div class="list-r fr">
          <div class="item">
              <div class="item-text fl">
                  <h4>专业推荐</h4>
                  <p>1块拿走心意的装备</p>
              </div>
              <div class="item-img fr"><img src="../../../assets/img/1.png" /></div>
          </div>
      </div>
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