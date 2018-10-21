//Parametric equation is from https://en.wikipedia.org/wiki/M%C3%B6bius_strip

function xpos(u, v){
	return (1 + (v/2) * Math.cos(u/2)) * Math.cos(u);
}

function ypos(u, v) {
	return (1 + (v/2) * Math.cos(u/2)) * Math.sin(u);
}

function zpos(u, v){
	return v/2 * Math.sin(u/2)
}

function mobius (u, v, vec3){
 	u = 2 * Math.PI * u;
 	v -= 0.5;
	vec3.set (xpos(u,v), ypos(u,v), zpos(u,v));

}


var preCanvas = document.getElementById('canvas-js');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, preCanvas.width/preCanvas.height, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( {canvas: preCanvas, antialias:true});

renderer.setSize(preCanvas.width, preCanvas.height);

//Could have used the three.js Parametric equation, 
//but I wanted to try to make it old fashioned.
var geometry = new THREE.ParametricGeometry(mobius, 20, 3);
var material = new THREE.MeshBasicMaterial({wireframe:true});
//material.side = THREE.DoubleSide;
var mob = new THREE.Mesh(geometry, material);
scene.add(mob);


camera.position.z = 3;

var animate = function() {
	requestAnimationFrame(animate);

	mob.rotation.x += 0.01;
	mob.rotation.y += 0.01;
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();

