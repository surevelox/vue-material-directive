### Quick Start (CDN) 
Using Vue Material Directive for Material components for web with minimum setup is to use CDN.

```html static
<head>
    <!--Add Vue material directives-->
  <script src="https://unpkg.com/@vue-material-directive/icon-button@latest/dist/index.umd.min.js"></script>

    <!--Add Icon Button's CSS for Material Components for Web -->
  <link href="https://unpkg.com/@material/icon-button@latest/dist/mdc.icon-button.min.css" rel="stylesheet">
</head>
```


### Local Installation
```bash
npm install @vue-material-directive/icon-button --save
```

### Basic Usage

Use IconButtonPlugin globally in main.js. 

```javascript
import IconButtonPlugin from "@vue-material-directive/icon-button";
Vue.use(IconButtonPlugin);
```

Or Import individual directives in your component as following.

```javascript
import { IconButton } from "@vue-material-directive/icon-button";

export default {
  directives: {
    IconButton
  }
}
```

```[import](./_BasicSFCIconButton.vue)
Basic Icon Button Example using SFC With Ripple  
```


### v-icon-button
Directive for Icon Button

```html static
<div>
  <button class="mdc-icon-button" @MDCIconButtonToggle:change="eventHandler"  v-ripple></div>
  <!--content here-->
</div>
```
