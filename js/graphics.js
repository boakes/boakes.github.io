//Parametric equation is from https://en.wikipedia.org/wiki/M%C3%B6bius_strip



function mobius (u, v, vec3){
 	u = 2 * Math.PI * u;
 	v -= 0.5;

 	function xpos(u, v){
	return (1 + (v/2) * Math.cos(u/2)) * Math.cos(u);
	}

	function ypos(u, v) {
		return (1 + (v/2) * Math.cos(u/2)) * Math.sin(u);
	}

	function zpos(u, v){
		return v/2 * Math.sin(u/2);
	}

	vec3.set (xpos(u,v), ypos(u,v), zpos(u,v));
}

function torus (u, v, vec3){
	u = 2 * Math.PI * u;
	v = 2 * Math.PI * v;

	r = 1/2;
	R = 1;

	function xpos(u, v){
		return (R + r * Math.cos(v)) * Math.cos(u);
	}

	function ypos(u, v) {
		return (R + r * Math.cos(v)) * Math.sin(u);
	}

	function zpos(u, v){
		return r * Math.sin(v);
	}
	vec3.set (xpos(u,v), ypos(u,v), zpos(u,v));
}

var mobiusCanvas = document.getElementById('canvas-mobius');
var torusCanvas = document.getElementById('canvas-torus')

var scene01 = new THREE.Scene();
var camera01 = new THREE.PerspectiveCamera(75, mobiusCanvas.width/mobiusCanvas.height, 0.1, 1000);
var renderer01 = new THREE.WebGLRenderer( {canvas: mobiusCanvas, antialias:true});
renderer01.setSize(mobiusCanvas.width, mobiusCanvas.height);

//Could have used the three.js Parametric equation, 
//but I wanted to try to make it old fashioned.
var geometry01 = new THREE.ParametricGeometry(mobius, 15, 3);
var material01 = new THREE.MeshBasicMaterial({wireframe:true});
var mob = new THREE.Mesh(geometry01, material01);
scene01.add(mob);


var scene02 = new THREE.Scene();
var camera02 = new THREE.PerspectiveCamera(75, torusCanvas.width/torusCanvas.height, 0.1, 1000);
var renderer02 = new THREE.WebGLRenderer( {canvas: torusCanvas, antialias:true});
renderer02.setSize(torusCanvas.width, torusCanvas.height);

var geometry02 = new THREE.ParametricGeometry(torus, 15, 5);
var material02 = new THREE.MeshBasicMaterial({wireframe:true});
var tor = new THREE.Mesh(geometry02, material02);
scene02.add(tor);


camera01.position.z = 3;
camera02.position.z = 3;


var animate = function() {
	requestAnimationFrame(animate);

	tor.rotation.x += 0.01;
	tor.rotation.y += 0.01;

	mob.rotation.x -= 0.01;
	mob.rotation.y += 0.01;

	renderer01.render(scene01, camera01);
	renderer02.render(scene02, camera02);
};

animate();

