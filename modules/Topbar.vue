<template lang="html">
  <!-- 需要header时就不需要空的header -->
  <mt-header v-if="!showHeaderEmpty" :fixed="fixed" :title="title" :style="style">
    <div slot="left" v-if="showLeft">
      <div class="topbar-back" @click="handleBack">
        {{backText}}
      </div>
      <mt-button v-if="showClose" @click="handleClose">关闭</mt-button>
    </div>
    <div slot="right">
      <mt-button
        v-if="!!right"
        type="greenRadius"
        size="small"
        :icon="right.icon"
        :class="{'disabled': right.disabled, 'icon': !!right.icon}"
        :disabled="right.disabled"
        @click="right.handle" >
        {{ right.icon ? '' : right.text }}
      </mt-button>
    </div>
  </mt-header>
  <!-- 不需要header时就使用空的header -->
  <div class="header-empty" v-if="showHeaderEmpty" :style="[headerEmptyStyle,headerEmptyHeight]"></div>
  <!-- 需要header并且fixed为true时需要添加该div以兼容沉浸式 -->
  <div class="comp-statusbar" v-if="!showHeaderEmpty && fixed" style="height:{{statusbarHeight}}"></div>
</template>
<script>
  import {
    Header,
    Button
  } from 'mint-ui';
  import NAPI from 'nadapter';
  export default {
    name: 'topbar',
    components: {
      [Header.name]: Header,
      [Button.name]: Button
    },
    props: {
      //标题
      title: String,
      type: {
        type: String,
        default: 'back'
      },
      // 是否显示左侧返回按钮
      showLeft: {
        type: Boolean,
        default: true
      },
      // 是否固定在顶部
      fixed: Boolean,
      // 是否显示关闭按钮
      showClose: {
        type: Boolean,
        default: false
      },
      // 是否显示右侧
      showRight: {
        type: Boolean,
        default: true
      },
      // 返回按钮文案
      backText: String,
      // 右侧按钮文案
      rightText: String,
        
      // 右侧按钮图标
      rightIcon: String,
      // 是否自动返回
      autoback: {
        type: Boolean,
        default: true
      },
      right: Object,
      handleRight: Function,
      /**
       * 是否显示空的header 
       * 不需要topbar时为false,需要topbar时为true
       */
      showHeaderEmpty:{
        type: Boolean,
        default: false
      },
      /**
       * 自定义mt-header组件的样式
       */
      style:{
        type:Object,
        default:{
          background: '#fff',
          color: '#000',
          height: '40px',
          'font-size': '14px',
          'padding-top':0
        }
      },
      /**
       * 空的header样式
       * 为了兼容沉浸式
       */
      headerEmptyStyle:{
        type: Object,
        default:{
          background: '#fff'
        }
      },
      /**
       * 空的header 高度
       * 为了兼容沉浸式
       */
      headerEmptyHeight:{
        type: Object,
        default:{
          height: '20px'
        }
      }
    },
    methods: {
      handleBack() {
        if (this.autoback) {
          NAPI.page.back();
        }
        this.$dispatch('back');
      },
      handleClose() {
        this.$dispatch('close');
      },
      handleRight() {
        this.$dispatch('clickRight');
      }
    },
    data() {
      return {
        statusbarHeight: '45px'
      };
    },
    ready() {
    }
  };
</script>
<style lang="css">
  .mint-header.is-fixed {
    z-index: 9;
  }
  .mint-header {
    background-color: #fff;
    color: #000;
    height: 40px;
    box-shadow: 0 3px 5px rgba(0,0,0,0.05);
    border-bottom:solid 1px #e9e9e9;
  }
  .topbar-back {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-left: solid 1px #9b9b9b;
    border-top: solid 1px #9b9b9b;
    -webkit-transform: rotate(-45deg);
  }
  .mint-header-title {
    font-size: 1.4rem;
  }
  .comp-statusbar{
    background: #fff;
  }
</style>