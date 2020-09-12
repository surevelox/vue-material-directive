import TopAppBar, { TopAppBarAction, TopAppBarNav } from "./directive/TopAppBar";

import _Vue, { PluginObject}  from "vue"; 

export { TopAppBar, TopAppBarNav, TopAppBarAction };

export class TopAppBarPluginOptions{

}

const  TopAppBarPlugin:PluginObject<TopAppBarPluginOptions> = {
    key : 'TopAppBarPlugin',
    install : (Vue: typeof _Vue, options?: any): void => {
        Vue.directive("top-app-bar", TopAppBar);        
        Vue.directive("top-app-bar-action", TopAppBarAction);  
        Vue.directive("top-app-bar-action", TopAppBarNav);        
      
    }
};

export default TopAppBarPlugin;