<template>
	<div class="xm-con eva" style="margin-top: 10px">
      <ul class="w-300">
          <li>
              <a href="eva.html">评价(20)<span>查看全部评价</span><i class="xm-go"></i></a>
          </li>
      </ul>

      <div class="w-290" v-for="l in list" @click="gotoComment(l.name)">
          <a href="javascript:void(0);"> 
          	<p class="xmsharep0">{{l.name}}<i>{{l.datetime}}</i></p>
          </a>
          <div class="xm-share0 clear">
              <a href="javascript:void(0);">
                  <div class="xm-share0-head fl">
                      <img src="" />
                  </div>
              </a>
              <a href="javascript:void(0);">
                  <div class="xm-share0-text fr">
                      <p class="p1">{{l.desc}}</p>
                      <div class="p2 clear">
                          <div class="img"><img src=""/></div>
                          <div class="img"><img src=""/></div>
                          <div class="img"><img src=""/></div>
                          <div class="img"><img src=""/></div>
                      </div>
                      <div class="des">男款43码 {{l.colorName}}</div>
                  </div>
              </a>
	
							<div v-for="size in l.children">
								{{size.size}}
							</div>
          </div>
      </div>
  </div>
</template>    

<script>
	import S from 'service';

	const COLORS = {
		'1': '红色',
		'2': '黑色',
		'3': '绿色'
	};

  const props = {
    /**
     * 评论列表
     * @type {Object}
     */
    list: {
      type: Array,
      default: []
    }
  };

  const events = {
  };

  export default {
    props: props,
    data() {
			return {
				list: []
			};
    },
    methods: {
    	gotoComment(name) {
    		this.__gotoPage('comment', {name: name})
    	}
    },
    ready() {
			S.order.getCommentList({}).then(ret => {
				
				this.list = ret.data.map(order => {
					order.children = [
						{
							size: '1---------'
						},
						{
							size: '2'
						}
					];

					order.colorName = COLORS[order.color];

					return order;
				});
			});
    }
  };    
</script>

<style scoped>

</style>