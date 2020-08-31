import {
  Tab,
  TabBar,
  TabIndicator,
  TabScroller
} from "@vue-material-directive/tab";

new Vue({
  data: function() {
    return {
      activeTab: "tabRecent"
    };
  },
  methods: {
    tabActivated(evt) {
      this.activeTab = evt.detail.tabId;
    }
  },
  template: `
  <div>
    <div class="mdc-tab-bar" role="tablist" @MDCTabBar:activated="tabActivated" v-tab-bar>
      <div class="mdc-tab-scroller" v-tab-scroller>
        <div class="mdc-tab-scroller__scroll-area">
          <button id="tabRecent" class="mdc-tab" role="tab" aria-selected="true" tabindex="0" v-tab>
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true">access_time</span>
              <span class="mdc-tab__text-label">Recents</span>
            </span>
            <span class="mdc-tab-indicator" v-tab-indicator>
              <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
            </span>
            <span class="mdc-tab__ripple" v-ripple></span>
          </button>
          <div class="mdc-tab-scroller__scroll-content">
            <button id="tabNearBy" class="mdc-tab" role="tab" aria-selected="true" tabindex="0" v-tab>
              <span class="mdc-tab__content">
                <span class="mdc-tab__icon material-icons" aria-hidden="true">near_me</span>
                <span class="mdc-tab__text-label">Near By</span>
              </span>
              <span class="mdc-tab-indicator" v-tab-indicator>
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
              </span>
              <span class="mdc-tab__ripple" v-ripple></span>
            </button>
            <button id="tabFavorite" class="mdc-tab" role="tab" aria-selected="true" tabindex="0" v-tab>
              <span class="mdc-tab__content">
                <span class="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
                <span class="mdc-tab__text-label">Favorites</span>
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
    <div style="border-top: 1px solid #ccc; padding: 20px;" v-if="activeTab == 'tabRecent' ">Recent Tab Selected</div>
    <div style="border-top: 1px solid #ccc; padding: 20px;" v-if="activeTab == 'tabNearBy' ">Near by Tab Selected</div>
    <div style="border-top: 1px solid #ccc; padding: 20px;" v-if="activeTab == 'tabFavorite' ">Favorite tab Selected</div>
  </div>
  `
});
