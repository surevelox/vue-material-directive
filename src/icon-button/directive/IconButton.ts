import { MDCIconButtonToggleFoundation, MDCIconButtonToggleAdapter, MDCIconButtonToggleEventDetail  } from '@material/icon-button';
import { IconButtonEvents } from "./Events";
import { DirectiveOptions, VNodeDirective, VNode } from 'vue';

interface MDCIconButtonElement extends HTMLElement {
    mdcIconButtonToggle: MDCIconButtonToggleFoundation | null;
    handleOnClick: (e: Event) => void;
}


const IconButton: DirectiveOptions = {
    inserted(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        //
    },
    bind(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        
        const boundElement = el as MDCIconButtonElement;
        const modifiers = binding.modifiers;
        const arg = binding.arg;

        const _adapter : MDCIconButtonToggleAdapter =  {
            addClass(className: string): void {
                boundElement.classList.add(className);
            },
            removeClass(className: string): void {
                boundElement.classList.remove(className);
            },
            hasClass(className: string): boolean {
                return boundElement.classList.contains(className);
            },
            getAttr(attrName: string): string | null {
                return boundElement.getAttribute(attrName);
            },
            setAttr(attrName: string, attrValue: string): void {
                boundElement.setAttribute(attrName,attrValue);
            },
            notifyChange(evtData: MDCIconButtonToggleEventDetail): void {
                boundElement.dispatchEvent(
                    new CustomEvent<MDCIconButtonToggleEventDetail>(IconButtonEvents.CHANGE_EVENT, {
                        detail: evtData
                    })
                )
            }
        };

        boundElement.handleOnClick = (e: Event) => {
            boundElement.mdcIconButtonToggle!.handleClick();
        };

        //Create Foundation and Initialize
        boundElement.mdcIconButtonToggle  = new MDCIconButtonToggleFoundation(_adapter);   
        boundElement.mdcIconButtonToggle.init();

        boundElement.addEventListener(IconButtonEvents.CLICK, boundElement.handleOnClick);

    },
    unbind(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        const boundElement = el as MDCIconButtonElement;
        boundElement.removeEventListener(IconButtonEvents.CLICK, boundElement.handleOnClick);
        boundElement.mdcIconButtonToggle!.destroy();
    }
}

export default IconButton;