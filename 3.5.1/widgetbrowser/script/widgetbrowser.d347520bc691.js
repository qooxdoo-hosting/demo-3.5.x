qx.$$packageData['18']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("18", function() {
(function(){var c="changeModel",d="resize",f="_applyLabelOptions",g="_applyLabelPath",h="qx.data.Array",j="_applyGroupLabelOptions",m="changeLength",n="Integer",o="_applyModel",p="changeGroups",q="Boolean",r="GroupingTypeError: You can't mix 'Objects' and 'Strings' as",s="sorter",t="row-layer",u="group",v="_applyIconPath",w="_applyDelegate",x="changeDelegate",y=" group identifier!",z="???",A="_applyRowHeight",B="qx.data.IListData",C="filter",D="virtual-list",E="String",F="_applyGroupLabelPath",G="_applyIconOptions",H="qx.ui.list.List";qx.Class.define(H,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],implement:qx.data.controller.ISelection,construct:function(I){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);this._init();this.__zF=new qx.data.Array();this.initGroups(this.__zF);if(I!=null){this.initModel(I);};this.initItemHeight();},properties:{appearance:{refine:true,init:D},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:B,apply:o,event:c,nullable:true,deferredInit:true},itemHeight:{check:n,init:25,apply:A,themeable:true},labelPath:{check:E,apply:g,nullable:true},iconPath:{check:E,apply:v,nullable:true},groupLabelPath:{check:E,apply:F,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:G,nullable:true},groupLabelOptions:{apply:j,nullable:true},delegate:{apply:w,event:x,init:null,nullable:true},autoGrouping:{check:q,init:true},groups:{check:h,event:p,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__zG:null,__zH:null,__zI:null,__zJ:false,__zK:false,__zL:false,__zF:null,refresh:function(){this.__zN();},_createChildControlImpl:function(L,K){var J;switch(L){case t:J=new qx.ui.virtual.layer.Row(null,null);break;};return J||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,L);},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);this.__zG=[];this.__zH=[];this.__zI={};this.__zJ=false;this.__zK=false;this.__zL=false;this.getPane().addListener(d,this._onResize,this);this._initBackground();this._initLayer();},_initBackground:function(){this._background=this.getChildControl(t);this.getPane().addLayer(this._background);},_initLayer:function(){this._layer=this._provider.createLayer();this.getPane().addLayer(this._layer);},_getDataFromRow:function(O){var N=null;var M=this.getModel();if(M==null){return null;};if(this._isGroup(O)){N=this.getGroups().getItem(this._lookupGroup(O));}else {N=M.getItem(this._lookup(O));};if(N!=null){return N;}else {return null;};},_getLookupTable:function(){return this.__zG;},_lookup:function(P){return this.__zG[P];},_lookupGroup:function(Q){return this.__zH.indexOf(Q);},_reverseLookup:function(R){if(R<0){return -1;};return this.__zG.indexOf(R);},_isGroup:function(S){return this._lookup(S)==-1;},_getSelectables:function(){return this.getModel();},_applyModel:function(U,T){if(U!=null){U.addListener(m,this._onModelChange,this);};if(T!=null){T.removeListener(m,this._onModelChange,this);};this._provider.removeBindings();this._onModelChange();},_applyRowHeight:function(W,V){this.getPane().getRowConfig().setDefaultItemSize(W);},_applyLabelPath:function(Y,X){this._provider.setLabelPath(Y);},_applyIconPath:function(bb,ba){this._provider.setIconPath(bb);},_applyGroupLabelPath:function(bd,bc){this._provider.setGroupLabelPath(bd);},_applyLabelOptions:function(bf,be){this._provider.setLabelOptions(bf);},_applyIconOptions:function(bh,bg){this._provider.setIconOptions(bh);},_applyGroupLabelOptions:function(bj,bi){this._provider.setGroupLabelOptions(bj);},_applyDelegate:function(bl,bk){this._provider.setDelegate(bl);this.__zN();},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);},_onModelChange:function(e){this.__zN();this._applyDefaultSelection();},__zM:function(){this.getPane().getRowConfig().setItemCount(this.__zG.length);this.getPane().fullUpdate();},__zN:function(){this.__zG=[];this.__zH=[];this.__zI={};if(this.isAutoGrouping()){this.getGroups().removeAll();};var bm=this.getModel();if(bm!=null){this._runDelegateFilter(bm);this._runDelegateSorter(bm);this._runDelegateGroup(bm);};this._updateSelection();this.__zM();},_runDelegateFilter:function(bo){var bn=qx.util.Delegate.getMethod(this.getDelegate(),C);for(var i=0,l=bo.length;i<l; ++i){if(bn==null||bn(bo.getItem(i))){this.__zG.push(i);};};},_runDelegateSorter:function(bp){if(this.__zG.length==0){return;};var bq=qx.util.Delegate.getMethod(this.getDelegate(),s);if(bq!=null){this.__zG.sort(function(a,b){return bq(bp.getItem(a),bp.getItem(b));});};},_runDelegateGroup:function(bu){var bv=qx.util.Delegate.getMethod(this.getDelegate(),u);if(bv!=null){for(var i=0,l=this.__zG.length;i<l; ++i){var br=this.__zG[i];var bt=this.getModel().getItem(br);var bs=bv(bt);this.__zO(bs,br);};this.__zG=this.__zP();};},__zO:function(bx,bw){if(bx==null){this.__zL=true;bx=z;};var name=this.__zQ(bx);if(this.__zI[name]==null){this.__zI[name]=[];if(this.isAutoGrouping()){this.getGroups().push(bx);};};this.__zI[name].push(bw);},__zP:function(){this.__zR();var bB=[];var bD=0;var bz=this.getGroups();for(var i=0;i<bz.getLength();i++ ){var by=bz.getItem(i);bB.push(-1);this.__zH.push(bD);bD++ ;var bC=this.__zQ(by);var bA=this.__zI[bC];if(bA!=null){for(var k=0;k<bA.length;k++ ){bB.push(bA[k]);bD++ ;};};};return bB;},__zQ:function(bF){var name=null;if(!qx.lang.Type.isString(bF)){var bE=this.getGroups().indexOf(bF);this.__zK=true;name=u;if(bE==-1){name+=this.getGroups().getLength();}else {name+=bE;};}else {this.__zJ=true;var name=bF;};return name;},__zR:function(){if(this.__zK&&this.__zL||this.__zK&&this.__zJ){throw new Error(r+y);};}},destruct:function(){var bG=this.getModel();if(bG!=null){bG.removeListener(m,this._onModelChange,this);};var bH=this.getPane();if(bH!=null){bH.removeListener(d,this._onResize,this);};this._background.dispose();this._provider.dispose();this._layer.dispose();this._background=this._provider=this._layer=this.__zG=this.__zH=this.__zI=null;if(this.__zF){this.__zF.dispose();};}});})();(function(){var a="_applyColorOdd",b="_applyColorEven",c="Color",d="qx.ui.virtual.layer.AbstractBackground";qx.Class.define(d,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);if(e){this.setColorEven(e);};if(f){this.setColorOdd(f);};this.__zU={};this.__zV={};},properties:{colorEven:{nullable:true,check:c,apply:b,themeable:true},colorOdd:{nullable:true,check:c,apply:a,themeable:true}},members:{__zW:null,__zX:null,__zU:null,__zV:null,setColor:function(h,g){if(g){this.__zU[h]=qx.theme.manager.Color.getInstance().resolve(g);}else {delete (this.__zU[h]);};},clearCustomColors:function(){this.__zU={};this.updateLayerData();},getColor:function(i){var j=this.__zU[i];if(j){return j;}else {return i%2==0?this.__zW:this.__zX;};},_applyColorEven:function(l,k){if(l){this.__zW=qx.theme.manager.Color.getInstance().resolve(l);}else {this.__zW=null;};this.updateLayerData();},_applyColorOdd:function(n,m){if(n){this.__zX=qx.theme.manager.Color.getInstance().resolve(n);}else {this.__zX=null;};this.updateLayerData();},setBackground:function(o,p){if(p){this.__zV[o]=qx.theme.manager.Decoration.getInstance().resolve(p);}else {delete (this.__zV[o]);};this.updateLayerData();},getBackground:function(q){return this.__zV[q];}},destruct:function(){this.__zU=this.__zV=null;}});})();(function(){var a="left: 0;",b="width:",c="background-color:",d="qx.ui.virtual.layer.Row",e="",f="block",g="position: absolute;",h="</div>",i="height:",j="row-layer",k="<div style='",l="'>",m=";",n="px;",o="none",p="top:";qx.Class.define(d,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:j}},members:{_fullUpdate:function(x,u,t,w){var A=[];var z=qx.lang.Array.sum(w);var top=0;var D=x;var s=0;for(var y=0;y<t.length;y++ ){var v=this.getColor(D);var B=v?c+v+m:e;var C=this.getBackground(D);var q=C?qx.bom.element.Style.compile(C.getStyles()):e;A.push(k,g,a,p,top,n,i,t[y],n,b,z,n,B,q,l,h);s++ ;top+=t[y];D+=1;};var r=this.getContentElement().getDomElement();r.style.display=o;r.innerHTML=A.join(e);r.style.display=f;this._width=z;},_updateLayerWindow:function(G,H,F,E){if(G!==this.getFirstRow()||F.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(E)){this._fullUpdate(G,H,F,E);};},setColor:function(J,I){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,I);if(this.__zY(J)){this.updateLayerData();};},setBackground:function(K,L){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,K,L);if(this.__zY(K)){this.updateLayerData();};},__zY:function(M){var O=this.getFirstRow();var N=O+this.getRowSizes().length-1;return M>=O&&M<=N;}}});})();(function(){var a="qx.ui.list.provider.IListProvider";qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});})();(function(){var a="cell.type",b="model[",c="groups[",d="model",f="",g="changeDelegate",h="label",i="qx.ui.list.core.MWidgetController",j="icon",k="]",l="value",m="BindingIds",n=".",o="group",p="String";qx.Mixin.define(i,{construct:function(){this.__Aa=[];},properties:{labelPath:{check:p,nullable:true},iconPath:{check:p,nullable:true},groupLabelPath:{check:p,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__Aa:null,bindDefaultProperties:function(q,r){if(q.getUserData(a)!=o){this.bindProperty(f,d,null,q,r);this.bindProperty(this.getLabelPath(),h,this.getLabelOptions(),q,r);if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),j,this.getIconOptions(),q,r);};}else {this.bindProperty(this.getGroupLabelPath(),l,this.getGroupLabelOptions(),q,r);};},bindProperty:function(u,x,v,t,s){var y=t.getUserData(a);var w=this.__Ab(s,u,y);if(v){v.ignoreConverter=d;};var z=this._list.bind(w,t,x,v);this.__Ac(t,z);},bindPropertyReverse:function(D,B,E,F,A){var G=F.getUserData(a);var C=this.__Ab(A,D,G);var H=F.bind(B,this._list,C,E);this.__Ac(F,H);},removeBindings:function(){while(this.__Aa.length>0){var I=this.__Aa.pop();this._removeBindingsFrom(I);};},_configureItem:function(J){var K=this.getDelegate();if(K!=null&&K.configureItem!=null){K.configureItem(J);};},_configureGroupItem:function(L){var M=this.getDelegate();if(M!=null&&M.configureGroupItem!=null){M.configureGroupItem(L);};},_bindItem:function(N,P){var O=this.getDelegate();if(O!=null&&O.bindItem!=null){O.bindItem(this,N,P);}else {this.bindDefaultProperties(N,P);};},_bindGroupItem:function(Q,S){var R=this.getDelegate();if(R!=null&&R.bindGroupItem!=null){R.bindGroupItem(this,Q,S);}else {this.bindDefaultProperties(Q,S);};},_removeBindingsFrom:function(T){var U=this.__Ad(T);while(U.length>0){var V=U.pop();try{this._list.removeBinding(V);}catch(e){T.removeBinding(V);};};if(qx.lang.Array.contains(this.__Aa,T)){qx.lang.Array.remove(this.__Aa,T);};},__Ab:function(X,ba,Y){var W=b+X+k;if(Y==o){W=c+X+k;};if(ba!=null&&ba!=f){W+=n+ba;};return W;},__Ac:function(bc,bd){var bb=this.__Ad(bc);if(!qx.lang.Array.contains(bb,bd)){bb.push(bd);};if(!qx.lang.Array.contains(this.__Aa,bc)){this.__Aa.push(bc);};},__Ad:function(be){var bf=be.getUserData(m);if(bf==null){bf=[];be.setUserData(m,bf);};return bf;}},destruct:function(){this.__Aa=null;}});})();(function(){var a="cell.type",b="changeDelegate",c="qx.ui.list.provider.WidgetProvider",d="createItem",e="group-item",f="onPool",g="item",h="createGroupItem",i="created",j="group";qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(k){qx.core.Object.call(this);this._list=k;this._itemRenderer=this.createItemRenderer();this._groupRenderer=this.createGroupRenderer();this._itemRenderer.addListener(i,this._onItemCreated,this);this._groupRenderer.addListener(i,this._onGroupItemCreated,this);this._list.addListener(b,this._onChangeDelegate,this);},members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(n,l){var m=null;if(!this._list._isGroup(n)){m=this._itemRenderer.getCellWidget();m.setUserData(a,g);this._bindItem(m,this._list._lookup(n));if(this._list._manager.isItemSelected(n)){this._styleSelectabled(m);}else {this._styleUnselectabled(m);};}else {m=this._groupRenderer.getCellWidget();m.setUserData(a,j);this._bindGroupItem(m,this._list._lookupGroup(n));};return m;},poolCellWidget:function(o){this._removeBindingsFrom(o);if(o.getUserData(a)==g){this._itemRenderer.pool(o);}else if(o.getUserData(a)==j){this._groupRenderer.pool(o);};this._onPool(o);},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);},createItemRenderer:function(){var p=qx.util.Delegate.getMethod(this.getDelegate(),d);if(p==null){p=function(){return new qx.ui.form.ListItem();};};var q=new qx.ui.virtual.cell.WidgetCell();q.setDelegate({createWidget:p});return q;},createGroupRenderer:function(){var r=qx.util.Delegate.getMethod(this.getDelegate(),h);if(r==null){r=function(){var t=new qx.ui.basic.Label();t.setAppearance(e);return t;};};var s=new qx.ui.virtual.cell.WidgetCell();s.setDelegate({createWidget:r});return s;},styleSelectabled:function(v){var u=this.__Ae(v);this._styleSelectabled(u);},styleUnselectabled:function(x){var w=this.__Ae(x);this._styleUnselectabled(w);},isSelectable:function(z){if(this._list._isGroup(z)){return false;};var y=this._list._layer.getRenderedCellWidget(z,0);if(y!=null){return y.isEnabled();}else {return true;};},_styleSelectabled:function(A){this.__Af(A,{selected:1});},_styleUnselectabled:function(B){this.__Af(B,{});},_onPool:function(C){var D=qx.util.Delegate.getMethod(this.getDelegate(),f);if(D!=null){D(C);};},_onItemCreated:function(event){var E=event.getData();this._configureItem(E);},_onGroupItemCreated:function(event){var F=event.getData();this._configureGroupItem(F);},_onChangeDelegate:function(event){this._itemRenderer.dispose();this._itemRenderer=this.createItemRenderer();this._itemRenderer.addListener(i,this._onItemCreated,this);this._groupRenderer.dispose();this._groupRenderer=this.createGroupRenderer();this._groupRenderer.addListener(i,this._onGroupItemCreated,this);this.removeBindings();this._list.getPane().fullUpdate();},__Ae:function(G){return this._list._layer.getRenderedCellWidget(G,0);},__Af:function(I,H){if(I==null){return;};this._itemRenderer.updateStates(I,H);}},destruct:function(){this._itemRenderer.dispose();this._groupRenderer.dispose();this._itemRenderer=this._groupRenderer=null;}});})();
});