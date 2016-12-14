<Topbar fixed title="质选商城" :show-left="true">
    <p slot="two">Two</p>
</Topbar>

<div class="w-320" style="background: #fff;">
    <div class="w-290">
        <div style="background: #fff;">
            <hori-scroll :items="filters"></hori-scroll>
        </div>
    </div>
</div>

<div class="index-banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</div>

<div class="qh-content">
    <div>
        <panel-one></panel-one>
        <panel-category></panel-category>
        <panel-two></panel-two>
    </div>
</div>
