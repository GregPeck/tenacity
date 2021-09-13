//
// Bruitage
//
/**
   * Parses a settings array into the parameters
   * @param array Array of the settings values, where elements 0 - 23 are
   *                a: waveType
   *                b: attackTime
   *                c: sustainTime
   *                d: sustainPunch
   *                e: decayTime
   *                f: startFrequency
   *                g: minFrequency
   *                h: slide
   *                i: deltaSlide
   *                j: vibratoDepth
   *                k: vibratoSpeed
   *                l: changeAmount
   *                m: changeSpeed
   *                n: squareDuty
   *                o: dutySweep
   *                p: repeatSpeed
   *                q: phaserOffset
   *                r: phaserSweep
   *                s: lpFilterCutoff
   *                t: lpFilterCutoffSweep
   *                u: lpFilterResonance
   *                v: hpFilterCutoff
   *                w: hpFilterCutoffSweep
   *                x: masterVolume
   * @return If the string successfully parsed
   */
  
function SfxrP(){this.set=function(a){for(var b=0;b<24;b++)this[String.fromCharCode(97+b)]=a[b]||0;this.c<.01&&(this.c=.01);var c=this.b+this.c+this.e;if(c<.18){var d=.18/c;this.b*=d,this.c*=d,this.e*=d}}}function sy(){this._p=new SfxrP;var a,b,c,d,e,f,g,h,i,j,k,l;this.reset=function(){var a=this._p;d=100/(a.f*a.f+.001),e=100/(a.g*a.g+.001),f=1-a.h*a.h*a.h*.01,g=-a.i*a.i*a.i*1e-6,a.a||(k=.5-a.n/2,l=5e-5*-a.o),h=1+a.l*a.l*(a.l>0?-.9:10),i=0,j=1==a.m?0:(1-a.m)*(1-a.m)*2e4+32},this.totalReset=function(){this.reset();var d=this._p;return a=d.b*d.b*1e5,b=d.c*d.c*1e5,c=d.e*d.e*1e5+12,3*((a+b+c)/3|0)},this.sW=function(m,n){var o=this._p,p=1!=o.s||o.v,q=o.v*o.v*.1,r=1+3e-4*o.w,s=o.s*o.s*o.s*.1,t=1+1e-4*o.t,u=1!=o.s,v=o.x*o.x,w=o.g,x=o.q||o.r,y=o.r*o.r*o.r*.2,z=o.q*o.q*(o.q<0?-1020:1020),A=o.p?((1-o.p)*(1-o.p)*2e4|0)+32:0,B=o.d,C=o.j/2,D=o.k*o.k*.01,E=o.a,F=a,G=1/a,H=1/b,I=1/c,J=5/(1+o.u*o.u*20)*(.01+s);J>.8&&(J=.8),J=1-J;for(var Q,S,U,W,Y,Z,K=!1,L=0,M=0,N=0,O=0,P=0,R=0,T=0,V=0,X=0,$=0,_=new Array(1024),aa=new Array(32),ba=_.length;ba--;)_[ba]=0;for(var ba=aa.length;ba--;)aa[ba]=2*Math.random()-1;for(var ba=0;ba<n;ba++){if(K)return ba;if(A&&++X>=A&&(X=0,this.reset()),j&&++i>=j&&(j=0,d*=h),f+=g,d*=f,d>e&&(d=e,w>0&&(K=!0)),S=d,C>0&&($+=D,S*=1+Math.sin($)*C),S|=0,S<8&&(S=8),E||(k+=l,k<0?k=0:k>.5&&(k=.5)),++M>F)switch(M=0,++L){case 1:F=b;break;case 2:F=c}switch(L){case 0:N=M*G;break;case 1:N=1+2*(1-M*H)*B;break;case 2:N=1-M*I;break;case 3:N=0,K=!0}x&&(z+=y,U=0|z,U<0?U=-U:U>1023&&(U=1023)),p&&r&&(q*=r,q<1e-5?q=1e-5:q>.1&&(q=.1)),Z=0;for(var ca=8;ca--;){if(T++,T>=S&&(T%=S,3==E))for(var da=aa.length;da--;)aa[da]=2*Math.random()-1;switch(E){case 0:Y=T/S<k?.5:-.5;break;case 1:Y=1-T/S*2;break;case 2:W=T/S,W=6.28318531*(W>.5?W-1:W),Y=1.27323954*W+.405284735*W*W*(W<0?1:-1),Y=.225*((Y<0?-1:1)*Y*Y-Y)+Y;break;case 3:Y=aa[Math.abs(32*T/S|0)]}p&&(Q=R,s*=t,s<0?s=0:s>.1&&(s=.1),u?(P+=(Y-R)*s,P*=J):(R=Y,P=0),R+=P,O+=R-Q,O*=1-q,Y=O),x&&(_[V%1024]=Y,Y+=_[(V-U+1024)%1024],V++),Z+=Y}Z*=.125*N*v,m[ba]=Z>=1?1:Z<=-1?-1:Z}return n}}var synth=new sy;window.jsfxr=function(a){window._audioContext=window._audioContext||new AudioContext;var b=window._audioContext;synth._p.set(a);var c=synth.totalReset(),d=c+1>>1<<1,e=b.createBuffer(1,d,b.sampleRate),f=e.getChannelData(0);2*synth.sW(f,c);return e},window.playSound=function(n){if(!sound){return;}jsfxr(n);var o=window._audioContext,e=o.createBufferSource();e.buffer=jsfxr(n),e.loop=!1,e.connect(o.destination),e.start(o.currentTime);return [e.buffer,o,e]};
	
