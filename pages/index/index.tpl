<div id="app">   
    <div class="w-320">    
        <div v-show="this.activeTab === 0"><main></main></div>
        <div v-show="this.activeTab === 1"><category></category></div>
        <div v-show="this.activeTab === 2"><shopcart></shopcart></div>
        <div v-show="this.activeTab === 3"><mycenter></mycenter></div>
        <bottom-tabbar
            @tab="tabTo"
            :index="activeTab"
        ></bottom-tabbar>
    </div>
</div>
<div></div>
