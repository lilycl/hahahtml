<div id="app">
<div class="w-320">
    <div @click="showEdit">
        <topbar title="购物车(20)" :show-left="false">
        </topbar>
    </div>

    <goods-panel 
        v-for="item in list"
        @item-click=""
        :item="{name: 'test', desc: 'test', price: '11'}"
        :edit="edit.show"
        :selected="item.selected"
        bg="#fff"
    >
    </goods-panel>
    
    <div class="cart-footer" id="cart-footer">
        <div class="xm-point"><i></i></div>
        <div class="choose-num">已选(<span>4</span>)</div>
        <strong>¥ 2873.00</strong>
        <a @click="__gotoPage('cartorders', {id: ''})" class="accounts">结算</a>
    </div>
</div>

</div>