//
// Méthodes 3D
//									
glMatrixArrayType="undefined"!=typeof Float32Array?Float32Array:"undefined"!=typeof WebGLFloatArray?WebGLFloatArray:Array;var mat3={};mat3.create=function(r){var t=new glMatrixArrayType(9);return r&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9]),t},mat3.transpose=function(r,t){if(!t||r==t){var a=r[1],n=r[2],e=r[5];return r[1]=r[3],r[2]=r[6],r[3]=a,r[5]=r[7],r[6]=n,r[7]=e,r}return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],t};var mat4={};mat4.create=function(r){var t=new glMatrixArrayType(16);return r&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t},mat4.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},mat4.toInverseMat3=function(r,t){var a=r[0],n=r[1],e=r[2],u=r[4],i=r[5],o=r[6],f=r[8],m=r[9],c=r[10],v=c*i-o*m,y=-c*u+o*f,l=m*u-i*f,s=a*v+n*y+e*l;return s?(s=1/s,t||(t=mat3.create()),t[0]=v*s,t[1]=(-c*n+e*m)*s,t[2]=(o*n-e*i)*s,t[3]=y*s,t[4]=(c*a-e*f)*s,t[5]=(-o*a+e*u)*s,t[6]=l*s,t[7]=(-m*a+n*f)*s,t[8]=(i*a-n*u)*s,t):null},mat4.translate=function(r,t,a){var n=t[0],e=t[1];if(t=t[2],!a||r==a)return r[12]=r[0]*n+r[4]*e+r[8]*t+r[12],r[13]=r[1]*n+r[5]*e+r[9]*t+r[13],r[14]=r[2]*n+r[6]*e+r[10]*t+r[14],r[15]=r[3]*n+r[7]*e+r[11]*t+r[15],r;var u=r[0],i=r[1],o=r[2],f=r[3],m=r[4],c=r[5],v=r[6],y=r[7],l=r[8],s=r[9],M=r[10],p=r[11];return a[0]=u,a[1]=i,a[2]=o,a[3]=f,a[4]=m,a[5]=c,a[6]=v,a[7]=y,a[8]=l,a[9]=s,a[10]=M,a[11]=p,a[12]=u*n+m*e+l*t+r[12],a[13]=i*n+c*e+s*t+r[13],a[14]=o*n+v*e+M*t+r[14],a[15]=f*n+y*e+p*t+r[15],a},mat4.rotate=function(r,t,a,n){var e=a[0],u=a[1];a=a[2];var i=Math.sqrt(e*e+u*u+a*a);if(!i)return null;1!=i&&(e*=i=1/i,u*=i,a*=i);var o=Math.sin(t),f=Math.cos(t),m=1-f;t=r[0],i=r[1];var c=r[2],v=r[3],y=r[4],l=r[5],s=r[6],M=r[7],p=r[8],A=r[9],d=r[10],h=r[11],F=e*e*m+f,g=u*e*m+a*o,x=a*e*m-u*o,T=e*u*m-a*o,b=u*u*m+f,w=a*u*m+e*o,G=e*a*m+u*o;return e=u*a*m-e*o,u=a*a*m+f,n?r!=n&&(n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]):n=r,n[0]=t*F+y*g+p*x,n[1]=i*F+l*g+A*x,n[2]=c*F+s*g+d*x,n[3]=v*F+M*g+h*x,n[4]=t*T+y*b+p*w,n[5]=i*T+l*b+A*w,n[6]=c*T+s*b+d*w,n[7]=v*T+M*b+h*w,n[8]=t*G+y*e+p*u,n[9]=i*G+l*e+A*u,n[10]=c*G+s*e+d*u,n[11]=v*G+M*e+h*u,n},mat4.frustum=function(r,t,a,n,e,u,i){i||(i=mat4.create());var o=t-r,f=n-a,m=u-e;return i[0]=2*e/o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*e/f,i[6]=0,i[7]=0,i[8]=(t+r)/o,i[9]=(n+a)/f,i[10]=-(u+e)/m,i[11]=-1,i[12]=0,i[13]=0,i[14]=-u*e*2/m,i[15]=0,i},mat4.perspective=function(r,t,a,n,e){return r=a*Math.tan(r*Math.PI/360),t*=r,mat4.frustum(-t,t,-r,r,a,n,e)};
mat4.invert = function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,A=r*c-u*o,E=a*s-e*i,O=a*c-u*i,R=e*c-u*s,y=f*d-M*v,q=f*b-h*v,x=f*m-l*v,_=M*b-h*d,Y=M*m-l*d,L=h*m-l*b,S=p*L-P*Y+A*_+E*x-O*q+R*y;if(!S)return null;return S=1/S,t[0]=(i*L-s*Y+c*_)*S,t[1]=(e*Y-a*L-u*_)*S,t[2]=(d*R-b*O+m*E)*S,t[3]=(h*O-M*R-l*E)*S,t[4]=(s*x-o*L-c*q)*S,t[5]=(r*L-e*x+u*q)*S,t[6]=(b*A-v*R-m*P)*S,t[7]=(f*R-h*A+l*P)*S,t[8]=(o*Y-i*x+c*y)*S,t[9]=(a*x-r*Y-u*y)*S,t[10]=(v*O-d*A+m*p)*S,t[11]=(M*A-f*O-l*p)*S,t[12]=(i*q-o*_-s*y)*S,t[13]=(r*_-a*q+e*y)*S,t[14]=(d*P-v*E-b*p)*S,t[15]=(f*E-M*P+h*p)*S,t};
mat4.transpose = function(t,n){if(t===n){var r=n[1],a=n[2],e=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=a,t[9]=u,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t};

var sound = true;
var crate,noise,mur;
var UVW = [];
var mvMatrixShadow = mat4.create();
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var camera;
var frame=0;
var cubeVertexIndexBuffer;
var UVWBuffer = [];
var coordBuffer = [];
var levels;

//
// Font 5x7
//
var font = [];
font[0] = "01110100011001110101110011000101110";
font[1] = "00100011000010000100001000010001110";
font[2] = "01110100010000100110010001000011111";
font[3] = "01110100010000100110000011000101110";
font[4] = "00010001100101010010111110001000010";
font[5] = "11111100001111000001000011000101110";
font[6] = "00110010001000011110100011000101110";
font[7] = "11111000010001000100010000100001000";
font[8] = "01110100011000101110100011000101110";
font[9] = "01110100011000101111000010001001100";
font["A"] = "00100010101000110001111111000110001";
font["B"] = "11110010010100101110010010100111110";
font["C"] = "01110100011000010000100001000101110";
font["D"] = "11110010010100101001010010100111110";
font["E"] = "11111100001000011110100001000011111";
font["F"] = "11111100001000011110100001000010000";
font["G"] = "01110100011000010011100011000101111";
font["H"] = "10001100011000111111100011000110001";
font["I"] = "01110001000010000100001000010001110";
font["J"] = "00111000100010000100001001001001100";
font["K"] = "10001100101010011000101001001010001";
font["L"] = "10000100001000010000100001000011111";
font["M"] = "10001110111010110101100011000110001";
font["N"] = "10001100011100110101100111000110001";
font["O"] = "01110100011000110001100011000101110";
font["P"] = "11110100011000111110100001000010000";
font["Q"] = "01110100011000110001101011001001101";
font["R"] = "11110100011000111110101001001010001";
font["S"] = "01110100011000001110000011000101110";
font["T"] = "11111001000010000100001000010000100";
font["U"] = "10001100011000110001100011000101110";
font["V"] = "10001100011000110001100010101000100";
font["W"] = "10001100011000110101101011010101010";
font["X"] = "10001100010101000100010101000110001";
font["Y"] = "10001100011000101010001000010000100";
font["Z"] = "11111000010001000100010001000011111";
font["-"] = "00000000000000011111000000000000000";
font["."] = "00000000000000000000000000011000110";
font[","] = "00000000000000000000000110000100010";
font["!"] = "00100001000010000100001000000000100";
font["("] = "00010001000100001000010000010000010";
font[")"] = "00100000100000100001000010001000100";

function drawText(posX, posY, text, scale) {
	var c = ['#000','#FFF'];
	scale=scale*canvas.width/3840;
	posX *= (canvas.width/1920);
	posY *= (canvas.height/1080);
	for (var j=0; j<c.length; j++) {
		ctx.fillStyle = c[j];
		j!=0 ? (posX-=gameStarted ? 2 : 4,posY-=gameStarted ? 2 : 4) : 0;
		var pX = posX;
		var pY = posY;
		for (var i=0; i<text.length; i++) {
			var index = 0;
			if (text[i]=="&") { 
				pX = posX;
				pY+=2*scale*12;
				continue
			}
			for (y=0; y<7; y++) {
				for (x=0; x<5; x++) {
					if (text[i]==" ") { continue; }
					if (font[text[i]][index]!="0") {
						ctx.fillRect(
							pX+x*2*scale, 
							pY+y*2*scale+ (!gameStarted ? (Math.sin(((pX+(j!=0 ? 4 : 0))/scale)+(frame/20.0))*5.0) : 0), 
							3*scale, 
							3*scale); //1.8 à la place de 3 pour des carrés
					}
					index++;
				}
			}
			pX += 12*scale;
		}
	}
}


//
// Lit un shader, le compile
//
function getShader(id) {
	var shaderScript = document.getElementById(id);
	var shader = gl.createShader(shaderScript.type.indexOf("frag")>-1 ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER);

	gl.shaderSource(shader, document.getElementById(id).innerText);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(shaderScript.type + gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
}

/**
 * Initialise les shaders et déclare les variables globales.
 */
function initShaders() {
	var shaders = ["Camera","Shadow"]; //Le nom des shaders sans préciser vertex ou fragment

	for (var i=0; i<shaders.length; i++) {
		var s = gl.createProgram();
		gl.attachShader(s, getShader("vertexShader"+shaders[i]));
		gl.attachShader(s, getShader("fragmentShader"+shaders[i]));
		gl.linkProgram(s);

		gl.useProgram(s);
		console.log("Inititalisation du shader "+shaders[i]);
		//
		// Active trois attributs contenant la position des vertexs, les coordonées de texture et les normales
		//
		s.vertexPositionAttribute = gl.getAttribLocation(s, "vertexPosition");
		gl.enableVertexAttribArray(s.vertexPositionAttribute);
		
		s.textureCoordAttribute = gl.getAttribLocation(s, "aTextureCoord");
		gl.enableVertexAttribArray(s.textureCoordAttribute);

		s.normalAttribute = gl.getAttribLocation(s, "aVertexNormal");
		gl.enableVertexAttribArray(s.normalAttribute);
		
		//
		// Stocke les raccourcis vers les uniformes
		//
		s.worldPosition = gl.getUniformLocation(s, "worldPosition");
		s.endPosition = gl.getUniformLocation(s, "endPosition");
		s.u_Shadowmap_transform = gl.getUniformLocation(s, "u_Shadowmap_transform");
		s.it = gl.getUniformLocation(s, "it");
		s.isPlayer = gl.getUniformLocation(s, "isPlayer");
		s.objectType = gl.getUniformLocation(s, "objectType");
		s.isGround = gl.getUniformLocation(s, "isGround");
		
		s.pMatrixUniform = gl.getUniformLocation(s, "uPMatrix");
		s.mvMatrixUniform = gl.getUniformLocation(s, "uMVMatrix");
		s.lightMatrix = gl.getUniformLocation(s, "lightMatrix");
		s.nMatrixUniform = gl.getUniformLocation(s, "uNormalMatrix");
		s.textureID = gl.getUniformLocation(s, "textureID");
		s.depthTextureID = gl.getUniformLocation(s, "depthTextureID");
		
		s.isCurrentPlayer = gl.getUniformLocation(s, "isCurrentPlayer");
		s.level = gl.getUniformLocation(s, "level");
		s.resolution = gl.getUniformLocation(s, "resolution");
		s.levelSize = gl.getUniformLocation(s, "levelSize");
		
		//
		// Déclare le shader en variable globale pour un accès simplifié
		//
		window["shader"+shaders[i]] = s;
	}
	initBuffers();
}

//
// Charge une image ou un canvas en texture
//
function img2texture(name, imgOrCanvas) {
	var texture = gl.createTexture();
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgOrCanvas);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	gl.generateMipmap(gl.TEXTURE_2D);
	
	window[name] = texture;
}

//
// Cube Geometry
//
getCube = function(x, y, z) {
	return [
		-x, -y, z,
		x, -y, z,
		x, y, z,
		-x, y, z,
		-x, -y, -z,
		-x, y, -z,
		x, y, -z,
		x, -y, -z,
		-x, y, -z,
		-x, y, z,
		x, y, z,
		x, y, -z,
		-x, -y, -z,
		x, -y, -z,
		x, -y, z,
		-x, -y, z,
		x, -y, -z,
		x, y, -z,
		x, y, z,
		x, -y, z,
		-x, -y, -z,
		-x, -y, z,
		-x, y, z,
		-x, y, -z
	];
}
//
// Cube UVW
//
getUVW = function(type, w, h, d) {
	h*=2;
	w*=2;
	d*=2;
	return [
		0,0, //Face Gauche
		w,0,
		w,h,
		0,h,

		0,1, //Face droite
		0,0,
		1,0,
		1,1,

		0,d, //Face dessus
		0,0,
		w,0,
		w,d,

		0,0,
		1,0,
		1,h,
		0,h,

		0,0,
		h,0, //Face avant
		h,d,
		0,d,

		0,0, //Face arrière
		d,0,
		d,h,
		0,h,
	];
}

//
// Initialise le buffer faceIndex des vertices d'un cube
//
function initBuffers() {	
	//Create faceindex of cube
	cubeVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	gl.bufferData(
		gl.ELEMENT_ARRAY_BUFFER, 
		new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]), 
		gl.STATIC_DRAW);
	/*cubeVertexIndexBuffer.itemSize = 1;
	cubeVertexIndexBuffer.numItems = 36;*/
}

