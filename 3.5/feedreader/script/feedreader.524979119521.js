qx.$$packageData['5']={"resources":{}};
qx.Part.$$notifyLoad("5", function() {
(function(){var a="qx.ui.window.IWindowManager";qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);}}});})();(function(){var a="__qO",b="qx.ui.window.Manager";qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__qO:null,setDesktop:function(c){this.__qO=c;this.updateStack();},getDesktop:function(){return this.__qO;},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);d.setActive(true);};if(e){e.resetActive();};},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);},syncWidget:function(){this.__qO.forceUnblock();var h=this.__qO.getWindows();var g=this._minZIndex;var m=g+h.length*2;var j=g+h.length*4;var k=null;for(var i=0,l=h.length;i<l;i++ ){var f=h[i];if(!f.isVisible()){continue;};k=k||f;if(f.isModal()){f.setZIndex(j);this.__qO.blockContent(j-1);j+=2;k=f;}else if(f.isAlwaysOnTop()){f.setZIndex(m);m+=2;}else {f.setZIndex(g);g+=2;};if(!k.isModal()&&f.isActive()||f.getZIndex()>k.getZIndex()){k=f;};};this.__qO.setActiveWindow(k);},bringToFront:function(o){var n=this.__qO.getWindows();var p=qx.lang.Array.remove(n,o);if(p){n.push(o);this.updateStack();};},sendToBack:function(r){var q=this.__qO.getWindows();var s=qx.lang.Array.remove(q,r);if(s){q.unshift(r);this.updateStack();};}},destruct:function(){this._disposeObjects(a);}});})();(function(){var a="__qP",b="mouseup",c="mousedown",d="Boolean",f="__qQ",g="losecapture",h="mousewheel",i="qx.ui.core.MMovable",j="The move handle could not be redefined!",k="mousemove",l="move",m="maximized",n="move-frame";qx.Mixin.define(i,{properties:{movable:{check:d,init:true},useMoveFrame:{check:d,init:false}},members:{__qP:null,__qQ:null,__qR:null,__qS:null,__qT:null,__qU:null,__qV:null,__qW:false,__qX:null,__qY:0,_activateMoveHandle:function(o){if(this.__qP){throw new Error(j);};this.__qP=o;o.addListener(c,this._onMoveMouseDown,this);o.addListener(b,this._onMoveMouseUp,this);o.addListener(k,this._onMoveMouseMove,this);o.addListener(g,this.__rd,this);if(qx.event.handler.MouseEmulation.ON){o.addListener(h,function(e){e.stopPropagation();},this);};},__ra:function(){var p=this.__qQ;if(!p){p=this.__qQ=new qx.ui.core.Widget();p.setAppearance(n);p.exclude();qx.core.Init.getApplication().getRoot().add(p);};return p;},__rb:function(){var location=this.getContentLocation();var r=this.getBounds();var q=this.__ra();q.setUserBounds(location.left,location.top,r.width,r.height);q.show();q.setZIndex(this.getZIndex()+1);},__rc:function(e){var t=this.__qR;var w=Math.max(t.left,Math.min(t.right,e.getDocumentLeft()));var s=Math.max(t.top,Math.min(t.bottom,e.getDocumentTop()));var u=this.__qS+w;var v=this.__qT+s;return {viewportLeft:parseInt(u,10),viewportTop:parseInt(v,10),parentLeft:parseInt(u-this.__qU,10),parentTop:parseInt(v-this.__qV,10)};},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(m)){return;};var parent=this.getLayoutParent();var x=parent.getContentLocation();var z=parent.getBounds();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isBlocked()){this.__qX=parent.getBlockerColor();this.__qY=parent.getBlockerOpacity();parent.setBlockerColor(null);parent.setBlockerOpacity(1);parent.blockContent(this.getZIndex()-1);this.__qW=true;};};this.__qR={left:x.left,top:x.top,right:x.left+z.width,bottom:x.top+z.height};var y=this.getContentLocation();this.__qU=x.left;this.__qV=x.top;this.__qS=y.left-e.getDocumentLeft();this.__qT=y.top-e.getDocumentTop();this.addState(l);this.__qP.capture();if(this.getUseMoveFrame()){this.__rb();};e.stop();},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;};var B=this.__rc(e);if(this.getUseMoveFrame()){this.__ra().setDomPosition(B.viewportLeft,B.viewportTop);}else {var A=this.getLayoutParent().getInsets();this.setDomPosition(B.parentLeft-(A.left||0),B.parentTop-(A.top||0));};e.stopPropagation();},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;};this.removeState(l);var parent=this.getLayoutParent();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__qW){parent.unblock();parent.setBlockerColor(this.__qX);parent.setBlockerOpacity(this.__qY);this.__qX=null;this.__qY=0;this.__qW=false;};};this.__qP.releaseCapture();var D=this.__rc(e);var C=this.getLayoutParent().getInsets();this.setLayoutProperties({left:D.parentLeft-(C.left||0),top:D.parentTop-(C.top||0)});if(this.getUseMoveFrame()){this.__ra().exclude();};e.stopPropagation();},__rd:function(e){if(!this.hasState(l)){return;};this.removeState(l);if(this.getUseMoveFrame()){this.__ra().exclude();};}},destruct:function(){this._disposeObjects(f,a);this.__qR=null;}});})();(function(){var a="mousedown",b="Boolean",c="w-resize",d="sw-resize",f="n-resize",g="resizableRight",h="ne-resize",i="se-resize",j="Integer",k="e-resize",l="resizableLeft",m="mousemove",n="move",o="shorthand",p="maximized",q="resize",r="nw-resize",s="mouseout",t="qx.ui.core.MResizable",u="mouseup",v="losecapture",w="resize-frame",x="resizableBottom",y="s-resize",z="resizableTop";qx.Mixin.define(t,{construct:function(){var content=this.getContentElement();content.addListener(a,this.__rq,this,true);content.addListener(u,this.__rr,this);content.addListener(m,this.__rt,this);content.addListener(s,this.__ru,this);content.addListener(v,this.__rs,this);var A=content.getDomElement();if(A==null){A=window;};this.__re=qx.event.Registration.getManager(A).getHandler(qx.event.handler.DragDrop);},properties:{resizableTop:{check:b,init:true},resizableRight:{check:b,init:true},resizableBottom:{check:b,init:true},resizableLeft:{check:b,init:true},resizable:{group:[z,g,x,l],mode:o},resizeSensitivity:{check:j,init:5},useResizeFrame:{check:b,init:true}},members:{__re:null,__rf:null,__rg:null,__rh:null,__ri:null,__rj:null,__rk:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var B=this.__rf;if(!B){B=this.__rf=new qx.ui.core.Widget();B.setAppearance(w);B.exclude();qx.core.Init.getApplication().getRoot().add(B);};return B;},__rl:function(){var location=this.getContentLocation();var C=this._getResizeFrame();C.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);C.show();C.setZIndex(this.getZIndex()+1);},__rm:function(e){var E=this.__rg;var D=this.getSizeHint();var H=this.__rk;var G=this.__rj;var I=G.width;var F=G.height;var K=G.left;var top=G.top;var J;if((E&this.RESIZE_TOP)||(E&this.RESIZE_BOTTOM)){J=Math.max(H.top,Math.min(H.bottom,e.getDocumentTop()))-this.__ri;if(E&this.RESIZE_TOP){F-=J;}else {F+=J;};if(F<D.minHeight){F=D.minHeight;}else if(F>D.maxHeight){F=D.maxHeight;};if(E&this.RESIZE_TOP){top+=G.height-F;};};if((E&this.RESIZE_LEFT)||(E&this.RESIZE_RIGHT)){J=Math.max(H.left,Math.min(H.right,e.getDocumentLeft()))-this.__rh;if(E&this.RESIZE_LEFT){I-=J;}else {I+=J;};if(I<D.minWidth){I=D.minWidth;}else if(I>D.maxWidth){I=D.maxWidth;};if(E&this.RESIZE_LEFT){K+=G.width-I;};};return {viewportLeft:K,viewportTop:top,parentLeft:G.bounds.left+K-G.left,parentTop:G.bounds.top+top-G.top,width:I,height:F};},__rn:{'1':f,'2':y,'4':c,'8':k,'5':r,'6':d,'9':h,'10':i},__ro:function(e){var location=this.getContentLocation();var N=this.getResizeSensitivity();var O=e.getDocumentLeft();var M=e.getDocumentTop();var L=this.__rp(location,O,M,N);if(L>0){L=L|this.__rp(location,O,M,N*2);};this.__rg=L;},__rp:function(location,S,R,P){var Q=0;if(this.getResizableTop()&&Math.abs(location.top-R)<P&&S>location.left-P&&S<location.right+P){Q+=this.RESIZE_TOP;}else if(this.getResizableBottom()&&Math.abs(location.bottom-R)<P&&S>location.left-P&&S<location.right+P){Q+=this.RESIZE_BOTTOM;};if(this.getResizableLeft()&&Math.abs(location.left-S)<P&&R>location.top-P&&R<location.bottom+P){Q+=this.RESIZE_LEFT;}else if(this.getResizableRight()&&Math.abs(location.right-S)<P&&R>location.top-P&&R<location.bottom+P){Q+=this.RESIZE_RIGHT;};return Q;},__rq:function(e){if(!this.__rg||!this.getEnabled()){return;};this.addState(q);this.__rh=e.getDocumentLeft();this.__ri=e.getDocumentTop();var location=this.getContentLocation();var U=this.getBounds();this.__rj={top:location.top,left:location.left,width:location.right-location.left,height:location.bottom-location.top,bounds:qx.lang.Object.clone(U)};var parent=this.getLayoutParent();var V=parent.getContentLocation();var T=parent.getBounds();this.__rk={left:V.left,top:V.top,right:V.left+T.width,bottom:V.top+T.height};if(this.getUseResizeFrame()){this.__rl();};this.capture();e.stop();},__rr:function(e){if(!this.hasState(q)||!this.getEnabled()){return;};if(this.getUseResizeFrame()){this._getResizeFrame().exclude();};var W=this.__rm(e);this.setWidth(W.width);this.setHeight(W.height);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:W.parentLeft,top:W.parentTop});};this.__rg=0;this.removeState(q);this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.releaseCapture();e.stopPropagation();},__rs:function(e){if(!this.__rg){return;};this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.removeState(n);if(this.getUseResizeFrame()){this._getResizeFrame().exclude();};},__rt:function(e){if(!this.getEnabled()){return;};if(this.hasState(q)){var Y=this.__rm(e);if(this.getUseResizeFrame()){var X=this._getResizeFrame();X.setUserBounds(Y.viewportLeft,Y.viewportTop,Y.width,Y.height);}else {this.setWidth(Y.width);this.setHeight(Y.height);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:Y.parentLeft,top:Y.parentTop});};};e.stopPropagation();}else if(!this.hasState(p)&&!this.__re.isSessionActive()){this.__ro(e);var bc=this.__rg;var bb=this.getApplicationRoot();if(bc){var ba=this.__rn[bc];this.setCursor(ba);bb.setGlobalCursor(ba);}else if(this.getCursor()){this.resetCursor();bb.resetGlobalCursor();};};},__ru:function(e){if(this.getCursor()&&!this.hasState(q)){this.resetCursor();this.getApplicationRoot().resetGlobalCursor();};}},destruct:function(){if(this.__rf!=null&&!qx.core.ObjectRegistry.inShutDown){this.__rf.destroy();this.__rf=null;};this.__re=null;}});})();(function(){var a="beforeClose",b="beforeMinimize",c="mousedown",d="Boolean",f="window-resize-frame",g="changeStatus",h="changeIcon",i="excluded",j="_applyModal",k="execute",l="dblclick",m="restore-button",n="_applyActive",o="minimize-button",p="qx.event.type.Event",q="close-button",r="beforeRestore",s="statusbar",t="captionbar",u="String",v="minimize",w="modal",x="changeModal",y="title",z="icon",A="showStatusbar",B="changeAlwaysOnTop",C="_applyShowStatusbar",D="maximized",E="_applyStatus",F="qx.ui.window.Window",G="normal",H="changeCaption",I="engine.name",J="statusbar-text",K="focusout",L="beforeMaximize",M="maximize",N="maximize-button",O="restore",P="window",Q="pane",R="close",S="changeActive",T="mshtml",U="_applyCaptionBarChange",V="active",W="minimized";qx.Class.define(F,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(X,Y){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.VBox());this._createChildControl(t);this._createChildControl(Q);if(Y!=null){this.setIcon(Y);};if(X!=null){this.setCaption(X);};this._updateCaptionBar();this.addListener(c,this._onWindowMouseDown,this,true);this.addListener(K,this._onWindowFocusOut,this);qx.core.Init.getApplication().getRoot().add(this);this.initVisibility();qx.ui.core.FocusHandler.getInstance().addRoot(this);this._getResizeFrame().setAppearance(f);},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":p,"close":p,"beforeMinimize":p,"minimize":p,"beforeMaximize":p,"maximize":p,"beforeRestore":p,"restore":p},properties:{appearance:{refine:true,init:P},visibility:{refine:true,init:i},focusable:{refine:true,init:true},active:{check:d,init:false,apply:n,event:S},alwaysOnTop:{check:d,init:false,event:B},modal:{check:d,init:false,event:x,apply:j},caption:{apply:U,event:H,nullable:true},icon:{check:u,nullable:true,apply:U,event:h,themeable:true},status:{check:u,nullable:true,apply:E,event:g},showClose:{check:d,init:true,apply:U,themeable:true},showMaximize:{check:d,init:true,apply:U,themeable:true},showMinimize:{check:d,init:true,apply:U,themeable:true},allowClose:{check:d,init:true,apply:U},allowMaximize:{check:d,init:true,apply:U},allowMinimize:{check:d,init:true,apply:U},showStatusbar:{check:d,init:false,apply:C}},members:{__rv:null,__rw:null,getChildrenContainer:function(){return this.getChildControl(Q);},_forwardStates:{active:true,maximized:true,showStatusbar:true,modal:true},setLayoutParent:function(parent){{};qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);},_createChildControlImpl:function(be,bd){var ba;switch(be){case s:ba=new qx.ui.container.Composite(new qx.ui.layout.HBox());this._add(ba);ba.add(this.getChildControl(J));break;case J:ba=new qx.ui.basic.Label();ba.setValue(this.getStatus());break;case Q:ba=new qx.ui.container.Composite();this._add(ba,{flex:1});break;case t:var bb=new qx.ui.layout.Grid();bb.setRowFlex(0,1);bb.setColumnFlex(1,1);ba=new qx.ui.container.Composite(bb);this._add(ba);ba.addListener(l,this._onCaptionMouseDblClick,this);this._activateMoveHandle(ba);break;case z:ba=new qx.ui.basic.Image(this.getIcon());this.getChildControl(t).add(ba,{row:0,column:0});break;case y:ba=new qx.ui.basic.Label(this.getCaption());ba.setWidth(0);ba.setAllowGrowX(true);var bc=this.getChildControl(t);bc.add(ba,{row:0,column:1});break;case o:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(k,this._onMinimizeButtonClick,this);this.getChildControl(t).add(ba,{row:0,column:2});break;case m:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(k,this._onRestoreButtonClick,this);this.getChildControl(t).add(ba,{row:0,column:3});break;case N:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(k,this._onMaximizeButtonClick,this);this.getChildControl(t).add(ba,{row:0,column:4});break;case q:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(k,this._onCloseButtonClick,this);this.getChildControl(t).add(ba,{row:0,column:6});break;};return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,be);},_updateCaptionBar:function(){var bg;var bh=this.getIcon();if(bh){this.getChildControl(z).setSource(bh);this._showChildControl(z);}else {this._excludeChildControl(z);};var bf=this.getCaption();if(bf){this.getChildControl(y).setValue(bf);this._showChildControl(y);}else {this._excludeChildControl(y);};if(this.getShowMinimize()){this._showChildControl(o);bg=this.getChildControl(o);this.getAllowMinimize()?bg.resetEnabled():bg.setEnabled(false);}else {this._excludeChildControl(o);};if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(m);this._excludeChildControl(N);}else {this._showChildControl(N);this._excludeChildControl(m);};bg=this.getChildControl(N);this.getAllowMaximize()?bg.resetEnabled():bg.setEnabled(false);}else {this._excludeChildControl(N);this._excludeChildControl(m);};if(this.getShowClose()){this._showChildControl(q);bg=this.getChildControl(q);this.getAllowClose()?bg.resetEnabled():bg.setEnabled(false);}else {this._excludeChildControl(q);};},close:function(){if(!this.isVisible()){return;};if(this.fireNonBubblingEvent(a,qx.event.type.Event,[false,true])){this.hide();this.fireEvent(R);};},open:function(){this.show();this.setActive(true);this.focus();},center:function(){var parent=this.getLayoutParent();if(parent){var bj=parent.getBounds();if(bj){var bk=this.getSizeHint();var bi=Math.round((bj.width-bk.width)/2);var top=Math.round((bj.height-bk.height)/2);if(top<0){top=0;};this.moveTo(bi,top);return;};};{};},maximize:function(){if(this.isMaximized()){return;};var parent=this.getLayoutParent();if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(L,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();};var bl=this.getLayoutProperties();this.__rw=bl.left===undefined?0:bl.left;this.__rv=bl.top===undefined?0:bl.top;this.setLayoutProperties({left:null,top:null,edge:0});this.addState(D);this._updateCaptionBar();this.fireEvent(M);};};},minimize:function(){if(!this.isVisible()){return;};if(this.fireNonBubblingEvent(b,qx.event.type.Event,[false,true])){var bm=this.getLayoutProperties();this.__rw=bm.left===undefined?0:bm.left;this.__rv=bm.top===undefined?0:bm.top;this.removeState(D);this.hide();this.fireEvent(v);};},restore:function(){if(this.getMode()===G){return;};if(this.fireNonBubblingEvent(r,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();};var bn=this.__rw;var top=this.__rv;this.setLayoutProperties({edge:null,left:bn,top:top});this.removeState(D);this._updateCaptionBar();this.fireEvent(O);};},moveTo:function(bo,top){if(this.isMaximized()){return;};this.setLayoutProperties({left:bo,top:top});},isMaximized:function(){return this.hasState(D);},getMode:function(){if(!this.isVisible()){return W;}else {if(this.isMaximized()){return D;}else {return G;};};},_applyActive:function(bq,bp){if(bp){this.removeState(V);}else {this.addState(V);};},_applyModal:function(bs,br){if(br){this.removeState(w);}else {this.addState(w);};},_getContentPaddingTarget:function(){return this.getChildControl(Q);},_applyShowStatusbar:function(bv,bt){var bu=this._getResizeFrame();if(bv){this.addState(A);bu.addState(A);}else {this.removeState(A);bu.removeState(A);};if(bv){this._showChildControl(s);}else {this._excludeChildControl(s);};},_applyCaptionBarChange:function(bx,bw){this._updateCaptionBar();},_applyStatus:function(bz,by){var bA=this.getChildControl(J,true);if(bA){bA.setValue(bz);};},_applyFocusable:function(bC,bB){if(qx.core.Environment.get(I)!==T){qx.ui.core.Widget.prototype._applyFocusable.call(this,bC,bB);};},_onWindowEventStop:function(e){e.stopPropagation();},_onWindowMouseDown:function(e){this.setActive(true);},_onWindowFocusOut:function(e){if(this.getModal()){return;};var bD=e.getRelatedTarget();if(bD!=null&&!qx.ui.core.Widget.contains(this,bD)){this.setActive(false);};},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();};},_onMinimizeButtonClick:function(e){this.minimize();this.getChildControl(o).reset();},_onRestoreButtonClick:function(e){this.restore();this.getChildControl(m).reset();},_onMaximizeButtonClick:function(e){this.maximize();this.getChildControl(N).reset();},_onCloseButtonClick:function(e){this.close();this.getChildControl(q).reset();}}});})();(function(){var a="qx.ui.form.IBooleanForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var a="qx.ui.form.INumberForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var a="qx.ui.form.IDateForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var a="qx.ui.form.IColorForm",b="qx.event.type.Data";qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;},resetValue:function(){},getValue:function(){}}});})();(function(){var a="The given item has not been added.",b="qx.ui.form.Resetter",c=" not supported for reseting.",d="Item ";qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this.__rB=[];},members:{__rB:null,add:function(e){if(this._supportsValue(e)){var f=e.getValue();}else if(this.__zR(e)){var f=e.getSelection();}else if(this.__zS(e)){var f=e.getSelection().concat();}else {throw new Error(d+e+c);};this.__rB.push({item:e,init:f});},reset:function(){for(var i=0;i<this.__rB.length;i++ ){var g=this.__rB[i];this.__zP(g.item,g.init);};},resetItem:function(h){var j;for(var i=0;i<this.__rB.length;i++ ){var k=this.__rB[i];if(k.item===h){j=k.init;break;};};if(j===undefined){throw new Error(a);};this.__zP(h,j);},__zP:function(l,m){if(this._supportsValue(l)){l.setValue(m);}else if(this.__zR(l)||this.__zS(l)){l.setSelection(m);};},redefine:function(){for(var i=0;i<this.__rB.length;i++ ){var n=this.__rB[i].item;this.__rB[i].init=this.__zQ(n);};},redefineItem:function(o){var p;for(var i=0;i<this.__rB.length;i++ ){if(this.__rB[i].item===o){p=this.__rB[i];break;};};if(p===undefined){throw new Error(a);};p.init=this.__zQ(p.item);},__zQ:function(q){if(this._supportsValue(q)){return q.getValue();}else if(this.__zR(q)||this.__zS(q)){return q.getSelection();};},__zR:function(r){var s=r.constructor;return qx.Class.hasInterface(s,qx.ui.core.ISingleSelection);},__zS:function(t){var u=t.constructor;return qx.Class.hasInterface(u,qx.data.controller.ISelection);},_supportsValue:function(v){var w=v.constructor;return (qx.Class.hasInterface(w,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(w,qx.ui.form.IColorForm)||qx.Class.hasInterface(w,qx.ui.form.IDateForm)||qx.Class.hasInterface(w,qx.ui.form.INumberForm)||qx.Class.hasInterface(w,qx.ui.form.IStringForm));}},destruct:function(){this.__rB=null;}});})();(function(){var a="qx.ui.window.IDesktop";qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);},unblock:function(){},isBlocked:function(){}}});})();
});