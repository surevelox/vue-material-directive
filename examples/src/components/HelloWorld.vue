<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <basic-sfc-tab></basic-sfc-tab>
    <button class="mdc-icon-button" v-ripple.unbounded v-icon-button>      
      <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
      <i class="material-icons mdc-icon-button__icon">favorite_border</i>
    </button>



<header class="mdc-top-app-bar" v-top-app-bar:fixed> 
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" v-top-app-bar-nav>menu</button>
      <span class="mdc-top-app-bar__title">Title</span>
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
      <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-short="Bookmark this page"
      v-ripple.unbounded
      v-top-app-bar-action>bookmark</button>
      <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Bookmark this page" 
      v-ripple.unbounded
      v-top-app-bar-action>bookmark</button>
      <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Bookmark this page" 
      v-ripple.unbounded
      v-top-app-bar-action>bookmark</button>
    </section>
  </div>
</header>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _BasicSfcTab from "./tabs/_BasicSfcTab.vue";
import { TopAppBar, TopAppBarAction, TopAppBarNav  } from "@vue-material-directive/top-app-bar";
const topV = { ...TopAppBar,
              ...{ setting : { 
                      CssShort : '.mdc-top-app-bar--short',
                      CssCollapsed: '.mdc-top-app-bar--collapsed',
                      CssShortHasAction: 'mdc-top-app-bar--short-has-action-item',
                      CssTopAppBar :'.mdc-top-app-bar'
                  }
              }
};
    

@Component({
  components: {
    "basic-sfc-tab": _BasicSfcTab
  },
  directives:{
    'top-app-bar':topV,
    TopAppBarAction,
    TopAppBarNav
  },
  methods:{
    clicked(){
      alert('clicked');
    },
    navClicked(){
      alert('nav clicked')
    }
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
