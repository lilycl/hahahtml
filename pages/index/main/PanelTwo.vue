<template>
    <div class="con-moudle">
        <div class="w-100" style="margin-bottom: 10px">
            <div class="w-290">
                <a @click="__gotoPage('running')">
                    <h2>跑步<i></i></h2>
                </a>
                <ul class="classes clear">
                    <li><a >上装</a></li>
                    <li><a href="javascript:;">下装</a></li>
                    <li><a href="javascript:;">内衣 </a></li>
                    <li><a href="javascript:;">配件</a></li>
                    <li><a href="javascript:;">袜</a></li>
                </ul>
                <div class="ad"><img src="" /></div>
                <div class="about-goods" id="throw-row">
                    <ul class="clear">
                        <li>
                            <div class="li-img"><img src="../../../assets/img/1.png" /></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src="../../../assets/img/header.png" /></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src="../../../assets/img/1.png" /></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src="../../../assets/img/header.png" /></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src="../../../assets/img/1.png" /></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                        <li>
                            <div class="li-img"><img src="../../../assets/img/header.png" /></div>
                            <p class="p0">健身&肌肉训练</p>
                            <p class="p1">¥ 1928</p>
                        </li>
                    </ul>
                </div>
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