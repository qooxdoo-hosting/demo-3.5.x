qx.$$packageData['1024']={"locales":{},"resources":{"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Oxygen/32/apps/media-photo-album.png":[32,32,"png","qx"],"qx/icon/Oxygen/48/devices/audio-card.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/audio-input-microphone.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/battery.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/camera-photo.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/camera-web.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/computer.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/display.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/drive-harddisk.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/drive-optical.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/input-keyboard.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/input-mouse.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/media-flash.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/media-optical.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/multimedia-player.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/network-wired.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/network-wireless.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/pda.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/phone.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/printer.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/scanner.png":[48,48,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/32/apps/media-photo-album.png":[32,32,"png","qx"],"qx/icon/Tango/48/devices/audio-card.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/audio-input-microphone.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/battery.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/camera-photo.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/camera-web.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/computer.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/display.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/drive-harddisk.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/drive-optical.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/input-keyboard.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/input-mouse.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/media-flash.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/media-optical.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/multimedia-player.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/network-wired.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/network-wireless.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/pda.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/phone.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/printer.png":[48,48,"png","qx"],"qx/icon/Tango/48/devices/scanner.png":[48,48,"png","qx"]},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var a="resizer",b="qx.ui.container.Resizer";qx.Class.define(b,{extend:qx.ui.container.Composite,include:qx.ui.core.MResizable,properties:{appearance:{refine:true,init:a}}});})();(function(){var a="Resizer",b="audio-card.png",c="battery.png",d="Pop-Up",f="DragDrop",g="display.png",h="drop",j="main",k="Tooltip",m="computer.png",n="input-keyboard.png",o="droprequest",p="copy",q="drive-optical.png",r="dragstart",s="multi",t="move",u="icon/48/devices/",v="network-wired.png",w="camera-photo.png",x="network-wireless.png",y="audio-input-microphone.png",z="SlideBar",A="icon/16/places/folder.png",B="widgetbrowser.pages.Misc",C="tooltip",D="ProgressBar",E="icon/32/apps/media-photo-album.png",F="drive-harddisk.png",G="camera-web.png",H="items",I="Item ";qx.Class.define(B,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.__Pd=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));this.add(this.__Pd);this.initWidgets();},members:{__Pd:null,initWidgets:function(){var R=this._widgets;var Q;var N=new qx.ui.basic.Label(D);var O=new qx.ui.indicator.ProgressBar(0,100).set({value:50});R.push(O);this.__Pd.add(N);this.__Pd.add(O);N=new qx.ui.basic.Label(z);var L=new qx.ui.container.SlideBar();L.setWidth(300);L.setLayout(new qx.ui.layout.HBox(3));var M=[b,y,c,w,G,m,g,F,q,n,v,x];M.forEach(function(T){L.add((new qx.ui.basic.Image(u+T)).set({decorator:j,padding:4}));});R.push(L);this.__Pd.add(N);this.__Pd.add(L);N=new qx.ui.basic.Label(k);var J=new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({offset:3,offsetBottom:20,appearance:C});J.set({allowStretchX:false,autoHide:false});J.add(new qx.ui.basic.Atom(d,E));R.push(J);this.__Pd.add(N);this.__Pd.add(J);J.show();N=new qx.ui.basic.Label(a);Q=new qx.ui.container.Composite(new qx.ui.layout.Canvas());var S=new qx.ui.container.Resizer().set({resizable:false,resizableRight:true});S.setLayout(new qx.ui.layout.Grow());S.add(new qx.ui.core.Widget().set({width:50,maxWidth:200,height:50,maxHeight:200}));Q.add(S);R.push(S);this.__Pd.add(N);this.__Pd.add(Q);N=new qx.ui.basic.Label(f);Q=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));Q.set({allowStretchY:false,allowStretchX:false});this.__Pd.add(N);this.__Pd.add(Q);var P=new qx.ui.form.List;P.setDraggable(true);P.setSelectionMode(s);for(var i=0;i<10;i++ ){P.add(new qx.ui.form.ListItem(I+i,A));};P.addListener(r,function(e){e.addType(H);e.addAction(p);e.addAction(t);});P.addListener(o,function(e){var W=e.getCurrentAction();var Y=e.getCurrentType();var V;switch(Y){case H:V=this.getSelection();if(W==p){var X=[];for(var i=0,l=V.length;i<l;i++ ){X[i]=V[i].clone();};V=X;};break;};if(W==t){var U=this.getSelection();for(var i=0,l=U.length;i<l;i++ ){this.remove(U[i]);};};e.addData(Y,V);});Q.add(P);R.push(P);var K=new qx.ui.form.List;K.setDroppable(true);K.setSelectionMode(s);K.addListener(h,function(e){var ba=e.getData(H);for(var i=0,l=ba.length;i<l;i++ ){this.add(ba[i]);};});Q.add(K);R.push(K);}}});})();(function(){var a="complete",b="0%",c="progressbar",d="change",e="progress",f="qx.ui.indicator.ProgressBar",g="qx.event.type.Event",h="%",i="qx.event.type.Data";qx.Class.define(f,{extend:qx.ui.container.Composite,construct:function(k,j){qx.ui.container.Composite.call(this);this._createChildControl(e);this.setLayout(new qx.ui.layout.HBox());if(j!=null){this.setMaximum(j);};if(k!=null){this.setValue(k);};},properties:{appearance:{refine:true,init:c}},events:{complete:g,change:i},members:{__wS:0,__Ij:100,getValue:function(){return this.__wS;},setValue:function(m){var l=this.getMaximum();if(!qx.lang.Type.isNumber(m)||!isFinite(m)){return null;};if(m<0){m=0;};if(m>l){m=l;};this.__wS=m;this._changeProgress(m/l);return m;},getMaximum:function(){return this.__Ij;},setMaximum:function(o){var n=o;var p=this.getValue();if(!qx.lang.Type.isNumber(n)||!isFinite(n)||n<=0){return null;};if(n<p){n=p;};this.__Ij=n;this._changeProgress(p/n);return n;},_createChildControlImpl:function(s,r){var q;switch(s){case e:q=new qx.ui.container.Composite(new qx.ui.layout.Canvas());this._add(q,{width:b});break;};return q||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,s);},_changeProgress:function(v){var u=this.getChildControl(e);var t=Math.floor(v*100);var w=parseInt(u.getLayoutProperties().width,10);u.setLayoutProperties({width:t+h});if(t!=w){this.fireDataEvent(d,t,w);};if(t===100){this.fireEvent(a);};}}});})();
});