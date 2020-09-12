import { SpecificEventListener } from "@material/base/types";
import {
    MDCTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation,
    MDCTopAppBarBaseFoundation, MDCTopAppBarAdapter
} from '@material/top-app-bar';
import { DirectiveOptions, VNodeDirective, VNode } from 'vue';
import {  TopAppBarEvents } from "../constants";


type ScrollTarget = {
    el: EventTarget | null;
    ViewportScrollY: number;
}

interface MDCTopAppBarElement extends HTMLElement {
    mdcTopAppBar: MDCTopAppBarBaseFoundation | null;
    props: any;
    scrollTarget: ScrollTarget;
    updateActionItems: () => void,

    navAction: Element | null;
    actionItems: Array<string>;
    actionItemsCount: number;
    //actionItemObserver: MutationObserver;

    //Events
    handleNavigationClick: SpecificEventListener<'click'>;
    handleWindowResize: SpecificEventListener<'resize'>;
    handleTargetScroll: SpecificEventListener<'scroll'>;

}

const TopAppBar: DirectiveOptions = {

    inserted(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        //
        
    },

    bind  ( el: Element | null, binding: VNodeDirective, vnode: VNode)  {
        
        //
        const boundElement = el as MDCTopAppBarElement;
        if (boundElement == null) {
            return;
        }
        const modifier = binding.modifiers;
        const arg = binding.arg;
        const bindingValue = binding.value;

        //Scroll Target
        boundElement.props = {};
        boundElement.scrollTarget = {
            get ViewportScrollY(): number {
                const win = boundElement.scrollTarget.el as Window;
                const elm = boundElement.scrollTarget.el as Element;
                return win.pageYOffset !== undefined ? win.pageYOffset : elm.scrollTop;
            },
            get el(): EventTarget {
                return boundElement.props.scrollTarget as EventTarget;
            },
            set el(value: EventTarget) {
                boundElement.props.scrollTarget = value;
            }
        }

        

        boundElement.updateActionItems = () => {
            const actionItems: Array<string> = [];
            boundElement.querySelectorAll("[data-vmdc-topbar-action]")
                .forEach((item, index) => {
                    actionItems.push((item as HTMLElement).dataset.vmdcTopbarAction as string);
                });
            boundElement.actionItems = actionItems;
            boundElement.actionItemsCount = boundElement.actionItems.length;
        };

        const _adapter: MDCTopAppBarAdapter = {
            addClass(className: string): void {
                boundElement.classList.add(className);
            },
            removeClass(className: string): void {
                boundElement.classList.remove(className);
            },
            hasClass(className: string): boolean {
                return boundElement.classList.contains(className);
            },
            setStyle(property: string, value: string): void {
                boundElement.style.setProperty(property, value);
            },
            getTopAppBarHeight(): number {
                return boundElement.clientHeight;
            },
            getViewportScrollY(): number {
                return boundElement.scrollTarget.ViewportScrollY;
            },
            getTotalActionItems(): number {
                return boundElement.actionItemsCount;
            },
            notifyNavigationIconClicked(): void {
                boundElement.dispatchEvent(
                    new CustomEvent(TopAppBarEvents.NAV_EVENT, {
                      detail: {}
                    })
                  );
            }
        };

        //Set Scroll Target and Event
        if (bindingValue?.scrollTarget == null) {
            boundElement.scrollTarget.el = window;
        } else {
            boundElement.scrollTarget.el = bindingValue.scrollTarget;
        }

        //Create Foundation
        if (arg === 'short') {
            const mdcShort = new MDCShortTopAppBarFoundation(_adapter);
            if(modifier != null && modifier.collapsed){
                mdcShort.setAlwaysCollapsed(true);
            }
            boundElement.mdcTopAppBar = mdcShort;
        } else if (arg === 'fixed') {
            boundElement.mdcTopAppBar  = new MDCFixedTopAppBarFoundation(_adapter);            
        } else {
            boundElement.mdcTopAppBar = new MDCTopAppBarFoundation(_adapter);
            boundElement.handleWindowResize = boundElement.mdcTopAppBar.handleWindowResize.bind(boundElement.mdcTopAppBar);
            window.addEventListener('resize', boundElement.handleWindowResize as EventListener);
        }

        

        boundElement.handleTargetScroll = boundElement.mdcTopAppBar.handleTargetScroll.bind(boundElement.mdcTopAppBar);
        boundElement.scrollTarget.el!.addEventListener('scroll', boundElement.handleTargetScroll as EventListener);
        
        //Nav Event
        boundElement.handleNavigationClick = boundElement.mdcTopAppBar.handleNavigationClick.bind(boundElement.mdcTopAppBar);
        
        //Count Action Items on next tick
        vnode?.context?.$nextTick(() => {     
            
            console.log('next tick fired');
            boundElement.navAction = boundElement.querySelector('[data-vmdc-topbar-nav]');
            if (boundElement.navAction != null) {
                boundElement.navAction.addEventListener('click', boundElement.handleNavigationClick as EventListener)
            }
                        
            boundElement.updateActionItems();
            // if (boundElement.actionItemObserver == null) {
            //     //set observer
            //     boundElement.actionItemObserver = new MutationObserver(mutations => {
            //         boundElement.updateActionItems();
            //     });
            //     //start observing
            //     boundElement.actionItemObserver.observe(boundElement, {
            //         childList: true,
            //         subtree: true
            //     });
            // }

            //  Initialize Foundation
            boundElement.mdcTopAppBar!.init();
        });

        
    
    },

    unbind(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        const boundElement = el as MDCTopAppBarElement;
        if(boundElement == null)
            return;
        //boundElement.actionItemObserver.disconnect();

        if (boundElement.navAction != null) {
            boundElement.navAction.removeEventListener('click', boundElement.handleNavigationClick as EventListener)
        }

        if( !(boundElement.mdcTopAppBar instanceof MDCShortTopAppBarFoundation) && !(boundElement.mdcTopAppBar instanceof MDCFixedTopAppBarFoundation) )
        {
            window.removeEventListener('resize', boundElement.handleWindowResize as EventListener);
        }

        boundElement.scrollTarget.el!.removeEventListener('scroll', boundElement.handleTargetScroll as EventListener);


        boundElement.mdcTopAppBar?.destroy();
    }
}


export default TopAppBar;

let uid = 0;

function uId(): string {
    return "topappbar_actionItem_" + ++uid;
}
const TopAppBarAction: DirectiveOptions = {
    bind(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        const boundElement = el as HTMLElement;

        const id = boundElement.id || uId();
        boundElement.dataset.vmdcTopbarAction = id;
    }
};
export { TopAppBarAction };

const TopAppBarNav: DirectiveOptions = {
    bind(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        const boundElement = el as HTMLElement;

        const id = boundElement.id || uId();
        boundElement.dataset.vmdcTopbarNav = id;
    }
};
export { TopAppBarNav };
console.log(TopAppBar);