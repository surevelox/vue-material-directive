import { MDCRippleFoundation } from '@material/ripple';
import { MDCRippleAdapter, MDCRipplePoint } from '@material/ripple';
import * as util from '@material/ripple/util';
import { DirectiveOptions, VNodeDirective, VNode } from 'vue';
import { SpecificEventListener } from '@material/base/types';
import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';


type RippleParentElement = {
    readonly parent: HTMLElement
};

interface MDCRippleElement extends HTMLElement {
    mdcComponent: MDCRippleFoundation | null;
    surface : RippleParentElement;
    

}


const Ripple: DirectiveOptions = {
    inserted(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        
    },
    bind(el: Element | null, binding: VNodeDirective, vnode: VNode) {

        const boundElement = el as MDCRippleElement;

        const _adapter : MDCRippleAdapter = {
            browserSupportsCssVars(): boolean {
                return util.supportsCssVariables(window);
            },
            isUnbounded(): boolean {
                return false;
            },
            isSurfaceActive(): boolean {
                return matches(boundElement.surface.parent, ':active')
            },
            isSurfaceDisabled(): boolean {
                return false;
            },
            addClass(className: string): void {
                boundElement.classList.add(className);
            },
            removeClass(className: string): void {
                boundElement.classList.remove(className);
            },
            containsEventTarget(target: EventTarget | null): boolean {
                return boundElement.surface.parent.contains(target as Node);
            },
            registerInteractionHandler : (evtType, handler) => boundElement.surface.parent.addEventListener(evtType, handler, applyPassive())
            ,
            deregisterInteractionHandler<K extends "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "change" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "focusin" | "focusout" | "gotpointercapture" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "lostpointercapture" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "selectionchange" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "volumechange" | "waiting" | "wheel">(evtType: K, handler: SpecificEventListener<K>): void {
                boundElement.surface.parent.removeEventListener(evtType, handler, applyPassive());
            },
            registerDocumentInteractionHandler:(evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
            deregisterDocumentInteractionHandler<K extends "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "blur" | "cancel" | "canplay" | "canplaythrough" | "change" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "focusin" | "focusout" | "gotpointercapture" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "lostpointercapture" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "progress" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "select" | "selectionchange" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "volumechange" | "waiting" | "wheel">(evtType: K, handler: SpecificEventListener<K>): void {
                document.documentElement.removeEventListener(evtType, handler, applyPassive());
            },
            registerResizeHandler(handler: SpecificEventListener<"resize">): void {
                window.addEventListener('resize', handler);
            },
            deregisterResizeHandler(handler: SpecificEventListener<"resize">): void {
                window.removeEventListener('resize', handler);
            },
            updateCssVariable(varName: string, value: string | null): void {
                boundElement.style.setProperty(varName, value);
            },
            computeBoundingRect(): ClientRect {
                return boundElement.surface.parent.getBoundingClientRect();
            },
            getWindowPageOffset(): MDCRipplePoint {
                return { x: window.pageXOffset, y: window.pageYOffset };
            }            
        };

        boundElement.mdcComponent = new MDCRippleFoundation(_adapter);

         //Ripple Parent is only available after Element added to DOM
         vnode?.context?.$nextTick(() => {
            boundElement.surface = {
                get parent() {
                    return boundElement.parentElement!;
                }
            };
            boundElement.mdcComponent?.init();
        });
    },
    unbind(el: Element | null, binding: VNodeDirective, vnode: VNode) {
        const boundElement = el as MDCRippleElement;
        boundElement.mdcComponent!.destroy();

    }
}

export default Ripple;