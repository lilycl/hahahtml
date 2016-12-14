<template>
	<div class="comp-hori-scroll">
    <ul style="width: {{innerWidth}}px">
      <li v-for="item in items">
        <a class="active">{{item.name}}</a>
      </li>
    </ul>
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
    data() {
      return {
        innerWidth: 600
      }
    },
    methods: {
    },
    ready() {
      this.innerWidth = this.items.length * 40
    }
  };    
</script>

<style scoped>
  .comp-hori-scroll{
    width: 100%;
    overflow: auto;

    ul{
      height: 40px;
      line-height: 40px;
      padding:0px;
      overflow: hidden;
      li{
        float: left;
        margin-right:30px;
        a{
          color: #333;
        }
      }
      &:after{
        content: '';
        display: block;
        clear: both;
      }
    }
  }
</style>