/*
 * Retourne un buffer avec la geometry dedans. Si possible, le récupère en cache
 * La clef est le type d'object et sa taille
 */
copyGeometryInAttribute = function(shader, type, key, geometry) {
	if (!coordBuffer[type]) {
		coordBuffer[type] = [];
	}
	if (!coordBuffer[type][key]) {
		coordBuffer[type][key] =  gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, coordBuffer[type][key]);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry), gl.STATIC_DRAW);
		coordBuffer[type][key].itemSize = 3;
	}
	
	gl.bindBuffer(gl.ARRAY_BUFFER, coordBuffer[type][key]);
	gl.vertexAttribPointer(shader.vertexPositionAttribute, coordBuffer[type][key].itemSize, gl.FLOAT, false, 0, 0);
}

/*
 * Retourne un buffer de coordonnées de textures. Si possible, le récupère en cache
 * La clef est le type d'object et sa hauteur
 */
copyUVWInAttribute = function(shader, type, width, height, depth) {
	var key = width+"_"+height+"_"+depth;
	if (!UVWBuffer[type]) {
		UVWBuffer[type] = [];
	}
	if (!UVWBuffer[type][key]) {
		var data = new Float32Array(getUVW(type, width, height, depth));
		UVWBuffer[type][key] =  gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, UVWBuffer[type][key]);
		gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
		UVWBuffer[type][key].itemSize = 2;
	}
	
	gl.bindBuffer(gl.ARRAY_BUFFER, UVWBuffer[type][key]);
	gl.vertexAttribPointer(shader.textureCoordAttribute, UVWBuffer[type][key].itemSize, gl.FLOAT, false, 0, 0);
}

copyNormalsInAttribute = function(shader) {
	var normalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
	var normals = new Float32Array([
		// Front
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,

	       // Back
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,

	       // Top
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,

	       // Bottom
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,

	       // Right
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,

	       // Left
	       -1.0,  0.0,  0.0,
	       -1.0,  0.0,  0.0,
	       -1.0,  0.0,  0.0,
	       -1.0,  0.0,  0.0]);
	gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
	gl.vertexAttribPointer(shader.normalAttribute, 3, gl.FLOAT, false, 0, 0);
}

var light = {
	x:11,
	y:15,
	z:15,
	rotation:{
		x:0.7,
		y:-0.5,
		z:0
	}
}

var cameraX = 0;
var cameraZ = 0;
var cameraY = 0;

var cameraRotationX = 0;
var cameraRotationY = 0;
var cameraRotationZ = 0;
function getMatrix(from, obj) {
	var matrix = mat4.create();
	//
	// Calcul la matrice modelView en fonction de la rotation de la caméra
	//
	mat4.identity(matrix);
	
	
	
	mat4.rotate(matrix, from.rotation.x, [1, 0, 0]);
	mat4.rotate(matrix, from.rotation.y, [0, 1, 0]);
	mat4.rotate(matrix, from.rotation.z, [0, 0, 1]);
	
	if (obj.type=="player") {
		mat4.translate(matrix, [player.x  - from.x, player.y - from.y, player.z - from.z]);
		if (obj.rotation) {
			mat4.rotate(matrix, obj.rotation.x, [1, 0, 0]);
			mat4.rotate(matrix, obj.rotation.y, [0, 1, 0]);
			mat4.rotate(matrix, obj.rotation.z, [0, 0, 1]);
		}
		mat4.translate(matrix, [obj.x, obj.y, obj.z]);
	} else {
		mat4.translate(matrix, [obj.x - from.x, obj.y - from.y, obj.z - from.z]);
		if (obj.rotation) {
			mat4.rotate(matrix, obj.rotation.x, [1, 0, 0]);
			mat4.rotate(matrix, obj.rotation.y, [0, 1, 0]);
			mat4.rotate(matrix, obj.rotation.z, [0, 0, 1]);
		}
		
	}
	return 	matrix;
}

var levelEnCours = 0;
var robot = [
	[0.0, 0.05, -0.15, 0.05, 0.25, 0.1],
	[0.0, 0.05,  0.15, 0.05, 0.25, 0.1],
	
	[0.0, 0.15,  0.1, 0.15, 0.15, 0.05],
	[0.0, 0.15, -0.1, 0.15, 0.15, 0.05],
	
	[0.15, 0.45, 0.3, 0.05, 0.2, 0.05],
	[0.2, 0.45, -0.3, 0.05, 0.2, 0.05],
	
	[0.4, 0.45, 0.3, 0.15, 0.05, 0.05],
	[0.4, 0.45, -0.3, 0.15, 0.05, 0.05],
	
	[0.0, 0.4, 0.0, 0.2, 0.25, 0.25],
	[0.0, 0.65, 0.0, 0.05, 0.15, 0.15],
];
/*
 * Retourne la position d'un plus haut élément pour une position donnée
 */
