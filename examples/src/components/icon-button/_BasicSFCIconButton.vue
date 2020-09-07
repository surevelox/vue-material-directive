<template>
<div>
    <button class="mdc-icon-button" v-ripple.unbounded v-icon-button>      
      <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
      <i class="material-icons mdc-icon-button__icon">favorite_border</i>
    </button>
</div>
</template>
<style lang="scss" scoped>
  
</style>
<script>
import { IconButton } from "@vue-material-directive/icon-button";
import { Ripple } from "@vue-material-directive/ripple";

export default {
    directives:{
        IconButton,
        Ripple
    }
  };
</script>