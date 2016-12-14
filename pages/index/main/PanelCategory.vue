<template>
    <div class="con-moudle">
        <div class="w-100">
            <div class="w-290">
                <a @click="__gotoPage('sports')">
                    <h2>运动分类<i></i></h2>
                </a>
                <ul class="list-circle clear">
                    <a >
                        <li><img src="../../../assets/img/header.png" />
                            <p>跑步</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>游泳</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>户外</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>骑行</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>健身</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>瑜伽</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>轮滑</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>羽毛球</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>配件</p>
                        </li>
                    </a>
                    <a href="javascript:void(0);">
                        <li><img src="../../../assets/img/header.png" />
                            <p>全部</p>
                        </li>
                    </a>
                </ul>
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