getLevel = function(x, z, type, excludeObj) {
	x = x+0.5|0;
	z = z+0.5|0;
	
	var l = -1;
	var o = -1;
	
	if (type=="level" || type=="all") {
		//console.log("getLevel", z, x);
		l = levels[levelEnCours].tiles[z][x].h; //Niveau du level
		if (l==1) {
			l=0;
		}
	}
	
	//On regarde si il y a un object dans la case suivante
	var obj = null;
	if (type=="objects" || type=="all") {
		for (var objTmp of levels[levelEnCours].objects) { 
			if (objTmp==excludeObj || objTmp.disabled || objTmp.type=="wall2") { continue; }
			
			if (objTmp.x==x && objTmp.z==z) {
				if (objTmp.y+0.5 > o) {
					o = objTmp.y+0.5; 
					obj = objTmp;
				}
			}
		}
	}
	return {level:Math.max(l, o), o:obj};
}
var player;
var copyNormalDone = false;
var gameStarted = false;
function render() {
	stats.begin();//#DEBUG
	frame++;
	ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	
	if (levelEnCours==12) {
		drawText(850, 600, "YOU ARE TENACIOUS !", 8.0);
		drawText(800, 300, "CONGRATULATIONS !", 10.0);
	} else if (gameStarted) {
		var t = "STAGE "+levelEnCours;
		drawText(960-27*(t.length/2), 20, t, 4.5);
		drawText(10, 100, "M - MUTE&R - RETRY", 3);
	} else {
		drawText(925, 200, "TENACITY", 16.0);
		drawText(850, 800, "PRESS A KEY TO START", 8.0);
	}
	requestAnimationFrame(render);
	
	//
	// Déplace le joueur si besoin, déclenche les triggers et pousse les objects
	//
	if (player.inMove) {
		var oldX = player.x+0.5|0;
		var oldZ = player.z+0.5|0;
		
		if (Math.abs(player.x - player.targetX)>0.01) {
			if (player.pushObj) {
				player.pushObj.x += (player.x - player.targetX)>0 ? -0.1 : 0.1;
			}
			player.x += (player.x - player.targetX)>0 ? -0.1 : 0.1;
		} else if (Math.abs(player.z - player.targetZ)>0.01) {
			if (player.pushObj) {
				player.pushObj.z += (player.z - player.targetZ)>0 ? -0.1 : 0.1;
			}
			player.z += (player.z - player.targetZ)>0 ? -0.1 : 0.1;
		} else {
			player.inMove = false;
			
			// Test si le joueur est arrivée à la fin du niveau
			if ((player.x+0.5|0)==levels[levelEnCours].end[0] && (player.z+0.5|0)==levels[levelEnCours].end[2]) {
				//alert("pl");
				playSound([0,0,0,0,1,0.3037428222585762,0,0.3508811080179185,0,0,0,0.015,0,0.35590201182028414,0,0.484,0,0,1,0,0,0,0,0.25]);
				levelEnCours++;
				initLevels();
				return;
			}
		}
		
		var newX = player.x+0.5|0;
		var newZ = player.z+0.5|0;
		
		//
		// On vient de changer de case, je regarde les triggers
		//
		if (oldX!=newX || oldZ!=newZ) {
			//Je regarde si je viens de quitter un trigger
			var t = levels[levelEnCours].tiles[oldZ][oldX].t;
			if (t) {console.log(t.y, player.y, t); }
			t && t.y==player.y && t.trigger(false);
			
			//Je regarde si j'arrive sur un trigger
			var t = levels[levelEnCours].tiles[newZ][newX].t;
			t && t.trigger(true);
		}
		
		//
		// Pousse les objects
		//
		if (!player.inMove && player.pushObj) {
			player.pushObj.x = player.pushObj.x+0.5|0;
			player.pushObj.z = player.pushObj.z+0.5|0;
			
			var t = levels[levelEnCours].tiles[player.pushObj.z+.5|0][player.pushObj.x+.5|0].t;
			t && t.trigger(true);
			player.pushObj = false;
		}
	}
	
	//
	// Je fait monter ou desendre les blocs en fonction de la demande
	//
	for (var z=0; z<levels[levelEnCours].height; z++) {
		for (var x=0; x<levels[levelEnCours].width; x++) {
			var h = levels[levelEnCours].tiles[z][x].h;
			if (levels[levelEnCours].tiles[z][x].targetH!==false) {
				if (Math.abs(levels[levelEnCours].tiles[z][x].targetH - h) > 0.01) {
					h+=levels[levelEnCours].tiles[z][x].targetH > h ? 0.1 : -0.1;
					levels[levelEnCours].tiles[z][x].h = h;
					
				} else {
					levels[levelEnCours].tiles[z][x].h = h+0.5|0;
					levels[levelEnCours].tiles[z][x].targetH = false;
					
				}
			}
		}
	}
	
	//
	// Fait monter le joueur si il est sur une dalle montante
	//
	player.targetY = getLevel(player.x, player.z, "all").level;
	if (player.y < player.targetY) {
		player.y = player.targetY;
		player.G=0;
	} else if (player.y > player.targetY) {
		if (player.G==0) {
			player.G = 0.1;
		}
		player.G*=1.05;
		player.y += (player.y > player.targetY) ? -player.G : player.G;
		if (player.y < player.targetY) {
			player.y = player.targetY;
			player.G=0;
		}
	}
	
	//
	// Fait agir la gravité sur les objects
	//
	for (var objTmp of levels[levelEnCours].objects) {
		if (objTmp.type=="wall" || objTmp.type=="wall2") { continue; }
		
		objTmp.targetY = getLevel(objTmp.x, objTmp.z, "all", objTmp).level + 0.5;
		
		//Là le problème quand je pose une caisse sur une autre, c'est que quand je passe sur l'object d'en dessous, je détecte une hauteur supérieur (car je regare la caisse), donc je monte la caisse du dessous et ça merde
		
		if ((objTmp.y - objTmp.targetY)>0.01) { //Il faut descendre
			objTmp.G+=0.01;
			objTmp.y += objTmp.y > objTmp.targetY ? -objTmp.G : objTmp.G;
			objTmp.y = Math['max'](objTmp.y, objTmp.targetY);
		} else {
			objTmp.y = objTmp.targetY - objTmp.y < 1 ? objTmp.targetY : objTmp.y; //Pour éviter un bug, je suis obligé de vérifier que je ne fait pas un saut de 1.0
			objTmp.G = 0;
		}
	}
	
	//
	// Détecte la mort
	//
	if (player.y<=0)  {
		drawText(600, 484, "CONNECTION LOST", 8.0);
		if (player.isDead==0) {
			playSound([3,0,1,0,0,0.35173364,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0.25]);
		}
		player.isDead++;
		if (player.isDead==50) {
			initLevels();
		}
	}
	
	
	if (!player.inMove && !player.G) {
		if (r || l || d || u) {
			player.inMove = true;
			player.targetX = player.x;
			player.targetZ = player.z;
		}
		
		if (r) {
			player.targetX = player.x + 1;
			player.rotation = 0;
		} else if (l) {
			player.targetX = player.x - 1;
			player.rotation = Math.PI;
		} else if (d) {
			player.targetZ = player.z + 1;
			player.rotation = -Math.PI/2;
		} else if (u) {
			player.targetZ = player.z - 1;
			player.rotation = Math.PI/2;
		}
		
		//
		// Gestion des collisions
		//
		if (r || l || d || u) {
			var targetLevel = getLevel(player.targetX, player.targetZ, "level").level;
			
			if (targetLevel>player.y) { //Est ce qu'il y a un mur où je veux aller
				player.inMove = false;
				player.targetX = player.x;
				player.targetZ = player.z;
			} else {
				var object = getLevel(player.targetX, player.targetZ, "objects");
				var pushable = true;
				if (object.o) {
					if (object.o.type=="gem") {
						playSound([1,0,0.048964577296413875,0.48504748609295134,0.583,0.786,0,0,0,0,0,0.524,0.555490134615729,0,0,0,0,0,1,0,0,0,0,0.25]);
						object.o.disabled=true;
					}
					pushable = object.o.type!="elec";
				}
				
				if (!pushable) {
					player.inMove = false;
					player.targetX = player.x;
					player.targetZ = player.z;
				} else {
					if (object.level>player.y+1) { //Est ce qu'il y a une caisse devant soit mais un étage au dessus
						player.inMove = false;
						player.targetX = player.x;
						player.targetZ = player.z;
					} else if (object.level==player.y+1) { //Est ce qu'il y a une caisse devant soit
						//On a un object, peut-on la pousser ?
						//Je regarde Si le niveau est le même ou plus bas sur une case plus loin en mode 'all'
						var levelZ = getLevel(
							player.x + ((player.targetX - player.x)*2), 
							player.z + ((player.targetZ - player.z)*2),
							"all");
						if (levelZ.level>player.y) {
							//On en peut pas pousser la caisse, il y a un mur
							player.inMove = false;
							player.targetX = player.x;
							player.targetZ = player.z;
						} else {
							//On a trouvé une caisse et on peut la pousser
							player.pushObj = object.o;
						}
					} else if (object.level>player.y) {
						player.inMove = false;
						player.targetX = player.x;
						player.targetZ = player.z;
					}
				}
			}
			if (player.inMove) {
				playSound([0,0,0.24,0,0.179,0.189,0,0.157,0,0,0,0,0,0.38,0,0,0,0,0.577,0,0,0,0,0.2]);
			}
		}
	}
	
	debug("it", frame);//#DEBUG
	debug("player.x", player.x.toFixed(2));//#DEBUG
	debug("player.y", player.y.toFixed(2));//#DEBUG
	debug("player.z", player.z.toFixed(2));//#DEBUG
	debug("player.G", player.G.toFixed(2));//#DEBUG
	
	debug("camera.x", (camera.x + cameraX).toFixed(2));//#DEBUG
	debug("camera.y", (camera.y + cameraY).toFixed(2));//#DEBUG
	debug("camera.z", (camera.z + cameraZ).toFixed(2));//#DEBUG

	debug("camera.rotX", (camera.rotation.x + cameraRotationX).toFixed(2));//#DEBUG
	debug("camera.rotY", (camera.rotation.y + cameraRotationY).toFixed(2));//#DEBUG
	debug("camera.rotZ", (camera.rotation.z + cameraRotationZ).toFixed(2));//#DEBUG

	
	//
	// Prépare la liste des cube à dessiner
	//
	
	//1. D'abord le robot
	var objectList = [];
	for (var i=0; i<robot.length;) {
		
		objectList.push({
			x:robot[i][0],
			y:robot[i][1] + (i>(levelEnCours==12 ? -1 : 3) ? Math.abs(Math.sin(frame/15.0)) * (levelEnCours==12 ? (i>3 ? 0.6: 0.5) : 0.1) : 0),
			z:robot[i][2],
			h:robot[i][3],
			w:robot[i][4],
			d:robot[i][5],
			type:"player",
			rotation:{
				x:0,
				y:player.rotation+(levelEnCours==12 ? frame/8 : 0),
				z:0
			},
			part:++i
		});
	}
	
	//2. Ensuite les blocs du niveau
	for (var z=0; z<levels[levelEnCours].height; z++) {
		for (var x=0; x<levels[levelEnCours].width; x++) {
			objectList.push({
				x:x,
				y:0,
				z:z,
				h:levels[levelEnCours].tiles[z][x].h,
				type:"block",
				texture:levels[levelEnCours].tiles[z][x].texture,
				t:levels[levelEnCours].tiles[z][x].t
			});
		}
	}
	
	//3. Les objects	
	for (obj of levels[levelEnCours].objects) {
		if (obj.disabled) { continue; }
		if (obj.type=="gem") {
			obj.rotation.y = (frame/132.0);
		}
		objectList.push(obj);
	}
	
	//
	// Render shadowmap
	//
	var shader = shaderShadow;
	gl.useProgram(shader);

	// Set the target frame buffer
	gl.bindFramebuffer(gl.FRAMEBUFFER, shadow_frame_buffer);

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	// Set the size of the viewport to be the same size as the frame buffer
	gl.viewport(0, 0, shadow_frame_buffer.width, shadow_frame_buffer.height);

	// L'itération en cours
	gl.uniform1f(shader.it, frame);
	
	gl.uniform1i(shader.level, levelEnCours);
	gl.uniform2f(shader.levelSize, levels[levelEnCours].width, levels[levelEnCours].width);
	
	//////////////////////////////////
	for (obj of objectList) {
		var height = obj.h;
		var type = obj.type;
		var x = obj.x;
		var y = obj.y;
		var z = obj.z;
		var height = obj.h;
		if (type=="elec") { //Pas d'ombre sur l'elec
			continue;
		}
		//
		// Calcul la matrice modelView en fonction de la rotation de la caméra
		//
		mvMatrixShadow = getMatrix(light, obj);

		// Balance les coordonées de l'object par rapport au monde
		gl.uniform3f(shader.worldPosition, x, y, z);
		
		//set geometry buffer
		var geometry = getCube(obj.w || 0.5, height, obj.d || 0.5);

		copyGeometryInAttribute(shader, type+"Shadow", (obj.w || 1) + "" + height + (obj.d || 1), geometry);

		// Envoi les matrices de projections (monde vers écran) et modelView (local vers caméra)
		gl.uniformMatrix4fv(shader.pMatrixUniform, false, pMatrix);
		gl.uniformMatrix4fv(shader.mvMatrixUniform, false, mvMatrixShadow);
		
		var typeID = 0;
		gl.uniform1i(shader.objectType, typeID);
		if (obj.t) {
			if (!obj.t.triggered || obj.t.color==7) {
				gl.uniform1i(shader.objectType, obj.t.color);
			}
		}
		
		
		// Active le buffer de vertexs
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
		// Dessine les faces
		gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
	}

	// Make the standard drawing buffer be the target frame buffer.
	gl.bindFramebuffer(gl.FRAMEBUFFER,  null);
	
		
	//
	// Render scene
	//
	
	// Set the viewport to the size of the canvas
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	
	// Prend le shader en fonction de l'object a dessiner
	var shader = shaderCamera;
	gl.useProgram(shader);
	
	// Clear the entire canvas window background with the clear color
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	// La couleur ambiante
	gl.uniform3f(shader.ambientColor, 0.1 ,0.1 ,0.1);

	// L'itération en cours
	gl.uniform1f(shader.it, frame);
	gl.uniform2f(shader.resolution, canvas.width, canvas.height);
	
	gl.uniform1i(shader.level, levelEnCours);
	gl.uniform2f(shader.levelSize, levels[levelEnCours].width, levels[levelEnCours].width);

	for (obj of objectList) {
		var x = obj.x;
		var y = obj.y;
		var z = obj.z;
		var height = obj.h;
		var type = obj.type;
		
		//
		// Calcul la matrice modelView en fonction de la rotation de la caméra
		//
		var tmpCamera = JSON.parse(JSON.stringify(camera));
		tmpCamera.x = camera.x + cameraX;
		tmpCamera.y = camera.y + cameraY;
		tmpCamera.z = camera.z + cameraZ;
		tmpCamera.rotation.x = camera.rotation.x + cameraRotationX;
		tmpCamera.rotation.y = camera.rotation.y + cameraRotationY;
		tmpCamera.rotation.z = camera.rotation.z + cameraRotationZ;
		
		mvMatrix = getMatrix(tmpCamera, obj);
		mvMatrixShadow = getMatrix(light, obj);
		
		// Copie les UVW dans l'attribut du shader
		copyUVWInAttribute(shader, type, obj.w || 0.5, height, obj.d || 0.5);

		//set geometry buffer
		var geometry = getCube(obj.w || 0.5, height, obj.d || 0.5);
		copyGeometryInAttribute(shader, type, (obj.w || 1) + "" + height + (obj.d || 1), geometry);
		
		// Active le buffer des normales
		if (!copyNormalDone) {
			copyNormalsInAttribute(shader);	
			copyNormalDone = true;
		}

		//
		// set uniforms
		// 

		// Balance les coordonées de l'object par rapport au monde
		gl.uniform3f(shader.worldPosition, x, height, z);

		
		gl.uniform1i(shader.isPlayer, type=="player" ? obj.part : 0);
		gl.uniform1i(shader.isGround, type=="block" || type=="wall" ? 1 : 0);
		
		// Anim en cas de mort
		if (player.isDead) {
			gl.uniform1i(shader.isPlayer, 20+player.isDead);
		}
		
		gl.uniform3fv(shader.endPosition, levels[levelEnCours].end);
		
		
		var typeID = 0;
		switch (type) {
			case "gem":typeID=1;break; 
			case "elec":typeID=2;break;
			case "crate":typeID=5;break;
			case "wall2":typeID=6;break;
			default:typeID=0;break;
		}
		gl.uniform1i(shader.objectType, typeID);
		
		if (obj.t) {
			if (!obj.t.triggered || obj.t.color==7) {
				gl.uniform1i(shader.objectType, obj.t.disabled ? 5 : obj.t.color); //HACK pourri, je fais passer la dalle pour une caisse pour ne pas qu'elle continue de bouger si c'est une 7 tombée
			}
		}
		
		
		if (type=="gem" || type=="elec"|| (obj.t && (obj.t.color==3 || obj.t.color==4))) {
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		} else {
			gl.disable(gl.BLEND);
		}

		// Envoi les matrices de projections (monde vers écran) et modelView (local vers caméra)
		gl.uniformMatrix4fv(shader.pMatrixUniform, false, pMatrix);
		gl.uniformMatrix4fv(shader.mvMatrixUniform, false, mvMatrix);
		gl.uniformMatrix4fv(shader.u_Shadowmap_transform, false, mvMatrixShadow);
		
		//Calcul la matrices de normales
		var normalMatrix = mat4.create();
		mat4.invert(normalMatrix, mvMatrix);
		mat4.transpose(normalMatrix, normalMatrix);
		gl.uniformMatrix4fv(shader.nMatrixUniform, false, normalMatrix);
		
		// Balance la texture en 0
		// Déclare que l'ID de la texture à utiliser est la 0
		gl.uniform1i(shader.textureID, 1);
		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, obj.texture); // FIXME obj.texture);
 
		gl.uniform1i(shader.depthTextureID, 0);
		gl.activeTexture(gl.TEXTURE0);
		//gl.bindTexture(gl.TEXTURE_2D, shadow_frame_buffer.depth_buffer);
		gl.bindTexture(gl.TEXTURE_2D, shadow_frame_buffer.color_buffer);

		// Active le buffer de vertexs
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);

		// Dessine les faces
		gl.drawElements(gl.TRIANGLES, (12 * 3), gl.UNSIGNED_SHORT, 0);
	}
	stats.end();//#DEBUG
}
var canvas;
function resize() {
	
	canvas.width = canvasHUD.width = gl.viewportWidth = window.innerWidth;
	canvas.height = canvasHUD.height = gl.viewportHeight = window.innerWidth / window.innerHeight<1.77 ? window.innerWidth / 1.77 : window.innerHeight;
	
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100, pMatrix);
	mat4.identity(mvMatrix);
	
	initShadows();
}

