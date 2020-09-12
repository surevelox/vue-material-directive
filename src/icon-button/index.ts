import IconButton from "./directive/IconButton";

import _Vue, { PluginObject}  from "vue"; 

export { IconButton };

export class IconButtonPluginOptions{

}

const  IconButtonPlugin:PluginObject<IconButtonPluginOptions> = {
    key : 'IconButtonPlugin',
    install : (Vue: typeof _Vue, options?: any): void => {
        Vue.directive("icon-button", IconButton);        
    }
};

export default IconButtonPlugin;