import{c as e,s as t,m as n,r as o,a as i,w as a,b as s,d as r}from"./garden.js";import{a7 as l,c,aw as h,V as p,Q as d,i as u,X as w,p as m,ax as y,ay as v,o as b,az as f,a0 as g,aA as M,aB as x,aC as P,at as X,aD as E,b as Y,t as Z,n as S,a as I,C as j,L as z}from"./three.js";var Q=function(e,t){void 0===t&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),l.call(this),this.visible=!1,this.domElement=t;var n=new A;this.add(n);var o=new k;this.add(o);var i=this;_("camera",e),_("object",void 0),_("enabled",!0),_("axis",null),_("mode","translate"),_("translationSnap",null),_("rotationSnap",null),_("scaleSnap",null),_("space","world"),_("size",1),_("dragging",!1),_("showX",!0),_("showY",!0),_("showZ",!0);var a={type:"change"},s={type:"mouseDown"},r={type:"mouseUp",mode:i.mode},c={type:"objectChange"},u=new h;function w(e,t,n){for(var o=t.intersectObject(e,!0),i=0;i<o.length;i++)if(o[i].object.visible||n)return o[i];return!1}var m=new p,y=new p,v=new d,b={X:new p(1,0,0),Y:new p(0,1,0),Z:new p(0,0,1)},f=new p,g=new p,M=new p,x=new p,P=new p,X=new p,E=0,Y=new p,Z=new d,S=new p,I=new p,j=new d,z=new d,Q=new p,T=new p,F=new d,O=new p,L=new p,q=new d,C=new d,W=new p,D=new p,H=new p,R=new d,N=new p;function _(e,t){var s=t;Object.defineProperty(i,e,{get:function(){return void 0!==s?s:t},set:function(t){s!==t&&(s=t,o[e]=t,n[e]=t,i.dispatchEvent({type:e+"-changed",value:t}),i.dispatchEvent(a))}}),i[e]=t,o[e]=t,n[e]=t}function J(e){if(i.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:e.button};var n=e.changedTouches?e.changedTouches[0]:e,o=t.getBoundingClientRect();return{x:(n.clientX-o.left)/o.width*2-1,y:-(n.clientY-o.top)/o.height*2+1,button:e.button}}function U(e){if(i.enabled)switch(e.pointerType){case"mouse":case"pen":i.pointerHover(J(e))}}function B(e){i.enabled&&(i.domElement.style.touchAction="none",i.domElement.ownerDocument.addEventListener("pointermove",G,!1),i.pointerHover(J(e)),i.pointerDown(J(e)))}function G(e){i.enabled&&i.pointerMove(J(e))}function V(e){i.enabled&&(i.domElement.style.touchAction="",i.domElement.ownerDocument.removeEventListener("pointermove",G,!1),i.pointerUp(J(e)))}_("worldPosition",L),_("worldPositionStart",T),_("worldQuaternion",q),_("worldQuaternionStart",F),_("cameraPosition",Y),_("cameraQuaternion",Z),_("pointStart",f),_("pointEnd",g),_("rotationAxis",x),_("rotationAngle",E),_("eye",D),t.addEventListener("pointerdown",B,!1),t.addEventListener("pointermove",U,!1),i.domElement.ownerDocument.addEventListener("pointerup",V,!1),this.dispose=function(){t.removeEventListener("pointerdown",B),t.removeEventListener("pointermove",U),i.domElement.ownerDocument.removeEventListener("pointermove",G),i.domElement.ownerDocument.removeEventListener("pointerup",V),this.traverse((function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))},this.attach=function(e){return this.object=e,this.visible=!0,this},this.detach=function(){return this.object=void 0,this.visible=!1,this.axis=null,this},this.updateMatrixWorld=function(){void 0!==this.object&&(this.object.updateMatrixWorld(),null===this.object.parent?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(I,j,Q),this.object.matrixWorld.decompose(L,q,W),z.copy(j).inverse(),C.copy(q).inverse()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(Y,Z,S),D.copy(Y).sub(L).normalize(),l.prototype.updateMatrixWorld.call(this)},this.pointerHover=function(e){if(void 0!==this.object&&!0!==this.dragging){u.setFromCamera(e,this.camera);var t=w(n.picker[this.mode],u);this.axis=t?t.object.name:null}},this.pointerDown=function(e){if(void 0!==this.object&&!0!==this.dragging&&0===e.button&&null!==this.axis){u.setFromCamera(e,this.camera);var t=w(o,u,!0);if(t){var n=this.space;if("scale"===this.mode?n="local":"E"!==this.axis&&"XYZE"!==this.axis&&"XYZ"!==this.axis||(n="world"),"local"===n&&"rotate"===this.mode){var i=this.rotationSnap;"X"===this.axis&&i&&(this.object.rotation.x=Math.round(this.object.rotation.x/i)*i),"Y"===this.axis&&i&&(this.object.rotation.y=Math.round(this.object.rotation.y/i)*i),"Z"===this.axis&&i&&(this.object.rotation.z=Math.round(this.object.rotation.z/i)*i)}this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),H.copy(this.object.position),R.copy(this.object.quaternion),N.copy(this.object.scale),this.object.matrixWorld.decompose(T,F,O),f.copy(t.point).sub(T)}this.dragging=!0,s.mode=this.mode,this.dispatchEvent(s)}},this.pointerMove=function(e){var t=this.axis,n=this.mode,i=this.object,s=this.space;if("scale"===n?s="local":"E"!==t&&"XYZE"!==t&&"XYZ"!==t||(s="world"),void 0!==i&&null!==t&&!1!==this.dragging&&-1===e.button){u.setFromCamera(e,this.camera);var r=w(o,u,!0);if(r){if(g.copy(r.point).sub(T),"translate"===n)M.copy(g).sub(f),"local"===s&&"XYZ"!==t&&M.applyQuaternion(C),-1===t.indexOf("X")&&(M.x=0),-1===t.indexOf("Y")&&(M.y=0),-1===t.indexOf("Z")&&(M.z=0),"local"===s&&"XYZ"!==t?M.applyQuaternion(R).divide(Q):M.applyQuaternion(z).divide(Q),i.position.copy(M).add(H),this.translationSnap&&("local"===s&&(i.position.applyQuaternion(v.copy(R).inverse()),-1!==t.search("X")&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(R)),"world"===s&&(i.parent&&i.position.add(m.setFromMatrixPosition(i.parent.matrixWorld)),-1!==t.search("X")&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(m.setFromMatrixPosition(i.parent.matrixWorld))));else if("scale"===n){if(-1!==t.search("XYZ")){var l=g.length()/f.length();g.dot(f)<0&&(l*=-1),y.set(l,l,l)}else m.copy(f),y.copy(g),m.applyQuaternion(C),y.applyQuaternion(C),y.divide(m),-1===t.search("X")&&(y.x=1),-1===t.search("Y")&&(y.y=1),-1===t.search("Z")&&(y.z=1);i.scale.copy(N).multiply(y),this.scaleSnap&&(-1!==t.search("X")&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Y")&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Z")&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if("rotate"===n){M.copy(g).sub(f);var h=20/L.distanceTo(m.setFromMatrixPosition(this.camera.matrixWorld));"E"===t?(x.copy(D),E=g.angleTo(f),P.copy(f).normalize(),X.copy(g).normalize(),E*=X.cross(P).dot(D)<0?1:-1):"XYZE"===t?(x.copy(M).cross(D).normalize(),E=M.dot(m.copy(x).cross(this.eye))*h):"X"!==t&&"Y"!==t&&"Z"!==t||(x.copy(b[t]),m.copy(b[t]),"local"===s&&m.applyQuaternion(q),E=M.dot(m.cross(D).normalize())*h),this.rotationSnap&&(E=Math.round(E/this.rotationSnap)*this.rotationSnap),this.rotationAngle=E,"local"===s&&"E"!==t&&"XYZE"!==t?(i.quaternion.copy(R),i.quaternion.multiply(v.setFromAxisAngle(x,E)).normalize()):(x.applyQuaternion(z),i.quaternion.copy(v.setFromAxisAngle(x,E)),i.quaternion.multiply(R).normalize())}this.dispatchEvent(a),this.dispatchEvent(c)}}},this.pointerUp=function(e){0===e.button&&(this.dragging&&null!==this.axis&&(r.mode=this.mode,this.dispatchEvent(r)),this.dragging=!1,this.axis=null)},this.getMode=function(){return i.mode},this.setMode=function(e){i.mode=e},this.setTranslationSnap=function(e){i.translationSnap=e},this.setRotationSnap=function(e){i.rotationSnap=e},this.setScaleSnap=function(e){i.scaleSnap=e},this.setSize=function(e){i.size=e},this.setSpace=function(e){i.space=e},this.update=function(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}};Q.prototype=Object.assign(Object.create(l.prototype),{constructor:Q,isTransformControls:!0});var A=function(){l.call(this),this.type="TransformControlsGizmo";var e=new u({depthTest:!1,depthWrite:!1,transparent:!0,side:w,fog:!1,toneMapped:!1}),t=new m({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,fog:!1,toneMapped:!1}),n=e.clone();n.opacity=.15;var o=e.clone();o.opacity=.33;var i=e.clone();i.color.set(16711680);var a=e.clone();a.color.set(65280);var s=e.clone();s.color.set(255);var r=e.clone();r.opacity=.25;var h=r.clone();h.color.set(16776960);var S=r.clone();S.color.set(65535);var I=r.clone();I.color.set(16711935),e.clone().color.set(16776960);var j=t.clone();j.color.set(16711680);var z=t.clone();z.color.set(65280);var Q=t.clone();Q.color.set(255);var A=t.clone();A.color.set(65535);var k=t.clone();k.color.set(16711935);var T=t.clone();T.color.set(16776960);var F=t.clone();F.color.set(7895160);var O=T.clone();O.opacity=.25;var L=new y(0,.05,.2,12,1,!1),q=new v(.125,.125,.125),C=new b;C.setAttribute("position",new f([0,0,0,1,0,0],3));var W,D=function(e,t){for(var n=new b,o=[],i=0;i<=64*t;++i)o.push(0,Math.cos(i/32*Math.PI)*e,Math.sin(i/32*Math.PI)*e);return n.setAttribute("position",new f(o,3)),n},H={X:[[new c(L,i),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new c(L,i),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new g(C,j)]],Y:[[new c(L,a),[0,1,0],null,null,"fwd"],[new c(L,a),[0,1,0],[Math.PI,0,0],null,"bwd"],[new g(C,z),null,[0,0,Math.PI/2]]],Z:[[new c(L,s),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new c(L,s),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new g(C,Q),null,[0,-Math.PI/2,0]]],XYZ:[[new c(new M(.1,0),r.clone()),[0,0,0],[0,0,0]]],XY:[[new c(new x(.295,.295),h.clone()),[.15,.15,0]],[new g(C,T),[.18,.3,0],null,[.125,1,1]],[new g(C,T),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new c(new x(.295,.295),S.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new g(C,A),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new g(C,A),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new c(new x(.295,.295),I.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new g(C,k),[.18,0,.3],null,[.125,1,1]],[new g(C,k),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},R={X:[[new c(new y(.2,0,1,4,1,!1),n),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new c(new y(.2,0,1,4,1,!1),n),[0,.6,0]]],Z:[[new c(new y(.2,0,1,4,1,!1),n),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new c(new M(.2,0),n)]],XY:[[new c(new x(.4,.4),n),[.2,.2,0]]],YZ:[[new c(new x(.4,.4),n),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new c(new x(.4,.4),n),[.2,0,.2],[-Math.PI/2,0,0]]]},N={START:[[new c(new M(.01,2),o),null,null,null,"helper"]],END:[[new c(new M(.01,2),o),null,null,null,"helper"]],DELTA:[[new g((W=new b,W.setAttribute("position",new f([0,0,0,1,1,1],3)),W),o),null,null,null,"helper"]],X:[[new g(C,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new g(C,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new g(C,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},_={X:[[new g(D(1,.5),j)],[new c(new M(.04,0),i),[0,0,.99],null,[1,3,1]]],Y:[[new g(D(1,.5),z),null,[0,0,-Math.PI/2]],[new c(new M(.04,0),a),[0,0,.99],null,[3,1,1]]],Z:[[new g(D(1,.5),Q),null,[0,Math.PI/2,0]],[new c(new M(.04,0),s),[.99,0,0],null,[1,3,1]]],E:[[new g(D(1.25,1),O),null,[0,Math.PI/2,0]],[new c(new y(.03,0,.15,4,1,!1),O),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new c(new y(.03,0,.15,4,1,!1),O),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new c(new y(.03,0,.15,4,1,!1),O),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new c(new y(.03,0,.15,4,1,!1),O),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new g(D(1,1),F),null,[0,Math.PI/2,0]]]},J={AXIS:[[new g(C,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},U={X:[[new c(new P(1,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new c(new P(1,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new c(new P(1,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new c(new P(1.25,.1,2,24),n)]],XYZE:[[new c(new X(.7,10,8),n)]]},B={X:[[new c(q,i),[.8,0,0],[0,0,-Math.PI/2]],[new g(C,j),null,null,[.8,1,1]]],Y:[[new c(q,a),[0,.8,0]],[new g(C,z),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new c(q,s),[0,0,.8],[Math.PI/2,0,0]],[new g(C,Q),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new c(q,h),[.85,.85,0],null,[2,2,.2]],[new g(C,T),[.855,.98,0],null,[.125,1,1]],[new g(C,T),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new c(q,S),[0,.85,.85],null,[.2,2,2]],[new g(C,A),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new g(C,A),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new c(q,I),[.85,0,.85],null,[2,.2,2]],[new g(C,k),[.855,0,.98],null,[.125,1,1]],[new g(C,k),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new c(new v(.125,.125,.125),r.clone()),[1.1,0,0]]],XYZY:[[new c(new v(.125,.125,.125),r.clone()),[0,1.1,0]]],XYZZ:[[new c(new v(.125,.125,.125),r.clone()),[0,0,1.1]]]},G={X:[[new c(new y(.2,0,.8,4,1,!1),n),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new c(new y(.2,0,.8,4,1,!1),n),[0,.5,0]]],Z:[[new c(new y(.2,0,.8,4,1,!1),n),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new c(q,n),[.85,.85,0],null,[3,3,.2]]],YZ:[[new c(q,n),[0,.85,.85],null,[.2,3,3]]],XZ:[[new c(q,n),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new c(new v(.2,.2,.2),n),[1.1,0,0]]],XYZY:[[new c(new v(.2,.2,.2),n),[0,1.1,0]]],XYZZ:[[new c(new v(.2,.2,.2),n),[0,0,1.1]]]},V={X:[[new g(C,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new g(C,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new g(C,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},$=function(e){var t=new l;for(var n in e)for(var o=e[n].length;o--;){var i=e[n][o][0].clone(),a=e[n][o][1],s=e[n][o][2],r=e[n][o][3],c=e[n][o][4];i.name=n,i.tag=c,a&&i.position.set(a[0],a[1],a[2]),s&&i.rotation.set(s[0],s[1],s[2]),r&&i.scale.set(r[0],r[1],r[2]),i.updateMatrix();var h=i.geometry.clone();h.applyMatrix4(i.matrix),i.geometry=h,i.renderOrder=1/0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),t.add(i)}return t},K=new p(0,0,0),ee=new E,te=new p(0,1,0),ne=new p(0,0,0),oe=new Y,ie=new d,ae=new d,se=new d,re=new p(1,0,0),le=new p(0,1,0),ce=new p(0,0,1);this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=$(H)),this.add(this.gizmo.rotate=$(_)),this.add(this.gizmo.scale=$(B)),this.add(this.picker.translate=$(R)),this.add(this.picker.rotate=$(U)),this.add(this.picker.scale=$(G)),this.add(this.helper.translate=$(N)),this.add(this.helper.rotate=$(J)),this.add(this.helper.scale=$(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1,this.updateMatrixWorld=function(){var e=this.space;"scale"===this.mode&&(e="local");var t="local"===e?this.worldQuaternion:se;this.gizmo.translate.visible="translate"===this.mode,this.gizmo.rotate.visible="rotate"===this.mode,this.gizmo.scale.visible="scale"===this.mode,this.helper.translate.visible="translate"===this.mode,this.helper.rotate.visible="rotate"===this.mode,this.helper.scale.visible="scale"===this.mode;var n=[];n=(n=(n=n.concat(this.picker[this.mode].children)).concat(this.gizmo[this.mode].children)).concat(this.helper[this.mode].children);for(var o=0;o<n.length;o++){var i,a=n[o];if(a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition),i=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(i*this.size/7),"helper"!==a.tag){if(a.quaternion.copy(t),"translate"===this.mode||"scale"===this.mode){var s=.99;"X"!==a.name&&"XYZX"!==a.name||Math.abs(te.copy(re).applyQuaternion(t).dot(this.eye))>s&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),"Y"!==a.name&&"XYZY"!==a.name||Math.abs(te.copy(le).applyQuaternion(t).dot(this.eye))>s&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),"Z"!==a.name&&"XYZZ"!==a.name||Math.abs(te.copy(ce).applyQuaternion(t).dot(this.eye))>s&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),"XY"===a.name&&Math.abs(te.copy(ce).applyQuaternion(t).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),"YZ"===a.name&&Math.abs(te.copy(re).applyQuaternion(t).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),"XZ"===a.name&&Math.abs(te.copy(le).applyQuaternion(t).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),-1!==a.name.search("X")&&(te.copy(re).applyQuaternion(t).dot(this.eye)<0?"fwd"===a.tag?a.visible=!1:a.scale.x*=-1:"bwd"===a.tag&&(a.visible=!1)),-1!==a.name.search("Y")&&(te.copy(le).applyQuaternion(t).dot(this.eye)<0?"fwd"===a.tag?a.visible=!1:a.scale.y*=-1:"bwd"===a.tag&&(a.visible=!1)),-1!==a.name.search("Z")&&(te.copy(ce).applyQuaternion(t).dot(this.eye)<0?"fwd"===a.tag?a.visible=!1:a.scale.z*=-1:"bwd"===a.tag&&(a.visible=!1))}else"rotate"===this.mode&&(ae.copy(t),te.copy(this.eye).applyQuaternion(ie.copy(t).inverse()),-1!==a.name.search("E")&&a.quaternion.setFromRotationMatrix(oe.lookAt(this.eye,ne,le)),"X"===a.name&&(ie.setFromAxisAngle(re,Math.atan2(-te.y,te.z)),ie.multiplyQuaternions(ae,ie),a.quaternion.copy(ie)),"Y"===a.name&&(ie.setFromAxisAngle(le,Math.atan2(te.x,te.z)),ie.multiplyQuaternions(ae,ie),a.quaternion.copy(ie)),"Z"===a.name&&(ie.setFromAxisAngle(ce,Math.atan2(te.y,te.x)),ie.multiplyQuaternions(ae,ie),a.quaternion.copy(ie)));a.visible=a.visible&&(-1===a.name.indexOf("X")||this.showX),a.visible=a.visible&&(-1===a.name.indexOf("Y")||this.showY),a.visible=a.visible&&(-1===a.name.indexOf("Z")||this.showZ),a.visible=a.visible&&(-1===a.name.indexOf("E")||this.showX&&this.showY&&this.showZ),a.material._opacity=a.material._opacity||a.material.opacity,a.material._color=a.material._color||a.material.color.clone(),a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled?this.axis&&(a.name===this.axis||this.axis.split("").some((function(e){return a.name===e}))?(a.material.opacity=1,a.material.color.lerp(new Z(1,1,1),.5)):(a.material.opacity*=.25,a.material.color.lerp(new Z(1,1,1),.5))):(a.material.opacity*=.5,a.material.color.lerp(new Z(1,1,1),.5))}else a.visible=!1,"AXIS"===a.name?(a.position.copy(this.worldPositionStart),a.visible=!!this.axis,"X"===this.axis&&(ie.setFromEuler(ee.set(0,0,0)),a.quaternion.copy(t).multiply(ie),Math.abs(te.copy(re).applyQuaternion(t).dot(this.eye))>.9&&(a.visible=!1)),"Y"===this.axis&&(ie.setFromEuler(ee.set(0,0,Math.PI/2)),a.quaternion.copy(t).multiply(ie),Math.abs(te.copy(le).applyQuaternion(t).dot(this.eye))>.9&&(a.visible=!1)),"Z"===this.axis&&(ie.setFromEuler(ee.set(0,Math.PI/2,0)),a.quaternion.copy(t).multiply(ie),Math.abs(te.copy(ce).applyQuaternion(t).dot(this.eye))>.9&&(a.visible=!1)),"XYZE"===this.axis&&(ie.setFromEuler(ee.set(0,Math.PI/2,0)),te.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(oe.lookAt(ne,te,le)),a.quaternion.multiply(ie),a.visible=this.dragging),"E"===this.axis&&(a.visible=!1)):"START"===a.name?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):"END"===a.name?(a.position.copy(this.worldPosition),a.visible=this.dragging):"DELTA"===a.name?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),K.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),K.applyQuaternion(this.worldQuaternionStart.clone().inverse()),a.scale.copy(K),a.visible=this.dragging):(a.quaternion.copy(t),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=-1!==this.axis.search(a.name)))}l.prototype.updateMatrixWorld.call(this)}};A.prototype=Object.assign(Object.create(l.prototype),{constructor:A,isTransformControlsGizmo:!0});var k=function(){c.call(this,new x(1e5,1e5,2,2),new u({visible:!1,wireframe:!0,side:w,transparent:!0,opacity:.1,toneMapped:!1})),this.type="TransformControlsPlane";var e=new p(1,0,0),t=new p(0,1,0),n=new p(0,0,1),o=new p,i=new p,a=new p,s=new Y,r=new d;this.updateMatrixWorld=function(){var c=this.space;switch(this.position.copy(this.worldPosition),"scale"===this.mode&&(c="local"),e.set(1,0,0).applyQuaternion("local"===c?this.worldQuaternion:r),t.set(0,1,0).applyQuaternion("local"===c?this.worldQuaternion:r),n.set(0,0,1).applyQuaternion("local"===c?this.worldQuaternion:r),a.copy(t),this.mode){case"translate":case"scale":switch(this.axis){case"X":a.copy(this.eye).cross(e),i.copy(e).cross(a);break;case"Y":a.copy(this.eye).cross(t),i.copy(t).cross(a);break;case"Z":a.copy(this.eye).cross(n),i.copy(n).cross(a);break;case"XY":i.copy(n);break;case"YZ":i.copy(e);break;case"XZ":a.copy(n),i.copy(t);break;case"XYZ":case"E":i.set(0,0,0)}break;case"rotate":default:i.set(0,0,0)}0===i.length()?this.quaternion.copy(this.cameraQuaternion):(s.lookAt(o.set(0,0,0),i,a),this.quaternion.setFromRotationMatrix(s)),l.prototype.updateMatrixWorld.call(this)}};k.prototype=Object.assign(Object.create(c.prototype),{constructor:k,isTransformControlsPlane:!0});let T="none";const F=[],O=[],L=[];let q,C,W=!1,D=[];const H=[],R=new S(.1,.1,.1),N=new u(10092441),_={item1:F,item2:O,curve:H};const J=new h,U=new I,B=function(){const e=new Q(i,s.domElement);return e.addEventListener("dragging-changed",(function(t){e.object.curve&&e.object.curve.redraw(),r.enabled=!t.value})),e}();function G(e,t){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}function V(e){const n=[];for(const o of e){const e=new c(R,N);H.push(e),n.push(e),t.add(e),e.position.copy(o)}const o=new j(n.map((e=>e.position)));o.curveType="centripetal",o.closed=!0,L.push(o);const i=o.getPoints(50),a=new z((new b).setFromPoints(i),new m({color:65280}));o.redraw=function(){const e=o.getPoints(50);a.geometry.setFromPoints(e)},o.line=a;for(const e of n)e.curve=o,e.remove=function(){o.points.length>1?G(o.points,e.position):(t.remove(o.line),G(L,o))};return t.add(a),{curve:o,handles:n}}function $(e){window.overlay.querySelector('[value="curve"]').click();const n=new c(R,N);H.push(n),t.add(n);const o=q,i=C;e?n.position.copy(e):(n.position.copy(i.position),n.position.x+=1.4*(Math.random()-.5),n.position.z+=1.4*(Math.random()-.5)),n.curve=o,n.remove=function(){o.points.length>1?G(o.points,B.position):(t.remove(o.line),G(L,o))},function(e,t,n){const o=e.indexOf(t);e.splice(o,0,n)}(o.points,i.position,n.position),o.redraw(),B.attach(n),t.add(B),C=n}!function(){for(const t of e)V(t)}(),window.overlay.insertAdjacentHTML("afterbegin",'\n\t<label><input type="radio" name="mode" value="none" /> None</label><br />\n\t<label><input type="radio" name="mode" value="item1" /> Place Lily Pad 1</label><br />\n\t<label><input type="radio" name="mode" value="item2" /> Place Lily Pad 2</label><br />\n\t<label><input type="radio" name="mode" value="curve" /> Curves</label>\n\t<section>\n\t\t<h2>Curve Actions</h2>\n\t\t<button id="curvecreate">Create New Curve</button>\n\t\t<button id="addhandle">Add Handle</button>\n\t\t<button id="curvedeletehandle">Delete Handle</button>\n\t\t<button id="updatefish">Update Fish</button>\n\t</section>\n\t<button id="consolelog">Console Log Data</button>\n'),window.addhandle.addEventListener("click",(()=>{$()})),window.consolelog.addEventListener("click",(function(){console.log(`\n\t\tconst curveData = JSON.parse("${JSON.stringify(L.map((e=>e.points.map((e=>[e.x,e.y,e.z].map((e=>+e.toFixed(3))))))))}");\n\t`),console.log("const lilypad1Positions = ",JSON.stringify(F.map((e=>e.position)).map((e=>[+e.x.toFixed(3),+e.y.toFixed(3),+e.z.toFixed(3)])))),console.log("const lilypad2Positions = ",JSON.stringify(O.map((e=>e.position)).map((e=>[+e.x.toFixed(3),+e.y.toFixed(3),+e.z.toFixed(3)]))))})),window.curvedeletehandle.addEventListener("click",(function(){window.overlay.querySelector('[value="curve"]').click(),C.remove(),q.redraw(),C.parent.remove(C),G(H,C),t.remove(B)})),window.curvecreate.addEventListener("click",(async function(){window.overlay.querySelector('[value="curve"]').click();const e=[await new Promise((e=>D.push(e)))],{curve:n,handles:o}=V(e);B.attach(o[0]),t.add(B),q=n,C=o[0]})),window.overlay.addEventListener("change",(function(e){"mode"===e.target.name&&(T=e.target.value)})),window.overlay.querySelector('[value="item1"]').click(),n.then((function({trees:e}){setTimeout((()=>t.remove(e)),2e3)})),o.add((async function(){if("none"===T||!W)return;const e=W;if(W=!1,J.setFromCamera(U,i),"select"===e){const e=_[T],n=J.intersectObjects(e);if(!n.length)return;const o=n[0].object;B.attach(o),t.add(B),C=!1,o.curve&&(q=o.curve,C=o)}if("curve"===T&&"add"===e){const e=J.intersectObjects([a]);if(!e.length)return;e[0].point.y=0,D.length?D.shift()(e[0].point):$(e[0].point)}if("item1"===T&&"add"===e){const e=J.intersectObjects([a]);if(!e.length)return;const{lilyPad1:o}=await n,i=o.children[4].clone();i.position.x=e[0].point.x,i.position.z=e[0].point.z,F.push(i),a.add(i),B.attach(i),t.add(B)}if("item2"===T&&"add"===e){const e=J.intersectObjects([a]);if(!e.length)return;const{lilyPad2:o}=await n,i=o.children[2].clone();i.position.x=e[0].point.x,i.position.z=e[0].point.z,O.push(i),a.add(i),B.attach(i),t.add(B)}})),s.domElement.addEventListener("click",(function(e){W="select",U.x=e.clientX/window.innerWidth*2-1,U.y=-e.clientY/window.innerHeight*2+1}),!1),s.domElement.addEventListener("dblclick",(function(e){W="add",U.x=e.clientX/window.innerWidth*2-1,U.y=-e.clientY/window.innerHeight*2+1}),!1);
//# sourceMappingURL=editor.js.map
