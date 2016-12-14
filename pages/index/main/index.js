import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/Topbar';
import HoriScroll from 'modules/HoriScroll';
import { SwipeItem,Swipe } from 'mint-ui';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';

import PanelCategory from './PanelCategory';
import './style.postcss';
export default {
  template: require('./index.tpl'),
  components: { Topbar, HoriScroll, PanelOne, PanelTwo, PanelCategory,
  [SwipeItem.name]:SwipeItem, [Swipe.name]:Swipe  },

  data() {
    return {
        filters: [
            {name: '推荐'},{name: '上装'},{name: '下装'},{name: '骑行'},
            {name: '健身'},{name: '瑜伽'},{name: '轮滑'},{name: '健身'},
            {name: '轮滑'},{name: '骑行'}
        ],
        activeTab: 0,
        rightText:'fanh '
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
    
    document.addEventListener("touchstart", function(){}, true);  }
};