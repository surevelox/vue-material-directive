### Quick Start (CDN)
Using Vue Material Directive for Material components for web with minimum setup is to use CDN.

```html static
<head>
    <!--Add Vue material directives-->
  <script src="https://unpkg.com/@vue-material-directive/ripple@latest/dist/index.umd.min.js"></script>

    <!--Add Ripple's CSS for Material Components for Web -->
  <link href="https://unpkg.com/@material/ripple@latest/dist/mdc.ripple.min.css" rel="stylesheet">
</head>
```


### Local Installation
```bash
npm install @vue-material-directive/ripple --save
```

### Basic Usage

Use RipplePlugin globally in main.js.

```javascript
import RipplePlugin from "@vue-material-directive/ripple";
Vue.use(RipplePlugin);
```

Or Import individual directives in your component as following.

```javascript
import { Ripple } from "@vue-material-directive/ripple";

export default {
  directives: {
    Ripple
  }
}
```

```vue
<template>
<div>
    <div  class="mdc-ripple-surface mdc-typography mdc-typography--caption" v-ripple>
        Click Here!
    </div>
    <div  class="mdc-ripple-surface material-icons" style="border-radius:50%" v-ripple.unbounded>
        favorite
    </div>
    <div  class="mdc-ripple-surface mdc-ripple-surface--primary mdc-theme--primary mdc-typography mdc-typography--body1"  v-ripple>
        Primary
    </div>
    <div  class="mdc-ripple-surface mdc-ripple-surface--accent mdc-theme--secondary mdc-typography mdc-typography--body2" v-ripple>
        Secondary
    </div>
</div>
</template>
<style>
.mdc-ripple-surface{
padding:8px;
}
</style>
```



### v-ripple
Directive for Ripple

```html static
<div>
  <div class="mdc-ripple-surface"v-ripple></div>
  <!--content here-->
</div>
```
