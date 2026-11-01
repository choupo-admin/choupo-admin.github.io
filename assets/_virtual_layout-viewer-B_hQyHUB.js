const e=`var ChoupoLayoutViewer=function(Ar){"use strict";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="170",Mi={ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mh=0,ko=1,gh=2,Go=1,Ho=2,Cn=3,Bn=0,Wt=1,an=2,Pt=0,Si=1,Cr=2,Vo=3,Wo=4,Xo=5,fn=100,_h=101,vh=102,xh=103,Mh=104,es=200,yh=201,Sh=202,Eh=203,Pr=204,Dr=205,Lr=206,Th=207,Ir=208,wh=209,bh=210,Ah=211,Rh=212,Ch=213,Ph=214,Ur=0,Nr=1,Or=2,Ei=3,Fr=4,zr=5,Br=6,kr=7,Gr=0,Dh=1,Lh=2,kn=0,$o=1,Yo=2,qo=3,Hr=4,Ih=5,jo=6,Ko=7,Zo=300,Ti=301,wi=302,Vr=303,Wr=304,Es=306,Gn=1e3,ni=1001,Xr=1002,Xt=1003,Uh=1004,Ts=1005,Mn=1006,$r=1007,ii=1008,yn=1009,Jo=1010,Qo=1011,ts=1012,Yr=1013,si=1014,Sn=1015,$t=1016,qr=1017,jr=1018,ri=1020,el=35902,tl=1021,nl=1022,on=1023,il=1024,sl=1025,bi=1026,ai=1027,Kr=1028,Zr=1029,rl=1030,Jr=1031,Qr=1033,ws=33776,bs=33777,As=33778,Rs=33779,ea=35840,ta=35841,na=35842,ia=35843,sa=36196,ra=37492,aa=37496,oa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,Ma=37821,Cs=36492,ya=36494,Sa=36495,al=36283,Ea=36284,Ta=36285,wa=36286,Nh=3200,ol=3201,Ps=0,Oh=1,Hn="",Qt="srgb",Ai="srgb-linear",Ds="linear",ft="srgb",Ri=7680,ll=519,Fh=512,zh=513,Bh=514,cl=515,kh=516,Gh=517,Hh=518,Vh=519,hl=35044,ul="300 es",Pn=2e3,Ls=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,ba=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function Wh(n,e){return(n%e+e)%e}function Aa(n,e,t){return(1-t)*n+t*e}function is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xh={DEG2RAD:Is};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],f=i[5],_=i[8],g=s[0],m=s[3],u=s[6],E=s[1],M=s[4],v=s[7],U=s[2],b=s[5],P=s[8];return r[0]=a*g+o*E+l*U,r[3]=a*m+o*M+l*b,r[6]=a*u+o*v+l*P,r[1]=c*g+h*E+d*U,r[4]=c*m+h*M+d*b,r[7]=c*u+h*v+d*P,r[2]=p*g+f*E+_*U,r[5]=p*m+f*M+_*b,r[8]=p*u+f*v+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*r,f=c*r-a*l,_=t*d+i*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(o*i-s*a)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Je;function dl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $h(){const n=Us("canvas");return n.style.display="block",n}const fl={};function ss(n){n in fl||(fl[n]=!0,console.warn(n))}function Yh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function qh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(n.r=Dn(n.r),n.g=Dn(n.g),n.b=Dn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?Ds:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ci(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pl=[.64,.33,.3,.6,.15,.06],ml=[.2126,.7152,.0722],gl=[.3127,.329],_l=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[Ai]:{primaries:pl,whitePoint:gl,transfer:Ds,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:ml,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:pl,whitePoint:gl,transfer:ft,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:ml,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let Pi;class Kh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Us("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dn(t[i]/255)*255):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ca(s[a].image)):r.push(Ca(s[a]))}else r=Ca(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class kt extends oi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=ni,s=ni,r=Mn,a=ii,o=on,l=yn,c=kt.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ns(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=Zo,kt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,U=(u+1)/2,b=(h+p)/4,P=(d+g)/4,L=(_+m)/4;return M>v&&M>U?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=b/i,r=P/i):v>U?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=L/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=L/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-g)/E,this.z=(p-h)/E,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ft extends Qh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ml extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const p=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==p||c!==f||h!==_){let m=1-o;const u=l*p+c*f+h*_+d*g,E=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const U=Math.sqrt(M),b=Math.atan2(U,u*E);m=Math.sin(m*b)/U,o=Math.sin(o*b)/U}const v=o*E;if(l=l*m+p*v,c=c*m+f*v,h=h*m+_*v,d=d*m+g*v,m===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*f-c*p,e[t+1]=l*_+h*p+c*d-o*f,e[t+2]=c*_+h*f+o*p-l*d,e[t+3]=h*_-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),p=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*d+c*f*_,this._y=c*f*d-p*h*_,this._z=c*h*_+p*f*d,this._w=c*h*d-p*f*_;break;case"YXZ":this._x=p*h*d+c*f*_,this._y=c*f*d-p*h*_,this._z=c*h*_-p*f*d,this._w=c*h*d+p*f*_;break;case"ZXY":this._x=p*h*d-c*f*_,this._y=c*f*d+p*h*_,this._z=c*h*_+p*f*d,this._w=c*h*d-p*f*_;break;case"ZYX":this._x=p*h*d-c*f*_,this._y=c*f*d+p*h*_,this._z=c*h*_-p*f*d,this._w=c*h*d+p*f*_;break;case"YZX":this._x=p*h*d+c*f*_,this._y=c*f*d+p*h*_,this._z=c*h*_-p*f*d,this._w=c*h*d-p*f*_;break;case"XZY":this._x=p*h*d-c*f*_,this._y=c*f*d-p*h*_,this._z=c*h*_+p*f*d,this._w=c*h*d+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new N,yl=new Vn;class li{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Os.subVectors(this.max,rs),Di.subVectors(e.a,rs),Li.subVectors(e.b,rs),Ii.subVectors(e.c,rs),Wn.subVectors(Li,Di),Xn.subVectors(Ii,Li),ci.subVectors(Di,Ii);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ci.z,ci.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ci.z,0,-ci.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ci.y,ci.x,0];return!Da(t,Di,Li,Ii,Os)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,Di,Li,Ii,Os))?!1:(Fs.crossVectors(Wn,Xn),t=[Fs.x,Fs.y,Fs.z],Da(t,Di,Li,Ii,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,Ns=new li,Di=new N,Li=new N,Ii=new N,Wn=new N,Xn=new N,ci=new N,rs=new N,Os=new N,Fs=new N,hi=new N;function Da(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){hi.fromArray(n,r);const o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=i.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tu=new li,as=new N,La=new N;class Ui{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tu.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(as,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(La)),this.expandByPoint(as.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new N,Ia=new N,zs=new N,$n=new N,Ua=new N,Bs=new N,Na=new N;class ks{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ia.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zs),o=$n.dot(this.direction),l=-$n.dot(zs),c=$n.lengthSq(),h=Math.abs(1-a*a);let d,p,f,_;if(h>0)if(d=a*l-o,p=a*o-l,_=r*h,d>=0)if(p>=-_)if(p<=_){const g=1/h;d*=g,p*=g,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-_?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=_?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ia).addScaledVector(zs,p),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,s,r){Ua.subVectors(t,e),Bs.subVectors(i,e),Na.crossVectors(Ua,Bs);let a=this.direction.dot(Na),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(Bs.crossVectors($n,Bs));if(l<0)return null;const c=o*this.direction.dot(Ua.cross($n));if(c<0||l+c>a)return null;const h=-o*$n.dot(Na);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,i,s,r,a,o,l,c,h,d,p,f,_,g,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,p,f,_,g,m)}set(e,t,i,s,r,a,o,l,c,h,d,p,f,_,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*h,f=l*d,_=c*h,g=c*d;t[0]=p+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*h,f=l*d,_=c*h,g=c*d;t[0]=p-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*h,f=a*d,_=o*h,g=o*d;t[0]=l*h,t[4]=_*c-f,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-p*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+_,t[10]=p-g*d}else if(e.order==="XZY"){const p=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+g,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Yn.crossVectors(i,en),Yn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Yn.crossVectors(i,en)),Yn.normalize(),Gs.crossVectors(en,Yn),s[0]=Yn.x,s[4]=Gs.x,s[8]=en.x,s[1]=Yn.y,s[5]=Gs.y,s[9]=en.y,s[2]=Yn.z,s[6]=Gs.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],f=i[13],_=i[2],g=i[6],m=i[10],u=i[14],E=i[3],M=i[7],v=i[11],U=i[15],b=s[0],P=s[4],L=s[8],S=s[12],y=s[1],D=s[5],I=s[9],k=s[13],X=s[2],se=s[6],j=s[10],ue=s[14],K=s[3],A=s[7],Z=s[11],pe=s[15];return r[0]=a*b+o*y+l*X+c*K,r[4]=a*P+o*D+l*se+c*A,r[8]=a*L+o*I+l*j+c*Z,r[12]=a*S+o*k+l*ue+c*pe,r[1]=h*b+d*y+p*X+f*K,r[5]=h*P+d*D+p*se+f*A,r[9]=h*L+d*I+p*j+f*Z,r[13]=h*S+d*k+p*ue+f*pe,r[2]=_*b+g*y+m*X+u*K,r[6]=_*P+g*D+m*se+u*A,r[10]=_*L+g*I+m*j+u*Z,r[14]=_*S+g*k+m*ue+u*pe,r[3]=E*b+M*y+v*X+U*K,r[7]=E*P+M*D+v*se+U*A,r[11]=E*L+M*I+v*j+U*Z,r[15]=E*S+M*k+v*ue+U*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],f=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+r*l*d-s*c*d-r*o*p+i*c*p+s*o*f-i*l*f)+g*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+u*(-s*o*h-t*l*d+t*o*p+s*a*d-i*a*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],f=e[11],_=e[12],g=e[13],m=e[14],u=e[15],E=d*m*c-g*p*c+g*l*f-o*m*f-d*l*u+o*p*u,M=_*p*c-h*m*c-_*l*f+a*m*f+h*l*u-a*p*u,v=h*g*c-_*d*c+_*o*f-a*g*f-h*o*u+a*d*u,U=_*d*l-h*g*l-_*o*p+a*g*p+h*o*m-a*d*m,b=t*E+i*M+s*v+r*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=E*P,e[1]=(g*p*r-d*m*r-g*s*f+i*m*f+d*s*u-i*p*u)*P,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*u+i*l*u)*P,e[3]=(d*l*r-o*p*r-d*s*c+i*p*c+o*s*f-i*l*f)*P,e[4]=M*P,e[5]=(h*m*r-_*p*r+_*s*f-t*m*f-h*s*u+t*p*u)*P,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*u-t*l*u)*P,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*f+t*l*f)*P,e[8]=v*P,e[9]=(_*d*r-h*g*r-_*i*f+t*g*f+h*i*u-t*d*u)*P,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*u+t*o*u)*P,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*P,e[12]=U*P,e[13]=(h*g*s-_*d*s+_*i*p-t*g*p-h*i*m+t*d*m)*P,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*m-t*o*m)*P,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*p+t*o*p)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,p=r*c,f=r*h,_=r*d,g=a*h,m=a*d,u=o*d,E=l*c,M=l*h,v=l*d,U=i.x,b=i.y,P=i.z;return s[0]=(1-(g+u))*U,s[1]=(f+v)*U,s[2]=(_-M)*U,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(p+u))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(_+M)*P,s[9]=(m-E)*P,s[10]=(1-(p+g))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const a=Ni.set(s[4],s[5],s[6]).length(),o=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,h=1/a,d=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Pn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let f,_;if(o===Pn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ls)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Pn){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-r),p=(t+e)*c,f=(i+s)*h;let _,g;if(o===Pn)_=(a+r)*d,g=-2*d;else if(o===Ls)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ni=new N,mn=new nt,nu=new N(0,0,0),iu=new N(1,1,1),Yn=new N,Gs=new N,en=new N,Sl=new nt,El=new Vn;class gn{constructor(e=0,t=0,i=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let su=0;const Tl=new N,Oi=new Vn,Un=new nt,Hs=new N,os=new N,ru=new N,au=new Vn,wl=new N(1,0,0),bl=new N(0,1,0),Al=new N(0,0,1),Rl={type:"added"},ou={type:"removed"},Fi={type:"childadded",child:null},Fa={type:"childremoved",child:null};class At extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new N,t=new gn,i=new Vn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Je}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(os,Hs,this.up):Un.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Un),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ou),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new N(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new N,Nn=new N,za=new N,On=new N,zi=new N,Bi=new N,Cl=new N,Ba=new N,ka=new N,Ga=new N,Ha=new gt,Va=new gt,Wa=new gt;class vn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),Nn.subVectors(i,t),za.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Nn),l=_n.dot(za),c=Nn.dot(Nn),h=Nn.dot(za),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ha.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ha,r.x),a.addScaledVector(Va,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Nn.subVectors(e,t),_n.cross(Nn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),_n.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,i),Bi.subVectors(r,i),Ba.subVectors(e,i);const l=zi.dot(Ba),c=Bi.dot(Ba);if(l<=0&&c<=0)return t.copy(i);ka.subVectors(e,s);const h=zi.dot(ka),d=Bi.dot(ka);if(h>=0&&d<=h)return t.copy(s);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(zi,a);Ga.subVectors(e,r);const f=zi.dot(Ga),_=Bi.dot(Ga);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Bi,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Cl.subVectors(r,s),o=(d-h)/(d-h+(f-_)),t.copy(s).addScaledVector(Cl,o);const u=1/(m+g+p);return a=g*u,o=p*u,t.copy(i).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Wh(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xa(a,r,e+.3333333333333333),this.g=Xa(a,r,e),this.b=Xa(a,r,e-.3333333333333333)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\\w+)\\(([^\\)]*)\\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\\#([A-Fa-f\\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Pl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return st.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Yt(Gt.r*255,0,255))*65536+Math.round(Yt(Gt.g*255,0,255))*256+Math.round(Yt(Gt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Qt){st.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Qt?\`color(\${e} \${t.toFixed(3)} \${i.toFixed(3)} \${s.toFixed(3)})\`:\`rgb(\${Math.round(t*255)},\${Math.round(i*255)},\${Math.round(s*255)})\`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Vs);const i=Aa(qn.h,Vs.h,t),s=Aa(qn.s,Vs.s,t),r=Aa(qn.l,Vs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new qe;qe.NAMES=Pl;let lu=0;class jn extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=ns(),this.name="",this.blending=Si,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Dr,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(\`THREE.Material: parameter '\${t}' has value of undefined.\`);continue}const s=this[t];if(s===void 0){console.warn(\`THREE.Material: '\${t}' is not a property of THREE.\${this.type}.\`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pr&&(i.blendSrc=this.blendSrc),this.blendDst!==Dr&&(i.blendDst=this.blendDst),this.blendEquation!==fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ls extends jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new N,Ws=new Le;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class Dl extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ll extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cu=0;const cn=new nt,$a=new At,ki=new N,tn=new li,cs=new li,zt=new N;class Ht extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?Ll:Dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(tn.min,cs.min),tn.expandByPoint(zt),zt.addVectors(tn.max,cs.max),tn.expandByPoint(zt)):(tn.expandByPoint(cs.min),tn.expandByPoint(cs.max))}tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),zt.add(ki)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new N,l[L]=new N;const c=new N,h=new N,d=new N,p=new Le,f=new Le,_=new Le,g=new N,m=new N;function u(L,S,y){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,y),p.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),_.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(p),_.sub(p);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[L].add(g),o[S].add(g),o[y].add(g),l[L].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,S=E.length;L<S;++L){const y=E[L],D=y.start,I=y.count;for(let k=D,X=D+I;k<X;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new N,v=new N,U=new N,b=new N;function P(L){U.fromBufferAttribute(s,L),b.copy(U);const S=o[L];M.copy(S),M.sub(U.multiplyScalar(U.dot(S))).normalize(),v.crossVectors(b,S);const D=v.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,D)}for(let L=0,S=E.length;L<S;++L){const y=E[L],D=y.start,I=y.count;for(let k=D,X=D+I;k<X;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let p=0,f=e.count;p<f;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let u=0;u<h;u++)p[_++]=c[f++]}return new ln(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=e(p,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new nt,ui=new ks,Xs=new Ui,Ul=new N,$s=new N,Ys=new N,qs=new N,Ya=new N,js=new N,Nl=new N,Ks=new N;class xt extends At{constructor(e=new Ht,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ya.fromBufferAttribute(d,e),a?js.addScaledVector(Ya,h):js.addScaledVector(Ya.sub(t),h))}t.add(js)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Xs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Xs,Ul)===null||ui.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Il.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Il),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],u=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,U=M;v<U;v+=3){const b=o.getX(v),P=o.getX(v+1),L=o.getX(v+2);s=Zs(this,u,e,i,c,h,d,b,P,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,u=g;m<u;m+=3){const E=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Zs(this,a,e,i,c,h,d,E,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],u=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,U=M;v<U;v+=3){const b=v,P=v+1,L=v+2;s=Zs(this,u,e,i,c,h,d,b,P,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,u=g;m<u;m+=3){const E=m,M=m+1,v=m+2;s=Zs(this,a,e,i,c,h,d,E,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function hu(n,e,t,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Bn,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:n}}function Zs(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,$s),n.getVertexPosition(l,Ys),n.getVertexPosition(c,qs);const h=hu(n,e,t,i,$s,Ys,qs,Nl);if(h){const d=new N;vn.getBarycoord(Nl,$s,Ys,qs,d),s&&(h.uv=vn.getInterpolatedAttribute(s,o,l,c,d,new Le)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,d,new Le)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new N,materialIndex:0};vn.getNormal($s,Ys,qs,p.normal),h.face=p,h.barycoord=d}return h}class di extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(d,2));function _(g,m,u,E,M,v,U,b,P,L,S){const y=v/P,D=U/L,I=v/2,k=U/2,X=b/2,se=P+1,j=L+1;let ue=0,K=0;const A=new N;for(let Z=0;Z<j;Z++){const pe=Z*D-k;for(let Ie=0;Ie<se;Ie++){const Oe=Ie*y-I;A[g]=Oe*E,A[m]=pe*M,A[u]=X,c.push(A.x,A.y,A.z),A[g]=0,A[m]=0,A[u]=b>0?1:-1,h.push(A.x,A.y,A.z),d.push(Ie/P),d.push(1-Z/L),ue+=1}}for(let Z=0;Z<L;Z++)for(let pe=0;pe<P;pe++){const Ie=p+pe+se*Z,Oe=p+pe+se*(Z+1),Q=p+(pe+1)+se*(Z+1),de=p+(pe+1)+se*Z;l.push(Ie,Oe,de),l.push(Oe,Q,de),K+=6}o.addGroup(f,K,S),f+=K,p+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Gi(n[t]);for(const s in i)e[s]=i[s]}return e}function uu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ol(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Fn={clone:Gi,merge:qt};var du=\`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}\`,fu=\`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}\`;class wt extends jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=du,this.fragmentShader=fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fl extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new N,zl=new Le,Bl=new Le;class nn extends Fl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,zl,Bl),t.subVectors(Bl,zl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class pu extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new nn(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new nn(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new nn(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new nn(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new nn(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kl extends kt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mu extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:\`

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
			\`},s=new di(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Pt});r.uniforms.tEquirect.value=t;const a=new xt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Mn),new pu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const qa=new N,gu=new N,_u=new Je;class Zn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=qa.subVectors(i,t).cross(gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_u.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ui,Js=new N;class ja{constructor(e=new Zn,t=new Zn,i=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],f=s[8],_=s[9],g=s[10],m=s[11],u=s[12],E=s[13],M=s[14],v=s[15];if(i[0].setComponents(l-r,p-c,m-f,v-u).normalize(),i[1].setComponents(l+r,p+c,m+f,v+u).normalize(),i[2].setComponents(l+a,p+h,m+_,v+E).normalize(),i[3].setComponents(l-a,p-h,m-_,v-E).normalize(),i[4].setComponents(l-o,p-d,m-g,v-M).normalize(),t===Pn)i[5].setComponents(l+o,p+d,m+g,v+M).normalize();else if(t===Ls)i[5].setComponents(o,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gl(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vu(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<d.length;f++){const _=d[p],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,d[p]=g)}d.length=p+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class hs extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,p=t/l,f=[],_=[],g=[],m=[];for(let u=0;u<h;u++){const E=u*p-a;for(let M=0;M<c;M++){const v=M*d-r;_.push(v,-E,0),g.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const M=E+c*u,v=E+c*(u+1),U=E+1+c*(u+1),b=E+1+c*u;f.push(M,v,b),f.push(v,U,b)}this.setIndex(f),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var xu=\`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif\`,Mu=\`#ifdef USE_ALPHAHASH
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
#endif\`,yu=\`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif\`,Su=\`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif\`,Eu=\`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif\`,Tu=\`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif\`,wu=\`#ifdef USE_AOMAP
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
#endif\`,bu=\`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif\`,Au=\`#ifdef USE_BATCHING
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
#endif\`,Ru=\`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif\`,Cu=\`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif\`,Pu=\`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif\`,Du=\`float G_BlinnPhong_Implicit( ) {
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
} // validated\`,Lu=\`#ifdef USE_IRIDESCENCE
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
#endif\`,Iu=\`#ifdef USE_BUMPMAP
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
#endif\`,Uu=\`#if NUM_CLIPPING_PLANES > 0
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
#endif\`,Nu=\`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif\`,Ou=\`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif\`,Fu=\`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif\`,zu=\`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif\`,Bu=\`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif\`,ku=\`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif\`,Gu=\`#if defined( USE_COLOR_ALPHA )
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
#endif\`,Hu=\`#define PI 3.141592653589793
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
} // validated\`,Vu=\`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif\`,Wu=\`vec3 transformedNormal = objectNormal;
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
#endif\`,Xu=\`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif\`,$u=\`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif\`,Yu=\`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif\`,qu=\`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif\`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=\`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}\`,Zu=\`#ifdef USE_ENVMAP
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
#endif\`,Ju=\`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif\`,Qu=\`#ifdef USE_ENVMAP
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
#endif\`,ed=\`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif\`,td=\`#ifdef USE_ENVMAP
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
#endif\`,nd=\`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif\`,id=\`#ifdef USE_FOG
	varying float vFogDepth;
#endif\`,sd=\`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif\`,rd=\`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif\`,ad=\`#ifdef USE_GRADIENTMAP
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
}\`,od=\`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif\`,ld=\`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;\`,cd=\`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert\`,hd=\`uniform bool receiveShadow;
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
#endif\`,ud=\`#ifdef USE_ENVMAP
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
#endif\`,dd=\`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;\`,fd=\`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\`,pd=\`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;\`,md=\`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\`,gd=\`PhysicalMaterial material;
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
#endif\`,_d=\`struct PhysicalMaterial {
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
}\`,vd=\`
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
#endif\`,xd=\`#if defined( RE_IndirectDiffuse )
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
#endif\`,Md=\`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif\`,yd=\`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif\`,Sd=\`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif\`,Ed=\`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif\`,Td=\`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif\`,wd=\`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif\`,bd=\`#ifdef USE_MAP
	uniform sampler2D map;
#endif\`,Ad=\`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif\`,Rd=\`#if defined( USE_POINTS_UV )
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
#endif\`,Cd=\`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif\`,Pd=\`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif\`,Dd=\`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif\`,Ld=\`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif\`,Id=\`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif\`,Ud=\`#ifdef USE_MORPHTARGETS
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
#endif\`,Nd=\`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif\`,Od=\`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;\`,Fd=\`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif\`,zd=\`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif\`,Bd=\`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif\`,kd=\`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif\`,Gd=\`#ifdef USE_NORMALMAP
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
#endif\`,Hd=\`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif\`,Vd=\`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif\`,Wd=\`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif\`,Xd=\`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif\`,$d=\`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );\`,Yd=\`vec3 packNormalToRGB( const in vec3 normal ) {
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
}\`,qd=\`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif\`,jd=\`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;\`,Kd=\`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif\`,Zd=\`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif\`,Jd=\`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif\`,Qd=\`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif\`,ef=\`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif\`,tf=\`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif\`,nf=\`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif\`,sf=\`float getShadowMask() {
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
}\`,rf=\`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif\`,af=\`#ifdef USE_SKINNING
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
#endif\`,of=\`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif\`,lf=\`#ifdef USE_SKINNING
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
#endif\`,cf=\`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif\`,hf=\`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif\`,uf=\`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif\`,df=\`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }\`,ff=\`#ifdef USE_TRANSMISSION
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
#endif\`,pf=\`#ifdef USE_TRANSMISSION
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
#endif\`,mf=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif\`,gf=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif\`,_f=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif\`,vf=\`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif\`;const et={alphahash_fragment:xu,alphahash_pars_fragment:Mu,alphamap_fragment:yu,alphamap_pars_fragment:Su,alphatest_fragment:Eu,alphatest_pars_fragment:Tu,aomap_fragment:wu,aomap_pars_fragment:bu,batching_pars_vertex:Au,batching_vertex:Ru,begin_vertex:Cu,beginnormal_vertex:Pu,bsdfs:Du,iridescence_fragment:Lu,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Fu,color_fragment:zu,color_pars_fragment:Bu,color_pars_vertex:ku,color_vertex:Gu,common:Hu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:$u,emissivemap_fragment:Yu,emissivemap_pars_fragment:qu,colorspace_fragment:ju,colorspace_pars_fragment:Ku,envmap_fragment:Zu,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Qu,envmap_pars_vertex:ed,envmap_physical_pars_fragment:ud,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:hd,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:vd,lights_fragment_maps:xd,lights_fragment_end:Md,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:wd,map_pars_fragment:bd,map_particle_fragment:Ad,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Dd,morphcolor_vertex:Ld,morphnormal_vertex:Id,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Od,normal_fragment_maps:Fd,normal_pars_fragment:zd,normal_pars_vertex:Bd,normal_vertex:kd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:$d,packing:Yd,premultiplied_alpha_fragment:qd,project_vertex:jd,dithering_fragment:Kd,dithering_pars_fragment:Zd,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:tf,shadowmap_vertex:nf,shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:lf,specularmap_fragment:cf,specularmap_pars_fragment:hf,tonemapping_fragment:uf,tonemapping_pars_fragment:df,transmission_fragment:ff,transmission_pars_fragment:pf,uv_pars_fragment:mf,uv_pars_vertex:gf,uv_vertex:_f,worldpos_vertex:vf,background_vert:\`varying vec2 vUv;
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
}\`},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},En={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};En.physical={uniforms:qt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Qs={r:0,b:0,g:0},pi=new gn,xf=new nt;function Mf(n,e,t,i,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,d=null,p=0,f=null;function _(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function g(E){let M=!1;const v=_(E);v===null?u(o,l):v&&v.isColor&&(u(v,1),M=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){const v=_(M);v&&(v.isCubeTexture||v.mapping===Es)?(h===void 0&&(h=new xt(new di(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Gi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(M.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(pi)),h.material.toneMapped=st.getTransfer(v.colorSpace)!==ft,(d!==v||p!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,p=v.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new xt(new hs(2,2),new wt({name:"BackgroundMaterial",uniforms:Gi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,M){E.getRGB(Qs,Ol(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:g,addToRenderList:m}}function yf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(y,D,I,k,X){let se=!1;const j=d(k,I,D);r!==j&&(r=j,c(r.object)),se=f(y,k,I,X),se&&_(y,k,I,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,v(y,D,I,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,D,I){const k=I.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let se=X[D.id];se===void 0&&(se={},X[D.id]=se);let j=se[k];return j===void 0&&(j=p(l()),se[k]=j),j}function p(y){const D=[],I=[],k=[];for(let X=0;X<t;X++)D[X]=0,I[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,D,I,k){const X=r.attributes,se=D.attributes;let j=0;const ue=I.getAttributes();for(const K in ue)if(ue[K].location>=0){const Z=X[K];let pe=se[K];if(pe===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),Z===void 0||Z.attribute!==pe||pe&&Z.data!==pe.data)return!0;j++}return r.attributesNum!==j||r.index!==k}function _(y,D,I,k){const X={},se=D.attributes;let j=0;const ue=I.getAttributes();for(const K in ue)if(ue[K].location>=0){let Z=se[K];Z===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const pe={};pe.attribute=Z,Z&&Z.data&&(pe.data=Z.data),X[K]=pe,j++}r.attributes=X,r.attributesNum=j,r.index=k}function g(){const y=r.newAttributes;for(let D=0,I=y.length;D<I;D++)y[D]=0}function m(y){u(y,0)}function u(y,D){const I=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;I[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),X[y]!==D&&(n.vertexAttribDivisor(y,D),X[y]=D)}function E(){const y=r.newAttributes,D=r.enabledAttributes;for(let I=0,k=D.length;I<k;I++)D[I]!==y[I]&&(n.disableVertexAttribArray(I),D[I]=0)}function M(y,D,I,k,X,se,j){j===!0?n.vertexAttribIPointer(y,D,I,X,se):n.vertexAttribPointer(y,D,I,k,X,se)}function v(y,D,I,k){g();const X=k.attributes,se=I.getAttributes(),j=D.defaultAttributeValues;for(const ue in se){const K=se[ue];if(K.location>=0){let A=X[ue];if(A===void 0&&(ue==="instanceMatrix"&&y.instanceMatrix&&(A=y.instanceMatrix),ue==="instanceColor"&&y.instanceColor&&(A=y.instanceColor)),A!==void 0){const Z=A.normalized,pe=A.itemSize,Ie=e.get(A);if(Ie===void 0)continue;const Oe=Ie.buffer,Q=Ie.type,de=Ie.bytesPerElement,be=Q===n.INT||Q===n.UNSIGNED_INT||A.gpuType===Yr;if(A.isInterleavedBufferAttribute){const ge=A.data,Re=ge.stride,Ue=A.offset;if(ge.isInstancedInterleavedBuffer){for(let Xe=0;Xe<K.locationSize;Xe++)u(K.location+Xe,ge.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Xe=0;Xe<K.locationSize;Xe++)m(K.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Xe=0;Xe<K.locationSize;Xe++)M(K.location+Xe,pe/K.locationSize,Q,Z,Re*de,(Ue+pe/K.locationSize*Xe)*de,be)}else{if(A.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)u(K.location+ge,A.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let ge=0;ge<K.locationSize;ge++)m(K.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ge=0;ge<K.locationSize;ge++)M(K.location+ge,pe/K.locationSize,Q,Z,pe*de,pe/K.locationSize*ge*de,be)}}else if(j!==void 0){const Z=j[ue];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(K.location,Z);break;case 3:n.vertexAttrib3fv(K.location,Z);break;case 4:n.vertexAttrib4fv(K.location,Z);break;default:n.vertexAttrib1fv(K.location,Z)}}}}E()}function U(){L();for(const y in i){const D=i[y];for(const I in D){const k=D[I];for(const X in k)h(k[X].object),delete k[X];delete D[I]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const I in D){const k=D[I];for(const X in k)h(k[X].object),delete k[X];delete D[I]}delete i[y.id]}function P(y){for(const D in i){const I=i[D];if(I[y.id]===void 0)continue;const k=I[y.id];for(const X in k)h(k[X].object),delete k[X];delete I[y.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function Sf(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];t.update(f,i,1)}function l(c,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*p[g];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ef(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==on&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sn&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:U,maxSamples:b}}function Tf(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Zn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||s;return s=p,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,M=E*4;let v=u.clippingState||null;l.value=v,v=h(_,p,M,f);for(let U=0;U!==M;++U)v[U]=t[U];u.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=f+g*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,v=f;M!==g;++M,v+=4)a.copy(d[M]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function wf(n){let e=new WeakMap;function t(a,o){return o===Vr?a.mapping=Ti:o===Wr&&(a.mapping=wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vr||o===Wr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mu(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ka extends Fl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,Hl=[.125,.215,.35,.446,.526,.582],mi=20,Za=new Ka,Vl=new qe;let Ja=null,Qa=0,eo=0,to=!1;const gi=(1+Math.sqrt(5))/2,Xi=1/gi,Wl=[new N(-gi,Xi,0),new N(gi,Xi,0),new N(-Xi,0,gi),new N(Xi,0,gi),new N(0,gi,-Xi),new N(0,gi,Xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class no{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:$t,format:on,colorSpace:Ai,depthBuffer:!1},s=Xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(r)),this._blurMaterial=Af(r,e,t)}return s}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,i,s){const o=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Vl),h.toneMapping=kn,h.autoClear=!1;const f=new ls({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new xt(new di,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Vl),g=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):E===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const M=this._cubeSize;er(s,E*M,u>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ti||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wl[(s-r-1)%Wl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xt(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):mi;m>mi&&console.warn(\`sigmaRadians, \${r}, is too large and will clip, as it requested \${m} samples when the maximum is set to \${mi}\`);const u=[];let E=0;for(let P=0;P<mi;++P){const L=P/g,S=Math.exp(-L*L/2);u.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-i;const v=this._sizeLods[s],U=3*v*(s>M-Wi?s-M+Wi:0),b=4*(this._cubeSize-v);er(t,U,b,3*v,2*v),l.setRenderTarget(t),l.render(d,Za)}}function bf(n){const e=[],t=[],i=[];let s=n;const r=n-Wi+1+Hl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Wi?l=Hl[a-n+Wi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,u=1,E=new Float32Array(g*_*f),M=new Float32Array(m*_*f),v=new Float32Array(u*_*f);for(let b=0;b<f;b++){const P=b%3*2/3-1,L=b>2?0:-1,S=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];E.set(S,g*_*b),M.set(p,m*_*b);const y=[b,b,b,b,b,b];v.set(y,u*_*b)}const U=new Ht;U.setAttribute("position",new ln(E,g)),U.setAttribute("uv",new ln(M,m)),U.setAttribute("faceIndex",new ln(v,u)),e.push(U),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xl(n,e,t){const i=new Ft(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Af(n,e,t){const i=new Float32Array(mi),s=new N(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:\`\${n}.0\`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:io(),fragmentShader:\`

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
		\`,blending:Pt,depthTest:!1,depthWrite:!1})}function $l(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:\`

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
		\`,blending:Pt,depthTest:!1,depthWrite:!1})}function Yl(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:\`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		\`,blending:Pt,depthTest:!1,depthWrite:!1})}function io(){return\`

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
	\`}function Rf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vr||l===Wr,h=l===Ti||l===wi;if(c||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new no(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new no(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Cf(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Pf(n,e,t,i){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,u=g.length;m<u;m++)e.remove(g[m])}p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(e.remove(f),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,u=g.length;m<u;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let M=0,v=E.length;M<v;M+=3){const U=E[M+0],b=E[M+1],P=E[M+2];p.push(U,b,b,P,P,U)}}else if(_!==void 0){const E=_.array;g=_.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const U=M+0,b=M+1,P=M+2;p.push(U,b,b,P,P,U)}}else return;const m=new(dl(p)?Ll:Dl)(p,1);m.version=g;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Df(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){n.drawElements(i,f,r,p*a),t.update(f,i,1)}function c(p,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,p*a,_),t.update(f,i,_))}function h(p,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];t.update(m,i,1)}function d(p,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,p,0,g,0,_);let u=0;for(let E=0;E<_;E++)u+=f[E]*g[E];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Lf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function If(n,e,t){const i=new WeakMap,s=new gt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,U=1;v>e.maxTextureSize&&(U=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const b=new Float32Array(v*U*4*d),P=new Ml(b,v,U,d);P.type=Sn,P.needsUpdate=!0;const L=M*4;for(let y=0;y<d;y++){const D=m[y],I=u[y],k=E[y],X=v*U*4*y;for(let se=0;se<D.count;se++){const j=se*L;f===!0&&(s.fromBufferAttribute(D,se),b[X+j+0]=s.x,b[X+j+1]=s.y,b[X+j+2]=s.z,b[X+j+3]=0),_===!0&&(s.fromBufferAttribute(I,se),b[X+j+4]=s.x,b[X+j+5]=s.y,b[X+j+6]=s.z,b[X+j+7]=0),g===!0&&(s.fromBufferAttribute(k,se),b[X+j+8]=s.x,b[X+j+9]=s.y,b[X+j+10]=s.z,b[X+j+11]=k.itemSize===4?s.w:1)}}p={count:d,texture:P,size:new Le(v,U)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Uf(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class so extends kt{constructor(e,t,i,s,r,a,o,l,c,h=bi){if(h!==bi&&h!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bi&&(i=si),i===void 0&&h===ai&&(i=ri),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ql=new kt,jl=new so(1,1),Kl=new Ml,Zl=new eu,Jl=new kl,Ql=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tr(n,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Nf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Bf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;ic.set(i),n.uniformMatrix2fv(this.addr,!1,ic),Lt(t,i)}}function kf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;nc.set(i),n.uniformMatrix3fv(this.addr,!1,nc),Lt(t,i)}}function Gf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;tc.set(i),n.uniformMatrix4fv(this.addr,!1,tc),Lt(t,i)}}function Hf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Wf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Xf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function $f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Kf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jl.compareFunction=cl,r=jl):r=ql,t.setTexture2D(e||r,s)}function Zf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zl,s)}function Jf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jl,s)}function Qf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kl,s)}function ep(n){switch(n){case 5126:return Nf;case 35664:return Of;case 35665:return Ff;case 35666:return zf;case 35674:return Bf;case 35675:return kf;case 35676:return Gf;case 5124:case 35670:return Hf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return $f;case 36294:return Yf;case 36295:return qf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function tp(n,e){n.uniform1fv(this.addr,e)}function np(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function ip(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function sp(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function rp(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ap(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function op(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lp(n,e){n.uniform1iv(this.addr,e)}function cp(n,e){n.uniform2iv(this.addr,e)}function hp(n,e){n.uniform3iv(this.addr,e)}function up(n,e){n.uniform4iv(this.addr,e)}function dp(n,e){n.uniform1uiv(this.addr,e)}function fp(n,e){n.uniform2uiv(this.addr,e)}function pp(n,e){n.uniform3uiv(this.addr,e)}function mp(n,e){n.uniform4uiv(this.addr,e)}function gp(n,e,t){const i=this.cache,s=e.length,r=tr(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ql,r[a])}function _p(n,e,t){const i=this.cache,s=e.length,r=tr(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zl,r[a])}function vp(n,e,t){const i=this.cache,s=e.length,r=tr(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jl,r[a])}function xp(n,e,t){const i=this.cache,s=e.length,r=tr(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kl,r[a])}function Mp(n){switch(n){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}class yp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}}class Sp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mp(t.type)}}class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ro=/(\\w+)(\\])?(\\[|\\.)?/g;function sc(n,e){n.seq.push(e),n.map[e.id]=e}function Tp(n,e,t){const i=n.name,s=i.length;for(ro.lastIndex=0;;){const r=ro.exec(i),a=ro.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sc(t,c===void 0?new yp(o,n,e):new Sp(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Ep(o),sc(t,d)),t=d}}}class nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Tp(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wp=37297;let bp=0;function Ap(n,e){const t=n.split(\`
\`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(\`\${o===e?">":" "} \${o}: \${t[a]}\`)}return i.join(\`
\`)}const ac=new Je;function Rp(n){st._getMatrix(ac,st.workingColorSpace,n);const e=\`mat3( \${ac.elements.map(t=>t.toFixed(4))} )\`;switch(st.getTransfer(n)){case Ds:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+\`

\`+s+\`

\`+Ap(n.getShaderSource(e),a)}else return s}function Cp(n,e){const t=Rp(e);return[\`vec4 \${n}( vec4 value ) {\`,\`	return \${t[1]}( vec4( value.rgb * \${t[0]}, value.a ) );\`,"}"].join(\`
\`)}function Pp(n,e){let t;switch(e){case $o:t="Linear";break;case Yo:t="Reinhard";break;case qo:t="Cineon";break;case Hr:t="ACESFilmic";break;case jo:t="AgX";break;case Ko:t="Neutral";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new N;function Dp(){st.getLuminanceCoefficients(ir);const n=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",\`	const vec3 weights = vec3( \${n}, \${e}, \${t} );\`,"	return dot( weights, rgb );","}"].join(\`
\`)}function Lp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(\`
\`)}function Ip(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(\`
\`)}function Up(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function us(n){return n!==""}function lc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \\t]*#include +<([\\w\\d./]+)>/gm;function ao(n){return n.replace(Np,Fp)}const Op=new Map;function Fp(n,e){let t=et[e];if(t===void 0){const i=Op.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const zp=/#pragma unroll_loop_start\\s+for\\s*\\(\\s*int\\s+i\\s*=\\s*(\\d+)\\s*;\\s*i\\s*<\\s*(\\d+)\\s*;\\s*i\\s*\\+\\+\\s*\\)\\s*{([\\s\\S]+?)}\\s+#pragma unroll_loop_end/g;function hc(n){return n.replace(zp,Bp)}function Bp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\\[\\s*i\\s*\\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(n){let e=\`precision \${n.precision} float;
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
#define LOW_PRECISION\`),e}function kp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Go?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ti:case wi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gr:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Xp(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=kp(t),c=Gp(t),h=Hp(t),d=Vp(t),p=Wp(t),f=Lp(t),_=Ip(r),g=s.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+\`
\`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(\`
\`),m.length>0&&(m+=\`
\`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(\`
\`),u.length>0&&(u+=\`
\`)):(m=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",\`
\`].filter(us).join(\`
\`),u=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?et.tonemapping_pars_fragment:"",t.toneMapping!==kn?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),Dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",\`
\`].filter(us).join(\`
\`)),a=ao(a),a=lc(a,t),a=cc(a,t),o=ao(o),o=lc(o,t),o=cc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(E=\`#version 300 es
\`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(\`
\`)+\`
\`+m,u=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(\`
\`)+\`
\`+u);const M=E+m+a,v=E+u+o,U=rc(s,s.VERTEX_SHADER,M),b=rc(s,s.FRAGMENT_SHADER,v);s.attachShader(g,U),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(D){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(b).trim();let se=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,U,b);else{const ue=oc(s,U,"vertex"),K=oc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+\`

Material Name: \`+D.name+\`
Material Type: \`+D.type+\`

Program Info Log: \`+I+\`
\`+ue+\`
\`+K)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||X==="")&&(j=!1);j&&(D.diagnostics={runnable:se,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:u}})}s.deleteShader(U),s.deleteShader(b),L=new nr(s,g),S=Up(s,g)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,wp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=b,this}let $p=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qp(e),t.set(e,i)),i}}class qp{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}}function jp(n,e,t,i,s,r,a){const o=new Oa,l=new Yp,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":\`uv\${S}\`}function m(S,y,D,I,k){const X=I.fog,se=k.geometry,j=S.isMeshStandardMaterial?I.environment:null,ue=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),K=ue&&ue.mapping===Es?ue.image.height:null,A=_[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Z=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,pe=Z!==void 0?Z.length:0;let Ie=0;se.morphAttributes.position!==void 0&&(Ie=1),se.morphAttributes.normal!==void 0&&(Ie=2),se.morphAttributes.color!==void 0&&(Ie=3);let Oe,Q,de,be;if(A){const ot=En[A];Oe=ot.vertexShader,Q=ot.fragmentShader}else Oe=S.vertexShader,Q=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const ge=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Xe=k.isBatchedMesh===!0,mt=!!S.map,Ke=!!S.matcap,Mt=!!ue,B=!!S.aoMap,bt=!!S.lightMap,je=!!S.bumpMap,$e=!!S.normalMap,ke=!!S.displacementMap,at=!!S.emissiveMap,Be=!!S.metalnessMap,R=!!S.roughnessMap,T=S.anisotropy>0,W=S.clearcoat>0,re=S.dispersion>0,oe=S.iridescence>0,ie=S.sheen>0,De=S.transmission>0,_e=T&&!!S.anisotropyMap,Ee=W&&!!S.clearcoatMap,Qe=W&&!!S.clearcoatNormalMap,le=W&&!!S.clearcoatRoughnessMap,Ae=oe&&!!S.iridescenceMap,Fe=oe&&!!S.iridescenceThicknessMap,We=ie&&!!S.sheenColorMap,Pe=ie&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,Ge=!!S.specularColorMap,rt=!!S.specularIntensityMap,F=De&&!!S.transmissionMap,ve=De&&!!S.thicknessMap,$=!!S.gradientMap,ae=!!S.alphaMap,we=S.alphaTest>0,Te=!!S.alphaHash,Ye=!!S.extensions;let Et=kn;S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Et=n.toneMapping);const Nt={shaderID:A,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:Q,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Xe,batchingColor:Xe&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ai,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:Ke,envMap:Mt,envMapMode:Mt&&ue.mapping,envMapCubeUVHeight:K,aoMap:B,lightMap:bt,bumpMap:je,normalMap:$e,displacementMap:p&&ke,emissiveMap:at,normalMapObjectSpace:$e&&S.normalMapType===Oh,normalMapTangentSpace:$e&&S.normalMapType===Ps,metalnessMap:Be,roughnessMap:R,anisotropy:T,anisotropyMap:_e,clearcoat:W,clearcoatMap:Ee,clearcoatNormalMap:Qe,clearcoatRoughnessMap:le,dispersion:re,iridescence:oe,iridescenceMap:Ae,iridescenceThicknessMap:Fe,sheen:ie,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:Ze,specularColorMap:Ge,specularIntensityMap:rt,transmission:De,transmissionMap:F,thicknessMap:ve,gradientMap:$,opaque:S.transparent===!1&&S.blending===Si&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:we,alphaHash:Te,combine:S.combine,mapUv:mt&&g(S.map.channel),aoMapUv:B&&g(S.aoMap.channel),lightMapUv:bt&&g(S.lightMap.channel),bumpMapUv:je&&g(S.bumpMap.channel),normalMapUv:$e&&g(S.normalMap.channel),displacementMapUv:ke&&g(S.displacementMap.channel),emissiveMapUv:at&&g(S.emissiveMap.channel),metalnessMapUv:Be&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:_e&&g(S.anisotropyMap.channel),clearcoatMapUv:Ee&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ze&&g(S.specularMap.channel),specularColorMapUv:Ge&&g(S.specularColorMap.channel),specularIntensityMapUv:rt&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:ve&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&($e||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!se.attributes.uv&&(mt||ae),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ye&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&S.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=_[S.type];let D;if(y){const I=En[y];D=Fn.clone(I.uniforms)}else D=S.uniforms;return D}function U(S,y){let D;for(let I=0,k=h.length;I<k;I++){const X=h[I];if(X.cacheKey===y){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Xp(n,y,S,r),h.push(D)),D}function b(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:U,releaseProgram:b,releaseShaderCache:P,programs:h,dispose:L}}function Kp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Zp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,p,f,_,g,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=m),e++,u}function o(d,p,f,_,g,m){const u=a(d,p,f,_,g,m);f.transmission>0?i.push(u):f.transparent===!0?s.push(u):t.push(u)}function l(d,p,f,_,g,m){const u=a(d,p,f,_,g,m);f.transmission>0?i.unshift(u):f.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Zp),i.length>1&&i.sort(p||dc),s.length>1&&s.sort(p||dc)}function h(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jp(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new fc,n.set(i,[a])):s>=r.length?(a=new fc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function em(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tm=0;function nm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function im(n){const e=new Qp,t=em(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new nt,a=new nt;function o(c){let h=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,u=0,E=0,M=0,v=0,U=0,b=0,P=0;c.sort(nm);for(let S=0,y=c.length;S<y;S++){const D=c[S],I=D.color,k=D.intensity,X=D.distance,se=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*k,d+=I.g*k,p+=I.b*k;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],k);P++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ue=D.shadow,K=t.get(D);K.shadowIntensity=ue.intensity,K.shadowBias=ue.bias,K.shadowNormalBias=ue.normalBias,K.shadowRadius=ue.radius,K.shadowMapSize=ue.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=se,i.directionalShadowMatrix[f]=D.shadow.matrix,E++}i.directional[f]=j,f++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(I).multiplyScalar(k),j.distance=X,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[g]=j;const ue=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,ue.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[g]=ue.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=ue.intensity,K.shadowBias=ue.bias,K.shadowNormalBias=ue.normalBias,K.shadowRadius=ue.radius,K.shadowMapSize=ue.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=se,v++}g++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(I).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const ue=D.shadow,K=t.get(D);K.shadowIntensity=ue.intensity,K.shadowBias=ue.bias,K.shadowNormalBias=ue.normalBias,K.shadowRadius=ue.radius,K.shadowMapSize=ue.mapSize,K.shadowCameraNear=ue.camera.near,K.shadowCameraFar=ue.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=j,_++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(k),j.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=j,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==U||L.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+U-b,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,L.directionalLength=f,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=U,L.numLightProbes=P,i.version=tm++)}function l(c,h){let d=0,p=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const M=c[u];if(M.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function pc(n){const e=new im(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sm(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new pc(n),e.set(s,[o])):r>=a.length?(o=new pc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class mc extends jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const am=\`void main() {
	gl_Position = vec4( position, 1.0 );
}\`,om=\`uniform sampler2D shadow_pass;
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
}\`;function lm(n,e,t){let i=new ja;const s=new Le,r=new Le,a=new gt,o=new mc({depthPacking:ol}),l=new rm,c={},h=t.maxTextureSize,d={[Bn]:Wt,[Wt]:Bn,[an]:an},p=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:am,fragmentShader:om}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let u=this.type;this.render=function(b,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Pt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=u!==Cn&&this.type===Cn,X=u===Cn&&this.type!==Cn;for(let se=0,j=b.length;se<j;se++){const ue=b[se],K=ue.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const A=K.getFrameExtents();if(s.multiply(A),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/A.x),s.x=r.x*A.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/A.y),s.y=r.y*A.y,K.mapSize.y=r.y)),K.map===null||k===!0||X===!0){const pe=this.type!==Cn?{minFilter:Xt,magFilter:Xt}:{};K.map!==null&&K.map.dispose(),K.map=new Ft(s.x,s.y,pe),K.map.texture.name=ue.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const Z=K.getViewportCount();for(let pe=0;pe<Z;pe++){const Ie=K.getViewport(pe);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),I.viewport(a),K.updateMatrices(ue,pe),i=K.getFrustum(),v(P,L,K.camera,ue,this.type)}K.isPointLightShadow!==!0&&this.type===Cn&&E(K,L),K.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,D)};function E(b,P){const L=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ft(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,L,p,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,L,f,g,null)}function M(b,P,L,S){let y=null;const D=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)y=D;else if(y=L.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const I=y.uuid,k=P.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let se=X[k];se===void 0&&(se=y.clone(),X[k]=se,P.addEventListener("dispose",U)),y=se}if(y.visible=P.visible,y.wireframe=P.wireframe,S===Cn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=L}return y}function v(b,P,L,S,y){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Cn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const k=e.update(b),X=b.material;if(Array.isArray(X)){const se=k.groups;for(let j=0,ue=se.length;j<ue;j++){const K=se[j],A=X[K.materialIndex];if(A&&A.visible){const Z=M(b,A,S,y);b.onBeforeShadow(n,b,P,L,k,Z,K),n.renderBufferDirect(L,null,k,Z,b,K),b.onAfterShadow(n,b,P,L,k,Z,K)}}}else if(X.visible){const se=M(b,X,S,y);b.onBeforeShadow(n,b,P,L,k,se,null),n.renderBufferDirect(L,null,k,se,b,null),b.onAfterShadow(n,b,P,L,k,se,null)}}const I=b.children;for(let k=0,X=I.length;k<X;k++)v(I[k],P,L,S,y)}function U(b){b.target.removeEventListener("dispose",U);for(const L in c){const S=c[L],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const cm={[Ur]:Nr,[Or]:Br,[Fr]:kr,[Ei]:zr,[Nr]:Ur,[Br]:Or,[kr]:Fr,[zr]:Ei};function hm(n,e){function t(){let F=!1;const ve=new gt;let $=null;const ae=new gt(0,0,0,0);return{setMask:function(we){$!==we&&!F&&(n.colorMask(we,we,we,we),$=we)},setLocked:function(we){F=we},setClear:function(we,Te,Ye,Et,Nt){Nt===!0&&(we*=Et,Te*=Et,Ye*=Et),ve.set(we,Te,Ye,Et),ae.equals(ve)===!1&&(n.clearColor(we,Te,Ye,Et),ae.copy(ve))},reset:function(){F=!1,$=null,ae.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,$=null,ae=null,we=null;return{setReversed:function(Te){if(ve!==Te){const Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const Et=we;we=null,this.setClear(Et)}ve=Te},getReversed:function(){return ve},setTest:function(Te){Te?ge(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Te){$!==Te&&!F&&(n.depthMask(Te),$=Te)},setFunc:function(Te){if(ve&&(Te=cm[Te]),ae!==Te){switch(Te){case Ur:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case Or:n.depthFunc(n.LESS);break;case Ei:n.depthFunc(n.LEQUAL);break;case Fr:n.depthFunc(n.EQUAL);break;case zr:n.depthFunc(n.GEQUAL);break;case Br:n.depthFunc(n.GREATER);break;case kr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Te}},setLocked:function(Te){F=Te},setClear:function(Te){we!==Te&&(ve&&(Te=1-Te),n.clearDepth(Te),we=Te)},reset:function(){F=!1,$=null,ae=null,we=null,ve=!1}}}function s(){let F=!1,ve=null,$=null,ae=null,we=null,Te=null,Ye=null,Et=null,Nt=null;return{setTest:function(ot){F||(ot?ge(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(ot){ve!==ot&&!F&&(n.stencilMask(ot),ve=ot)},setFunc:function(ot,Jt,un){($!==ot||ae!==Jt||we!==un)&&(n.stencilFunc(ot,Jt,un),$=ot,ae=Jt,we=un)},setOp:function(ot,Jt,un){(Te!==ot||Ye!==Jt||Et!==un)&&(n.stencilOp(ot,Jt,un),Te=ot,Ye=Jt,Et=un)},setLocked:function(ot){F=ot},setClear:function(ot){Nt!==ot&&(n.clearStencil(ot),Nt=ot)},reset:function(){F=!1,ve=null,$=null,ae=null,we=null,Te=null,Ye=null,Et=null,Nt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],_=null,g=!1,m=null,u=null,E=null,M=null,v=null,U=null,b=null,P=new qe(0,0,0),L=0,S=!1,y=null,D=null,I=null,k=null,X=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ue=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\\d)/.exec(K)[1]),j=ue>=1):K.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\\d)/.exec(K)[1]),j=ue>=2);let A=null,Z={};const pe=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Oe=new gt().fromArray(pe),Q=new gt().fromArray(Ie);function de(F,ve,$,ae){const we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(F,Te),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<$;Ye++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ve+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}const be={};be[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),a.setFunc(Ei),je(!1),$e(ko),ge(n.CULL_FACE),B(Pt);function ge(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Re(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ue(F,ve){return d[F]!==ve?(n.bindFramebuffer(F,ve),d[F]=ve,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Xe(F,ve){let $=f,ae=!1;if(F){$=p.get(ve),$===void 0&&($=[],p.set(ve,$));const we=F.textures;if($.length!==we.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ye=we.length;Te<Ye;Te++)$[Te]=n.COLOR_ATTACHMENT0+Te;$.length=we.length,ae=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ae=!0);ae&&n.drawBuffers($)}function mt(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const Ke={[fn]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[vh]:n.FUNC_REVERSE_SUBTRACT};Ke[xh]=n.MIN,Ke[Mh]=n.MAX;const Mt={[es]:n.ZERO,[yh]:n.ONE,[Sh]:n.SRC_COLOR,[Pr]:n.SRC_ALPHA,[bh]:n.SRC_ALPHA_SATURATE,[Ir]:n.DST_COLOR,[Lr]:n.DST_ALPHA,[Eh]:n.ONE_MINUS_SRC_COLOR,[Dr]:n.ONE_MINUS_SRC_ALPHA,[wh]:n.ONE_MINUS_DST_COLOR,[Th]:n.ONE_MINUS_DST_ALPHA,[Ah]:n.CONSTANT_COLOR,[Rh]:n.ONE_MINUS_CONSTANT_COLOR,[Ch]:n.CONSTANT_ALPHA,[Ph]:n.ONE_MINUS_CONSTANT_ALPHA};function B(F,ve,$,ae,we,Te,Ye,Et,Nt,ot){if(F===Pt){g===!0&&(Re(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),F!==Xo){if(F!==m||ot!==S){if((u!==fn||v!==fn)&&(n.blendEquation(n.FUNC_ADD),u=fn,v=fn),ot)switch(F){case Si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cr:n.blendFunc(n.ONE,n.ONE);break;case Vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,M=null,U=null,b=null,P.set(0,0,0),L=0,m=F,S=ot}return}we=we||ve,Te=Te||$,Ye=Ye||ae,(ve!==u||we!==v)&&(n.blendEquationSeparate(Ke[ve],Ke[we]),u=ve,v=we),($!==E||ae!==M||Te!==U||Ye!==b)&&(n.blendFuncSeparate(Mt[$],Mt[ae],Mt[Te],Mt[Ye]),E=$,M=ae,U=Te,b=Ye),(Et.equals(P)===!1||Nt!==L)&&(n.blendColor(Et.r,Et.g,Et.b,Nt),P.copy(Et),L=Nt),m=F,S=!1}function bt(F,ve){F.side===an?Re(n.CULL_FACE):ge(n.CULL_FACE);let $=F.side===Wt;ve&&($=!$),je($),F.blending===Si&&F.transparent===!1?B(Pt):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ae=F.stencilWrite;o.setTest(ae),ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){y!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),y=F)}function $e(F){F!==mh?(ge(n.CULL_FACE),F!==D&&(F===ko?n.cullFace(n.BACK):F===gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),D=F}function ke(F){F!==I&&(j&&n.lineWidth(F),I=F)}function at(F,ve,$){F?(ge(n.POLYGON_OFFSET_FILL),(k!==ve||X!==$)&&(n.polygonOffset(ve,$),k=ve,X=$)):Re(n.POLYGON_OFFSET_FILL)}function Be(F){F?ge(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+se-1),A!==F&&(n.activeTexture(F),A=F)}function T(F,ve,$){$===void 0&&(A===null?$=n.TEXTURE0+se-1:$=A);let ae=Z[$];ae===void 0&&(ae={type:void 0,texture:void 0},Z[$]=ae),(ae.type!==F||ae.texture!==ve)&&(A!==$&&(n.activeTexture($),A=$),n.bindTexture(F,ve||be[F]),ae.type=F,ae.texture=ve)}function W(){const F=Z[A];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(F){Oe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function Pe(F){Q.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function Ze(F,ve){let $=c.get(ve);$===void 0&&($=new WeakMap,c.set(ve,$));let ae=$.get(F);ae===void 0&&(ae=n.getUniformBlockIndex(ve,F.name),$.set(F,ae))}function Ge(F,ve){const ae=c.get(ve).get(F);l.get(ve)!==ae&&(n.uniformBlockBinding(ve,ae,F.__bindingPointIndex),l.set(ve,ae))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},A=null,Z={},d={},p=new WeakMap,f=[],_=null,g=!1,m=null,u=null,E=null,M=null,v=null,U=null,b=null,P=new qe(0,0,0),L=0,S=!1,y=null,D=null,I=null,k=null,X=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Re,bindFramebuffer:Ue,drawBuffers:Xe,useProgram:mt,setBlending:B,setMaterial:bt,setFlipSided:je,setCullFace:$e,setLineWidth:ke,setPolygonOffset:at,setScissorTest:Be,activeTexture:R,bindTexture:T,unbindTexture:W,compressedTexImage2D:re,compressedTexImage3D:oe,texImage2D:Ae,texImage3D:Fe,updateUBOMapping:Ze,uniformBlockBinding:Ge,texStorage2D:Qe,texStorage3D:le,texSubImage2D:ie,texSubImage3D:De,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:We,viewport:Pe,reset:rt}}function gc(n,e,t,i){const s=um(i);switch(t){case tl:return n*e;case il:return n*e;case sl:return n*e*2;case Kr:return n*e/s.components*s.byteLength;case Zr:return n*e/s.components*s.byteLength;case rl:return n*e*2/s.components*s.byteLength;case Jr:return n*e*2/s.components*s.byteLength;case nl:return n*e*3/s.components*s.byteLength;case on:return n*e*4/s.components*s.byteLength;case Qr:return n*e*4/s.components*s.byteLength;case ws:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case As:case Rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ta:case ia:return Math.max(n,16)*Math.max(e,8)/4;case ea:case na:return Math.max(n,8)*Math.max(e,8)/2;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case la:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ca:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ha:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ga:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _a:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case va:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cs:case ya:case Sa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case al:case Ea:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ta:case wa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(\`Unable to determine texture byte length for \${t} format.\`)}function um(n){switch(n){case yn:case Jo:return{byteLength:1,components:1};case ts:case Qo:case $t:return{byteLength:2,components:1};case qr:case jr:return{byteLength:2,components:4};case si:case Yr:case Sn:return{byteLength:4,components:1};case el:return{byteLength:4,components:3}}throw new Error(\`Unknown texture type \${n}.\`)}function dm(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return f?new OffscreenCanvas(R,T):Us("canvas")}function g(R,T,W){let re=1;const oe=Be(R);if((oe.width>W||oe.height>W)&&(re=W/Math.max(oe.width,oe.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(re*oe.width),De=Math.floor(re*oe.height);d===void 0&&(d=_(ie,De));const _e=T?_(ie,De):d;return _e.width=ie,_e.height=De,_e.getContext("2d").drawImage(R,0,0,ie,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+De+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,T,W,re,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=T;if(T===n.RED&&(W===n.FLOAT&&(ie=n.R32F),W===n.HALF_FLOAT&&(ie=n.R16F),W===n.UNSIGNED_BYTE&&(ie=n.R8)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.R8UI),W===n.UNSIGNED_SHORT&&(ie=n.R16UI),W===n.UNSIGNED_INT&&(ie=n.R32UI),W===n.BYTE&&(ie=n.R8I),W===n.SHORT&&(ie=n.R16I),W===n.INT&&(ie=n.R32I)),T===n.RG&&(W===n.FLOAT&&(ie=n.RG32F),W===n.HALF_FLOAT&&(ie=n.RG16F),W===n.UNSIGNED_BYTE&&(ie=n.RG8)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.RG8UI),W===n.UNSIGNED_SHORT&&(ie=n.RG16UI),W===n.UNSIGNED_INT&&(ie=n.RG32UI),W===n.BYTE&&(ie=n.RG8I),W===n.SHORT&&(ie=n.RG16I),W===n.INT&&(ie=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),W===n.UNSIGNED_INT&&(ie=n.RGB32UI),W===n.BYTE&&(ie=n.RGB8I),W===n.SHORT&&(ie=n.RGB16I),W===n.INT&&(ie=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),W===n.UNSIGNED_INT&&(ie=n.RGBA32UI),W===n.BYTE&&(ie=n.RGBA8I),W===n.SHORT&&(ie=n.RGBA16I),W===n.INT&&(ie=n.RGBA32I)),T===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),T===n.RGBA){const De=oe?Ds:st.getTransfer(re);W===n.FLOAT&&(ie=n.RGBA32F),W===n.HALF_FLOAT&&(ie=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ie=De===ft?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(R,T){let W;return R?T===null||T===si||T===ri?W=n.DEPTH24_STENCIL8:T===Sn?W=n.DEPTH32F_STENCIL8:T===ts&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===si||T===ri?W=n.DEPTH_COMPONENT24:T===Sn?W=n.DEPTH_COMPONENT32F:T===ts&&(W=n.DEPTH_COMPONENT16),W}function U(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==Mn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function b(R){const T=R.target;T.removeEventListener("dispose",b),L(T),T.isVideoTexture&&h.delete(T)}function P(R){const T=R.target;T.removeEventListener("dispose",P),y(T)}function L(R){const T=i.get(R);if(T.__webglInit===void 0)return;const W=R.source,re=p.get(W);if(re){const oe=re[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(R),Object.keys(re).length===0&&p.delete(W)}i.remove(R)}function S(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const W=R.source,re=p.get(W);delete re[T.__cacheKey],a.memory.textures--}function y(R){const T=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let oe=0;oe<T.__webglFramebuffer[re].length;oe++)n.deleteFramebuffer(T.__webglFramebuffer[re][oe]);else n.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)n.deleteFramebuffer(T.__webglFramebuffer[re]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=R.textures;for(let re=0,oe=W.length;re<oe;re++){const ie=i.get(W[re]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(W[re])}i.remove(R)}let D=0;function I(){D=0}function k(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function X(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function se(R,T){const W=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,R,T);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function j(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Q(W,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function ue(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Q(W,R,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function K(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){de(W,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}const A={[Gn]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Xr]:n.MIRRORED_REPEAT},Z={[Xt]:n.NEAREST,[Uh]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[$r]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},pe={[Fh]:n.NEVER,[Vh]:n.ALWAYS,[zh]:n.LESS,[cl]:n.LEQUAL,[Bh]:n.EQUAL,[Hh]:n.GEQUAL,[kh]:n.GREATER,[Gh]:n.NOTEQUAL};function Ie(R,T){if(T.type===Sn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mn||T.magFilter===$r||T.magFilter===Ts||T.magFilter===ii||T.minFilter===Mn||T.minFilter===$r||T.minFilter===Ts||T.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,A[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,A[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,A[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==Ts&&T.minFilter!==ii||T.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(R,T){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",b));const re=T.source;let oe=p.get(re);oe===void 0&&(oe={},p.set(re,oe));const ie=X(T);if(ie!==R.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),oe[ie].usedTimes++;const De=oe[R.__cacheKey];De!==void 0&&(oe[R.__cacheKey].usedTimes--,De.usedTimes===0&&S(T)),R.__cacheKey=ie,R.__webglTexture=oe[ie].texture}return W}function Q(R,T,W){let re=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=n.TEXTURE_3D);const oe=Oe(R,T),ie=T.source;t.bindTexture(re,R.__webglTexture,n.TEXTURE0+W);const De=i.get(ie);if(ie.version!==De.__version||oe===!0){t.activeTexture(n.TEXTURE0+W);const _e=st.getPrimaries(st.workingColorSpace),Ee=T.colorSpace===Hn?null:st.getPrimaries(T.colorSpace),Qe=T.colorSpace===Hn||_e===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let le=g(T.image,!1,s.maxTextureSize);le=at(T,le);const Ae=r.convert(T.format,T.colorSpace),Fe=r.convert(T.type);let We=M(T.internalFormat,Ae,Fe,T.colorSpace,T.isVideoTexture);Ie(re,T);let Pe;const Ze=T.mipmaps,Ge=T.isVideoTexture!==!0,rt=De.__version===void 0||oe===!0,F=ie.dataReady,ve=U(T,le);if(T.isDepthTexture)We=v(T.format===ai,T.type),rt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,We,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,We,le.width,le.height,0,Ae,Fe,null));else if(T.isDataTexture)if(Ze.length>0){Ge&&rt&&t.texStorage2D(n.TEXTURE_2D,ve,We,Ze[0].width,Ze[0].height);for(let $=0,ae=Ze.length;$<ae;$++)Pe=Ze[$],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):t.texImage2D(n.TEXTURE_2D,$,We,Pe.width,Pe.height,0,Ae,Fe,Pe.data);T.generateMipmaps=!1}else Ge?(rt&&t.texStorage2D(n.TEXTURE_2D,ve,We,le.width,le.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Fe,le.data)):t.texImage2D(n.TEXTURE_2D,0,We,le.width,le.height,0,Ae,Fe,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,We,Ze[0].width,Ze[0].height,le.depth);for(let $=0,ae=Ze.length;$<ae;$++)if(Pe=Ze[$],T.format!==on)if(Ae!==null)if(Ge){if(F)if(T.layerUpdates.size>0){const we=gc(Pe.width,Pe.height,T.format,T.type);for(const Te of T.layerUpdates){const Ye=Pe.data.subarray(Te*we/Pe.data.BYTES_PER_ELEMENT,(Te+1)*we/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Te,Pe.width,Pe.height,1,Ae,Ye)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Pe.width,Pe.height,le.depth,Ae,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,We,Pe.width,Pe.height,le.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Pe.width,Pe.height,le.depth,Ae,Fe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,We,Pe.width,Pe.height,le.depth,0,Ae,Fe,Pe.data)}else{Ge&&rt&&t.texStorage2D(n.TEXTURE_2D,ve,We,Ze[0].width,Ze[0].height);for(let $=0,ae=Ze.length;$<ae;$++)Pe=Ze[$],T.format!==on?Ae!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):t.texImage2D(n.TEXTURE_2D,$,We,Pe.width,Pe.height,0,Ae,Fe,Pe.data)}else if(T.isDataArrayTexture)if(Ge){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,We,le.width,le.height,le.depth),F)if(T.layerUpdates.size>0){const $=gc(le.width,le.height,T.format,T.type);for(const ae of T.layerUpdates){const we=le.data.subarray(ae*$/le.data.BYTES_PER_ELEMENT,(ae+1)*$/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,Ae,Fe,we)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Fe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,le.width,le.height,le.depth,0,Ae,Fe,le.data);else if(T.isData3DTexture)Ge?(rt&&t.texStorage3D(n.TEXTURE_3D,ve,We,le.width,le.height,le.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Fe,le.data)):t.texImage3D(n.TEXTURE_3D,0,We,le.width,le.height,le.depth,0,Ae,Fe,le.data);else if(T.isFramebufferTexture){if(rt)if(Ge)t.texStorage2D(n.TEXTURE_2D,ve,We,le.width,le.height);else{let $=le.width,ae=le.height;for(let we=0;we<ve;we++)t.texImage2D(n.TEXTURE_2D,we,We,$,ae,0,Ae,Fe,null),$>>=1,ae>>=1}}else if(Ze.length>0){if(Ge&&rt){const $=Be(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ve,We,$.width,$.height)}for(let $=0,ae=Ze.length;$<ae;$++)Pe=Ze[$],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae,Fe,Pe):t.texImage2D(n.TEXTURE_2D,$,We,Ae,Fe,Pe);T.generateMipmaps=!1}else if(Ge){if(rt){const $=Be(le);t.texStorage2D(n.TEXTURE_2D,ve,We,$.width,$.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Fe,le)}else t.texImage2D(n.TEXTURE_2D,0,We,Ae,Fe,le);m(T)&&u(re),De.__version=ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,W){if(T.image.length!==6)return;const re=Oe(R,T),oe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const ie=i.get(oe);if(oe.version!==ie.__version||re===!0){t.activeTexture(n.TEXTURE0+W);const De=st.getPrimaries(st.workingColorSpace),_e=T.colorSpace===Hn?null:st.getPrimaries(T.colorSpace),Ee=T.colorSpace===Hn||De===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,le=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let ae=0;ae<6;ae++)!Qe&&!le?Ae[ae]=g(T.image[ae],!0,s.maxCubemapSize):Ae[ae]=le?T.image[ae].image:T.image[ae],Ae[ae]=at(T,Ae[ae]);const Fe=Ae[0],We=r.convert(T.format,T.colorSpace),Pe=r.convert(T.type),Ze=M(T.internalFormat,We,Pe,T.colorSpace),Ge=T.isVideoTexture!==!0,rt=ie.__version===void 0||re===!0,F=oe.dataReady;let ve=U(T,Fe);Ie(n.TEXTURE_CUBE_MAP,T);let $;if(Qe){Ge&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ze,Fe.width,Fe.height);for(let ae=0;ae<6;ae++){$=Ae[ae].mipmaps;for(let we=0;we<$.length;we++){const Te=$[we];T.format!==on?We!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Te.width,Te.height,We,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,Ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Te.width,Te.height,We,Pe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,Ze,Te.width,Te.height,0,We,Pe,Te.data)}}}else{if($=T.mipmaps,Ge&&rt){$.length>0&&ve++;const ae=Be(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae[ae].width,Ae[ae].height,We,Pe,Ae[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,Ae[ae].width,Ae[ae].height,0,We,Pe,Ae[ae].data);for(let we=0;we<$.length;we++){const Ye=$[we].image[ae].image;Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,Ye.width,Ye.height,We,Pe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,Ze,Ye.width,Ye.height,0,We,Pe,Ye.data)}}else{Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,We,Pe,Ae[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,We,Pe,Ae[ae]);for(let we=0;we<$.length;we++){const Te=$[we];Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,We,Pe,Te.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,Ze,We,Pe,Te.image[ae])}}}m(T)&&u(n.TEXTURE_CUBE_MAP),ie.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function be(R,T,W,re,oe,ie){const De=r.convert(W.format,W.colorSpace),_e=r.convert(W.type),Ee=M(W.internalFormat,De,_e,W.colorSpace),Qe=i.get(T),le=i.get(W);if(le.__renderTarget=T,!Qe.__hasExternalTextures){const Ae=Math.max(1,T.width>>ie),Fe=Math.max(1,T.height>>ie);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,Ee,Ae,Fe,T.depth,0,De,_e,null):t.texImage2D(oe,ie,Ee,Ae,Fe,0,De,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),$e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,oe,le.__webglTexture,0,je(T)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,oe,le.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(R,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){const re=T.depthTexture,oe=re&&re.isDepthTexture?re.type:null,ie=v(T.stencilBuffer,oe),De=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=je(T);$e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,ie,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ie,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ie,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,R)}else{const re=T.textures;for(let oe=0;oe<re.length;oe++){const ie=re[oe],De=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),Ee=M(ie.internalFormat,De,_e,ie.colorSpace),Qe=je(T);W&&$e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ee,T.width,T.height):$e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,Ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(T.depthTexture);re.__renderTarget=T,(!re.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),se(T.depthTexture,0);const oe=re.__webglTexture,ie=je(T);if(T.depthTexture.format===bi)$e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(T.depthTexture.format===ai)$e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const T=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const re=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){const oe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",oe)};re.addEventListener("dispose",oe),T.__depthDisposeCallback=oe}T.__boundDepthTexture=re}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,R)}else if(W){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=n.createRenderbuffer(),ge(T.__webglDepthbuffer[re],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ge(T.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(R,T,W){const re=i.get(R);T!==void 0&&be(re.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ue(R)}function mt(R){const T=R.texture,W=i.get(R),re=i.get(T);R.addEventListener("dispose",P);const oe=R.textures,ie=R.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=T.version,a.memory.textures++),ie){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)W.__webglFramebuffer[_e][Ee]=n.createFramebuffer()}else W.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)W.__webglFramebuffer[_e]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(De)for(let _e=0,Ee=oe.length;_e<Ee;_e++){const Qe=i.get(oe[_e]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&$e(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<oe.length;_e++){const Ee=oe[_e];W.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const Qe=r.convert(Ee.format,Ee.colorSpace),le=r.convert(Ee.type),Ae=M(Ee.internalFormat,Qe,le,Ee.colorSpace,R.isXRRenderTarget===!0),Fe=je(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)be(W.__webglFramebuffer[_e][Ee],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else be(W.__webglFramebuffer[_e],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(T)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let _e=0,Ee=oe.length;_e<Ee;_e++){const Qe=oe[_e],le=i.get(Qe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ie(n.TEXTURE_2D,Qe),be(W.__webglFramebuffer,R,Qe,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),m(Qe)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),Ie(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)be(W.__webglFramebuffer[Ee],R,T,n.COLOR_ATTACHMENT0,_e,Ee);else be(W.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,_e,0);m(T)&&u(_e),t.unbindTexture()}R.depthBuffer&&Ue(R)}function Ke(R){const T=R.textures;for(let W=0,re=T.length;W<re;W++){const oe=T[W];if(m(oe)){const ie=E(R),De=i.get(oe).__webglTexture;t.bindTexture(ie,De),u(ie),t.unbindTexture()}}}const Mt=[],B=[];function bt(R){if(R.samples>0){if($e(R)===!1){const T=R.textures,W=R.width,re=R.height;let oe=n.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(R),_e=T.length>1;if(_e)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ee]);const Qe=i.get(T[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,W,re,0,0,W,re,oe,n.NEAREST),l===!0&&(Mt.length=0,B.length=0,Mt.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Mt.push(ie),B.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ee]);const Qe=i.get(T[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function je(R){return Math.min(s.maxSamples,R.samples)}function $e(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(R){const T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function at(R,T){const W=R.colorSpace,re=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Ai&&W!==Hn&&(st.getTransfer(W)===ft?(re!==on||oe!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=se,this.setTexture2DArray=j,this.setTexture3D=ue,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=be,this.useMultisampledRTT=$e}function fm(n,e){function t(i,s=Hn){let r;const a=st.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===qr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===el)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.BYTE;if(i===Qo)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===Yr)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===$t)return n.HALF_FLOAT;if(i===tl)return n.ALPHA;if(i===nl)return n.RGB;if(i===on)return n.RGBA;if(i===il)return n.LUMINANCE;if(i===sl)return n.LUMINANCE_ALPHA;if(i===bi)return n.DEPTH_COMPONENT;if(i===ai)return n.DEPTH_STENCIL;if(i===Kr)return n.RED;if(i===Zr)return n.RED_INTEGER;if(i===rl)return n.RG;if(i===Jr)return n.RG_INTEGER;if(i===Qr)return n.RGBA_INTEGER;if(i===ws||i===bs||i===As||i===Rs)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ea||i===ta||i===na||i===ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sa||i===ra||i===aa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sa||i===ra)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===aa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oa||i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===va||i===xa||i===Ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===la)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ca)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ha)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ua)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===da)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ma)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ga)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_a)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===va)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ma)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cs||i===ya||i===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cs)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===Ea||i===Ta||i===wa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ri?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class pm extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gm=\`
void main() {

	gl_Position = vec4( position, 1.0 );

}\`,_m=\`
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

}\`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wt({vertexShader:gm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends oi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,_=null;const g=new vm,m=t.getContextAttributes();let u=null,E=null;const M=[],v=[],U=new Le;let b=null;const P=new nn;P.viewport=new gt;const L=new nn;L.viewport=new gt;const S=[P,L],y=new pm;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=M[Q];return de===void 0&&(de=new oo,M[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=M[Q];return de===void 0&&(de=new oo,M[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=M[Q];return de===void 0&&(de=new oo,M[Q]=de),de.getHandSpace()};function k(Q){const de=v.indexOf(Q.inputSource);if(de===-1)return;const be=M[de];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||a),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",se);for(let Q=0;Q<M.length;Q++){const de=v[Q];de!==null&&(v[Q]=null,M[Q].disconnect(de))}D=null,I=null,g.reset(),e.setRenderTarget(u),f=null,p=null,d=null,s=null,E=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ft(f.framebufferWidth,f.framebufferHeight,{format:on,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,be=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?ai:bi,be=m.stencil?ri:si);const Re={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Re),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new Ft(p.textureWidth,p.textureHeight,{format:on,type:yn,depthTexture:new so(p.textureWidth,p.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(Q){for(let de=0;de<Q.removed.length;de++){const be=Q.removed[de],ge=v.indexOf(be);ge>=0&&(v[ge]=null,M[ge].disconnect(be))}for(let de=0;de<Q.added.length;de++){const be=Q.added[de];let ge=v.indexOf(be);if(ge===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=v.length){v.push(be),ge=Ue;break}else if(v[Ue]===null){v[Ue]=be,ge=Ue;break}if(ge===-1)break}const Re=M[ge];Re&&Re.connect(be)}}const j=new N,ue=new N;function K(Q,de,be){j.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(be.matrixWorld);const ge=j.distanceTo(ue),Re=de.projectionMatrix.elements,Ue=be.projectionMatrix.elements,Xe=Re[14]/(Re[10]-1),mt=Re[14]/(Re[10]+1),Ke=(Re[9]+1)/Re[5],Mt=(Re[9]-1)/Re[5],B=(Re[8]-1)/Re[0],bt=(Ue[8]+1)/Ue[0],je=Xe*B,$e=Xe*bt,ke=ge/(-B+bt),at=ke*-B;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(at),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Be=Xe+ke,R=mt+ke,T=je-at,W=$e+(ge-at),re=Ke*mt/R*Be,oe=Mt*mt/R*Be;Q.projectionMatrix.makePerspective(T,W,re,oe,Be,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function A(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let de=Q.near,be=Q.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(be=g.depthFar)),y.near=L.near=P.near=de,y.far=L.far=P.far=be,(D!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,I=y.far),P.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,y.layers.mask=P.layers.mask|L.layers.mask;const ge=Q.parent,Re=y.cameras;A(y,ge);for(let Ue=0;Ue<Re.length;Ue++)A(Re[Ue],ge);Re.length===2?K(y,P,L):y.projectionMatrix.copy(P.projectionMatrix),Z(Q,y,ge)};function Z(Q,de,be){be===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ba*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let pe=null;function Ie(Q,de){if(h=de.getViewerPose(c||a),_=de,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let ge=!1;be.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let Ue=0;Ue<be.length;Ue++){const Xe=be[Ue];let mt=null;if(f!==null)mt=f.getViewport(Xe);else{const Mt=d.getViewSubImage(p,Xe);mt=Mt.viewport,Ue===0&&(e.setRenderTargetTextures(E,Mt.colorTexture,p.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(E))}let Ke=S[Ue];Ke===void 0&&(Ke=new nn,Ke.layers.enable(Ue),Ke.viewport=new gt,S[Ue]=Ke),Ke.matrix.fromArray(Xe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Xe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(mt.x,mt.y,mt.width,mt.height),Ue===0&&(y.matrix.copy(Ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(Ke)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ue=d.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(e,Ue,s.renderState)}}for(let be=0;be<M.length;be++){const ge=v[be],Re=M[be];ge!==null&&Re!==void 0&&Re.update(ge,de,c||a)}pe&&pe(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Oe=new Gl;Oe.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}}const _i=new gn,Mm=new nt;function ym(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ol(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,M,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),g(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Wt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Wt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(_i)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sm(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;i.uniformBlockBinding(E,v)}function c(E,M){let v=s[E.id];v===void 0&&(_(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const U=M.program;i.updateUBOMapping(E,U);const b=e.render.frame;r[E.id]!==b&&(p(E),r[E.id]=b)}function h(E){const M=d();E.__bindingPointIndex=M;const v=n.createBuffer(),U=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,U,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=s[E.id],v=E.uniforms,U=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,P=v.length;b<P;b++){const L=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,y=L.length;S<y;S++){const D=L[S];if(f(D,b,S,U)===!0){const I=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let se=0;se<k.length;se++){const j=k[se],ue=g(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,I+X,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,X),X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,M,v,U){const b=E.value,P=M+"_"+v;if(U[P]===void 0)return typeof b=="number"||typeof b=="boolean"?U[P]=b:U[P]=b.clone(),!0;{const L=U[P];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return U[P]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(E){const M=E.uniforms;let v=0;const U=16;for(let P=0,L=M.length;P<L;P++){const S=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,D=S.length;y<D;y++){const I=S[y],k=Array.isArray(I.value)?I.value:[I.value];for(let X=0,se=k.length;X<se;X++){const j=k[X],ue=g(j),K=v%U,A=K%ue.boundary,Z=K+A;v+=A,Z!==0&&U-Z<ue.storage&&(v+=U-Z),I.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=ue.storage}}}const b=v%U;return b>0&&(v+=U-b),E.__size=v,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Em{constructor(e={}){const{canvas:t=$h(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=kn,this.toneMappingExposure=1;const v=this;let U=!1,b=0,P=0,L=null,S=-1,y=null;const D=new gt,I=new gt;let k=null;const X=new qe(0);let se=0,j=t.width,ue=t.height,K=1,A=null,Z=null;const pe=new gt(0,0,j,ue),Ie=new gt(0,0,j,ue);let Oe=!1;const Q=new ja;let de=!1,be=!1;const ge=new nt,Re=new nt,Ue=new N,Xe=new gt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Mt(){return L===null?K:1}let B=i;function bt(x,C){return t.getContext(x,C)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",\`three.js r\${Rr}\`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Te,!1),B===null){const C="webgl2";if(B=bt(C,x),B===null)throw bt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,$e,ke,at,Be,R,T,W,re,oe,ie,De,_e,Ee,Qe,le,Ae,Fe,We,Pe,Ze,Ge,rt,F;function ve(){je=new Cf(B),je.init(),Ge=new fm(B,je),$e=new Ef(B,je,e,Ge),ke=new hm(B,je),$e.reverseDepthBuffer&&p&&ke.buffers.depth.setReversed(!0),at=new Lf(B),Be=new Kp,R=new dm(B,je,ke,Be,$e,Ge,at),T=new wf(v),W=new Rf(v),re=new vu(B),rt=new yf(B,re),oe=new Pf(B,re,at,rt),ie=new Uf(B,oe,re,at),We=new If(B,$e,R),le=new Tf(Be),De=new jp(v,T,W,je,$e,rt,le),_e=new ym(v,Be),Ee=new Jp,Qe=new sm(je),Fe=new Mf(v,T,W,ke,ie,f,l),Ae=new lm(v,ie,$e),F=new Sm(B,at,$e,ke),Pe=new Sf(B,je,at),Ze=new Df(B,je,at),at.programs=De.programs,v.capabilities=$e,v.extensions=je,v.properties=Be,v.renderLists=Ee,v.shadowMap=Ae,v.state=ke,v.info=at}ve();const $=new xm(v,B);this.xr=$,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(x){x!==void 0&&(K=x,this.setSize(j,ue,!1))},this.getSize=function(x){return x.set(j,ue)},this.setSize=function(x,C,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=x,ue=C,t.width=Math.floor(x*K),t.height=Math.floor(C*K),z===!0&&(t.style.width=x+"px",t.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(j*K,ue*K).floor()},this.setDrawingBufferSize=function(x,C,z){j=x,ue=C,K=z,t.width=Math.floor(x*z),t.height=Math.floor(C*z),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(pe)},this.setViewport=function(x,C,z,G){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,C,z,G),ke.viewport(D.copy(pe).multiplyScalar(K).round())},this.getScissor=function(x){return x.copy(Ie)},this.setScissor=function(x,C,z,G){x.isVector4?Ie.set(x.x,x.y,x.z,x.w):Ie.set(x,C,z,G),ke.scissor(I.copy(Ie).multiplyScalar(K).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(x){ke.setScissorTest(Oe=x)},this.setOpaqueSort=function(x){A=x},this.setTransparentSort=function(x){Z=x},this.getClearColor=function(x){return x.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(x=!0,C=!0,z=!0){let G=0;if(x){let O=!1;if(L!==null){const ce=L.texture.format;O=ce===Qr||ce===Jr||ce===Zr}if(O){const ce=L.texture.type,me=ce===yn||ce===si||ce===ts||ce===ri||ce===qr||ce===jr,Se=Fe.getClearColor(),Me=Fe.getClearAlpha(),ze=Se.r,He=Se.g,Ce=Se.b;me?(_[0]=ze,_[1]=He,_[2]=Ce,_[3]=Me,B.clearBufferuiv(B.COLOR,0,_)):(g[0]=ze,g[1]=He,g[2]=Ce,g[3]=Me,B.clearBufferiv(B.COLOR,0,g))}else G|=B.COLOR_BUFFER_BIT}C&&(G|=B.DEPTH_BUFFER_BIT),z&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ee.dispose(),Qe.dispose(),Be.dispose(),T.dispose(),W.dispose(),ie.dispose(),rt.dispose(),F.dispose(),De.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ms),$.removeEventListener("sessionend",Bo),w.stop()};function ae(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const x=at.autoReset,C=Ae.enabled,z=Ae.autoUpdate,G=Ae.needsUpdate,O=Ae.type;ve(),at.autoReset=x,Ae.enabled=C,Ae.autoUpdate=z,Ae.needsUpdate=G,Ae.type=O}function Te(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ye(x){const C=x.target;C.removeEventListener("dispose",Ye),Et(C)}function Et(x){Nt(x),Be.remove(x)}function Nt(x){const C=Be.get(x).programs;C!==void 0&&(C.forEach(function(z){De.releaseProgram(z)}),x.isShaderMaterial&&De.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,z,G,O,ce){C===null&&(C=mt);const me=O.isMesh&&O.matrixWorld.determinant()<0,Se=ne(x,C,z,G,O);ke.setMaterial(G,me);let Me=z.index,ze=1;if(G.wireframe===!0){if(Me=oe.getWireframeAttribute(z),Me===void 0)return;ze=2}const He=z.drawRange,Ce=z.attributes.position;let tt=He.start*ze,ct=(He.start+He.count)*ze;ce!==null&&(tt=Math.max(tt,ce.start*ze),ct=Math.min(ct,(ce.start+ce.count)*ze)),Me!==null?(tt=Math.max(tt,0),ct=Math.min(ct,Me.count)):Ce!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,Ce.count));const ut=ct-tt;if(ut<0||ut===1/0)return;rt.setup(O,G,Se,z,Me);let Ot,it=Pe;if(Me!==null&&(Ot=re.get(Me),it=Ze,it.setIndex(Ot)),O.isMesh)G.wireframe===!0?(ke.setLineWidth(G.wireframeLinewidth*Mt()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(O.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),ke.setLineWidth(Ne*Mt()),O.isLineSegments?it.setMode(B.LINES):O.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else O.isPoints?it.setMode(B.POINTS):O.isSprite&&it.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,Vt=O._multiDrawCounts,dt=O._multiDrawCount,xn=Me?re.get(Me).bytesPerElement:1,Qi=Be.get(G).currentProgram.getUniforms();for(let rn=0;rn<dt;rn++)Qi.setValue(B,"_gl_DrawID",rn),it.render(Ne[rn]/xn,Vt[rn])}else if(O.isInstancedMesh)it.renderInstances(tt,ut,O.count);else if(z.isInstancedBufferGeometry){const Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vt=Math.min(z.instanceCount,Ne);it.renderInstances(tt,ut,Vt)}else it.render(tt,ut)};function ot(x,C,z){x.transparent===!0&&x.side===an&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,he(x,C,z),x.side=Bn,x.needsUpdate=!0,he(x,C,z),x.side=an):he(x,C,z)}this.compile=function(x,C,z=null){z===null&&(z=x),u=Qe.get(z),u.init(C),M.push(u),z.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),x!==z&&x.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const G=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const Se=ce[me];ot(Se,z,O),G.add(Se)}else ot(ce,z,O),G.add(ce)}),M.pop(),u=null,G},this.compileAsync=function(x,C,z=null){const G=this.compile(x,C,z);return new Promise(O=>{function ce(){if(G.forEach(function(me){Be.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){O(x);return}setTimeout(ce,10)}je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Jt=null;function un(x){Jt&&Jt(x)}function Ms(){w.stop()}function Bo(){w.start()}const w=new Gl;w.setAnimationLoop(un),typeof self<"u"&&w.setContext(self),this.setAnimationLoop=function(x){Jt=x,$.setAnimationLoop(x),x===null?w.stop():w.start()},$.addEventListener("sessionstart",Ms),$.addEventListener("sessionend",Bo),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(C),C=$.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,C,L),u=Qe.get(x,M.length),u.init(C),M.push(u),Re.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Q.setFromProjectionMatrix(Re),be=this.localClippingEnabled,de=le.init(this.clippingPlanes,be),m=Ee.get(x,E.length),m.init(),E.push(m),$.enabled===!0&&$.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&H(ce,C,-1/0,v.sortObjects)}H(x,C,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(A,Z),Ke=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ke&&Fe.addToRenderList(m,x),this.info.render.frame++,de===!0&&le.beginShadows();const z=u.state.shadowsArray;Ae.render(z,x,C),de===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(u.setupLights(),C.isArrayCamera){const ce=C.cameras;if(O.length>0)for(let me=0,Se=ce.length;me<Se;me++){const Me=ce[me];J(G,O,x,Me)}Ke&&Fe.render(x);for(let me=0,Se=ce.length;me<Se;me++){const Me=ce[me];te(m,x,Me,Me.viewport)}}else O.length>0&&J(G,O,x,C),Ke&&Fe.render(x),te(m,x,C);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(v,x,C),rt.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(u=M[M.length-1],de===!0&&le.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function H(x,C,z,G){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Q.intersectsSprite(x)){G&&Xe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);const me=ie.update(x),Se=x.material;Se.visible&&m.push(x,me,Se,z,Xe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Q.intersectsObject(x))){const me=ie.update(x),Se=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Xe.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Xe.copy(me.boundingSphere.center)),Xe.applyMatrix4(x.matrixWorld).applyMatrix4(Re)),Array.isArray(Se)){const Me=me.groups;for(let ze=0,He=Me.length;ze<He;ze++){const Ce=Me[ze],tt=Se[Ce.materialIndex];tt&&tt.visible&&m.push(x,me,tt,z,Xe.z,Ce)}}else Se.visible&&m.push(x,me,Se,z,Xe.z,null)}}const ce=x.children;for(let me=0,Se=ce.length;me<Se;me++)H(ce[me],C,z,G)}function te(x,C,z,G){const O=x.opaque,ce=x.transmissive,me=x.transparent;u.setupLightsView(z),de===!0&&le.setGlobalState(v.clippingPlanes,z),G&&ke.viewport(D.copy(G)),O.length>0&&q(O,C,z),ce.length>0&&q(ce,C,z),me.length>0&&q(me,C,z),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function J(x,C,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Ft(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?$t:yn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ce=u.state.transmissionRenderTarget[G.id],me=G.viewport||D;ce.setSize(me.z,me.w);const Se=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(X),se=v.getClearAlpha(),se<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&Fe.render(z);const Me=v.toneMapping;v.toneMapping=kn;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),de===!0&&le.setGlobalState(v.clippingPlanes,G),q(x,z,G),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,tt=C.length;Ce<tt;Ce++){const ct=C[Ce],ut=ct.object,Ot=ct.geometry,it=ct.material,Ne=ct.group;if(it.side===an&&ut.layers.test(G.layers)){const Vt=it.side;it.side=Wt,it.needsUpdate=!0,fe(ut,z,G,Ot,it,Ne),it.side=Vt,it.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}v.setRenderTarget(Se),v.setClearColor(X,se),ze!==void 0&&(G.viewport=ze),v.toneMapping=Me}function q(x,C,z){const G=C.isScene===!0?C.overrideMaterial:null;for(let O=0,ce=x.length;O<ce;O++){const me=x[O],Se=me.object,Me=me.geometry,ze=G===null?me.material:G,He=me.group;Se.layers.test(z.layers)&&fe(Se,C,z,Me,ze,He)}}function fe(x,C,z,G,O,ce){x.onBeforeRender(v,C,z,G,O,ce),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(v,C,z,G,x,ce),O.transparent===!0&&O.side===an&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,v.renderBufferDirect(z,C,G,O,x,ce),O.side=Bn,O.needsUpdate=!0,v.renderBufferDirect(z,C,G,O,x,ce),O.side=an):v.renderBufferDirect(z,C,G,O,x,ce),x.onAfterRender(v,C,z,G,O,ce)}function he(x,C,z){C.isScene!==!0&&(C=mt);const G=Be.get(x),O=u.state.lights,ce=u.state.shadowsArray,me=O.state.version,Se=De.getParameters(x,O.state,ce,C,z),Me=De.getProgramCacheKey(Se);let ze=G.programs;G.environment=x.isMeshStandardMaterial?C.environment:null,G.fog=C.fog,G.envMap=(x.isMeshStandardMaterial?W:T).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,ze===void 0&&(x.addEventListener("dispose",Ye),ze=new Map,G.programs=ze);let He=ze.get(Me);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===me)return Y(x,Se),He}else Se.uniforms=De.getUniforms(x),x.onBeforeCompile(Se,v),He=De.acquireProgram(Se,Me),ze.set(Me,He),G.uniforms=Se.uniforms;const Ce=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=le.uniform),Y(x,Se),G.needsLights=xe(x),G.lightsStateVersion=me,G.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function V(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=nr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function Y(x,C){const z=Be.get(x);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function ne(x,C,z,G,O){C.isScene!==!0&&(C=mt),R.resetTextureUnits();const ce=C.fog,me=G.isMeshStandardMaterial?C.environment:null,Se=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,Me=(G.isMeshStandardMaterial?W:T).get(G.envMap||me),ze=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!z.morphAttributes.position,tt=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let ut=kn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ut=v.toneMapping);const Ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=Ot!==void 0?Ot.length:0,Ne=Be.get(G),Vt=u.state.lights;if(de===!0&&(be===!0||x!==y)){const dn=x===y&&G.id===S;le.setState(G,x,dn)}let dt=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Vt.state.version||Ne.outputColorSpace!==Se||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Me||G.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==le.numPlanes||Ne.numIntersection!==le.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==He||Ne.morphTargets!==Ce||Ne.morphNormals!==tt||Ne.morphColors!==ct||Ne.toneMapping!==ut||Ne.morphTargetsCount!==it)&&(dt=!0):(dt=!0,Ne.__version=G.version);let xn=Ne.currentProgram;dt===!0&&(xn=he(G,C,O));let Qi=!1,rn=!1,ys=!1;const yt=xn.getUniforms(),Rn=Ne.uniforms;if(ke.useProgram(xn.program)&&(Qi=!0,rn=!0,ys=!0),G.id!==S&&(S=G.id,rn=!0),Qi||y!==x){ke.buffers.depth.getReversed()?(ge.copy(x.projectionMatrix),qh(ge),jh(ge),yt.setValue(B,"projectionMatrix",ge)):yt.setValue(B,"projectionMatrix",x.projectionMatrix),yt.setValue(B,"viewMatrix",x.matrixWorldInverse);const ei=yt.map.cameraPosition;ei!==void 0&&ei.setValue(B,Ue.setFromMatrixPosition(x.matrixWorld)),$e.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(B,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,rn=!0,ys=!0)}if(O.isSkinnedMesh){yt.setOptional(B,O,"bindMatrix"),yt.setOptional(B,O,"bindMatrixInverse");const dn=O.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),yt.setValue(B,"boneTexture",dn.boneTexture,R))}O.isBatchedMesh&&(yt.setOptional(B,O,"batchingTexture"),yt.setValue(B,"batchingTexture",O._matricesTexture,R),yt.setOptional(B,O,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",O._indirectTexture,R),yt.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",O._colorsTexture,R));const Ss=z.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&We.update(O,z,xn),(rn||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,yt.setValue(B,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Rn.envMap.value=Me,Rn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&C.environment!==null&&(Rn.envMapIntensity.value=C.environmentIntensity),rn&&(yt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&ee(Rn,ys),ce&&G.fog===!0&&_e.refreshFogUniforms(Rn,ce),_e.refreshMaterialUniforms(Rn,G,K,ue,u.state.transmissionRenderTarget[x.id]),nr.upload(B,V(Ne),Rn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nr.upload(B,V(Ne),Rn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(B,"center",O.center),yt.setValue(B,"modelViewMatrix",O.modelViewMatrix),yt.setValue(B,"normalMatrix",O.normalMatrix),yt.setValue(B,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let ei=0,ti=dn.length;ei<ti;ei++){const ph=dn[ei];F.update(ph,xn),F.bind(ph,xn)}}return xn}function ee(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function xe(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,C,z){Be.get(x.texture).__webglTexture=C,Be.get(x.depthTexture).__webglTexture=z;const G=Be.get(x);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const z=Be.get(x);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,z=0){L=x,b=C,P=z;let G=!0,O=null,ce=!1,me=!1;if(x){const Me=Be.get(x);if(Me.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(x);else if(Me.__hasExternalTextures)R.rebindTextures(x,Be.get(x.texture).__webglTexture,Be.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ce=x.depthTexture;if(Me.__boundDepthTexture!==Ce){if(Ce!==null&&Be.has(Ce)&&(x.width!==Ce.image.width||x.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(x)}}const ze=x.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const He=Be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(He[C])?O=He[C][z]:O=He[C],ce=!0):x.samples>0&&R.useMultisampledRTT(x)===!1?O=Be.get(x).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[z]:O=He,D.copy(x.viewport),I.copy(x.scissor),k=x.scissorTest}else D.copy(pe).multiplyScalar(K).floor(),I.copy(Ie).multiplyScalar(K).floor(),k=Oe;if(ke.bindFramebuffer(B.FRAMEBUFFER,O)&&G&&ke.drawBuffers(x,O),ke.viewport(D),ke.scissor(I),ke.setScissorTest(k),ce){const Me=Be.get(x.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+C,Me.__webglTexture,z)}else if(me){const Me=Be.get(x.texture),ze=C||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,ze)}S=-1},this.readRenderTargetPixels=function(x,C,z,G,O,ce,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){ke.bindFramebuffer(B.FRAMEBUFFER,Se);try{const Me=x.texture,ze=Me.format,He=Me.type;if(!$e.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-G&&z>=0&&z<=x.height-O&&B.readPixels(C,z,G,O,Ge.convert(ze),Ge.convert(He),ce)}finally{const Me=L!==null?Be.get(L).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(x,C,z,G,O,ce,me){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){const Me=x.texture,ze=Me.format,He=Me.type;if(!$e.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=x.width-G&&z>=0&&z<=x.height-O){ke.bindFramebuffer(B.FRAMEBUFFER,Se);const Ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.bufferData(B.PIXEL_PACK_BUFFER,ce.byteLength,B.STREAM_READ),B.readPixels(C,z,G,O,Ge.convert(ze),Ge.convert(He),0);const tt=L!==null?Be.get(L).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,tt);const ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Yh(B,ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ce),B.deleteBuffer(Ce),B.deleteSync(ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,C=null,z=0){x.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,x=arguments[1]);const G=Math.pow(2,-z),O=Math.floor(x.image.width*G),ce=Math.floor(x.image.height*G),me=C!==null?C.x:0,Se=C!==null?C.y:0;R.setTexture2D(x,0),B.copyTexSubImage2D(B.TEXTURE_2D,z,0,0,me,Se,O,ce),ke.unbindTexture()},this.copyTextureToTexture=function(x,C,z=null,G=null,O=0){x.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,x=arguments[1],C=arguments[2],O=arguments[3]||0,z=null);let ce,me,Se,Me,ze,He,Ce,tt,ct;const ut=x.isCompressedTexture?x.mipmaps[O]:x.image;z!==null?(ce=z.max.x-z.min.x,me=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,ze=z.min.y,He=z.isBox3?z.min.z:0):(ce=ut.width,me=ut.height,Se=ut.depth||1,Me=0,ze=0,He=0),G!==null?(Ce=G.x,tt=G.y,ct=G.z):(Ce=0,tt=0,ct=0);const Ot=Ge.convert(C.format),it=Ge.convert(C.type);let Ne;C.isData3DTexture?(R.setTexture3D(C,0),Ne=B.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(R.setTexture2DArray(C,0),Ne=B.TEXTURE_2D_ARRAY):(R.setTexture2D(C,0),Ne=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,C.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,C.unpackAlignment);const Vt=B.getParameter(B.UNPACK_ROW_LENGTH),dt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xn=B.getParameter(B.UNPACK_SKIP_PIXELS),Qi=B.getParameter(B.UNPACK_SKIP_ROWS),rn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Me),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He);const ys=x.isDataArrayTexture||x.isData3DTexture,yt=C.isDataArrayTexture||C.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Rn=Be.get(x),Ss=Be.get(C),dn=Be.get(Rn.__renderTarget),ei=Be.get(Ss.__renderTarget);ke.bindFramebuffer(B.READ_FRAMEBUFFER,dn.__webglFramebuffer),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<Se;ti++)ys&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(x).__webglTexture,O,He+ti),x.isDepthTexture?(yt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(C).__webglTexture,O,ct+ti),B.blitFramebuffer(Me,ze,ce,me,Ce,tt,ce,me,B.DEPTH_BUFFER_BIT,B.NEAREST)):yt?B.copyTexSubImage3D(Ne,O,Ce,tt,ct+ti,Me,ze,ce,me):B.copyTexSubImage2D(Ne,O,Ce,tt,ct+ti,Me,ze,ce,me);ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?x.isDataTexture||x.isData3DTexture?B.texSubImage3D(Ne,O,Ce,tt,ct,ce,me,Se,Ot,it,ut.data):C.isCompressedArrayTexture?B.compressedTexSubImage3D(Ne,O,Ce,tt,ct,ce,me,Se,Ot,ut.data):B.texSubImage3D(Ne,O,Ce,tt,ct,ce,me,Se,Ot,it,ut):x.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,Ce,tt,ce,me,Ot,it,ut.data):x.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,Ce,tt,ut.width,ut.height,Ot,ut.data):B.texSubImage2D(B.TEXTURE_2D,O,Ce,tt,ce,me,Ot,it,ut);B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,rn),O===0&&C.generateMipmaps&&B.generateMipmap(Ne),ke.unbindTexture()},this.copyTextureToTexture3D=function(x,C,z=null,G=null,O=0){return x.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,x=arguments[2],C=arguments[3],O=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,C,z,G,O)},this.initRenderTarget=function(x){Be.get(x).__webglFramebuffer===void 0&&R.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?R.setTextureCube(x,0):x.isData3DTexture?R.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?R.setTexture2DArray(x,0):R.setTexture2D(x,0),ke.unbindTexture()},this.resetState=function(){b=0,P=0,L=null,ke.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class lo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new lo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _c extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class co extends kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,h=Xt,d,p){super(null,a,o,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new nt,xc=new nt,sr=[],Mc=new li,Tm=new nt,fs=new xt,ps=new Ui;class wm extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Tm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yi),Mc.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Mc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yi),ps.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(i),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),xc.multiplyMatrices(i,Yi),fs.matrixWorld=xc,fs.raycast(e,sr);for(let a=0,o=sr.length;a<o;a++){const l=sr[a];l.instanceId=r,l.object=this,t.push(l)}sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(s*this.count),s,this.count,Kr,Sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class rr extends jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ar=new N,or=new N,yc=new nt,ms=new ks,lr=new Ui,ho=new N,Sc=new N;class cr extends At{constructor(e=new Ht,t=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ar.fromBufferAttribute(t,s-1),or.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ar.distanceTo(or);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,e.ray.intersectsSphere(lr)===!1)return;yc.copy(s).invert(),ms.copy(e.ray).applyMatrix4(yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const u=h.getX(g),E=h.getX(g+1),M=hr(this,e,ms,l,u,E);M&&t.push(M)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),u=hr(this,e,ms,l,g,m);u&&t.push(u)}}else{const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const u=hr(this,e,ms,l,g,g+1);u&&t.push(u)}if(this.isLineLoop){const g=hr(this,e,ms,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hr(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(ar.fromBufferAttribute(a,s),or.fromBufferAttribute(a,r),t.distanceSqToSegment(ar,or,ho,Sc)>i)return;ho.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ho);if(!(l<e.near||l>e.far))return{distance:l,point:Sc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Ec=new N,Tc=new N;class bm extends cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ec.fromBufferAttribute(t,s),Tc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ec.distanceTo(Tc);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rm extends kt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],p=[],f=[];let _=0;const g=[],m=i/2;let u=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(f,2));function E(){const v=new N,U=new N;let b=0;const P=(t-e)/i;for(let L=0;L<=r;L++){const S=[],y=L/r,D=y*(t-e)+e;for(let I=0;I<=s;I++){const k=I/s,X=k*l+o,se=Math.sin(X),j=Math.cos(X);U.x=D*se,U.y=-y*i+m,U.z=D*j,d.push(U.x,U.y,U.z),v.set(se,P,j).normalize(),p.push(v.x,v.y,v.z),f.push(k,1-y),S.push(_++)}g.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const y=g[S][L],D=g[S+1][L],I=g[S+1][L+1],k=g[S][L+1];(e>0||S!==0)&&(h.push(y,D,k),b+=3),(t>0||S!==r-1)&&(h.push(D,I,k),b+=3)}c.addGroup(u,b,0),u+=b}function M(v){const U=_,b=new Le,P=new N;let L=0;const S=v===!0?e:t,y=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),_++;const D=_;for(let I=0;I<=s;I++){const X=I/s*l+o,se=Math.cos(X),j=Math.sin(X);P.x=S*j,P.y=m*y,P.z=S*se,d.push(P.x,P.y,P.z),p.push(0,y,0),b.x=se*.5+.5,b.y=j*.5*y+.5,f.push(b.x,b.y),_++}for(let I=0;I<s;I++){const k=U+I,X=D+I;v===!0?h.push(X,X+1,k):h.push(X+1,X,k),L+=3}c.addGroup(u,L,v===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uo extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new N,v=new N,U=new N;for(let b=0;b<t.length;b+=3)f(t[b+0],M),f(t[b+1],v),f(t[b+2],U),l(M,v,U,E)}function l(E,M,v,U){const b=U+1,P=[];for(let L=0;L<=b;L++){P[L]=[];const S=E.clone().lerp(v,L/b),y=M.clone().lerp(v,L/b),D=b-L;for(let I=0;I<=D;I++)I===0&&L===b?P[L][I]=S:P[L][I]=S.clone().lerp(y,I/D)}for(let L=0;L<b;L++)for(let S=0;S<2*(b-L)-1;S++){const y=Math.floor(S/2);S%2===0?(p(P[L][y+1]),p(P[L+1][y]),p(P[L][y])):(p(P[L][y+1]),p(P[L+1][y+1]),p(P[L+1][y]))}}function c(E){const M=new N;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(E),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const E=new N;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const v=m(E)/2/Math.PI+.5,U=u(E)/Math.PI+.5;a.push(v,1-U)}_(),d()}function d(){for(let E=0;E<a.length;E+=6){const M=a[E+0],v=a[E+2],U=a[E+4],b=Math.max(M,v,U),P=Math.min(M,v,U);b>.9&&P<.1&&(M<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),U<.2&&(a[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function f(E,M){const v=E*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function _(){const E=new N,M=new N,v=new N,U=new N,b=new Le,P=new Le,L=new Le;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),b.set(a[y+0],a[y+1]),P.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),U.copy(E).add(M).add(v).divideScalar(3);const D=m(U);g(b,y+0,E,D),g(P,y+2,M,D),g(L,y+4,v,D)}}function g(E,M,v,U){U<0&&E.x===1&&(a[M]=E.x-1),v.x===0&&v.z===0&&(a[M]=U/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.vertices,e.indices,e.radius,e.details)}}class fo extends uo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fo(e.radius,e.detail)}}class po extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new N,p=new N,f=[],_=[],g=[],m=[];for(let u=0;u<=i;u++){const E=[],M=u/i;let v=0;u===0&&a===0?v=.5/t:u===i&&l===Math.PI&&(v=-.5/t);for(let U=0;U<=t;U++){const b=U/t;d.x=-e*Math.cos(s+b*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+b*r)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(b+v,1-M),E.push(c++)}h.push(E)}for(let u=0;u<i;u++)for(let E=0;E<t;E++){const M=h[u][E+1],v=h[u][E],U=h[u+1][E],b=h[u+1][E+1];(u!==0||a>0)&&f.push(M,v,b),(u!==i-1||l<Math.PI)&&f.push(v,U,b)}this.setIndex(f),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mo extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new N,d=new N,p=new N;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const g=_/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,u=(s+1)*(f-1)+_,E=(s+1)*f+_;a.push(g,m,E),a.push(m,u,E)}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cm extends wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class go extends jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pm extends jn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Dm extends jn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lm extends rr{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class _o extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Im extends _o{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vo=new nt,wc=new N,bc=new N;class Ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rc=new nt,gs=new N,xo=new N;class Um extends Ac{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),i.position.copy(gs),xo.copy(i.position),xo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xo),i.updateMatrixWorld(),s.makeTranslation(-gs.x,-gs.y,-gs.z),Rc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc)}}class Nm extends _o{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Om extends Ac{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends _o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Om}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cc(){return performance.now()}const Pc=new nt;class Bm{constructor(e,t,i=0,s=1/0){this.ray=new ks(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(e,t=!0,i=[]){return Mo(e,this,i,t),i.sort(Dc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mo(e[s],this,i,t);return i.sort(Dc),i}}function Dc(n,e){return n.distance-e.distance}function Mo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Mo(r[a],e,t,!0)}}class Lc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ic=new N;let dr,yo;class km extends At{constructor(e=new N(0,0,1),t=new N(0,0,0),i=1,s=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",dr===void 0&&(dr=new Ht,dr.setAttribute("position",new St([0,0,0,0,1,0],3)),yo=new ur(0,.5,1,5,1),yo.translate(0,-.5,0)),this.position.copy(t),this.line=new cr(dr,new rr({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new xt(yo,new ls({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ic.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ic,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Gm extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);const Uc={type:"change"},So={type:"start"},Nc={type:"end"},fr=new ks,Oc=new Zn,Hm=Math.cos(70*Xh.DEG2RAD),It=new N,Kt=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eo=1e-6;class Vm extends Gm{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Vn,this._lastTargetPosition=new N,this._quat=new Vn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lc,this._sphericalDelta=new Lc,this._scale=1,this._panOffset=new N,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new N,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xm.bind(this),this._onPointerDown=Wm.bind(this),this._onPointerUp=$m.bind(this),this._onContextMenu=Qm.bind(this),this._onMouseWheel=jm.bind(this),this._onKeyDown=Km.bind(this),this._onTouchStart=Zm.bind(this),this._onTouchMove=Jm.bind(this),this._onMouseDown=Ym.bind(this),this._onMouseMove=qm.bind(this),this._interceptControlDown=eg.bind(this),this._interceptControlUp=tg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uc),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),s<-Math.PI?s+=Kt:s>Math.PI&&(s-=Kt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=It.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fr.origin.copy(this.object.position),fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fr.direction))<Hm?this.object.lookAt(this.target):(Oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),fr.intersectPlane(Oc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eo||this._lastTargetPosition.distanceToSquared(this.target)>Eo?(this.dispatchEvent(Uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Wm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Xm(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $m(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nc),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ym(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case Mi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case Mi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(So)}function qm(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jm(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(So),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nc))}function Km(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Zm(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(So)}function Jm(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function Qm(n){this.enabled!==!1&&n.preventDefault()}function eg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ng extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Le(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const qi=new N,Fc=new nt,zc=new nt,Bc=new N,kc=new N;class ig{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(_,g){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Fc.copy(g.matrixWorldInverse),zc.multiplyMatrices(g.projectionMatrix,Fc),h(_,_,g),f(_)},this.setSize=function(_,g){i=_,s=g,r=i/2,a=s/2,l.style.width=_+"px",l.style.height=g+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let g=0,m=_.children.length;g<m;g++)c(_.children[g])}function h(_,g,m){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){qi.setFromMatrixPosition(_.matrixWorld),qi.applyMatrix4(zc);const u=qi.z>=-1&&qi.z<=1&&_.layers.test(m.layers)===!0,E=_.element;E.style.display=u===!0?"":"none",u===!0&&(_.onBeforeRender(t,g,m),E.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(qi.x*r+r)+"px,"+(-qi.y*a+a)+"px)",E.parentNode!==l&&l.appendChild(E),_.onAfterRender(t,g,m));const M={distanceToCameraSquared:d(m,_)};o.objects.set(_,M)}for(let u=0,E=_.children.length;u<E;u++)h(_.children[u],g,m)}function d(_,g){return Bc.setFromMatrixPosition(_.matrixWorld),kc.setFromMatrixPosition(g.matrixWorld),Bc.distanceToSquared(kc)}function p(_){const g=[];return _.traverseVisible(function(m){m.isCSS2DObject&&g.push(m)}),g}function f(_){const g=p(_).sort(function(u,E){if(u.renderOrder!==E.renderOrder)return E.renderOrder-u.renderOrder;const M=o.objects.get(u).distanceToCameraSquared,v=o.objects.get(E).distanceToCameraSquared;return M-v}),m=g.length;for(let u=0,E=g.length;u<E;u++)g[u].element.style.zIndex=m-u}}}class sg extends _c{constructor(){super();const e=new di;e.deleteAttribute("uv");const t=new go({side:Wt}),i=new go,s=new Nm(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new xt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new xt(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new xt(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new xt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new xt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new xt(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new xt(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const p=new xt(e,ji(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const f=new xt(e,ji(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const _=new xt(e,ji(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new xt(e,ji(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const m=new xt(e,ji(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const u=new xt(e,ji(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ji(n){const e=new ls;return e.color.setScalar(n),e}function rg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ht;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const d=[];for(let p=0;p<n.length;++p){const f=n[p].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+h);h+=n[p].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Gc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][p]);const _=Gc(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function Gc(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new ln(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let p=0,f=h.count;p<f;p++)for(let _=0;_<t;_++){const g=h.getComponent(p,_);o.setComponent(p+d,_,g)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const _s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:\`

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


		}\`};class vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ag=new Ka(-1,1,1,-1,0,1);class og extends Ht{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}}const lg=new og;class pr{constructor(e){this._mesh=new xt(lg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ag)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cg extends vi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fn.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new pr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hc extends vi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hg extends vi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ug{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cg(_s),this.copyPass.material.blending=Pt,this.clock=new zm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Hc!==void 0&&(a instanceof Hc?i=!0:a instanceof hg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dg extends vi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const mr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:\`

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
		}\`},gr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:\`
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

		}\`},To={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:\`
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
		}\`};function fg(n=5){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=pg(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){const o=t[a],l=2*Math.PI*o/i,c=new N(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new co(s,e,e);return r.wrapS=Gn,r.wrapT=Gn,r.needsUpdate=!0,r}function pg(n){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}const _r={defines:{SAMPLES:16,SAMPLE_VECTORS:Vc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Le},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:\`

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
		}\`};function Vc(n,e,t){const i=mg(n,e,t);let s="vec3[SAMPLES](";for(let r=0;r<n;r++){const a=i[r];s+=\`vec3(\${a.x}, \${a.y}, \${a.z})\${r<n-1?",":")"}\`}return s}function mg(n,e,t){const i=[];for(let s=0;s<n;s++){const r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new N(Math.cos(r),Math.sin(r),a))}return i}class gg{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,p=l-d,f=c-d,_=e-p,g=t-f;let m,u;_>g?(m=1,u=0):(m=0,u=1);const E=_-m+h,M=g-u+h,v=_-1+2*h,U=g-1+2*h,b=l&255,P=c&255,L=this.perm[b+this.perm[P]]%12,S=this.perm[b+m+this.perm[P+u]]%12,y=this.perm[b+1+this.perm[P+1]]%12;let D=.5-_*_-g*g;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[L],_,g));let I=.5-E*E-M*M;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[S],E,M));let k=.5-v*v-U*U;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[y],v,U)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o;const c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),p=Math.floor(i+c),f=1/6,_=(h+d+p)*f,g=h-_,m=d-_,u=p-_,E=e-g,M=t-m,v=i-u;let U,b,P,L,S,y;E>=M?M>=v?(U=1,b=0,P=0,L=1,S=1,y=0):E>=v?(U=1,b=0,P=0,L=1,S=0,y=1):(U=0,b=0,P=1,L=1,S=0,y=1):M<v?(U=0,b=0,P=1,L=0,S=1,y=1):E<v?(U=0,b=1,P=0,L=0,S=1,y=1):(U=0,b=1,P=0,L=1,S=1,y=0);const D=E-U+f,I=M-b+f,k=v-P+f,X=E-L+2*f,se=M-S+2*f,j=v-y+2*f,ue=E-1+3*f,K=M-1+3*f,A=v-1+3*f,Z=h&255,pe=d&255,Ie=p&255,Oe=this.perm[Z+this.perm[pe+this.perm[Ie]]]%12,Q=this.perm[Z+U+this.perm[pe+b+this.perm[Ie+P]]]%12,de=this.perm[Z+L+this.perm[pe+S+this.perm[Ie+y]]]%12,be=this.perm[Z+1+this.perm[pe+1+this.perm[Ie+1]]]%12;let ge=.6-E*E-M*M-v*v;ge<0?s=0:(ge*=ge,s=ge*ge*this.dot3(this.grad3[Oe],E,M,v));let Re=.6-D*D-I*I-k*k;Re<0?r=0:(Re*=Re,r=Re*Re*this.dot3(this.grad3[Q],D,I,k));let Ue=.6-X*X-se*se-j*j;Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this.dot3(this.grad3[de],X,se,j));let Xe=.6-ue*ue-K*K-A*A;return Xe<0?o=0:(Xe*=Xe,o=Xe*Xe*this.dot3(this.grad3[be],ue,K,A)),32*(s+r+a+o)}noise4d(e,t,i,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,p,f,_;const g=(e+t+i+s)*l,m=Math.floor(e+g),u=Math.floor(t+g),E=Math.floor(i+g),M=Math.floor(s+g),v=(m+u+E+M)*c,U=m-v,b=u-v,P=E-v,L=M-v,S=e-U,y=t-b,D=i-P,I=s-L,k=S>y?32:0,X=S>D?16:0,se=y>D?8:0,j=S>I?4:0,ue=y>I?2:0,K=D>I?1:0,A=k+X+se+j+ue+K,Z=a[A][0]>=3?1:0,pe=a[A][1]>=3?1:0,Ie=a[A][2]>=3?1:0,Oe=a[A][3]>=3?1:0,Q=a[A][0]>=2?1:0,de=a[A][1]>=2?1:0,be=a[A][2]>=2?1:0,ge=a[A][3]>=2?1:0,Re=a[A][0]>=1?1:0,Ue=a[A][1]>=1?1:0,Xe=a[A][2]>=1?1:0,mt=a[A][3]>=1?1:0,Ke=S-Z+c,Mt=y-pe+c,B=D-Ie+c,bt=I-Oe+c,je=S-Q+2*c,$e=y-de+2*c,ke=D-be+2*c,at=I-ge+2*c,Be=S-Re+3*c,R=y-Ue+3*c,T=D-Xe+3*c,W=I-mt+3*c,re=S-1+4*c,oe=y-1+4*c,ie=D-1+4*c,De=I-1+4*c,_e=m&255,Ee=u&255,Qe=E&255,le=M&255,Ae=o[_e+o[Ee+o[Qe+o[le]]]]%32,Fe=o[_e+Z+o[Ee+pe+o[Qe+Ie+o[le+Oe]]]]%32,We=o[_e+Q+o[Ee+de+o[Qe+be+o[le+ge]]]]%32,Pe=o[_e+Re+o[Ee+Ue+o[Qe+Xe+o[le+mt]]]]%32,Ze=o[_e+1+o[Ee+1+o[Qe+1+o[le+1]]]]%32;let Ge=.6-S*S-y*y-D*D-I*I;Ge<0?h=0:(Ge*=Ge,h=Ge*Ge*this.dot4(r[Ae],S,y,D,I));let rt=.6-Ke*Ke-Mt*Mt-B*B-bt*bt;rt<0?d=0:(rt*=rt,d=rt*rt*this.dot4(r[Fe],Ke,Mt,B,bt));let F=.6-je*je-$e*$e-ke*ke-at*at;F<0?p=0:(F*=F,p=F*F*this.dot4(r[We],je,$e,ke,at));let ve=.6-Be*Be-R*R-T*T-W*W;ve<0?f=0:(ve*=ve,f=ve*ve*this.dot4(r[Pe],Be,R,T,W));let $=.6-re*re-oe*oe-ie*ie-De*De;return $<0?_=0:($*=$,_=$*$*this.dot4(r[Ze],re,oe,ie,De)),27*(h+d+p+f+_)}}class Tn extends vi{constructor(e,t,i,s,r,a,o){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=fg(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:$t}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new wt({defines:Object.assign({},mr.defines),uniforms:Fn.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pm,this.normalMaterial.blending=Pt,this.pdMaterial=new wt({defines:Object.assign({},_r.defines),uniforms:Fn.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new wt({defines:Object.assign({},gr.defines),uniforms:Fn.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,blending:Pt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new wt({uniforms:Fn.clone(_s.uniforms),vertexShader:_s.vertexShader,fragmentShader:_s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ir,blendDst:es,blendEquation:fn,blendSrcAlpha:Lr,blendDstAlpha:es,blendEquationAlpha:fn}),this.blendMaterial=new wt({uniforms:Fn.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xo,blendSrc:Ir,blendDst:es,blendEquation:fn,blendSrcAlpha:Lr,blendDstAlpha:es,blendEquationAlpha:fn}),this.fsQuad=new pr(null),this.originalClearColor=new qe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new so,this.depthTexture.format=ai,this.depthTexture.type=ri,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:Xt,magFilter:Xt,type:$t,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Vc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Tn.OUTPUT.Off:break;case Tn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){const t=new gg,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new co(s,e,e,on,yn);return r.wrapS=Gn,r.wrapT=Gn,r.needsUpdate=!0,r}}Tn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};class Jn extends vi{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new qe(1,1,1),this.hiddenEdgeColor=new qe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Ft(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new mc,this.depthMaterial.side=an,this.depthMaterial.depthPacking=ol,this.depthMaterial.blending=Pt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=an,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Ft(this.resolution.x,this.resolution.y,{type:$t}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Ft(r,a,{type:$t}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Ft(r,a,{type:$t}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Ft(Math.round(r/2),Math.round(a/2),{type:$t}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Ft(r,a,{type:$t}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Ft(Math.round(r/2),Math.round(a/2),{type:$t}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=_s;this.copyUniforms=Fn.clone(c.uniforms),this.materialCopy=new wt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this.fsQuad=new pr(null),this.tempPulseColor1=new qe,this.tempPulseColor2=new qe,this.textureMatrix=new nt;function h(d,p){const f=p.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const a=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,a)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Jn.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Jn.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Jn.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Jn.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new wt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Le(.5,.5)},textureMatrix:{value:null}},vertexShader:\`#include <morphtarget_pars_vertex>
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

				}\`})}getEdgeDetectionMaterial(){return new wt({uniforms:{maskTexture:{value:null},texSize:{value:new Le(.5,.5)},visibleEdgeColor:{value:new N(1,1,1)},hiddenEdgeColor:{value:new N(1,1,1)}},vertexShader:\`varying vec2 vUv;

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
				}\`})}getSeperableBlurMaterial(e){return new wt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},kernelRadius:{value:1}},vertexShader:\`varying vec2 vUv;

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
				}\`})}getOverlayMaterial(){return new wt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:\`varying vec2 vUv;

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
				}\`,blending:Cr,depthTest:!1,depthWrite:!1,transparent:!0})}}Jn.BlurDirectionX=new Le(1,0),Jn.BlurDirectionY=new Le(0,1);const _g={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:\`
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

		}\`};class vg extends vi{constructor(){super();const e=_g;this.uniforms=Fn.clone(e.uniforms),this.material=new Cm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new pr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$o?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ko&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const xg=new Set(["A","B","C","D","CNC"]),Mg=new Set(["room","personnelAirlock","materialAirlock","gowning"]),yg=new Set(["personnel","material","waste"]),hn=n=>typeof n=="number"&&Number.isFinite(n),pt=n=>typeof n=="string"?n:"",wo=n=>n&&typeof n=="object"?n:{},Ki=n=>Array.isArray(n)?n.map(wo):[],vr=n=>Array.isArray(n)?n.filter(e=>typeof e=="string"):[];function Sg(n){const e=wo(n),t=wo(e.summary??e),i=Ki(e.rooms).filter(r=>typeof r.name=="string"&&[r.xMin,r.xMax,r.yMin,r.yMax,r.z,r.height,r.area,r.pressure,r.pressureToOutside].every(hn)&&xg.has(pt(r.grade))).map(r=>({name:pt(r.name),floor:pt(r.floor),role:Mg.has(pt(r.role))?pt(r.role):"room",grade:pt(r.grade),regime:pt(r.regime),containment:r.containment===!0,xMin:r.xMin,xMax:r.xMax,yMin:r.yMin,yMax:r.yMax,z:r.z,height:r.height,area:r.area,pressure:r.pressure,relativeTo:pt(r.relativeTo),pressureToOutside:r.pressureToOutside,...hn(r.occupancy)?{occupancy:r.occupancy}:{},...hn(r.atexZone)?{atexZone:r.atexZone}:{},...typeof r.ignition=="string"&&r.ignition?{ignition:r.ignition}:{},equipment:vr(r.equipment)}));if(i.length===0)return;const s=new Set([...i.map(r=>r.name),"outside"]);return{name:pt(t.name),source:pt(t.source),reason:pt(t.reason),minimumStep:hn(t.minimumStep)?t.minimumStep:NaN,stepSource:pt(t.stepSource),...hn(t.atexDistance)?{atexDistance:t.atexDistance}:{},...typeof t.envelope=="string"&&t.envelope?{envelope:t.envelope}:{},floorArea:hn(t.floorArea)?t.floorArea:NaN,occupancy:hn(t.occupancy)?t.occupancy:0,floors:Ki(e.floors).filter(r=>hn(r.elevation)&&hn(r.height)).map(r=>({name:pt(r.name),elevation:r.elevation,height:r.height})),rooms:i,connections:Ki(e.connections).filter(r=>s.has(pt(r.a))&&s.has(pt(r.b))&&hn(r.dP)).map(r=>({id:pt(r.id),a:pt(r.a),b:pt(r.b),type:r.type==="stair"||r.type==="lift"?r.type:"door",dP:r.dP})),flows:Ki(e.flows).filter(r=>yg.has(pt(r.kind))&&vr(r.path).every(a=>s.has(a))).map(r=>({name:pt(r.name),kind:pt(r.kind),path:vr(r.path),connected:r.connected!==!1,reason:pt(r.reason)})),shared:Ki(e.shared).map(r=>({room:pt(r.room),flows:vr(r.flows),reason:pt(r.reason)})),findings:Ki(e.findings).map(r=>({id:pt(r.id),kind:pt(r.kind),a:pt(r.a),b:pt(r.b),value:hn(r.value)?r.value:NaN,limit:hn(r.limit)?r.limit:NaN,message:pt(r.message)}))}}const Wc={A:{colour:6767065,css:"#6741d9",word:"Grade A -- critical zone"},B:{colour:1667522,css:"#1971c2",word:"Grade B -- background to A"},C:{colour:820633,css:"#0c8599",word:"Grade C"},D:{colour:3650125,css:"#37b24d",word:"Grade D"},CNC:{colour:8818326,css:"#868e96",word:"CNC -- controlled, not classified"}},Eg={personnel:{colour:1598635,css:"#1864ab",word:"personnel",lift:.6,dashed:!1,weight:1},material:{colour:15103744,css:"#e67700",word:"material (raw -> product)",lift:1.1,dashed:!1,weight:2},waste:{colour:8793756,css:"#862e9c",word:"waste",lift:1.6,dashed:!0,weight:1}},Xc=["personnel","material","waste"],xr=4,$c={room:"room",personnelAirlock:"personnel airlock",materialAirlock:"material airlock",gowning:"gowning room"},Yc=n=>n.role!=="room",bo=n=>\`\${n>0?"+":""}\${Number(n.toFixed(2))} Pa\`;function Tg(n,e){const t=Yc(n)?\` · \${$c[n.role]} (\${n.regime})\`:"";return\`\${e?"⚠ ":""}\${n.name} · \${n.grade}\${t} · \${bo(n.pressureToOutside)}\`}const Ao=(n,e,t)=>[n,t,-e];function wg(n){const e=new Map,t=new Set(n.rooms.map(i=>i.name));for(const i of n.findings)for(const s of[i.a,i.b])t.has(s)&&e.set(s,[...e.get(s)??[],i.message]);return e}function bg(n,e){const t=Math.max(n.xMin,e.xMin),i=Math.min(n.xMax,e.xMax),s=Math.max(n.yMin,e.yMin),r=Math.min(n.yMax,e.yMax);return i>=t&&r>=s?[(t+i)/2,(s+r)/2]:[((n.xMin+n.xMax)/2+(e.xMin+e.xMax)/2)/2,((n.yMin+n.yMax)/2+(e.yMin+e.yMax)/2)/2]}function Ag(n,e){const t=(n.xMin+n.xMax)/2,i=(n.yMin+n.yMax)/2,s=[[n.xMin-e.x0,[n.xMin-xr,i]],[e.x1-n.xMax,[n.xMax+xr,i]],[n.yMin-e.y0,[t,n.yMin-xr]],[e.y1-n.yMax,[t,n.yMax+xr]]];return s.sort((r,a)=>r[0]-a[0]),s[0][1]}function Rg(n,e){const t=new Map(e.rooms.map(a=>[a.name,a])),i=Cg(e),s=a=>[(a.xMin+a.xMax)/2,(a.yMin+a.yMax)/2,a.z],r=[];for(let a=0;a<n.path.length;++a){const o=n.path[a],l=t.get(o);if(!l){const c=t.get(n.path[a===0?1:a-1]??"");if(c){const[h,d]=Ag(c,i);r.push([h,d,c.z])}continue}if(a>0){const c=t.get(n.path[a-1]);if(c){const[h,d]=bg(c,l);r.push([h,d,c.z]),c.z!==l.z&&r.push([h,d,l.z])}}r.push(s(l))}return r}function Cg(n){return{x0:Math.min(...n.rooms.map(e=>e.xMin)),x1:Math.max(...n.rooms.map(e=>e.xMax)),y0:Math.min(...n.rooms.map(e=>e.yMin)),y1:Math.max(...n.rooms.map(e=>e.yMax))}}function Pg(n){const e=wg(n),t=n.rooms.map(a=>{const o=e.get(a.name)??[],l=[a.name,\`\${Wc[a.grade].word} · \${$c[a.role]}\${a.regime?\` (\${a.regime})\`:""}\`,\`pressure \${bo(a.pressureToOutside)} to outside\`+(a.relativeTo!=="outside"?\` (declared \${bo(a.pressure)} vs \${a.relativeTo})\`:""),\`floor \${a.floor}, \${Number(a.area.toFixed(2))} m², \${a.height} m high\`,...a.containment?["containment: negative to its neighbours"]:[],...a.atexZone!==void 0?[\`hazardous area: zone \${a.atexZone}\`]:[],...a.ignition?[\`ignition source: \${a.ignition}\`]:[],...a.occupancy!==void 0?[\`occupancy \${a.occupancy}\`]:[],...a.equipment.length?[\`equipment: \${a.equipment.join(", ")}\`]:[],...o.map(c=>\`⚠ \${c}\`)];return{name:a.name,grade:a.grade,colour:Wc[a.grade].colour,airlock:Yc(a),containment:a.containment,center:Ao((a.xMin+a.xMax)/2,(a.yMin+a.yMax)/2,a.z+a.height/2),size:[a.xMax-a.xMin,a.height,a.yMax-a.yMin],label:Tg(a,o.length>0),labelAt:Ao((a.xMin+a.xMax)/2,(a.yMin+a.yMax)/2,a.z+.15),tooltip:l,flagged:o.length>0}}),i=n.flows.map(a=>{const o=Eg[a.kind];return{name:a.name,kind:a.kind,colour:o.colour,dashed:o.dashed,weight:o.weight,broken:!a.connected,points:Rg(a,n).map(([l,c,h])=>Ao(l,c,h+o.lift))}}),s=[1/0,0,1/0],r=[-1/0,0,-1/0];for(const a of t)s[0]=Math.min(s[0],a.center[0]-a.size[0]/2),r[0]=Math.max(r[0],a.center[0]+a.size[0]/2),r[1]=Math.max(r[1],a.center[1]+a.size[1]/2),s[2]=Math.min(s[2],a.center[2]-a.size[2]/2),r[2]=Math.max(r[2],a.center[2]+a.size[2]/2);return{name:n.name,...n.envelope?{envelope:n.envelope}:{},rooms:t,flows:i,min:s,max:r}}function Dg(n,e){const t=(s,r,a)=>[a(s[0],r[0]),a(s[1],r[1]),a(s[2],r[2])],i=e.envelope?n.solids.map(s=>s.nonProcess&&s.id===e.envelope?{...s,shell:!0,tooltip:[...s.tooltip,"drawn as glass: the shell of the GMP interior drawn inside it"]}:s):n.solids;return{...n,solids:i,min:t(n.min,e.min,Math.min),max:t(n.max,e.max,Math.max),fitMin:t(n.fitMin,e.min,Math.min),fitMax:t(n.fitMax,e.max,Math.max)}}function Lg(n,e){return e===n.racks-1?n.vesselsLastRack:n.vesselsPerRack}function Ig(n){const e=[];for(let t=0;t<n.racks;t++){const i=t*(n.rackWidth+n.rackAisle),s=Lg(n,t);for(let r=0;r<s;r++){const a=Math.floor(r/n.vesselsPerTier),o=r%n.vesselsPerTier;e.push({rack:t,tier:a,col:o,x:n.endMargin+n.vesselLength/2,y:i+(o+.5)*n.pitch,z:n.baseHeight+(a+.5)*n.tierPitch})}}return e}function Ug(n){const e=[],t=(i,s)=>Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(s));return n.vesselsPerRack!==n.vesselsPerTier*n.tiers&&e.push("vesselsPerRack != vesselsPerTier x tiers"),n.vessels!==(n.racks-1)*n.vesselsPerRack+n.vesselsLastRack&&e.push("vessels != (racks-1) x vesselsPerRack + vesselsLastRack"),t(n.rackLength,n.vesselLength+2*n.endMargin)||e.push("rackLength != vesselLength + 2 endMargin"),t(n.rackWidth,n.vesselsPerTier*n.pitch)||e.push("rackWidth != vesselsPerTier x pitch"),t(n.rackHeight,n.baseHeight+n.tiers*n.tierPitch)||e.push("rackHeight != baseHeight + tiers x tierPitch"),t(n.envelopeLength,n.rackLength+n.loadingClearance)||e.push("envelopeLength != rackLength + loadingClearance"),t(n.envelopeWidth,n.racks*n.rackWidth+(n.racks-1)*n.rackAisle)||e.push("envelopeWidth != racks x rackWidth + (racks-1) x aisle"),t(n.envelopeHeight,n.rackHeight)||e.push("envelopeHeight != rackHeight"),(n.vesselOutsideDiameter>n.pitch+1e-9||n.vesselOutsideDiameter>n.tierPitch+1e-9)&&e.push("vessels interpenetrate (outside diameter above the pitch)"),e}const Mr=14,Ro=.3,Ng=4,Og=2.2,Fg=3,Co=12,qc=1e-6;function zg(n){return n===void 0||!Number.isFinite(n)?"unknown":n<=qc?"liquid":n>=1-qc?"vapour":"twoPhase"}const Bg={liquid:"liquid (vf = 0)",vapour:"vapour (vf = 1)",twoPhase:"two-phase (0 < vf < 1)",unknown:"phase not published"},Po={liquid:1667522,vapour:12723548,twoPhase:2853438,unknown:8818326};function kg(n){const e=n!=null&&Number.isFinite(n)?Math.max(0,n):0;return 1.2+2.4*Math.log10(1+e)}function Gg(n){const e=n!=null&&Number.isFinite(n)?Math.max(0,n):0;return .1+.05*Math.log10(1+e)}function jc(n,e){return n==="batteryLimit"?\`battery limit (\${e})\`:n==="junction"?\`\${e} (junction)\`:n==="wallPenetration"?\`building wall (to \${e}, indoors)\`:e}const Hg=6;function Vg(n){const e=zg(n.vf),t=n.F_mass!==void 0&&Number.isFinite(n.F_mass)?n.F_mass:null,i=[n.label?\`\${n.stream} (\${n.label})\`:n.stream,\`\${jc(n.fromKind,n.from)} → \${jc(n.toKind,n.to)}\`,Bg[e]],s=[];return n.T!==void 0&&s.push(\`T \${n.T.toFixed(1)} K\`),n.P!==void 0&&s.push(\`P \${(n.P/1e5).toFixed(2)} bar\`),s.length&&i.push(s.join(" · ")),t!==null&&i.push(\`ṁ \${t.toPrecision(4)} kg/s\`),i.push(\`length \${n.length.toFixed(1)} m (\${n.routedBy==="waypoints"?"declared waypoints":"routed on the rack"})\`),{id:\`pipe:\${n.stream}\`,stream:n.stream,phase:e,points:n.route.map(([r,a,o])=>vt(r,a,o)),length:n.length,massFlow:t,radius:Gg(t),speed:kg(t),tooltip:i}}const Ct={finding:3,item:2,other:1,zone:0};function Wg(n,e=2){const t=n.map((r,a)=>({b:r,i:a})).sort((r,a)=>a.b.priority-r.b.priority||r.i-a.i),i=[],s=new Set;for(const{b:r}of t)!(r.w>0&&r.h>0)||!Number.isFinite(r.x)||!Number.isFinite(r.y)||i.some(o=>Math.abs(o.x-r.x)*2<o.w+r.w+2*e&&Math.abs(o.y-r.y)*2<o.h+r.h+2*e)||(i.push(r),s.add(r.key));return s}function Xg(n,e,t,i,s,r=.15){const a=[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2],o=[Math.max(e[0]-n[0],1),Math.max(e[1]-n[1],1),Math.max(e[2]-n[2],1)],l=i*Math.PI/360,c=Math.atan(Math.tan(l)*Math.max(s,.001)),h=1+r;if(t==="plan"){const g=h*Math.max(o[0]/2/Math.tan(c),o[2]/2/Math.tan(l));return{position:[a[0],e[1]+g,a[2]+.001*g],target:[a[0],a[1],a[2]]}}if(t==="elevation"){const g=h*Math.max(o[0]/2/Math.tan(c),o[1]/2/Math.tan(l));return{position:[a[0],a[1],e[2]+g],target:a}}const p=h*Math.hypot(o[0],o[1],o[2])/2/Math.sin(Math.min(l,c)),f=[-.6,.7,.9],_=Math.hypot(f[0],f[1],f[2]);return{position:[a[0]+p*f[0]/_,a[1]+p*f[1]/_,a[2]+p*f[2]/_],target:a}}function vt(n,e,t){return[n,t,-e]}const $g=new Set(["separation","outsideArea","ignitionInZone","ignitionDownwind","noRoadAccess","buildingNotReached","weighbridgeOffRoad","gateOffRoad","exposedInZone","exposedDownwind","carParkReverseExit","singleEntrance","unbundedLiquid"]),Yg=new Set(["roadInZone","roadDisconnected"]),qg=new Set(["routeReverses","turningAreaTooSmall","sharpCorner","cornersTooClose","wrongWay","routeMissesWeighbridge","routeMissesStop","routeNoGate"]);function jg(n,e,t){return n==="outsideArea"||n==="noRoadAccess"||n==="buildingNotReached"||n==="weighbridgeOffRoad"||n==="gateOffRoad"||n==="carParkReverseExit"||n==="singleEntrance"||n==="unbundedLiquid"?[e]:n==="ignitionInZone"||n==="exposedInZone"?[e,t.split("#zone")[0]??t]:[e,t]}function Ve(n){return Number.isFinite(n)?Math.abs(n)>=100?n.toFixed(0):n.toFixed(2):"?"}function Kg(n,e,t,i){const s=[n.dx,n.dz,n.dy],r=vt(n.x,n.y,n.z+.5*n.dz),a=n.orientation==="alongX"?"x":n.orientation==="alongY"?"z":"y",o=n.nonProcess?\`\${n.kind} (non-process)\`:n.kind,l=n.footprintFrom==="declared"?"declared box":"own sizing",c=n.shape==="cylinder"?n.orientation==="vertical"?\`D \${Ve(n.dx)} m × H \${Ve(n.dz)} m\`:\`D \${Ve(n.orientation==="alongX"?n.dy:n.dx)} m × L \${Ve(n.orientation==="alongX"?n.dx:n.dy)} m\`:\`\${Ve(n.dx)} × \${Ve(n.dy)} × \${Ve(n.dz)} m\`,h=[n.id+(n.sector?\` (sector \${n.sector})\`:""),\`\${o} · \${c} · \${l}\`,\`at (\${Ve(n.x)}, \${Ve(n.y)}) m, base z \${Ve(n.z)} m\`];if(n.bank){const d=n.bank;h.push(\`bank: \${d.vessels} vessels x \${d.elementsPerVessel} elements, \${d.racks} rack\${d.racks===1?"":"s"} of \${d.tiers} tiers x \${d.vesselsPerTier}\`);for(const p of Ug(d))h.push(\`BANK SHEET INCONSISTENT: \${p}\`)}else n.kind==="membraneBank"&&h.push("bank geometry not drawn: its design sheet was not read, or lacks a key (see the sheet); the engine's envelope box is shown");n.room&&h.push(\`indoors: in room \${n.room} of the GMP building, standing on its floor\`),n.release&&h.push(\`release source (zones \${n.release.zones.map(d=>d.zone).join(", ")||"none"})\`),n.ignition&&h.push(\`ignition source: \${n.ignition}\`),n.reason&&h.push(\`why: \${n.reason}\`),n.source&&h.push(\`source: \${n.source}\`),i&&h.push(i.road?i.onDeck?\`on road \${i.road} (it drives over the deck)\`:\`nearest road a gate reaches: \${i.road}, \${Ve(i.distance??NaN)} m\`:"no road a gate reaches");for(const d of t)h.push(\`FINDING: \${d}\`);return{id:n.id,kind:n.kind,sector:n.sector,shape:n.shape,axis:a,center:r,size:s,nonProcess:n.nonProcess,footprintFrom:n.footprintFrom,...n.bank?{bank:n.bank}:{},ignition:!!n.ignition,release:!!n.release,flagged:e,label:e?\`⚠ \${n.id}\`:n.id,tooltip:h}}const Kc={0:{opacity:.45,edge:"solid"},1:{opacity:.25,edge:"wire"},2:{opacity:.12,edge:"dashed"}};function Zc(n){if(!n||n.items.length===0)return null;const e=new Set,t=new Map;for(const A of n.findings)if($g.has(A.kind))for(const Z of jg(A.kind,A.a,A.b))e.add(Z),t.set(Z,[...t.get(Z)??[],A.message]);const i=new Map((n.access??[]).map(A=>[A.item,A])),s=n.items.map(A=>Kg(A,e.has(A.id),t.get(A.id)??[],i.get(A.id))),r=new Map(n.items.map(A=>[A.id,A])),a=[];for(const A of n.items)for(const Z of A.release?.zones??[]){const pe=Kc[Z.zone]??Kc[2];a.push({itemId:A.id,zone:Z.zone,center:vt(A.x,A.y,A.z+.5*Z.height),radius:Z.radius,height:Z.height,opacity:pe.opacity,edge:pe.edge,label:\`zone \${Z.zone} · \${A.id}\`})}const o=n.areas.map(A=>({sector:A.sector,x0:A.xMin,x1:A.xMax,z0:-A.yMax,z1:-A.yMin,label:\`sector \${A.sector}\`})),l=n.plot,c=l?{sector:"",x0:l.xMin,x1:l.xMax,z0:-l.yMax,z1:-l.yMin,label:\`plot \${l.plotArea.toFixed(0)} m²\`}:null,h=[];for(const A of n.findings){if(A.kind!=="separation"&&A.kind!=="ignitionDownwind"&&A.kind!=="exposedDownwind")continue;const Z=r.get(A.a),pe=r.get(A.b);if(!Z||!pe)continue;const Ie=Z.z+.5*Z.dz,Oe=pe.z+.5*pe.dz;h.push({findingId:A.id,kind:A.kind,from:vt(Z.x,Z.y,Ie),to:vt(pe.x,pe.y,Oe),label:A.kind==="separation"?\`\${Ve(A.value)} m < \${Ve(A.limit)} m declared\`:\`downwind, \${Ve(A.value)} m\`})}const d=[1/0,0,1/0],p=[-1/0,-1/0,-1/0],f=A=>{for(let Z=0;Z<3;Z++)d[Z]=Math.min(d[Z],A[Z]),p[Z]=Math.max(p[Z],A[Z])};for(const A of s)f([A.center[0]-A.size[0]/2,A.center[1]-A.size[1]/2,A.center[2]-A.size[2]/2]),f([A.center[0]+A.size[0]/2,A.center[1]+A.size[1]/2,A.center[2]+A.size[2]/2]);for(const A of a)f([A.center[0]-A.radius,A.center[1]-A.height/2,A.center[2]-A.radius]),f([A.center[0]+A.radius,A.center[1]+A.height/2,A.center[2]+A.radius]);for(const A of o)f([A.x0,0,A.z0]),f([A.x1,0,A.z1]);c&&(f([c.x0,0,c.z0]),f([c.x1,0,c.z1]));const _=(n.pipes??[]).map(Vg),g=(n.junctions??[]).map(A=>({unit:A.unit,at:vt(A.x,A.y,A.z),label:\`\${A.unit} (\${A.type})\`}));let m=null;const u=n.pipeRack;if(u&&_.length>0){const A=(n.pipes??[]).map(Ie=>Ie.lane).filter(Ie=>Ie>=0),Z=A.length?Math.floor(Math.max(...A)/u.lanesPerTier)+1:1,pe=n0(u.xStart,u.xEnd,n.rackCrossings??[]);m={x0:u.xStart,x1:u.xEnd,zc:-u.y,halfWidth:.5*u.lanesPerTier*u.laneSpacing,tiers:Array.from({length:Z},(Ie,Oe)=>u.elevation+Oe*u.tierSpacing),portals:pe,label:u.declared?"pipe rack":"pipe rack (engine default)"},f([m.x0,m.tiers[m.tiers.length-1],m.zc-m.halfWidth]),f([m.x1,0,m.zc+m.halfWidth])}for(const A of _)for(const Z of A.points)f(Z);const E=s0(n);for(const A of E)for(const Z of A.points)f([Z[0]-A.width/2,0,Z[2]-A.width/2]),f([Z[0]+A.width/2,0,Z[2]+A.width/2]);const M=r0(n),v=a0(n);for(const A of v)f(A.from),f(A.to);const U=c0(n),b=h0(n),P=(n.turningAreas??[]).map(A=>({area:A.area,at:vt(A.x,A.y,0),radius:A.diameter/2,tooltip:[\`turning area \${A.area}: \${Ve(A.diameter)} m across\`,\`why: \${A.reason}\`]}));for(const A of P)f([A.at[0]-A.radius,0,A.at[2]-A.radius]),f([A.at[0]+A.radius,0,A.at[2]+A.radius]);const L=Jg(n),S=Qg(n);if(L)for(const[A,Z]of L.runs)f(A),f(Z);for(const A of S)f(A.outside);const y=e0(n);for(const A of y)f(A.top);const D=Zg(n);for(const A of D){for(const[Z,pe]of A.runs)f(Z),f([pe[0],A.height,pe[2]]);A.pit&&(f([A.pit.at[0]-A.pit.sizeX/2,-A.pit.depth,A.pit.at[2]-A.pit.sizeZ/2]),f([A.pit.at[0]+A.pit.sizeX/2,0,A.pit.at[2]+A.pit.sizeZ/2]))}const I=t0(n),k=[1/0,1/0,1/0],X=[-1/0,-1/0,-1/0],se=A=>{for(let Z=0;Z<3;Z++)k[Z]=Math.min(k[Z],A[Z]),X[Z]=Math.max(X[Z],A[Z])},j=s.filter(A=>!A.nonProcess);for(const A of j.length?j:s)se([A.center[0]-A.size[0]/2,A.center[1]-A.size[1]/2,A.center[2]-A.size[2]/2]),se([A.center[0]+A.size[0]/2,A.center[1]+A.size[1]/2,A.center[2]+A.size[2]/2]);for(const A of _)for(const Z of A.points)se(Z);for(const A of g)se(A.at);for(const A of E)for(const Z of A.points)se([Z[0]-A.width/2,0,Z[2]-A.width/2]),se([Z[0]+A.width/2,0,Z[2]+A.width/2]);k[1]=Math.min(k[1],0);let ue=null;if(n.wind){const A=n.wind,Z=(A.from+180-A.planNorth)*Math.PI/180,pe=Math.sin(Z),Ie=Math.cos(Z),Oe=(d[0]+p[0])/2,Q=-(d[2]+p[2])/2,de=Math.max(p[0]-d[0],p[2]-d[2],1),be=.75*de,ge=.45*de,Re=Math.max(p[1],1)+2;ue={tail:vt(Oe-pe*be,Q-Ie*be,Re),head:vt(Oe-pe*ge,Q-Ie*ge,Re),label:\`wind from \${Ve(A.from)}° (true)\`},f(ue.tail),f(ue.head)}const K=u0(n);return{solids:s,fence:L,bunds:D,crossings:S,unrouted:y,unroutedListed:I,roads:E,barriers:M,approaches:v,truckRoutes:U,carParks:b,turningAreas:P,windsocks:K,zones:a,areas:o,plot:c,links:h,wind:ue,pipes:_,junctions:g,rack:m,min:d,max:p,fitMin:k,fitMax:X}}function Zg(n){return(n.bunds??[]).map(e=>{const t=e.outline.map(([l,c])=>vt(l,c,0)),i=t.map((l,c)=>[l,t[(c+1)%t.length]]),s=e.pit?{at:vt(e.pit.x,e.pit.y,0),sizeX:e.pit.length,sizeZ:e.pit.width,depth:e.pit.depth}:null,r=e.containment==="bund"?"bund":"impounding area",a=e.verdict==="inadequate",o=e.containment==="bund"?\`holds \${Ve(e.netVolume)} m³ = \${Ve(e.area)} m² × \${Ve(e.wallHeight)} m − \${Ve(e.displacedVolume)} m³ the enclosed footprints displace\`:\`holds \${Ve(e.netVolume)} m³ in its remote pit \`+(e.pit?\`(\${Ve(e.pit.length)} × \${Ve(e.pit.width)} × \${Ve(e.pit.depth)} m)\`:"");return{bund:e.bund,containment:e.containment,runs:i,height:e.wallHeight,pit:s,label:\`\${r} \${e.bund}\${a?" — SHORT":""}\`,flagged:a,tooltip:[\`\${r} \${e.bund} · \${e.verdict} (the engine's verdict)\`,o,\`requires \${Ve(e.requiredVolume)} m³: the \${e.governing} term on \${e.basis}\`+e.allowances.map(l=>\` + \${l.name} \${Ve(l.volume)} m³\`).join(""),\`encloses \${e.items.join(", ")}\`,\`\${e.containment==="bund"?"wall":"kerb"} \${Ve(e.wallHeight)} m; drain \${e.drain}\`,\`rule: \${e.ruleReason}\`,\`rule source: \${e.ruleSource}\`,\`why: \${e.reason}\`,\`source: \${e.source}\`,\`drawn as: a wall \${Ve(Ro)} m thick on the engine's outline (the thickness is drawing)\`]}})}function Jg(n){const e=n.fence;if(!e)return null;const t=n.fenceOpenings??[],i=[{side:"south",a:[e.xMin,e.yMin],b:[e.xMax,e.yMin],along:0},{side:"east",a:[e.xMax,e.yMin],b:[e.xMax,e.yMax],along:1},{side:"north",a:[e.xMin,e.yMax],b:[e.xMax,e.yMax],along:0},{side:"west",a:[e.xMin,e.yMin],b:[e.xMin,e.yMax],along:1}],s=[],r=[],a=(c,h)=>c.along===0?vt(h,c.a[1],0):vt(c.a[0],h,0);for(const c of i){const h=c.a[c.along],d=c.b[c.along],p=t.filter(g=>g.side===c.side).map(g=>{const m=c.along===0?g.x:g.y;return[m-g.width/2,m+g.width/2]}).sort((g,m)=>g[0]-m[0]);let f=h;const _=[];for(const[g,m]of p)g>f&&_.push([f,Math.min(g,d)]),f=Math.max(f,m);f<d&&_.push([f,d]);for(const[g,m]of _){if(m-g<1e-6)continue;s.push([a(c,g),a(c,m)]);const u=Math.max(1,Math.round((m-g)/Fg));for(let E=0;E<=u;E++)r.push(a(c,g+(m-g)*E/u))}}const o=new Set,l=r.filter(c=>{const h=\`\${c[0].toFixed(3)},\${c[2].toFixed(3)}\`;return o.has(h)?!1:(o.add(h),!0)});return{runs:s,posts:l,height:Og,openings:t.map(c=>({gate:c.gate,at:vt(c.x,c.y,0),width:c.width})),tooltip:[\`fence · \${Ve(e.length)} m round (the engine's length)\`,\`the plot's boundary moved \${Ve(e.inset)} m inward\`+(e.insetDeclared?" (declared)":" (none declared: on the boundary)"),...t.map(c=>\`opens for gate \${c.gate}: \${Ve(c.width)} m on the \${c.side} side\`+(c.road?\` (road \${c.road})\`:"")),\`why: \${e.reason}\`,\`source: \${e.source}\`,"drawn as: chain-link on posts, its height and post spacing drawing, not data"]}}function Qg(n){const e={south:[0,-1],north:[0,1],west:[-1,0],east:[1,0]};return(n.fenceCrossings??[]).map(t=>{const[i,s]=e[t.side]??[0,-1],r=-s,a=i,o=t.direction==="in"?"from":"to",l=t.labelDeclared?\`\${t.stream} \${o}: \${t.label}\`:\`\${t.stream}: \${t.direction==="in"?"origin":"destination"} NOT declared\`;return{stream:t.stream,direction:t.direction,at:vt(t.x,t.y,t.z),outside:vt(t.x+i*Co,t.y+s*Co,t.z),sign:vt(t.x+i*2+r*1.5,t.y+s*2+a*1.5,0),text:l,labelled:t.labelDeclared,tooltip:[\`\${t.stream} crosses the fence (\${t.direction==="in"?"inlet":"outlet"}), \${t.side} side, at (\${Ve(t.x)}, \${Ve(t.y)}) m, \${Ve(t.z)} m up\`,t.labelDeclared?\`\${o}: \${t.label}\`:\`\${o}: NOT declared (the engine announced it)\`,t.positionFrom==="declared"?"where the case placed the crossing":t.positionFrom==="waypoints"?"the end of the case's declared route":"the engine's stated default: where the pipe's rack lane meets the fence",\`drawn as: the pipeline carried \${Ve(Co)} m outside the fence and a sign; the stub and the sign are drawing, not data\`]}})}function e0(n){const e=[];for(const t of n.notRouted??[]){const i=t.anchor;if(!i||t.solids)continue;const s=\`\${t.fromUnit?t.fromUnit:"a battery limit"} -> \${t.toUnit?t.toUnit:"a battery limit"}\`;e.push({stream:t.stream,at:vt(i[0],i[1],i[2]),top:vt(i[0],i[1],i[2]+Ng),text:\`⚠ \${t.stream}: NOT routed\`,tooltip:[\`\${t.stream} (\${s}) has NO pipe: the engine could not route it\`,\`why: \${t.reason}\`,"marked at the end the layout reaches; the dashed stub is drawing, not a pipe"]})}return e}function t0(n){return(n.notRouted??[]).filter(e=>!e.anchor||e.solids).map(e=>({stream:e.stream,reason:e.reason,solids:!!e.solids,...e.indoor&&!e.anchor?{indoor:!0}:{}}))}function n0(n,e,t){const s=a=>t.some(o=>a>o.xMin-.6+1e-9&&a<o.xMax+.6-1e-9),r=[];for(let a=n;a<=e+1e-9;a+=Hg)s(a)||r.push(a);(r.length===0||r[r.length-1]<e-1e-9)&&(s(e)||r.push(e));for(const a of t)for(const o of[a.xMin-.6,a.xMax+.6])o>=n-1e-9&&o<=e+1e-9&&!s(o)&&r.push(o);return[...new Set(r.map(a=>Math.round(a*1e6)/1e6))].sort((a,o)=>a-o)}function i0(n,e,t){const i=t.centreline;for(let s=0;s+1<i.length;s++){const[r,a]=i[s],[o,l]=i[s+1];if(n>=Math.min(r,o)-1e-6&&n<=Math.max(r,o)+1e-6&&e>=Math.min(a,l)-1e-6&&e<=Math.max(a,l)+1e-6)return!0}return!1}function s0(n){const e=n.roads??[],t=new Map;for(const i of n.findings)Yg.has(i.kind)&&t.set(i.a,[...t.get(i.a)??[],i.message]);return e.map(i=>{const s=(h,d)=>!e.some(p=>p!==i&&i0(h,d,p)),[r,a]=i.centreline[0],[o,l]=i.centreline[i.centreline.length-1],c=t.get(i.road)??[];return{id:\`road:\${i.road}\`,road:i.road,width:i.width,points:i.centreline.map(([h,d])=>vt(h,d,0)),freeStart:s(r,a),freeEnd:s(o,l),disconnected:!i.fromEntrance,length:i.length,oneWay:!!i.oneWay,tooltip:[\`road \${i.road}\`,\`\${Ve(i.width)} m wide · \${Ve(i.length)} m of centre line (the engine's length)\`+(i.oneWay?" · ONE-WAY, in the order of its waypoints":"")+(i.cornerRadiusDeclared?\` · corners of \${Ve(i.cornerRadius??0)} m radius\`:""),...i.reason?[\`why: \${i.reason}\`]:[],...i.fromEntrance?[]:["no gate reaches it"],...c.map(h=>\`FINDING: \${h}\`)]}})}function r0(n){const e=[],t=new Map((n.roads??[]).map(i=>[i.road,i]));for(const i of n.items){if(!i.nonProcess||i.kind!=="gate")continue;const s=(n.access??[]).find(p=>p.item===i.id),r=s?.road?t.get(s.road):void 0;if(!s||!r||s.roadX===void 0||s.roadY===void 0)continue;let a=0,o=0;for(let p=0;p+1<r.centreline.length;p++){const[f,_]=r.centreline[p],[g,m]=r.centreline[p+1];if(s.roadX>=Math.min(f,g)-1e-6&&s.roadX<=Math.max(f,g)+1e-6&&s.roadY>=Math.min(_,m)-1e-6&&s.roadY<=Math.max(_,m)+1e-6){const u=Math.hypot(g-f,m-_)||1;a=(g-f)/u,o=(m-_)/u;break}}if(a===0&&o===0)continue;let l=-o,c=a;(i.x-s.roadX)*l+(i.y-s.roadY)*c<0&&(l=-l,c=-c);const h=r.width/2,d=1;e.push({gate:i.id,post:vt(s.roadX+l*(h+.4),s.roadY+c*(h+.4),d),end:vt(s.roadX-l*(h-.4),s.roadY-c*(h-.4),d)})}return e}function a0(n){return(n.fenceOpenings??[]).filter(e=>(e.approach??0)>1e-6&&e.approachX!==void 0&&e.approachY!==void 0).map(e=>({gate:e.gate,from:vt(e.approachX,e.approachY,0),to:vt(e.x,e.y,0),width:e.width}))}function o0(n,e,t=8){if(n.length<3)return n.map(s=>[s[0],s[1]]);const i=[[n[0][0],n[0][1]]];for(let s=1;s+1<n.length;s++){const[r,a]=n[s],[o,l]=n[s-1],[c,h]=n[s+1],d=Math.hypot(r-o,a-l),p=Math.hypot(c-r,h-a),f=(r-o)/d,_=(a-l)/d,g=(c-r)/p,m=(h-a)/p,u=f*g+_*m,E=Math.min(e(r,a),d/2,p/2);if(Math.abs(u)>.5||!(E>1e-6)){i.push([r,a]);continue}const M=r-f*E+g*E,v=a-_*E+m*E,U=r-f*E,b=a-_*E,P=r+g*E,L=a+m*E,S=Math.atan2(b-v,U-M);let D=Math.atan2(L-v,P-M)-S;for(;D>Math.PI;)D-=2*Math.PI;for(;D<-Math.PI;)D+=2*Math.PI;for(let I=0;I<=t;I++){const k=S+D*I/t;i.push([M+E*Math.cos(k),v+E*Math.sin(k)])}}return i.push([n[n.length-1][0],n[n.length-1][1]]),i}function l0(n,e,t,i,s,r,a,o=10){const l=a-Math.min(s,r)/2;if(!(l>1e-6))return[];const c=n+i[0]*s/2-t[0]*r/2,h=e+i[1]*s/2-t[1]*r/2,d=c-t[0]*l+i[0]*l,p=h-t[1]*l+i[1]*l,f=[c-t[0]*l,h-t[1]*l],_=[c+i[0]*l,h+i[1]*l],g=Math.atan2(f[1]-p,f[0]-d);let u=Math.atan2(_[1]-p,_[0]-d)-g;for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;const E=[[c,h]];for(let M=0;M<=o;M++){const v=g+u*M/o;E.push([d+l*Math.cos(v),p+l*Math.sin(v)])}return E}function c0(n){const e=new Map((n.roads??[]).map(s=>[s.road,s.width])),t=new Map;for(const s of n.findings)qg.has(s.kind)&&t.set(s.a,[...t.get(s.a)??[],s.message]);const i=n.designVehicle;return(n.truckRoutes??[]).map(s=>{const r=(n.routeCorners??[]).filter(f=>f.route===s.route),a=(f,_)=>r.find(g=>Math.abs(g.x-f)<1e-6&&Math.abs(g.y-_)<1e-6&&g.turn!=="reverse")?.radius??0,o=o0(s.path,a),l=o.map(([f,_])=>vt(f,_,.08)),c=[];for(let f=1;f+1<s.path.length;f++){const[_,g]=s.path[f],m=r.find(L=>Math.abs(L.x-_)<1e-6&&Math.abs(L.y-g)<1e-6);if(!m||m.turn==="reverse")continue;const[u,E]=s.path[f-1],[M,v]=s.path[f+1],U=Math.hypot(_-u,g-E),b=Math.hypot(M-_,v-g),P=l0(_,g,[(_-u)/U,(g-E)/U],[(M-_)/b,(v-g)/b],e.get(m.inRoad)??0,e.get(m.outRoad)??0,m.radius);P.length&&c.push(P.map(([L,S])=>vt(L,S,0)))}const h=[];let d=0;for(let f=1;f<o.length;f++)d+=Math.hypot(o[f][0]-o[f-1][0],o[f][1]-o[f-1][1]);for(let f=Mr/2;f<d;f+=Mr){const _=yr(l,f),g=yr(l,f+.5),m=Math.hypot(g[0]-_[0],g[2]-_[2]);m>1e-6&&h.push({at:_,dir:[(g[0]-_[0])/m,(g[2]-_[2])/m]})}const p=t.get(s.route)??[];return{route:s.route,verdict:s.verdict,length:s.length,points:l,fillets:c,arrows:h,tooltip:[\`truck route \${s.route}: \${s.from} -> \${s.to}, \${Ve(s.length)} m (the engine's length)\`,\`roads, in order: \${s.roads.join(" -> ")}\`,\`\${s.turns} turn(s), \${s.reversals} reversal(s); weighbridge: \${s.weighbridge||"none"}\`+(s.serves.length?\`; serves \${s.serves.join(", ")}\`:""),...r.filter(f=>f.turn!=="reverse").map(f=>\`\${f.turn} at (\${Ve(f.x)}, \${Ve(f.y)}) m: radius \${Ve(f.radius)} m, outer edge \${Ve(f.outerRadius)} m against \${Ve(f.required)} m\${f.ok?"":" -- TOO SHARP"}\`),...i?[\`design vehicle: \${Ve(i.turningDiameter)} m turning circle (\${i.source})\`]:[],s.verdict==="clear"?"verdict: clear -- no reversing, no corner too sharp":"verdict: ANNOUNCED",...p.map(f=>\`FINDING: \${f}\`),\`why: \${s.reason}\`,"drawn as: the engine's path, corners rounded to the declared radius; the arrows and the fillets are drawing"]}})}function h0(n){return(n.carParks??[]).map(e=>({item:e.item,exitsForward:e.exitsForward,bays:e.stalls.map(([t,i,s,r])=>({at:vt(t,i,0),dir:[s,-r],w:e.bayWidth,l:e.bayLength})),tooltip:[\`car park \${e.item}: \${e.bays} bays declared, \${e.capacity} fit (\${e.rows} row(s) of \${e.perRow}), \${Ve(e.area)} m²\`,\`bays \${Ve(e.bayWidth)} × \${Ve(e.bayLength)} m at \${Ve(e.angle)}°, aisle \${Ve(e.aisle)} m, \${e.arrangement}, entry \${e.entry}: cars leave \${e.exitsForward?"nose first":"REVERSING"}\`,\`why: \${e.reason}\`,\`source: \${e.source}\`]}))}function u0(n){const e=n.wind,t=[];for(const i of n.items){if(!i.nonProcess||i.kind!=="windsock")continue;const s=e?(e.from+180-e.planNorth)*Math.PI/180:0,r=Math.sin(s),a=Math.cos(s);t.push({item:i.id,top:vt(i.x,i.y,i.z+i.dz),dir:[r,-a]})}return t}function yr(n,e){if(n.length===0)return[0,0,0];if(n.length===1)return[...n[0]];const t=[];let i=0;for(let r=1;r<n.length;r++){const a=n[r-1],o=n[r],l=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]);t.push(l),i+=l}if(!(i>0))return[...n[0]];let s=(e%i+i)%i;for(let r=0;r<t.length;r++){const a=t[r];if(s<=a||r===t.length-1){const o=a>0?Math.min(1,s/a):0,l=n[r],c=n[r+1];return[l[0]+o*(c[0]-l[0]),l[1]+o*(c[1]-l[1]),l[2]+o*(c[2]-l[2])]}s-=a}return[...n[n.length-1]]}function d0(){try{return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}const Jc="choupo.layout3d.quality";function f0(n){return n.coarsePointer||n.deviceMemory!==void 0&&n.deviceMemory<=4||n.cores!==void 0&&n.cores<=2?"fast":"high"}function p0(){try{const n=window.localStorage.getItem(Jc);if(n==="high"||n==="fast")return n}catch{}try{const n=navigator;return f0({coarsePointer:typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,deviceMemory:n.deviceMemory,cores:n.hardwareConcurrency})}catch{return"high"}}function m0(n){try{window.localStorage.setItem(Jc,n)}catch{}}const Do=15227148,g0=.09,_0=.45,Lo=[.9,.6];function v0(n,e,t=!0){let i={...e},s=t,r=null,a=null,o=[];const l=new Map,c=()=>{a&&(a.visible=s);for(const d of o)d.visible=s;for(const[d,p]of l)p.visible=i[d];r?.redraw()};return{extend:d=>{r=d,l.clear(),o=[];const{THREE:p,world:f}=d;a=new p.Group,f.add(a);const _=u=>{const[E,M,v]=u.center,[U,b,P]=u.size,L=[E-U/2,E+U/2],S=[M-b/2,M+b/2],y=[v-P/2,v+P/2],D=(k,X,se)=>new p.Vector3(L[k],S[X],y[se]),I=[];for(const k of[0,1])for(const X of[0,1])I.push(D(0,k,X),D(1,k,X));for(const k of[0,1])for(const X of[0,1])I.push(D(k,0,X),D(k,1,X));for(const k of[0,1])for(const X of[0,1])I.push(D(k,X,0),D(k,X,1));return I};for(const u of n.rooms){const E=new p.Mesh(new p.BoxGeometry(u.size[0],u.size[1],u.size[2]),new p.MeshStandardMaterial({color:u.colour,transparent:!0,opacity:u.airlock?.22:.14,depthWrite:!1,side:p.DoubleSide,roughness:.9,metalness:0}));E.position.set(...u.center),E.userData.noAO=!0,a.add(E);const M=new p.Mesh(new p.BoxGeometry(u.size[0],.06,u.size[2]),new p.MeshStandardMaterial({color:u.colour,transparent:!0,opacity:.55,depthWrite:!1,roughness:.95,metalness:0}));M.position.set(u.center[0],u.center[1]-u.size[1]/2+.03,u.center[2]),M.userData.tooltip=u.tooltip,M.userData.noAO=!0,a.add(M),d.pickables.push(M);const v=new p.LineSegments(new p.BufferGeometry().setFromPoints(_(u)),u.airlock?new p.LineDashedMaterial({color:u.flagged?Do:u.colour,dashSize:.5,gapSize:.35}):new p.LineBasicMaterial({color:u.flagged?Do:u.colour}));u.airlock&&v.computeLineDistances(),a.add(v),o.push(d.label(u.label,u.labelAt,u.flagged?Ct.finding:Ct.item,u.flagged))}const g=new p.Vector3(0,1,0),m=(u,E,M,v,U)=>{const b=new p.Vector3(...E),P=new p.Vector3(...M),L=P.clone().sub(b),S=L.length();if(S<1e-6)return;const y=new p.Mesh(new p.CylinderGeometry(v,v,S,8),U);y.position.copy(b.clone().add(P).multiplyScalar(.5)),y.quaternion.copy(new p.Quaternion().setFromUnitVectors(g,L.normalize())),y.userData.noAO=!0,u.add(y)};for(const u of n.flows){let E=l.get(u.kind);E||(E=new p.Group,l.set(u.kind,E),f.add(E));const M=new p.MeshBasicMaterial({color:u.broken?Do:u.colour}),v=g0*(u.weight>1?1.7:1);for(let U=0;U+1<u.points.length;++U){const b=u.points[U],P=u.points[U+1];if(u.dashed){const D=new p.Vector3(...b),I=new p.Vector3(...P),k=D.distanceTo(I);for(let X=0;X<k;X+=Lo[0]+Lo[1]){const se=Math.min(k,X+Lo[0]),j=D.clone().lerp(I,X/k),ue=D.clone().lerp(I,se/k);m(E,[j.x,j.y,j.z],[ue.x,ue.y,ue.z],v,M)}}else m(E,b,P,v,M);const L=new p.Vector3(...b),S=new p.Vector3(...P),y=S.clone().sub(L);if(y.length()>1.2){const D=new p.Mesh(new p.CylinderGeometry(0,_0,1.1,12),M);D.position.copy(L.clone().add(S).multiplyScalar(.5)),D.quaternion.copy(new p.Quaternion().setFromUnitVectors(g,y.normalize())),D.userData.tooltip=[\`\${u.kind} flow "\${u.name}"\`,...u.broken?["⚠ a step of it crosses no declared door, stair or lift"]:[]],D.userData.noAO=!0,E.add(D),d.pickables.push(D)}}}c()},setFlows(d){i={...d},c()},setRooms(d){s=d,c()}}}const x0=[{kind:"energy",dash:"9 3 2 3",opacity:1,label:"energy",meaning:"a heat link, not a pipe: energy crosses here, matter does not"},{kind:"tear",dash:null,opacity:1,mark:"cut",label:"recycle cut",meaning:"a recycle stream: a pipe like any other.  The break mark is where the sequential solver CUTS the loop -- it guesses this stream, solves round the loop and iterates until the guess and the answer agree (the tear declared in system/solverDict)"},{kind:"utility",dash:"7 4",opacity:.85,label:"utility",meaning:"a plant utility (steam header, cooling water, refrigerant), not process material"},{kind:"duty",dash:"2 3",opacity:1,colour:"#e8590c",label:"duty",meaning:"a utility DUTY served to a unit (dotted) -- orange heating, blue cooling"},{kind:"recipe",dash:"9 3 2 3 2 3",opacity:1,colour:"#20c997",label:"recipe transfer",meaning:"a batch recipe moving material between vessels at a scheduled instant (dash-dot-dot)"},{kind:"empty",dash:"3 6",opacity:.55,label:"empty",meaning:"this pipe carries no flow in the current run"},{kind:"process",dash:null,opacity:1,label:"process",meaning:"process material; the colour is its phase"}];new Map(x0.map(n=>[n.kind,n]));function Qc(){try{return typeof window>"u"?null:window.localStorage??null}catch{return null}}function Io(n){try{return Qc()?.getItem(n)??null}catch{return null}}function Uo(n,e){try{Qc()?.setItem(n,e)}catch{}}function M0(n,e=!1){const t=Io(n);return t==="1"?!0:t==="0"?!1:e}function y0(n){const e=Io(n);return e==="1"||e==="0"}function S0(n,e){Uo(n,e?"1":"0")}const E0="choupo.methods.controlsCollapsed",Zt=(n,e)=>({id:n,sizeKey:e.sizeKey??null,size:e.size??{min:0,max:0,default:0},collapsedKey:e.collapsedKey??null,defaultCollapsed:e.defaultCollapsed??!1});Zt("selectionCard",{collapsedKey:"choupo.panel.selectionCard.collapsed"}),Zt("bottomDock",{sizeKey:"choupo.panel.bottomDock.height",size:{min:140,max:1600,default:360},collapsedKey:"choupo.panel.bottomDock.collapsed"}),Zt("exploreRail",{sizeKey:"choupo.explore.railWidth",size:{min:200,max:460,default:240},collapsedKey:"choupo.explore.railCollapsed"}),Zt("catalogueBrowser",{sizeKey:"choupo.panel.catalogueBrowser.size",size:{min:260,max:620,default:420}}),Zt("controlRail",{sizeKey:"choupo.panel.controlRail.size",size:{min:220,max:460,default:260},collapsedKey:"choupo.control.railCollapsed"}),Zt("logRail",{sizeKey:"choupo.panel.logRail.size",size:{min:200,max:460,default:260},collapsedKey:"choupo.panel.logRail.collapsed"}),Zt("plotsRail",{sizeKey:"choupo.panel.plotsRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.plotsRail.collapsed"}),Zt("streamsRail",{sizeKey:"choupo.panel.streamsRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.streamsRail.collapsed"}),Zt("streamsSummary",{sizeKey:"choupo.panel.streamsSummary.size",size:{min:64,max:1600,default:240},collapsedKey:"choupo.panel.streamsSummary.collapsed"}),Zt("reportsRail",{sizeKey:"choupo.panel.reportsRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.reportsRail.collapsed"}),Zt("caseFilesRail",{sizeKey:"choupo.panel.caseFilesRail.size",size:{min:200,max:460,default:240},collapsedKey:"choupo.panel.caseFilesRail.collapsed"}),Zt("layoutTables",{sizeKey:"choupo.panel.layoutTables.size",size:{min:120,max:1600,default:340},collapsedKey:"choupo.panel.layoutTables.collapsed",defaultCollapsed:!0}),Zt("workflowOutline",{sizeKey:"choupo.panel.workflowOutline.size",size:{min:200,max:460,default:248},collapsedKey:"choupo.panel.workflowOutline.collapsed"}),Zt("methodKnobsRail",{sizeKey:"choupo.panel.methodKnobsRail.size",size:{min:240,max:520,default:300},collapsedKey:E0});const T0={legend:"choupo.layout.section.legend.collapsed",plot:"choupo.layout.section.plot.collapsed",roads:"choupo.layout.section.roads.collapsed",pipes:"choupo.layout.section.pipes.collapsed",findings:"choupo.layout.section.findings.collapsed",items:"choupo.layout.section.items.collapsed"},No={layoutExportViewHeight:"choupo.layoutExport.viewHeight"};[{id:"legend",title:"How to read this view",defaultCollapsed:!0},{id:"plot",title:"Plot",defaultCollapsed:!1},{id:"roads",title:"Roads",defaultCollapsed:!1},{id:"findings",title:"Findings",defaultCollapsed:!1},{id:"pipes",title:"Pipe register",defaultCollapsed:!1},{id:"items",title:"Placed items",defaultCollapsed:!1}].map(n=>({...n,id:n.id,key:T0[n.id]}));function w0(n,e){try{return n?.fullscreenEnabled===!0&&typeof e?.requestFullscreen=="function"?"api":"overlay"}catch{return"overlay"}}const Oo=240,eh=24;function Sr(n,e,t){const i=Math.max(Oo,(Number.isFinite(e)?e:0)-eh),s=Number.isFinite(n)&&n>0?n:t;return Math.round(Math.min(i,Math.max(Oo,s)))}function b0(n,e){return Sr(e-Math.max(0,n)-eh,e,Oo)}const Tt={data:"choupo-layout-data",view:"choupo-layout-view",error:"choupo-layout-error",fit:"choupo-layout-fit",preset:"choupo-layout-preset",pipes:"choupo-layout-pipes",flow:"choupo-layout-flow",zones:"choupo-layout-zones",zoneLabels:"choupo-layout-zone-labels",quality:"choupo-layout-quality",full:"choupo-layout-full",resize:"choupo-layout-resize",stage:"choupo-layout-stage",building:"choupo-building-data",buildingToggle:"choupo-building"},A0=5,R0=6,C0=1,Qn=1,P0=2.2,D0=2,th=.25,Fo=2*Math.PI;function Ut(n,e,t,i){return n==="x"?[e,t,i]:n==="z"?[i,t,e]:[i,e,t]}const xi=n=>[Math.cos(n),Math.sin(n)];function lt(n,e,t,i,s,r,a=r,o){return{prim:"cylinder",role:n,decoration:e,at:t,axis:i,length:s,rStart:r,rEnd:a,...o?{arc:o}:{}}}function ht(n,e,t,i,s){return{prim:"box",role:n,decoration:e,at:t,size:i}}function Er(n,e,t,i,s){return{prim:"ring",role:n,decoration:!0,at:e,R:t,r:i,arc:s}}function nh({R:n,H:e}){const t=Math.min(th*2*n,.25*e);return{hd:t,parts:[lt("body",!1,[0,0,0],"y",e-2*t,n),{prim:"head",role:"body",decoration:!1,at:[0,e/2-t,0],axis:"y",sign:1,r:n,depth:t},{prim:"head",role:"body",decoration:!1,at:[0,-e/2+t,0],axis:"y",sign:-1,r:n,depth:t}]}}function Zi(n,e,t,i,s){return[lt("steel",!0,[n,t+s/2,e],"y",s,i),lt("steel",!0,[n,t+s-.03,e],"y",.06,1.7*i)]}function ih({R:n,H:e},t){if(e>=3*n){const a=Math.min(Math.max(.12*e,t+.3),t+2.5,.45*e);return{word:"skirt",parts:[lt("concrete",!0,[0,-e/2+a/2,0],"y",a,1.012*n),lt("steel",!0,[0,-e/2+.05,0],"y",.1,1.1*n)]}}const i=Math.max(.08,.1*n),s=t+Math.min(.5,.2*e),r=[];for(let a=0;a<4;a++){const[o,l]=xi(Math.PI/4+a*Math.PI/2),c=n-i/2;r.push(ht("steel",!0,[c*o,-e/2+s/2,c*l],[i,s,i]))}return{word:"legs",parts:r}}function Tr({R:n,H:e,base:t},i,s){if(t+e/2+i<=A0)return[];const r=[],a=D0,[o,l]=xi(a),c=[-l,o],h=-e/2,d=i+Qn,p=n+.3,f=p*o,_=p*l;for(const b of[-1,1])r.push(lt("steel",!0,[f+b*.22*c[0],(h+d)/2,_+b*.22*c[1]],"y",d-h,.03));for(let b=h+.3;b<i;b+=.3)r.push(lt("steel",!0,[f,b,_],[c[0],0,c[1]],.44,.016));const g=.38,m=(p+.12)*o,u=(p+.12)*l,E=h+P0;if(d>E+.5){for(let b=E;b<=d+1e-9;b+=.9)r.push(Er("safety",[m,b,u],g,.018,[a-2*Math.PI/3,4*Math.PI/3]));for(const b of[-Math.PI/2,-Math.PI/4,0,Math.PI/4,Math.PI/2]){const[P,L]=xi(a+b);r.push(lt("safety",!0,[m+g*P,(E+d)/2,u+g*L],"y",d-E,.016))}}if(!s)return r;const M=[];for(let b=1;;b++){const P=h+b*R0;if(P>i-2)break;M.push(P)}M.push(i);const v=[a-Math.PI/2,Math.PI],U=n+C0;for(const b of M){r.push(lt("grating",!0,[0,b-.04,0],"y",.08,U,U,v)),r.push(Er("safety",[0,b+Qn,0],U-.05,.025,v)),r.push(Er("safety",[0,b+.5*Qn,0],U-.05,.018,v));for(let P=0;P<=6;P++){const[L,S]=xi(v[0]+P*v[1]/6);r.push(lt("safety",!0,[(U-.05)*L,b+Qn/2,(U-.05)*S],"y",Qn,.022))}}return r}function vs(n){return n.shape==="cylinder"?n.axis==="y"?{R:n.size[0]/2,H:n.size[1],base:n.base,inscribed:!1}:null:{R:Math.min(n.size[0],n.size[2])/2,H:n.size[1],base:n.base,inscribed:!0}}function zo(n){if(n.shape==="cylinder"){if(n.axis==="y")return null;const s=n.axis;return{a:s,L:s==="x"?n.size[0]:n.size[2],R:n.size[1]/2,yc:0,inscribed:!1}}const e=n.size[0]>=n.size[2]?"x":"z",t=Math.min(n.size[0],n.size[2]),i=Math.min(t,n.size[1])/2;return{a:e,L:Math.max(n.size[0],n.size[2]),R:i,yc:-n.size[1]/2+i,inscribed:!0}}const Ji=n=>n.inscribed?", drawn inside the declared box":"";function sh(n,e){const{parts:t,hd:i}=nh(n),s=ih(n,i);t.push(...s.parts),t.push(...Zi(0,0,n.H/2-.05,Math.max(.05,.1*n.R),.35));const r=Tr(n,n.H/2-i,!0);return t.push(...r),{parts:t,model:e,describes:\`vertical vessel, 2:1 heads, \${s.word}\${r.length?", ladder and platforms":""}\${Ji(n)}\`}}function rh(n,e,t,i){const s=[];for(const r of i){const a=n==="x"?[.22,.9*e,1.6*e]:[1.6*e,.9*e,.22];s.push(ht("steel",!0,Ut(n,r,t-e+.45*e,0),a));const o=n==="x"?[.5,.06,1.8*e]:[1.8*e,.06,.5];s.push(ht("steel",!0,Ut(n,r,t-e+.03,0),o))}return s}function ah(n,e){const{a:t,L:i,R:s,yc:r}=n,a=Math.min(th*2*s,.25*i),o=[lt("body",!1,Ut(t,0,r,0),t,i-2*a,s),{prim:"head",role:"body",decoration:!1,at:Ut(t,i/2-a,r,0),axis:t,sign:1,r:s,depth:a},{prim:"head",role:"body",decoration:!1,at:Ut(t,-i/2+a,r,0),axis:t,sign:-1,r:s,depth:a}];o.push(...rh(t,s,r,[-.3*i,.3*i]));for(const l of[-.25*i,.25*i]){const c=Ut(t,l,0,0);o.push(...Zi(c[0],c[2],r+.8*s,Math.max(.05,.15*s),.2*s+.25))}return{parts:o,model:e,describes:\`horizontal drum, 2:1 heads, saddles\${Ji(n)}\`}}const L0=n=>{const e=zo(n);if(!e)return null;const{a:t,L:i,R:s,yc:r}=e,a=Math.min(.06,.02*i),o=Math.min(.2*i,1.4*s),l=Math.min(.5*s,.15*i),c=-i/2,h=c+o,d=i/2-l,p=[lt("body",!1,Ut(t,c+a/2,r,0),t,a,s),lt("body",!1,Ut(t,(c+a+h)/2,r,0),t,o-a,s),lt("body",!1,Ut(t,(h+d)/2,r,0),t,d-h,s),{prim:"head",role:"body",decoration:!1,at:Ut(t,d,r,0),axis:t,sign:1,r:s,depth:l},lt("steel",!0,Ut(t,c+a,r,0),t,.08,1.1*s),lt("steel",!0,Ut(t,h,r,0),t,.1,1.1*s)],f=d-h,_=Math.max(.05,.2*s);for(const m of[h+.15*f,d-.15*f]){const u=Ut(t,m,0,0);p.push(...Zi(u[0],u[2],r+.7*s,_,.3*s+.25))}const g=Ut(t,(c+h)/2,0,0);return p.push(...Zi(g[0],g[2],r+.7*s,_,.3*s+.25)),p.push(...rh(t,s,r,[h+.2*f,d-.15*f])),{parts:p,model:"shellTubeHX",describes:\`shell-and-tube exchanger, channel head, saddles\${Ji(e)}\`}},oh=n=>{const e=vs(n);if(!e)return null;const{R:t,H:i}=e,s=Math.min(t/6,.2*i),r=i-s,a=[lt("body",!1,[0,-i/2+r/2,0],"y",r,t),lt("body",!1,[0,i/2-s/2,0],"y",s,t,.04*t),lt("concrete",!0,[0,-i/2+.1,0],"y",.2,1.05*t),lt("steel",!0,[0,i/2+.15,0],"y",.3,Math.max(.05,.05*t))];for(let h=-i/2+2.4;h<-i/2+r-.3;h+=2.4)a.push(lt("steel",!0,[0,h,0],"y",.04,1.004*t));const o=-i/2+r;a.push(Er("safety",[0,o+Qn,0],.97*t,.025,[0,Fo]));const l=Math.max(8,Math.min(48,Math.round(Fo*t/2.5)));for(let h=0;h<l;h++){const[d,p]=xi(h*Fo/l);a.push(lt("safety",!0,[.97*t*d,o+Qn/2,.97*t*p],"y",Qn,.022))}const c=Tr(e,o,!1);return a.push(...c),{parts:a,model:"storageTank",describes:\`storage tank, cone roof\${c.length?", caged ladder":""}\${Ji(e)}\`}},I0=n=>{const e=vs(n);if(!e)return null;const{R:t,H:i}=e,{parts:s,hd:r}=nh(e),a=ih(e,r);s.push(...a.parts);const o=Math.max(.3,.45*t);s.push(ht("machine",!0,[0,i/2-.05+o*.35,0],[o,o*.7,o]));const l=Math.max(.12,.17*t);s.push(lt("motor",!0,[0,i/2-.05+o*.7+l*1.6,0],"y",l*3.2,l));for(const h of[.6,2.7,4.4]){const[d,p]=xi(h);s.push(...Zi(.6*t*d,.6*t*p,i/2-r*.6,Math.max(.04,.08*t),r*.6+.25))}const c=Tr(e,i/2-r,!0);return s.push(...c),{parts:s,model:"stirredTank",describes:\`stirred tank, agitator drive, \${a.word}\${c.length?", ladder and platforms":""}\${Ji(e)}\`}},U0=n=>{if(n.shape!=="box")return null;const[e,t,i]=n.size,s=e>=i?"x":"z",r=Math.max(e,i),a=Math.min(e,i),o=Math.min(.3,.1*t),l=Math.min(.25,.08*t),c=o+l,h=Math.max(.05,Math.min(.32*a,.42*(t-c))),d=-t/2+c+h,p=s==="x"?[.1*r,.9*h,.9*h]:[.9*h,.9*h,.1*r],f=s==="x"?[.92*e,l,.8*i]:[.8*e,l,.92*i],_=[ht("concrete",!1,[0,-t/2+o/2,0],[e,o,i]),ht("steel",!0,[0,-t/2+o+l/2,0],f),lt("machine",!1,Ut(s,-.2*r,d,0),s,.42*r,h),lt("motor",!0,Ut(s,.27*r,d-.15*h,0),s,.3*r,.8*h),ht("safety",!0,Ut(s,.06*r,d,0),p)];for(const g of[-.32*r,-.08*r]){const m=Ut(s,g,0,0),u=Math.max(.05,Math.min(.5*h,t/2-(d+.6*h)));_.push(...Zi(m[0],m[2],d+.6*h,Math.max(.04,.28*h),u))}return{parts:_,model:"compressor",describes:"compressor and driver on a skid, drawn inside the declared box"}},N0=n=>{const e=vs(n);if(!e)return null;const{R:t,H:i}=e,s=.4*i,r=[lt("body",!1,[0,-i/2+s/2,0],"y",s,.08*t,t),lt("body",!1,[0,-i/2+s+(i-s)/2,0],"y",i-s,t),lt("motor",!0,[0,i/2+.3,0],"y",.6,Math.max(.1,.12*t))],a=Math.max(.12,.06*t);for(let l=0;l<4;l++){const[c,h]=xi(Math.PI/4+l*Math.PI/2),d=t-a/2;r.push(ht("steel",!0,[d*c,-i/2+s/2+.05,d*h],[a,s+.1,a]))}const o=Tr(e,i/2,!0);return r.push(...o),{parts:r,model:"sprayDryer",describes:\`spray dryer, chamber over a cone, on legs\${o.length?", ladder and platforms":""}\${Ji(e)}\`}},O0=n=>{if(n.shape==="cylinder"){const i=vs(n);if(i)return sh(i,"vessel");const s=zo(n);return s?ah(s,"vessel"):null}const e=Math.max(n.size[0],n.size[2]),t=Math.min(n.size[0],n.size[2]);return e>=1.5*t&&e>=1.5*n.size[1]?ah(zo(n),"vessel"):sh(vs(n),"vessel")},lh=1,ch=1.2,hh=2.2,wn=n=>{if(n.shape!=="box")return null;const[e,t,i]=n.size,s=e>=i?"x":"z";return{dx:e,dh:t,dz:i,a:s,long:Math.max(e,i),wide:Math.min(e,i)}};function uh(n,e,t,i){const s=[];for(const[o,l,c]of[[n,e,!0],[e,n,!1]]){const h=Math.max(1,Math.floor(o/2.5)),d=o/h;for(let p=0;p<h;p++){const f=-o/2+d*(p+.5);for(const _ of[-1,1]){const g=l/2+.02;s.push(ht("glass",!0,c?[f,t+i/2,_*g]:[_*g,t+i/2,f],c?[.6*d,i,.04]:[.04,i,.6*d]))}}}return s}function xs(n,e,t){const{dx:i,dh:s,dz:r}=n,a=Math.min(.25,.08*s),o=[ht("body",!1,[0,0,0],[i,s,r]),ht("concrete",!0,[0,s/2-a/2+.05,0],[i+2*e,a,r+2*e])],l=Math.min(lh,.3*s),c=Math.min(ch,.4*s);t&&o.push(...uh(i,r,-s/2+l,c));const h=Math.min(hh,.7*s);return o.push(ht("steel",!0,[.3*i*.5,-s/2+h/2,r/2+.03],[1,h,.04])),o}const F0=n=>{const e=wn(n);return e?{parts:xs(e,.3,!0),model:"controlRoom",describes:"control room: walls, roof slab, window band, drawn inside the declared box"}:null},z0=n=>{const e=wn(n);if(!e)return null;const t=xs(e,.6,!0);return t.push(lt("steel",!0,[.3*e.dx,e.dh/2+.6,-.25*e.dz],"y",1.2,.25)),{parts:t,model:"canteen",describes:"canteen: windows all round, roof overhang, kitchen vent, drawn inside the declared box"}},B0=n=>{const e=wn(n);return e?{parts:xs(e,.5,!0),model:"gate",describes:"guardhouse (its barrier arm across the road is drawing), inside the declared box"}:null},k0=n=>{const e=wn(n);if(!e)return null;const{dx:t,dh:i,dz:s,a:r,long:a,wide:o}=e,l=Math.min(.3*i,.25*o),c=i-l,h=[ht("body",!1,[0,-i/2+c/2,0],[t,c,s]),{prim:"prism",role:"roof",decoration:!1,at:[0,-i/2+c,0],axis:r==="x"?"x":"z",length:a,width:o,rise:l}],d=Math.min(4,.25*a),p=Math.min(4.5,.8*c);for(const f of[-.25*a,.25*a])for(const _ of[-1,1])h.push(ht("steel",!0,r==="x"?[f,-i/2+p/2,_*(s/2+.03)]:[_*(t/2+.03),-i/2+p/2,f],r==="x"?[d,p,.05]:[.05,p,d]));return{parts:h,model:"warehouse",describes:"warehouse: portal shed, pitched roof, roller doors, drawn inside the declared box"}},G0=n=>{const e=wn(n);if(!e)return null;const{dx:t,dh:i,dz:s,a:r,long:a,wide:o}=e,l=Math.min(.05,.3*i),c=[ht("body",!1,[0,-l/2,0],[t,i-l,s]),ht("steel",!1,[0,i/2-l/2,0],[t,l,s])],h=Math.max(1.5,6*i);for(const d of[-1,1])for(let f=0;f<4;f++){const _=i*(f+1)/4,g=h/4,m=d*(a/2+h-g*(f+.5));c.push(ht("concrete",!0,Ut(r,m,-i/2+_/2,0),r==="x"?[g,_,o]:[o,_,g]))}return{parts:c,model:"weighbridge",describes:"weighbridge: steel deck on its pit (the declared box), ramps at both ends (drawing)"}},wr=3.5,H0={controlRoom:F0,warehouse:k0,canteen:z0,gate:B0,weighbridge:G0,office:n=>{const e=wn(n);if(!e)return null;const t=xs(e,.4,!1),i=Math.max(1,Math.floor(e.dh/wr)),s=Math.min(lh,.3*wr),r=Math.min(ch,.4*wr);for(let a=0;a<i;a++)t.push(...uh(e.dx,e.dz,-e.dh/2+a*wr+s,r));return t.push(ht("steel",!0,[.15*e.dx,-e.dh/2+hh+.6,e.dz/2+.9],[3,.12,1.8])),{parts:t,model:"office",describes:\`offices: \${i} storey(s), a window band each, roof slab, drawn inside the declared box\`}},carPark:n=>n.shape!=="box"?null:{parts:[ht("asphalt",!1,[0,0,0],[...n.size])],model:"carPark",describes:"car park: asphalt slab (the declared box); the bays painted on it are the engine's"},laydown:n=>{const e=wn(n);if(!e)return null;const t=[ht("concrete",!1,[0,0,0],[e.dx,e.dh,e.dz])],i=e.dh/2;for(const[s,r,a]of[[-.3,-.2,1.2],[-.15,.15,1],[.25,-.1,1.4]])t.push(ht("machine",!0,[s*e.dx,i+a/2,r*e.dz],[a,a,a]));return{parts:t,model:"laydown",describes:"laydown area: hard standing (the declared box), bins on it (drawing)"}},musterPoint:n=>{const e=wn(n);if(!e)return null;const t=[ht("green",!1,[0,0,0],[e.dx,e.dh,e.dz])],i=-.4*e.dx,s=-.4*e.dz;return t.push(ht("steel",!0,[i,e.dh/2+1.1,s],[.1,2.2,.1])),t.push(ht("green",!0,[i,e.dh/2+2.3,s],[1.2,.8,.05])),{parts:t,model:"musterPoint",describes:"muster point: green pad (the declared box) and its sign (drawing)"}},fireWaterTank:n=>{const e=oh(n);return e?{parts:e.parts.map(t=>t.role==="body"?{...t,role:"fire"}:t),model:"fireWaterTank",describes:"fire-water "+e.describes}:null},firePumpHouse:n=>{const e=wn(n);if(!e)return null;const t=xs(e,.3,!1).map(r=>r.role==="body"?{...r,role:"fire"}:r),i=Math.min(3,.4*e.long),s=Math.min(3,.75*e.dh);return t.push(ht("steel",!0,[0,-e.dh/2+s/2,e.dz/2+.03],[i,s,.05])),{parts:t,model:"firePumpHouse",describes:"fire-water pump house: red walls, roller door, drawn inside the declared box"}},windsock:n=>{const e=wn(n);if(!e)return null;const t=Math.min(.1,.05*e.dh),i=Math.min(.08,.2*e.wide);return{parts:[ht("concrete",!1,[0,-e.dh/2+t/2,0],[e.dx,t,e.dz]),lt("steel",!1,[0,t/2,0],"y",e.dh-t,i)],model:"windsock",describes:"windsock: mast on its base (the declared box); the sock turned downwind by the declared wind is drawing"}}},V0={vessel:O0,shellTubeHX:L0,storageTank:oh,stirredTank:I0,compressor:U0,sprayDryer:N0,membraneBank:n=>{const e=n.bank;if(!e)return null;const t=e.envelopeLength,i=e.envelopeWidth,s=e.envelopeHeight,r=(c,h,d)=>[c-t/2,d-s/2,-(h-i/2)],a=e.vesselOutsideDiameter/2,o=[],l=Ig(e);for(let c=0;c<e.racks;c++){const h=l.filter(g=>g.rack===c);o.push({prim:"instances",role:"body",decoration:!1,at:[0,0,0],axis:"x",length:e.vesselLength,radius:a,centres:h.map(g=>r(g.x,g.y,g.z))});const d=c*(e.rackWidth+e.rackAisle),p=d+e.rackWidth/2;e.baseHeight>0&&o.push(ht("steel",!0,r(e.rackLength/2,p,e.baseHeight/2),[e.rackLength,e.baseHeight,e.rackWidth]));const f=.12;for(const g of[f/2,e.rackLength-f/2])for(const m of[d+f/2,d+e.rackWidth-f/2])o.push(ht("steel",!0,r(g,m,(e.baseHeight+e.rackHeight)/2),[f,e.rackHeight-e.baseHeight,f]));const _=Math.min(.05,Math.max(0,(e.tierPitch-e.vesselOutsideDiameter)/2));if(_>=.01)for(let g=0;g<e.tiers;g++)for(const m of[.2,.8])o.push(ht("steel",!0,r(e.endMargin+m*e.vesselLength,p,e.baseHeight+g*e.tierPitch+(e.tierPitch-e.vesselOutsideDiameter)/2-_/2),[.15,_,e.rackWidth]))}return{parts:o,model:"membraneBank",describes:\`\${e.vessels} pressure vessels of \${e.elementsPerVessel} elements in \${e.racks} rack\${e.racks===1?"":"s"} (\${e.tiers} tiers of \${e.vesselsPerTier}), loading clearance \${e.loadingClearance.toFixed(2)} m free at the high-x end\`}}};function W0(n){if(n.shape==="cylinder"){const e=n.axis==="x"?n.size[0]:n.axis==="z"?n.size[2]:n.size[1],t=n.axis==="x"?n.size[1]:n.size[0];return{parts:[lt("body",!1,[0,0,0],n.axis,e,t/2)],model:"plain",describes:"cylinder (no drawing for this kind)"}}return{parts:[ht("body",!1,[0,0,0],[...n.size])],model:"plain",describes:"box (no drawing for this kind)"}}function X0(n){const e={kind:n.kind,shape:n.shape,axis:n.axis,size:n.size,base:n.center[1]-n.size[1]/2,...n.bank?{bank:n.bank}:{}};return(n.nonProcess?H0[n.kind]:V0[n.kind])?.(e)??W0(e)}const $0=240,dh=45,bn={area:6061306,zone:15764480,link:14692657,wind:1867478,outline:16731392},Y0={steel:[5660779,.7,.5],grating:[7304572,.6,.75],safety:[14920960,.2,.45],machine:[3893898,.35,.45],motor:[2973352,.3,.4],concrete:[12038824,0,.95],glass:[4020851,.6,.15],asphalt:[4079682,0,.95],fire:[13183530,.3,.5],green:[2853438,.1,.6],roof:[8030097,.6,.45]},zn={asphalt:[62,64,66],edge:15856629,barrierRed:14239759,barrierWhite:16316922},An={width:.15,inset:.3,dash:3,gap:3},br={process:[13883614,.85,.3],nonProcess:[13351316,.05,.85],flagged:[15227148,.25,.45]},sn={exposure:1,skyTop:"#6f9fd8",skyHorizon:"#dbe6ef",environment:.55,hemisphereSky:14675711,hemisphereGround:5990984,hemisphere:.9,sunColour:16773596,sun:2.8,grass:[98,126,70],gravel:[150,144,133],grid:5591628,pad:[196,193,186]};function q0(n,e){return e.length===0?null:n(e,!1)}function j0(n,e){return n.shell?"shell":n.flagged&&!e.decoration?"flagged":e.role!=="body"?e.role:n.nonProcess?"nonProcess":"process"}function K0(n,e,t,i){const{THREE:s,OrbitControls:r,CSS2DRenderer:a,CSS2DObject:o}=n,l=i.height,c=()=>l==="fill"?Math.max(e.clientHeight,$0):l,h=Math.max(e.clientWidth,320),d=c();let p=i.quality??"high";const f=window.devicePixelRatio||1,_=()=>p==="high"?Math.min(f,2):1,g=new s.WebGLRenderer({antialias:!0,powerPreference:"high-performance"});g.setPixelRatio(_()),g.setSize(h,d),g.toneMapping=s.ACESFilmicToneMapping,g.toneMappingExposure=sn.exposure,g.outputColorSpace=s.SRGBColorSpace,g.shadowMap.enabled=p==="high",g.shadowMap.type=s.PCFSoftShadowMap,g.shadowMap.autoUpdate=!1,g.shadowMap.needsUpdate=!0,l==="fill"&&(g.domElement.style.position="absolute",g.domElement.style.top="0",g.domElement.style.left="0"),e.appendChild(g.domElement);const m=new a;m.setSize(h,d),m.domElement.style.position="absolute",m.domElement.style.top="0",m.domElement.style.left="0",m.domElement.style.pointerEvents="none",e.appendChild(m.domElement);const u=document.createElement("div");Object.assign(u.style,{position:"absolute",pointerEvents:"none",display:"none",font:"500 11px var(--mantine-font-family, sans-serif)",lineHeight:"1.35",padding:"4px 6px",borderRadius:"4px",maxWidth:"320px",zIndex:"2",color:"var(--mantine-color-text)",background:"light-dark(rgba(255,255,255,0.95), rgba(30,30,30,0.95))",border:"1px solid light-dark(#ced4da, #495057)"}),e.appendChild(u);const E=[],M=w=>(E.push(w),w),[v,,U]=t.min,[b,P,L]=t.max,S=Math.max(b-v,L-U,P,10),y=(v+b)/2,D=(U+L)/2,I=new s.Scene,k=sn.skyTop,X=sn.skyHorizon,se=(()=>{const w=document.createElement("canvas");w.width=2,w.height=256;const H=w.getContext("2d");if(H){const J=H.createLinearGradient(0,0,0,256);J.addColorStop(0,k),J.addColorStop(1,X),H.fillStyle=J,H.fillRect(0,0,2,256)}const te=M(new s.CanvasTexture(w));return te.colorSpace=s.SRGBColorSpace,te})();I.background=se,I.fog=new s.Fog(X,S*2.5,S*9);const j=new s.PMREMGenerator(g),ue=new n.RoomEnvironment,K=M(j.fromScene(ue,.04).texture);ue.dispose(),j.dispose(),I.environment=K,I.environmentIntensity=sn.environment,I.add(new s.HemisphereLight(sn.hemisphereSky,sn.hemisphereGround,sn.hemisphere));const A=new s.DirectionalLight(sn.sunColour,sn.sun),Z=new s.Vector3(.55,1,.45).normalize(),pe=Math.hypot(b-v,L-U)/2+P+5;A.position.set(y+Z.x*pe*2,Z.y*pe*2,D+Z.z*pe*2),A.target.position.set(y,0,D),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),A.shadow.camera.left=-pe,A.shadow.camera.right=pe,A.shadow.camera.top=pe,A.shadow.camera.bottom=-pe,A.shadow.camera.near=.5,A.shadow.camera.far=pe*4,A.shadow.bias=-4e-4,A.shadow.normalBias=.04*Math.max(1,pe/50),A.shadow.radius=3,I.add(A),I.add(A.target);const Ie=[],Oe=(w,H,te,J=!1,q="always")=>{const fe=document.createElement("div");fe.textContent=w,fe.style.font=\`\${J?700:500} 11px var(--mantine-font-family, sans-serif)\`,fe.style.padding="1px 4px",fe.style.borderRadius="3px",fe.style.whiteSpace="nowrap",fe.style.color="var(--mantine-color-text)",fe.style.background="light-dark(rgba(255,255,255,0.85), rgba(30,30,30,0.85))",J&&(fe.style.border="2px solid currentColor");const he=new o(fe);he.position.set(H[0],H[1],H[2]),I.add(he),Ie.push({obj:he,el:fe,priority:te,group:q,w:0,h:0})},Q=(w,H,te)=>{const q=document.createElement("canvas");q.width=128,q.height=128;const fe=q.getContext("2d");if(fe){const V=fe.createImageData(128,128);let Y=1234567;const ne=()=>(Y=Y*16807%2147483647)/2147483647;for(let ee=0;ee<128*128;ee++){const xe=(ne()-.5)*2*H;V.data[4*ee]=Math.max(0,Math.min(255,w[0]+xe)),V.data[4*ee+1]=Math.max(0,Math.min(255,w[1]+xe)),V.data[4*ee+2]=Math.max(0,Math.min(255,w[2]+xe)),V.data[4*ee+3]=255}fe.putImageData(V,0,0)}const he=M(new s.CanvasTexture(q));return he.colorSpace=s.SRGBColorSpace,he.wrapS=s.RepeatWrapping,he.wrapT=s.RepeatWrapping,he.repeat.set(te,te),he},de=(w,H)=>M(new s.MeshLambertMaterial({map:w,polygonOffset:!0,polygonOffsetFactor:H,polygonOffsetUnits:H})),be=(w,H,te,J)=>{const q=new s.Mesh(M(new s.PlaneGeometry(w,H)),J);return q.rotation.x=-Math.PI/2,q.position.set(te[0],0,te[1]),q.receiveShadow=!0,I.add(q),q},ge=t.plot??{x0:v-5,x1:b+5,z0:U-5,z1:L+5};{const w=S*7,H=de(Q(sn.grass,18,1),4);H.map.repeat.set(w/2,w/2);const{x0:te,x1:J,z0:q,z1:fe}=ge,he=y-w,V=y+w,Y=D-w,ne=D+w,ee=(z,G,O,ce)=>{if(G-z<=0||ce-O<=0)return;const Me=be(G-z,ce-O,[(z+G)/2,(O+ce)/2],H).geometry.getAttribute("uv");for(let ze=0;ze<Me.count;ze++)Me.setXY(ze,(z+Me.getX(ze)*(G-z)-he)/(2*w),(O+(1-Me.getY(ze))*(ce-O)-Y)/(2*w));Me.needsUpdate=!0};ee(he,V,Y,q),ee(he,V,fe,ne),ee(he,te,q,fe),ee(J,V,q,fe);const xe=J-te,x=fe-q,C=de(Q(sn.gravel,30,1),2);C.map.repeat.set(xe/3,x/3),be(xe,x,[(te+J)/2,(q+fe)/2],C)}{const w=S>200?10:S>60?5:1,H=[],{x0:te,x1:J,z0:q,z1:fe}=ge;for(let he=Math.ceil(te/w)*w;he<=J;he+=w)H.push(new s.Vector3(he,.02,q),new s.Vector3(he,.02,fe));for(let he=Math.ceil(q/w)*w;he<=fe;he+=w)H.push(new s.Vector3(te,.02,he),new s.Vector3(J,.02,he));I.add(new s.LineSegments(new s.BufferGeometry().setFromPoints(H),new s.LineBasicMaterial({color:sn.grid,transparent:!0,opacity:.18,depthWrite:!1})))}for(const w of t.areas){const H=w.x1-w.x0,te=w.z1-w.z0,J=de(Q(sn.pad,10,1),0);J.map.repeat.set(H/4,te/4),be(H,te,[(w.x0+w.x1)/2,(w.z0+w.z1)/2],J);const q=[[w.x0,w.z0],[w.x1,w.z0],[w.x1,w.z1],[w.x0,w.z1]].map(([fe,he])=>new s.Vector3(fe,.03,he));I.add(new s.LineLoop(new s.BufferGeometry().setFromPoints(q),new s.LineBasicMaterial({color:bn.area,fog:!1}))),Oe(w.label,[w.x0,.05,w.z0],Ct.other)}if(t.plot){const w=t.plot,H=[[w.x0,w.z0],[w.x1,w.z0],[w.x1,w.z1],[w.x0,w.z1]].map(([J,q])=>new s.Vector3(J,.04,q)),te=new s.LineLoop(new s.BufferGeometry().setFromPoints(H),new s.LineDashedMaterial({color:bn.area,dashSize:2,gapSize:1.5,fog:!1}));te.computeLineDistances(),I.add(te),Oe(w.label,[w.x1,.05,w.z1],Ct.other)}const Re=w=>M(new s.MeshStandardMaterial({color:w[0],metalness:w[1],roughness:w[2]})),Ue=new Map;for(const[w,H]of Object.entries(Y0))Ue.set(w,Re(H));const Xe={process:Re(br.process),nonProcess:Re(br.nonProcess),flagged:Re(br.flagged),shell:M(new s.MeshStandardMaterial({color:br.nonProcess[0],transparent:!0,opacity:.12,depthWrite:!1,roughness:.3,metalness:0}))},mt=new s.Vector3(0,1,0),Ke=w=>w<.06?6:w<.3?12:w<2?32:48,Mt=w=>{let H;const te=J=>{J==="x"?H.rotateZ(-Math.PI/2):J==="z"&&H.rotateX(Math.PI/2)};switch(w.prim){case"box":H=new s.BoxGeometry(w.size[0],w.size[1],w.size[2]),w.yaw&&H.rotateY(w.yaw);break;case"cylinder":{const J=Math.max(w.rStart,w.rEnd);H=w.arc?new s.CylinderGeometry(w.rEnd,w.rStart,w.length,Ke(J),1,!1,Math.PI/2-(w.arc[0]+w.arc[1]),w.arc[1]):new s.CylinderGeometry(w.rEnd,w.rStart,w.length,Ke(J),1,!1),typeof w.axis=="string"?te(w.axis):H.applyQuaternion(new s.Quaternion().setFromUnitVectors(mt,new s.Vector3(...w.axis).normalize()));break}case"head":H=new s.SphereGeometry(w.r,Ke(w.r),10,0,2*Math.PI,0,Math.PI/2),H.scale(1,w.depth/w.r,1),w.sign<0&&H.rotateX(Math.PI),te(w.axis);break;case"ring":H=new s.TorusGeometry(w.R,w.r,5,Math.max(8,Math.round(24*w.arc[1])),w.arc[1]),H.rotateX(Math.PI/2),H.rotateY(-w.arc[0]);break;case"prism":{H=new s.CylinderGeometry(1,1,w.length,3,1,!1,-Math.PI/2),H.rotateZ(-Math.PI/2),H.translate(0,.5,0),H.scale(1,w.rise/1.5,w.width/Math.sqrt(3)),w.axis==="z"&&H.rotateY(Math.PI/2),H=H.toNonIndexed(),H.computeVertexNormals();break}case"instances":throw new Error("an instanced part is drawn by InstancedMesh, not merged")}return H.translate(w.at[0],w.at[1],w.at[2]),H},B=[],bt=[];for(const w of t.solids){const H=X0(w),te=[...w.tooltip.slice(0,2),\`drawn as: \${H.describes}\`,...w.tooltip.slice(2)],J=V=>{const Y=j0(w,V);return Y==="shell"||Y==="flagged"||Y==="nonProcess"||Y==="process"?[Y,Xe[Y]]:[Y,Ue.get(V.role)]},q=new Map,fe=[];for(const V of H.parts){const[Y,ne]=J(V);if(V.prim==="instances"){fe.push({part:V,mat:ne});continue}const ee=q.get(Y)??{mat:ne,geoms:[],envelope:!1};ee.geoms.push(Mt(V)),ee.envelope||(ee.envelope=!V.decoration),q.set(Y,ee)}const he=new s.Group;he.position.set(...w.center);for(const{mat:V,geoms:Y,envelope:ne}of q.values()){const ee=Y.some(C=>!C.index)&&Y.some(C=>C.index)?Y.map(C=>{if(!C.index)return C;const z=C.toNonIndexed();return C.dispose(),z}):Y,xe=ee.length===1?ee[0]:n.mergeGeometries(ee,!1);if(ee.length>1)for(const C of ee)C.dispose();if(!xe)continue;M(xe);const x=new s.Mesh(xe,V);x.castShadow=!w.shell,x.receiveShadow=!0,x.userData.tooltip=te,he.add(x),B.push(x),w.flagged&&ne&&!w.shell&&bt.push(x)}for(const{part:V,mat:Y}of fe){if(V.centres.length===0)continue;const ne=new s.CylinderGeometry(V.radius,V.radius,V.length,Ke(V.radius),1,!1);V.axis==="x"?ne.rotateZ(-Math.PI/2):ne.rotateX(Math.PI/2);const ee=new s.InstancedMesh(M(ne),Y,V.centres.length),xe=new s.Matrix4;V.centres.forEach((x,C)=>{ee.setMatrixAt(C,xe.makeTranslation(V.at[0]+x[0],V.at[1]+x[1],V.at[2]+x[2]))}),ee.instanceMatrix.needsUpdate=!0,ee.castShadow=!0,ee.receiveShadow=!0,ee.userData.tooltip=te,M(ee),he.add(ee),B.push(ee),w.flagged&&!V.decoration&&bt.push(ee)}if(w.shell){const[V,Y,ne]=[w.size[0]/2,w.size[1]/2,w.size[2]/2],ee=(C,z,G)=>new s.Vector3(C?V:-V,z?Y:-Y,G?ne:-ne),xe=[];for(const C of[0,1])for(const z of[0,1])xe.push(ee(0,C,z),ee(1,C,z));for(const C of[0,1])for(const z of[0,1])xe.push(ee(C,0,z),ee(C,1,z));for(const C of[0,1])for(const z of[0,1])xe.push(ee(C,z,0),ee(C,z,1));const x=new s.LineSegments(M(new s.BufferGeometry().setFromPoints(xe)),M(new s.LineBasicMaterial({color:w.flagged?15227148:9076586})));he.add(x)}I.add(he),Oe(w.label,[w.center[0],w.center[1]+w.size[1]/2+.6,w.center[2]],w.flagged?Ct.finding:Ct.item,w.flagged)}if(t.roads.length>0){const w=de(Q(zn.asphalt,10,1),-1);w.map.repeat.set(S/4,S/4);const H=[],te=(q,fe,he,V,Y)=>{const ne=Math.hypot(he-q,V-fe);if(ne<.001)return;const ee=new s.PlaneGeometry(ne,Y);ee.rotateX(-Math.PI/2),ee.rotateY(-Math.atan2(V-fe,he-q)),ee.translate((q+he)/2,.01,(fe+V)/2),H.push(ee)},J=(q,fe,he,V)=>{const Y=be(fe-q,V-he,[(q+fe)/2,(he+V)/2],w),ee=Y.geometry.getAttribute("uv");for(let xe=0;xe<ee.count;xe++)ee.setXY(xe,(q+ee.getX(xe)*(fe-q))/S,(he+(1-ee.getY(xe))*(V-he))/S);return ee.needsUpdate=!0,Y.userData.tooltip=void 0,Y};for(const q of t.roads){const fe=q.width/2,he=q.points.length;for(let ne=0;ne+1<he;ne++){const ee=q.points[ne],xe=q.points[ne+1],x=Math.min(ee[0],xe[0])-fe,C=Math.max(ee[0],xe[0])+fe,z=Math.min(ee[2],xe[2])-fe,G=Math.max(ee[2],xe[2])+fe,O=J(x,C,z,G);O.userData.tooltip=q.tooltip,B.push(O);const ce=Math.sign(xe[0]-ee[0]),me=Math.sign(xe[2]-ee[2]),Se=ne===0&&q.freeStart,Me=ne+2===he&&q.freeEnd,ze=Se?.5:fe+.5,He=Me?.5:fe+.5,Ce=ee[0]+ce*ze,tt=ee[2]+me*ze,ct=xe[0]-ce*He,ut=xe[2]-me*He;if((ct-Ce)*ce+(ut-tt)*me<=0)continue;const Ot=-me*(fe-An.inset),it=ce*(fe-An.inset);te(Ce+Ot,tt+it,ct+Ot,ut+it,An.width),te(Ce-Ot,tt-it,ct-Ot,ut-it,An.width);const Ne=Math.hypot(ct-Ce,ut-tt);for(let Vt=0;Vt+An.dash<=Ne+1e-9;Vt+=An.dash+An.gap)te(Ce+ce*Vt,tt+me*Vt,Ce+ce*(Vt+An.dash),tt+me*(Vt+An.dash),An.width)}const V=q.points[Math.floor((he-1)/2)],Y=q.points[Math.floor((he-1)/2)+1];Oe(q.road,[(V[0]+Y[0])/2,.3,(V[2]+Y[2])/2],Ct.other,q.disconnected)}if(H.length){const q=n.mergeGeometries(H,!1);for(const fe of H)fe.dispose();q&&(M(q),I.add(new s.Mesh(q,M(new s.MeshLambertMaterial({color:zn.edge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})))))}}{const w=de(Q(zn.asphalt,10,1),-1);w.map.repeat.set(S/4,S/4);const H=(V,Y)=>{if(V.length<3)return null;const ne=[];for(let xe=1;xe+1<V.length;xe++)for(const x of[V[0],V[xe+1],V[xe]])ne.push(new s.Vector3(x[0],Y,x[2]));const ee=new s.BufferGeometry().setFromPoints(ne);return ee.computeVertexNormals(),ee},te=(V,Y,ne,ee,xe)=>{const[x,C]=Y,z=-C,G=x;return H([[V[0]+x*ne/2,xe,V[2]+C*ne/2],[V[0]-x*ne/2+z*ee,xe,V[2]-C*ne/2+G*ee],[V[0]-x*ne/2-z*ee,xe,V[2]-C*ne/2-G*ee]],xe)},J=[],q=[],fe=[],he=M(w.clone());he.side=s.DoubleSide;for(const V of t.approaches){const Y=V.width/2,ne=Math.abs(V.from[0]-V.to[0])<1e-6,ee=Math.min(V.from[0],V.to[0])-(ne?Y:0),xe=Math.max(V.from[0],V.to[0])+(ne?Y:0),x=Math.min(V.from[2],V.to[2])-(ne?0:Y),C=Math.max(V.from[2],V.to[2])+(ne?0:Y);xe-ee>.001&&C-x>.001&&be(xe-ee,C-x,[(ee+xe)/2,(x+C)/2],w)}for(const V of t.turningAreas){const Y=new s.Mesh(M(new s.CylinderGeometry(V.radius,V.radius,.02,48)),w);Y.position.set(V.at[0],0,V.at[2]),Y.receiveShadow=!0,Y.userData.tooltip=V.tooltip,B.push(Y),I.add(Y),Oe(\`turning area \${V.area}\`,[V.at[0],.3,V.at[2]],Ct.other)}for(const V of t.roads)if(V.oneWay)for(let Y=0;Y+1<V.points.length;Y++){const ne=V.points[Y],ee=V.points[Y+1],xe=Math.hypot(ee[0]-ne[0],ee[2]-ne[2]);if(xe<1e-6)continue;const x=[(ee[0]-ne[0])/xe,(ee[2]-ne[2])/xe];for(let C=Mr/2;C<xe-2;C+=Mr){const z=te([ne[0]+x[0]*C,0,ne[2]+x[1]*C],x,2.4,.9,.015);z&&fe.push(z)}}for(const V of t.truckRoutes){for(const x of V.fillets){const C=H(x,.005);if(C){const z=new s.Mesh(M(C),he);z.receiveShadow=!0,I.add(z)}}const Y=V.verdict==="clear"?2853438:15227148,ne=new s.Line(M(new s.BufferGeometry().setFromPoints(V.points.map(x=>new s.Vector3(x[0],.06,x[2])))),M(new s.LineDashedMaterial({color:Y,dashSize:2.5,gapSize:1.2,fog:!1})));ne.computeLineDistances(),ne.userData.tooltip=V.tooltip,B.push(ne),I.add(ne);const ee=[];for(const x of V.arrows){const C=te(x.at,x.dir,2,.75,.05);C&&ee.push(C)}if(ee.length){const x=n.mergeGeometries(ee,!1);for(const C of ee)C.dispose();if(x){M(x);const C=new s.Mesh(x,M(new s.MeshBasicMaterial({color:Y})));C.userData.tooltip=V.tooltip,B.push(C),I.add(C)}}const xe=V.points[Math.floor(V.points.length/3)];xe&&Oe(\`truck route \${V.route}\${V.verdict==="clear"?"":" ⚠"}\`,[xe[0],.6,xe[2]],Ct.other,V.verdict!=="clear")}for(const V of t.carParks)for(const Y of V.bays){const[ne,ee]=Y.dir,xe=-ee,x=ne,C=Y.w/2,z=Y.l/2,G=.215,O=(Se,Me)=>[Y.at[0]+ne*Se*z+xe*Me*C,Y.at[2]+ee*Se*z+x*Me*C],ce=(Se,Me)=>{const ze=Math.hypot(Me[0]-Se[0],Me[1]-Se[1]),He=new s.PlaneGeometry(ze,.2);He.rotateX(-Math.PI/2),He.rotateY(-Math.atan2(Me[1]-Se[1],Me[0]-Se[0])),He.translate((Se[0]+Me[0])/2,G,(Se[1]+Me[1])/2),J.push(He)};ce(O(-1,-1),O(1,-1)),ce(O(-1,1),O(1,1)),ce(O(-1,-1),O(-1,1));const me=te([Y.at[0]+ne*z*.45,0,Y.at[2]+ee*z*.45],[ne,ee],1,.45,G);me&&q.push(me)}if(J.length){const V=n.mergeGeometries(J,!1);for(const Y of J)Y.dispose();V&&(M(V),I.add(new s.Mesh(V,M(new s.MeshLambertMaterial({color:zn.edge,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})))))}if(fe.length){const V=n.mergeGeometries(fe,!1);for(const Y of fe)Y.dispose();V&&(M(V),I.add(new s.Mesh(V,M(new s.MeshLambertMaterial({color:zn.edge})))))}if(q.length){const V=n.mergeGeometries(q,!1);for(const Y of q)Y.dispose();V&&(M(V),I.add(new s.Mesh(V,M(new s.MeshLambertMaterial({color:2853438})))))}for(const V of t.windsocks){const Y=new s.Group,ne=2.4;for(let ee=0;ee<4;ee++){const xe=.45-.07*ee,x=.45-.07*(ee+1),C=new s.Mesh(M(new s.CylinderGeometry(x,xe,ne/4,16,1,!0)),Re([ee%2?zn.barrierWhite:zn.barrierRed,0,.7]));C.position.set(0,ne/8+ee*ne/4,0),Y.add(C)}Y.position.set(V.top[0],V.top[1]-.6,V.top[2]),Y.quaternion.setFromUnitVectors(new s.Vector3(0,1,0),new s.Vector3(V.dir[0],-.25,V.dir[1]).normalize()),I.add(Y)}}for(const w of t.barriers){const[H,,te]=w.post,[J,q,fe]=w.end,he=new s.Mesh(M(new s.BoxGeometry(.35,q+.2,.35)),Ue.get("steel"));he.position.set(H,(q+.2)/2,te),he.castShadow=!0,I.add(he);const V=Math.hypot(J-H,fe-te),Y=Math.max(2,Math.round(V/.6)),ne=Re([zn.barrierRed,.1,.5]),ee=Re([zn.barrierWhite,.1,.5]);for(let xe=0;xe<Y;xe++){const x=xe/Y,C=(xe+1)/Y,z=new s.Mesh(M(new s.BoxGeometry(V/Y,.1,.1)),xe%2?ee:ne);z.position.set(H+(J-H)*(x+C)/2,q,te+(fe-te)*(x+C)/2),z.rotation.y=-Math.atan2(fe-te,J-H),z.castShadow=!0,I.add(z)}}if(t.fence){const w=t.fence,H=64,te=document.createElement("canvas");te.width=H,te.height=H;const J=te.getContext("2d");J&&(J.clearRect(0,0,H,H),J.strokeStyle="rgba(120,128,136,0.95)",J.lineWidth=3,J.beginPath(),J.moveTo(0,0),J.lineTo(H,H),J.moveTo(H,0),J.lineTo(0,H),J.stroke());const q=M(new s.CanvasTexture(te));q.colorSpace=s.SRGBColorSpace,q.wrapS=s.RepeatWrapping,q.wrapT=s.RepeatWrapping;const fe=M(new s.MeshLambertMaterial({map:q,transparent:!0,alphaTest:.3,side:s.DoubleSide})),he=Ue.get("steel");for(const[Y,ne]of w.runs){const ee=Math.hypot(ne[0]-Y[0],ne[2]-Y[2]),xe=M(new s.PlaneGeometry(ee,w.height)),x=xe.getAttribute("uv");for(let G=0;G<x.count;G++)x.setXY(G,x.getX(G)*ee/.25,x.getY(G)*w.height/.25);x.needsUpdate=!0;const C=new s.Mesh(xe,fe);C.position.set((Y[0]+ne[0])/2,w.height/2,(Y[2]+ne[2])/2),C.rotation.y=-Math.atan2(ne[2]-Y[2],ne[0]-Y[0]),C.userData.tooltip=w.tooltip,B.push(C),I.add(C);const z=new s.Mesh(M(new s.CylinderGeometry(.03,.03,ee,6)),he);z.rotation.z=Math.PI/2,z.rotation.y=-Math.atan2(ne[2]-Y[2],ne[0]-Y[0]),z.position.set((Y[0]+ne[0])/2,w.height,(Y[2]+ne[2])/2),I.add(z)}const V=M(new s.CylinderGeometry(.04,.04,w.height+.1,6));for(const Y of w.posts){const ne=new s.Mesh(V,he);ne.position.set(Y[0],(w.height+.1)/2,Y[2]),ne.castShadow=!0,I.add(ne)}}for(const w of t.bunds){const H=w.flagged?Xe.flagged:Ue.get("concrete");for(const[J,q]of w.runs){const fe=Math.hypot(q[0]-J[0],q[2]-J[2]);if(fe<1e-6)continue;const he=new s.Mesh(M(new s.BoxGeometry(fe+Ro,w.height,Ro)),H);he.position.set((J[0]+q[0])/2,w.height/2,(J[2]+q[2])/2),he.rotation.y=-Math.atan2(q[2]-J[2],q[0]-J[0]),he.castShadow=!0,he.receiveShadow=!0,he.userData.tooltip=w.tooltip,B.push(he),I.add(he)}if(w.pit){const J=new s.Mesh(M(new s.BoxGeometry(w.pit.sizeX,w.pit.depth,w.pit.sizeZ)),M(new s.MeshStandardMaterial({color:3817284,roughness:.95,metalness:0,transparent:!0,opacity:.85})));J.position.set(w.pit.at[0],-w.pit.depth/2+.01,w.pit.at[2]),J.userData.tooltip=w.tooltip,B.push(J),I.add(J),Oe(\`pit of \${w.bund}\`,[w.pit.at[0],.3,w.pit.at[2]],Ct.other)}const te=w.runs[0];te&&Oe(w.label,[te[0][0],w.height+.4,te[0][2]],w.flagged?Ct.finding:Ct.other,w.flagged)}for(const w of t.crossings){const[H,te,J]=w.at,[q,,fe]=w.outside,he=Math.hypot(q-H,fe-J),V=Re([w.labelled?4804695:14239759,.4,.6]),Y=new s.Mesh(M(new s.CylinderGeometry(.22,.22,he,12)),V);Y.rotation.z=Math.PI/2,Y.rotation.y=-Math.atan2(fe-J,q-H),Y.position.set((H+q)/2,te,(J+fe)/2),Y.castShadow=!0,Y.userData.tooltip=w.tooltip,B.push(Y),I.add(Y);for(const C of[.5,1]){const z=H+(q-H)*C,G=J+(fe-J)*C,O=new s.Mesh(M(new s.BoxGeometry(.25,te,.25)),Ue.get("steel"));O.position.set(z,te/2,G),I.add(O)}const[ne,,ee]=w.sign,xe=new s.Mesh(M(new s.BoxGeometry(.12,1.8,.12)),Ue.get("steel"));xe.position.set(ne,.9,ee),I.add(xe);const x=new s.Mesh(M(new s.BoxGeometry(1.4,.8,.06)),Re([w.labelled?1667522:14239759,.2,.6]));x.position.set(ne,1.8,ee),x.rotation.y=-Math.atan2(fe-J,q-H)+Math.PI/2,x.userData.tooltip=w.tooltip,B.push(x),I.add(x),Oe(w.text,[ne,2.6,ee],Ct.item,!w.labelled)}for(const w of t.unrouted){const H=new s.Line(new s.BufferGeometry().setFromPoints([new s.Vector3(...w.at),new s.Vector3(...w.top)]),new s.LineDashedMaterial({color:bn.link,dashSize:.4,gapSize:.3,fog:!1,toneMapped:!1}));H.computeLineDistances(),I.add(H);const te=new s.Mesh(M(new s.SphereGeometry(.45,16,12)),new s.MeshBasicMaterial({color:bn.link,fog:!1,toneMapped:!1}));te.position.set(...w.at),te.userData.tooltip=w.tooltip,B.push(te),I.add(te),Oe(w.text,w.top,Ct.finding,!0)}const je=new s.Group;I.add(je);for(const w of t.zones){const H=new s.CylinderGeometry(w.radius,w.radius,w.height,48,1,!0),te=new s.Mesh(H,new s.MeshBasicMaterial({color:bn.zone,transparent:!0,opacity:w.opacity,fog:!1,toneMapped:!1,side:s.DoubleSide,depthWrite:!1,wireframe:w.edge==="wire"}));te.position.set(...w.center),je.add(te);const J=q=>{const fe=[];for(let V=0;V<=64;V++){const Y=V/64*2*Math.PI;fe.push(new s.Vector3(w.center[0]+w.radius*Math.cos(Y),q,w.center[2]+w.radius*Math.sin(Y)))}const he=new s.Line(new s.BufferGeometry().setFromPoints(fe),w.edge==="dashed"?new s.LineDashedMaterial({color:bn.zone,dashSize:.8,gapSize:.6,fog:!1,toneMapped:!1}):new s.LineBasicMaterial({color:bn.zone,fog:!1,toneMapped:!1}));he.computeLineDistances(),je.add(he)};J(w.center[1]-w.height/2),J(w.center[1]+w.height/2),Oe(w.label,[w.center[0]+w.radius,w.center[1]+w.height/2,w.center[2]],Ct.zone,!1,"zone")}for(const w of t.links){const H=new s.Line(new s.BufferGeometry().setFromPoints([new s.Vector3(...w.from),new s.Vector3(...w.to)]),new s.LineDashedMaterial({color:bn.link,dashSize:.4,gapSize:.3,fog:!1,toneMapped:!1}));H.computeLineDistances(),I.add(H),Oe(w.label,[(w.from[0]+w.to[0])/2,(w.from[1]+w.to[1])/2+.5,(w.from[2]+w.to[2])/2],Ct.finding,!0)}const $e=new s.Group;if(I.add($e),t.rack){const w=t.rack,H=w.tiers[w.tiers.length-1],te=[],J=[],q=(he,V,Y,ne,ee,xe,x)=>{const C=new s.BoxGeometry(he,V,Y);C.translate(ne,ee,xe),x.push(C)},fe=2*w.halfWidth+.4;for(const he of w.portals){for(const V of[-w.halfWidth-.2,w.halfWidth+.2])q(.3,H,.3,he,H/2,w.zc+V,te),q(.7,.3,.7,he,.15,w.zc+V,J);for(const V of w.tiers)q(.25,.3,fe,he,V-.35,w.zc,te)}for(const he of w.tiers)for(const V of[-w.halfWidth-.2,w.halfWidth+.2])q(w.x1-w.x0,.22,.18,(w.x0+w.x1)/2,he-.35,w.zc+V,te);for(const[he,V]of[[te,"steel"],[J,"concrete"]]){const Y=q0(n.mergeGeometries,he);for(const ee of he)ee.dispose();if(!Y)continue;M(Y);const ne=new s.Mesh(Y,Ue.get(V));ne.castShadow=!0,ne.receiveShadow=!0,$e.add(ne)}Oe(w.label,[w.x0,H+1,w.zc],Ct.other)}const ke=Re([4147023,.75,.4]);for(const w of t.junctions){const H=new s.Mesh(M(new s.SphereGeometry(.45,20,14)),ke);H.position.set(...w.at),H.castShadow=!0,H.userData.tooltip=[w.label,"a junction on the rack: an unsized unit the pipes pass through"],$e.add(H),B.push(H),Oe(w.label,[w.at[0],w.at[1]+.9,w.at[2]],Ct.other)}const at=new Map;for(const w of["liquid","vapour","twoPhase","unknown"])at.set(w,M(new s.MeshStandardMaterial({color:Po[w],transparent:!0,opacity:.45,roughness:.2,metalness:.1,depthWrite:!1})));const Be=(w,H)=>{const te=w.map(ne=>new s.Vector3(...ne)),J=te.filter((ne,ee)=>ee===0||ne.distanceTo(te[ee-1])>1e-6);if(J.length<2)return null;const q=[],fe=J.map(()=>0),he=J.map(()=>0),V=H<.2?10:14;for(let ne=1;ne+1<J.length;ne++){const ee=J[ne].clone().sub(J[ne-1]),xe=J[ne+1].clone().sub(J[ne]),x=ee.length(),C=xe.length();ee.normalize(),xe.normalize();const z=Math.max(-1,Math.min(1,ee.dot(xe))),G=Math.acos(z);if(G<.001||G>Math.PI-.001)continue;let O=Math.max(4*H,.6);const ce=.5*Math.min(x,C);let me=O*Math.tan(G/2);me>ce&&(me=ce,O=me/Math.tan(G/2)),he[ne-1]=me,fe[ne]=me;const Se=xe.clone().sub(ee.clone().multiplyScalar(z)).normalize(),Me=Se.clone().negate(),ze=new s.Vector3().crossVectors(Me,ee),He=J[ne].clone().sub(ee.clone().multiplyScalar(me)).add(Se.clone().multiplyScalar(O)),Ce=new s.TorusGeometry(O,H,V,Math.max(6,Math.round(G*8)),G);Ce.applyMatrix4(new s.Matrix4().makeBasis(Me,ee,ze).setPosition(He)),q.push(Ce)}for(let ne=0;ne+1<J.length;ne++){const ee=J[ne],x=J[ne+1].clone().sub(ee),C=x.length()-fe[ne]-he[ne];if(C<1e-4)continue;x.normalize();const z=new s.CylinderGeometry(H,H,C,V,1,!0);z.applyQuaternion(new s.Quaternion().setFromUnitVectors(mt,x));const G=ee.clone().add(x.clone().multiplyScalar(fe[ne]+C/2));z.translate(G.x,G.y,G.z),q.push(z)}if(q.length===0)return null;const Y=n.mergeGeometries(q,!1);for(const ne of q)ne.dispose();return Y},R=[],T=M(new s.SphereGeometry(.24,10,8)),W=M(new s.OctahedronGeometry(.3)),re=M(new s.BoxGeometry(.32,.32,.32)),oe=new Map,ie=[];for(const w of t.pipes){const H=Be(w.points,w.radius);if(H){M(H);const q=new s.Mesh(H,at.get(w.phase));q.userData.tooltip=w.tooltip,$e.add(q),B.push(q)}let te=0;for(let q=1;q<w.points.length;q++){const fe=w.points[q-1],he=w.points[q];te+=Math.hypot(he[0]-fe[0],he[1]-fe[1],he[2]-fe[2])}const J=Math.max(3,Math.min(60,Math.round(te/2.5)));for(let q=0;q<J;q++){const[fe,he]=w.phase==="liquid"?[T,"s"]:w.phase==="vapour"?[W,"o"]:w.phase==="twoPhase"?q%2?[T,"s"]:[W,"o"]:[re,"c"],V=\`\${w.phase}:\${he}\`,Y=oe.get(V)??{geo:fe,phase:w.phase,n:0};Y.n+=1,oe.set(V,Y),ie.push({key:V,s:q*te/J,speed:w.speed,points:w.points})}}const De=new Map,_e=new Map;for(const[w,H]of oe){const te=M(new s.MeshStandardMaterial({color:Po[H.phase],emissive:Po[H.phase],emissiveIntensity:.45,roughness:.35})),J=new s.InstancedMesh(H.geo,te,H.n);J.userData.noAO=!0,De.set(w,J),_e.set(w,0),$e.add(J)}const Ee=new s.Matrix4;for(const w of ie){const H=De.get(w.key),te=_e.get(w.key);_e.set(w.key,te+1);const J=yr(w.points,w.s);H.setMatrixAt(te,Ee.makeTranslation(J[0],J[1],J[2])),R.push({mesh:H,index:te,s:w.s,speed:w.speed,points:w.points})}if(t.wind){const w=new s.Vector3(...t.wind.tail),te=new s.Vector3(...t.wind.head).clone().sub(w),J=te.length();I.add(new s.ArrowHelper(te.normalize(),w,J,bn.wind,Math.min(.25*J,6),Math.min(.12*J,3))),Oe(t.wind.label,t.wind.tail,Ct.other)}Oe("N ↑ (plan +y)",[t.fitMin[0],.1,t.fitMin[2]-2],Ct.other);const Qe=Math.max(S,t.fitMax[0]-t.fitMin[0],t.fitMax[2]-t.fitMin[2])*50,le=new s.PerspectiveCamera(dh,h/d,Math.max(.1,S/2e3),Qe),Ae=new r(le,g.domElement);Ae.maxPolarAngle=Math.PI/2-.02;let Fe=null,We=!n.post;const Pe=()=>{if(We||!n.post)return null;try{const w=n.post,H=Math.max(e.clientWidth,320),te=c(),J=new s.WebGLRenderTarget(H*_(),te*_(),{type:s.HalfFloatType,samples:4}),q=new w.EffectComposer(g,J);q.setPixelRatio(_()),q.addPass(new w.RenderPass(I,le));const fe=new w.GTAOPass(I,le,H,te);fe.updateGtaoMaterial({radius:1.2,distanceExponent:1,thickness:1,scale:1}),fe.blendIntensity=.9;const he=new Map;let V=null;if(fe.overrideVisibility=()=>{V=I.background,I.background=null,I.traverse(Y=>{he.set(Y,Y.visible);const ne=Y.material;!Y.isLine&&!Y.userData.noAO&&!(ne&&!Array.isArray(ne)&&ne.transparent)||(Y.visible=!1)})},fe.restoreVisibility=()=>{I.traverse(Y=>{const ne=he.get(Y);ne!==void 0&&(Y.visible=ne)}),he.clear(),I.background=V},q.addPass(fe),bt.length>0){const Y=new w.OutlinePass(new s.Vector2(H,te),I,le,bt);Y.visibleEdgeColor.set(bn.outline),Y.hiddenEdgeColor.set(9054720),Y.edgeStrength=4,Y.edgeThickness=1.5,q.addPass(Y)}return q.addPass(new w.OutputPass),q.setSize(H,te),q}catch{return We=!0,null}};let Ze=i.toggles;const Ge=new s.Vector3,rt=()=>{const w=g.domElement.clientWidth||h,H=g.domElement.clientHeight||d,te=[];Ie.forEach((q,fe)=>{if(!(q.group!=="zone"||Ze.zones&&Ze.zoneLabels)){q.el.style.visibility="hidden";return}if(q.obj.getWorldPosition(Ge),Ge.project(le),Ge.z>1||Ge.z<-1){q.el.style.visibility="hidden";return}q.w>0||(q.w=q.el.offsetWidth,q.h=q.el.offsetHeight),te.push({key:String(fe),priority:q.priority,x:(Ge.x+1)/2*w,y:(1-Ge.y)/2*H,w:q.w||60,h:q.h||16})});const J=Wg(te);for(const q of te)Ie[Number(q.key)].el.style.visibility=J.has(q.key)?"visible":"hidden"},F=()=>{p==="high"&&(Fe??(Fe=Pe())),p==="high"&&Fe?Fe.render():g.render(I,le),m.render(I,le),rt()},ve=w=>{const H=Math.max(e.clientWidth,320),{position:te,target:J}=Xg(t.fitMin,t.fitMax,w,dh,H/c());le.position.set(...te),Ae.target.set(...J),Ae.update(),F()};Ae.addEventListener("change",F);let $=0,ae=0;const we=w=>{const H=ae?Math.min(.05,(w-ae)/1e3):0;ae=w;for(const te of R){te.s+=te.speed*H;const J=yr(te.points,te.s);te.mesh.setMatrixAt(te.index,Ee.makeTranslation(J[0],J[1],J[2]))}for(const te of De.values())te.instanceMatrix.needsUpdate=!0;F(),$=requestAnimationFrame(we)},Te=w=>{const H=!Ze||Ze.pipes!==w.pipes;Ze=w,je.visible=w.zones,$e.visible=w.pipes,H&&(g.shadowMap.needsUpdate=!0);const te=w.flow&&w.pipes&&R.length>0;te&&!$&&(ae=0,$=requestAnimationFrame(we)),!te&&$&&(cancelAnimationFrame($),$=0),F()},Ye=()=>{const w=Math.max(e.clientWidth,320),H=c();g.setSize(w,H),Fe?.setSize(w,H),m.setSize(w,H),le.aspect=w/H,le.updateProjectionMatrix()},Et=w=>{w!==p&&(p=w,g.setPixelRatio(_()),Fe?.setPixelRatio(_()),g.shadowMap.enabled=w==="high",g.shadowMap.needsUpdate=!0,I.traverse(H=>{const te=H.material;Array.isArray(te)?te.forEach(J=>{J.needsUpdate=!0}):te&&(te.needsUpdate=!0)}),Ye(),F())},Nt=new s.Raycaster,ot=new s.Vector2,Jt=w=>{const H=g.domElement.getBoundingClientRect();ot.set((w.clientX-H.left)/H.width*2-1,-((w.clientY-H.top)/H.height)*2+1),Nt.setFromCamera(ot,le);const J=Nt.intersectObjects(B,!1).find(he=>{for(let V=he.object;V;V=V.parent)if(!V.visible)return!1;return!0})?.object.userData.tooltip;if(!J){u.style.display="none";return}u.replaceChildren(...J.map((he,V)=>{const Y=document.createElement("div");return Y.textContent=he,V===0&&(Y.style.fontWeight="700"),Y})),u.style.display="block";const q=w.clientX-H.left+14,fe=w.clientY-H.top+14;u.style.left=\`\${Math.min(q,Math.max(0,H.width-330))}px\`,u.style.top=\`\${Math.min(fe,Math.max(0,H.height-120))}px\`},un=()=>{u.style.display="none"};g.domElement.addEventListener("pointermove",Jt),g.domElement.addEventListener("pointerleave",un);const Ms=new ResizeObserver(()=>{Ye(),F()});return Ms.observe(e),i.extend?.({THREE:s,world:I,pickables:B,redraw:()=>F(),label:(w,H,te,J)=>(Oe(w,H,te,J),Ie[Ie.length-1].obj)}),ve(i.view),Te(i.toggles),{setToggles:Te,setQuality:Et,fit:ve,dispose:()=>{$&&cancelAnimationFrame($),Ms.disconnect(),g.domElement.removeEventListener("pointermove",Jt),g.domElement.removeEventListener("pointerleave",un),Ae.dispose(),Fe?.dispose(),I.traverse(w=>{const H=w;H.geometry?.dispose?.();const te=H.material;Array.isArray(te)?te.forEach(J=>J.dispose()):te?.dispose?.()});for(const w of E)w.dispose();g.dispose(),e.replaceChildren()}}}const Z0=Zc,J0={THREE:{ACESFilmicToneMapping:Hr,ArrowHelper:km,BoxGeometry:di,BufferGeometry:Ht,CanvasTexture:Rm,CylinderGeometry:ur,DirectionalLight:Fm,DoubleSide:an,Fog:lo,Group:ds,HalfFloatType:$t,LineSegments:bm,HemisphereLight:Im,InstancedMesh:wm,Line:cr,LineBasicMaterial:rr,LineDashedMaterial:Lm,LineLoop:Am,Matrix4:nt,Mesh:xt,MeshBasicMaterial:ls,MeshLambertMaterial:Dm,MeshStandardMaterial:go,OctahedronGeometry:fo,PCFSoftShadowMap:Ho,PerspectiveCamera:nn,PlaneGeometry:hs,PMREMGenerator:no,Quaternion:Vn,Raycaster:Bm,RepeatWrapping:Gn,Scene:_c,SphereGeometry:po,SRGBColorSpace:Qt,TorusGeometry:mo,Vector2:Le,Vector3:N,WebGLRenderer:Em,WebGLRenderTarget:Ft},OrbitControls:Vm,CSS2DRenderer:ig,CSS2DObject:ng,RoomEnvironment:sg,mergeGeometries:rg,post:{EffectComposer:ug,RenderPass:dg,GTAOPass:Tn,OutlinePass:Jn,OutputPass:vg}};function Q0(){for(const n of Array.from(document.querySelectorAll("details[data-section]"))){const e=n.dataset.key;e&&(y0(e)&&(n.open=!M0(e)),n.addEventListener("toggle",()=>S0(e,!n.open)))}}function e_(n){const e=document.getElementById(Tt.resize),t=()=>b0(n.getBoundingClientRect().top+window.scrollY,window.innerHeight),i=Number(Io(No.layoutExportViewHeight)??NaN),s=a=>{n.style.height=\`\${a}px\`};if(s(Number.isFinite(i)&&i>0?Sr(i,window.innerHeight,t()):t()),!e)return;const r=a=>{const o=Sr(a,window.innerHeight,t());s(o),Uo(No.layoutExportViewHeight,String(o))};e.addEventListener("pointerdown",a=>{a.preventDefault();const o=a.clientY,l=n.getBoundingClientRect().height;try{e.setPointerCapture(a.pointerId)}catch{}const c=d=>s(Sr(l+d.clientY-o,window.innerHeight,l)),h=d=>{e.removeEventListener("pointermove",c),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),r(l+d.clientY-o)};e.addEventListener("pointermove",c),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}),e.addEventListener("keydown",a=>{const o=n.getBoundingClientRect().height;a.key==="ArrowDown"?(a.preventDefault(),r(o+16)):a.key==="ArrowUp"?(a.preventDefault(),r(o-16)):(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),r(t()))}),e.addEventListener("dblclick",()=>{s(t()),Uo(No.layoutExportViewHeight,"")})}function t_(){const n=document.getElementById(Tt.full),e=document.getElementById(Tt.stage);if(!n||!e)return;const t=()=>{const i=!!document.fullscreenElement||e.classList.contains("max");n.textContent=i?"Exit full screen":"Full screen",n.setAttribute("aria-pressed",i?"true":"false")};n.addEventListener("click",()=>{if(document.fullscreenElement){document.exitFullscreen?.();return}if(e.classList.contains("max")){e.classList.remove("max"),t();return}w0(document,e)==="api"?e.requestFullscreen().catch(()=>{e.classList.add("max"),t()}):(e.classList.add("max"),t())}),document.addEventListener("fullscreenchange",t),window.addEventListener("keydown",i=>{i.key==="Escape"&&e.classList.contains("max")&&(e.classList.remove("max"),t())})}function fh(){Q0();const n=document.getElementById(Tt.data),e=document.getElementById(Tt.view),t=document.getElementById(Tt.error);if(!n||!e)return;const i=v=>{t&&(t.textContent=v,t.hidden=!1)};let s;try{s=Zc(JSON.parse(n.textContent??""))}catch(v){i(\`The embedded layout could not be read (\${v instanceof Error?v.message:String(v)}).\`);return}if(!s){i("The embedded layout places no item, so there is nothing to draw.");return}let r=null;const a=document.getElementById(Tt.building),o=v=>document.getElementById(\`\${Tt.buildingToggle}-\${v}\`),l=()=>Object.fromEntries(Xc.map(v=>[v,o(v)?.checked??!0]));if(a)try{const v=Sg(JSON.parse(a.textContent??""));if(v){const U=Pg(v);s=Dg(s,U),r=v0(U,l(),o("rooms")?.checked??!0)}}catch(v){i(\`The embedded GMP interior could not be read (\${v instanceof Error?v.message:String(v)}).\`)}e_(e),t_();const c=v=>document.getElementById(v),h=c(Tt.flow);h&&d0()&&(h.checked=!1,h.title="Your system asks for reduced motion, so the flow starts off");const d=()=>({pipes:c(Tt.pipes)?.checked??!0,flow:h?.checked??!1,zones:c(Tt.zones)?.checked??!0,zoneLabels:c(Tt.zoneLabels)?.checked??!1}),p=()=>{const v=document.querySelector(\`input[name="\${Tt.preset}"]:checked\`);return v&&(v.value==="plan"||v.value==="elevation")?v.value:"3d"},f=v=>document.getElementById(\`\${Tt.quality}-\${v}\`),_=p0(),g=f(_);g&&(g.checked=!0);const m=()=>f("fast")?.checked?"fast":"high";let u;try{u=K0(J0,e,s,{height:"fill",toggles:d(),view:p(),quality:m(),...r?{extend:r.extend}:{}})}catch(v){i(\`The 3D view could not start (\${v instanceof Error?v.message:String(v)}).  It needs WebGL; the tables below carry every position, pipe and finding the engine published.\`);return}const E=c(Tt.zoneLabels),M=()=>{const v=d();E&&(E.disabled=!v.zones),u.setToggles(v)};for(const v of[Tt.pipes,Tt.flow,Tt.zones,Tt.zoneLabels])c(v)?.addEventListener("change",M);document.getElementById(Tt.fit)?.addEventListener("click",()=>u.fit(p()));for(const v of Array.from(document.querySelectorAll(\`input[name="\${Tt.preset}"]\`)))v.addEventListener("change",()=>u.fit(p()));for(const v of Array.from(document.querySelectorAll(\`input[name="\${Tt.quality}"]\`)))v.addEventListener("change",()=>{const U=m();m0(U),u.setQuality(U)});if(r){const v=r;o("rooms")?.addEventListener("change",()=>v.setRooms(o("rooms")?.checked??!0));for(const U of Xc)o(U)?.addEventListener("change",()=>v.setFlows(l()))}M()}return typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fh):fh()),Ar.sceneOf=Z0,Object.defineProperty(Ar,Symbol.toStringTag,{value:"Module"}),Ar}({});
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
