<template>
  <div>
    <div class="mdc-tab-bar" role="tablist" @MDCTabBar:activated="tabActivated" v-tab-bar>
      <div class="mdc-tab-scroller" v-tab-scroller>
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">
            <button class="mdc-tab" role="tab" aria-selected="true" tabindex="0"
            v-for="tabItem in tablist"
            v-bind:key="tabItem.id"
            v-tab="{ Item: tabItem, propName : 'isactive' }">
              <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">{{ tabItem.caption }}</span>
              </span>
              <span class="mdc-tab-indicator" v-tab-indicator>
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
              </span>
              <span class="mdc-tab__ripple" v-ripple></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-for="itm in tablist" v-bind:key="itm.id">
        <div class="tab-content" v-if="itm.isactive">
              <span>{{itm.caption}} is {{ itm.isactive ? 'active' : 'inactive' }}</span>
        </div>
    </div>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.tab-content {
  border-top: 1px solid #ccc;
  padding: 20px;
}
</style>
<script>
  export default {
    data: function() {
      return {
        tablist: [],
        selectedTabIndex : 0
      };
    },
    mounted(){
        
        for(i = 1; i <= 20; i++){
          this.tablist.push({
            caption: `Tab ${i}`,
            id: `tab_${i}`,
            isactive: false
          });
        };

        this.tablist[0].isactive = true;
      },
    methods: {
      
      tabActivated(evt) {
        this.activeTab = evt.detail.tabId;
      }
    }
  };
</script>
