import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import BottomTabbar from './BottomTabbar';

import Main from './main';
import Category from './category';
import Shopcart from './shopcart';
import Mycenter from './mycenter';

import './style.postcss';

module.exports = entry({
  template: require('./index.tpl'),
  
  components: { 
    BottomTabbar,
    Main, Category, Shopcart, Mycenter
  },

  data() {
    return {
        activeTab: 3
    };
  },

  methods: {
    tabTo({id, index}) {
        this.activeTab = index;
    }
  },
  ready() {
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
});