var shadow_frame_buffer;
function initShadows() {
	var width =  gl.viewportWidth;
	var height =  gl.viewportHeight;
	
	var depth_texture_extension = gl.getExtension('WEBGL_depth_texture');
	if (!depth_texture_extension) {
		alert('The extension WEBGL_depth_texture is not supported by your browser.');
		return;
	}
	
	// Step 1: Create a frame buffer object
	shadow_frame_buffer = gl.createFramebuffer();
	
	// Step 2: Create and initialize a texture buffer to hold the colors.
	var color_buffer = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, color_buffer);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	// Step 3: Create and initialize a texture buffer to hold the depth values.
	// Note: the WEBGL_depth_texture extension is required for this to work
	//       and for the gl.DEPTH_COMPONENT texture format to be supported.
	var depth_buffer = gl.createTexture();

	gl.bindTexture(gl.TEXTURE_2D, depth_buffer);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	// Step 4: Attach the specific buffers to the frame buffer.
	gl.bindFramebuffer(gl.FRAMEBUFFER, shadow_frame_buffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, color_buffer, 0);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,  gl.TEXTURE_2D, depth_buffer, 0);
	// Step 5: Verify that the frame buffer is valid.
	//gl.checkFramebufferStatus(gl.FRAMEBUFFER);
	
	// Remember key properties of the frame buffer object so they can be
	// used later.
	shadow_frame_buffer.color_buffer = color_buffer;
	shadow_frame_buffer.depth_buffer = depth_buffer;
	shadow_frame_buffer.width = width;
	shadow_frame_buffer.height = height;
	
	// Unbind these new objects, which makes the default frame buffer the
	// target for rendering.
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}
var canvasHUD;
//
// Initialise les éléments et créer des textures
//
function init() {
	//init HUD
	canvasHUD = document.getElementById("HUD");
	ctx = canvasHUD.getContext("2d");
	canvas = document.getElementById("game");
	gl = canvas.getContext("webgl");

	//
	// Create a procedural texture
	//
	var canvas2 = document.createElement("canvas");
	canvas2.width=canvas2.height=512;
	var ctx2 = canvas2.getContext("2d");
	var iD = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
	var iD2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

	//Create a texture texture
	var t = 0;
	var xTmp = 0;
	var y = 0;
	for (var i = 0; i < iD.data.length; i += 4) {
		xTmp++;
		if (xTmp==512) { xTmp= 0; }
		y = Math.floor((i/4)/512);
		x=xTmp/512;
		y/=512;
		
		var c = Math.random()*275;
		
		iD2.data[i]=c*0.93; //*0.93; //238     
		iD2.data[i+1]=c*0.9098; //232
		iD2.data[i+2]=c*0.6666; //170
		iD2.data[i+3]=255;
		
		
		if (Math.abs(0.5-x)>0.49 || Math.abs(0.5-y)>0.49) {
			c *= 0.8;
		}
		if ((x>0.49 && x<0.51) || (y>0.49 && y<0.51)) {
			c *= 0.8;
		}
		
		iD.data[i]=c*0.93; //*0.93; //238     
		iD.data[i+1]=c*0.9098; //232
		iD.data[i+2]=c*0.6666; //170
		iD.data[i+3]=255;
		
	}
	ctx2.putImageData(iD, 0, 0);
	img2texture("noise", canvas2);
	ctx2.putImageData(iD2, 0, 0);
	img2texture("noise2", canvas2);
	
	var xTmp = 0;
	var y = 0;
	for (var i = 0; i < iD.data.length; i += 4) {
		xTmp++;
		if (xTmp==512) { xTmp= 0; }
		y = Math.floor((i/4)/512);
		x=xTmp/512;
		y/=512;
		
		var c = Math.hypot(0.08 - x , 0.08 - y);
		c = Math.min(c, Math.hypot(1-(0.08) - x , 0.08 - y));
		c = Math.min(c, Math.hypot(1-(0.08) - x , 1-(0.08) - y));
		c = Math.min(c, Math.hypot((0.08) - x , 1-(0.08) - y));
		
		B = x>0.075 && x<0.925;
		D = x<0.925 && x>0.915
		C = x>0.075 && x<0.085
		
		//A = y>0.07 && y<0.93; //Remplissage intérieur
		//E = y<0.93 && y>0.91; //Ligne du bas
		//F = y>0.07 && y<0.09; //Ligne du haut
		
		G = Math.abs(0.5 - y)>0.415 && Math.abs(0.5 - y)<0.425;
		A = Math.abs(0.5 - y)<0.425;
		
		if (c<0.01) {
			c = 240;
		} else if (c<0.02) {
			c = 200;
		} else if (A && C) {
			c = 50;
		} else if (A && D) {
			c = 50;
		} else if (B && G) {
			c = 50;
		} else {
			c = 127;
		}
		if (Math.abs(0.5-x)>0.49 || Math.abs(0.5-y)>0.49) {
			c *= 0.8;
		}
		iD.data[i]=c;
		iD.data[i+1]=c;
		iD.data[i+2]=c*1.1;
		iD.data[i+3]=255;
	}
	ctx2.putImageData(iD, 0, 0);
	img2texture("mur", canvas2);
	
	//
	// Texture du panneau Exit
	//
	ctx.canvas.width=ctx.canvas.height=512;
	ctx.fillRect(0, 0, 512,512);
	gameStarted = true;drawText(900, 2400, "EXIT", 60.0);gameStarted=false;
	
	var exit=document.createElement('CANVAS');
	exit.width=256;
	exit.height=256;
	exit.getContext('2d').drawImage(ctx.canvas,0,0,512,512,0,0,256,256);
	img2texture("exit", exit);
	
	//
	// Crate
	//
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	var iD = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
	for (var x = 0; x < 512;x++) {
		for (var y = 0; y < 512;y++) {
			var i = (x*4)+(512*4*y);
			var c = Math.floor(Math.random()*200);
			dX = (x/256)-1.0;
			dY = (y/256)-1.0;
			var d = 1;
			if (Math.abs(dX)>0.8 || Math.abs(dY)>0.8) {
				d = 0.3;
			}
			if (Math.abs(Math.abs(dX)-Math.abs(dY))<0.15) { //Epaisseur croix
				d = 0.3;
			}
			if (Math.abs(dX)>0.5 && Math.abs(dX)<0.6) {
				d = 0.3;
			}
			if (Math.abs(dY)>0.5 && Math.abs(dY)<0.6) {
				d = 0.3;
			}
			if (Math.abs(dX)>0.9 && Math.abs(dY)>0.9) {
				d = 0.8;
			}
			c *= d;
			iD.data[i]=c;
			iD.data[i+1]=c;
			iD.data[i+2]=c*0.89;
			iD.data[i+3]=255;
		}
	}
	
	
	ctx2.putImageData(iD, 0, 0);
	img2texture("crate", canvas2);
	

	// Init Camera
/*	camera = {
		x:6,
		y:11,
		z:7.5,
		rotation:{
			x:1.23, //-1.1,
			y:0,
			z:0
		}
	};*/
	
	camera = {
		rotation:{
			x:0.56, //-1.1,
			y:-0.87,
			z:0.03
		}
	};
	
	
	
	resize();
	
	gl.clearColor(0.5, 0.25, 0.85, 1.0);
	gl.clearColor(0.93, 0.9098, 0.6666, 1.0);
	gl.enable(gl.DEPTH_TEST);
	
	initShaders();
	initShadows()
	
	initLevels();
	render();
}


