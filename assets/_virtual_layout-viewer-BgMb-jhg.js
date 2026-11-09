const e=`var ChoupoLayoutViewer=function(Br){"use strict";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kr="170",wi={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xh=0,rl=1,$h=2,ol=1,al=2,Dn=3,Gn=0,Gt=1,rn=2,Rt=0,Ai=1,Hr=2,ll=3,cl=4,hl=5,fn=100,Yh=101,qh=102,jh=103,Kh=104,as=200,Zh=201,Qh=202,Jh=203,Gr=204,Vr=205,Wr=206,eu=207,Xr=208,tu=209,nu=210,iu=211,su=212,ru=213,ou=214,$r=0,Yr=1,qr=2,Ri=3,jr=4,Kr=5,Zr=6,Qr=7,Jr=0,au=1,lu=2,Vn=0,ul=1,dl=2,fl=3,eo=4,cu=5,pl=6,ml=7,gl=300,Ci=301,Pi=302,to=303,no=304,Cs=306,Wn=1e3,ri=1001,io=1002,Vt=1003,hu=1004,Ps=1005,Mn=1006,so=1007,oi=1008,yn=1009,_l=1010,xl=1011,ls=1012,ro=1013,ai=1014,Sn=1015,Wt=1016,oo=1017,ao=1018,li=1020,vl=35902,Ml=1021,yl=1022,on=1023,Sl=1024,El=1025,Di=1026,ci=1027,lo=1028,co=1029,bl=1030,ho=1031,uo=1033,Ds=33776,Ls=33777,Is=33778,Us=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,xo=37492,vo=37496,Mo=37808,yo=37809,So=37810,Eo=37811,bo=37812,wo=37813,To=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Do=37819,Lo=37820,Io=37821,Ns=36492,Uo=36494,No=36495,wl=36283,Oo=36284,Fo=36285,zo=36286,uu=3200,Tl=3201,Os=0,du=1,Xn="",Qt="srgb",Li="srgb-linear",Fs="linear",mt="srgb",Ii=7680,Al=519,fu=512,pu=513,mu=514,Rl=515,gu=516,_u=517,xu=518,vu=519,Cl=35044,Pl="300 es",Ln=2e3,zs=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,Bo=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Mu(n,e){return(n%e+e)%e}function ko(n,e,t){return(1-t)*n+t*e}function hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yu={DEG2RAD:Bs};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],u=s[6],y=s[1],v=s[4],S=s[7],O=s[2],R=s[5],T=s[8];return r[0]=o*_+a*y+l*O,r[3]=o*m+a*v+l*R,r[6]=o*u+a*S+l*T,r[1]=c*_+h*y+d*O,r[4]=c*m+h*v+d*R,r[7]=c*u+h*S+d*T,r[2]=f*_+p*y+g*O,r[5]=f*m+p*v+g*R,r[8]=f*u+p*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Je;function Dl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Su(){const n=ks("canvas");return n.style.display="block",n}const Ll={};function us(n){n in Ll||(Ll[n]=!0,console.warn(n))}function Eu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function bu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rt={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=Ui(n.r),n.g=Ui(n.g),n.b=Ui(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?Fs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ui(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Il=[.64,.33,.3,.6,.15,.06],Ul=[.2126,.7152,.0722],Nl=[.3127,.329],Ol=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Li]:{primaries:Il,whitePoint:Nl,transfer:Fs,toXYZ:Ol,fromXYZ:Fl,luminanceCoefficients:Ul,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:Il,whitePoint:Nl,transfer:mt,toXYZ:Ol,fromXYZ:Fl,luminanceCoefficients:Ul,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let Ni;class Tu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=ks("canvas")),Ni.width=e.width,Ni.height=e.height;const i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Au=0;class zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ru=0;class Bt extends hi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=ri,s=ri,r=Mn,o=oi,a=on,l=yn,c=Bt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=cs(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=gl,Bt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,O=(u+1)/2,R=(h+f)/4,T=(d+_)/4,N=(g+m)/4;return v>S&&v>O?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=T/i):S>O?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=N/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=T/r,s=N/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ut extends Cu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bl extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const O=Math.sqrt(v),R=Math.atan2(O,u*y);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const S=a*y;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,d=d*m+_*S,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new k,kl=new $n;class ui{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Gs.subVectors(this.max,ds),Oi.subVectors(e.a,ds),Fi.subVectors(e.b,ds),zi.subVectors(e.c,ds),Yn.subVectors(Fi,Oi),qn.subVectors(zi,Fi),di.subVectors(Oi,zi);let t=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-di.z,di.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!Wo(t,Oi,Fi,zi,Gs)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,Oi,Fi,zi,Gs))?!1:(Vs.crossVectors(Yn,qn),t=[Vs.x,Vs.y,Vs.z],Wo(t,Oi,Fi,zi,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,Hs=new ui,Oi=new k,Fi=new k,zi=new k,Yn=new k,qn=new k,di=new k,ds=new k,Gs=new k,Vs=new k,fi=new k;function Wo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fi.fromArray(n,r);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Du=new ui,fs=new k,Xo=new k;class Bi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Du.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Xo)),this.expandByPoint(fs.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new k,$o=new k,Ws=new k,jn=new k,Yo=new k,Xs=new k,qo=new k;class $s{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$o.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),jn.copy(this.origin).sub($o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=jn.dot(this.direction),l=-jn.dot(Ws),c=jn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($o).addScaledVector(Ws,f),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){Yo.subVectors(t,e),Xs.subVectors(i,e),qo.crossVectors(Yo,Xs);let o=this.direction.dot(qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Xs.crossVectors(jn,Xs));if(l<0)return null;const c=a*this.direction.dot(Yo.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(qo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,s,r,o,a,l,c,h,d,f,p,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Iu)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Kn.crossVectors(i,Jt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Kn.crossVectors(i,Jt)),Kn.normalize(),Ys.crossVectors(Jt,Kn),s[0]=Kn.x,s[4]=Ys.x,s[8]=Jt.x,s[1]=Kn.y,s[5]=Ys.y,s[9]=Jt.y,s[2]=Kn.z,s[6]=Ys.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],y=i[3],v=i[7],S=i[11],O=i[15],R=s[0],T=s[4],N=s[8],E=s[12],M=s[1],I=s[5],z=s[9],V=s[13],j=s[2],oe=s[6],Z=s[10],fe=s[14],Q=s[3],ue=s[7],U=s[11],te=s[15];return r[0]=o*R+a*M+l*j+c*Q,r[4]=o*T+a*I+l*oe+c*ue,r[8]=o*N+a*z+l*Z+c*U,r[12]=o*E+a*V+l*fe+c*te,r[1]=h*R+d*M+f*j+p*Q,r[5]=h*T+d*I+f*oe+p*ue,r[9]=h*N+d*z+f*Z+p*U,r[13]=h*E+d*V+f*fe+p*te,r[2]=g*R+_*M+m*j+u*Q,r[6]=g*T+_*I+m*oe+u*ue,r[10]=g*N+_*z+m*Z+u*U,r[14]=g*E+_*V+m*fe+u*te,r[3]=y*R+v*M+S*j+O*Q,r[7]=y*T+v*I+S*oe+O*ue,r[11]=y*N+v*z+S*Z+O*U,r[15]=y*E+v*V+S*fe+O*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],y=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,v=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,S=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,O=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,R=t*y+i*v+s*S+r*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=y*T,e[1]=(_*f*r-d*m*r-_*s*p+i*m*p+d*s*u-i*f*u)*T,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*u+i*l*u)*T,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*T,e[4]=v*T,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*u+t*f*u)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*u-t*l*u)*T,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*T,e[8]=S*T,e[9]=(g*d*r-h*_*r-g*i*p+t*_*p+h*i*u-t*d*u)*T,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*u+t*a*u)*T,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*T,e[12]=O*T,e[13]=(h*_*s-g*d*s+g*i*f-t*_*f-h*i*m+t*d*m)*T,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*T,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,y=l*c,v=l*h,S=l*d,O=i.x,R=i.y,T=i.z;return s[0]=(1-(_+u))*O,s[1]=(p+S)*O,s[2]=(g-v)*O,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(f+u))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(m-y)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,h=1/o,d=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ln){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,g;if(a===Ln)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ln){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*c,p=(i+s)*h;let g,_;if(a===Ln)g=(o+r)*d,_=-2*d;else if(a===zs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new k,mn=new st,Lu=new k(0,0,0),Iu=new k(1,1,1),Kn=new k,Ys=new k,Jt=new k,Hl=new st,Gl=new $n;class gn{constructor(e=0,t=0,i=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uu=0;const Vl=new k,Hi=new $n,On=new st,qs=new k,ps=new k,Nu=new k,Ou=new $n,Wl=new k(1,0,0),Xl=new k(0,1,0),$l=new k(0,0,1),Yl={type:"added"},Fu={type:"removed"},Gi={type:"childadded",child:null},Ko={type:"childremoved",child:null};class wt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new k,t=new gn,i=new $n,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Je}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qs.copy(e):qs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ps,qs,this.up):On.lookAt(qs,ps,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(On),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}wt.DEFAULT_UP=new k(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new k,Fn=new k,Zo=new k,zn=new k,Vi=new k,Wi=new k,ql=new k,Qo=new k,Jo=new k,ea=new k,ta=new _t,na=new _t,ia=new _t;class xn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),Fn.subVectors(i,t),Zo.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Fn),l=_n.dot(Zo),c=Fn.dot(Fn),h=Fn.dot(Zo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Fn.subVectors(e,t),_n.cross(Fn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,i),Wi.subVectors(r,i),Qo.subVectors(e,i);const l=Vi.dot(Qo),c=Wi.dot(Qo);if(l<=0&&c<=0)return t.copy(i);Jo.subVectors(e,s);const h=Vi.dot(Jo),d=Wi.dot(Jo);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Vi,o);ea.subVectors(e,r);const p=Vi.dot(ea),g=Wi.dot(ea);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Wi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ql.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(ql,a);const u=1/(m+_+f);return o=_*u,a=f*u,t.copy(i).addScaledVector(Vi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},js={h:0,s:0,l:0};function sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Mu(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=sa(o,r,e+.3333333333333333),this.g=sa(o,r,e),this.b=sa(o,r,e-.3333333333333333)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\\w+)\\(([^\\)]*)\\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\\#([A-Fa-f\\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=jl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return rt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Xt(kt.r*255,0,255))*65536+Math.round(Xt(kt.g*255,0,255))*256+Math.round(Xt(kt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Qt){rt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==Qt?\`color(\${e} \${t.toFixed(3)} \${i.toFixed(3)} \${s.toFixed(3)})\`:\`rgb(\${Math.round(t*255)},\${Math.round(i*255)},\${Math.round(s*255)})\`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(js);const i=ko(Zn.h,js.h,t),s=ko(Zn.s,js.s,t),r=ko(Zn.l,js.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new je;je.NAMES=jl;let zu=0;class Qn extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=cs(),this.name="",this.blending=Ai,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gr,this.blendDst=Vr,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(\`THREE.Material: parameter '\${t}' has value of undefined.\`);continue}const s=this[t];if(s===void 0){console.warn(\`THREE.Material: '\${t}' is not a property of THREE.\${this.type}.\`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gr&&(i.blendSrc=this.blendSrc),this.blendDst!==Vr&&(i.blendDst=this.blendDst),this.blendEquation!==fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ms extends Qn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new k,Ks=new Ie;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}}class Kl extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zl extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bu=0;const ln=new st,ra=new wt,Xi=new k,en=new ui,gs=new ui,Nt=new k;class Ht extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Zl:Kl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(en.min,gs.min),en.expandByPoint(Nt),Nt.addVectors(en.max,gs.max),en.expandByPoint(Nt)):(en.expandByPoint(gs.min),en.expandByPoint(gs.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),Nt.add(Xi)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new k,l[N]=new k;const c=new k,h=new k,d=new k,f=new Ie,p=new Ie,g=new Ie,_=new k,m=new k;function u(N,E,M){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[N].add(_),a[E].add(_),a[M].add(_),l[N].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,E=y.length;N<E;++N){const M=y[N],I=M.start,z=M.count;for(let V=I,j=I+z;V<j;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new k,S=new k,O=new k,R=new k;function T(N){O.fromBufferAttribute(s,N),R.copy(O);const E=a[N];v.copy(E),v.sub(O.multiplyScalar(O.dot(E))).normalize(),S.crossVectors(R,E);const I=S.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,I)}for(let N=0,E=y.length;N<E;++N){const M=y[N],I=M.start,z=M.count;for(let V=I,j=I+z;V<j;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new an(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new st,pi=new $s,Zs=new Bi,Jl=new k,Qs=new k,Js=new k,er=new k,oa=new k,tr=new k,ec=new k,nr=new k;class vt extends wt{constructor(e=new Ht,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(oa.fromBufferAttribute(d,e),o?tr.addScaledVector(oa,h):tr.addScaledVector(oa.sub(t),h))}t.add(tr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Zs.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Zs,Jl)===null||pi.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Ql.copy(r).invert(),pi.copy(e.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,O=v;S<O;S+=3){const R=a.getX(S),T=a.getX(S+1),N=a.getX(S+2);s=ir(this,u,e,i,c,h,d,R,T,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);s=ir(this,o,e,i,c,h,d,y,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,O=v;S<O;S+=3){const R=S,T=S+1,N=S+2;s=ir(this,u,e,i,c,h,d,R,T,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const y=m,v=m+1,S=m+2;s=ir(this,o,e,i,c,h,d,y,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ku(n,e,t,i,s,r,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gn,a),l===null)return null;nr.copy(a),nr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:n}}function ir(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Qs),n.getVertexPosition(l,Js),n.getVertexPosition(c,er);const h=ku(n,e,t,i,Qs,Js,er,ec);if(h){const d=new k;xn.getBarycoord(ec,Qs,Js,er,d),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,d,new Ie)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,d,new Ie)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};xn.getNormal(Qs,Js,er,f.normal),h.face=f,h.barycoord=d}return h}class mi extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function g(_,m,u,y,v,S,O,R,T,N,E){const M=S/T,I=O/N,z=S/2,V=O/2,j=R/2,oe=T+1,Z=N+1;let fe=0,Q=0;const ue=new k;for(let U=0;U<Z;U++){const te=U*I-V;for(let xe=0;xe<oe;xe++){const Le=xe*M-z;ue[_]=Le*y,ue[m]=te*v,ue[u]=j,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[u]=R>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(xe/T),d.push(1-U/N),fe+=1}}for(let U=0;U<N;U++)for(let te=0;te<T;te++){const xe=f+te+oe*U,Le=f+te+oe*(U+1),ne=f+(te+1)+oe*(U+1),de=f+(te+1)+oe*U;l.push(xe,Le,de),l.push(Le,ne,de),Q+=6}a.addGroup(p,Q,E),p+=Q,f+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const s in i)e[s]=i[s]}return e}function Hu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Bn={clone:$i,merge:$t};var Gu=\`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}\`,Vu=\`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}\`;class bt extends Qn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new k,ic=new Ie,sc=new Ie;class tn extends nc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,ic,sc),t.subVectors(sc,ic)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,qi=1;class Wu extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Yi,qi,e,t);s.layers=this.layers,this.add(s);const r=new tn(Yi,qi,e,t);r.layers=this.layers,this.add(r);const o=new tn(Yi,qi,e,t);o.layers=this.layers,this.add(o);const a=new tn(Yi,qi,e,t);a.layers=this.layers,this.add(a);const l=new tn(Yi,qi,e,t);l.layers=this.layers,this.add(l);const c=new tn(Yi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rc extends Bt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xu extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:\`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			\`,fragmentShader:\`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			\`},s=new mi(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Rt});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=Mn),new Wu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const aa=new k,$u=new k,Yu=new Je;class ei{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=aa.subVectors(i,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yu.getNormalMatrix(e),s=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Bi,sr=new k;class la{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],y=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-p,S-u).normalize(),i[1].setComponents(l+r,f+c,m+p,S+u).normalize(),i[2].setComponents(l+o,f+h,m+g,S+y).normalize(),i[3].setComponents(l-o,f-h,m-g,S-y).normalize(),i[4].setComponents(l-a,f-d,m-_,S-v).normalize(),t===Ln)i[5].setComponents(l+a,f+d,m+_,S+v).normalize();else if(t===zs)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(sr.x=s.normal.x>0?e.max.x:e.min.x,sr.y=s.normal.y>0?e.max.y:e.min.y,sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qu(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class _s extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const y=u*f-o;for(let v=0;v<c;v++){const S=v*d-r;g.push(S,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const v=y+c*u,S=y+c*(u+1),O=y+1+c*(u+1),R=y+1+c*u;p.push(v,S,R),p.push(S,O,R)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var ju=\`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif\`,Ku=\`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif\`,Zu=\`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif\`,Qu=\`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif\`,Ju=\`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif\`,ed=\`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif\`,td=\`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif\`,nd=\`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif\`,id=\`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif\`,sd=\`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif\`,rd=\`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif\`,od=\`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif\`,ad=\`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated\`,ld=\`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif\`,cd=\`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif\`,hd=\`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif\`,ud=\`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif\`,dd=\`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif\`,fd=\`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif\`,pd=\`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif\`,md=\`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif\`,gd=\`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif\`,_d=\`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif\`,xd=\`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated\`,vd=\`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif\`,Md=\`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif\`,yd=\`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif\`,Sd=\`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif\`,Ed=\`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif\`,bd=\`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif\`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=\`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}\`,Ad=\`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif\`,Rd=\`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif\`,Cd=\`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif\`,Pd=\`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif\`,Dd=\`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif\`,Ld=\`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif\`,Id=\`#ifdef USE_FOG
	varying float vFogDepth;
#endif\`,Ud=\`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif\`,Nd=\`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif\`,Od=\`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}\`,Fd=\`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif\`,zd=\`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;\`,Bd=\`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert\`,kd=\`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif\`,Hd=\`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif\`,Gd=\`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;\`,Vd=\`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\`,Wd=\`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;\`,Xd=\`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\`,$d=\`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif\`,Yd=\`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}\`,qd=\`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif\`,jd=\`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif\`,Kd=\`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif\`,Zd=\`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif\`,Qd=\`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif\`,Jd=\`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif\`,ef=\`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif\`,tf=\`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif\`,nf=\`#ifdef USE_MAP
	uniform sampler2D map;
#endif\`,sf=\`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif\`,rf=\`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif\`,of=\`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif\`,af=\`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif\`,lf=\`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif\`,cf=\`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif\`,hf=\`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif\`,uf=\`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif\`,df=\`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif\`,ff=\`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;\`,pf=\`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif\`,mf=\`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif\`,gf=\`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif\`,_f=\`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif\`,xf=\`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif\`,vf=\`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif\`,Mf=\`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif\`,yf=\`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif\`,Sf=\`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif\`,Ef=\`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );\`,bf=\`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}\`,wf=\`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif\`,Tf=\`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;\`,Af=\`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif\`,Rf=\`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif\`,Cf=\`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif\`,Pf=\`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif\`,Df=\`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif\`,Lf=\`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif\`,If=\`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif\`,Uf=\`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}\`,Nf=\`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif\`,Of=\`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif\`,Ff=\`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif\`,zf=\`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif\`,Bf=\`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif\`,kf=\`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif\`,Hf=\`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif\`,Gf=\`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }\`,Vf=\`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif\`,Wf=\`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif\`,Xf=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif\`,$f=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif\`,Yf=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif\`,qf=\`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif\`;const tt={alphahash_fragment:ju,alphahash_pars_fragment:Ku,alphamap_fragment:Zu,alphamap_pars_fragment:Qu,alphatest_fragment:Ju,alphatest_pars_fragment:ed,aomap_fragment:td,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:xd,cube_uv_reflection_fragment:vd,defaultnormal_vertex:Md,displacementmap_pars_vertex:yd,displacementmap_vertex:Sd,emissivemap_fragment:Ed,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Dd,fog_vertex:Ld,fog_pars_vertex:Id,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Fd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Bd,lights_pars_begin:kd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:$d,lights_physical_pars_fragment:Yd,lights_fragment_begin:qd,lights_fragment_maps:jd,lights_fragment_end:Kd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:ef,map_fragment:tf,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:of,metalnessmap_pars_fragment:af,morphinstance_vertex:lf,morphcolor_vertex:cf,morphnormal_vertex:hf,morphtarget_pars_vertex:uf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:_f,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Sf,opaque_fragment:Ef,packing:bf,premultiplied_alpha_fragment:wf,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:Rf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Lf,shadowmap_vertex:If,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Of,skinning_vertex:Ff,skinnormal_vertex:zf,specularmap_fragment:Bf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:Vf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:$f,uv_vertex:Yf,worldpos_vertex:qf,background_vert:\`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}\`,background_frag:\`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,backgroundCube_vert:\`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}\`,backgroundCube_frag:\`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,cube_vert:\`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}\`,cube_frag:\`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,depth_vert:\`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}\`,depth_frag:\`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}\`,distanceRGBA_vert:\`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}\`,distanceRGBA_frag:\`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}\`,equirect_vert:\`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}\`,equirect_frag:\`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,linedashed_vert:\`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}\`,linedashed_frag:\`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}\`,meshbasic_vert:\`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}\`,meshbasic_frag:\`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,meshlambert_vert:\`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,meshlambert_frag:\`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,meshmatcap_vert:\`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}\`,meshmatcap_frag:\`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,meshnormal_vert:\`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}\`,meshnormal_frag:\`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}\`,meshphong_vert:\`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,meshphong_frag:\`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,meshphysical_vert:\`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}\`,meshphysical_frag:\`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,meshtoon_vert:\`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,meshtoon_frag:\`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,points_vert:\`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}\`,points_frag:\`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}\`,shadow_vert:\`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,shadow_frag:\`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}\`,sprite_vert:\`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}\`,sprite_frag:\`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}\`},Te={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},En={basic:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new je(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:$t([Te.common,Te.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:$t([Te.lights,Te.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};En.physical={uniforms:$t([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const rr={r:0,b:0,g:0},_i=new gn,jf=new st;function Kf(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const S=g(y);S===null?u(a,l):S&&S.isColor&&(u(S,1),v=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Cs)?(h===void 0&&(h=new vt(new mi(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:$i(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(_i)),h.material.toneMapped=rt.getTransfer(S.colorSpace)!==mt,(d!==S||f!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new vt(new _s(2,2),new bt({name:"BackgroundMaterial",uniforms:$i(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(rr,tc(n)),i.buffers.color.setClear(rr.r,rr.g,rr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:_,addToRenderList:m}}function Zf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,I,z,V,j){let oe=!1;const Z=d(V,z,I);r!==Z&&(r=Z,c(r.object)),oe=p(M,V,z,j),oe&&g(M,V,z,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,S(M,I,z,V),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,I,z){const V=z.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let oe=j[I.id];oe===void 0&&(oe={},j[I.id]=oe);let Z=oe[V];return Z===void 0&&(Z=f(l()),oe[V]=Z),Z}function f(M){const I=[],z=[],V=[];for(let j=0;j<t;j++)I[j]=0,z[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,I,z,V){const j=r.attributes,oe=I.attributes;let Z=0;const fe=z.getAttributes();for(const Q in fe)if(fe[Q].location>=0){const U=j[Q];let te=oe[Q];if(te===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),U===void 0||U.attribute!==te||te&&U.data!==te.data)return!0;Z++}return r.attributesNum!==Z||r.index!==V}function g(M,I,z,V){const j={},oe=I.attributes;let Z=0;const fe=z.getAttributes();for(const Q in fe)if(fe[Q].location>=0){let U=oe[Q];U===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(U=M.instanceColor));const te={};te.attribute=U,U&&U.data&&(te.data=U.data),j[Q]=te,Z++}r.attributes=j,r.attributesNum=Z,r.index=V}function _(){const M=r.newAttributes;for(let I=0,z=M.length;I<z;I++)M[I]=0}function m(M){u(M,0)}function u(M,I){const z=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;z[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),j[M]!==I&&(n.vertexAttribDivisor(M,I),j[M]=I)}function y(){const M=r.newAttributes,I=r.enabledAttributes;for(let z=0,V=I.length;z<V;z++)I[z]!==M[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function v(M,I,z,V,j,oe,Z){Z===!0?n.vertexAttribIPointer(M,I,z,j,oe):n.vertexAttribPointer(M,I,z,V,j,oe)}function S(M,I,z,V){_();const j=V.attributes,oe=z.getAttributes(),Z=I.defaultAttributeValues;for(const fe in oe){const Q=oe[fe];if(Q.location>=0){let ue=j[fe];if(ue===void 0&&(fe==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),fe==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const U=ue.normalized,te=ue.itemSize,xe=e.get(ue);if(xe===void 0)continue;const Le=xe.buffer,ne=xe.type,de=xe.bytesPerElement,ye=ne===n.INT||ne===n.UNSIGNED_INT||ue.gpuType===ro;if(ue.isInterleavedBufferAttribute){const ge=ue.data,Se=ge.stride,we=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)u(Q.location+Ne,ge.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)m(Q.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Ne=0;Ne<Q.locationSize;Ne++)v(Q.location+Ne,te/Q.locationSize,ne,U,Se*de,(we+te/Q.locationSize*Ne)*de,ye)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<Q.locationSize;ge++)u(Q.location+ge,ue.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<Q.locationSize;ge++)m(Q.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let ge=0;ge<Q.locationSize;ge++)v(Q.location+ge,te/Q.locationSize,ne,U,te*de,te/Q.locationSize*ge*de,ye)}}else if(Z!==void 0){const U=Z[fe];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(Q.location,U);break;case 3:n.vertexAttrib3fv(Q.location,U);break;case 4:n.vertexAttrib4fv(Q.location,U);break;default:n.vertexAttrib1fv(Q.location,U)}}}}y()}function O(){N();for(const M in i){const I=i[M];for(const z in I){const V=I[z];for(const j in V)h(V[j].object),delete V[j];delete I[z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const z in I){const V=I[z];for(const j in V)h(V[j].object),delete V[j];delete I[z]}delete i[M.id]}function T(M){for(const I in i){const z=i[I];if(z[M.id]===void 0)continue;const V=z[M.id];for(const j in V)h(V[j].object),delete V[j];delete z[M.id]}}function N(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Qf(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==on&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const N=T===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Sn&&!N)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:O,maxSamples:R}}function ep(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ei,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,v=y*4;let S=u.clippingState||null;l.value=S,S=h(g,f,v,p);for(let O=0;O!==v;++O)S[O]=t[O];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tp(n){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Ci:a===no&&(o.mapping=Pi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ca extends nc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,ac=[.125,.215,.35,.446,.526,.582],xi=20,ha=new ca,lc=new je;let ua=null,da=0,fa=0,pa=!1;const vi=(1+Math.sqrt(5))/2,Ki=1/vi,cc=[new k(-vi,Ki,0),new k(vi,Ki,0),new k(-Ki,0,vi),new k(Ki,0,vi),new k(0,vi,-Ki),new k(0,vi,Ki),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Wt,format:on,colorSpace:Li,depthBuffer:!1},s=hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,s){const a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lc),h.toneMapping=Vn,h.autoClear=!1;const p=new ms({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new vt(new mi,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(lc),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;or(s,y*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ci||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cc[(s-r-1)%cc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new vt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xi;m>xi&&console.warn(\`sigmaRadians, \${r}, is too large and will clip, as it requested \${m} samples when the maximum is set to \${xi}\`);const u=[];let y=0;for(let T=0;T<xi;++T){const N=T/_,E=Math.exp(-N*N/2);u.push(E),T===0?y+=E:T<m&&(y+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[s],O=3*S*(s>v-ji?s-v+ji:0),R=4*(this._cubeSize-S);or(t,O,R,3*S,2*S),l.setRenderTarget(t),l.render(d,ha)}}function np(n){const e=[],t=[],i=[];let s=n;const r=n-ji+1+ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ji?l=ac[o-n+ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,N=R>2?0:-1,E=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];y.set(E,_*g*R),v.set(f,m*g*R);const M=[R,R,R,R,R,R];S.set(M,u*g*R)}const O=new Ht;O.setAttribute("position",new an(y,_)),O.setAttribute("uv",new an(v,m)),O.setAttribute("faceIndex",new an(S,u)),e.push(O),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hc(n,e,t){const i=new Ut(n,e,t);return i.texture.mapping=Cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ip(n,e,t){const i=new Float32Array(xi),s=new k(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:\`\${n}.0\`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:\`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		\`,blending:Rt,depthTest:!1,depthWrite:!1})}function uc(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:\`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		\`,blending:Rt,depthTest:!1,depthWrite:!1})}function dc(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:\`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		\`,blending:Rt,depthTest:!1,depthWrite:!1})}function ga(){return\`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	\`}function sp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===to||l===no,h=l===Ci||l===Pi;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ma(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ma(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&us("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function op(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,S=y.length;v<S;v+=3){const O=y[v+0],R=y[v+1],T=y[v+2];f.push(O,R,R,T,T,O)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const O=v+0,R=v+1,T=v+2;f.push(O,R,R,T,T,O)}}else return;const m=new(Dl(f)?Zl:Kl)(f,1);m.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ap(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let u=0;for(let y=0;y<g;y++)u+=p[y]*_[y];t.update(u,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function lp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cp(n,e,t){const i=new WeakMap,s=new _t;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let S=a.attributes.position.count*v,O=1;S>e.maxTextureSize&&(O=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*O*4*d),T=new Bl(R,S,O,d);T.type=Sn,T.needsUpdate=!0;const N=v*4;for(let M=0;M<d;M++){const I=m[M],z=u[M],V=y[M],j=S*O*4*M;for(let oe=0;oe<I.count;oe++){const Z=oe*N;p===!0&&(s.fromBufferAttribute(I,oe),R[j+Z+0]=s.x,R[j+Z+1]=s.y,R[j+Z+2]=s.z,R[j+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,oe),R[j+Z+4]=s.x,R[j+Z+5]=s.y,R[j+Z+6]=s.z,R[j+Z+7]=0),_===!0&&(s.fromBufferAttribute(V,oe),R[j+Z+8]=s.x,R[j+Z+9]=s.y,R[j+Z+10]=s.z,R[j+Z+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Ie(S,O)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function hp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _a extends Bt{constructor(e,t,i,s,r,o,a,l,c,h=Di){if(h!==Di&&h!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Di&&(i=ai),i===void 0&&h===ci&&(i=li),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fc=new Bt,pc=new _a(1,1),mc=new Bl,gc=new Pu,_c=new rc,xc=[],vc=[],Mc=new Float32Array(16),yc=new Float32Array(9),Sc=new Float32Array(4);function Zi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ar(n,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function up(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),Pt(t,i)}}function gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;yc.set(i),n.uniformMatrix3fv(this.addr,!1,yc),Pt(t,i)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),Pt(t,i)}}function xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Tp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=Rl,r=pc):r=fc,t.setTexture2D(e||r,s)}function Ap(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gc,s)}function Rp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_c,s)}function Cp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mc,s)}function Pp(n){switch(n){case 5126:return up;case 35664:return dp;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return yp;case 5125:return Sp;case 36294:return Ep;case 36295:return bp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Dp(n,e){n.uniform1fv(this.addr,e)}function Lp(n,e){const t=Zi(e,this.size,2);n.uniform2fv(this.addr,t)}function Ip(n,e){const t=Zi(e,this.size,3);n.uniform3fv(this.addr,t)}function Up(n,e){const t=Zi(e,this.size,4);n.uniform4fv(this.addr,t)}function Np(n,e){const t=Zi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Op(n,e){const t=Zi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fp(n,e){const t=Zi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zp(n,e){n.uniform1iv(this.addr,e)}function Bp(n,e){n.uniform2iv(this.addr,e)}function kp(n,e){n.uniform3iv(this.addr,e)}function Hp(n,e){n.uniform4iv(this.addr,e)}function Gp(n,e){n.uniform1uiv(this.addr,e)}function Vp(n,e){n.uniform2uiv(this.addr,e)}function Wp(n,e){n.uniform3uiv(this.addr,e)}function Xp(n,e){n.uniform4uiv(this.addr,e)}function $p(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fc,r[o])}function Yp(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gc,r[o])}function qp(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_c,r[o])}function jp(n,e,t){const i=this.cache,s=e.length,r=ar(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mc,r[o])}function Kp(n){switch(n){case 5126:return Dp;case 35664:return Lp;case 35665:return Ip;case 35666:return Up;case 35674:return Np;case 35675:return Op;case 35676:return Fp;case 5124:case 35670:return zp;case 35667:case 35671:return Bp;case 35668:case 35672:return kp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return jp}}class Zp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pp(t.type)}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const xa=/(\\w+)(\\])?(\\[|\\.)?/g;function Ec(n,e){n.seq.push(e),n.map[e.id]=e}function em(n,e,t){const i=n.name,s=i.length;for(xa.lastIndex=0;;){const r=xa.exec(i),o=xa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ec(t,c===void 0?new Zp(a,n,e):new Qp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Jp(a),Ec(t,d)),t=d}}}class lr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);em(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function bc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tm=37297;let nm=0;function im(n,e){const t=n.split(\`
\`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(\`\${a===e?">":" "} \${a}: \${t[o]}\`)}return i.join(\`
\`)}const wc=new Je;function sm(n){rt._getMatrix(wc,rt.workingColorSpace,n);const e=\`mat3( \${wc.elements.map(t=>t.toFixed(4))} )\`;switch(rt.getTransfer(n)){case Fs:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Tc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+\`

\`+s+\`

\`+im(n.getShaderSource(e),o)}else return s}function rm(n,e){const t=sm(e);return[\`vec4 \${n}( vec4 value ) {\`,\`	return \${t[1]}( vec4( value.rgb * \${t[0]}, value.a ) );\`,"}"].join(\`
\`)}function om(n,e){let t;switch(e){case ul:t="Linear";break;case dl:t="Reinhard";break;case fl:t="Cineon";break;case eo:t="ACESFilmic";break;case pl:t="AgX";break;case ml:t="Neutral";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cr=new k;function am(){rt.getLuminanceCoefficients(cr);const n=cr.x.toFixed(4),e=cr.y.toFixed(4),t=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",\`	const vec3 weights = vec3( \${n}, \${e}, \${t} );\`,"	return dot( weights, rgb );","}"].join(\`
\`)}function lm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(\`
\`)}function cm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(\`
\`)}function hm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xs(n){return n!==""}function Ac(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const um=/^[ \\t]*#include +<([\\w\\d./]+)>/gm;function va(n){return n.replace(um,fm)}const dm=new Map;function fm(n,e){let t=tt[e];if(t===void 0){const i=dm.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const pm=/#pragma unroll_loop_start\\s+for\\s*\\(\\s*int\\s+i\\s*=\\s*(\\d+)\\s*;\\s*i\\s*<\\s*(\\d+)\\s*;\\s*i\\s*\\+\\+\\s*\\)\\s*{([\\s\\S]+?)}\\s+#pragma unroll_loop_end/g;function Cc(n){return n.replace(pm,mm)}function mm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\\[\\s*i\\s*\\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pc(n){let e=\`precision \${n.precision} float;
	precision \${n.precision} int;
	precision \${n.precision} sampler2D;
	precision \${n.precision} samplerCube;
	precision \${n.precision} sampler3D;
	precision \${n.precision} sampler2DArray;
	precision \${n.precision} sampler2DShadow;
	precision \${n.precision} samplerCubeShadow;
	precision \${n.precision} sampler2DArrayShadow;
	precision \${n.precision} isampler2D;
	precision \${n.precision} isampler3D;
	precision \${n.precision} isamplerCube;
	precision \${n.precision} isampler2DArray;
	precision \${n.precision} usampler2D;
	precision \${n.precision} usampler3D;
	precision \${n.precision} usamplerCube;
	precision \${n.precision} usampler2DArray;
	\`;return n.precision==="highp"?e+=\`
#define HIGH_PRECISION\`:n.precision==="mediump"?e+=\`
#define MEDIUM_PRECISION\`:n.precision==="lowp"&&(e+=\`
#define LOW_PRECISION\`),e}function gm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===al?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jr:e="ENVMAP_BLENDING_MULTIPLY";break;case au:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ym(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gm(t),c=_m(t),h=xm(t),d=vm(t),f=Mm(t),p=lm(t),g=cm(r),_=s.createProgram();let m,u,y=t.glslVersion?"#version "+t.glslVersion+\`
\`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(\`
\`),m.length>0&&(m+=\`
\`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xs).join(\`
\`),u.length>0&&(u+=\`
\`)):(m=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",\`
\`].filter(xs).join(\`
\`),u=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,rm("linearToOutputTexel",t.outputColorSpace),am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",\`
\`].filter(xs).join(\`
\`)),o=va(o),o=Ac(o,t),o=Rc(o,t),a=va(a),a=Ac(a,t),a=Rc(a,t),o=Cc(o),a=Cc(a),t.isRawShaderMaterial!==!0&&(y=\`#version 300 es
\`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(\`
\`)+\`
\`+m,u=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(\`
\`)+\`
\`+u);const v=y+m+o,S=y+u+a,O=bc(s,s.VERTEX_SHADER,v),R=bc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,O),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(I){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(O).trim(),j=s.getShaderInfoLog(R).trim();let oe=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,R);else{const fe=Tc(s,O,"vertex"),Q=Tc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+\`

Material Name: \`+I.name+\`
Material Type: \`+I.type+\`

Program Info Log: \`+z+\`
\`+fe+\`
\`+Q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||j==="")&&(Z=!1);Z&&(I.diagnostics={runnable:oe,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:u}})}s.deleteShader(O),s.deleteShader(R),N=new lr(s,_),E=hm(s,_)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,tm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=R,this}let Sm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bm(e),t.set(e,i)),i}}class bm{constructor(e){this.id=Sm++,this.code=e,this.usedTimes=0}}function wm(n,e,t,i,s,r,o){const a=new jo,l=new Em,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":\`uv\${E}\`}function m(E,M,I,z,V){const j=z.fog,oe=V.geometry,Z=E.isMeshStandardMaterial?z.environment:null,fe=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),Q=fe&&fe.mapping===Cs?fe.image.height:null,ue=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const U=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,te=U!==void 0?U.length:0;let xe=0;oe.morphAttributes.position!==void 0&&(xe=1),oe.morphAttributes.normal!==void 0&&(xe=2),oe.morphAttributes.color!==void 0&&(xe=3);let Le,ne,de,ye;if(ue){const Be=En[ue];Le=Be.vertexShader,ne=Be.fragmentShader}else Le=E.vertexShader,ne=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const ge=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),we=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,it=!!E.map,Xe=!!E.matcap,at=!!fe,H=!!E.aoMap,ht=!!E.lightMap,Ge=!!E.bumpMap,$e=!!E.normalMap,Ue=!!E.displacementMap,lt=!!E.emissiveMap,Oe=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,Y=E.clearcoat>0,ae=E.dispersion>0,ce=E.iridescence>0,se=E.sheen>0,Ae=E.transmission>0,_e=b&&!!E.anisotropyMap,be=Y&&!!E.clearcoatMap,qe=Y&&!!E.clearcoatNormalMap,pe=Y&&!!E.clearcoatRoughnessMap,Ee=ce&&!!E.iridescenceMap,Re=ce&&!!E.iridescenceThicknessMap,ze=se&&!!E.sheenColorMap,Ce=se&&!!E.sheenRoughnessMap,et=!!E.specularMap,ke=!!E.specularColorMap,Ze=!!E.specularIntensityMap,G=Ae&&!!E.transmissionMap,ve=Ae&&!!E.thicknessMap,L=!!E.gradientMap,X=!!E.alphaMap,q=E.alphaTest>0,re=!!E.alphaHash,Me=!!E.extensions;let Fe=Vn;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const He={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:Le,fragmentShader:ne,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:we,instancingColor:we&&V.instanceColor!==null,instancingMorph:we&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Li,alphaToCoverage:!!E.alphaToCoverage,map:it,matcap:Xe,envMap:at,envMapMode:at&&fe.mapping,envMapCubeUVHeight:Q,aoMap:H,lightMap:ht,bumpMap:Ge,normalMap:$e,displacementMap:f&&Ue,emissiveMap:lt,normalMapObjectSpace:$e&&E.normalMapType===du,normalMapTangentSpace:$e&&E.normalMapType===Os,metalnessMap:Oe,roughnessMap:P,anisotropy:b,anisotropyMap:_e,clearcoat:Y,clearcoatMap:be,clearcoatNormalMap:qe,clearcoatRoughnessMap:pe,dispersion:ae,iridescence:ce,iridescenceMap:Ee,iridescenceThicknessMap:Re,sheen:se,sheenColorMap:ze,sheenRoughnessMap:Ce,specularMap:et,specularColorMap:ke,specularIntensityMap:Ze,transmission:Ae,transmissionMap:G,thicknessMap:ve,gradientMap:L,opaque:E.transparent===!1&&E.blending===Ai&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:q,alphaHash:re,combine:E.combine,mapUv:it&&_(E.map.channel),aoMapUv:H&&_(E.aoMap.channel),lightMapUv:ht&&_(E.lightMap.channel),bumpMapUv:Ge&&_(E.bumpMap.channel),normalMapUv:$e&&_(E.normalMap.channel),displacementMapUv:Ue&&_(E.displacementMap.channel),emissiveMapUv:lt&&_(E.emissiveMap.channel),metalnessMapUv:Oe&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:_e&&_(E.anisotropyMap.channel),clearcoatMapUv:be&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(E.sheenRoughnessMap.channel),specularMapUv:et&&_(E.specularMap.channel),specularColorMapUv:ke&&_(E.specularColorMap.channel),specularIntensityMapUv:Ze&&_(E.specularIntensityMap.channel),transmissionMapUv:G&&_(E.transmissionMap.channel),thicknessMapUv:ve&&_(E.thicknessMap.channel),alphaMapUv:X&&_(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&($e||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!oe.attributes.uv&&(it||X),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:V.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:it&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===mt,decodeVideoTextureEmissive:lt&&E.emissiveMap.isVideoTexture===!0&&rt.getTransfer(E.emissiveMap.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===rn,flipSided:E.side===Gt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Me&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&E.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(y(M,E),v(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=g[E.type];let I;if(M){const z=En[M];I=Bn.clone(z.uniforms)}else I=E.uniforms;return I}function O(E,M){let I;for(let z=0,V=h.length;z<V;z++){const j=h[z];if(j.cacheKey===M){I=j,++I.usedTimes;break}}return I===void 0&&(I=new ym(n,M,E,r),h.push(I)),I}function R(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:O,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:N}}function Tm(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,p,g,_,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Am),i.length>1&&i.sort(f||Dc),s.length>1&&s.sort(f||Dc)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Rm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Lc,n.set(i,[o])):s>=r.length?(o=new Lc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Pm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dm=0;function Lm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Im(n){const e=new Cm,t=Pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new st,o=new st;function a(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,y=0,v=0,S=0,O=0,R=0,T=0;c.sort(Lm);for(let E=0,M=c.length;E<M;E++){const I=c[E],z=I.color,V=I.intensity,j=I.distance,oe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*V,d+=z.g*V,f+=z.b*V;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],V);T++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const fe=I.shadow,Q=t.get(I);Q.shadowIntensity=fe.intensity,Q.shadowBias=fe.bias,Q.shadowNormalBias=fe.normalBias,Q.shadowRadius=fe.radius,Q.shadowMapSize=fe.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=Z,p++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(z).multiplyScalar(V),Z.distance=j,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[_]=Z;const fe=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,fe.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=fe.matrix,I.castShadow){const Q=t.get(I);Q.shadowIntensity=fe.intensity,Q.shadowBias=fe.bias,Q.shadowNormalBias=fe.normalBias,Q.shadowRadius=fe.radius,Q.shadowMapSize=fe.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=oe,S++}_++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(z).multiplyScalar(V),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Z,m++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const fe=I.shadow,Q=t.get(I);Q.shadowIntensity=fe.intensity,Q.shadowBias=fe.bias,Q.shadowNormalBias=fe.normalBias,Q.shadowRadius=fe.radius,Q.shadowMapSize=fe.mapSize,Q.shadowCameraNear=fe.camera.near,Q.shadowCameraFar=fe.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=Z,g++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(V),Z.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[u]=Z,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==y||N.numPointShadows!==v||N.numSpotShadows!==S||N.numSpotMaps!==O||N.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+O-R,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,N.directionalLength=p,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=y,N.numPointShadows=v,N.numSpotShadows=S,N.numSpotMaps=O,N.numLightProbes=T,i.version=Dm++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ic(n){const e=new Im(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Um(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ic(n),e.set(s,[a])):r>=o.length?(a=new Ic(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Uc extends Qn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends Qn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om=\`void main() {
	gl_Position = vec4( position, 1.0 );
}\`,Fm=\`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}\`;function zm(n,e,t){let i=new la;const s=new Ie,r=new Ie,o=new _t,a=new Uc({depthPacking:Tl}),l=new Nm,c={},h=t.maxTextureSize,d={[Gn]:Gt,[Gt]:Gn,[rn]:rn},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Om,fragmentShader:Fm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let u=this.type;this.render=function(R,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Rt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=u!==Dn&&this.type===Dn,j=u===Dn&&this.type!==Dn;for(let oe=0,Z=R.length;oe<Z;oe++){const fe=R[oe],Q=fe.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const ue=Q.getFrameExtents();if(s.multiply(ue),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,Q.mapSize.y=r.y)),Q.map===null||V===!0||j===!0){const te=this.type!==Dn?{minFilter:Vt,magFilter:Vt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ut(s.x,s.y,te),Q.map.texture.name=fe.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const U=Q.getViewportCount();for(let te=0;te<U;te++){const xe=Q.getViewport(te);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),z.viewport(o),Q.updateMatrices(fe,te),i=Q.getFrustum(),S(T,N,Q.camera,fe,this.type)}Q.isPointLightShadow!==!0&&this.type===Dn&&y(Q,N),Q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,I)};function y(R,T){const N=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ut(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,N,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,N,p,_,null)}function v(R,T,N,E){let M=null;const I=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=M.uuid,V=T.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let oe=j[V];oe===void 0&&(oe=M.clone(),j[V]=oe,T.addEventListener("dispose",O)),M=oe}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Dn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=N}return M}function S(R,T,N,E,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Dn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const V=e.update(R),j=R.material;if(Array.isArray(j)){const oe=V.groups;for(let Z=0,fe=oe.length;Z<fe;Z++){const Q=oe[Z],ue=j[Q.materialIndex];if(ue&&ue.visible){const U=v(R,ue,E,M);R.onBeforeShadow(n,R,T,N,V,U,Q),n.renderBufferDirect(N,null,V,U,R,Q),R.onAfterShadow(n,R,T,N,V,U,Q)}}}else if(j.visible){const oe=v(R,j,E,M);R.onBeforeShadow(n,R,T,N,V,oe,null),n.renderBufferDirect(N,null,V,oe,R,null),R.onAfterShadow(n,R,T,N,V,oe,null)}}const z=R.children;for(let V=0,j=z.length;V<j;V++)S(z[V],T,N,E,M)}function O(R){R.target.removeEventListener("dispose",O);for(const N in c){const E=c[N],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Bm={[$r]:Yr,[qr]:Zr,[jr]:Qr,[Ri]:Kr,[Yr]:$r,[Zr]:qr,[Qr]:jr,[Kr]:Ri};function km(n,e){function t(){let G=!1;const ve=new _t;let L=null;const X=new _t(0,0,0,0);return{setMask:function(q){L!==q&&!G&&(n.colorMask(q,q,q,q),L=q)},setLocked:function(q){G=q},setClear:function(q,re,Me,Fe,He){He===!0&&(q*=Fe,re*=Fe,Me*=Fe),ve.set(q,re,Me,Fe),X.equals(ve)===!1&&(n.clearColor(q,re,Me,Fe),X.copy(ve))},reset:function(){G=!1,L=null,X.set(-1,0,0,0)}}}function i(){let G=!1,ve=!1,L=null,X=null,q=null;return{setReversed:function(re){if(ve!==re){const Me=e.get("EXT_clip_control");ve?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT);const Fe=q;q=null,this.setClear(Fe)}ve=re},getReversed:function(){return ve},setTest:function(re){re?ge(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(re){L!==re&&!G&&(n.depthMask(re),L=re)},setFunc:function(re){if(ve&&(re=Bm[re]),X!==re){switch(re){case $r:n.depthFunc(n.NEVER);break;case Yr:n.depthFunc(n.ALWAYS);break;case qr:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case jr:n.depthFunc(n.EQUAL);break;case Kr:n.depthFunc(n.GEQUAL);break;case Zr:n.depthFunc(n.GREATER);break;case Qr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=re}},setLocked:function(re){G=re},setClear:function(re){q!==re&&(ve&&(re=1-re),n.clearDepth(re),q=re)},reset:function(){G=!1,L=null,X=null,q=null,ve=!1}}}function s(){let G=!1,ve=null,L=null,X=null,q=null,re=null,Me=null,Fe=null,He=null;return{setTest:function(Be){G||(Be?ge(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Be){ve!==Be&&!G&&(n.stencilMask(Be),ve=Be)},setFunc:function(Be,Qe,yt){(L!==Be||X!==Qe||q!==yt)&&(n.stencilFunc(Be,Qe,yt),L=Be,X=Qe,q=yt)},setOp:function(Be,Qe,yt){(re!==Be||Me!==Qe||Fe!==yt)&&(n.stencilOp(Be,Qe,yt),re=Be,Me=Qe,Fe=yt)},setLocked:function(Be){G=Be},setClear:function(Be){He!==Be&&(n.clearStencil(Be),He=Be)},reset:function(){G=!1,ve=null,L=null,X=null,q=null,re=null,Me=null,Fe=null,He=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,y=null,v=null,S=null,O=null,R=null,T=new je(0,0,0),N=0,E=!1,M=null,I=null,z=null,V=null,j=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,fe=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\\d)/.exec(Q)[1]),Z=fe>=1):Q.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\\d)/.exec(Q)[1]),Z=fe>=2);let ue=null,U={};const te=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Le=new _t().fromArray(te),ne=new _t().fromArray(xe);function de(G,ve,L,X){const q=new Uint8Array(4),re=n.createTexture();n.bindTexture(G,re),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<L;Me++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,q):n.texImage2D(ve+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,q);return re}const ye={};ye[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(Ri),Ge(!1),$e(rl),ge(n.CULL_FACE),H(Rt);function ge(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function Se(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function we(G,ve){return d[G]!==ve?(n.bindFramebuffer(G,ve),d[G]=ve,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ve),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ne(G,ve){let L=p,X=!1;if(G){L=f.get(ve),L===void 0&&(L=[],f.set(ve,L));const q=G.textures;if(L.length!==q.length||L[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Me=q.length;re<Me;re++)L[re]=n.COLOR_ATTACHMENT0+re;L.length=q.length,X=!0}}else L[0]!==n.BACK&&(L[0]=n.BACK,X=!0);X&&n.drawBuffers(L)}function it(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const Xe={[fn]:n.FUNC_ADD,[Yh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};Xe[jh]=n.MIN,Xe[Kh]=n.MAX;const at={[as]:n.ZERO,[Zh]:n.ONE,[Qh]:n.SRC_COLOR,[Gr]:n.SRC_ALPHA,[nu]:n.SRC_ALPHA_SATURATE,[Xr]:n.DST_COLOR,[Wr]:n.DST_ALPHA,[Jh]:n.ONE_MINUS_SRC_COLOR,[Vr]:n.ONE_MINUS_SRC_ALPHA,[tu]:n.ONE_MINUS_DST_COLOR,[eu]:n.ONE_MINUS_DST_ALPHA,[iu]:n.CONSTANT_COLOR,[su]:n.ONE_MINUS_CONSTANT_COLOR,[ru]:n.CONSTANT_ALPHA,[ou]:n.ONE_MINUS_CONSTANT_ALPHA};function H(G,ve,L,X,q,re,Me,Fe,He,Be){if(G===Rt){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(ge(n.BLEND),_=!0),G!==hl){if(G!==m||Be!==E){if((u!==fn||S!==fn)&&(n.blendEquation(n.FUNC_ADD),u=fn,S=fn),Be)switch(G){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hr:n.blendFunc(n.ONE,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,v=null,O=null,R=null,T.set(0,0,0),N=0,m=G,E=Be}return}q=q||ve,re=re||L,Me=Me||X,(ve!==u||q!==S)&&(n.blendEquationSeparate(Xe[ve],Xe[q]),u=ve,S=q),(L!==y||X!==v||re!==O||Me!==R)&&(n.blendFuncSeparate(at[L],at[X],at[re],at[Me]),y=L,v=X,O=re,R=Me),(Fe.equals(T)===!1||He!==N)&&(n.blendColor(Fe.r,Fe.g,Fe.b,He),T.copy(Fe),N=He),m=G,E=!1}function ht(G,ve){G.side===rn?Se(n.CULL_FACE):ge(n.CULL_FACE);let L=G.side===Gt;ve&&(L=!L),Ge(L),G.blending===Ai&&G.transparent===!1?H(Rt):H(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const X=G.stencilWrite;a.setTest(X),X&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),lt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function $e(G){G!==Xh?(ge(n.CULL_FACE),G!==I&&(G===rl?n.cullFace(n.BACK):G===$h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),I=G}function Ue(G){G!==z&&(Z&&n.lineWidth(G),z=G)}function lt(G,ve,L){G?(ge(n.POLYGON_OFFSET_FILL),(V!==ve||j!==L)&&(n.polygonOffset(ve,L),V=ve,j=L)):Se(n.POLYGON_OFFSET_FILL)}function Oe(G){G?ge(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function P(G){G===void 0&&(G=n.TEXTURE0+oe-1),ue!==G&&(n.activeTexture(G),ue=G)}function b(G,ve,L){L===void 0&&(ue===null?L=n.TEXTURE0+oe-1:L=ue);let X=U[L];X===void 0&&(X={type:void 0,texture:void 0},U[L]=X),(X.type!==G||X.texture!==ve)&&(ue!==L&&(n.activeTexture(L),ue=L),n.bindTexture(G,ve||ye[G]),X.type=G,X.texture=ve)}function Y(){const G=U[ue];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){Le.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Le.copy(G))}function Ce(G){ne.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ne.copy(G))}function et(G,ve){let L=c.get(ve);L===void 0&&(L=new WeakMap,c.set(ve,L));let X=L.get(G);X===void 0&&(X=n.getUniformBlockIndex(ve,G.name),L.set(G,X))}function ke(G,ve){const X=c.get(ve).get(G);l.get(ve)!==X&&(n.uniformBlockBinding(ve,X,G.__bindingPointIndex),l.set(ve,X))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,U={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,y=null,v=null,S=null,O=null,R=null,T=new je(0,0,0),N=0,E=!1,M=null,I=null,z=null,V=null,j=null,Le.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Se,bindFramebuffer:we,drawBuffers:Ne,useProgram:it,setBlending:H,setMaterial:ht,setFlipSided:Ge,setCullFace:$e,setLineWidth:Ue,setPolygonOffset:lt,setScissorTest:Oe,activeTexture:P,bindTexture:b,unbindTexture:Y,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:Ee,texImage3D:Re,updateUBOMapping:et,uniformBlockBinding:ke,texStorage2D:qe,texStorage3D:pe,texSubImage2D:se,texSubImage3D:Ae,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:ze,viewport:Ce,reset:Ze}}function Nc(n,e,t,i){const s=Hm(i);switch(t){case Ml:return n*e;case Sl:return n*e;case El:return n*e*2;case lo:return n*e/s.components*s.byteLength;case co:return n*e/s.components*s.byteLength;case bl:return n*e*2/s.components*s.byteLength;case ho:return n*e*2/s.components*s.byteLength;case yl:return n*e*3/s.components*s.byteLength;case on:return n*e*4/s.components*s.byteLength;case uo:return n*e*4/s.components*s.byteLength;case Ds:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Is:case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(n,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(n,8)*Math.max(e,8)/2;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ns:case Uo:case No:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wl:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fo:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(\`Unable to determine texture byte length for \${t} format.\`)}function Hm(n){switch(n){case yn:case _l:return{byteLength:1,components:1};case ls:case xl:case Wt:return{byteLength:2,components:1};case oo:case ao:return{byteLength:2,components:4};case ai:case ro:case Sn:return{byteLength:4,components:1};case vl:return{byteLength:4,components:3}}throw new Error(\`Unknown texture type \${n}.\`)}function Gm(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return p?new OffscreenCanvas(P,b):ks("canvas")}function _(P,b,Y){let ae=1;const ce=Oe(P);if((ce.width>Y||ce.height>Y)&&(ae=Y/Math.max(ce.width,ce.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(ae*ce.width),Ae=Math.floor(ae*ce.height);d===void 0&&(d=g(se,Ae));const _e=b?g(se,Ae):d;return _e.width=se,_e.height=Ae,_e.getContext("2d").drawImage(P,0,0,se,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+se+"x"+Ae+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function m(P){return P.generateMipmaps}function u(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,b,Y,ae,ce=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=b;if(b===n.RED&&(Y===n.FLOAT&&(se=n.R32F),Y===n.HALF_FLOAT&&(se=n.R16F),Y===n.UNSIGNED_BYTE&&(se=n.R8)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.R8UI),Y===n.UNSIGNED_SHORT&&(se=n.R16UI),Y===n.UNSIGNED_INT&&(se=n.R32UI),Y===n.BYTE&&(se=n.R8I),Y===n.SHORT&&(se=n.R16I),Y===n.INT&&(se=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(se=n.RG32F),Y===n.HALF_FLOAT&&(se=n.RG16F),Y===n.UNSIGNED_BYTE&&(se=n.RG8)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RG8UI),Y===n.UNSIGNED_SHORT&&(se=n.RG16UI),Y===n.UNSIGNED_INT&&(se=n.RG32UI),Y===n.BYTE&&(se=n.RG8I),Y===n.SHORT&&(se=n.RG16I),Y===n.INT&&(se=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(se=n.RGB16UI),Y===n.UNSIGNED_INT&&(se=n.RGB32UI),Y===n.BYTE&&(se=n.RGB8I),Y===n.SHORT&&(se=n.RGB16I),Y===n.INT&&(se=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),Y===n.UNSIGNED_INT&&(se=n.RGBA32UI),Y===n.BYTE&&(se=n.RGBA8I),Y===n.SHORT&&(se=n.RGBA16I),Y===n.INT&&(se=n.RGBA32I)),b===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),b===n.RGBA){const Ae=ce?Fs:rt.getTransfer(ae);Y===n.FLOAT&&(se=n.RGBA32F),Y===n.HALF_FLOAT&&(se=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(se=Ae===mt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(P,b){let Y;return P?b===null||b===ai||b===li?Y=n.DEPTH24_STENCIL8:b===Sn?Y=n.DEPTH32F_STENCIL8:b===ls&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===li?Y=n.DEPTH_COMPONENT24:b===Sn?Y=n.DEPTH_COMPONENT32F:b===ls&&(Y=n.DEPTH_COMPONENT16),Y}function O(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){const b=P.target;b.removeEventListener("dispose",R),N(b),b.isVideoTexture&&h.delete(b)}function T(P){const b=P.target;b.removeEventListener("dispose",T),M(b)}function N(P){const b=i.get(P);if(b.__webglInit===void 0)return;const Y=P.source,ae=f.get(Y);if(ae){const ce=ae[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&E(P),Object.keys(ae).length===0&&f.delete(Y)}i.remove(P)}function E(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const Y=P.source,ae=f.get(Y);delete ae[b.__cacheKey],o.memory.textures--}function M(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let ce=0;ce<b.__webglFramebuffer[ae].length;ce++)n.deleteFramebuffer(b.__webglFramebuffer[ae][ce]);else n.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)n.deleteFramebuffer(b.__webglFramebuffer[ae]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=P.textures;for(let ae=0,ce=Y.length;ae<ce;ae++){const se=i.get(Y[ae]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(Y[ae])}i.remove(P)}let I=0;function z(){I=0}function V(){const P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function j(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function oe(P,b){const Y=i.get(P);if(P.isVideoTexture&&Ue(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Y,P,b);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function Z(P,b){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function fe(P,b){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,b);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function Q(P,b){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){de(Y,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}const ue={[Wn]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},U={[Vt]:n.NEAREST,[hu]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},te={[fu]:n.NEVER,[vu]:n.ALWAYS,[pu]:n.LESS,[Rl]:n.LEQUAL,[mu]:n.EQUAL,[xu]:n.GEQUAL,[gu]:n.GREATER,[_u]:n.NOTEQUAL};function xe(P,b){if(b.type===Sn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===so||b.magFilter===Ps||b.magFilter===oi||b.minFilter===Mn||b.minFilter===so||b.minFilter===Ps||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ue[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ue[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ue[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,U[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vt||b.minFilter!==Ps&&b.minFilter!==oi||b.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Le(P,b){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));const ae=b.source;let ce=f.get(ae);ce===void 0&&(ce={},f.set(ae,ce));const se=j(b);if(se!==P.__cacheKey){ce[se]===void 0&&(ce[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ce[se].usedTimes++;const Ae=ce[P.__cacheKey];Ae!==void 0&&(ce[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(b)),P.__cacheKey=se,P.__webglTexture=ce[se].texture}return Y}function ne(P,b,Y){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);const ce=Le(P,b),se=b.source;t.bindTexture(ae,P.__webglTexture,n.TEXTURE0+Y);const Ae=i.get(se);if(se.version!==Ae.__version||ce===!0){t.activeTexture(n.TEXTURE0+Y);const _e=rt.getPrimaries(rt.workingColorSpace),be=b.colorSpace===Xn?null:rt.getPrimaries(b.colorSpace),qe=b.colorSpace===Xn||_e===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let pe=_(b.image,!1,s.maxTextureSize);pe=lt(b,pe);const Ee=r.convert(b.format,b.colorSpace),Re=r.convert(b.type);let ze=v(b.internalFormat,Ee,Re,b.colorSpace,b.isVideoTexture);xe(ae,b);let Ce;const et=b.mipmaps,ke=b.isVideoTexture!==!0,Ze=Ae.__version===void 0||ce===!0,G=se.dataReady,ve=O(b,pe);if(b.isDepthTexture)ze=S(b.format===ci,b.type),Ze&&(ke?t.texStorage2D(n.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ee,Re,null));else if(b.isDataTexture)if(et.length>0){ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,ve,ze,et[0].width,et[0].height);for(let L=0,X=et.length;L<X;L++)Ce=et[L],ke?G&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,Ce.width,Ce.height,Ee,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,L,ze,Ce.width,Ce.height,0,Ee,Re,Ce.data);b.generateMipmaps=!1}else ke?(Ze&&t.texStorage2D(n.TEXTURE_2D,ve,ze,pe.width,pe.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Ee,Re,pe.data)):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ee,Re,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ke&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ze,et[0].width,et[0].height,pe.depth);for(let L=0,X=et.length;L<X;L++)if(Ce=et[L],b.format!==on)if(Ee!==null)if(ke){if(G)if(b.layerUpdates.size>0){const q=Nc(Ce.width,Ce.height,b.format,b.type);for(const re of b.layerUpdates){const Me=Ce.data.subarray(re*q/Ce.data.BYTES_PER_ELEMENT,(re+1)*q/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,re,Ce.width,Ce.height,1,Ee,Me)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,Ce.width,Ce.height,pe.depth,Ee,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,L,ze,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,Ce.width,Ce.height,pe.depth,Ee,Re,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,L,ze,Ce.width,Ce.height,pe.depth,0,Ee,Re,Ce.data)}else{ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,ve,ze,et[0].width,et[0].height);for(let L=0,X=et.length;L<X;L++)Ce=et[L],b.format!==on?Ee!==null?ke?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,L,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,L,ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?G&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,Ce.width,Ce.height,Ee,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,L,ze,Ce.width,Ce.height,0,Ee,Re,Ce.data)}else if(b.isDataArrayTexture)if(ke){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,ze,pe.width,pe.height,pe.depth),G)if(b.layerUpdates.size>0){const L=Nc(pe.width,pe.height,b.format,b.type);for(const X of b.layerUpdates){const q=pe.data.subarray(X*L/pe.data.BYTES_PER_ELEMENT,(X+1)*L/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,pe.width,pe.height,1,Ee,Re,q)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Re,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,Ee,Re,pe.data);else if(b.isData3DTexture)ke?(Ze&&t.texStorage3D(n.TEXTURE_3D,ve,ze,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Re,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,Ee,Re,pe.data);else if(b.isFramebufferTexture){if(Ze)if(ke)t.texStorage2D(n.TEXTURE_2D,ve,ze,pe.width,pe.height);else{let L=pe.width,X=pe.height;for(let q=0;q<ve;q++)t.texImage2D(n.TEXTURE_2D,q,ze,L,X,0,Ee,Re,null),L>>=1,X>>=1}}else if(et.length>0){if(ke&&Ze){const L=Oe(et[0]);t.texStorage2D(n.TEXTURE_2D,ve,ze,L.width,L.height)}for(let L=0,X=et.length;L<X;L++)Ce=et[L],ke?G&&t.texSubImage2D(n.TEXTURE_2D,L,0,0,Ee,Re,Ce):t.texImage2D(n.TEXTURE_2D,L,ze,Ee,Re,Ce);b.generateMipmaps=!1}else if(ke){if(Ze){const L=Oe(pe);t.texStorage2D(n.TEXTURE_2D,ve,ze,L.width,L.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Re,pe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Ee,Re,pe);m(b)&&u(ae),Ae.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function de(P,b,Y){if(b.image.length!==6)return;const ae=Le(P,b),ce=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);const se=i.get(ce);if(ce.version!==se.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);const Ae=rt.getPrimaries(rt.workingColorSpace),_e=b.colorSpace===Xn?null:rt.getPrimaries(b.colorSpace),be=b.colorSpace===Xn||Ae===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let X=0;X<6;X++)!qe&&!pe?Ee[X]=_(b.image[X],!0,s.maxCubemapSize):Ee[X]=pe?b.image[X].image:b.image[X],Ee[X]=lt(b,Ee[X]);const Re=Ee[0],ze=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type),et=v(b.internalFormat,ze,Ce,b.colorSpace),ke=b.isVideoTexture!==!0,Ze=se.__version===void 0||ae===!0,G=ce.dataReady;let ve=O(b,Re);xe(n.TEXTURE_CUBE_MAP,b);let L;if(qe){ke&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,et,Re.width,Re.height);for(let X=0;X<6;X++){L=Ee[X].mipmaps;for(let q=0;q<L.length;q++){const re=L[q];b.format!==on?ze!==null?ke?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q,0,0,re.width,re.height,ze,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q,et,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q,0,0,re.width,re.height,ze,Ce,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q,et,re.width,re.height,0,ze,Ce,re.data)}}}else{if(L=b.mipmaps,ke&&Ze){L.length>0&&ve++;const X=Oe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,et,X.width,X.height)}for(let X=0;X<6;X++)if(pe){ke?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ee[X].width,Ee[X].height,ze,Ce,Ee[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,et,Ee[X].width,Ee[X].height,0,ze,Ce,Ee[X].data);for(let q=0;q<L.length;q++){const Me=L[q].image[X].image;ke?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q+1,0,0,Me.width,Me.height,ze,Ce,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q+1,et,Me.width,Me.height,0,ze,Ce,Me.data)}}else{ke?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ze,Ce,Ee[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,et,ze,Ce,Ee[X]);for(let q=0;q<L.length;q++){const re=L[q];ke?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q+1,0,0,ze,Ce,re.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q+1,et,ze,Ce,re.image[X])}}}m(b)&&u(n.TEXTURE_CUBE_MAP),se.__version=ce.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ye(P,b,Y,ae,ce,se){const Ae=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),be=v(Y.internalFormat,Ae,_e,Y.colorSpace),qe=i.get(b),pe=i.get(Y);if(pe.__renderTarget=b,!qe.__hasExternalTextures){const Ee=Math.max(1,b.width>>se),Re=Math.max(1,b.height>>se);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,se,be,Ee,Re,b.depth,0,Ae,_e,null):t.texImage2D(ce,se,be,Ee,Re,0,Ae,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),$e(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ce,pe.__webglTexture,0,Ge(b)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ce,pe.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(P,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const ae=b.depthTexture,ce=ae&&ae.isDepthTexture?ae.type:null,se=S(b.stencilBuffer,ce),Ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=Ge(b);$e(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,se,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,se,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,P)}else{const ae=b.textures;for(let ce=0;ce<ae.length;ce++){const se=ae[ce],Ae=r.convert(se.format,se.colorSpace),_e=r.convert(se.type),be=v(se.internalFormat,Ae,_e,se.colorSpace),qe=Ge(b);Y&&$e(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,be,b.width,b.height):$e(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,be,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,be,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(b.depthTexture);ae.__renderTarget=b,(!ae.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe(b.depthTexture,0);const ce=ae.__webglTexture,se=Ge(b);if(b.depthTexture.format===Di)$e(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(b.depthTexture.format===ci)$e(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function we(P){const b=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const ce=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ce)};ae.addEventListener("dispose",ce),b.__depthDisposeCallback=ce}b.__boundDepthTexture=ae}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,P)}else if(Y){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=n.createRenderbuffer(),ge(b.__webglDepthbuffer[ae],P,!1);else{const ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ge(b.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(P,b,Y){const ae=i.get(P);b!==void 0&&ye(ae.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&we(P)}function it(P){const b=P.texture,Y=i.get(P),ae=i.get(b);P.addEventListener("dispose",T);const ce=P.textures,se=P.isWebGLCubeRenderTarget===!0,Ae=ce.length>1;if(Ae||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,o.memory.textures++),se){Y.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[_e]=[];for(let be=0;be<b.mipmaps.length;be++)Y.__webglFramebuffer[_e][be]=n.createFramebuffer()}else Y.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)Y.__webglFramebuffer[_e]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let _e=0,be=ce.length;_e<be;_e++){const qe=i.get(ce[_e]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&$e(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const be=ce[_e];Y.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[_e]);const qe=r.convert(be.format,be.colorSpace),pe=r.convert(be.type),Ee=v(be.internalFormat,qe,pe,be.colorSpace,P.isXRRenderTarget===!0),Re=Ge(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Y.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),xe(n.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)ye(Y.__webglFramebuffer[_e][be],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else ye(Y.__webglFramebuffer[_e],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(b)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let _e=0,be=ce.length;_e<be;_e++){const qe=ce[_e],pe=i.get(qe);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),xe(n.TEXTURE_2D,qe),ye(Y.__webglFramebuffer,P,qe,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),m(qe)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ae.__webglTexture),xe(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)ye(Y.__webglFramebuffer[be],P,b,n.COLOR_ATTACHMENT0,_e,be);else ye(Y.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,_e,0);m(b)&&u(_e),t.unbindTexture()}P.depthBuffer&&we(P)}function Xe(P){const b=P.textures;for(let Y=0,ae=b.length;Y<ae;Y++){const ce=b[Y];if(m(ce)){const se=y(P),Ae=i.get(ce).__webglTexture;t.bindTexture(se,Ae),u(se),t.unbindTexture()}}}const at=[],H=[];function ht(P){if(P.samples>0){if($e(P)===!1){const b=P.textures,Y=P.width,ae=P.height;let ce=n.COLOR_BUFFER_BIT;const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(P),_e=b.length>1;if(_e)for(let be=0;be<b.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let be=0;be<b.length;be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const qe=i.get(b[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,ce,n.NEAREST),l===!0&&(at.length=0,H.length=0,at.push(n.COLOR_ATTACHMENT0+be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push(se),H.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let be=0;be<b.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const qe=i.get(b[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ge(P){return Math.min(s.maxSamples,P.samples)}function $e(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function lt(P,b){const Y=P.colorSpace,ae=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Li&&Y!==Xn&&(rt.getTransfer(Y)===mt?(ae!==on||ce!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=fe,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=$e}function Vm(n,e){function t(i,s=Xn){let r;const o=rt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ao)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_l)return n.BYTE;if(i===xl)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===ro)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Wt)return n.HALF_FLOAT;if(i===Ml)return n.ALPHA;if(i===yl)return n.RGB;if(i===on)return n.RGBA;if(i===Sl)return n.LUMINANCE;if(i===El)return n.LUMINANCE_ALPHA;if(i===Di)return n.DEPTH_COMPONENT;if(i===ci)return n.DEPTH_STENCIL;if(i===lo)return n.RED;if(i===co)return n.RED_INTEGER;if(i===bl)return n.RG;if(i===ho)return n.RG_INTEGER;if(i===uo)return n.RGBA_INTEGER;if(i===Ds||i===Ls||i===Is||i===Us)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===xo||i===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_o||i===xo)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mo||i===yo||i===So||i===Eo||i===bo||i===wo||i===To||i===Ao||i===Ro||i===Co||i===Po||i===Do||i===Lo||i===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===So)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===To)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ao)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ro)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Co)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Po)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Do)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Io)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ns||i===Uo||i===No)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ns)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wl||i===Oo||i===Fo||i===zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ns)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===li?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Wm extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $m=\`
void main() {

	gl_Position = vec4( position, 1.0 );

}\`,Ym=\`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}\`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bt({vertexShader:$m,fragmentShader:Ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new _s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends hi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=new qm,m=t.getContextAttributes();let u=null,y=null;const v=[],S=[],O=new Ie;let R=null;const T=new tn;T.viewport=new _t;const N=new tn;N.viewport=new _t;const E=[T,N],M=new Wm;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=v[ne];return de===void 0&&(de=new Ma,v[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=v[ne];return de===void 0&&(de=new Ma,v[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=v[ne];return de===void 0&&(de=new Ma,v[ne]=de),de.getHandSpace()};function V(ne){const de=S.indexOf(ne.inputSource);if(de===-1)return;const ye=v[de];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||o),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function j(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",oe);for(let ne=0;ne<v.length;ne++){const de=S[ne];de!==null&&(S[ne]=null,v[ne].disconnect(de))}I=null,z=null,_.reset(),e.setRenderTarget(u),p=null,f=null,d=null,s=null,y=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",j),s.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ut(p.framebufferWidth,p.framebufferHeight,{format:on,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,ye=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?ci:Di,ye=m.stencil?li:ai);const Se={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ut(f.textureWidth,f.textureHeight,{format:on,type:yn,depthTexture:new _a(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(ne){for(let de=0;de<ne.removed.length;de++){const ye=ne.removed[de],ge=S.indexOf(ye);ge>=0&&(S[ge]=null,v[ge].disconnect(ye))}for(let de=0;de<ne.added.length;de++){const ye=ne.added[de];let ge=S.indexOf(ye);if(ge===-1){for(let we=0;we<v.length;we++)if(we>=S.length){S.push(ye),ge=we;break}else if(S[we]===null){S[we]=ye,ge=we;break}if(ge===-1)break}const Se=v[ge];Se&&Se.connect(ye)}}const Z=new k,fe=new k;function Q(ne,de,ye){Z.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ge=Z.distanceTo(fe),Se=de.projectionMatrix.elements,we=ye.projectionMatrix.elements,Ne=Se[14]/(Se[10]-1),it=Se[14]/(Se[10]+1),Xe=(Se[9]+1)/Se[5],at=(Se[9]-1)/Se[5],H=(Se[8]-1)/Se[0],ht=(we[8]+1)/we[0],Ge=Ne*H,$e=Ne*ht,Ue=ge/(-H+ht),lt=Ue*-H;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(lt),ne.translateZ(Ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Se[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Oe=Ne+Ue,P=it+Ue,b=Ge-lt,Y=$e+(ge-lt),ae=Xe*it/P*Oe,ce=at*it/P*Oe;ne.projectionMatrix.makePerspective(b,Y,ae,ce,Oe,P),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ue(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let de=ne.near,ye=ne.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=N.near=T.near=de,M.far=N.far=T.far=ye,(I!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,z=M.far),T.layers.mask=ne.layers.mask|2,N.layers.mask=ne.layers.mask|4,M.layers.mask=T.layers.mask|N.layers.mask;const ge=ne.parent,Se=M.cameras;ue(M,ge);for(let we=0;we<Se.length;we++)ue(Se[we],ge);Se.length===2?Q(M,T,N):M.projectionMatrix.copy(T.projectionMatrix),U(ne,M,ge)};function U(ne,de,ye){ye===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let te=null;function xe(ne,de){if(h=de.getViewerPose(c||o),g=de,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ge=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let we=0;we<ye.length;we++){const Ne=ye[we];let it=null;if(p!==null)it=p.getViewport(Ne);else{const at=d.getViewSubImage(f,Ne);it=at.viewport,we===0&&(e.setRenderTargetTextures(y,at.colorTexture,f.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(y))}let Xe=E[we];Xe===void 0&&(Xe=new tn,Xe.layers.enable(we),Xe.viewport=new _t,E[we]=Xe),Xe.matrix.fromArray(Ne.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ne.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),we===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Xe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const we=d.getDepthInformation(ye[0]);we&&we.isValid&&we.texture&&_.init(e,we,s.renderState)}}for(let ye=0;ye<v.length;ye++){const ge=S[ye],Se=v[ye];ge!==null&&Se!==void 0&&Se.update(ge,de,c||o)}te&&te(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const Le=new oc;Le.setAnimationLoop(xe),this.setAnimationLoop=function(ne){te=ne},this.dispose=function(){}}}const Mi=new gn,Km=new st;function Zm(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,tc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,y,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Gt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Gt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u),v=y.envMap,S=y.envMapRotation;v&&(m.envMap.value=v,Mi.copy(S),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Mi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=v*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Gt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Qm(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",m));const O=v.program;i.updateUBOMapping(y,O);const R=e.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function h(y){const v=d();y.__bindingPointIndex=v;const S=n.createBuffer(),O=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],S=y.uniforms,O=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,T=S.length;R<T;R++){const N=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,M=N.length;E<M;E++){const I=N[E];if(p(I,R,E,O)===!0){const z=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let oe=0;oe<V.length;oe++){const Z=V[oe],fe=_(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+j,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,j),j+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,S,O){const R=y.value,T=v+"_"+S;if(O[T]===void 0)return typeof R=="number"||typeof R=="boolean"?O[T]=R:O[T]=R.clone(),!0;{const N=O[T];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return O[T]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(y){const v=y.uniforms;let S=0;const O=16;for(let T=0,N=v.length;T<N;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,I=E.length;M<I;M++){const z=E[M],V=Array.isArray(z.value)?z.value:[z.value];for(let j=0,oe=V.length;j<oe;j++){const Z=V[j],fe=_(Z),Q=S%O,ue=Q%fe.boundary,U=Q+ue;S+=ue,U!==0&&O-U<fe.storage&&(S+=O-U),z.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=fe.storage}}}const R=S%O;return R>0&&(S+=O-R),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Jm{constructor(e={}){const{canvas:t=Su(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Vn,this.toneMappingExposure=1;const S=this;let O=!1,R=0,T=0,N=null,E=-1,M=null;const I=new _t,z=new _t;let V=null;const j=new je(0);let oe=0,Z=t.width,fe=t.height,Q=1,ue=null,U=null;const te=new _t(0,0,Z,fe),xe=new _t(0,0,Z,fe);let Le=!1;const ne=new la;let de=!1,ye=!1;const ge=new st,Se=new st,we=new k,Ne=new _t,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function at(){return N===null?Q:1}let H=i;function ht(x,C){return t.getContext(x,C)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",\`three.js r\${kr}\`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",re,!1),H===null){const C="webgl2";if(H=ht(C,x),H===null)throw ht(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ge,$e,Ue,lt,Oe,P,b,Y,ae,ce,se,Ae,_e,be,qe,pe,Ee,Re,ze,Ce,et,ke,Ze,G;function ve(){Ge=new rp(H),Ge.init(),ke=new Vm(H,Ge),$e=new Jf(H,Ge,e,ke),Ue=new km(H,Ge),$e.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),lt=new lp(H),Oe=new Tm,P=new Gm(H,Ge,Ue,Oe,$e,ke,lt),b=new tp(S),Y=new sp(S),ae=new qu(H),Ze=new Zf(H,ae),ce=new op(H,ae,lt,Ze),se=new hp(H,ce,ae,lt),ze=new cp(H,$e,P),pe=new ep(Oe),Ae=new wm(S,b,Y,Ge,$e,Ze,pe),_e=new Zm(S,Oe),be=new Rm,qe=new Um(Ge),Re=new Kf(S,b,Y,Ue,se,p,l),Ee=new zm(S,se,$e),G=new Qm(H,lt,$e,Ue),Ce=new Qf(H,Ge,lt),et=new ap(H,Ge,lt),lt.programs=Ae.programs,S.capabilities=$e,S.extensions=Ge,S.properties=Oe,S.renderLists=be,S.shadowMap=Ee,S.state=Ue,S.info=lt}ve();const L=new jm(S,H);this.xr=L,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const x=Ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(Z,fe,!1))},this.getSize=function(x){return x.set(Z,fe)},this.setSize=function(x,C,F=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,fe=C,t.width=Math.floor(x*Q),t.height=Math.floor(C*Q),F===!0&&(t.style.width=x+"px",t.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Z*Q,fe*Q).floor()},this.setDrawingBufferSize=function(x,C,F){Z=x,fe=C,Q=F,t.width=Math.floor(x*F),t.height=Math.floor(C*F),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(te)},this.setViewport=function(x,C,F,D){x.isVector4?te.set(x.x,x.y,x.z,x.w):te.set(x,C,F,D),Ue.viewport(I.copy(te).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(xe)},this.setScissor=function(x,C,F,D){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,C,F,D),Ue.scissor(z.copy(xe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(x){Ue.setScissorTest(Le=x)},this.setOpaqueSort=function(x){ue=x},this.setTransparentSort=function(x){U=x},this.getClearColor=function(x){return x.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(x=!0,C=!0,F=!0){let D=0;if(x){let A=!1;if(N!==null){const B=N.texture.format;A=B===uo||B===ho||B===co}if(A){const B=N.texture.type,W=B===yn||B===ai||B===ls||B===li||B===oo||B===ao,ee=Re.getClearColor(),K=Re.getClearAlpha(),he=ee.r,me=ee.g,le=ee.b;W?(g[0]=he,g[1]=me,g[2]=le,g[3]=K,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=he,_[1]=me,_[2]=le,_[3]=K,H.clearBufferiv(H.COLOR,0,_))}else D|=H.COLOR_BUFFER_BIT}C&&(D|=H.DEPTH_BUFFER_BIT),F&&(D|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",re,!1),be.dispose(),qe.dispose(),Oe.dispose(),b.dispose(),Y.dispose(),se.dispose(),Ze.dispose(),G.dispose(),Ae.dispose(),L.dispose(),L.removeEventListener("sessionstart",Yt),L.removeEventListener("sessionend",Cn),qt.stop()};function X(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const x=lt.autoReset,C=Ee.enabled,F=Ee.autoUpdate,D=Ee.needsUpdate,A=Ee.type;ve(),lt.autoReset=x,Ee.enabled=C,Ee.autoUpdate=F,Ee.needsUpdate=D,Ee.type=A}function re(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Me(x){const C=x.target;C.removeEventListener("dispose",Me),Fe(C)}function Fe(x){He(x),Oe.remove(x)}function He(x){const C=Oe.get(x).programs;C!==void 0&&(C.forEach(function(F){Ae.releaseProgram(F)}),x.isShaderMaterial&&Ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,F,D,A,B){C===null&&(C=it);const W=A.isMesh&&A.matrixWorld.determinant()<0,ee=$(x,C,F,D,A);Ue.setMaterial(D,W);let K=F.index,he=1;if(D.wireframe===!0){if(K=ce.getWireframeAttribute(F),K===void 0)return;he=2}const me=F.drawRange,le=F.attributes.position;let Pe=me.start*he,Ye=(me.start+me.count)*he;B!==null&&(Pe=Math.max(Pe,B.start*he),Ye=Math.min(Ye,(B.start+B.count)*he)),K!==null?(Pe=Math.max(Pe,0),Ye=Math.min(Ye,K.count)):le!=null&&(Pe=Math.max(Pe,0),Ye=Math.min(Ye,le.count));const Ke=Ye-Pe;if(Ke<0||Ke===1/0)return;Ze.setup(A,D,ee,F,K);let ft,Ve=Ce;if(K!==null&&(ft=ae.get(K),Ve=et,Ve.setIndex(ft)),A.isMesh)D.wireframe===!0?(Ue.setLineWidth(D.wireframeLinewidth*at()),Ve.setMode(H.LINES)):Ve.setMode(H.TRIANGLES);else if(A.isLine){let De=D.linewidth;De===void 0&&(De=1),Ue.setLineWidth(De*at()),A.isLineSegments?Ve.setMode(H.LINES):A.isLineLoop?Ve.setMode(H.LINE_LOOP):Ve.setMode(H.LINE_STRIP)}else A.isPoints?Ve.setMode(H.POINTS):A.isSprite&&Ve.setMode(H.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)Ve.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ve.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const De=A._multiDrawStarts,It=A._multiDrawCounts,nt=A._multiDrawCount,Ot=K?ae.get(K).bytesPerElement:1,vn=Oe.get(D).currentProgram.getUniforms();for(let Ft=0;Ft<nt;Ft++)vn.setValue(H,"_gl_DrawID",Ft),Ve.render(De[Ft]/Ot,It[Ft])}else if(A.isInstancedMesh)Ve.renderInstances(Pe,Ke,A.count);else if(F.isInstancedBufferGeometry){const De=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,It=Math.min(F.instanceCount,De);Ve.renderInstances(Pe,Ke,It)}else Ve.render(Pe,Ke)};function Be(x,C,F){x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1?(x.side=Gt,x.needsUpdate=!0,bi(x,C,F),x.side=Gn,x.needsUpdate=!0,bi(x,C,F),x.side=rn):bi(x,C,F)}this.compile=function(x,C,F=null){F===null&&(F=x),u=qe.get(F),u.init(C),v.push(u),F.traverseVisible(function(A){A.isLight&&A.layers.test(C.layers)&&(u.pushLight(A),A.castShadow&&u.pushShadow(A))}),x!==F&&x.traverseVisible(function(A){A.isLight&&A.layers.test(C.layers)&&(u.pushLight(A),A.castShadow&&u.pushShadow(A))}),u.setupLights();const D=new Set;return x.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const B=A.material;if(B)if(Array.isArray(B))for(let W=0;W<B.length;W++){const ee=B[W];Be(ee,F,A),D.add(ee)}else Be(B,F,A),D.add(B)}),v.pop(),u=null,D},this.compileAsync=function(x,C,F=null){const D=this.compile(x,C,F);return new Promise(A=>{function B(){if(D.forEach(function(W){Oe.get(W).currentProgram.isReady()&&D.delete(W)}),D.size===0){A(x);return}setTimeout(B,10)}Ge.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let Qe=null;function yt(x){Qe&&Qe(x)}function Yt(){qt.stop()}function Cn(){qt.start()}const qt=new oc;qt.setAnimationLoop(yt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(x){Qe=x,L.setAnimationLoop(x),x===null?qt.stop():qt.start()},L.addEventListener("sessionstart",Yt),L.addEventListener("sessionend",Cn),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(C),C=L.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,C,N),u=qe.get(x,v.length),u.init(C),v.push(u),Se.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ne.setFromProjectionMatrix(Se),ye=this.localClippingEnabled,de=pe.init(this.clippingPlanes,ye),m=be.get(x,y.length),m.init(),y.push(m),L.enabled===!0&&L.isPresenting===!0){const B=S.xr.getDepthSensingMesh();B!==null&&Hn(B,C,-1/0,S.sortObjects)}Hn(x,C,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ue,U),Xe=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Xe&&Re.addToRenderList(m,x),this.info.render.frame++,de===!0&&pe.beginShadows();const F=u.state.shadowsArray;Ee.render(F,x,C),de===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=m.opaque,A=m.transmissive;if(u.setupLights(),C.isArrayCamera){const B=C.cameras;if(A.length>0)for(let W=0,ee=B.length;W<ee;W++){const K=B[W];Rs(D,A,x,K)}Xe&&Re.render(x);for(let W=0,ee=B.length;W<ee;W++){const K=B[W];As(m,x,K,K.viewport)}}else A.length>0&&Rs(D,A,x,C),Xe&&Re.render(x),As(m,x,C);N!==null&&(P.updateMultisampleRenderTarget(N),P.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(S,x,C),Ze.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(u=v[v.length-1],de===!0&&pe.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Hn(x,C,F,D){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ne.intersectsSprite(x)){D&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Se);const W=se.update(x),ee=x.material;ee.visible&&m.push(x,W,ee,F,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ne.intersectsObject(x))){const W=se.update(x),ee=x.material;if(D&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),Ne.copy(W.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(Se)),Array.isArray(ee)){const K=W.groups;for(let he=0,me=K.length;he<me;he++){const le=K[he],Pe=ee[le.materialIndex];Pe&&Pe.visible&&m.push(x,W,Pe,F,Ne.z,le)}}else ee.visible&&m.push(x,W,ee,F,Ne.z,null)}}const B=x.children;for(let W=0,ee=B.length;W<ee;W++)Hn(B[W],C,F,D)}function As(x,C,F,D){const A=x.opaque,B=x.transmissive,W=x.transparent;u.setupLightsView(F),de===!0&&pe.setGlobalState(S.clippingPlanes,F),D&&Ue.viewport(I.copy(D)),A.length>0&&os(A,C,F),B.length>0&&os(B,C,F),W.length>0&&os(W,C,F),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Rs(x,C,F,D){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[D.id]===void 0&&(u.state.transmissionRenderTarget[D.id]=new Ut(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Wt:yn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const B=u.state.transmissionRenderTarget[D.id],W=D.viewport||I;B.setSize(W.z,W.w);const ee=S.getRenderTarget();S.setRenderTarget(B),S.getClearColor(j),oe=S.getClearAlpha(),oe<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Re.render(F);const K=S.toneMapping;S.toneMapping=Vn;const he=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),u.setupLightsView(D),de===!0&&pe.setGlobalState(S.clippingPlanes,D),os(x,F,D),P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let le=0,Pe=C.length;le<Pe;le++){const Ye=C[le],Ke=Ye.object,ft=Ye.geometry,Ve=Ye.material,De=Ye.group;if(Ve.side===rn&&Ke.layers.test(D.layers)){const It=Ve.side;Ve.side=Gt,Ve.needsUpdate=!0,zr(Ke,F,D,ft,Ve,De),Ve.side=It,Ve.needsUpdate=!0,me=!0}}me===!0&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B))}S.setRenderTarget(ee),S.setClearColor(j,oe),he!==void 0&&(D.viewport=he),S.toneMapping=K}function os(x,C,F){const D=C.isScene===!0?C.overrideMaterial:null;for(let A=0,B=x.length;A<B;A++){const W=x[A],ee=W.object,K=W.geometry,he=D===null?W.material:D,me=W.group;ee.layers.test(F.layers)&&zr(ee,C,F,K,he,me)}}function zr(x,C,F,D,A,B){x.onBeforeRender(S,C,F,D,A,B),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),A.onBeforeRender(S,C,F,D,x,B),A.transparent===!0&&A.side===rn&&A.forceSinglePass===!1?(A.side=Gt,A.needsUpdate=!0,S.renderBufferDirect(F,C,D,A,x,B),A.side=Gn,A.needsUpdate=!0,S.renderBufferDirect(F,C,D,A,x,B),A.side=rn):S.renderBufferDirect(F,C,D,A,x,B),x.onAfterRender(S,C,F,D,A,B)}function bi(x,C,F){C.isScene!==!0&&(C=it);const D=Oe.get(x),A=u.state.lights,B=u.state.shadowsArray,W=A.state.version,ee=Ae.getParameters(x,A.state,B,C,F),K=Ae.getProgramCacheKey(ee);let he=D.programs;D.environment=x.isMeshStandardMaterial?C.environment:null,D.fog=C.fog,D.envMap=(x.isMeshStandardMaterial?Y:b).get(x.envMap||D.environment),D.envMapRotation=D.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,he===void 0&&(x.addEventListener("dispose",Me),he=new Map,D.programs=he);let me=he.get(K);if(me!==void 0){if(D.currentProgram===me&&D.lightsStateVersion===W)return w(x,ee),me}else ee.uniforms=Ae.getUniforms(x),x.onBeforeCompile(ee,S),me=Ae.acquireProgram(ee,K),he.set(K,me),D.uniforms=ee.uniforms;const le=D.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(le.clippingPlanes=pe.uniform),w(x,ee),D.needsLights=J(x),D.lightsStateVersion=W,D.needsLights&&(le.ambientLightColor.value=A.state.ambient,le.lightProbe.value=A.state.probe,le.directionalLights.value=A.state.directional,le.directionalLightShadows.value=A.state.directionalShadow,le.spotLights.value=A.state.spot,le.spotLightShadows.value=A.state.spotShadow,le.rectAreaLights.value=A.state.rectArea,le.ltc_1.value=A.state.rectAreaLTC1,le.ltc_2.value=A.state.rectAreaLTC2,le.pointLights.value=A.state.point,le.pointLightShadows.value=A.state.pointShadow,le.hemisphereLights.value=A.state.hemi,le.directionalShadowMap.value=A.state.directionalShadowMap,le.directionalShadowMatrix.value=A.state.directionalShadowMatrix,le.spotShadowMap.value=A.state.spotShadowMap,le.spotLightMatrix.value=A.state.spotLightMatrix,le.spotLightMap.value=A.state.spotLightMap,le.pointShadowMap.value=A.state.pointShadowMap,le.pointShadowMatrix.value=A.state.pointShadowMatrix),D.currentProgram=me,D.uniformsList=null,me}function sl(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=lr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function w(x,C){const F=Oe.get(x);F.outputColorSpace=C.outputColorSpace,F.batching=C.batching,F.batchingColor=C.batchingColor,F.instancing=C.instancing,F.instancingColor=C.instancingColor,F.instancingMorph=C.instancingMorph,F.skinning=C.skinning,F.morphTargets=C.morphTargets,F.morphNormals=C.morphNormals,F.morphColors=C.morphColors,F.morphTargetsCount=C.morphTargetsCount,F.numClippingPlanes=C.numClippingPlanes,F.numIntersection=C.numClipIntersection,F.vertexAlphas=C.vertexAlphas,F.vertexTangents=C.vertexTangents,F.toneMapping=C.toneMapping}function $(x,C,F,D,A){C.isScene!==!0&&(C=it),P.resetTextureUnits();const B=C.fog,W=D.isMeshStandardMaterial?C.environment:null,ee=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Li,K=(D.isMeshStandardMaterial?Y:b).get(D.envMap||W),he=D.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,me=!!F.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),le=!!F.morphAttributes.position,Pe=!!F.morphAttributes.normal,Ye=!!F.morphAttributes.color;let Ke=Vn;D.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ke=S.toneMapping);const ft=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ve=ft!==void 0?ft.length:0,De=Oe.get(D),It=u.state.lights;if(de===!0&&(ye===!0||x!==M)){const dn=x===M&&D.id===E;pe.setState(D,x,dn)}let nt=!1;D.version===De.__version?(De.needsLights&&De.lightsStateVersion!==It.state.version||De.outputColorSpace!==ee||A.isBatchedMesh&&De.batching===!1||!A.isBatchedMesh&&De.batching===!0||A.isBatchedMesh&&De.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&De.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&De.instancing===!1||!A.isInstancedMesh&&De.instancing===!0||A.isSkinnedMesh&&De.skinning===!1||!A.isSkinnedMesh&&De.skinning===!0||A.isInstancedMesh&&De.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&De.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&De.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&De.instancingMorph===!1&&A.morphTexture!==null||De.envMap!==K||D.fog===!0&&De.fog!==B||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==pe.numPlanes||De.numIntersection!==pe.numIntersection)||De.vertexAlphas!==he||De.vertexTangents!==me||De.morphTargets!==le||De.morphNormals!==Pe||De.morphColors!==Ye||De.toneMapping!==Ke||De.morphTargetsCount!==Ve)&&(nt=!0):(nt=!0,De.__version=D.version);let Ot=De.currentProgram;nt===!0&&(Ot=bi(D,C,A));let vn=!1,Ft=!1,Pn=!1;const pt=Ot.getUniforms(),hn=De.uniforms;if(Ue.useProgram(Ot.program)&&(vn=!0,Ft=!0,Pn=!0),D.id!==E&&(E=D.id,Ft=!0),vn||M!==x){Ue.buffers.depth.getReversed()?(ge.copy(x.projectionMatrix),bu(ge),wu(ge),pt.setValue(H,"projectionMatrix",ge)):pt.setValue(H,"projectionMatrix",x.projectionMatrix),pt.setValue(H,"viewMatrix",x.matrixWorldInverse);const ii=pt.map.cameraPosition;ii!==void 0&&ii.setValue(H,we.setFromMatrixPosition(x.matrixWorld)),$e.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&pt.setValue(H,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ft=!0,Pn=!0)}if(A.isSkinnedMesh){pt.setOptional(H,A,"bindMatrix"),pt.setOptional(H,A,"bindMatrixInverse");const dn=A.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),pt.setValue(H,"boneTexture",dn.boneTexture,P))}A.isBatchedMesh&&(pt.setOptional(H,A,"batchingTexture"),pt.setValue(H,"batchingTexture",A._matricesTexture,P),pt.setOptional(H,A,"batchingIdTexture"),pt.setValue(H,"batchingIdTexture",A._indirectTexture,P),pt.setOptional(H,A,"batchingColorTexture"),A._colorsTexture!==null&&pt.setValue(H,"batchingColorTexture",A._colorsTexture,P));const un=F.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&ze.update(A,F,Ot),(Ft||De.receiveShadow!==A.receiveShadow)&&(De.receiveShadow=A.receiveShadow,pt.setValue(H,"receiveShadow",A.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(hn.envMap.value=K,hn.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&C.environment!==null&&(hn.envMapIntensity.value=C.environmentIntensity),Ft&&(pt.setValue(H,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&ie(hn,Pn),B&&D.fog===!0&&_e.refreshFogUniforms(hn,B),_e.refreshMaterialUniforms(hn,D,Q,fe,u.state.transmissionRenderTarget[x.id]),lr.upload(H,sl(De),hn,P)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(lr.upload(H,sl(De),hn,P),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&pt.setValue(H,"center",A.center),pt.setValue(H,"modelViewMatrix",A.modelViewMatrix),pt.setValue(H,"normalMatrix",A.normalMatrix),pt.setValue(H,"modelMatrix",A.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const dn=D.uniformsGroups;for(let ii=0,si=dn.length;ii<si;ii++){const Wh=dn[ii];G.update(Wh,Ot),G.bind(Wh,Ot)}}return Ot}function ie(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function J(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,C,F){Oe.get(x.texture).__webglTexture=C,Oe.get(x.depthTexture).__webglTexture=F;const D=Oe.get(x);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=F===void 0,D.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const F=Oe.get(x);F.__webglFramebuffer=C,F.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,F=0){N=x,R=C,T=F;let D=!0,A=null,B=!1,W=!1;if(x){const K=Oe.get(x);if(K.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(H.FRAMEBUFFER,null),D=!1;else if(K.__webglFramebuffer===void 0)P.setupRenderTarget(x);else if(K.__hasExternalTextures)P.rebindTextures(x,Oe.get(x.texture).__webglTexture,Oe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const le=x.depthTexture;if(K.__boundDepthTexture!==le){if(le!==null&&Oe.has(le)&&(x.width!==le.image.width||x.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(x)}}const he=x.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(W=!0);const me=Oe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(me[C])?A=me[C][F]:A=me[C],B=!0):x.samples>0&&P.useMultisampledRTT(x)===!1?A=Oe.get(x).__webglMultisampledFramebuffer:Array.isArray(me)?A=me[F]:A=me,I.copy(x.viewport),z.copy(x.scissor),V=x.scissorTest}else I.copy(te).multiplyScalar(Q).floor(),z.copy(xe).multiplyScalar(Q).floor(),V=Le;if(Ue.bindFramebuffer(H.FRAMEBUFFER,A)&&D&&Ue.drawBuffers(x,A),Ue.viewport(I),Ue.scissor(z),Ue.setScissorTest(V),B){const K=Oe.get(x.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+C,K.__webglTexture,F)}else if(W){const K=Oe.get(x.texture),he=C||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.__webglTexture,F||0,he)}E=-1},this.readRenderTargetPixels=function(x,C,F,D,A,B,W){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Oe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&W!==void 0&&(ee=ee[W]),ee){Ue.bindFramebuffer(H.FRAMEBUFFER,ee);try{const K=x.texture,he=K.format,me=K.type;if(!$e.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-D&&F>=0&&F<=x.height-A&&H.readPixels(C,F,D,A,ke.convert(he),ke.convert(me),B)}finally{const K=N!==null?Oe.get(N).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(x,C,F,D,A,B,W){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=Oe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&W!==void 0&&(ee=ee[W]),ee){const K=x.texture,he=K.format,me=K.type;if(!$e.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=x.width-D&&F>=0&&F<=x.height-A){Ue.bindFramebuffer(H.FRAMEBUFFER,ee);const le=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.bufferData(H.PIXEL_PACK_BUFFER,B.byteLength,H.STREAM_READ),H.readPixels(C,F,D,A,ke.convert(he),ke.convert(me),0);const Pe=N!==null?Oe.get(N).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,Pe);const Ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Eu(H,Ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,B),H.deleteBuffer(le),H.deleteSync(Ye),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,C=null,F=0){x.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,x=arguments[1]);const D=Math.pow(2,-F),A=Math.floor(x.image.width*D),B=Math.floor(x.image.height*D),W=C!==null?C.x:0,ee=C!==null?C.y:0;P.setTexture2D(x,0),H.copyTexSubImage2D(H.TEXTURE_2D,F,0,0,W,ee,A,B),Ue.unbindTexture()},this.copyTextureToTexture=function(x,C,F=null,D=null,A=0){x.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1],C=arguments[2],A=arguments[3]||0,F=null);let B,W,ee,K,he,me,le,Pe,Ye;const Ke=x.isCompressedTexture?x.mipmaps[A]:x.image;F!==null?(B=F.max.x-F.min.x,W=F.max.y-F.min.y,ee=F.isBox3?F.max.z-F.min.z:1,K=F.min.x,he=F.min.y,me=F.isBox3?F.min.z:0):(B=Ke.width,W=Ke.height,ee=Ke.depth||1,K=0,he=0,me=0),D!==null?(le=D.x,Pe=D.y,Ye=D.z):(le=0,Pe=0,Ye=0);const ft=ke.convert(C.format),Ve=ke.convert(C.type);let De;C.isData3DTexture?(P.setTexture3D(C,0),De=H.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(P.setTexture2DArray(C,0),De=H.TEXTURE_2D_ARRAY):(P.setTexture2D(C,0),De=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,C.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,C.unpackAlignment);const It=H.getParameter(H.UNPACK_ROW_LENGTH),nt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ot=H.getParameter(H.UNPACK_SKIP_PIXELS),vn=H.getParameter(H.UNPACK_SKIP_ROWS),Ft=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ke.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,K),H.pixelStorei(H.UNPACK_SKIP_ROWS,he),H.pixelStorei(H.UNPACK_SKIP_IMAGES,me);const Pn=x.isDataArrayTexture||x.isData3DTexture,pt=C.isDataArrayTexture||C.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const hn=Oe.get(x),un=Oe.get(C),dn=Oe.get(hn.__renderTarget),ii=Oe.get(un.__renderTarget);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,dn.__webglFramebuffer),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<ee;si++)Pn&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.get(x).__webglTexture,A,me+si),x.isDepthTexture?(pt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.get(C).__webglTexture,A,Ye+si),H.blitFramebuffer(K,he,B,W,le,Pe,B,W,H.DEPTH_BUFFER_BIT,H.NEAREST)):pt?H.copyTexSubImage3D(De,A,le,Pe,Ye+si,K,he,B,W):H.copyTexSubImage2D(De,A,le,Pe,Ye+si,K,he,B,W);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pt?x.isDataTexture||x.isData3DTexture?H.texSubImage3D(De,A,le,Pe,Ye,B,W,ee,ft,Ve,Ke.data):C.isCompressedArrayTexture?H.compressedTexSubImage3D(De,A,le,Pe,Ye,B,W,ee,ft,Ke.data):H.texSubImage3D(De,A,le,Pe,Ye,B,W,ee,ft,Ve,Ke):x.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,A,le,Pe,B,W,ft,Ve,Ke.data):x.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,A,le,Pe,Ke.width,Ke.height,ft,Ke.data):H.texSubImage2D(H.TEXTURE_2D,A,le,Pe,B,W,ft,Ve,Ke);H.pixelStorei(H.UNPACK_ROW_LENGTH,It),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,nt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ot),H.pixelStorei(H.UNPACK_SKIP_ROWS,vn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ft),A===0&&C.generateMipmaps&&H.generateMipmap(De),Ue.unbindTexture()},this.copyTextureToTexture3D=function(x,C,F=null,D=null,A=0){return x.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,D=arguments[1]||null,x=arguments[2],C=arguments[3],A=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,C,F,D,A)},this.initRenderTarget=function(x){Oe.get(x).__webglFramebuffer===void 0&&P.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?P.setTextureCube(x,0):x.isData3DTexture?P.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?P.setTexture2DArray(x,0):P.setTexture2D(x,0),Ue.unbindTexture()},this.resetState=function(){R=0,T=0,N=null,Ue.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class ya{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Oc extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sa extends Bt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vt,h=Vt,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fc extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new st,zc=new st,hr=[],Bc=new ui,eg=new st,Ms=new vt,ys=new Bi;class tg extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,eg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Bc.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),ys.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(i),e.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),zc.multiplyMatrices(i,Qi),Ms.matrixWorld=zc,Ms.raycast(e,hr);for(let o=0,a=hr.length;o<a;o++){const l=hr[o];l.instanceId=r,l.object=this,t.push(l)}hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(s*this.count),s,this.count,lo,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ur extends Qn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dr=new k,fr=new k,kc=new st,Ss=new $s,pr=new Bi,Ea=new k,Hc=new k;class mr extends wt{constructor(e=new Ht,t=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dr.fromBufferAttribute(t,s-1),fr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dr.distanceTo(fr);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;kc.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=h.getX(_),y=h.getX(_+1),v=gr(this,e,Ss,l,u,y);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),u=gr(this,e,Ss,l,_,m);u&&t.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=gr(this,e,Ss,l,_,_+1);u&&t.push(u)}if(this.isLineLoop){const _=gr(this,e,Ss,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gr(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(dr.fromBufferAttribute(o,s),fr.fromBufferAttribute(o,r),t.distanceSqToSegment(dr,fr,Ea,Hc)>i)return;Ea.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ea);if(!(l<e.near||l>e.far))return{distance:l,point:Hc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Gc=new k,Vc=new k;class ng extends mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Gc.fromBufferAttribute(t,s),Vc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gc.distanceTo(Vc);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ig extends mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sg extends Bt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _r extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=i/2;let u=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function y(){const S=new k,O=new k;let R=0;const T=(t-e)/i;for(let N=0;N<=r;N++){const E=[],M=N/r,I=M*(t-e)+e;for(let z=0;z<=s;z++){const V=z/s,j=V*l+a,oe=Math.sin(j),Z=Math.cos(j);O.x=I*oe,O.y=-M*i+m,O.z=I*Z,d.push(O.x,O.y,O.z),S.set(oe,T,Z).normalize(),f.push(S.x,S.y,S.z),p.push(V,1-M),E.push(g++)}_.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){const M=_[E][N],I=_[E+1][N],z=_[E+1][N+1],V=_[E][N+1];(e>0||E!==0)&&(h.push(M,I,V),R+=3),(t>0||E!==r-1)&&(h.push(I,z,V),R+=3)}c.addGroup(u,R,0),u+=R}function v(S){const O=g,R=new Ie,T=new k;let N=0;const E=S===!0?e:t,M=S===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=s;z++){const j=z/s*l+a,oe=Math.cos(j),Z=Math.sin(j);T.x=E*Z,T.y=m*M,T.z=E*oe,d.push(T.x,T.y,T.z),f.push(0,M,0),R.x=oe*.5+.5,R.y=Z*.5*M+.5,p.push(R.x,R.y),g++}for(let z=0;z<s;z++){const V=O+z,j=I+z;S===!0?h.push(j,j+1,V):h.push(j+1,j,V),N+=3}c.addGroup(u,N,S===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ba extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new k,S=new k,O=new k;for(let R=0;R<t.length;R+=3)p(t[R+0],v),p(t[R+1],S),p(t[R+2],O),l(v,S,O,y)}function l(y,v,S,O){const R=O+1,T=[];for(let N=0;N<=R;N++){T[N]=[];const E=y.clone().lerp(S,N/R),M=v.clone().lerp(S,N/R),I=R-N;for(let z=0;z<=I;z++)z===0&&N===R?T[N][z]=E:T[N][z]=E.clone().lerp(M,z/I)}for(let N=0;N<R;N++)for(let E=0;E<2*(R-N)-1;E++){const M=Math.floor(E/2);E%2===0?(f(T[N][M+1]),f(T[N+1][M]),f(T[N][M])):(f(T[N][M+1]),f(T[N+1][M+1]),f(T[N+1][M]))}}function c(y){const v=new k;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(y),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const y=new k;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const S=m(y)/2/Math.PI+.5,O=u(y)/Math.PI+.5;o.push(S,1-O)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const v=o[y+0],S=o[y+2],O=o[y+4],R=Math.max(v,S,O),T=Math.min(v,S,O);R>.9&&T<.1&&(v<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),O<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const y=new k,v=new k,S=new k,O=new k,R=new Ie,T=new Ie,N=new Ie;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),R.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),O.copy(y).add(v).add(S).divideScalar(3);const I=m(O);_(R,M+0,y,I),_(T,M+2,v,I),_(N,M+4,S,I)}}function _(y,v,S,O){O<0&&y.x===1&&(o[v]=y.x-1),S.x===0&&S.z===0&&(o[v]=O/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.vertices,e.indices,e.radius,e.details)}}class wa extends ba{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class Ta extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,p=[],g=[],_=[],m=[];for(let u=0;u<=i;u++){const y=[],v=u/i;let S=0;u===0&&o===0?S=.5/t:u===i&&l===Math.PI&&(S=-.5/t);for(let O=0;O<=t;O++){const R=O/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(R+S,1-v),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const v=h[u][y+1],S=h[u][y],O=h[u+1][y],R=h[u+1][y+1];(u!==0||o>0)&&p.push(v,S,R),(u!==i-1||l<Math.PI)&&p.push(S,O,R)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Aa extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new k,d=new k,f=new k;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(_,m,y),o.push(m,u,y)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rg extends bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ra extends Qn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Os,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class og extends Qn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Os,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ag extends Qn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Os,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lg extends ur{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ca extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cg extends Ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pa=new st,Wc=new k,Xc=new k;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yc=new st,Es=new k,Da=new k;class hg extends $c{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),i.position.copy(Es),Da.copy(i.position),Da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Da),i.updateMatrixWorld(),s.makeTranslation(-Es.x,-Es.y,-Es.z),Yc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc)}}class ug extends Ca{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dg extends $c{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qc(){return performance.now()}const jc=new st;class mg{constructor(e,t,i=0,s=1/0){this.ray=new $s(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(e,t=!0,i=[]){return La(e,this,i,t),i.sort(Kc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)La(e[s],this,i,t);return i.sort(Kc),i}}function Kc(n,e){return n.distance-e.distance}function La(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)La(r[o],e,t,!0)}}class Zc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qc=new k;let xr,Ia;class gg extends wt{constructor(e=new k(0,0,1),t=new k(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",xr===void 0&&(xr=new Ht,xr.setAttribute("position",new Mt([0,0,0,0,1,0],3)),Ia=new _r(0,.5,1,5,1),Ia.translate(0,-.5,0)),this.position.copy(t),this.line=new mr(xr,new ur({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new vt(Ia,new ms({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Qc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Qc,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class _g extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);const Jc={type:"change"},Ua={type:"start"},eh={type:"end"},vr=new $s,th=new ei,xg=Math.cos(70*yu.DEG2RAD),Dt=new k,Kt=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Na=1e-6;class vg extends _g{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new $n,this._lastTargetPosition=new k,this._quat=new $n().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zc,this._sphericalDelta=new Zc,this._scale=1,this._panOffset=new k,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new k,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yg.bind(this),this._onPointerDown=Mg.bind(this),this._onPointerUp=Sg.bind(this),this._onContextMenu=Cg.bind(this),this._onMouseWheel=wg.bind(this),this._onKeyDown=Tg.bind(this),this._onTouchStart=Ag.bind(this),this._onTouchMove=Rg.bind(this),this._onMouseDown=Eg.bind(this),this._onMouseMove=bg.bind(this),this._interceptControlDown=Pg.bind(this),this._interceptControlUp=Dg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jc),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),s<-Math.PI?s+=Kt:s>Math.PI&&(s-=Kt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<xg?this.object.lookAt(this.target):(th.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(th,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Na||this._lastTargetPosition.distanceToSquared(this.target)>Na?(this.dispatchEvent(Jc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Mg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function yg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Sg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eh),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Eg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case wi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case wi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Ua)}function bg(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wg(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Ua),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(eh))}function Tg(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ag(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Ua)}function Rg(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function Cg(n){this.enabled!==!1&&n.preventDefault()}function Pg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Lg extends wt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ie(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ji=new k,nh=new st,ih=new st,sh=new k,rh=new k;class Ig{constructor(e={}){const t=this;let i,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),nh.copy(_.matrixWorldInverse),ih.multiplyMatrices(_.projectionMatrix,nh),h(g,g,_),p(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function h(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Ji.setFromMatrixPosition(g.matrixWorld),Ji.applyMatrix4(ih);const u=Ji.z>=-1&&Ji.z<=1&&g.layers.test(m.layers)===!0,y=g.element;y.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(t,_,m),y.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Ji.x*r+r)+"px,"+(-Ji.y*o+o)+"px)",y.parentNode!==l&&l.appendChild(y),g.onAfterRender(t,_,m));const v={distanceToCameraSquared:d(m,g)};a.objects.set(g,v)}for(let u=0,y=g.children.length;u<y;u++)h(g.children[u],_,m)}function d(g,_){return sh.setFromMatrixPosition(g.matrixWorld),rh.setFromMatrixPosition(_.matrixWorld),sh.distanceToSquared(rh)}function f(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=f(g).sort(function(u,y){if(u.renderOrder!==y.renderOrder)return y.renderOrder-u.renderOrder;const v=a.objects.get(u).distanceToCameraSquared,S=a.objects.get(y).distanceToCameraSquared;return v-S}),m=_.length;for(let u=0,y=_.length;u<y;u++)_[u].element.style.zIndex=m-u}}}class Ug extends Oc{constructor(){super();const e=new mi;e.deleteAttribute("uv");const t=new Ra({side:Gt}),i=new Ra,s=new ug(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new vt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new vt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new vt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new vt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new vt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new vt(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new vt(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new vt(e,es(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new vt(e,es(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new vt(e,es(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new vt(e,es(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new vt(e,es(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const u=new vt(e,es(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function es(n){const e=new ms;return e.color.setScalar(n),e}function Ng(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ht;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=oh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);const g=oh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function oh(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new an(o,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);a.setComponent(f+d,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const bs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:\`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}\`,fragmentShader:\`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}\`};class yi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Og=new ca(-1,1,1,-1,0,1);class Fg extends Ht{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const zg=new Fg;class Mr{constructor(e){this._mesh=new vt(zg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Og)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bg extends yi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Mr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ah extends yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class kg extends yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ie);this._width=i.width,this._height=i.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bg(bs),this.copyPass.material.blending=Rt,this.clock=new pg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ah!==void 0&&(o instanceof ah?i=!0:o instanceof kg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gg extends yi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const yr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new st},cameraProjectionMatrixInverse:{value:new st},cameraWorldMatrix:{value:new st},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:\`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}\`,fragmentShader:\`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}\`},Sr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:\`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}\`,fragmentShader:\`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}\`},Oa={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:\`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}\`,fragmentShader:\`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}\`};function Vg(n=5){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Wg(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=t[o],l=2*Math.PI*a/i,c=new k(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Sa(s,e,e);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}function Wg(n){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}const Er={defines:{SAMPLES:16,SAMPLE_VECTORS:lh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraProjectionMatrixInverse:{value:new st},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:\`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}\`,fragmentShader:\`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}\`};function lh(n,e,t){const i=Xg(n,e,t);let s="vec3[SAMPLES](";for(let r=0;r<n;r++){const o=i[r];s+=\`vec3(\${o.x}, \${o.y}, \${o.z})\${r<n-1?",":")"}\`}return s}function Xg(n,e,t){const i=[];for(let s=0;s<n;s++){const r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new k(Math.cos(r),Math.sin(r),o))}return i}class $g{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,f=l-d,p=c-d,g=e-f,_=t-p;let m,u;g>_?(m=1,u=0):(m=0,u=1);const y=g-m+h,v=_-u+h,S=g-1+2*h,O=_-1+2*h,R=l&255,T=c&255,N=this.perm[R+this.perm[T]]%12,E=this.perm[R+m+this.perm[T+u]]%12,M=this.perm[R+1+this.perm[T+1]]%12;let I=.5-g*g-_*_;I<0?i=0:(I*=I,i=I*I*this.dot(this.grad3[N],g,_));let z=.5-y*y-v*v;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[E],y,v));let V=.5-S*S-O*O;return V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[M],S,O)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a;const c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(h+d+f)*p,_=h-g,m=d-g,u=f-g,y=e-_,v=t-m,S=i-u;let O,R,T,N,E,M;y>=v?v>=S?(O=1,R=0,T=0,N=1,E=1,M=0):y>=S?(O=1,R=0,T=0,N=1,E=0,M=1):(O=0,R=0,T=1,N=1,E=0,M=1):v<S?(O=0,R=0,T=1,N=0,E=1,M=1):y<S?(O=0,R=1,T=0,N=0,E=1,M=1):(O=0,R=1,T=0,N=1,E=1,M=0);const I=y-O+p,z=v-R+p,V=S-T+p,j=y-N+2*p,oe=v-E+2*p,Z=S-M+2*p,fe=y-1+3*p,Q=v-1+3*p,ue=S-1+3*p,U=h&255,te=d&255,xe=f&255,Le=this.perm[U+this.perm[te+this.perm[xe]]]%12,ne=this.perm[U+O+this.perm[te+R+this.perm[xe+T]]]%12,de=this.perm[U+N+this.perm[te+E+this.perm[xe+M]]]%12,ye=this.perm[U+1+this.perm[te+1+this.perm[xe+1]]]%12;let ge=.6-y*y-v*v-S*S;ge<0?s=0:(ge*=ge,s=ge*ge*this.dot3(this.grad3[Le],y,v,S));let Se=.6-I*I-z*z-V*V;Se<0?r=0:(Se*=Se,r=Se*Se*this.dot3(this.grad3[ne],I,z,V));let we=.6-j*j-oe*oe-Z*Z;we<0?o=0:(we*=we,o=we*we*this.dot3(this.grad3[de],j,oe,Z));let Ne=.6-fe*fe-Q*Q-ue*ue;return Ne<0?a=0:(Ne*=Ne,a=Ne*Ne*this.dot3(this.grad3[ye],fe,Q,ue)),32*(s+r+o+a)}noise4d(e,t,i,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,f,p,g;const _=(e+t+i+s)*l,m=Math.floor(e+_),u=Math.floor(t+_),y=Math.floor(i+_),v=Math.floor(s+_),S=(m+u+y+v)*c,O=m-S,R=u-S,T=y-S,N=v-S,E=e-O,M=t-R,I=i-T,z=s-N,V=E>M?32:0,j=E>I?16:0,oe=M>I?8:0,Z=E>z?4:0,fe=M>z?2:0,Q=I>z?1:0,ue=V+j+oe+Z+fe+Q,U=o[ue][0]>=3?1:0,te=o[ue][1]>=3?1:0,xe=o[ue][2]>=3?1:0,Le=o[ue][3]>=3?1:0,ne=o[ue][0]>=2?1:0,de=o[ue][1]>=2?1:0,ye=o[ue][2]>=2?1:0,ge=o[ue][3]>=2?1:0,Se=o[ue][0]>=1?1:0,we=o[ue][1]>=1?1:0,Ne=o[ue][2]>=1?1:0,it=o[ue][3]>=1?1:0,Xe=E-U+c,at=M-te+c,H=I-xe+c,ht=z-Le+c,Ge=E-ne+2*c,$e=M-de+2*c,Ue=I-ye+2*c,lt=z-ge+2*c,Oe=E-Se+3*c,P=M-we+3*c,b=I-Ne+3*c,Y=z-it+3*c,ae=E-1+4*c,ce=M-1+4*c,se=I-1+4*c,Ae=z-1+4*c,_e=m&255,be=u&255,qe=y&255,pe=v&255,Ee=a[_e+a[be+a[qe+a[pe]]]]%32,Re=a[_e+U+a[be+te+a[qe+xe+a[pe+Le]]]]%32,ze=a[_e+ne+a[be+de+a[qe+ye+a[pe+ge]]]]%32,Ce=a[_e+Se+a[be+we+a[qe+Ne+a[pe+it]]]]%32,et=a[_e+1+a[be+1+a[qe+1+a[pe+1]]]]%32;let ke=.6-E*E-M*M-I*I-z*z;ke<0?h=0:(ke*=ke,h=ke*ke*this.dot4(r[Ee],E,M,I,z));let Ze=.6-Xe*Xe-at*at-H*H-ht*ht;Ze<0?d=0:(Ze*=Ze,d=Ze*Ze*this.dot4(r[Re],Xe,at,H,ht));let G=.6-Ge*Ge-$e*$e-Ue*Ue-lt*lt;G<0?f=0:(G*=G,f=G*G*this.dot4(r[ze],Ge,$e,Ue,lt));let ve=.6-Oe*Oe-P*P-b*b-Y*Y;ve<0?p=0:(ve*=ve,p=ve*ve*this.dot4(r[Ce],Oe,P,b,Y));let L=.6-ae*ae-ce*ce-se*se-Ae*Ae;return L<0?g=0:(L*=L,g=L*L*this.dot4(r[et],ae,ce,se,Ae)),27*(h+d+f+p+g)}}class bn extends yi{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ut(this.width,this.height,{type:Wt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},yr.defines),uniforms:Bn.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,blending:Rt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new og,this.normalMaterial.blending=Rt,this.pdMaterial=new bt({defines:Object.assign({},Er.defines),uniforms:Bn.clone(Er.uniforms),vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},Sr.defines),uniforms:Bn.clone(Sr.uniforms),vertexShader:Sr.vertexShader,fragmentShader:Sr.fragmentShader,blending:Rt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:Bn.clone(bs.uniforms),vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xr,blendDst:as,blendEquation:fn,blendSrcAlpha:Wr,blendDstAlpha:as,blendEquationAlpha:fn}),this.blendMaterial=new bt({uniforms:Bn.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:hl,blendSrc:Xr,blendDst:as,blendEquation:fn,blendSrcAlpha:Wr,blendDstAlpha:as,blendEquationAlpha:fn}),this.fsQuad=new Mr(null),this.originalClearColor=new je,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new _a,this.depthTexture.format=ci,this.depthTexture.type=li,this.normalRenderTarget=new Ut(this.width,this.height,{minFilter:Vt,magFilter:Vt,type:Wt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=lh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case bn.OUTPUT.Off:break;case bn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Rt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){const t=new $g,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Sa(s,e,e,on,yn);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}}bn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};class ti extends yi{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new je(1,1,1),this.hiddenEdgeColor=new je(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Ut(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Uc,this.depthMaterial.side=rn,this.depthMaterial.depthPacking=Tl,this.depthMaterial.blending=Rt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=rn,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Ut(this.resolution.x,this.resolution.y,{type:Wt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Ut(r,o,{type:Wt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Ut(r,o,{type:Wt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Ut(Math.round(r/2),Math.round(o/2),{type:Wt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Ut(r,o,{type:Wt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Ut(Math.round(r/2),Math.round(o/2),{type:Wt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=bs;this.copyUniforms=Bn.clone(c.uniforms),this.materialCopy=new bt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Rt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new je,this.oldClearAlpha=1,this.fsQuad=new Mr(null),this.tempPulseColor1=new je,this.tempPulseColor2=new je,this.textureMatrix=new st;function h(d,f){const p=f.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,p+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ti.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=ti.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=ti.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=ti.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new bt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ie(.5,.5)},textureMatrix:{value:null}},vertexShader:\`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}\`,fragmentShader:\`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}\`})}getEdgeDetectionMaterial(){return new bt({uniforms:{maskTexture:{value:null},texSize:{value:new Ie(.5,.5)},visibleEdgeColor:{value:new k(1,1,1)},hiddenEdgeColor:{value:new k(1,1,1)}},vertexShader:\`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}\`,fragmentShader:\`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}\`})}getSeperableBlurMaterial(e){return new bt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},kernelRadius:{value:1}},vertexShader:\`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}\`,fragmentShader:\`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}\`})}getOverlayMaterial(){return new bt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:\`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}\`,fragmentShader:\`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}\`,blending:Hr,depthTest:!1,depthWrite:!1,transparent:!0})}}ti.BlurDirectionX=new Ie(1,0),ti.BlurDirectionY=new Ie(0,1);const Yg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:\`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}\`,fragmentShader:\`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}\`};class qg extends yi{constructor(){super();const e=Yg;this.uniforms=Bn.clone(e.uniforms),this.material=new rg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Mr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ml&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const jg=new Set(["A","B","C","D","CNC"]),Kg=new Set(["room","personnelAirlock","materialAirlock","gowning"]),Zg=new Set(["personnel","material","waste"]),cn=n=>typeof n=="number"&&Number.isFinite(n),gt=n=>typeof n=="string"?n:"",Fa=n=>n&&typeof n=="object"?n:{},ts=n=>Array.isArray(n)?n.map(Fa):[],br=n=>Array.isArray(n)?n.filter(e=>typeof e=="string"):[];function Qg(n){const e=Fa(n),t=Fa(e.summary??e),i=ts(e.rooms).filter(r=>typeof r.name=="string"&&[r.xMin,r.xMax,r.yMin,r.yMax,r.z,r.height,r.area,r.pressure,r.pressureToOutside].every(cn)&&jg.has(gt(r.grade))).map(r=>({name:gt(r.name),floor:gt(r.floor),role:Kg.has(gt(r.role))?gt(r.role):"room",grade:gt(r.grade),regime:gt(r.regime),containment:r.containment===!0,xMin:r.xMin,xMax:r.xMax,yMin:r.yMin,yMax:r.yMax,z:r.z,height:r.height,area:r.area,pressure:r.pressure,relativeTo:gt(r.relativeTo),pressureToOutside:r.pressureToOutside,...cn(r.occupancy)?{occupancy:r.occupancy}:{},...cn(r.atexZone)?{atexZone:r.atexZone}:{},...typeof r.ignition=="string"&&r.ignition?{ignition:r.ignition}:{},equipment:br(r.equipment)}));if(i.length===0)return;const s=new Set([...i.map(r=>r.name),"outside"]);return{name:gt(t.name),source:gt(t.source),reason:gt(t.reason),minimumStep:cn(t.minimumStep)?t.minimumStep:NaN,stepSource:gt(t.stepSource),...cn(t.atexDistance)?{atexDistance:t.atexDistance}:{},...typeof t.envelope=="string"&&t.envelope?{envelope:t.envelope}:{},floorArea:cn(t.floorArea)?t.floorArea:NaN,occupancy:cn(t.occupancy)?t.occupancy:0,floors:ts(e.floors).filter(r=>cn(r.elevation)&&cn(r.height)).map(r=>({name:gt(r.name),elevation:r.elevation,height:r.height})),rooms:i,connections:ts(e.connections).filter(r=>s.has(gt(r.a))&&s.has(gt(r.b))&&cn(r.dP)).map(r=>({id:gt(r.id),a:gt(r.a),b:gt(r.b),type:r.type==="stair"||r.type==="lift"?r.type:"door",dP:r.dP})),flows:ts(e.flows).filter(r=>Zg.has(gt(r.kind))&&br(r.path).every(o=>s.has(o))).map(r=>({name:gt(r.name),kind:gt(r.kind),path:br(r.path),connected:r.connected!==!1,reason:gt(r.reason)})),shared:ts(e.shared).map(r=>({room:gt(r.room),flows:br(r.flows),reason:gt(r.reason)})),findings:ts(e.findings).map(r=>({id:gt(r.id),kind:gt(r.kind),a:gt(r.a),b:gt(r.b),value:cn(r.value)?r.value:NaN,limit:cn(r.limit)?r.limit:NaN,message:gt(r.message)}))}}const ch={A:{colour:6767065,css:"#6741d9",word:"Grade A -- critical zone"},B:{colour:1667522,css:"#1971c2",word:"Grade B -- background to A"},C:{colour:820633,css:"#0c8599",word:"Grade C"},D:{colour:3650125,css:"#37b24d",word:"Grade D"},CNC:{colour:8818326,css:"#868e96",word:"CNC -- controlled, not classified"}},Jg={personnel:{colour:1598635,css:"#1864ab",word:"personnel",lift:.6,dashed:!1,weight:1},material:{colour:15103744,css:"#e67700",word:"material (raw -> product)",lift:1.1,dashed:!1,weight:2},waste:{colour:8793756,css:"#862e9c",word:"waste",lift:1.6,dashed:!0,weight:1}},hh=["personnel","material","waste"],wr=4,uh={room:"room",personnelAirlock:"personnel airlock",materialAirlock:"material airlock",gowning:"gowning room"},dh=n=>n.role!=="room",za=n=>\`\${n>0?"+":""}\${Number(n.toFixed(2))} Pa\`;function e0(n,e){const t=dh(n)?\` · \${uh[n.role]} (\${n.regime})\`:"";return\`\${e?"⚠ ":""}\${n.name} · \${n.grade}\${t} · \${za(n.pressureToOutside)}\`}const Ba=(n,e,t)=>[n,t,-e];function t0(n){const e=new Map,t=new Set(n.rooms.map(i=>i.name));for(const i of n.findings)for(const s of[i.a,i.b])t.has(s)&&e.set(s,[...e.get(s)??[],i.message]);return e}function n0(n,e){const t=Math.max(n.xMin,e.xMin),i=Math.min(n.xMax,e.xMax),s=Math.max(n.yMin,e.yMin),r=Math.min(n.yMax,e.yMax);return i>=t&&r>=s?[(t+i)/2,(s+r)/2]:[((n.xMin+n.xMax)/2+(e.xMin+e.xMax)/2)/2,((n.yMin+n.yMax)/2+(e.yMin+e.yMax)/2)/2]}function i0(n,e){const t=(n.xMin+n.xMax)/2,i=(n.yMin+n.yMax)/2,s=[[n.xMin-e.x0,[n.xMin-wr,i]],[e.x1-n.xMax,[n.xMax+wr,i]],[n.yMin-e.y0,[t,n.yMin-wr]],[e.y1-n.yMax,[t,n.yMax+wr]]];return s.sort((r,o)=>r[0]-o[0]),s[0][1]}function s0(n,e){const t=new Map(e.rooms.map(o=>[o.name,o])),i=r0(e),s=o=>[(o.xMin+o.xMax)/2,(o.yMin+o.yMax)/2,o.z],r=[];for(let o=0;o<n.path.length;++o){const a=n.path[o],l=t.get(a);if(!l){const c=t.get(n.path[o===0?1:o-1]??"");if(c){const[h,d]=i0(c,i);r.push([h,d,c.z])}continue}if(o>0){const c=t.get(n.path[o-1]);if(c){const[h,d]=n0(c,l);r.push([h,d,c.z]),c.z!==l.z&&r.push([h,d,l.z])}}r.push(s(l))}return r}function r0(n){return{x0:Math.min(...n.rooms.map(e=>e.xMin)),x1:Math.max(...n.rooms.map(e=>e.xMax)),y0:Math.min(...n.rooms.map(e=>e.yMin)),y1:Math.max(...n.rooms.map(e=>e.yMax))}}function o0(n){const e=t0(n),t=n.rooms.map(o=>{const a=e.get(o.name)??[],l=[o.name,\`\${ch[o.grade].word} · \${uh[o.role]}\${o.regime?\` (\${o.regime})\`:""}\`,\`pressure \${za(o.pressureToOutside)} to outside\`+(o.relativeTo!=="outside"?\` (declared \${za(o.pressure)} vs \${o.relativeTo})\`:""),\`floor \${o.floor}, \${Number(o.area.toFixed(2))} m², \${o.height} m high\`,...o.containment?["containment: negative to its neighbours"]:[],...o.atexZone!==void 0?[\`hazardous area: zone \${o.atexZone}\`]:[],...o.ignition?[\`ignition source: \${o.ignition}\`]:[],...o.occupancy!==void 0?[\`occupancy \${o.occupancy}\`]:[],...o.equipment.length?[\`equipment: \${o.equipment.join(", ")}\`]:[],...a.map(c=>\`⚠ \${c}\`)];return{name:o.name,grade:o.grade,colour:ch[o.grade].colour,airlock:dh(o),containment:o.containment,center:Ba((o.xMin+o.xMax)/2,(o.yMin+o.yMax)/2,o.z+o.height/2),size:[o.xMax-o.xMin,o.height,o.yMax-o.yMin],label:e0(o,a.length>0),labelAt:Ba((o.xMin+o.xMax)/2,(o.yMin+o.yMax)/2,o.z+.15),tooltip:l,flagged:a.length>0}}),i=n.flows.map(o=>{const a=Jg[o.kind];return{name:o.name,kind:o.kind,colour:a.colour,dashed:a.dashed,weight:a.weight,broken:!o.connected,points:s0(o,n).map(([l,c,h])=>Ba(l,c,h+a.lift))}}),s=[1/0,0,1/0],r=[-1/0,0,-1/0];for(const o of t)s[0]=Math.min(s[0],o.center[0]-o.size[0]/2),r[0]=Math.max(r[0],o.center[0]+o.size[0]/2),r[1]=Math.max(r[1],o.center[1]+o.size[1]/2),s[2]=Math.min(s[2],o.center[2]-o.size[2]/2),r[2]=Math.max(r[2],o.center[2]+o.size[2]/2);return{name:n.name,...n.envelope?{envelope:n.envelope}:{},rooms:t,flows:i,min:s,max:r}}function a0(n,e){const t=(s,r,o)=>[o(s[0],r[0]),o(s[1],r[1]),o(s[2],r[2])],i=e.envelope?n.solids.map(s=>s.nonProcess&&s.id===e.envelope?{...s,shell:!0,tooltip:[...s.tooltip,"drawn as glass: the shell of the GMP interior drawn inside it"]}:s):n.solids;return{...n,solids:i,min:t(n.min,e.min,Math.min),max:t(n.max,e.max,Math.max),fitMin:t(n.fitMin,e.min,Math.min),fitMax:t(n.fitMax,e.max,Math.max)}}function l0(n,e){return e===n.racks-1?n.vesselsLastRack:n.vesselsPerRack}function c0(n){const e=[];for(let t=0;t<n.racks;t++){const i=t*(n.rackWidth+n.rackAisle),s=l0(n,t);for(let r=0;r<s;r++){const o=Math.floor(r/n.vesselsPerTier),a=r%n.vesselsPerTier;e.push({rack:t,tier:o,col:a,x:n.endMargin+n.vesselLength/2,y:i+(a+.5)*n.pitch,z:n.baseHeight+(o+.5)*n.tierPitch})}}return e}function h0(n){const e=[],t=(i,s)=>Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(s));return n.vesselsPerRack!==n.vesselsPerTier*n.tiers&&e.push("vesselsPerRack != vesselsPerTier x tiers"),n.vessels!==(n.racks-1)*n.vesselsPerRack+n.vesselsLastRack&&e.push("vessels != (racks-1) x vesselsPerRack + vesselsLastRack"),t(n.rackLength,n.vesselLength+2*n.endMargin)||e.push("rackLength != vesselLength + 2 endMargin"),t(n.rackWidth,n.vesselsPerTier*n.pitch)||e.push("rackWidth != vesselsPerTier x pitch"),t(n.rackHeight,n.baseHeight+n.tiers*n.tierPitch)||e.push("rackHeight != baseHeight + tiers x tierPitch"),t(n.envelopeLength,n.rackLength+n.loadingClearance)||e.push("envelopeLength != rackLength + loadingClearance"),t(n.envelopeWidth,n.racks*n.rackWidth+(n.racks-1)*n.rackAisle)||e.push("envelopeWidth != racks x rackWidth + (racks-1) x aisle"),t(n.envelopeHeight,n.rackHeight)||e.push("envelopeHeight != rackHeight"),(n.vesselOutsideDiameter>n.pitch+1e-9||n.vesselOutsideDiameter>n.tierPitch+1e-9)&&e.push("vessels interpenetrate (outside diameter above the pitch)"),e}const Tr=14,ka=.3,u0=4,d0=2.2,f0=3,Ha=12,fh=1e-6;function ns(n){return n===void 0||!Number.isFinite(n)?"unknown":n<=fh?"liquid":n>=1-fh?"vapour":"twoPhase"}const Ar={liquid:"liquid (vf = 0)",vapour:"vapour (vf = 1)",twoPhase:"two-phase (0 < vf < 1)",unknown:"phase not published"},Si={liquid:1667522,vapour:12723548,twoPhase:2853438,unknown:8818326};function p0(n){const e=n!=null&&Number.isFinite(n)?Math.max(0,n):0;return 1.2+2.4*Math.log10(1+e)}function m0(n){const e=n!=null&&Number.isFinite(n)?Math.max(0,n):0;return .1+.05*Math.log10(1+e)}function ph(n,e){return n==="batteryLimit"?\`battery limit (\${e})\`:n==="junction"?\`\${e} (junction)\`:n==="wallPenetration"?\`building wall (to \${e}, indoors)\`:n==="header"?\`\${e} (header)\`:e}function g0(n){return n.id??\`pipe:\${n.stream}\`}const _0=6;function x0(n){const e=ns(n.vf),t=n.F_mass!==void 0&&Number.isFinite(n.F_mass)?n.F_mass:null,i=[n.branch?\`\${n.stream} — branch to \${n.branch}\`:n.label?\`\${n.stream} (\${n.label})\`:n.stream,\`\${ph(n.fromKind,n.from)} → \${ph(n.toKind,n.to)}\`,Ar[e]];n.header&&(n.branches??0)>0&&i.push(\`header \${n.header}: \${n.branches} branches\`);const s=[];n.T!==void 0&&s.push(\`T \${n.T.toFixed(1)} K\`),n.P!==void 0&&s.push(\`P \${(n.P/1e5).toFixed(2)} bar\`),s.length&&i.push(s.join(" · ")),t!==null&&i.push(\`ṁ \${t.toPrecision(4)} kg/s\`);for(const[r,o]of[["leaves",n.fromPort],["lands on",n.toPort]])o&&i.push(\`\${r} port \${o.port} of \${o.item}\`+(o.origin==="convention"?"":\` (\${o.origin})\`));return i.push(\`length \${n.length.toFixed(1)} m (\${n.routedBy==="waypoints"?"declared waypoints":"routed on the rack"})\`),{id:g0(n),stream:n.stream,phase:e,points:n.route.map(([r,o,a])=>ut(r,o,a)),length:n.length,massFlow:t,...n.T!==void 0&&Number.isFinite(n.T)?{T:n.T}:{},...n.P!==void 0&&Number.isFinite(n.P)?{P:n.P}:{},...n.vf!==void 0&&Number.isFinite(n.vf)?{vf:n.vf}:{},ends:{fromKind:n.fromKind,from:n.from,toKind:n.toKind,to:n.to},routedBy:n.routedBy,...n.branch?{branch:n.branch}:{},radius:m0(t),speed:p0(t),tooltip:i}}const At={finding:3,item:2,other:1,zone:0};function v0(n,e=2){const t=n.map((r,o)=>({b:r,i:o})).sort((r,o)=>o.b.priority-r.b.priority||r.i-o.i),i=[],s=new Set;for(const{b:r}of t)!(r.w>0&&r.h>0)||!Number.isFinite(r.x)||!Number.isFinite(r.y)||i.some(a=>Math.abs(a.x-r.x)*2<a.w+r.w+2*e&&Math.abs(a.y-r.y)*2<a.h+r.h+2*e)||(i.push(r),s.add(r.key));return s}function mh(n,e,t,i,s,r=.15){const o=[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2],a=[Math.max(e[0]-n[0],1),Math.max(e[1]-n[1],1),Math.max(e[2]-n[2],1)],l=i*Math.PI/360,c=Math.atan(Math.tan(l)*Math.max(s,.001)),h=1+r;if(t==="plan"){const _=h*Math.max(a[0]/2/Math.tan(c),a[2]/2/Math.tan(l));return{position:[o[0],e[1]+_,o[2]+.001*_],target:[o[0],o[1],o[2]]}}if(t==="elevation"){const _=h*Math.max(a[0]/2/Math.tan(c),a[1]/2/Math.tan(l));return{position:[o[0],o[1],e[2]+_],target:o}}const f=h*Math.hypot(a[0],a[1],a[2])/2/Math.sin(Math.min(l,c)),p=[-.6,.7,.9],g=Math.hypot(p[0],p[1],p[2]);return{position:[o[0]+f*p[0]/g,o[1]+f*p[1]/g,o[2]+f*p[2]/g],target:o}}function ut(n,e,t){return[n,t,-e]}const M0=new Set(["separation","outsideArea","ignitionInZone","ignitionDownwind","noRoadAccess","buildingNotReached","weighbridgeOffRoad","gateOffRoad","exposedInZone","exposedDownwind","carParkReverseExit","singleEntrance","unbundedLiquid"]),y0=new Set(["roadInZone","roadDisconnected"]),S0=new Set(["routeReverses","turningAreaTooSmall","sharpCorner","cornersTooClose","wrongWay","routeMissesWeighbridge","routeMissesStop","routeNoGate"]);function E0(n,e,t){return n==="outsideArea"||n==="noRoadAccess"||n==="buildingNotReached"||n==="weighbridgeOffRoad"||n==="gateOffRoad"||n==="carParkReverseExit"||n==="singleEntrance"||n==="unbundedLiquid"?[e]:n==="ignitionInZone"||n==="exposedInZone"?[e,t.split("#zone")[0]??t]:[e,t]}function We(n){return Number.isFinite(n)?Math.abs(n)>=100?n.toFixed(0):n.toFixed(2):"?"}function b0(n,e,t,i){const s=[n.dx,n.dz,n.dy],r=ut(n.x,n.y,n.z+.5*n.dz),o=n.orientation==="alongX"?"x":n.orientation==="alongY"?"z":"y",a=n.nonProcess?\`\${n.kind} (non-process)\`:n.kind,l=n.footprintFrom==="declared"?"declared box":"own sizing",c=n.shape==="cylinder"?n.orientation==="vertical"?\`D \${We(n.dx)} m × H \${We(n.dz)} m\`:\`D \${We(n.orientation==="alongX"?n.dy:n.dx)} m × L \${We(n.orientation==="alongX"?n.dx:n.dy)} m\`:\`\${We(n.dx)} × \${We(n.dy)} × \${We(n.dz)} m\`,h=[n.id+(n.sector?\` (sector \${n.sector})\`:""),\`\${a} · \${c} · \${l}\`,\`at (\${We(n.x)}, \${We(n.y)}) m, base z \${We(n.z)} m\`];if(n.bank){const d=n.bank;h.push(\`bank: \${d.vessels} vessels x \${d.elementsPerVessel} elements, \${d.racks} rack\${d.racks===1?"":"s"} of \${d.tiers} tiers x \${d.vesselsPerTier}\`);for(const f of h0(d))h.push(\`BANK SHEET INCONSISTENT: \${f}\`)}else n.kind==="membraneBank"&&h.push("bank geometry not drawn: its design sheet was not read, or lacks a key (see the sheet); the engine's envelope box is shown");n.room&&h.push(\`indoors: in room \${n.room} of the GMP building, standing on its floor\`),n.release&&h.push(\`release source (zones \${n.release.zones.map(d=>d.zone).join(", ")||"none"})\`),n.ignition&&h.push(\`ignition source: \${n.ignition}\`),n.reason&&h.push(\`why: \${n.reason}\`),n.source&&h.push(\`source: \${n.source}\`),i&&h.push(i.road?i.onDeck?\`on road \${i.road} (it drives over the deck)\`:\`nearest road a gate reaches: \${i.road}, \${We(i.distance??NaN)} m\`:"no road a gate reaches");for(const d of t)h.push(\`FINDING: \${d}\`);return{id:n.id,kind:n.kind,sector:n.sector,shape:n.shape,axis:o,center:r,size:s,nonProcess:n.nonProcess,footprintFrom:n.footprintFrom,...n.bank?{bank:n.bank}:{},ignition:!!n.ignition,release:!!n.release,flagged:e,label:e?\`⚠ \${n.id}\`:n.id,tooltip:h}}const gh={0:{opacity:.45,edge:"solid"},1:{opacity:.25,edge:"wire"},2:{opacity:.12,edge:"dashed"}};function _h(n){if(!n||n.items.length===0)return null;const e=new Set,t=new Map;for(const U of n.findings)if(M0.has(U.kind))for(const te of E0(U.kind,U.a,U.b))e.add(te),t.set(te,[...t.get(te)??[],U.message]);const i=new Map((n.access??[]).map(U=>[U.item,U])),s=n.items.map(U=>b0(U,e.has(U.id),t.get(U.id)??[],i.get(U.id))),r=new Map(n.items.map(U=>[U.id,U])),o=new Map(s.map(U=>[U.id,U]));for(const U of n.pipes??[]){const te=[[U.fromPort,0,1],[U.toPort,U.route.length-1,U.route.length-2]];for(const[xe,Le,ne]of te){const de=xe?o.get(xe.item):void 0,ye=U.route[Le],ge=U.route[ne];if(!xe||!de||!ye||!ge)continue;const Se=ut(ye[0],ye[1],ye[2]),we=ut(ge[0],ge[1],ge[2]),Ne=[we[0]-Se[0],we[1]-Se[1],we[2]-Se[2]],it=Math.hypot(Ne[0],Ne[1],Ne[2]);it>0&&((de.ports??(de.ports=[])).push({stream:U.stream,port:xe.port,origin:xe.origin,role:xe.role,at:Se,dir:[Ne[0]/it,Ne[1]/it,Ne[2]/it]}),de.tooltip.push(\`port \${xe.port} (\${U.stream}): \${xe.role}\`+(xe.origin==="convention"?"":\` [\${xe.origin}]\`)))}}const a=[];for(const U of n.items)for(const te of U.release?.zones??[]){const xe=gh[te.zone]??gh[2];a.push({itemId:U.id,zone:te.zone,center:ut(U.x,U.y,U.z+.5*te.height),radius:te.radius,height:te.height,opacity:xe.opacity,edge:xe.edge,label:\`zone \${te.zone} · \${U.id}\`})}const l=n.areas.map(U=>({sector:U.sector,x0:U.xMin,x1:U.xMax,z0:-U.yMax,z1:-U.yMin,label:\`sector \${U.sector}\`})),c=n.plot,h=c?{sector:"",x0:c.xMin,x1:c.xMax,z0:-c.yMax,z1:-c.yMin,label:\`plot \${c.plotArea.toFixed(0)} m²\`}:null,d=[];for(const U of n.findings){if(U.kind!=="separation"&&U.kind!=="ignitionDownwind"&&U.kind!=="exposedDownwind")continue;const te=r.get(U.a),xe=r.get(U.b);if(!te||!xe)continue;const Le=te.z+.5*te.dz,ne=xe.z+.5*xe.dz;d.push({findingId:U.id,kind:U.kind,from:ut(te.x,te.y,Le),to:ut(xe.x,xe.y,ne),label:U.kind==="separation"?\`\${We(U.value)} m < \${We(U.limit)} m declared\`:\`downwind, \${We(U.value)} m\`})}const f=[1/0,0,1/0],p=[-1/0,-1/0,-1/0],g=U=>{for(let te=0;te<3;te++)f[te]=Math.min(f[te],U[te]),p[te]=Math.max(p[te],U[te])};for(const U of s)g([U.center[0]-U.size[0]/2,U.center[1]-U.size[1]/2,U.center[2]-U.size[2]/2]),g([U.center[0]+U.size[0]/2,U.center[1]+U.size[1]/2,U.center[2]+U.size[2]/2]);for(const U of a)g([U.center[0]-U.radius,U.center[1]-U.height/2,U.center[2]-U.radius]),g([U.center[0]+U.radius,U.center[1]+U.height/2,U.center[2]+U.radius]);for(const U of l)g([U.x0,0,U.z0]),g([U.x1,0,U.z1]);h&&(g([h.x0,0,h.z0]),g([h.x1,0,h.z1]));const _=(n.pipes??[]).map(x0),m=(n.junctions??[]).map(U=>({unit:U.unit,at:ut(U.x,U.y,U.z),label:\`\${U.unit} (\${U.type})\`}));let u=null;const y=n.pipeRack;if(y&&_.length>0){const U=(n.pipes??[]).map(Le=>Le.lane).filter(Le=>Le>=0),te=U.length?Math.floor(Math.max(...U)/y.lanesPerTier)+1:1,xe=P0(y.xStart,y.xEnd,n.rackCrossings??[]);u={x0:y.xStart,x1:y.xEnd,zc:-y.y,halfWidth:.5*y.lanesPerTier*y.laneSpacing,tiers:Array.from({length:te},(Le,ne)=>y.elevation+ne*y.tierSpacing),portals:xe,label:y.declared?"pipe rack":"pipe rack (engine default)"},g([u.x0,u.tiers[u.tiers.length-1],u.zc-u.halfWidth]),g([u.x1,0,u.zc+u.halfWidth])}for(const U of _)for(const te of U.points)g(te);const v=L0(n);for(const U of v)for(const te of U.points)g([te[0]-U.width/2,0,te[2]-U.width/2]),g([te[0]+U.width/2,0,te[2]+U.width/2]);const S=I0(n),O=U0(n);for(const U of O)g(U.from),g(U.to);const R=F0(n),T=z0(n),N=(n.turningAreas??[]).map(U=>({area:U.area,at:ut(U.x,U.y,0),radius:U.diameter/2,tooltip:[\`turning area \${U.area}: \${We(U.diameter)} m across\`,\`why: \${U.reason}\`]}));for(const U of N)g([U.at[0]-U.radius,0,U.at[2]-U.radius]),g([U.at[0]+U.radius,0,U.at[2]+U.radius]);const E=T0(n),M=A0(n);if(E)for(const[U,te]of E.runs)g(U),g(te);for(const U of M)g(U.outside);const I=R0(n);for(const U of I)g(U.top);const z=w0(n);for(const U of z){for(const[te,xe]of U.runs)g(te),g([xe[0],U.height,xe[2]]);U.pit&&(g([U.pit.at[0]-U.pit.sizeX/2,-U.pit.depth,U.pit.at[2]-U.pit.sizeZ/2]),g([U.pit.at[0]+U.pit.sizeX/2,0,U.pit.at[2]+U.pit.sizeZ/2]))}const V=C0(n),j=[1/0,1/0,1/0],oe=[-1/0,-1/0,-1/0],Z=U=>{for(let te=0;te<3;te++)j[te]=Math.min(j[te],U[te]),oe[te]=Math.max(oe[te],U[te])},fe=s.filter(U=>!U.nonProcess);for(const U of fe.length?fe:s)Z([U.center[0]-U.size[0]/2,U.center[1]-U.size[1]/2,U.center[2]-U.size[2]/2]),Z([U.center[0]+U.size[0]/2,U.center[1]+U.size[1]/2,U.center[2]+U.size[2]/2]);for(const U of _)for(const te of U.points)Z(te);for(const U of m)Z(U.at);for(const U of v)for(const te of U.points)Z([te[0]-U.width/2,0,te[2]-U.width/2]),Z([te[0]+U.width/2,0,te[2]+U.width/2]);j[1]=Math.min(j[1],0);let Q=null;if(n.wind){const U=n.wind,te=(U.from+180-U.planNorth)*Math.PI/180,xe=Math.sin(te),Le=Math.cos(te),ne=(f[0]+p[0])/2,de=-(f[2]+p[2])/2,ye=Math.max(p[0]-f[0],p[2]-f[2],1),ge=.75*ye,Se=.45*ye,we=Math.max(p[1],1)+2;Q={tail:ut(ne-xe*ge,de-Le*ge,we),head:ut(ne-xe*Se,de-Le*Se,we),label:\`wind from \${We(U.from)}° (true)\`},g(Q.tail),g(Q.head)}const ue=B0(n);return{solids:s,fence:E,bunds:z,crossings:M,unrouted:I,unroutedListed:V,roads:v,barriers:S,approaches:O,truckRoutes:R,carParks:T,turningAreas:N,windsocks:ue,zones:a,areas:l,plot:h,links:d,wind:Q,pipes:_,junctions:m,rack:u,min:f,max:p,fitMin:j,fitMax:oe}}function w0(n){return(n.bunds??[]).map(e=>{const t=e.outline.map(([l,c])=>ut(l,c,0)),i=t.map((l,c)=>[l,t[(c+1)%t.length]]),s=e.pit?{at:ut(e.pit.x,e.pit.y,0),sizeX:e.pit.length,sizeZ:e.pit.width,depth:e.pit.depth}:null,r=e.containment==="bund"?"bund":"impounding area",o=e.verdict==="inadequate",a=e.containment==="bund"?\`holds \${We(e.netVolume)} m³ = \${We(e.area)} m² × \${We(e.wallHeight)} m − \${We(e.displacedVolume)} m³ the enclosed footprints displace\`:\`holds \${We(e.netVolume)} m³ in its remote pit \`+(e.pit?\`(\${We(e.pit.length)} × \${We(e.pit.width)} × \${We(e.pit.depth)} m)\`:"");return{bund:e.bund,containment:e.containment,runs:i,height:e.wallHeight,pit:s,label:\`\${r} \${e.bund}\${o?" — SHORT":""}\`,flagged:o,tooltip:[\`\${r} \${e.bund} · \${e.verdict} (the engine's verdict)\`,a,\`requires \${We(e.requiredVolume)} m³: the \${e.governing} term on \${e.basis}\`+e.allowances.map(l=>\` + \${l.name} \${We(l.volume)} m³\`).join(""),\`encloses \${e.items.join(", ")}\`,\`\${e.containment==="bund"?"wall":"kerb"} \${We(e.wallHeight)} m; drain \${e.drain}\`,\`rule: \${e.ruleReason}\`,\`rule source: \${e.ruleSource}\`,\`why: \${e.reason}\`,\`source: \${e.source}\`,\`drawn as: a wall \${We(ka)} m thick on the engine's outline (the thickness is drawing)\`]}})}function T0(n){const e=n.fence;if(!e)return null;const t=n.fenceOpenings??[],i=[{side:"south",a:[e.xMin,e.yMin],b:[e.xMax,e.yMin],along:0},{side:"east",a:[e.xMax,e.yMin],b:[e.xMax,e.yMax],along:1},{side:"north",a:[e.xMin,e.yMax],b:[e.xMax,e.yMax],along:0},{side:"west",a:[e.xMin,e.yMin],b:[e.xMin,e.yMax],along:1}],s=[],r=[],o=(c,h)=>c.along===0?ut(h,c.a[1],0):ut(c.a[0],h,0);for(const c of i){const h=c.a[c.along],d=c.b[c.along],f=t.filter(_=>_.side===c.side).map(_=>{const m=c.along===0?_.x:_.y;return[m-_.width/2,m+_.width/2]}).sort((_,m)=>_[0]-m[0]);let p=h;const g=[];for(const[_,m]of f)_>p&&g.push([p,Math.min(_,d)]),p=Math.max(p,m);p<d&&g.push([p,d]);for(const[_,m]of g){if(m-_<1e-6)continue;s.push([o(c,_),o(c,m)]);const u=Math.max(1,Math.round((m-_)/f0));for(let y=0;y<=u;y++)r.push(o(c,_+(m-_)*y/u))}}const a=new Set,l=r.filter(c=>{const h=\`\${c[0].toFixed(3)},\${c[2].toFixed(3)}\`;return a.has(h)?!1:(a.add(h),!0)});return{runs:s,posts:l,height:d0,openings:t.map(c=>({gate:c.gate,at:ut(c.x,c.y,0),width:c.width})),tooltip:[\`fence · \${We(e.length)} m round (the engine's length)\`,\`the plot's boundary moved \${We(e.inset)} m inward\`+(e.insetDeclared?" (declared)":" (none declared: on the boundary)"),...t.map(c=>\`opens for gate \${c.gate}: \${We(c.width)} m on the \${c.side} side\`+(c.road?\` (road \${c.road})\`:"")),\`why: \${e.reason}\`,\`source: \${e.source}\`,"drawn as: chain-link on posts, its height and post spacing drawing, not data"]}}function A0(n){const e={south:[0,-1],north:[0,1],west:[-1,0],east:[1,0]};return(n.fenceCrossings??[]).map(t=>{const[i,s]=e[t.side]??[0,-1],r=-s,o=i,a=t.direction==="in"?"from":"to",l=t.labelDeclared?\`\${t.stream} \${a}: \${t.label}\`:\`\${t.stream}: \${t.direction==="in"?"origin":"destination"} NOT declared\`;return{stream:t.stream,direction:t.direction,at:ut(t.x,t.y,t.z),outside:ut(t.x+i*Ha,t.y+s*Ha,t.z),sign:ut(t.x+i*2+r*1.5,t.y+s*2+o*1.5,0),text:l,labelled:t.labelDeclared,tooltip:[\`\${t.stream} crosses the fence (\${t.direction==="in"?"inlet":"outlet"}), \${t.side} side, at (\${We(t.x)}, \${We(t.y)}) m, \${We(t.z)} m up\`,t.labelDeclared?\`\${a}: \${t.label}\`:\`\${a}: NOT declared (the engine announced it)\`,t.positionFrom==="declared"?"where the case placed the crossing":t.positionFrom==="waypoints"?"the end of the case's declared route":"the engine's stated default: where the pipe's rack lane meets the fence",\`drawn as: the pipeline carried \${We(Ha)} m outside the fence and a sign; the stub and the sign are drawing, not data\`]}})}function R0(n){const e=[];for(const t of n.notRouted??[]){const i=t.anchor;if(!i||t.solids)continue;const s=\`\${t.fromUnit?t.fromUnit:"a battery limit"} -> \${t.toUnit?t.toUnit:"a battery limit"}\`;e.push({stream:t.stream,at:ut(i[0],i[1],i[2]),top:ut(i[0],i[1],i[2]+u0),text:\`⚠ \${t.stream}: NOT routed\`,tooltip:[\`\${t.stream} (\${s}) has NO pipe: the engine could not route it\`,\`why: \${t.reason}\`,"marked at the end the layout reaches; the dashed stub is drawing, not a pipe"]})}return e}function C0(n){return(n.notRouted??[]).filter(e=>!e.anchor||e.solids).map(e=>({stream:e.stream,reason:e.reason,solids:!!e.solids,...e.indoor&&!e.anchor?{indoor:!0}:{}}))}function P0(n,e,t){const s=o=>t.some(a=>o>a.xMin-.6+1e-9&&o<a.xMax+.6-1e-9),r=[];for(let o=n;o<=e+1e-9;o+=_0)s(o)||r.push(o);(r.length===0||r[r.length-1]<e-1e-9)&&(s(e)||r.push(e));for(const o of t)for(const a of[o.xMin-.6,o.xMax+.6])a>=n-1e-9&&a<=e+1e-9&&!s(a)&&r.push(a);return[...new Set(r.map(o=>Math.round(o*1e6)/1e6))].sort((o,a)=>o-a)}function D0(n,e,t){const i=t.centreline;for(let s=0;s+1<i.length;s++){const[r,o]=i[s],[a,l]=i[s+1];if(n>=Math.min(r,a)-1e-6&&n<=Math.max(r,a)+1e-6&&e>=Math.min(o,l)-1e-6&&e<=Math.max(o,l)+1e-6)return!0}return!1}function L0(n){const e=n.roads??[],t=new Map;for(const i of n.findings)y0.has(i.kind)&&t.set(i.a,[...t.get(i.a)??[],i.message]);return e.map(i=>{const s=(h,d)=>!e.some(f=>f!==i&&D0(h,d,f)),[r,o]=i.centreline[0],[a,l]=i.centreline[i.centreline.length-1],c=t.get(i.road)??[];return{id:\`road:\${i.road}\`,road:i.road,width:i.width,points:i.centreline.map(([h,d])=>ut(h,d,0)),freeStart:s(r,o),freeEnd:s(a,l),disconnected:!i.fromEntrance,length:i.length,oneWay:!!i.oneWay,tooltip:[\`road \${i.road}\`,\`\${We(i.width)} m wide · \${We(i.length)} m of centre line (the engine's length)\`+(i.oneWay?" · ONE-WAY, in the order of its waypoints":"")+(i.cornerRadiusDeclared?\` · corners of \${We(i.cornerRadius??0)} m radius\`:""),...i.reason?[\`why: \${i.reason}\`]:[],...i.fromEntrance?[]:["no gate reaches it"],...c.map(h=>\`FINDING: \${h}\`)]}})}function I0(n){const e=[],t=new Map((n.roads??[]).map(i=>[i.road,i]));for(const i of n.items){if(!i.nonProcess||i.kind!=="gate")continue;const s=(n.access??[]).find(f=>f.item===i.id),r=s?.road?t.get(s.road):void 0;if(!s||!r||s.roadX===void 0||s.roadY===void 0)continue;let o=0,a=0;for(let f=0;f+1<r.centreline.length;f++){const[p,g]=r.centreline[f],[_,m]=r.centreline[f+1];if(s.roadX>=Math.min(p,_)-1e-6&&s.roadX<=Math.max(p,_)+1e-6&&s.roadY>=Math.min(g,m)-1e-6&&s.roadY<=Math.max(g,m)+1e-6){const u=Math.hypot(_-p,m-g)||1;o=(_-p)/u,a=(m-g)/u;break}}if(o===0&&a===0)continue;let l=-a,c=o;(i.x-s.roadX)*l+(i.y-s.roadY)*c<0&&(l=-l,c=-c);const h=r.width/2,d=1;e.push({gate:i.id,post:ut(s.roadX+l*(h+.4),s.roadY+c*(h+.4),d),end:ut(s.roadX-l*(h-.4),s.roadY-c*(h-.4),d)})}return e}function U0(n){return(n.fenceOpenings??[]).filter(e=>(e.approach??0)>1e-6&&e.approachX!==void 0&&e.approachY!==void 0).map(e=>({gate:e.gate,from:ut(e.approachX,e.approachY,0),to:ut(e.x,e.y,0),width:e.width}))}function N0(n,e,t=8){if(n.length<3)return n.map(s=>[s[0],s[1]]);const i=[[n[0][0],n[0][1]]];for(let s=1;s+1<n.length;s++){const[r,o]=n[s],[a,l]=n[s-1],[c,h]=n[s+1],d=Math.hypot(r-a,o-l),f=Math.hypot(c-r,h-o),p=(r-a)/d,g=(o-l)/d,_=(c-r)/f,m=(h-o)/f,u=p*_+g*m,y=Math.min(e(r,o),d/2,f/2);if(Math.abs(u)>.5||!(y>1e-6)){i.push([r,o]);continue}const v=r-p*y+_*y,S=o-g*y+m*y,O=r-p*y,R=o-g*y,T=r+_*y,N=o+m*y,E=Math.atan2(R-S,O-v);let I=Math.atan2(N-S,T-v)-E;for(;I>Math.PI;)I-=2*Math.PI;for(;I<-Math.PI;)I+=2*Math.PI;for(let z=0;z<=t;z++){const V=E+I*z/t;i.push([v+y*Math.cos(V),S+y*Math.sin(V)])}}return i.push([n[n.length-1][0],n[n.length-1][1]]),i}function O0(n,e,t,i,s,r,o,a=10){const l=o-Math.min(s,r)/2;if(!(l>1e-6))return[];const c=n+i[0]*s/2-t[0]*r/2,h=e+i[1]*s/2-t[1]*r/2,d=c-t[0]*l+i[0]*l,f=h-t[1]*l+i[1]*l,p=[c-t[0]*l,h-t[1]*l],g=[c+i[0]*l,h+i[1]*l],_=Math.atan2(p[1]-f,p[0]-d);let u=Math.atan2(g[1]-f,g[0]-d)-_;for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;const y=[[c,h]];for(let v=0;v<=a;v++){const S=_+u*v/a;y.push([d+l*Math.cos(S),f+l*Math.sin(S)])}return y}function F0(n){const e=new Map((n.roads??[]).map(s=>[s.road,s.width])),t=new Map;for(const s of n.findings)S0.has(s.kind)&&t.set(s.a,[...t.get(s.a)??[],s.message]);const i=n.designVehicle;return(n.truckRoutes??[]).map(s=>{const r=(n.routeCorners??[]).filter(p=>p.route===s.route),o=(p,g)=>r.find(_=>Math.abs(_.x-p)<1e-6&&Math.abs(_.y-g)<1e-6&&_.turn!=="reverse")?.radius??0,a=N0(s.path,o),l=a.map(([p,g])=>ut(p,g,.08)),c=[];for(let p=1;p+1<s.path.length;p++){const[g,_]=s.path[p],m=r.find(N=>Math.abs(N.x-g)<1e-6&&Math.abs(N.y-_)<1e-6);if(!m||m.turn==="reverse")continue;const[u,y]=s.path[p-1],[v,S]=s.path[p+1],O=Math.hypot(g-u,_-y),R=Math.hypot(v-g,S-_),T=O0(g,_,[(g-u)/O,(_-y)/O],[(v-g)/R,(S-_)/R],e.get(m.inRoad)??0,e.get(m.outRoad)??0,m.radius);T.length&&c.push(T.map(([N,E])=>ut(N,E,0)))}const h=[];let d=0;for(let p=1;p<a.length;p++)d+=Math.hypot(a[p][0]-a[p-1][0],a[p][1]-a[p-1][1]);for(let p=Tr/2;p<d;p+=Tr){const g=Rr(l,p),_=Rr(l,p+.5),m=Math.hypot(_[0]-g[0],_[2]-g[2]);m>1e-6&&h.push({at:g,dir:[(_[0]-g[0])/m,(_[2]-g[2])/m]})}const f=t.get(s.route)??[];return{route:s.route,verdict:s.verdict,length:s.length,points:l,fillets:c,arrows:h,tooltip:[\`truck route \${s.route}: \${s.from} -> \${s.to}, \${We(s.length)} m (the engine's length)\`,\`roads, in order: \${s.roads.join(" -> ")}\`,\`\${s.turns} turn(s), \${s.reversals} reversal(s); weighbridge: \${s.weighbridge||"none"}\`+(s.serves.length?\`; serves \${s.serves.join(", ")}\`:""),...r.filter(p=>p.turn!=="reverse").map(p=>\`\${p.turn} at (\${We(p.x)}, \${We(p.y)}) m: radius \${We(p.radius)} m, outer edge \${We(p.outerRadius)} m against \${We(p.required)} m\${p.ok?"":" -- TOO SHARP"}\`),...i?[\`design vehicle: \${We(i.turningDiameter)} m turning circle (\${i.source})\`]:[],s.verdict==="clear"?"verdict: clear -- no reversing, no corner too sharp":"verdict: ANNOUNCED",...f.map(p=>\`FINDING: \${p}\`),\`why: \${s.reason}\`,"drawn as: the engine's path, corners rounded to the declared radius; the arrows and the fillets are drawing"]}})}function z0(n){return(n.carParks??[]).map(e=>({item:e.item,exitsForward:e.exitsForward,bays:e.stalls.map(([t,i,s,r])=>({at:ut(t,i,0),dir:[s,-r],w:e.bayWidth,l:e.bayLength})),tooltip:[\`car park \${e.item}: \${e.bays} bays declared, \${e.capacity} fit (\${e.rows} row(s) of \${e.perRow}), \${We(e.area)} m²\`,\`bays \${We(e.bayWidth)} × \${We(e.bayLength)} m at \${We(e.angle)}°, aisle \${We(e.aisle)} m, \${e.arrangement}, entry \${e.entry}: cars leave \${e.exitsForward?"nose first":"REVERSING"}\`,\`why: \${e.reason}\`,\`source: \${e.source}\`]}))}function B0(n){const e=n.wind,t=[];for(const i of n.items){if(!i.nonProcess||i.kind!=="windsock")continue;const s=e?(e.from+180-e.planNorth)*Math.PI/180:0,r=Math.sin(s),o=Math.cos(s);t.push({item:i.id,top:ut(i.x,i.y,i.z+i.dz),dir:[r,-o]})}return t}function Rr(n,e){if(n.length===0)return[0,0,0];if(n.length===1)return[...n[0]];const t=[];let i=0;for(let r=1;r<n.length;r++){const o=n[r-1],a=n[r],l=Math.hypot(a[0]-o[0],a[1]-o[1],a[2]-o[2]);t.push(l),i+=l}if(!(i>0))return[...n[0]];let s=(e%i+i)%i;for(let r=0;r<t.length;r++){const o=t[r];if(s<=o||r===t.length-1){const a=o>0?Math.min(1,s/o):0,l=n[r],c=n[r+1];return[l[0]+a*(c[0]-l[0]),l[1]+a*(c[1]-l[1]),l[2]+a*(c[2]-l[2])]}s-=o}return[...n[n.length-1]]}function k0(){try{return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}const xh="choupo.layout3d.quality";function H0(n){return n.coarsePointer||n.deviceMemory!==void 0&&n.deviceMemory<=4||n.cores!==void 0&&n.cores<=2?"fast":"high"}function G0(){try{const n=window.localStorage.getItem(xh);if(n==="high"||n==="fast")return n}catch{}try{const n=navigator;return H0({coarsePointer:typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,deviceMemory:n.deviceMemory,cores:n.hardwareConcurrency})}catch{return"high"}}function V0(n){try{window.localStorage.setItem(xh,n)}catch{}}const Ga=15227148,W0=.09,X0=.45,Va=[.9,.6];function $0(n,e,t=!0){let i={...e},s=t,r=null,o=null,a=[];const l=new Map,c=()=>{o&&(o.visible=s);for(const d of a)d.visible=s;for(const[d,f]of l)f.visible=i[d];r?.redraw()};return{extend:d=>{r=d,l.clear(),a=[];const{THREE:f,world:p}=d;o=new f.Group,p.add(o);const g=u=>{const[y,v,S]=u.center,[O,R,T]=u.size,N=[y-O/2,y+O/2],E=[v-R/2,v+R/2],M=[S-T/2,S+T/2],I=(V,j,oe)=>new f.Vector3(N[V],E[j],M[oe]),z=[];for(const V of[0,1])for(const j of[0,1])z.push(I(0,V,j),I(1,V,j));for(const V of[0,1])for(const j of[0,1])z.push(I(V,0,j),I(V,1,j));for(const V of[0,1])for(const j of[0,1])z.push(I(V,j,0),I(V,j,1));return z};for(const u of n.rooms){const y=new f.Mesh(new f.BoxGeometry(u.size[0],u.size[1],u.size[2]),new f.MeshStandardMaterial({color:u.colour,transparent:!0,opacity:u.airlock?.22:.14,depthWrite:!1,side:f.DoubleSide,roughness:.9,metalness:0}));y.position.set(...u.center),y.userData.noAO=!0,o.add(y);const v=new f.Mesh(new f.BoxGeometry(u.size[0],.06,u.size[2]),new f.MeshStandardMaterial({color:u.colour,transparent:!0,opacity:.55,depthWrite:!1,roughness:.95,metalness:0}));v.position.set(u.center[0],u.center[1]-u.size[1]/2+.03,u.center[2]),v.userData.tooltip=u.tooltip,v.userData.noAO=!0,o.add(v),d.pickables.push(v);const S=new f.LineSegments(new f.BufferGeometry().setFromPoints(g(u)),u.airlock?new f.LineDashedMaterial({color:u.flagged?Ga:u.colour,dashSize:.5,gapSize:.35}):new f.LineBasicMaterial({color:u.flagged?Ga:u.colour}));u.airlock&&S.computeLineDistances(),o.add(S),a.push(d.label(u.label,u.labelAt,u.flagged?At.finding:At.item,u.flagged))}const _=new f.Vector3(0,1,0),m=(u,y,v,S,O)=>{const R=new f.Vector3(...y),T=new f.Vector3(...v),N=T.clone().sub(R),E=N.length();if(E<1e-6)return;const M=new f.Mesh(new f.CylinderGeometry(S,S,E,8),O);M.position.copy(R.clone().add(T).multiplyScalar(.5)),M.quaternion.copy(new f.Quaternion().setFromUnitVectors(_,N.normalize())),M.userData.noAO=!0,u.add(M)};for(const u of n.flows){let y=l.get(u.kind);y||(y=new f.Group,l.set(u.kind,y),p.add(y));const v=new f.MeshBasicMaterial({color:u.broken?Ga:u.colour}),S=W0*(u.weight>1?1.7:1);for(let O=0;O+1<u.points.length;++O){const R=u.points[O],T=u.points[O+1];if(u.dashed){const I=new f.Vector3(...R),z=new f.Vector3(...T),V=I.distanceTo(z);for(let j=0;j<V;j+=Va[0]+Va[1]){const oe=Math.min(V,j+Va[0]),Z=I.clone().lerp(z,j/V),fe=I.clone().lerp(z,oe/V);m(y,[Z.x,Z.y,Z.z],[fe.x,fe.y,fe.z],S,v)}}else m(y,R,T,S,v);const N=new f.Vector3(...R),E=new f.Vector3(...T),M=E.clone().sub(N);if(M.length()>1.2){const I=new f.Mesh(new f.CylinderGeometry(0,X0,1.1,12),v);I.position.copy(N.clone().add(E).multiplyScalar(.5)),I.quaternion.copy(new f.Quaternion().setFromUnitVectors(_,M.normalize())),I.userData.tooltip=[\`\${u.kind} flow "\${u.name}"\`,...u.broken?["⚠ a step of it crosses no declared door, stair or lift"]:[]],I.userData.noAO=!0,y.add(I),d.pickables.push(I)}}}c()},setFlows(d){i={...d},c()},setRooms(d){s=d,c()}}}const Y0=[{kind:"energy",dash:"9 3 2 3",opacity:1,label:"energy",meaning:"a heat link, not a pipe: energy crosses here, matter does not"},{kind:"tear",dash:null,opacity:1,mark:"cut",label:"recycle cut",meaning:"a recycle stream: a pipe like any other.  The break mark is where the sequential solver CUTS the loop -- it guesses this stream, solves round the loop and iterates until the guess and the answer agree (the tear declared in system/solverDict)"},{kind:"utility",dash:"7 4",opacity:.85,label:"utility",meaning:"a plant utility (steam header, cooling water, refrigerant), not process material"},{kind:"duty",dash:"2 3",opacity:1,colour:"#e8590c",label:"duty",meaning:"a utility DUTY served to a unit (dotted) -- orange heating, blue cooling"},{kind:"recipe",dash:"9 3 2 3 2 3",opacity:1,colour:"#20c997",label:"recipe transfer",meaning:"a batch recipe moving material between vessels at a scheduled instant (dash-dot-dot)"},{kind:"empty",dash:"3 6",opacity:.55,label:"empty",meaning:"this pipe carries no flow in the current run"},{kind:"process",dash:null,opacity:1,label:"process",meaning:"process material; the colour is its phase"}];new Map(Y0.map(n=>[n.kind,n]));function vh(){try{return typeof window>"u"?null:window.localStorage??null}catch{return null}}function Wa(n){try{return vh()?.getItem(n)??null}catch{return null}}function Xa(n,e){try{vh()?.setItem(n,e)}catch{}}function q0(n,e=!1){const t=Wa(n);return t==="1"?!0:t==="0"?!1:e}function j0(n){const e=Wa(n);return e==="1"||e==="0"}function K0(n,e){Xa(n,e?"1":"0")}const Z0="choupo.methods.controlsCollapsed",Zt=(n,e)=>({id:n,sizeKey:e.sizeKey??null,size:e.size??{min:0,max:0,default:0},collapsedKey:e.collapsedKey??null,defaultCollapsed:e.defaultCollapsed??!1});Zt("selectionCard",{collapsedKey:"choupo.panel.selectionCard.collapsed"}),Zt("bottomDock",{sizeKey:"choupo.panel.bottomDock.height",size:{min:140,max:1600,default:360},collapsedKey:"choupo.panel.bottomDock.collapsed"}),Zt("exploreRail",{sizeKey:"choupo.explore.railWidth",size:{min:200,max:460,default:240},collapsedKey:"choupo.explore.railCollapsed"}),Zt("catalogueBrowser",{sizeKey:"choupo.panel.catalogueBrowser.size",size:{min:260,max:620,default:420}}),Zt("controlRail",{sizeKey:"choupo.panel.controlRail.size",size:{min:220,max:460,default:260},collapsedKey:"choupo.control.railCollapsed"}),Zt("logRail",{sizeKey:"choupo.panel.logRail.size",size:{min:200,max:460,default:260},collapsedKey:"choupo.panel.logRail.collapsed"}),Zt("plotsRail",{sizeKey:"choupo.panel.plotsRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.plotsRail.collapsed"}),Zt("streamsRail",{sizeKey:"choupo.panel.streamsRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.streamsRail.collapsed"}),Zt("streamsSummary",{sizeKey:"choupo.panel.streamsSummary.size",size:{min:64,max:1600,default:240},collapsedKey:"choupo.panel.streamsSummary.collapsed"}),Zt("reportsRail",{sizeKey:"choupo.panel.reportsRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.reportsRail.collapsed"}),Zt("caseFilesRail",{sizeKey:"choupo.panel.caseFilesRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.caseFilesRail.collapsed"}),Zt("layoutTables",{sizeKey:"choupo.panel.layoutTables.size",size:{min:120,max:1600,default:340},collapsedKey:"choupo.panel.layoutTables.collapsed",defaultCollapsed:!0}),Zt("workflowOutline",{sizeKey:"choupo.panel.workflowOutline.size",size:{min:200,max:460,default:248},collapsedKey:"choupo.panel.workflowOutline.collapsed"}),Zt("methodKnobsRail",{sizeKey:"choupo.panel.methodKnobsRail.size",size:{min:240,max:520,default:300},collapsedKey:Z0});const Q0={legend:"choupo.layout.section.legend.collapsed",plot:"choupo.layout.section.plot.collapsed",roads:"choupo.layout.section.roads.collapsed",pipes:"choupo.layout.section.pipes.collapsed",findings:"choupo.layout.section.findings.collapsed",items:"choupo.layout.section.items.collapsed"},$a={layoutExportViewHeight:"choupo.layoutExport.viewHeight"};[{id:"legend",title:"How to read this view",defaultCollapsed:!0},{id:"plot",title:"Plot",defaultCollapsed:!1},{id:"roads",title:"Roads",defaultCollapsed:!1},{id:"findings",title:"Findings",defaultCollapsed:!1},{id:"pipes",title:"Pipe register",defaultCollapsed:!1},{id:"items",title:"Placed items",defaultCollapsed:!1}].map(n=>({...n,id:n.id,key:Q0[n.id]}));function J0(n,e){try{return n?.fullscreenEnabled===!0&&typeof e?.requestFullscreen=="function"?"api":"overlay"}catch{return"overlay"}}const Ya=240,Mh=24;function Cr(n,e,t){const i=Math.max(Ya,(Number.isFinite(e)?e:0)-Mh),s=Number.isFinite(n)&&n>0?n:t;return Math.round(Math.min(i,Math.max(Ya,s)))}function e_(n,e){return Cr(e-Math.max(0,n)-Mh,e,Ya)}const St={data:"choupo-layout-data",view:"choupo-layout-view",error:"choupo-layout-error",fit:"choupo-layout-fit",preset:"choupo-layout-preset",pipes:"choupo-layout-pipes",flow:"choupo-layout-flow",zones:"choupo-layout-zones",zoneLabels:"choupo-layout-zone-labels",quality:"choupo-layout-quality",full:"choupo-layout-full",resize:"choupo-layout-resize",stage:"choupo-layout-stage",building:"choupo-building-data",buildingToggle:"choupo-building"};function Et(n,e=4){if(!Number.isFinite(n))return"?";const t=Math.abs(n);return t!==0&&(t>=1e7||t<.001)?n.toExponential(e-1):Number(n.toPrecision(e)).toString()}function Pr(n,e){const t=Math.abs(n);return t>=1e6?\`\${Et(n/1e6,3)} M\${e}\`:t>=1e3?\`\${Et(n/1e3,3)} k\${e}\`:\`\${Et(n,3)} \${e}\`}const t_=["D","L","H","V","volume","A","Q_kW","power","W_shaft","shellID","tubeLength","nTubes","pressureDesign","weight"];function n_(n,e=4){const t=i=>{const s=t_.indexOf(i);return s<0?99:s};return n.map((i,s)=>({s:i,i:s})).filter(({s:i})=>i.unit!==""&&Number.isFinite(i.value)).sort((i,s)=>t(i.s.key)-t(s.s.key)||i.i-s.i).slice(0,e).map(({s:i})=>i)}function yh(n){const e=n.unit===""||n.unit.startsWith("[")?"":\` \${n.unit}\`;return\`\${n.key} = \${Et(n.value)}\${e}\`}function i_(n){const e=n?.summary;if(!e)return[];const t=[{label:"Items placed",value:String(e.placed),source:"layout.summary.placed"},{label:"Pipes routed",value:\`\${e.pipes} (\${Et(e.pipeLength,4)} m)\`,source:"layout.summary.pipes"}];return e.notRouted>0&&t.push({label:"Not routed",value:String(e.notRouted),source:"layout.summary.notRouted"}),t.push({label:"Layout findings",value:String(e.findings),source:"layout.summary.findings"}),n?.plot&&Number.isFinite(n.plot.plotArea)&&t.push({label:"Plot area",value:\`\${Et(n.plot.plotArea,4)} m²\`,source:"layout.plot.plotArea"}),t}const qa=14,s_=5;function Sh(n,e){return!!e?.sized&&!e.items[n.id]}function r_(n,e){const t=e?.items[n.id],i=[{label:"Kind",value:n.kind}];n.sector&&i.push({label:"Sector",value:n.sector}),t?.tagNo&&i.push({label:"Tag",value:t.tagNo}),t?.material&&i.push({label:"Material",value:t.material});const s=n.tooltip[1];s&&i.push({label:"Drawn as",value:s});const r=[];if(t){for(const o of t.sizing.filter(a=>Number.isFinite(a.value)).slice(0,qa))i.push({label:o.key,value:yh(o).slice(o.key.length+3)});if(t.sizing.length>qa&&r.push(\`\${t.sizing.length-qa} more rows on the design sheet (Reports).\`),t.sizing.length===0&&r.push("The design sheet's numbers are not available in this view (open the run in the app)."),t.cost){const o=t.cost;Number.isFinite(o.purchased)&&i.push({label:"Purchased cost",value:Pr(o.purchased,o.currency)}),Number.isFinite(o.bareModule)&&i.push({label:"Bare-module cost",value:Pr(o.bareModule,o.currency)}),i.push({label:"Total-module cost",value:Pr(o.totalModule,o.currency)})}t.assumed.length>0&&r.push(\`Defaults the sizer assumed: \${t.assumed.join(", ")}.\`),t.basis&&r.push(\`Basis: \${t.basis.length>220?\`\${t.basis.slice(0,220)}...\`:t.basis}\`)}else Sh(n,e)?r.push("Not modelled: the case declares this item and the layout places it, but the engine did not size it (no design sheet)."):e||r.push("The sheet and the cost are shown when the view is opened from a run in the app.");for(const o of n.tooltip.filter(a=>a.startsWith("FINDING: ")))r.push(o);return{key:\`item:\${n.id}\`,title:n.id,subtitle:t?\`\${t.type} (sized)\`:n.kind,rows:i,notes:r}}function o_(n,e){const t=e?.streams[n.stream],i=(c,h)=>c==="batteryLimit"?\`battery limit (\${h})\`:c==="junction"?\`junction \${h}\`:c==="header"?\`header \${h}\`:h,s=[{label:"From",value:i(n.ends.fromKind,n.ends.from)},{label:"To",value:i(n.ends.toKind,n.ends.to)}],r=n.T??t?.T,o=n.P??t?.P,a=n.vf??t?.vf,l=n.branch?null:n.massFlow??t?.F_mass??null;if(r!==void 0&&s.push({label:"Temperature",value:\`\${Et(r,5)} K (\${Et(r-273.15,4)} °C)\`}),o!==void 0&&s.push({label:"Pressure",value:\`\${Et(o/1e5,5)} bar\`}),l!==null&&s.push({label:"Mass flow",value:\`\${Et(l,4)} kg/s\`}),t?.F!==void 0&&s.push({label:"Molar flow",value:\`\${Et(t.F,4)} kmol/s\`}),a!==void 0&&s.push({label:"Phase",value:\`\${Ar[ns(a)]}\`}),s.push({label:"Pipe length",value:\`\${Et(n.length,4)} m (\${n.routedBy==="waypoints"?"declared waypoints":n.routedBy==="header"?"a branch of the header":"routed on the rack"})\`}),n.branch&&s.push({label:"Branch",value:\`to \${n.branch}; its flow is not the stream's (the item fills and empties by it) and is not published\`}),t?.composition){const c=Object.entries(t.composition).filter(([,h])=>Number.isFinite(h)&&h>0).sort((h,d)=>d[1]-h[1]).slice(0,s_);c.length>0&&s.push({label:"Mole fractions",value:c.map(([h,d])=>\`\${h} \${Et(d,3)}\`).join(", ")})}return{key:n.id,title:n.branch?\`\${n.stream} → \${n.branch}\`:n.stream,subtitle:n.branch?"branch of a header":"stream",rows:s,notes:["The line's flow speed is not published by the engine: the moving particles are stylised."]}}const wn=1.7,a_=3,l_=3,Eh=2,Dr=1.45,c_={fwd:!1,back:!1,left:!1,right:!1,up:!1,down:!1,fast:!1};function bh(n,e){const t=Math.cos(e);return[Math.sin(n)*t,Math.sin(e),-Math.cos(n)*t]}function ja(n,e){const t=[e[0]-n[0],e[1]-n[1],e[2]-n[2]],i=Math.hypot(t[0],t[2]);return{pos:[...n],yaw:i<1e-9?0:Math.atan2(t[0],-t[2]),pitch:Math.max(-Dr,Math.min(Dr,Math.atan2(t[1],Math.max(i,1e-9))))}}function wh(n,e=10){const t=bh(n.yaw,n.pitch);return[n.pos[0]+t[0]*e,n.pos[1]+t[1]*e,n.pos[2]+t[2]*e]}function h_(n,e,t,i=.0035){return{pos:n.pos,yaw:n.yaw+e*i,pitch:Math.max(-Dr,Math.min(Dr,n.pitch-t*i))}}function Ka(n,e){const t=Math.max(n.max[0]-n.min[0],n.max[2]-n.min[2],20),i=e==="walk"?5:t*.6;return{min:[n.min[0]-i,e==="walk"?wn:Eh,n.min[2]-i],max:[n.max[0]+i,e==="walk"?wn:Math.max(n.max[1]*3,t*.8,30),n.max[2]+i]}}function u_(n,e,t,i,s,r=a_){const o=r*(e.fast?l_:1)*t,a=(e.fwd?1:0)-(e.back?1:0),l=(e.right?1:0)-(e.left?1:0),c=(e.up?1:0)-(e.down?1:0),h=bh(n.yaw,i==="drone"?n.pitch:0),d=Math.cos(n.yaw),f=Math.sin(n.yaw),p=[n.pos[0]+(h[0]*a+d*l)*o,n.pos[1]+(i==="drone"?(h[1]*a+c)*o:0),n.pos[2]+(h[2]*a+f*l)*o];for(let g=0;g<3;g++)p[g]=Math.max(s.min[g],Math.min(s.max[g],p[g]));return i==="walk"&&(p[1]=wn),{pos:p,yaw:n.yaw,pitch:n.pitch}}function d_(n){switch(n){case"KeyW":case"ArrowUp":return"fwd";case"KeyS":case"ArrowDown":return"back";case"KeyA":case"ArrowLeft":return"left";case"KeyD":case"ArrowRight":return"right";case"KeyE":case"PageUp":case"Space":return"up";case"KeyQ":case"PageDown":return"down";case"ShiftLeft":case"ShiftRight":return"fast";default:return null}}function f_(n){const e=[{id:"plant",label:"Whole plant",kind:"plant",min:n.fitMin,max:n.fitMax}],t=r=>{const o=[1/0,0,1/0],a=[-1/0,-1/0,-1/0];for(const l of r)for(let c=0;c<3;c++)o[c]=Math.min(o[c],l.center[c]-l.size[c]/2),a[c]=Math.max(a[c],l.center[c]+l.size[c]/2);return{min:o,max:a}},i=[...new Set(n.solids.filter(r=>r.sector!=="").map(r=>r.sector))];for(const r of i)e.push({id:\`sector:\${r}\`,label:\`Sector \${r}\`,kind:"sector",...t(n.solids.filter(o=>o.sector===r))});const s=[...n.solids.filter(r=>!r.nonProcess),...n.solids.filter(r=>r.nonProcess)];for(const r of s)e.push({id:\`item:\${r.id}\`,label:r.id,kind:"item",...t([r])});return e}function Th(n,e,t,i){return mh(n,e,"3d",t,i,.35)}function p_(n,e,t,i,s){const r=Th(n,e,i,s),o=[(n[0]+e[0])/2,Math.min((n[1]+e[1])/2,wn*3),(n[2]+e[2])/2],a=[r.position[0],t==="walk"?wn:Math.max(r.position[1],Eh),r.position[2]];return ja(a,o)}const m_=n=>{const e=Math.min(1,Math.max(0,n));return e*e*(3-2*e)},Za=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function g_(n,e,t,i,s=6){const r=Math.max(e[0]-n[0],1),o=Math.max(e[2]-n[2],1),a=Math.min((t-2*s)/r,(i-2*s)/o);return{w:t,h:i,scale:a,x0:n[0],z0:n[2],ox:(t-r*a)/2,oz:(i-o*a)/2}}const __=(n,e,t)=>[n.ox+(e-n.x0)*n.scale,n.oz+(t-n.z0)*n.scale],x_=(n,e,t)=>[n.x0+(e-n.ox)/n.scale,n.z0+(t-n.oz)/n.scale],Ah=10133670,Lr=[[68,1,84],[59,82,139],[33,145,140],[94,201,98],[253,231,37]];function Rh(n){const e=Math.min(1,Math.max(0,Number.isFinite(n)?n:0))*(Lr.length-1),t=Math.min(Lr.length-2,Math.floor(e)),i=e-t,s=Lr[t],r=Lr[t+1],o=a=>Math.round(s[a]+(r[a]-s[a])*i);return o(0)<<16|o(1)<<8|o(2)}const Qa=n=>\`#\${n.toString(16).padStart(6,"0")}\`;function Ch(n,e){if(!(Number.isFinite(n)&&Number.isFinite(e)))return[0,1];if(e-n<1e-12*Math.max(1,Math.abs(e))){const o=Math.max(Math.abs(e)*.05,1e-9);return[n-o,e+o]}const i=(e-n)/5,s=Math.pow(10,Math.floor(Math.log10(i))),r=[1,2,2.5,5,10].map(o=>o*s).find(o=>o>=i)??10*s;return[Math.floor(n/r)*r,Math.ceil(e/r)*r]}const v_=273.15;function Ph(n,e,t){if(e.kind==="T")return n.T!==void 0?n.T:t?.streams[n.stream]?.T??null;if(e.kind==="P")return n.P!==void 0?n.P:t?.streams[n.stream]?.P??null;const i=t?.streams[n.stream]?.composition;if(!i)return null;const s=i[e.component];return s===void 0?0:Number.isFinite(s)?s:null}function M_(n,e){const t=i=>n.some(s=>Ph(s,i,e)!==null);return{phase:n.length>0,T:t({kind:"T"}),P:t({kind:"P"}),x:(e?.components.length??0)>0&&n.some(i=>e?.streams[i.stream]?.composition!==void 0)}}function Dh(n,e,t){if(e.kind==="phase"){const _=new Set(n.map(u=>ns(u.vf))),m=["liquid","vapour","twoPhase","unknown"];return{colours:n.map(u=>Si[ns(u.vf)]),neutral:n.map(u=>ns(u.vf)==="unknown"),legend:{title:"Pipe colour: phase",kind:"category",unit:"",entries:m.filter(u=>_.has(u)).map(u=>({label:Ar[u],colour:Si[u]})),notes:[]}}}const i=n.map(_=>Ph(_,e,t)),s=i.filter(_=>_!==null),r=e.kind==="T"?"K":e.kind==="P"?"bar":"mol/mol",o=_=>e.kind==="P"?_/1e5:_,a=e.kind==="T"?"Pipe colour: temperature":e.kind==="P"?"Pipe colour: pressure":\`Pipe colour: mole fraction of \${e.component}\`,l=i.filter(_=>_===null).length,c=[];if(e.kind==="x"?c.push("overall mole fraction, read from each stream's published composition; a stream that publishes a composition without this component carries 0"):c.push("read from the engine's stream table (as published on the pipe)"),l>0&&c.push(\`\${l} pipe\${l===1?"":"s"} grey: the value is not published for \${l===1?"its stream":"their streams"}\`),s.length===0){const _=e.kind==="x"?"composition":e.kind==="T"?"temperature":"pressure";return{colours:n.map(()=>Ah),neutral:n.map(()=>!0),legend:{title:a,kind:"scale",unit:r,entries:[],notes:[\`no pipe carries a published \${_}: all grey\`]}}}const[h,d]=e.kind==="x"?Ch(0,Math.max(...s)):Ch(o(Math.min(...s)),o(Math.max(...s))),f=e.kind==="x"?0:h,p=_=>d>f?(o(_)-f)/(d-f):.5,g=_=>e.kind==="T"?\`\${Et(_,4)} K (\${Et(_-v_,3)} °C)\`:\`\${Et(_,4)} \${r}\`;return{colours:i.map(_=>_===null?Ah:Rh(p(_))),neutral:i.map(_=>_===null),legend:{title:a,kind:"scale",unit:r,entries:[0,.25,.5,.75,1].map(_=>({label:"",colour:Rh(_)})),lo:f,hi:d,ticks:[f,(f+d)/2,d].map(g),notes:c}}}const y_=8,Ja=6;function S_(n){const e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(const i of n)for(let s=0;s<3;s++)e[s]=Math.min(e[s],i.center[s]-i.size[s]/2),t[s]=Math.max(t[s],i.center[s]+i.size[s]/2);return e[1]=Math.min(e[1],0),{min:e,max:t}}const Ir=n=>n.length<=Ja?n.join(", "):\`\${n.slice(0,Ja).join(", ")} and \${n.length-Ja} more\`;function E_(n){const e=n.filter(o=>!o.nonProcess&&!o.shell);if(e.length===0)return[];const t=[];for(const o of e)t.includes(o.sector)||t.push(o.sector);if(t.filter(o=>o!=="").length>=2)return t.map(o=>({name:o===""?"Plant level":\`Sector \${o}\`,sector:o,items:e.filter(a=>a.sector===o)}));const s=Math.max(1,Math.ceil(e.length/y_)),r=[];for(let o=0;o<e.length;o+=s){const a=e.slice(o,o+s);r.push({name:a.length===1?a[0].id:\`\${a[0].id} to \${a[a.length-1].id}\`,sector:null,items:a})}return r}function b_(n,e,t){const i=[],s=E_(n.solids);if(s.length===0)return i;const r={min:n.fitMin,max:n.fitMax},o=[],a=e?.summary;if(a)o.push({text:\`The engine placed \${a.placed} item\${a.placed===1?"":"s"}\`+(a.pipes>0?\` and routed \${a.pipes} pipe\${a.pipes===1?"":"s"}, \${Et(a.pipeLength,4)} m of pipe in all.\`:"."),source:"layout.summary"});else{const d=n.solids.length;o.push({text:\`The layout places \${d} item\${d===1?"":"s"}.\`,source:"layout.items"})}e?.plot&&Number.isFinite(e.plot.plotArea)&&o.push({text:\`The plot is \${Et(e.plot.plotArea,4)} m², of which \${Et(e.plot.footprintShare*100,3)} % is covered by equipment.\`,source:"layout.plot"});const l=s.filter(d=>d.sector).map(d=>d.sector);l.length>=2?o.push({text:\`The plant has \${l.length} sectors, toured in this order: \${l.join(", ")}.\`,source:"layout.items[].sector"}):o.push({text:\`The tour follows the engine's item order in \${s.length} stops.\`,source:"layout.items"}),i.push({id:"overview",title:"The plant",lines:o,focus:r,itemIds:[],pipeIds:[]}),s.forEach((d,f)=>{const p=new Set(d.items.map(T=>T.id)),g=[];g.push({text:\`\${d.items.length} item\${d.items.length===1?"":"s"}: \`+Ir(d.items.map(T=>\`\${T.id} (\${T.kind})\`))+".",source:"layout.items"});const _=d.items.filter(T=>t?.items[T.id]);for(const T of _.slice(0,3)){const N=t.items[T.id],E=n_(N.sizing,3).map(yh),M=N.tagNo?\` (\${N.tagNo})\`:"",I=N.cost&&Number.isFinite(N.cost.totalModule)?\`; installed cost \${Pr(N.cost.totalModule,N.cost.currency)}\`:"";(E.length>0||I)&&g.push({text:\`\${T.id}\${M}: \${E.join(", ")}\${I}.\`,source:"design sheet"})}if(_.length>3&&g.push({text:\`\${_.length-3} more sized item\${_.length-3===1?"":"s"} here: click one for its sheet.\`,source:"design sheet"}),t?.sized){const T=d.items.filter(N=>!t.items[N.id]).map(N=>N.id);T.length>0&&g.push({text:\`Declared by the case but not sized by the engine: \${Ir(T)}.\`,source:"equipment (absent)"})}const m=n.pipes.filter(T=>T.ends.toKind==="item"||T.ends.fromKind==="item"),u=T=>{const N=new Set;return T.filter(E=>!N.has(E.stream)&&N.add(E.stream)!==void 0).map(E=>E.branch?n.pipes.find(M=>M.stream===E.stream&&!M.branch)??E:E)},y=u(m.filter(T=>p.has(T.ends.to)&&!(T.ends.fromKind==="item"&&p.has(T.ends.from)))),v=u(m.filter(T=>p.has(T.ends.from)&&!(T.ends.toKind==="item"&&p.has(T.ends.to)))),S=T=>{const N=[];return T.T!==void 0&&N.push(\`\${Et(T.T-273.15,4)} °C\`),T.P!==void 0&&N.push(\`\${Et(T.P/1e5,4)} bar\`),T.massFlow!==null&&N.push(\`\${Et(T.massFlow,4)} kg/s\`),T.vf!==void 0&&N.push(Ar[ns(T.vf)].split(" (")[0]),\`\${T.stream}\${N.length?\` (\${N.join(", ")})\`:""}\`};y.length>0&&g.push({text:\`Streams in: \${Ir(y.map(S))}.\`,source:"layout.pipes"}),v.length>0&&g.push({text:\`Streams out: \${Ir(v.map(S))}.\`,source:"layout.pipes"});const O=(e?.findings??[]).filter(T=>p.has(T.a)||p.has(T.b.split("#zone")[0]));for(const T of O.slice(0,2))g.push({text:T.message,source:"layout.findings"});const R=S_(d.items);i.push({id:\`step\${f+1}\`,title:d.name,lines:g,focus:R,itemIds:d.items.map(T=>T.id),pipeIds:[...y,...v].map(T=>T.id)})});const c=[],h=e?.findings.length??0;e&&(h>0?c.push({text:\`The engine's layout checks raised \${h} finding\${h===1?"":"s"}; the items they name are outlined in orange.\`,source:"layout.findings"}):c.push({text:"The engine's layout checks raised no finding.",source:"layout.findings"}));for(const d of(t?.kpis??[]).filter(f=>/^economics|^globalEnergy/.test(f.source)))c.push({text:\`\${d.label}: \${d.value}.\`,source:d.source});return c.length>0&&i.push({id:"close",title:"Checks and headline",lines:c,focus:r,itemIds:[],pipeIds:[]}),i}const w_=560,T_=9e3,A_=1100;function ot(n,e,t,i=[]){const s=document.createElement(n);e&&Object.assign(s.style,e),t!==void 0&&(s.textContent=t);for(const r of i)r&&s.appendChild(r);return s}const is={font:"500 11px var(--mantine-font-family, sans-serif)",lineHeight:"1.35",color:"var(--mantine-color-text)",background:"light-dark(rgba(255,255,255,0.93), rgba(30,30,30,0.93))",border:"1px solid light-dark(#ced4da, #495057)",borderRadius:"6px",padding:"5px 7px",pointerEvents:"auto",boxSizing:"border-box"};function nn(n,e,t,i=!1){const s=document.createElement("button");return s.type="button",s.textContent=n,s.title=e,s.setAttribute("aria-label",e),Object.assign(s.style,{font:"500 11px var(--mantine-font-family, sans-serif)",padding:"2px 7px",cursor:"pointer",borderRadius:"4px",color:"inherit",border:"1px solid light-dark(#adb5bd, #6c757d)",background:i?"light-dark(#d0ebff, #1c4a6e)":"light-dark(#f8f9fa, #343a40)"}),s.addEventListener("click",t),s}function el(n,e,t,i){const s=document.createElement("select");s.title=i,s.setAttribute("aria-label",i),Object.assign(s.style,{font:"500 11px var(--mantine-font-family, sans-serif)",maxWidth:"150px",padding:"1px 2px",color:"inherit",background:"light-dark(#f8f9fa, #343a40)",border:"1px solid light-dark(#adb5bd, #6c757d)",borderRadius:"4px"});for(const r of n){const o=document.createElement("option");o.value=r.value,o.textContent=r.label,s.appendChild(o)}return s.value=e,s.addEventListener("change",()=>t(s.value)),s}function R_(n){const{scene:e,el:t,camera:i,controls:s,dom:r}=n,o=t.clientWidth<w_,a=ot("div",{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"3",overflow:"hidden"});t.appendChild(a),t.tabIndex=0,t.style.outline="none";let l="orbit",c=ja([0,wn,0],[0,wn,-1]);const h={...c_};let d={kind:"phase"},f=null,p=null,g=-1,_=0,m=0,u=0,y=null;const v=n.facts??null,S=M_(e.pipes,v),O=()=>Math.max(t.clientWidth,320)/n.heightOf(),R=()=>{l!=="orbit"&&(i.position.set(...c.pos),i.lookAt(...wh(c,10)),n.draw())},T=()=>[(e.fitMin[0]+e.fitMax[0])/2,0,(e.fitMin[2]+e.fitMax[2])/2],N=()=>{y=null},E=()=>{m||(u=0,m=requestAnimationFrame(M))},M=L=>{m=0;const X=u?Math.min(.05,(L-u)/1e3):0;u=L;let q=!1;if(y){const re=Math.min(1,(L-y.t0)/y.ms);y.step(m_(re)),re>=1?y=null:q=!0}l!=="orbit"&&(h.fwd||h.back||h.left||h.right||h.up||h.down)&&(c=u_(c,h,X,l,Ka(e,l),l==="drone"?Math.max(8,Math.hypot(e.max[0]-e.min[0],e.max[2]-e.min[2])/8):void 0),R(),q=!0),q&&(m=requestAnimationFrame(M))},I=(L,X,q=A_)=>{if(l==="orbit"){const re=Th(L,X,n.fov,O()),Me=[i.position.x,i.position.y,i.position.z],Fe=[s.target.x,s.target.y,s.target.z];y={t0:performance.now(),ms:q,step:He=>{i.position.set(...Za(Me,re.position,He)),s.target.set(...Za(Fe,re.target,He)),s.update(),n.draw()}}}else{const re=p_(L,X,l,n.fov,O()),Me=c;let Fe=re.yaw-Me.yaw;Fe=Math.atan2(Math.sin(Fe),Math.cos(Fe)),y={t0:performance.now(),ms:q,step:He=>{c={pos:Za(Me.pos,re.pos,He),yaw:Me.yaw+Fe*He,pitch:Me.pitch+(re.pitch-Me.pitch)*He},R()}}}E()},z=L=>{if(L!==l){if(N(),L==="orbit"){const X=Math.max(15,Math.hypot(c.pos[0]-T()[0],c.pos[2]-T()[2])),q=wh(c,Math.min(X,80));q[1]=Math.max(0,q[1]),l="orbit",s.enabled=!0,i.position.set(c.pos[0],Math.max(c.pos[1],3),c.pos[2]),s.target.set(...q),s.update(),n.draw()}else{const X=l==="orbit";if(l=L,s.enabled=!1,X){const q=Ka(e,L),re=Math.min(q.max[0],Math.max(q.min[0],i.position.x)),Me=Math.min(q.max[2],Math.max(q.min[2],i.position.z)),Fe=L==="walk"?wn:Math.max(i.position.y,q.min[1]);c=ja([re,Fe,Me],[T()[0],L==="walk"?wn:0,T()[2]])}else c={...c,pos:[c.pos[0],L==="walk"?wn:Math.max(c.pos[1],4),c.pos[2]]};R()}Se(),t.focus({preventScroll:!0})}};let V=null;const j=()=>{const L=Dh(e.pipes,d,v);V=L.legend,n.paintPipes(L.colours,d.kind!=="phase"),it(),lt(),n.draw()},oe=[],Z=()=>{for(const L of oe.splice(0))n.world.remove(L),L.geometry.dispose(),L.material.dispose()},fe=(L,X,q)=>{const re=(He,Be,Qe)=>new n.THREE.Vector3(He?X[0]:L[0],Be?X[1]:L[1],Qe?X[2]:L[2]),Me=[];for(const He of[0,1])for(const Be of[0,1])Me.push(re(0,He,Be),re(1,He,Be));for(const He of[0,1])for(const Be of[0,1])Me.push(re(He,0,Be),re(He,1,Be));for(const He of[0,1])for(const Be of[0,1])Me.push(re(He,Be,0),re(He,Be,1));const Fe=new n.THREE.LineSegments(new n.THREE.BufferGeometry().setFromPoints(Me),new n.THREE.LineBasicMaterial({color:q,depthTest:!1,transparent:!0}));Fe.renderOrder=999,n.world.add(Fe),oe.push(Fe)},Q=(L,X)=>{Z();for(const q of e.solids)L.includes(q.id)&&fe([q.center[0]-q.size[0]/2-.15,q.center[1]-q.size[1]/2,q.center[2]-q.size[2]/2-.15],[q.center[0]+q.size[0]/2+.15,q.center[1]+q.size[1]/2+.15,q.center[2]+q.size[2]/2+.15],46296);n.selectPipe(X),n.draw()},ue=(L,X=[],q=null)=>{f=L,p||Q(X,q),se()},U=(L,X)=>{const q=r.getBoundingClientRect(),Me=X((L.clientX-q.left)/q.width*2-1,-((L.clientY-q.top)/q.height)*2+1)?.userData.pick;if(!Me){ue(null);return}if(Me.kind==="item"){const Fe=e.solids.find(He=>He.id===Me.id);Fe&&ue(r_(Fe,v),[Fe.id])}else{const Fe=e.pipes.findIndex(He=>He.id===Me.id);Fe>=0&&ue(o_(e.pipes[Fe],v),[],Fe)}},te=()=>p??(p=b_(e,n.layout,v)),xe=L=>{const X=te();if(X.length===0)return;g=Math.max(0,Math.min(X.length-1,L));const q=X[g];f=null,Z(),Q(q.itemIds,null);const re=q.focus,Me=[[re.min[0],re.min[1],re.min[2]],[re.max[0],re.max[1],re.max[2]]];I(Me[0],Me[1]),se(),_e()},Le=()=>{te().length!==0&&(se(),xe(0))},ne=()=>{window.clearInterval(_),_=0,g=-1,Z(),n.selectPipe(null),n.draw(),_e(),Se()},de=ot("div",{...is,position:"absolute",left:"6px",top:"6px",display:"flex",flexWrap:"wrap",gap:"4px",alignItems:"center",maxWidth:"calc(100% - 12px)"});let ye=!o;const ge=f_(e);function Se(){if(de.replaceChildren(),o&&de.appendChild(nn(ye?"Hide controls":"Controls","Show or hide the camera, tour and colour controls",()=>{ye=!ye,Se(),Ne()})),!ye)return;const L=nn(g>=0?"Tour (on)":"Tour","Guided tour, generated from the result",()=>g>=0?ne():Le(),g>=0);de.append(nn("Orbit","Orbit camera: drag to turn, right-drag to pan, wheel to zoom",()=>z("orbit"),l==="orbit"),nn("Walk","Walk at eye height: W A S D or arrows, drag to look, Shift to run",()=>z("walk"),l==="walk"),nn("Drone","Fly: W A S D move where you look, E / Q up and down, drag to look",()=>z("drone"),l==="drone"),el([{value:"",label:"Go to..."},...ge.map(X=>({value:X.id,label:X.kind==="item"?\`  \${X.label}\`:X.label}))],"",X=>{const q=ge.find(re=>re.id===X);q&&I(q.min,q.max),Se()},"Fly to a sector or an item"),L),l!=="orbit"&&de.appendChild(ot("span",{opacity:"0.75"},l==="walk"?"W A S D / arrows · drag to look · Shift runs":"W A S D fly · E / Q up, down · drag to look"))}const we=ot("div",{...is,position:"absolute",right:"6px",...o?{bottom:"40px",maxWidth:"62%",maxHeight:"34%",overflowY:"auto"}:{top:"6px",maxWidth:"260px"}});function Ne(){it()}function it(){we.replaceChildren(),we.style.display=o&&(!ye||g>=0)?"none":"block";const L=[{value:"phase",label:"Colour by phase"}];S.T&&L.push({value:"T",label:"Colour by temperature"}),S.P&&L.push({value:"P",label:"Colour by pressure"}),S.x&&L.push({value:"x",label:"Colour by mole fraction"});const X=ot("div",{display:"flex",gap:"4px",flexWrap:"wrap",alignItems:"center"});if(X.appendChild(el(L,d.kind,q=>{d=q==="x"?{kind:"x",component:v?.components[0]??""}:{kind:q},j()},"What the pipes are coloured by")),d.kind==="x"&&v&&X.appendChild(el(v.components.map(q=>({value:q,label:q})),d.component,q=>{d={kind:"x",component:q},j()},"The component whose mole fraction colours the pipes")),we.appendChild(X),V){if(we.appendChild(ot("div",{fontWeight:"700",marginTop:"4px"},V.title)),V.kind==="category")for(const q of V.entries)we.appendChild(ot("div",{display:"flex",gap:"5px",alignItems:"center"},void 0,[ot("span",{width:"14px",height:"8px",background:Qa(q.colour),borderRadius:"2px",flex:"0 0 auto"}),ot("span",null,q.label)]));else if(V.entries.length>0&&V.ticks){const q=\`linear-gradient(to right, \${V.entries.map(re=>Qa(re.colour)).join(", ")})\`;we.appendChild(ot("div",{height:"10px",marginTop:"3px",borderRadius:"2px",background:q,border:"1px solid light-dark(#868e96, #adb5bd)"})),we.appendChild(ot("div",{display:"flex",justifyContent:"space-between",gap:"4px"},void 0,V.ticks.map(re=>ot("span",{fontSize:"10px"},re))))}for(const q of V.notes)we.appendChild(ot("div",{opacity:"0.8",marginTop:"2px"},q))}we.appendChild(ot("div",{opacity:"0.8",marginTop:"3px"},"Particles: stylised. The engine publishes no line velocity; speed only grows with the mass flow."))}const Xe=o?120:168,at=o?90:126,H=ot("div",{...is,position:"absolute",left:"6px",bottom:"6px",padding:"3px"}),ht=document.createElement("canvas");ht.width=Xe,ht.height=at,Object.assign(ht.style,{display:"block",width:\`\${Xe}px\`,height:\`\${at}px\`,cursor:"crosshair"});let Ge=!o;const $e=nn(Ge?"Map ▾":"Map ▸","Show or hide the plan minimap",()=>{Ge=!Ge,$e.textContent=Ge?"Map ▾":"Map ▸",ht.style.display=Ge?"block":"none"});Object.assign($e.style,{marginBottom:"2px"}),ht.style.display=Ge?"block":"none",H.append($e,ht);const Ue=g_([Math.min(e.fitMin[0],e.plot?.x0??1/0),0,Math.min(e.fitMin[2],e.plot?.z0??1/0)],[Math.max(e.fitMax[0],e.plot?.x1??-1/0),0,Math.max(e.fitMax[2],e.plot?.z1??-1/0)],Xe,at),lt=()=>{const L=ht.getContext("2d");if(!L||!Ge)return;L.clearRect(0,0,Xe,at),L.fillStyle="rgba(120,140,100,0.25)",L.fillRect(0,0,Xe,at);const X=(Qe,yt)=>__(Ue,Qe,yt);if(e.plot){const[Qe,yt]=X(e.plot.x0,e.plot.z0),[Yt,Cn]=X(e.plot.x1,e.plot.z1);L.strokeStyle="#868e96",L.setLineDash([3,2]),L.strokeRect(Qe,yt,Yt-Qe,Cn-yt),L.setLineDash([])}L.strokeStyle="#5c7cfa";for(const Qe of e.areas){const[yt,Yt]=X(Qe.x0,Qe.z0),[Cn,qt]=X(Qe.x1,Qe.z1);L.strokeRect(yt,Yt,Cn-yt,qt-Yt)}const q=Dh(e.pipes,d,v).colours;e.pipes.forEach((Qe,yt)=>{L.strokeStyle=Qa(q[yt]),L.lineWidth=1.5,L.beginPath(),Qe.points.forEach((Yt,Cn)=>{const[qt,Hn]=X(Yt[0],Yt[2]);Cn===0?L.moveTo(qt,Hn):L.lineTo(qt,Hn)}),L.stroke()}),L.lineWidth=1;for(const Qe of e.solids){const[yt,Yt]=X(Qe.center[0]-Qe.size[0]/2,Qe.center[2]-Qe.size[2]/2);L.fillStyle=Qe.flagged?"#e8590c":Qe.nonProcess?"#cbb994":"#495057",L.fillRect(yt,Yt,Math.max(2,Qe.size[0]*Ue.scale),Math.max(2,Qe.size[2]*Ue.scale))}const re=l==="orbit"?i.position:{x:c.pos[0],z:c.pos[2]},Me=new n.THREE.Vector3;i.getWorldDirection(Me);const[Fe,He]=X(re.x,re.z),Be=Math.atan2(Me.x,-Me.z);L.fillStyle="rgba(255,212,59,0.35)",L.strokeStyle="#f08c00",L.beginPath(),L.moveTo(Fe,He),L.arc(Fe,He,22,Be-Math.PI/2-.45,Be-Math.PI/2+.45),L.closePath(),L.fill(),L.beginPath(),L.arc(Fe,He,3.2,0,2*Math.PI),L.fillStyle="#f08c00",L.fill(),L.stroke()},Oe=L=>{const X=ht.getBoundingClientRect(),[q,re]=x_(Ue,(L.clientX-X.left)/X.width*Xe,(L.clientY-X.top)/X.height*at);if(N(),l==="orbit"){const Me=q-s.target.x,Fe=re-s.target.z,He=[i.position.x,i.position.y,i.position.z],Be=[s.target.x,s.target.y,s.target.z];y={t0:performance.now(),ms:700,step:Qe=>{i.position.set(He[0]+Me*Qe,He[1],He[2]+Fe*Qe),s.target.set(Be[0]+Me*Qe,Be[1],Be[2]+Fe*Qe),s.update(),n.draw()}}}else{const Me=Ka(e,l);c={...c,pos:[Math.min(Me.max[0],Math.max(Me.min[0],q)),c.pos[1],Math.min(Me.max[2],Math.max(Me.min[2],re))]},R()}E()};ht.addEventListener("pointerdown",Oe);const P=v?.kpis??(n.layout?i_(n.layout):[]),b=ot("div",{...is,position:"absolute",right:"6px",bottom:"6px",maxWidth:"210px"});let Y=!o;const ae=()=>{if(b.replaceChildren(nn(Y?"Headline ▾":"Headline ▸","Show or hide the plant's headline numbers",()=>{Y=!Y,ae()})),Y)for(const L of P){const X=ot("div",{display:"flex",justifyContent:"space-between",gap:"10px",marginTop:"2px"},void 0,[ot("span",{opacity:"0.8"},L.label),ot("b",{whiteSpace:"nowrap"},L.value)]);X.title=\`from the result: \${L.source}\`,b.appendChild(X)}Y&&!v&&b.appendChild(ot("div",{opacity:"0.7",marginTop:"3px"},"Layout block only: costs, sheets and composition need the run."))};P.length===0&&(b.style.display="none");const ce=ot("div",{...is,position:"absolute",display:"none",overflowY:"auto",...o?{left:"6px",right:"6px",bottom:"6px",maxHeight:"42%"}:{left:"6px",top:"44px",maxWidth:"290px",maxHeight:"55%"}});function se(){if(ce.replaceChildren(),ce.style.display=f?"block":"none",!f)return;const L=nn("×","Close the card",()=>ue(null));Object.assign(L.style,{float:"right"}),ce.append(L,ot("div",{fontWeight:"700",fontSize:"12px"},f.title),ot("div",{opacity:"0.75",marginBottom:"3px"},f.subtitle));const X=document.createElement("table");X.style.borderCollapse="collapse";for(const q of f.rows){const re=document.createElement("tr");re.append(ot("td",{opacity:"0.75",paddingRight:"8px",verticalAlign:"top",whiteSpace:"nowrap"},q.label),ot("td",{fontWeight:"600"},q.value)),X.appendChild(re)}ce.appendChild(X);for(const q of f.notes)ce.appendChild(ot("div",{marginTop:"4px",opacity:"0.85"},q))}const Ae=ot("div",{...is,position:"absolute",display:"none",left:"50%",transform:"translateX(-50%)",bottom:"6px",width:o?"calc(100% - 12px)":"min(520px, 56%)",maxHeight:o?"44%":"46%",overflowY:"auto",padding:"7px 9px"});o&&Object.assign(Ae.style,{left:"6px",transform:"none"});function _e(){Ae.replaceChildren();const L=p;if(Ae.style.display=L&&g>=0?"block":"none",it(),!L||g<0)return;const X=L[g],q=_!==0;Ae.append(ot("div",{display:"flex",justifyContent:"space-between",gap:"8px"},void 0,[ot("b",{fontSize:"12px"},X.title),ot("span",{opacity:"0.7"},\`\${g+1} / \${L.length}\`)]),ot("ul",{margin:"3px 0 5px 14px",padding:"0"},void 0,X.lines.map(re=>{const Me=ot("li",{marginBottom:"2px"},re.text);return Me.title=\`from the result: \${re.source}\`,Me})),ot("div",{display:"flex",gap:"4px",flexWrap:"wrap"},void 0,[nn("Previous","Previous stop",()=>{be(),xe(g-1)}),nn("Next","Next stop",()=>{be(),xe(g+1)}),nn(q?"Pause":"Continue","Advance by itself every few seconds",()=>{if(q){be(),_e();return}_=window.setInterval(()=>{if(g>=L.length-1){be(),_e();return}xe(g+1)},T_),_e()},q),nn("Exit","Leave the tour",()=>ne())]))}const be=()=>{window.clearInterval(_),_=0},qe=ot("div",{position:"absolute",left:"8px",bottom:o?"100px":"150px",display:"none",gridTemplateColumns:"repeat(3, 30px)",gap:"3px",pointerEvents:"auto"}),pe=(L,X,q,re,Me)=>{const Fe=nn(L,Me,()=>{});Object.assign(Fe.style,{gridColumn:String(q),gridRow:String(re),height:"30px",touchAction:"none"});const He=Be=>{h[X]=Be,Be&&E()};Fe.addEventListener("pointerdown",Be=>{Be.preventDefault(),He(!0)});for(const Be of["pointerup","pointerleave","pointercancel"])Fe.addEventListener(Be,()=>He(!1));qe.appendChild(Fe)};pe("▲","fwd",2,1,"Forward"),pe("◀","left",1,2,"Left"),pe("▶","right",3,2,"Right"),pe("▼","back",2,3,"Back"),pe("↑","up",1,1,"Up (drone)"),pe("↓","down",3,1,"Down (drone)");const Ee=()=>{qe.style.display=l==="orbit"?"none":"grid"};a.append(de,we,H,b,ce,Ae,qe);let Re=null;const ze=L=>{if(Re={x:L.clientX,y:L.clientY,id:L.pointerId,moved:!1},l!=="orbit"){N();try{r.setPointerCapture(L.pointerId)}catch{}}t.focus({preventScroll:!0})},Ce=L=>{if(!Re||L.pointerId!==Re.id)return;const X=L.clientX-Re.x,q=L.clientY-Re.y;Math.abs(X)+Math.abs(q)>4&&(Re.moved=!0),l!=="orbit"&&Re.moved&&(c=h_(c,L.movementX??X,L.movementY??q),L.movementX===void 0&&(Re.x=L.clientX,Re.y=L.clientY),R())},et=L=>{Re&&L.pointerId===Re.id&&!Re.moved&&U(L,n.raycast),Re=null},ke=(L,X)=>{if(l==="orbit")return;const q=d_(L.code);q&&(L.preventDefault(),h[q]=X,X&&E())},Ze=L=>ke(L,!0),G=L=>ke(L,!1);r.addEventListener("pointerdown",ze),r.addEventListener("pointermove",Ce),window.addEventListener("pointerup",et),t.addEventListener("keydown",Ze),t.addEventListener("keyup",G);const ve=()=>{for(const L of Object.keys(h))h[L]=!1};return t.addEventListener("blur",ve),n.onFrame.push(()=>{lt(),Ee()}),Se(),it(),ae(),se(),_e(),j(),{dispose(){m&&cancelAnimationFrame(m),window.clearInterval(_),Z(),r.removeEventListener("pointerdown",ze),r.removeEventListener("pointermove",Ce),window.removeEventListener("pointerup",et),t.removeEventListener("keydown",Ze),t.removeEventListener("keyup",G),t.removeEventListener("blur",ve),a.remove()}}}const C_=5,P_=6,D_=1,ni=1,L_=2.2,I_=2,Lh=.25,tl=2*Math.PI;function Lt(n,e,t,i){return n==="x"?[e,t,i]:n==="z"?[i,t,e]:[i,e,t]}const Ei=n=>[Math.cos(n),Math.sin(n)];function ct(n,e,t,i,s,r,o=r,a){return{prim:"cylinder",role:n,decoration:e,at:t,axis:i,length:s,rStart:r,rEnd:o,...a?{arc:a}:{}}}function dt(n,e,t,i,s){return{prim:"box",role:n,decoration:e,at:t,size:i}}function Ur(n,e,t,i,s){return{prim:"ring",role:n,decoration:!0,at:e,R:t,r:i,arc:s}}function Ih({R:n,H:e}){const t=Math.min(Lh*2*n,.25*e);return{hd:t,parts:[ct("body",!1,[0,0,0],"y",e-2*t,n),{prim:"head",role:"body",decoration:!1,at:[0,e/2-t,0],axis:"y",sign:1,r:n,depth:t},{prim:"head",role:"body",decoration:!1,at:[0,-e/2+t,0],axis:"y",sign:-1,r:n,depth:t}]}}function ss(n,e,t,i,s){return[{...ct("steel",!0,[n,t+s/2,e],"y",s,i),nozzle:!0},{...ct("steel",!0,[n,t+s-.03,e],"y",.06,1.7*i),nozzle:!0}]}const U_=.35;function N_(n,e,t){const i=U_,s=r=>[n[0]+e[0]*r,n[1]+e[1]*r,n[2]+e[2]*r];return[{...ct("steel",!0,s(i/2),e,i,t),nozzle:!0},{...ct("steel",!0,s(i-.03),e,.06,1.7*t),nozzle:!0}]}function Uh({R:n,H:e},t){if(e>=3*n){const o=Math.min(Math.max(.12*e,t+.3),t+2.5,.45*e);return{word:"skirt",parts:[ct("concrete",!0,[0,-e/2+o/2,0],"y",o,1.012*n),ct("steel",!0,[0,-e/2+.05,0],"y",.1,1.1*n)]}}const i=Math.max(.08,.1*n),s=t+Math.min(.5,.2*e),r=[];for(let o=0;o<4;o++){const[a,l]=Ei(Math.PI/4+o*Math.PI/2),c=n-i/2;r.push(dt("steel",!0,[c*a,-e/2+s/2,c*l],[i,s,i]))}return{word:"legs",parts:r}}function Nr({R:n,H:e,base:t},i,s){if(t+e/2+i<=C_)return[];const r=[],o=I_,[a,l]=Ei(o),c=[-l,a],h=-e/2,d=i+ni,f=n+.3,p=f*a,g=f*l;for(const R of[-1,1])r.push(ct("steel",!0,[p+R*.22*c[0],(h+d)/2,g+R*.22*c[1]],"y",d-h,.03));for(let R=h+.3;R<i;R+=.3)r.push(ct("steel",!0,[p,R,g],[c[0],0,c[1]],.44,.016));const _=.38,m=(f+.12)*a,u=(f+.12)*l,y=h+L_;if(d>y+.5){for(let R=y;R<=d+1e-9;R+=.9)r.push(Ur("safety",[m,R,u],_,.018,[o-2*Math.PI/3,4*Math.PI/3]));for(const R of[-Math.PI/2,-Math.PI/4,0,Math.PI/4,Math.PI/2]){const[T,N]=Ei(o+R);r.push(ct("safety",!0,[m+_*T,(y+d)/2,u+_*N],"y",d-y,.016))}}if(!s)return r;const v=[];for(let R=1;;R++){const T=h+R*P_;if(T>i-2)break;v.push(T)}v.push(i);const S=[o-Math.PI/2,Math.PI],O=n+D_;for(const R of v){r.push(ct("grating",!0,[0,R-.04,0],"y",.08,O,O,S)),r.push(Ur("safety",[0,R+ni,0],O-.05,.025,S)),r.push(Ur("safety",[0,R+.5*ni,0],O-.05,.018,S));for(let T=0;T<=6;T++){const[N,E]=Ei(S[0]+T*S[1]/6);r.push(ct("safety",!0,[(O-.05)*N,R+ni/2,(O-.05)*E],"y",ni,.022))}}return r}function ws(n){return n.shape==="cylinder"?n.axis==="y"?{R:n.size[0]/2,H:n.size[1],base:n.base,inscribed:!1}:null:{R:Math.min(n.size[0],n.size[2])/2,H:n.size[1],base:n.base,inscribed:!0}}function nl(n){if(n.shape==="cylinder"){if(n.axis==="y")return null;const s=n.axis;return{a:s,L:s==="x"?n.size[0]:n.size[2],R:n.size[1]/2,yc:0,inscribed:!1}}const e=n.size[0]>=n.size[2]?"x":"z",t=Math.min(n.size[0],n.size[2]),i=Math.min(t,n.size[1])/2;return{a:e,L:Math.max(n.size[0],n.size[2]),R:i,yc:-n.size[1]/2+i,inscribed:!0}}const rs=n=>n.inscribed?", drawn inside the declared box":"";function Nh(n,e){const{parts:t,hd:i}=Ih(n),s=Uh(n,i);t.push(...s.parts),t.push(...ss(0,0,n.H/2-.05,Math.max(.05,.1*n.R),.35));const r=Nr(n,n.H/2-i,!0);return t.push(...r),{parts:t,model:e,describes:\`vertical vessel, 2:1 heads, \${s.word}\${r.length?", ladder and platforms":""}\${rs(n)}\`}}function Oh(n,e,t,i){const s=[];for(const r of i){const o=n==="x"?[.22,.9*e,1.6*e]:[1.6*e,.9*e,.22];s.push(dt("steel",!0,Lt(n,r,t-e+.45*e,0),o));const a=n==="x"?[.5,.06,1.8*e]:[1.8*e,.06,.5];s.push(dt("steel",!0,Lt(n,r,t-e+.03,0),a))}return s}function Fh(n,e){const{a:t,L:i,R:s,yc:r}=n,o=Math.min(Lh*2*s,.25*i),a=[ct("body",!1,Lt(t,0,r,0),t,i-2*o,s),{prim:"head",role:"body",decoration:!1,at:Lt(t,i/2-o,r,0),axis:t,sign:1,r:s,depth:o},{prim:"head",role:"body",decoration:!1,at:Lt(t,-i/2+o,r,0),axis:t,sign:-1,r:s,depth:o}];a.push(...Oh(t,s,r,[-.3*i,.3*i]));for(const l of[-.25*i,.25*i]){const c=Lt(t,l,0,0);a.push(...ss(c[0],c[2],r+.8*s,Math.max(.05,.15*s),.2*s+.25))}return{parts:a,model:e,describes:\`horizontal drum, 2:1 heads, saddles\${rs(n)}\`}}const O_=n=>{const e=nl(n);if(!e)return null;const{a:t,L:i,R:s,yc:r}=e,o=Math.min(.06,.02*i),a=Math.min(.2*i,1.4*s),l=Math.min(.5*s,.15*i),c=-i/2,h=c+a,d=i/2-l,f=[ct("body",!1,Lt(t,c+o/2,r,0),t,o,s),ct("body",!1,Lt(t,(c+o+h)/2,r,0),t,a-o,s),ct("body",!1,Lt(t,(h+d)/2,r,0),t,d-h,s),{prim:"head",role:"body",decoration:!1,at:Lt(t,d,r,0),axis:t,sign:1,r:s,depth:l},ct("steel",!0,Lt(t,c+o,r,0),t,.08,1.1*s),ct("steel",!0,Lt(t,h,r,0),t,.1,1.1*s)],p=d-h,g=Math.max(.05,.2*s);for(const m of[h+.15*p,d-.15*p]){const u=Lt(t,m,0,0);f.push(...ss(u[0],u[2],r+.7*s,g,.3*s+.25))}const _=Lt(t,(c+h)/2,0,0);return f.push(...ss(_[0],_[2],r+.7*s,g,.3*s+.25)),f.push(...Oh(t,s,r,[h+.2*p,d-.15*p])),{parts:f,model:"shellTubeHX",describes:\`shell-and-tube exchanger, channel head, saddles\${rs(e)}\`}},zh=n=>{const e=ws(n);if(!e)return null;const{R:t,H:i}=e,s=Math.min(t/6,.2*i),r=i-s,o=[ct("body",!1,[0,-i/2+r/2,0],"y",r,t),ct("body",!1,[0,i/2-s/2,0],"y",s,t,.04*t),ct("concrete",!0,[0,-i/2+.1,0],"y",.2,1.05*t),ct("steel",!0,[0,i/2+.15,0],"y",.3,Math.max(.05,.05*t))];for(let h=-i/2+2.4;h<-i/2+r-.3;h+=2.4)o.push(ct("steel",!0,[0,h,0],"y",.04,1.004*t));const a=-i/2+r;o.push(Ur("safety",[0,a+ni,0],.97*t,.025,[0,tl]));const l=Math.max(8,Math.min(48,Math.round(tl*t/2.5)));for(let h=0;h<l;h++){const[d,f]=Ei(h*tl/l);o.push(ct("safety",!0,[.97*t*d,a+ni/2,.97*t*f],"y",ni,.022))}const c=Nr(e,a,!1);return o.push(...c),{parts:o,model:"storageTank",describes:\`storage tank, cone roof\${c.length?", caged ladder":""}\${rs(e)}\`}},F_=n=>{const e=ws(n);if(!e)return null;const{R:t,H:i}=e,{parts:s,hd:r}=Ih(e),o=Uh(e,r);s.push(...o.parts);const a=Math.max(.3,.45*t);s.push(dt("machine",!0,[0,i/2-.05+a*.35,0],[a,a*.7,a]));const l=Math.max(.12,.17*t);s.push(ct("motor",!0,[0,i/2-.05+a*.7+l*1.6,0],"y",l*3.2,l));for(const h of[.6,2.7,4.4]){const[d,f]=Ei(h);s.push(...ss(.6*t*d,.6*t*f,i/2-r*.6,Math.max(.04,.08*t),r*.6+.25))}const c=Nr(e,i/2-r,!0);return s.push(...c),{parts:s,model:"stirredTank",describes:\`stirred tank, agitator drive, \${o.word}\${c.length?", ladder and platforms":""}\${rs(e)}\`}},z_=n=>{if(n.shape!=="box")return null;const[e,t,i]=n.size,s=e>=i?"x":"z",r=Math.max(e,i),o=Math.min(e,i),a=Math.min(.3,.1*t),l=Math.min(.25,.08*t),c=a+l,h=Math.max(.05,Math.min(.32*o,.42*(t-c))),d=-t/2+c+h,f=s==="x"?[.1*r,.9*h,.9*h]:[.9*h,.9*h,.1*r],p=s==="x"?[.92*e,l,.8*i]:[.8*e,l,.92*i],g=[dt("concrete",!1,[0,-t/2+a/2,0],[e,a,i]),dt("steel",!0,[0,-t/2+a+l/2,0],p),ct("machine",!1,Lt(s,-.2*r,d,0),s,.42*r,h),ct("motor",!0,Lt(s,.27*r,d-.15*h,0),s,.3*r,.8*h),dt("safety",!0,Lt(s,.06*r,d,0),f)];for(const _ of[-.32*r,-.08*r]){const m=Lt(s,_,0,0),u=Math.max(.05,Math.min(.5*h,t/2-(d+.6*h)));g.push(...ss(m[0],m[2],d+.6*h,Math.max(.04,.28*h),u))}return{parts:g,model:"compressor",describes:"compressor and driver on a skid, drawn inside the declared box"}},B_=n=>{const e=ws(n);if(!e)return null;const{R:t,H:i}=e,s=.4*i,r=[ct("body",!1,[0,-i/2+s/2,0],"y",s,.08*t,t),ct("body",!1,[0,-i/2+s+(i-s)/2,0],"y",i-s,t),ct("motor",!0,[0,i/2+.3,0],"y",.6,Math.max(.1,.12*t))],o=Math.max(.12,.06*t);for(let l=0;l<4;l++){const[c,h]=Ei(Math.PI/4+l*Math.PI/2),d=t-o/2;r.push(dt("steel",!0,[d*c,-i/2+s/2+.05,d*h],[o,s+.1,o]))}const a=Nr(e,i/2,!0);return r.push(...a),{parts:r,model:"sprayDryer",describes:\`spray dryer, chamber over a cone, on legs\${a.length?", ladder and platforms":""}\${rs(e)}\`}},k_=n=>{if(n.shape==="cylinder"){const i=ws(n);if(i)return Nh(i,"vessel");const s=nl(n);return s?Fh(s,"vessel"):null}const e=Math.max(n.size[0],n.size[2]),t=Math.min(n.size[0],n.size[2]);return e>=1.5*t&&e>=1.5*n.size[1]?Fh(nl(n),"vessel"):Nh(ws(n),"vessel")},Bh=1,kh=1.2,Hh=2.2,Tn=n=>{if(n.shape!=="box")return null;const[e,t,i]=n.size,s=e>=i?"x":"z";return{dx:e,dh:t,dz:i,a:s,long:Math.max(e,i),wide:Math.min(e,i)}};function Gh(n,e,t,i){const s=[];for(const[a,l,c]of[[n,e,!0],[e,n,!1]]){const h=Math.max(1,Math.floor(a/2.5)),d=a/h;for(let f=0;f<h;f++){const p=-a/2+d*(f+.5);for(const g of[-1,1]){const _=l/2+.02;s.push(dt("glass",!0,c?[p,t+i/2,g*_]:[g*_,t+i/2,p],c?[.6*d,i,.04]:[.04,i,.6*d]))}}}return s}function Ts(n,e,t){const{dx:i,dh:s,dz:r}=n,o=Math.min(.25,.08*s),a=[dt("body",!1,[0,0,0],[i,s,r]),dt("concrete",!0,[0,s/2-o/2+.05,0],[i+2*e,o,r+2*e])],l=Math.min(Bh,.3*s),c=Math.min(kh,.4*s);t&&a.push(...Gh(i,r,-s/2+l,c));const h=Math.min(Hh,.7*s);return a.push(dt("steel",!0,[.3*i*.5,-s/2+h/2,r/2+.03],[1,h,.04])),a}const H_=n=>{const e=Tn(n);return e?{parts:Ts(e,.3,!0),model:"controlRoom",describes:"control room: walls, roof slab, window band, drawn inside the declared box"}:null},G_=n=>{const e=Tn(n);if(!e)return null;const t=Ts(e,.6,!0);return t.push(ct("steel",!0,[.3*e.dx,e.dh/2+.6,-.25*e.dz],"y",1.2,.25)),{parts:t,model:"canteen",describes:"canteen: windows all round, roof overhang, kitchen vent, drawn inside the declared box"}},V_=n=>{const e=Tn(n);return e?{parts:Ts(e,.5,!0),model:"gate",describes:"guardhouse (its barrier arm across the road is drawing), inside the declared box"}:null},W_=n=>{const e=Tn(n);if(!e)return null;const{dx:t,dh:i,dz:s,a:r,long:o,wide:a}=e,l=Math.min(.3*i,.25*a),c=i-l,h=[dt("body",!1,[0,-i/2+c/2,0],[t,c,s]),{prim:"prism",role:"roof",decoration:!1,at:[0,-i/2+c,0],axis:r==="x"?"x":"z",length:o,width:a,rise:l}],d=Math.min(4,.25*o),f=Math.min(4.5,.8*c);for(const p of[-.25*o,.25*o])for(const g of[-1,1])h.push(dt("steel",!0,r==="x"?[p,-i/2+f/2,g*(s/2+.03)]:[g*(t/2+.03),-i/2+f/2,p],r==="x"?[d,f,.05]:[.05,f,d]));return{parts:h,model:"warehouse",describes:"warehouse: portal shed, pitched roof, roller doors, drawn inside the declared box"}},X_=n=>{const e=Tn(n);if(!e)return null;const{dx:t,dh:i,dz:s,a:r,long:o,wide:a}=e,l=Math.min(.05,.3*i),c=[dt("body",!1,[0,-l/2,0],[t,i-l,s]),dt("steel",!1,[0,i/2-l/2,0],[t,l,s])],h=Math.max(1.5,6*i);for(const d of[-1,1])for(let p=0;p<4;p++){const g=i*(p+1)/4,_=h/4,m=d*(o/2+h-_*(p+.5));c.push(dt("concrete",!0,Lt(r,m,-i/2+g/2,0),r==="x"?[_,g,a]:[a,g,_]))}return{parts:c,model:"weighbridge",describes:"weighbridge: steel deck on its pit (the declared box), ramps at both ends (drawing)"}},Or=3.5,$_={controlRoom:H_,warehouse:W_,canteen:G_,gate:V_,weighbridge:X_,office:n=>{const e=Tn(n);if(!e)return null;const t=Ts(e,.4,!1),i=Math.max(1,Math.floor(e.dh/Or)),s=Math.min(Bh,.3*Or),r=Math.min(kh,.4*Or);for(let o=0;o<i;o++)t.push(...Gh(e.dx,e.dz,-e.dh/2+o*Or+s,r));return t.push(dt("steel",!0,[.15*e.dx,-e.dh/2+Hh+.6,e.dz/2+.9],[3,.12,1.8])),{parts:t,model:"office",describes:\`offices: \${i} storey(s), a window band each, roof slab, drawn inside the declared box\`}},carPark:n=>n.shape!=="box"?null:{parts:[dt("asphalt",!1,[0,0,0],[...n.size])],model:"carPark",describes:"car park: asphalt slab (the declared box); the bays painted on it are the engine's"},laydown:n=>{const e=Tn(n);if(!e)return null;const t=[dt("concrete",!1,[0,0,0],[e.dx,e.dh,e.dz])],i=e.dh/2;for(const[s,r,o]of[[-.3,-.2,1.2],[-.15,.15,1],[.25,-.1,1.4]])t.push(dt("machine",!0,[s*e.dx,i+o/2,r*e.dz],[o,o,o]));return{parts:t,model:"laydown",describes:"laydown area: hard standing (the declared box), bins on it (drawing)"}},musterPoint:n=>{const e=Tn(n);if(!e)return null;const t=[dt("green",!1,[0,0,0],[e.dx,e.dh,e.dz])],i=-.4*e.dx,s=-.4*e.dz;return t.push(dt("steel",!0,[i,e.dh/2+1.1,s],[.1,2.2,.1])),t.push(dt("green",!0,[i,e.dh/2+2.3,s],[1.2,.8,.05])),{parts:t,model:"musterPoint",describes:"muster point: green pad (the declared box) and its sign (drawing)"}},fireWaterTank:n=>{const e=zh(n);return e?{parts:e.parts.map(t=>t.role==="body"?{...t,role:"fire"}:t),model:"fireWaterTank",describes:"fire-water "+e.describes}:null},firePumpHouse:n=>{const e=Tn(n);if(!e)return null;const t=Ts(e,.3,!1).map(r=>r.role==="body"?{...r,role:"fire"}:r),i=Math.min(3,.4*e.long),s=Math.min(3,.75*e.dh);return t.push(dt("steel",!0,[0,-e.dh/2+s/2,e.dz/2+.03],[i,s,.05])),{parts:t,model:"firePumpHouse",describes:"fire-water pump house: red walls, roller door, drawn inside the declared box"}},windsock:n=>{const e=Tn(n);if(!e)return null;const t=Math.min(.1,.05*e.dh),i=Math.min(.08,.2*e.wide);return{parts:[dt("concrete",!1,[0,-e.dh/2+t/2,0],[e.dx,t,e.dz]),ct("steel",!1,[0,t/2,0],"y",e.dh-t,i)],model:"windsock",describes:"windsock: mast on its base (the declared box); the sock turned downwind by the declared wind is drawing"}}},Y_={vessel:k_,shellTubeHX:O_,storageTank:zh,stirredTank:F_,compressor:z_,sprayDryer:B_,membraneBank:n=>{const e=n.bank;if(!e)return null;const t=e.envelopeLength,i=e.envelopeWidth,s=e.envelopeHeight,r=(c,h,d)=>[c-t/2,d-s/2,-(h-i/2)],o=e.vesselOutsideDiameter/2,a=[],l=c0(e);for(let c=0;c<e.racks;c++){const h=l.filter(_=>_.rack===c);a.push({prim:"instances",role:"body",decoration:!1,at:[0,0,0],axis:"x",length:e.vesselLength,radius:o,centres:h.map(_=>r(_.x,_.y,_.z))});const d=c*(e.rackWidth+e.rackAisle),f=d+e.rackWidth/2;e.baseHeight>0&&a.push(dt("steel",!0,r(e.rackLength/2,f,e.baseHeight/2),[e.rackLength,e.baseHeight,e.rackWidth]));const p=.12;for(const _ of[p/2,e.rackLength-p/2])for(const m of[d+p/2,d+e.rackWidth-p/2])a.push(dt("steel",!0,r(_,m,(e.baseHeight+e.rackHeight)/2),[p,e.rackHeight-e.baseHeight,p]));const g=Math.min(.05,Math.max(0,(e.tierPitch-e.vesselOutsideDiameter)/2));if(g>=.01)for(let _=0;_<e.tiers;_++)for(const m of[.2,.8])a.push(dt("steel",!0,r(e.endMargin+m*e.vesselLength,f,e.baseHeight+_*e.tierPitch+(e.tierPitch-e.vesselOutsideDiameter)/2-g/2),[.15,g,e.rackWidth]))}return{parts:a,model:"membraneBank",describes:\`\${e.vessels} pressure vessels of \${e.elementsPerVessel} elements in \${e.racks} rack\${e.racks===1?"":"s"} (\${e.tiers} tiers of \${e.vesselsPerTier}), loading clearance \${e.loadingClearance.toFixed(2)} m free at the high-x end\`}}};function q_(n){if(n.shape==="cylinder"){const e=n.axis==="x"?n.size[0]:n.axis==="z"?n.size[2]:n.size[1],t=n.axis==="x"?n.size[1]:n.size[0];return{parts:[ct("body",!1,[0,0,0],n.axis,e,t/2)],model:"plain",describes:"cylinder (no drawing for this kind)"}}return{parts:[dt("body",!1,[0,0,0],[...n.size])],model:"plain",describes:"box (no drawing for this kind)"}}function j_(n){const e=(n.ports??[]).map(o=>({at:[o.at[0]-n.center[0],o.at[1]-n.center[1],o.at[2]-n.center[2]],dir:o.dir})),t={kind:n.kind,shape:n.shape,axis:n.axis,size:n.size,base:n.center[1]-n.size[1]/2,...n.bank?{bank:n.bank}:{},...e.length?{ports:e}:{}},s=(n.nonProcess?$_[n.kind]:Y_[n.kind])?.(t)??q_(t);if(!e.length)return s;const r=Math.min(.3,Math.max(.05,.05*Math.min(n.size[0],n.size[2])));return{...s,parts:[...s.parts.filter(o=>!o.nozzle),...e.flatMap(o=>N_(o.at,o.dir,r))],describes:\`\${s.describes}; \${e.length} nozzle\${e.length===1?"":"s"} at the engine's published ports\`}}const K_=240,il=45,An={area:6061306,zone:15764480,link:14692657,wind:1867478,outline:16731392},Z_={steel:[5660779,.7,.5],grating:[7304572,.6,.75],safety:[14920960,.2,.45],machine:[3893898,.35,.45],motor:[2973352,.3,.4],concrete:[12038824,0,.95],glass:[4020851,.6,.15],asphalt:[4079682,0,.95],fire:[13183530,.3,.5],green:[2853438,.1,.6],roof:[8030097,.6,.45]},kn={asphalt:[62,64,66],edge:15856629,barrierRed:14239759,barrierWhite:16316922},Rn={width:.15,inset:.3,dash:3,gap:3},Fr={process:[13883614,.85,.3],nonProcess:[13351316,.05,.85],flagged:[15227148,.25,.45]},sn={exposure:1,skyTop:"#6f9fd8",skyHorizon:"#dbe6ef",environment:.55,hemisphereSky:14675711,hemisphereGround:5990984,hemisphere:.9,sunColour:16773596,sun:2.8,grass:[98,126,70],gravel:[150,144,133],grid:5591628,pad:[196,193,186]};function Q_(n,e){return e.length===0?null:n(e,!1)}function J_(n,e){return n.shell?"shell":n.flagged&&!e.decoration?"flagged":e.role!=="body"?e.role:n.nonProcess?"nonProcess":"process"}function ex(n,e,t,i){const{THREE:s,OrbitControls:r,CSS2DRenderer:o,CSS2DObject:a}=n,l=i.height,c=()=>l==="fill"?Math.max(e.clientHeight,K_):l,h=Math.max(e.clientWidth,320),d=c();let f=i.quality??"high";const p=window.devicePixelRatio||1,g=()=>f==="high"?Math.min(p,2):1,_=new s.WebGLRenderer({antialias:!0,powerPreference:"high-performance"});_.setPixelRatio(g()),_.setSize(h,d),_.toneMapping=s.ACESFilmicToneMapping,_.toneMappingExposure=sn.exposure,_.outputColorSpace=s.SRGBColorSpace,_.shadowMap.enabled=f==="high",_.shadowMap.type=s.PCFSoftShadowMap,_.shadowMap.autoUpdate=!1,_.shadowMap.needsUpdate=!0,l==="fill"&&(_.domElement.style.position="absolute",_.domElement.style.top="0",_.domElement.style.left="0"),e.appendChild(_.domElement);const m=new o;m.setSize(h,d),m.domElement.style.position="absolute",m.domElement.style.top="0",m.domElement.style.left="0",m.domElement.style.pointerEvents="none",e.appendChild(m.domElement);const u=document.createElement("div");Object.assign(u.style,{position:"absolute",pointerEvents:"none",display:"none",font:"500 11px var(--mantine-font-family, sans-serif)",lineHeight:"1.35",padding:"4px 6px",borderRadius:"4px",maxWidth:"320px",zIndex:"2",color:"var(--mantine-color-text)",background:"light-dark(rgba(255,255,255,0.95), rgba(30,30,30,0.95))",border:"1px solid light-dark(#ced4da, #495057)"}),e.appendChild(u);const y=[],v=w=>(y.push(w),w),[S,,O]=t.min,[R,T,N]=t.max,E=Math.max(R-S,N-O,T,10),M=(S+R)/2,I=(O+N)/2,z=new s.Scene,V=sn.skyTop,j=sn.skyHorizon,oe=(()=>{const w=document.createElement("canvas");w.width=2,w.height=256;const $=w.getContext("2d");if($){const J=$.createLinearGradient(0,0,0,256);J.addColorStop(0,V),J.addColorStop(1,j),$.fillStyle=J,$.fillRect(0,0,2,256)}const ie=v(new s.CanvasTexture(w));return ie.colorSpace=s.SRGBColorSpace,ie})();z.background=oe,z.fog=new s.Fog(j,E*2.5,E*9);const Z=new s.PMREMGenerator(_),fe=new n.RoomEnvironment,Q=v(Z.fromScene(fe,.04).texture);fe.dispose(),Z.dispose(),z.environment=Q,z.environmentIntensity=sn.environment,z.add(new s.HemisphereLight(sn.hemisphereSky,sn.hemisphereGround,sn.hemisphere));const ue=new s.DirectionalLight(sn.sunColour,sn.sun),U=new s.Vector3(.55,1,.45).normalize(),te=Math.hypot(R-S,N-O)/2+T+5;ue.position.set(M+U.x*te*2,U.y*te*2,I+U.z*te*2),ue.target.position.set(M,0,I),ue.castShadow=!0,ue.shadow.mapSize.set(2048,2048),ue.shadow.camera.left=-te,ue.shadow.camera.right=te,ue.shadow.camera.top=te,ue.shadow.camera.bottom=-te,ue.shadow.camera.near=.5,ue.shadow.camera.far=te*4,ue.shadow.bias=-4e-4,ue.shadow.normalBias=.04*Math.max(1,te/50),ue.shadow.radius=3,z.add(ue),z.add(ue.target);const xe=[],Le=(w,$,ie,J=!1,x="always")=>{const C=document.createElement("div");C.textContent=w,C.style.font=\`\${J?700:500} 11px var(--mantine-font-family, sans-serif)\`,C.style.padding="1px 4px",C.style.borderRadius="3px",C.style.whiteSpace="nowrap",C.style.color="var(--mantine-color-text)",C.style.background="light-dark(rgba(255,255,255,0.85), rgba(30,30,30,0.85))",J&&(C.style.border="2px solid currentColor");const F=new a(C);F.position.set($[0],$[1],$[2]),z.add(F),xe.push({obj:F,el:C,priority:ie,group:x,w:0,h:0})},ne=(w,$,ie)=>{const x=document.createElement("canvas");x.width=128,x.height=128;const C=x.getContext("2d");if(C){const D=C.createImageData(128,128);let A=1234567;const B=()=>(A=A*16807%2147483647)/2147483647;for(let W=0;W<128*128;W++){const ee=(B()-.5)*2*$;D.data[4*W]=Math.max(0,Math.min(255,w[0]+ee)),D.data[4*W+1]=Math.max(0,Math.min(255,w[1]+ee)),D.data[4*W+2]=Math.max(0,Math.min(255,w[2]+ee)),D.data[4*W+3]=255}C.putImageData(D,0,0)}const F=v(new s.CanvasTexture(x));return F.colorSpace=s.SRGBColorSpace,F.wrapS=s.RepeatWrapping,F.wrapT=s.RepeatWrapping,F.repeat.set(ie,ie),F},de=(w,$)=>v(new s.MeshLambertMaterial({map:w,polygonOffset:!0,polygonOffsetFactor:$,polygonOffsetUnits:$})),ye=(w,$,ie,J)=>{const x=new s.Mesh(v(new s.PlaneGeometry(w,$)),J);return x.rotation.x=-Math.PI/2,x.position.set(ie[0],0,ie[1]),x.receiveShadow=!0,z.add(x),x},ge=t.plot??{x0:S-5,x1:R+5,z0:O-5,z1:N+5};{const w=E*7,$=de(ne(sn.grass,18,1),4);$.map.repeat.set(w/2,w/2);const{x0:ie,x1:J,z0:x,z1:C}=ge,F=M-w,D=M+w,A=I-w,B=I+w,W=(me,le,Pe,Ye)=>{if(le-me<=0||Ye-Pe<=0)return;const Ve=ye(le-me,Ye-Pe,[(me+le)/2,(Pe+Ye)/2],$).geometry.getAttribute("uv");for(let De=0;De<Ve.count;De++)Ve.setXY(De,(me+Ve.getX(De)*(le-me)-F)/(2*w),(Pe+(1-Ve.getY(De))*(Ye-Pe)-A)/(2*w));Ve.needsUpdate=!0};W(F,D,A,x),W(F,D,C,B),W(F,ie,x,C),W(J,D,x,C);const ee=J-ie,K=C-x,he=de(ne(sn.gravel,30,1),2);he.map.repeat.set(ee/3,K/3),ye(ee,K,[(ie+J)/2,(x+C)/2],he)}{const w=E>200?10:E>60?5:1,$=[],{x0:ie,x1:J,z0:x,z1:C}=ge;for(let F=Math.ceil(ie/w)*w;F<=J;F+=w)$.push(new s.Vector3(F,.02,x),new s.Vector3(F,.02,C));for(let F=Math.ceil(x/w)*w;F<=C;F+=w)$.push(new s.Vector3(ie,.02,F),new s.Vector3(J,.02,F));z.add(new s.LineSegments(new s.BufferGeometry().setFromPoints($),new s.LineBasicMaterial({color:sn.grid,transparent:!0,opacity:.18,depthWrite:!1})))}for(const w of t.areas){const $=w.x1-w.x0,ie=w.z1-w.z0,J=de(ne(sn.pad,10,1),0);J.map.repeat.set($/4,ie/4),ye($,ie,[(w.x0+w.x1)/2,(w.z0+w.z1)/2],J);const x=[[w.x0,w.z0],[w.x1,w.z0],[w.x1,w.z1],[w.x0,w.z1]].map(([C,F])=>new s.Vector3(C,.03,F));z.add(new s.LineLoop(new s.BufferGeometry().setFromPoints(x),new s.LineBasicMaterial({color:An.area,fog:!1}))),Le(w.label,[w.x0,.05,w.z0],At.other)}if(t.plot){const w=t.plot,$=[[w.x0,w.z0],[w.x1,w.z0],[w.x1,w.z1],[w.x0,w.z1]].map(([J,x])=>new s.Vector3(J,.04,x)),ie=new s.LineLoop(new s.BufferGeometry().setFromPoints($),new s.LineDashedMaterial({color:An.area,dashSize:2,gapSize:1.5,fog:!1}));ie.computeLineDistances(),z.add(ie),Le(w.label,[w.x1,.05,w.z1],At.other)}const Se=w=>v(new s.MeshStandardMaterial({color:w[0],metalness:w[1],roughness:w[2]})),we=new Map;for(const[w,$]of Object.entries(Z_))we.set(w,Se($));const Ne={process:Se(Fr.process),nonProcess:Se(Fr.nonProcess),flagged:Se(Fr.flagged),shell:v(new s.MeshStandardMaterial({color:Fr.nonProcess[0],transparent:!0,opacity:.12,depthWrite:!1,roughness:.3,metalness:0}))},it=new s.Vector3(0,1,0),Xe=w=>w<.06?6:w<.3?12:w<2?32:48,at=w=>{let $;const ie=J=>{J==="x"?$.rotateZ(-Math.PI/2):J==="z"&&$.rotateX(Math.PI/2)};switch(w.prim){case"box":$=new s.BoxGeometry(w.size[0],w.size[1],w.size[2]),w.yaw&&$.rotateY(w.yaw);break;case"cylinder":{const J=Math.max(w.rStart,w.rEnd);$=w.arc?new s.CylinderGeometry(w.rEnd,w.rStart,w.length,Xe(J),1,!1,Math.PI/2-(w.arc[0]+w.arc[1]),w.arc[1]):new s.CylinderGeometry(w.rEnd,w.rStart,w.length,Xe(J),1,!1),typeof w.axis=="string"?ie(w.axis):$.applyQuaternion(new s.Quaternion().setFromUnitVectors(it,new s.Vector3(...w.axis).normalize()));break}case"head":$=new s.SphereGeometry(w.r,Xe(w.r),10,0,2*Math.PI,0,Math.PI/2),$.scale(1,w.depth/w.r,1),w.sign<0&&$.rotateX(Math.PI),ie(w.axis);break;case"ring":$=new s.TorusGeometry(w.R,w.r,5,Math.max(8,Math.round(24*w.arc[1])),w.arc[1]),$.rotateX(Math.PI/2),$.rotateY(-w.arc[0]);break;case"prism":{$=new s.CylinderGeometry(1,1,w.length,3,1,!1,-Math.PI/2),$.rotateZ(-Math.PI/2),$.translate(0,.5,0),$.scale(1,w.rise/1.5,w.width/Math.sqrt(3)),w.axis==="z"&&$.rotateY(Math.PI/2),$=$.toNonIndexed(),$.computeVertexNormals();break}case"instances":throw new Error("an instanced part is drawn by InstancedMesh, not merged")}return $.translate(w.at[0],w.at[1],w.at[2]),$},H=[],ht=[];for(const w of t.solids){const $=j_(w),ie=Sh(w,i.facts),J=[...w.tooltip.slice(0,2),\`drawn as: \${$.describes}\`,...w.tooltip.slice(2),...ie?["NOT MODELLED: declared by the case, not sized by the engine"]:[]],x={kind:"item",id:w.id,shell:!!w.shell},C=B=>{const W=J_(w,B);return W==="shell"||W==="flagged"||W==="nonProcess"||W==="process"?[W,Ne[W]]:[W,we.get(B.role)]},F=new Map,D=[];for(const B of $.parts){const[W,ee]=C(B);if(B.prim==="instances"){D.push({part:B,mat:ee});continue}const K=F.get(W)??{mat:ee,geoms:[],envelope:!1};K.geoms.push(at(B)),K.envelope||(K.envelope=!B.decoration),F.set(W,K)}const A=new s.Group;A.position.set(...w.center);for(const{mat:B,geoms:W,envelope:ee}of F.values()){const K=W.some(le=>!le.index)&&W.some(le=>le.index)?W.map(le=>{if(!le.index)return le;const Pe=le.toNonIndexed();return le.dispose(),Pe}):W,he=K.length===1?K[0]:n.mergeGeometries(K,!1);if(K.length>1)for(const le of K)le.dispose();if(!he)continue;v(he);const me=new s.Mesh(he,B);me.castShadow=!w.shell,me.receiveShadow=!0,me.userData.tooltip=J,me.userData.pick=x,A.add(me),H.push(me),w.flagged&&ee&&!w.shell&&ht.push(me)}for(const{part:B,mat:W}of D){if(B.centres.length===0)continue;const ee=new s.CylinderGeometry(B.radius,B.radius,B.length,Xe(B.radius),1,!1);B.axis==="x"?ee.rotateZ(-Math.PI/2):ee.rotateX(Math.PI/2);const K=new s.InstancedMesh(v(ee),W,B.centres.length),he=new s.Matrix4;B.centres.forEach((me,le)=>{K.setMatrixAt(le,he.makeTranslation(B.at[0]+me[0],B.at[1]+me[1],B.at[2]+me[2]))}),K.instanceMatrix.needsUpdate=!0,K.castShadow=!0,K.receiveShadow=!0,K.userData.tooltip=J,K.userData.pick=x,v(K),A.add(K),H.push(K),w.flagged&&!B.decoration&&ht.push(K)}if(w.shell){const[B,W,ee]=[w.size[0]/2,w.size[1]/2,w.size[2]/2],K=(le,Pe,Ye)=>new s.Vector3(le?B:-B,Pe?W:-W,Ye?ee:-ee),he=[];for(const le of[0,1])for(const Pe of[0,1])he.push(K(0,le,Pe),K(1,le,Pe));for(const le of[0,1])for(const Pe of[0,1])he.push(K(le,0,Pe),K(le,1,Pe));for(const le of[0,1])for(const Pe of[0,1])he.push(K(le,Pe,0),K(le,Pe,1));const me=new s.LineSegments(v(new s.BufferGeometry().setFromPoints(he)),v(new s.LineBasicMaterial({color:w.flagged?15227148:9076586})));A.add(me)}z.add(A),Le(ie&&!w.nonProcess?\`\${w.label} · not modelled\`:w.label,[w.center[0],w.center[1]+w.size[1]/2+.6,w.center[2]],w.flagged?At.finding:At.item,w.flagged)}if(t.roads.length>0){const w=de(ne(kn.asphalt,10,1),-1);w.map.repeat.set(E/4,E/4);const $=[],ie=(x,C,F,D,A)=>{const B=Math.hypot(F-x,D-C);if(B<.001)return;const W=new s.PlaneGeometry(B,A);W.rotateX(-Math.PI/2),W.rotateY(-Math.atan2(D-C,F-x)),W.translate((x+F)/2,.01,(C+D)/2),$.push(W)},J=(x,C,F,D)=>{const A=ye(C-x,D-F,[(x+C)/2,(F+D)/2],w),W=A.geometry.getAttribute("uv");for(let ee=0;ee<W.count;ee++)W.setXY(ee,(x+W.getX(ee)*(C-x))/E,(F+(1-W.getY(ee))*(D-F))/E);return W.needsUpdate=!0,A.userData.tooltip=void 0,A};for(const x of t.roads){const C=x.width/2,F=x.points.length;for(let B=0;B+1<F;B++){const W=x.points[B],ee=x.points[B+1],K=Math.min(W[0],ee[0])-C,he=Math.max(W[0],ee[0])+C,me=Math.min(W[2],ee[2])-C,le=Math.max(W[2],ee[2])+C,Pe=J(K,he,me,le);Pe.userData.tooltip=x.tooltip,H.push(Pe);const Ye=Math.sign(ee[0]-W[0]),Ke=Math.sign(ee[2]-W[2]),ft=B===0&&x.freeStart,Ve=B+2===F&&x.freeEnd,De=ft?.5:C+.5,It=Ve?.5:C+.5,nt=W[0]+Ye*De,Ot=W[2]+Ke*De,vn=ee[0]-Ye*It,Ft=ee[2]-Ke*It;if((vn-nt)*Ye+(Ft-Ot)*Ke<=0)continue;const Pn=-Ke*(C-Rn.inset),pt=Ye*(C-Rn.inset);ie(nt+Pn,Ot+pt,vn+Pn,Ft+pt,Rn.width),ie(nt-Pn,Ot-pt,vn-Pn,Ft-pt,Rn.width);const hn=Math.hypot(vn-nt,Ft-Ot);for(let un=0;un+Rn.dash<=hn+1e-9;un+=Rn.dash+Rn.gap)ie(nt+Ye*un,Ot+Ke*un,nt+Ye*(un+Rn.dash),Ot+Ke*(un+Rn.dash),Rn.width)}const D=x.points[Math.floor((F-1)/2)],A=x.points[Math.floor((F-1)/2)+1];Le(x.road,[(D[0]+A[0])/2,.3,(D[2]+A[2])/2],At.other,x.disconnected)}if($.length){const x=n.mergeGeometries($,!1);for(const C of $)C.dispose();x&&(v(x),z.add(new s.Mesh(x,v(new s.MeshLambertMaterial({color:kn.edge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})))))}}{const w=de(ne(kn.asphalt,10,1),-1);w.map.repeat.set(E/4,E/4);const $=(D,A)=>{if(D.length<3)return null;const B=[];for(let ee=1;ee+1<D.length;ee++)for(const K of[D[0],D[ee+1],D[ee]])B.push(new s.Vector3(K[0],A,K[2]));const W=new s.BufferGeometry().setFromPoints(B);return W.computeVertexNormals(),W},ie=(D,A,B,W,ee)=>{const[K,he]=A,me=-he,le=K;return $([[D[0]+K*B/2,ee,D[2]+he*B/2],[D[0]-K*B/2+me*W,ee,D[2]-he*B/2+le*W],[D[0]-K*B/2-me*W,ee,D[2]-he*B/2-le*W]],ee)},J=[],x=[],C=[],F=v(w.clone());F.side=s.DoubleSide;for(const D of t.approaches){const A=D.width/2,B=Math.abs(D.from[0]-D.to[0])<1e-6,W=Math.min(D.from[0],D.to[0])-(B?A:0),ee=Math.max(D.from[0],D.to[0])+(B?A:0),K=Math.min(D.from[2],D.to[2])-(B?0:A),he=Math.max(D.from[2],D.to[2])+(B?0:A);ee-W>.001&&he-K>.001&&ye(ee-W,he-K,[(W+ee)/2,(K+he)/2],w)}for(const D of t.turningAreas){const A=new s.Mesh(v(new s.CylinderGeometry(D.radius,D.radius,.02,48)),w);A.position.set(D.at[0],0,D.at[2]),A.receiveShadow=!0,A.userData.tooltip=D.tooltip,H.push(A),z.add(A),Le(\`turning area \${D.area}\`,[D.at[0],.3,D.at[2]],At.other)}for(const D of t.roads)if(D.oneWay)for(let A=0;A+1<D.points.length;A++){const B=D.points[A],W=D.points[A+1],ee=Math.hypot(W[0]-B[0],W[2]-B[2]);if(ee<1e-6)continue;const K=[(W[0]-B[0])/ee,(W[2]-B[2])/ee];for(let he=Tr/2;he<ee-2;he+=Tr){const me=ie([B[0]+K[0]*he,0,B[2]+K[1]*he],K,2.4,.9,.015);me&&C.push(me)}}for(const D of t.truckRoutes){for(const K of D.fillets){const he=$(K,.005);if(he){const me=new s.Mesh(v(he),F);me.receiveShadow=!0,z.add(me)}}const A=D.verdict==="clear"?2853438:15227148,B=new s.Line(v(new s.BufferGeometry().setFromPoints(D.points.map(K=>new s.Vector3(K[0],.06,K[2])))),v(new s.LineDashedMaterial({color:A,dashSize:2.5,gapSize:1.2,fog:!1})));B.computeLineDistances(),B.userData.tooltip=D.tooltip,H.push(B),z.add(B);const W=[];for(const K of D.arrows){const he=ie(K.at,K.dir,2,.75,.05);he&&W.push(he)}if(W.length){const K=n.mergeGeometries(W,!1);for(const he of W)he.dispose();if(K){v(K);const he=new s.Mesh(K,v(new s.MeshBasicMaterial({color:A})));he.userData.tooltip=D.tooltip,H.push(he),z.add(he)}}const ee=D.points[Math.floor(D.points.length/3)];ee&&Le(\`truck route \${D.route}\${D.verdict==="clear"?"":" ⚠"}\`,[ee[0],.6,ee[2]],At.other,D.verdict!=="clear")}for(const D of t.carParks)for(const A of D.bays){const[B,W]=A.dir,ee=-W,K=B,he=A.w/2,me=A.l/2,le=.215,Pe=(ft,Ve)=>[A.at[0]+B*ft*me+ee*Ve*he,A.at[2]+W*ft*me+K*Ve*he],Ye=(ft,Ve)=>{const De=Math.hypot(Ve[0]-ft[0],Ve[1]-ft[1]),It=new s.PlaneGeometry(De,.2);It.rotateX(-Math.PI/2),It.rotateY(-Math.atan2(Ve[1]-ft[1],Ve[0]-ft[0])),It.translate((ft[0]+Ve[0])/2,le,(ft[1]+Ve[1])/2),J.push(It)};Ye(Pe(-1,-1),Pe(1,-1)),Ye(Pe(-1,1),Pe(1,1)),Ye(Pe(-1,-1),Pe(-1,1));const Ke=ie([A.at[0]+B*me*.45,0,A.at[2]+W*me*.45],[B,W],1,.45,le);Ke&&x.push(Ke)}if(J.length){const D=n.mergeGeometries(J,!1);for(const A of J)A.dispose();D&&(v(D),z.add(new s.Mesh(D,v(new s.MeshLambertMaterial({color:kn.edge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})))))}if(C.length){const D=n.mergeGeometries(C,!1);for(const A of C)A.dispose();D&&(v(D),z.add(new s.Mesh(D,v(new s.MeshLambertMaterial({color:kn.edge})))))}if(x.length){const D=n.mergeGeometries(x,!1);for(const A of x)A.dispose();D&&(v(D),z.add(new s.Mesh(D,v(new s.MeshLambertMaterial({color:2853438})))))}for(const D of t.windsocks){const A=new s.Group,B=2.4;for(let W=0;W<4;W++){const ee=.45-.07*W,K=.45-.07*(W+1),he=new s.Mesh(v(new s.CylinderGeometry(K,ee,B/4,16,1,!0)),Se([W%2?kn.barrierWhite:kn.barrierRed,0,.7]));he.position.set(0,B/8+W*B/4,0),A.add(he)}A.position.set(D.top[0],D.top[1]-.6,D.top[2]),A.quaternion.setFromUnitVectors(new s.Vector3(0,1,0),new s.Vector3(D.dir[0],-.25,D.dir[1]).normalize()),z.add(A)}}for(const w of t.barriers){const[$,,ie]=w.post,[J,x,C]=w.end,F=new s.Mesh(v(new s.BoxGeometry(.35,x+.2,.35)),we.get("steel"));F.position.set($,(x+.2)/2,ie),F.castShadow=!0,z.add(F);const D=Math.hypot(J-$,C-ie),A=Math.max(2,Math.round(D/.6)),B=Se([kn.barrierRed,.1,.5]),W=Se([kn.barrierWhite,.1,.5]);for(let ee=0;ee<A;ee++){const K=ee/A,he=(ee+1)/A,me=new s.Mesh(v(new s.BoxGeometry(D/A,.1,.1)),ee%2?W:B);me.position.set($+(J-$)*(K+he)/2,x,ie+(C-ie)*(K+he)/2),me.rotation.y=-Math.atan2(C-ie,J-$),me.castShadow=!0,z.add(me)}}if(t.fence){const w=t.fence,$=64,ie=document.createElement("canvas");ie.width=$,ie.height=$;const J=ie.getContext("2d");J&&(J.clearRect(0,0,$,$),J.strokeStyle="rgba(120,128,136,0.95)",J.lineWidth=3,J.beginPath(),J.moveTo(0,0),J.lineTo($,$),J.moveTo($,0),J.lineTo(0,$),J.stroke());const x=v(new s.CanvasTexture(ie));x.colorSpace=s.SRGBColorSpace,x.wrapS=s.RepeatWrapping,x.wrapT=s.RepeatWrapping;const C=v(new s.MeshLambertMaterial({map:x,transparent:!0,alphaTest:.3,side:s.DoubleSide})),F=we.get("steel");for(const[A,B]of w.runs){const W=Math.hypot(B[0]-A[0],B[2]-A[2]),ee=v(new s.PlaneGeometry(W,w.height)),K=ee.getAttribute("uv");for(let le=0;le<K.count;le++)K.setXY(le,K.getX(le)*W/.25,K.getY(le)*w.height/.25);K.needsUpdate=!0;const he=new s.Mesh(ee,C);he.position.set((A[0]+B[0])/2,w.height/2,(A[2]+B[2])/2),he.rotation.y=-Math.atan2(B[2]-A[2],B[0]-A[0]),he.userData.tooltip=w.tooltip,H.push(he),z.add(he);const me=new s.Mesh(v(new s.CylinderGeometry(.03,.03,W,6)),F);me.rotation.z=Math.PI/2,me.rotation.y=-Math.atan2(B[2]-A[2],B[0]-A[0]),me.position.set((A[0]+B[0])/2,w.height,(A[2]+B[2])/2),z.add(me)}const D=v(new s.CylinderGeometry(.04,.04,w.height+.1,6));for(const A of w.posts){const B=new s.Mesh(D,F);B.position.set(A[0],(w.height+.1)/2,A[2]),B.castShadow=!0,z.add(B)}}for(const w of t.bunds){const $=w.flagged?Ne.flagged:we.get("concrete");for(const[J,x]of w.runs){const C=Math.hypot(x[0]-J[0],x[2]-J[2]);if(C<1e-6)continue;const F=new s.Mesh(v(new s.BoxGeometry(C+ka,w.height,ka)),$);F.position.set((J[0]+x[0])/2,w.height/2,(J[2]+x[2])/2),F.rotation.y=-Math.atan2(x[2]-J[2],x[0]-J[0]),F.castShadow=!0,F.receiveShadow=!0,F.userData.tooltip=w.tooltip,H.push(F),z.add(F)}if(w.pit){const J=new s.Mesh(v(new s.BoxGeometry(w.pit.sizeX,w.pit.depth,w.pit.sizeZ)),v(new s.MeshStandardMaterial({color:3817284,roughness:.95,metalness:0,transparent:!0,opacity:.85})));J.position.set(w.pit.at[0],-w.pit.depth/2+.01,w.pit.at[2]),J.userData.tooltip=w.tooltip,H.push(J),z.add(J),Le(\`pit of \${w.bund}\`,[w.pit.at[0],.3,w.pit.at[2]],At.other)}const ie=w.runs[0];ie&&Le(w.label,[ie[0][0],w.height+.4,ie[0][2]],w.flagged?At.finding:At.other,w.flagged)}for(const w of t.crossings){const[$,ie,J]=w.at,[x,,C]=w.outside,F=Math.hypot(x-$,C-J),D=Se([w.labelled?4804695:14239759,.4,.6]),A=new s.Mesh(v(new s.CylinderGeometry(.22,.22,F,12)),D);A.rotation.z=Math.PI/2,A.rotation.y=-Math.atan2(C-J,x-$),A.position.set(($+x)/2,ie,(J+C)/2),A.castShadow=!0,A.userData.tooltip=w.tooltip,H.push(A),z.add(A);for(const he of[.5,1]){const me=$+(x-$)*he,le=J+(C-J)*he,Pe=new s.Mesh(v(new s.BoxGeometry(.25,ie,.25)),we.get("steel"));Pe.position.set(me,ie/2,le),z.add(Pe)}const[B,,W]=w.sign,ee=new s.Mesh(v(new s.BoxGeometry(.12,1.8,.12)),we.get("steel"));ee.position.set(B,.9,W),z.add(ee);const K=new s.Mesh(v(new s.BoxGeometry(1.4,.8,.06)),Se([w.labelled?1667522:14239759,.2,.6]));K.position.set(B,1.8,W),K.rotation.y=-Math.atan2(C-J,x-$)+Math.PI/2,K.userData.tooltip=w.tooltip,H.push(K),z.add(K),Le(w.text,[B,2.6,W],At.item,!w.labelled)}for(const w of t.unrouted){const $=new s.Line(new s.BufferGeometry().setFromPoints([new s.Vector3(...w.at),new s.Vector3(...w.top)]),new s.LineDashedMaterial({color:An.link,dashSize:.4,gapSize:.3,fog:!1,toneMapped:!1}));$.computeLineDistances(),z.add($);const ie=new s.Mesh(v(new s.SphereGeometry(.45,16,12)),new s.MeshBasicMaterial({color:An.link,fog:!1,toneMapped:!1}));ie.position.set(...w.at),ie.userData.tooltip=w.tooltip,H.push(ie),z.add(ie),Le(w.text,w.top,At.finding,!0)}const Ge=new s.Group;z.add(Ge);for(const w of t.zones){const $=new s.CylinderGeometry(w.radius,w.radius,w.height,48,1,!0),ie=new s.Mesh($,new s.MeshBasicMaterial({color:An.zone,transparent:!0,opacity:w.opacity,fog:!1,toneMapped:!1,side:s.DoubleSide,depthWrite:!1,wireframe:w.edge==="wire"}));ie.position.set(...w.center),Ge.add(ie);const J=x=>{const C=[];for(let D=0;D<=64;D++){const A=D/64*2*Math.PI;C.push(new s.Vector3(w.center[0]+w.radius*Math.cos(A),x,w.center[2]+w.radius*Math.sin(A)))}const F=new s.Line(new s.BufferGeometry().setFromPoints(C),w.edge==="dashed"?new s.LineDashedMaterial({color:An.zone,dashSize:.8,gapSize:.6,fog:!1,toneMapped:!1}):new s.LineBasicMaterial({color:An.zone,fog:!1,toneMapped:!1}));F.computeLineDistances(),Ge.add(F)};J(w.center[1]-w.height/2),J(w.center[1]+w.height/2),Le(w.label,[w.center[0]+w.radius,w.center[1]+w.height/2,w.center[2]],At.zone,!1,"zone")}for(const w of t.links){const $=new s.Line(new s.BufferGeometry().setFromPoints([new s.Vector3(...w.from),new s.Vector3(...w.to)]),new s.LineDashedMaterial({color:An.link,dashSize:.4,gapSize:.3,fog:!1,toneMapped:!1}));$.computeLineDistances(),z.add($),Le(w.label,[(w.from[0]+w.to[0])/2,(w.from[1]+w.to[1])/2+.5,(w.from[2]+w.to[2])/2],At.finding,!0)}const $e=new s.Group;if(z.add($e),t.rack){const w=t.rack,$=w.tiers[w.tiers.length-1],ie=[],J=[],x=(F,D,A,B,W,ee,K)=>{const he=new s.BoxGeometry(F,D,A);he.translate(B,W,ee),K.push(he)},C=2*w.halfWidth+.4;for(const F of w.portals){for(const D of[-w.halfWidth-.2,w.halfWidth+.2])x(.3,$,.3,F,$/2,w.zc+D,ie),x(.7,.3,.7,F,.15,w.zc+D,J);for(const D of w.tiers)x(.25,.3,C,F,D-.35,w.zc,ie)}for(const F of w.tiers)for(const D of[-w.halfWidth-.2,w.halfWidth+.2])x(w.x1-w.x0,.22,.18,(w.x0+w.x1)/2,F-.35,w.zc+D,ie);for(const[F,D]of[[ie,"steel"],[J,"concrete"]]){const A=Q_(n.mergeGeometries,F);for(const W of F)W.dispose();if(!A)continue;v(A);const B=new s.Mesh(A,we.get(D));B.castShadow=!0,B.receiveShadow=!0,$e.add(B)}Le(w.label,[w.x0,$+1,w.zc],At.other)}const Ue=Se([4147023,.75,.4]);for(const w of t.junctions){const $=new s.Mesh(v(new s.SphereGeometry(.45,20,14)),Ue);$.position.set(...w.at),$.castShadow=!0,$.userData.tooltip=[w.label,"a junction on the rack: an unsized unit the pipes pass through"],$e.add($),H.push($),Le(w.label,[w.at[0],w.at[1]+.9,w.at[2]],At.other)}const lt=new Map;for(const w of["liquid","vapour","twoPhase","unknown"])lt.set(w,v(new s.MeshStandardMaterial({color:Si[w],transparent:!0,opacity:.45,roughness:.2,metalness:.1,depthWrite:!1})));const Oe=(w,$)=>{const ie=w.map(B=>new s.Vector3(...B)),J=ie.filter((B,W)=>W===0||B.distanceTo(ie[W-1])>1e-6);if(J.length<2)return null;const x=[],C=J.map(()=>0),F=J.map(()=>0),D=$<.2?10:14;for(let B=1;B+1<J.length;B++){const W=J[B].clone().sub(J[B-1]),ee=J[B+1].clone().sub(J[B]),K=W.length(),he=ee.length();W.normalize(),ee.normalize();const me=Math.max(-1,Math.min(1,W.dot(ee))),le=Math.acos(me);if(le<.001||le>Math.PI-.001)continue;let Pe=Math.max(4*$,.6);const Ye=.5*Math.min(K,he);let Ke=Pe*Math.tan(le/2);Ke>Ye&&(Ke=Ye,Pe=Ke/Math.tan(le/2)),F[B-1]=Ke,C[B]=Ke;const ft=ee.clone().sub(W.clone().multiplyScalar(me)).normalize(),Ve=ft.clone().negate(),De=new s.Vector3().crossVectors(Ve,W),It=J[B].clone().sub(W.clone().multiplyScalar(Ke)).add(ft.clone().multiplyScalar(Pe)),nt=new s.TorusGeometry(Pe,$,D,Math.max(6,Math.round(le*8)),le);nt.applyMatrix4(new s.Matrix4().makeBasis(Ve,W,De).setPosition(It)),x.push(nt)}for(let B=0;B+1<J.length;B++){const W=J[B],K=J[B+1].clone().sub(W),he=K.length()-C[B]-F[B];if(he<1e-4)continue;K.normalize();const me=new s.CylinderGeometry($,$,he,D,1,!0);me.applyQuaternion(new s.Quaternion().setFromUnitVectors(it,K));const le=W.clone().add(K.clone().multiplyScalar(C[B]+he/2));me.translate(le.x,le.y,le.z),x.push(me)}if(x.length===0)return null;const A=n.mergeGeometries(x,!1);for(const B of x)B.dispose();return A},P=[],b=v(new s.SphereGeometry(.24,10,8)),Y=v(new s.OctahedronGeometry(.3)),ae=v(new s.BoxGeometry(.32,.32,.32)),ce=new Map,se=[],Ae=[];for(const w of t.pipes){const $=Oe(w.points,w.radius);if($){v($);const x=v(new s.MeshStandardMaterial({color:Si[w.phase],transparent:!0,opacity:.45,roughness:.2,metalness:.1,depthWrite:!1}));Ae.push(x);const C=new s.Mesh($,x);C.userData.pick={kind:"pipe",id:w.id},C.userData.tooltip=w.tooltip,$e.add(C),H.push(C)}else Ae.push(null);let ie=0;for(let x=1;x<w.points.length;x++){const C=w.points[x-1],F=w.points[x];ie+=Math.hypot(F[0]-C[0],F[1]-C[1],F[2]-C[2])}const J=Math.max(3,Math.min(60,Math.round(ie/2.5)));for(let x=0;x<J;x++){const[C,F]=w.phase==="liquid"?[b,"s"]:w.phase==="vapour"?[Y,"o"]:w.phase==="twoPhase"?x%2?[b,"s"]:[Y,"o"]:[ae,"c"],D=\`\${w.phase}:\${F}\`,A=ce.get(D)??{geo:C,phase:w.phase,n:0};A.n+=1,ce.set(D,A),se.push({key:D,s:x*ie/J,speed:w.speed,points:w.points})}}const _e=new Map,be=new Map;for(const[w,$]of ce){const ie=v(new s.MeshStandardMaterial({color:Si[$.phase],emissive:Si[$.phase],emissiveIntensity:.45,roughness:.35})),J=new s.InstancedMesh($.geo,ie,$.n);J.userData.noAO=!0,_e.set(w,J),be.set(w,0),$e.add(J)}const qe=new s.Matrix4;for(const w of se){const $=_e.get(w.key),ie=be.get(w.key);be.set(w.key,ie+1);const J=Rr(w.points,w.s);$.setMatrixAt(ie,qe.makeTranslation(J[0],J[1],J[2])),P.push({mesh:$,index:ie,s:w.s,speed:w.speed,points:w.points})}if(t.wind){const w=new s.Vector3(...t.wind.tail),ie=new s.Vector3(...t.wind.head).clone().sub(w),J=ie.length();z.add(new s.ArrowHelper(ie.normalize(),w,J,An.wind,Math.min(.25*J,6),Math.min(.12*J,3))),Le(t.wind.label,t.wind.tail,At.other)}Le("N ↑ (plan +y)",[t.fitMin[0],.1,t.fitMin[2]-2],At.other);const pe=Math.max(E,t.fitMax[0]-t.fitMin[0],t.fitMax[2]-t.fitMin[2])*50,Ee=new s.PerspectiveCamera(il,h/d,Math.max(.1,E/2e3),pe),Re=new r(Ee,_.domElement);Re.maxPolarAngle=Math.PI/2-.02;let ze=null,Ce=!n.post;const et=()=>{if(Ce||!n.post)return null;try{const w=n.post,$=Math.max(e.clientWidth,320),ie=c(),J=new s.WebGLRenderTarget($*g(),ie*g(),{type:s.HalfFloatType,samples:4}),x=new w.EffectComposer(_,J);x.setPixelRatio(g()),x.addPass(new w.RenderPass(z,Ee));const C=new w.GTAOPass(z,Ee,$,ie);C.updateGtaoMaterial({radius:1.2,distanceExponent:1,thickness:1,scale:1}),C.blendIntensity=.9;const F=new Map;let D=null;if(C.overrideVisibility=()=>{D=z.background,z.background=null,z.traverse(A=>{F.set(A,A.visible);const B=A.material;!A.isLine&&!A.userData.noAO&&!(B&&!Array.isArray(B)&&B.transparent)||(A.visible=!1)})},C.restoreVisibility=()=>{z.traverse(A=>{const B=F.get(A);B!==void 0&&(A.visible=B)}),F.clear(),z.background=D},x.addPass(C),ht.length>0){const A=new w.OutlinePass(new s.Vector2($,ie),z,Ee,ht);A.visibleEdgeColor.set(An.outline),A.hiddenEdgeColor.set(9054720),A.edgeStrength=4,A.edgeThickness=1.5,x.addPass(A)}return x.addPass(new w.OutputPass),x.setSize($,ie),x}catch{return Ce=!0,null}};let ke=i.toggles;const Ze=new s.Vector3,G=()=>{const w=_.domElement.clientWidth||h,$=_.domElement.clientHeight||d,ie=[];xe.forEach((x,C)=>{if(!(x.group!=="zone"||ke.zones&&ke.zoneLabels)){x.el.style.visibility="hidden";return}if(x.obj.getWorldPosition(Ze),Ze.project(Ee),Ze.z>1||Ze.z<-1){x.el.style.visibility="hidden";return}x.w>0||(x.w=x.el.offsetWidth,x.h=x.el.offsetHeight),ie.push({key:String(C),priority:x.priority,x:(Ze.x+1)/2*w,y:(1-Ze.y)/2*$,w:x.w||60,h:x.h||16})});const J=v0(ie);for(const x of ie)xe[Number(x.key)].el.style.visibility=J.has(x.key)?"visible":"hidden"},ve=[],L=()=>{f==="high"&&(ze??(ze=et())),f==="high"&&ze?ze.render():_.render(z,Ee),m.render(z,Ee),G();for(const w of ve)w()},X=w=>{const $=Math.max(e.clientWidth,320),{position:ie,target:J}=mh(t.fitMin,t.fitMax,w,il,$/c());Ee.position.set(...ie),Re.target.set(...J),Re.update(),L()};Re.addEventListener("change",L);let q=0,re=0;const Me=w=>{const $=re?Math.min(.05,(w-re)/1e3):0;re=w;for(const ie of P){ie.s+=ie.speed*$;const J=Rr(ie.points,ie.s);ie.mesh.setMatrixAt(ie.index,qe.makeTranslation(J[0],J[1],J[2]))}for(const ie of _e.values())ie.instanceMatrix.needsUpdate=!0;L(),q=requestAnimationFrame(Me)},Fe=w=>{const $=!ke||ke.pipes!==w.pipes;ke=w,Ge.visible=w.zones,$e.visible=w.pipes,$&&(_.shadowMap.needsUpdate=!0);const ie=w.flow&&w.pipes&&P.length>0;ie&&!q&&(re=0,q=requestAnimationFrame(Me)),!ie&&q&&(cancelAnimationFrame(q),q=0),L()},He=()=>{const w=Math.max(e.clientWidth,320),$=c();_.setSize(w,$),ze?.setSize(w,$),m.setSize(w,$),Ee.aspect=w/$,Ee.updateProjectionMatrix()},Be=w=>{w!==f&&(f=w,_.setPixelRatio(g()),ze?.setPixelRatio(g()),_.shadowMap.enabled=w==="high",_.shadowMap.needsUpdate=!0,z.traverse($=>{const ie=$.material;Array.isArray(ie)?ie.forEach(J=>{J.needsUpdate=!0}):ie&&(ie.needsUpdate=!0)}),He(),L())},Qe=new s.Raycaster,yt=new s.Vector2,Yt=(w,$)=>(yt.set(w,$),Qe.setFromCamera(yt,Ee),Qe.intersectObjects(H,!1).filter(ie=>{for(let J=ie.object;J;J=J.parent)if(!J.visible)return!1;return!0})),Cn=(w,$)=>{const ie=Yt(w,$).filter(J=>J.object.userData.pick);return(ie.find(J=>!J.object.userData.pick.shell)??ie[0])?.object??null},qt=w=>{const $=_.domElement.getBoundingClientRect(),J=Yt((w.clientX-$.left)/$.width*2-1,-((w.clientY-$.top)/$.height)*2+1)[0]?.object.userData.tooltip;if(!J){u.style.display="none";return}u.replaceChildren(...J.map((F,D)=>{const A=document.createElement("div");return A.textContent=F,D===0&&(A.style.fontWeight="700"),A})),u.style.display="block";const x=w.clientX-$.left+14,C=w.clientY-$.top+14;u.style.left=\`\${Math.min(x,Math.max(0,$.width-330))}px\`,u.style.top=\`\${Math.min(C,Math.max(0,$.height-120))}px\`},Hn=()=>{u.style.display="none"};_.domElement.addEventListener("pointermove",qt),_.domElement.addEventListener("pointerleave",Hn);const As=new ResizeObserver(()=>{He(),L()});As.observe(e),i.extend?.({THREE:s,world:z,pickables:H,redraw:()=>L(),label:(w,$,ie,J)=>(Le(w,$,ie,J),xe[xe.length-1].obj)});let Rs=null;const os=(w,$)=>{Ae.forEach((ie,J)=>{ie&&(ie.color.setHex(w[J]??Si.unknown),ie.opacity=$?.85:.45)})},zr=w=>{const $=(ie,J)=>{const x=ie===null?null:Ae[ie];x&&(x.emissive.setHex(J?46296:0),x.emissiveIntensity=J?.9:0)};$(Rs,!1),Rs=w,$(w,!0)};let bi=null;return i.interactive!==!1&&(bi=R_({THREE:s,el:e,dom:_.domElement,camera:Ee,controls:Re,world:z,scene:t,...i.layout?{layout:i.layout}:{},facts:i.facts??null,pickables:H,fov:il,heightOf:c,draw:L,paintPipes:os,selectPipe:zr,raycast:Cn,onFrame:ve})),X(i.view),Fe(i.toggles),{setToggles:Fe,setQuality:Be,fit:X,dispose:()=>{q&&cancelAnimationFrame(q),As.disconnect(),bi?.dispose(),_.domElement.removeEventListener("pointermove",qt),_.domElement.removeEventListener("pointerleave",Hn),Re.dispose(),ze?.dispose(),z.traverse(w=>{const $=w;$.geometry?.dispose?.();const ie=$.material;Array.isArray(ie)?ie.forEach(J=>J.dispose()):ie?.dispose?.()});for(const w of y)w.dispose();_.dispose(),e.replaceChildren()}}}const tx=_h,nx={THREE:{ACESFilmicToneMapping:eo,ArrowHelper:gg,BoxGeometry:mi,BufferGeometry:Ht,CanvasTexture:sg,CylinderGeometry:_r,DirectionalLight:fg,DoubleSide:rn,Fog:ya,Group:vs,HalfFloatType:Wt,LineSegments:ng,HemisphereLight:cg,InstancedMesh:tg,Line:mr,LineBasicMaterial:ur,LineDashedMaterial:lg,LineLoop:ig,Matrix4:st,Mesh:vt,MeshBasicMaterial:ms,MeshLambertMaterial:ag,MeshStandardMaterial:Ra,OctahedronGeometry:wa,PCFSoftShadowMap:al,PerspectiveCamera:tn,PlaneGeometry:_s,PMREMGenerator:ma,Quaternion:$n,Raycaster:mg,RepeatWrapping:Wn,Scene:Oc,SphereGeometry:Ta,SRGBColorSpace:Qt,TorusGeometry:Aa,Vector2:Ie,Vector3:k,WebGLRenderer:Jm,WebGLRenderTarget:Ut},OrbitControls:vg,CSS2DRenderer:Ig,CSS2DObject:Lg,RoomEnvironment:Ug,mergeGeometries:Ng,post:{EffectComposer:Hg,RenderPass:Gg,GTAOPass:bn,OutlinePass:ti,OutputPass:qg}};function ix(){for(const n of Array.from(document.querySelectorAll("details[data-section]"))){const e=n.dataset.key;e&&(j0(e)&&(n.open=!q0(e)),n.addEventListener("toggle",()=>K0(e,!n.open)))}}function sx(n){const e=document.getElementById(St.resize),t=()=>e_(n.getBoundingClientRect().top+window.scrollY,window.innerHeight),i=Number(Wa($a.layoutExportViewHeight)??NaN),s=o=>{n.style.height=\`\${o}px\`};if(s(Number.isFinite(i)&&i>0?Cr(i,window.innerHeight,t()):t()),!e)return;const r=o=>{const a=Cr(o,window.innerHeight,t());s(a),Xa($a.layoutExportViewHeight,String(a))};e.addEventListener("pointerdown",o=>{o.preventDefault();const a=o.clientY,l=n.getBoundingClientRect().height;try{e.setPointerCapture(o.pointerId)}catch{}const c=d=>s(Cr(l+d.clientY-a,window.innerHeight,l)),h=d=>{e.removeEventListener("pointermove",c),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),r(l+d.clientY-a)};e.addEventListener("pointermove",c),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}),e.addEventListener("keydown",o=>{const a=n.getBoundingClientRect().height;o.key==="ArrowDown"?(o.preventDefault(),r(a+16)):o.key==="ArrowUp"?(o.preventDefault(),r(a-16)):(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r(t()))}),e.addEventListener("dblclick",()=>{s(t()),Xa($a.layoutExportViewHeight,"")})}function rx(){const n=document.getElementById(St.full),e=document.getElementById(St.stage);if(!n||!e)return;const t=()=>{const i=!!document.fullscreenElement||e.classList.contains("max");n.textContent=i?"Exit full screen":"Full screen",n.setAttribute("aria-pressed",i?"true":"false")};n.addEventListener("click",()=>{if(document.fullscreenElement){document.exitFullscreen?.();return}if(e.classList.contains("max")){e.classList.remove("max"),t();return}J0(document,e)==="api"?e.requestFullscreen().catch(()=>{e.classList.add("max"),t()}):(e.classList.add("max"),t())}),document.addEventListener("fullscreenchange",t),window.addEventListener("keydown",i=>{i.key==="Escape"&&e.classList.contains("max")&&(e.classList.remove("max"),t())})}function Vh(){ix();const n=document.getElementById(St.data),e=document.getElementById(St.view),t=document.getElementById(St.error);if(!n||!e)return;const i=O=>{t&&(t.textContent=O,t.hidden=!1)};let s,r;try{r=JSON.parse(n.textContent??""),s=_h(r)}catch(O){i(\`The embedded layout could not be read (\${O instanceof Error?O.message:String(O)}).\`);return}if(!s){i("The embedded layout places no item, so there is nothing to draw.");return}let o=null;const a=document.getElementById(St.building),l=O=>document.getElementById(\`\${St.buildingToggle}-\${O}\`),c=()=>Object.fromEntries(hh.map(O=>[O,l(O)?.checked??!0]));if(a)try{const O=Qg(JSON.parse(a.textContent??""));if(O){const R=o0(O);s=a0(s,R),o=$0(R,c(),l("rooms")?.checked??!0)}}catch(O){i(\`The embedded GMP interior could not be read (\${O instanceof Error?O.message:String(O)}).\`)}sx(e),rx();const h=O=>document.getElementById(O),d=h(St.flow);d&&k0()&&(d.checked=!1,d.title="Your system asks for reduced motion, so the flow starts off");const f=()=>({pipes:h(St.pipes)?.checked??!0,flow:d?.checked??!1,zones:h(St.zones)?.checked??!0,zoneLabels:h(St.zoneLabels)?.checked??!1}),p=()=>{const O=document.querySelector(\`input[name="\${St.preset}"]:checked\`);return O&&(O.value==="plan"||O.value==="elevation")?O.value:"3d"},g=O=>document.getElementById(\`\${St.quality}-\${O}\`),_=G0(),m=g(_);m&&(m.checked=!0);const u=()=>g("fast")?.checked?"fast":"high";let y;try{y=ex(nx,e,s,{height:"fill",toggles:f(),view:p(),quality:u(),...o?{extend:o.extend}:{},...r?{layout:r}:{}})}catch(O){i(\`The 3D view could not start (\${O instanceof Error?O.message:String(O)}).  It needs WebGL; the tables below carry every position, pipe and finding the engine published.\`);return}const v=h(St.zoneLabels),S=()=>{const O=f();v&&(v.disabled=!O.zones),y.setToggles(O)};for(const O of[St.pipes,St.flow,St.zones,St.zoneLabels])h(O)?.addEventListener("change",S);document.getElementById(St.fit)?.addEventListener("click",()=>y.fit(p()));for(const O of Array.from(document.querySelectorAll(\`input[name="\${St.preset}"]\`)))O.addEventListener("change",()=>y.fit(p()));for(const O of Array.from(document.querySelectorAll(\`input[name="\${St.quality}"]\`)))O.addEventListener("change",()=>{const R=u();V0(R),y.setQuality(R)});if(o){const O=o;l("rooms")?.addEventListener("change",()=>O.setRooms(l("rooms")?.checked??!0));for(const R of hh)l(R)?.addEventListener("change",()=>O.setFlows(c()))}S()}return typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vh):Vh()),Br.sceneOf=tx,Object.defineProperty(Br,Symbol.toStringTag,{value:"Module"}),Br}({});
`,t="0.170.0",n=`The MIT License

Copyright © 2010-2024 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`;export{e as script,n as threeLicence,t as threeVersion};
