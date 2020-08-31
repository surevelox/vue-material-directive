# Ripple

> Vue Directives for Ripple component of Material Design for Web

---

---

### Quick Start (CDN)

Using Vue Material Directive for Material components for web with minimum setup is to use CDN.

```html static
<head>
  <!--Add Vue material directives-->
  <script src="https://unpkg.com/@vue-material-directive/ripple@latest/dist/index.umd.min.js"></script>

  <!--Add Ripple's CSS for Material Components for Web -->
  <link
    href="https://unpkg.com/@material/ripple@latest/dist/mdc.ripple.min.css"
    rel="stylesheet"
  />
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
};
```

```vue
<template>
  <div>
    <div>
      <div class="mdc-ripple-surface" v-ripple>
        Primary
      </div>
    </div>
    <div>
      <div class="mdc-ripple-surface" v-ripple>
        Secondary
      </div>
    </div>
    <div>
      <div class="mdc-ripple-surface" v-ripple>
        Icon
      </div>
    </div>
  </div>
</template>
<style>
.mdc-ripple-surface {
  padding: 20px;
}
</style>
```

### v-tab-bar

Directive for Ripple

```html static
<div>
  <div class="mdc-ripple-surface" v-ripple></div>
  <!--content here-->
</div>
```
