### Quick Start using CDN
Using Vue Material Directive for Material components for web with minimum setup is to use CDN.

```html static
<head>
    <!--Add Vue material directives-->
  <script src="https://unpkg.com/@vue-material-directive/tab@latest/dist/index.umd.min.js"></script>

    <!--Add Tab's CSS for Material Components for Web -->
  <link href="https://unpkg.com/@material/tab@latest/dist/mdc.tab.min.css" rel="stylesheet">
</head>
```


### Local Installation
```bash
npm install @vue-material-directive/tab --save
```

### Basic Usage

Use TabPlugin globally in main.js. 

```javascript
import TabPlugin from "@vue-material-directive/tab";
Vue.use(TabPlugin);
```

Or Import individual directives in your component as following.

```javascript
import { Tab,TabBar,TabIndicator, TabScroller } from "@vue-material-directive/tab";

export default {
  directives: {
    Tab,
    TabBar,
    TabIndicator,
    TabScroller
  }
}
```


### Material Styles
Use Material styles directly from Material components for Web's Tab package.  
```bash
npm install @material/tab --save
```
and import following styles 

```html static
<style lang="scss" scoped>
@use "@material/theme";
@use "@material/tab-bar/mdc-tab-bar";
@use "@material/tab-scroller/mdc-tab-scroller";
@use "@material/tab-indicator/mdc-tab-indicator";
@use "@material/tab/mdc-tab";
</style>
```

### Basic Tab 
```[import](./_BasicSFCTab.vue)
Basic tab Example using SFC (Single File Component)  
```



### v-tab-bar
Directive for  TabBar

```html static
  <div class="mdc-tab-bar" role="tablist" @MDCTabBar:activated="eventHandler" v-tab-bar>
    <!-- Tabs Scroller here --> 
  </div>
```

### v-tab-scroller
Directive for TabScroller
```html static
<div class="mdc-tab-scroller" v-tab-scroller>
<div class="mdc-tab-scroller__scroll-area">
    <div class="mdc-tab-scroller__scroll-content">
    <!--Tabs here -->
    </div>
</div>
</div>
```
### v-tab
Directive for Tab

```html static
 <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" v-tab>
    <!--Content of Tab Caption here -->
</button>
```

### v-tab-indicator
 
Directive for Tab Indicator
```html static
<span class="mdc-tab-indicator" v-tab-indicator>
    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
</span>

```

## Examples

### Tabs in JavaScript
```[import](./_BasicTab.js)
Basic tab Example using Javascript (Single File Component)  
```


### Tabs with Fade Indicator
```[import](./_FadeIndicator.vue)
Fade Indicator
```


### Scrollable Tabs with Data binding
```[import](./_DataBound.vue)
Fade Indicator
```