function initLevels() {
	levels = [
		{
			start:{"x":2,"z":3},
			end:[10,3,3],
			camera:[3.8,3.4,3.4],
			texture:noise,
			data:[
				"333333333333",
				"112222333333",
				"112222333333",
				"112222222223",
				"112222333333",
				"112222333333",
				"333333333333"
			],
			gems:[],
			crates:[[5,2.5,3]],
			elevator:[],
			objects:[],
			triggers:[]
		},{
			start:{"x":2,"z":3},
			end:[10,4.5,3], 
			camera:[6,9,5.5],
			texture:noise,
			data:[
				"333333333333",
				"112222333333",
				"112222333333",
				"112222222223",
				"112222333333",
				"112222333333",
				"333333333333"
			],
			gems:[[4,2,1]],
			crates:[[5,2.5,3]],
			elevator:[],
			objects:[],
			triggers:[]
		},{
			start:{"x":2,"z":4},
			end:[10,4.5,2],
			camera:[5.2,11.7,7.5],
			texture:noise,
			data:[
				"333333333333",
				"322232323333",
				"322222222323",
				"322222223333",
				"322222223333",
				"322222223333",
				"322222222333",
				"322232323333",
				"333333333333"
			],
			gems:[[1,2,1],[7,2,7]],
			crates:[[5,2.5,3], [5,2.5,5],[7,2.5,3], [7,2.5,5]],
			elevator:[],
			objects:[],
			triggers:[{
					x:5,
					z:7,
					y:2,
					color:4,
					triggered:false,
					bX:10,
					bZ:3,
					bH:-1
				},{
					x:5,
					z:1,
					y:2,
					color:4,
					triggered:false,
					bX:10,
					bZ:4,
					bH:-1
				},{
					x:8,
					z:2,
					y:2,
					color:4,
					triggered:false,
					bX:8,
					bZ:4,
					bH:-1
				},{
					x:8,
					z:6,
					y:2,
					color:4,
					triggered:false,
					bX:9,
					bZ:4,
					bH:-1
				}]
		},{
			start:{"x":2,"z":5},
			end:[13,4.5,5],
			camera:[6.40,13.50,8.3],
			texture:noise,
			data:[
				"666666666666666",
				"611111111111226",
				"611111111111226",
				"655555551112223",
				"655554321112223",
				"655554321122223",
				"655554321112223",
				"655555551112223",
				"611111111111223",
				"611111111111223",
				"655443333333333",
			],
			gems:[[7,2,4],[11,2,7]],
			crates:[[2,5.5,3],[2,5.5,7]],
			objects:[],
			elevator:[],
			triggers:[{
					x:7,
					z:3,
					y:5,
					color:4,
					triggered:false,
					bX:8,
					bZ:5,
					bH:1
				},{
					x:7,
					y:5,
					z:7,
					color:4,
					triggered:false,
					bX:9,
					bZ:5,
					bH:1
				}
			]
		},{
			start:{"x":1,"z":6},
			end:[14,4.5,2],
			camera:[7.5,12.8,6.9],
			texture:noise,
			data:[
				"5555555555555555",
				"5334445111111255",
				"5434445444432222",
				"5334442111111233",
				"5322222111111233",
				"5333332111111233",
				"5222222111111233",
				"5333333333333333"
			],
			gems:[[2,2,4],[13,2,1],[1,3,1]],
			crates:[[4,4.5,2]],
			elevator:[[5,4,3],[2,2,4]],
			objects:[],
			triggers:[{
					x:1,
					z:2,
					y:4,
					color:4,
					triggered:false,
					bX:6,
					bZ:2,
					bH:-1
				}]
		},{
			start:{"x":2,"z":3},
			end:[15,4.5,5], 
			camera:[7.3,14.20,9.70],
			texture:noise,
			data:[
				"4444444443333333",
				"4332333331111123",
				"4322111111111123",
				"4322222111112223",
				"4322112221222123",
				"4222111121211122",
				"4322112221222123",
				"4422222211112223",
				"4422111111111123",
				"4422222111111123",
				"4433333333333334"
			],
			gems:[[1,3,1],[1,3,6],[6,2,9]],
			crates:[[3,2.5,4], [3,2.5,6],[12,2.5,4], [12,2.5,6]],
			elevator:[[3,1,3],[1,5,3]],
			objects:[],
			triggers:[{
					x:6,
					z:1,
					y:3,
					color:4,
					triggered:false,
					bX:6,
					bZ:8,
					bH:1
				},{
					x:6,
					z:6,
					y:2,
					color:4,
					triggered:false,
					bX:9,
					bZ:5,
					bH:1
				}]
		},{
			start:{"x":2,"z":6},
			end:[14,4.5,8], 
			camera:[7.90,12.8,8.6],
			texture:noise,
			data:[
				"4444443333333333",
				"4333311111112223",
				"4223312221222223",
				"4322242121112323",
				"4323331122112223",
				
				"4222222222222223",
				"3222321122222113",
				"3222221111111113",
				"3232221222222223",
				"3333333333333333"
			],
			gems:[[11,2,2],[10,2,8],[12,2,8]],
			crates:[[2,2.5,3], [3,3.5,2], [13,2.5,4]],
			elevator:[[1,5,3],[6,3,3]],
			objects:[],
			triggers:[
				{
					x:4,
					z:3,
					y:2,
					color:4,
					triggered:false,
					bX:5,
					bZ:3,
					bH:-1
				},{
					x:3,
					z:6,
					y:2,
					color:4,
					triggered:false,
					bX:1,
					bZ:2,
					bH:1
				},{
					x:10,
					z:2,
					y:2,
					color:4,
					triggered:false,
					bX:6,
					bZ:8,
					bH:1
				},{
					x:6,
					z:5,
					y:2,
					color:7,
					triggered:true,
					bX:6,
					bZ:5,
					bH:1
				}
			]
		},{
			start:{x:3,z:5},
			end:[16,6.5,5], 
			camera:[8.90, 13.80, 9.30],
			texture:noise,
			data:[
				"66666666666666666",
				"51111111111112345",
				"52222222211112345",
				"52333332222112345",
				"52344432212112345",
				"52344432111112344",
				"52344432212112345",
				"52333332222112345",
				"52222222211112345",
				"51111111111112345",
				"62222222222223455",
			],
			gems:[[13,2,4],[14,3,4],[15,4,4],[13,2,6],[14,3,6],[15,4,6]],
			crates:[[5,4.5,4],[5,4.5,5],[5,4.5,6]],
			elevator:[[13,5,3],[14,5,4],[15,5,5]],
			objects:[],
			triggers:[{
					x:1,
					z:8,
					y:2,
					color:4,
					triggered:false,
					bX:10,
					bZ:5,
					bH:1
				},{
					x:8,
					z:2,
					y:2,
					color:4,
					triggered:false,
					bX:11,
					bZ:5,
					bH:1
				},{
					x:1,
					z:3,
					y:2,
					color:4,
					triggered:false,
					bX:12,
					bZ:5,
					bH:1
				}]
		},{
			start:{"x":2,"z":2},
			end:[12,3.5,1], 
			camera:[7,10.90,7.40],
			texture:noise2,
			data:[
				"3333333333333",
				"3332122221222",
				"3322111111111",
				"3322111112221",
				"3322222222321",
				"3322111122221",
				"3333111123211",
				"3111111122211",
				"3111111111111"
			],
			gems:[[6,2,1], [9,2,1]],
			crates:[[3,2.5,4],[3,2.5,3]],
			elevator:[],
			objects:[],
			triggers:[{
					x:2,
					z:4,
					y:2,
					color:4,
					triggered:false,
					bX:4,
					bZ:1,
					bH:1
				},{
					x:2,
					z:3,
					y:2,
					color:4,
					triggered:false,
					bX:9,
					bZ:1,
					bH:1
				}]
		},{
			start:{"x":1,"z":6},
			end:[10,3.5,8], 
			camera:[5,11.90,8.3],
			texture:noise2,
			data:[
				"33333333333",
				"11111222223",
				"11112222213",
				"31111112211",
				"32222222311",
				"32222222211",
				"32221122211",
				"32221111111",
				"32211111112",
				"33331111111"
			],
			gems:[[6,2,6], [3,2,4], [4,2,2]],
			crates:[[2,2.5,4],[3,2.5,5],[4,2.5,4],[6,2.5,4],[7,2.5,4]],
			elevator:[],
			objects:[],
			triggers:[{
					x:1,
					y:2,
					z:8,
					color:4,
					triggered:false,
					bX:9,
					bZ:8,
					bH:1
				},{
					x:3,
					y:2,
					z:7,
					color:4,
					triggered:false,
					bX:8,
					bZ:8,
					bH:1
				},{
					x:3,
					y:2,
					z:6,
					color:4,
					triggered:false,
					bX:7,
					bZ:8,
					bH:1
				},{
					x:5,
					y:2,
					z:1,
					color:4,
					triggered:false,
					bX:6,
					bZ:8,
					bH:1
				},{
					x:9,
					y:2,
					z:1,
					color:4,
					triggered:false,
					bX:6,
					bZ:7,
					bH:1
				}]
		},{
			start:{"x":2,"z":4},
			end:[9,5.5,4],
			camera:[4.6,12,7.5],
			texture:mur,
			data:[
				"555555555555",
				"534333332555",
				"533333342555",
				"534333332345",
				"534443432335",
				"534333332345",
				"534333332555",
				"534344332555",
				"555555555555",
			],
			gems:[[2,4,1],[2,4,7]],
			crates:[[4,3.5,2],[6,3.5,6],[2,4.5,5]],
			objects:[],
			elevator:[[4,3,4],[3,7,4]],
			triggers:[{
					x:6,
					y:3,
					z:5,
					color:4,
					triggered:false,
					bX:5,
					bZ:4,
					bH:1
				},{
					x:1,
					y:3,
					z:7,
					color:4,
					triggered:false,
					bX:5,
					bZ:4,
					bH:1
				}
			]
		},{
			start:{"x":1,"z":2},
			end:[12,4.5,10],
			camera:[8.4,15.90,10.4],
			texture:mur,
			data:[
				"44445555555555555",
				"43333354544443435",
				"43334344545443235",
				"43333344444443225",
				"42223345555553224",
				"42323234222253224",
				"42322222233253224",
				"42333234333253224",
				"43333223222222224",
				"42223223333333224",
				"42222222222223444",
				"43333333333333444"
			],
			gems:[[11,4,1],[6,3,5],[14,2,9],[9,2,10],[10,2,10]],
			crates:[[12,2.5,8],[6,4.5,2],[4,4.5,2]],
			elevator:[[14,2,3],[15,3,3],[15,1,4],[13,1,4],[5,3,4],[1,4,3],[4,3,4]],
			objects:[
				{
					x:4,
					y:2.5,
					z:10,
					h:0.,
					w:0.5,
					d:0.5,
					type:"elec",
					G:0,
					rotation:{
						x:0,
						y:Math.PI/2,
						z:0
					}
				},{
					x:7,
					y:2.5,
					z:10,
					h:0.,
					w:0.5,
					d:0.5,
					type:"elec",
					G:0,
					rotation:{
						x:0,
						y:Math.PI/2,
						z:0
					}
				}
			],
			triggers:[
				{
					x:3,
					y:3,
					z:2,
					color:4,
					triggered:false,
					objID:0, //ID de l'object
					type:"disable" //couper alim
				},{
					x:2,
					y:2,
					z:10,
					color:4,
					triggered:false,
					objID:1, //ID de l'object
					type:"disable" //couper alim
				},{
					x:9,
					y:4,
					z:1,
					color:4,
					triggered:false,
					bX:6,
					bZ:4,
					bH:-1
				}
			]
		},{
			start:{"x":2,"z":3},
			end:[10,3,3],
			camera:[3.8,3.4,3.4],
			texture:noise,
			data:[
				"333333333333",
				"112222333333",
				"112222333333",
				"112222222223",
				"112222333333",
				"112222333333",
				"333333333333"
			],
			gems:[],
			crates:[[5,2.5,3]],
			elevator:[],
			objects:[],
			triggers:[]
		}
	];
	
	// Recopie les triggers et les heights dans un tableau plus rapide à accéder (mais qui serait plus long à écrire)
	for (var level of levels) {
		level.height = level.data.length;
		level.width = level.data[0].length;
//		level.nbGems = level.gems.length;
		level.tiles = new Array(level.height).fill(null).map(() => new Array(level.width).fill(null));
		for (var z=0; z<level.height; z++) {
			for (var x=0; x<level.width; x++) {
				var h = level.data[z][x]-0;
				level.tiles[z][x] = {h:h, t:null, texture:level.texture};
			}
		}
		
		// Mur extérieur
		level.objects.push({
			x:-3.5,
			y:0.,
			z:4.5,
			h:3,
			d:7,
			w:3,
			type:"wall",
			texture:level.texture 
		},{
			x:level.width + 2.5,
			y:0,
			z:4.5,
			h:3,
			d:7,
			w:3,
			type:"wall",
			texture:level.texture
		});
		level.objects.push({
			x:level.end[0]+.05,
			y:level.end[1]-3.5,
			z:level.end[2]+.05,
			h:2.5,
			d:0.025,
			w:0.025,
			type:"wall2",
			texture:exit 
		});
		level.objects.push({
			x:level.end[0]+.05,
			y:level.end[1]-0.75,
			z:level.end[2]+.05,
			h:0.25,
			d:0.5,
			w:0.025,
			type:"wall2",
			texture:exit,
			rotation:{
				x:0,
				y:0.1,
				z:0
			}
		});
		
		for (var g of level.gems) {
			level.objects.push({
				x:g[0],
				y:g[1]+0.5,
				z:g[2],
				h:0.15,
				w:0.15,
				d:0.15,
				type:"gem",
				rotation:{
					x:0,
					y:0,
					z:0
				}
			})
		}
		for (var g of level.crates) {
			level.objects.push({
				x:g[0],
				y:g[1],
				z:g[2],
				h:0.5,
				type:"crate",
				texture:crate
			})
		}
		for (var g of level.elevator) {
			level.triggers.push({
				x:g[0],
				y:g[2],
				z:g[1],
				color:3,
				triggered:false,
				bX:g[0],
				bZ:g[1],
				bH:1
			})
		}
		
		
		
		for (var t of level.triggers) {
			t.trigger = function(state) {
				if (this.triggered==state) { return; }
				this.triggered = state;
				
				if (state && this.color==7) { //Dalle qui ne tiennent pas
					return;
				}
				if (!state && this.color==7) { //Dalle qui ne tiennent pas
					this.disabled = true;
				}
				
				if (state) {
					playSound([1,0,0.04237237148676246,0,0.19584240715207285,0.498,0,0.222,0.248,0,0,0,0,1,0,0,0,0,1,0,0,0.9712656456828678,0,0.25]);
				} else {
					playSound([1,0,0.04237237148676246,0,0.19584240715207285,0.498,0,-0.222,0.248,0,0,0,0,1,0,0,0,0,1,0,0,0.9712656456828678,0,0.25]);
				}
				switch (this.type) {
					case "disable": //C'est un trigger switch
						levels[levelEnCours].objects[this.objID].disabled = this.triggered;
						break;
					default: //C'est un trigger switch
	//					Quelqu'un s'en va du trigger, mais ça ne veut pas dire que plus rien n'appuie dessus ?'
						levels[levelEnCours].tiles[this.bZ][this.bX].targetH = levels[levelEnCours].tiles[this.bZ][this.bX].h + (this.triggered ? this.bH : -this.bH);
						
						break;
				}
			}
			level.tiles[t.z][t.x].t = t;
		}
	}
	
	player = {
		x:levels[levelEnCours].start.x,
		y:8,
		z:levels[levelEnCours].start.z,
		inMove:false,
		targetX:0,
		targetZ:0,
		rotation:0,
		G:0,
		isDead:0
	}
	camera.x = levels[levelEnCours].camera[0];
	camera.y = levels[levelEnCours].camera[1];
	camera.z = levels[levelEnCours].camera[2];
	
	
	if (levelEnCours==11) {
		light = {
			x:15,
			y:17,
			z:13,
			rotation:{
				x:1,
				y:-0.5,
				z:0
			}
		}
	} else if (levelEnCours==12) {
		camera.rotation={
			x:0.56,
			y:-0.87,
			z:0.03
		};
	}
}


debug = function(name, value) { //#DEBUG
	var DIV = document.getElementById("DEBUG_"+name);//#DEBUG
	if (!DIV) {//#DEBUG
		var DIV = document.createElement('DIV');//#DEBUG
		DIV.id = "DEBUG_"+name;//#DEBUG
		document.getElementById("debug").appendChild(DIV);//#DEBUG
	}//#DEBUG
	DIV.innerHTML = name+" => "+value;//#DEBUG
}//#DEBUG

//thx to xem
t=m=u=r=d=l=0;onkeydown=onkeyup=e=>{
	this['lurd************************l**r********m***ltd***u**u'[e.which-37]]=!!e.type[5];
	e.which==77&&m ? sound=!sound : e.which==82&&t ? initLevels() : 0;
	!gameStarted && (levelEnCours++,initLevels(),gameStarted=true,camera.rotation={
		x:1.23,
		y:0,
		z:0
	});
}
