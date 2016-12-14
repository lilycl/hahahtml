<template>
    <mt-tabbar>
      <mt-tab-item 
        v-for = "value in nav"
        :id="value.id" @touchstart="gotoPage(value.name,$index)" :class="{ active:index == $index }">
        <img v-show="index == $index" slot="icon" :src="value.imgSelect">
        <img v-show="index != $index" slot="icon" :src="value.imgDefault">
        {{value.id}}
        <i></i>
        <div class="message-num" v-if="$index === 2 && messageNum!=0">
          {{messageNum}}
        </div>
      </mt-tab-item>
</template>    

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  import utils from 'utils';
  const props = {
    /**
     * 导航索引
     * @type {Object}
     */
    index: {
      type: Number,
      default: 0
    },
    /**
     * 消息数量
     * @type {Object}
     */
    messageNum:{
      type: Number,
      default: 0
    },
    /**
     * 图片路径
     * @type[Array]
     * imgDefault:图标默认 的路径
     * imgSelect:图标高亮的路径
     * id:选项的id
     * name:切换时控制view的id
    */
    nav:{
      type:Array,
      default:[]
    }
  };
  const events = {
    TAB: 'tab'
  };
  export default {
        name: 'topbar',
        props:props,
        components: {
            [Tabbar.name]: Tabbar,
            [TabItem.name]: TabItem
        },
        methods: {
          gotoPage(id,index) {
            //微信点击的时候保存tab状态以便重新打开index的时候获取
            if(utils.isWx) {
              window.sessionStorage.setItem('TAB_SHOW',id);
            }
            if(this.index != index){
              this.index = index;
              this.$dispatch(events.TAB, {id, index});
            }
          }
        }
    };    
</script>
<style scoped>
    .mint-tabbar{
        position: fixed;
        bottom:0;
        left: 0;
        z-index: 10;
        background: #fff;
        .mint-tab-item{
          position:relative;
          color:#a1a1a1;
          i{
              position: absolute;
              display: block;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 26px;
              height:4px;
              margin: 0 auto;
              background: #fff;
          }
          &.active{
            color: #3c3c47;
            i{
              background: #3b3c47;
            }
         }
          &.is-selected{
            background: none;
            
          }
          .message-num{
            position: absolute;
            padding: 1px 3px;
            background: #de3435;
            border-radius: 10px;
            color: #fff;
            top: 5px;
            right: 30%;
          }
        }
    }
</style>