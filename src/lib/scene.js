/* eslint-disable no-case-declarations */
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	AmbientLight,
	DirectionalLight,
	SphereGeometry,
	BackSide,
	Mesh,
	MeshBasicMaterial,
	Vector3,
	MeshLambertMaterial,
	PlaneGeometry,
	TextureLoader,
	Group,
	RepeatWrapping,
	MeshPhongMaterial
} from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import WebXRPolyfill from 'webxr-polyfill';
import TWEEN from '@tweenjs/tween.js/dist/tween.esm.js';
import * as THREE from '../../node_modules/three/build/three.module.js'
import { InstancedFlow } from "./flow.js"

const sceneRadius = 500;

const cameraGroup = new Group();

const canvas = document.querySelector('canvas');
const context = canvas.getContext( 'webgl2', { antialias: true } );
const renderer = new WebGLRenderer({ canvas, context });
renderer.xr.enabled = true;
renderer.logarithmicDepthBuffer = true;
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new Scene();
scene.name = "xrgarden"
window.scene = scene;
const camera = new PerspectiveCamera();
camera.far = 1000;
cameraGroup.add(camera);
scene.add(cameraGroup);

const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 1;
controls.maxDistance = 10;
camera.position.set(0, 1.6, -5);
controls.target = new Vector3(0, 1, 0);
controls.update();

function onWindowResize() {
	const w = window.innerWidth;
	const h = window.innerHeight;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(w, h);
}
window.addEventListener('resize', onWindowResize, false);
onWindowResize();

const light = new DirectionalLight(0xffaa33);
light.position.set(-sceneRadius, sceneRadius, sceneRadius);
light.intensity = 1.0;
scene.add(light);
// Add the sun
light.add(
	new Mesh(new SphereGeometry(sceneRadius/10, 32, 32), new MeshBasicMaterial({
		color: 0xffaa33
	}))
)

const light2 = new AmbientLight(0x003973);
light2.intensity = 1.0;
scene.add(light2);

const skygeometry = new SphereGeometry(sceneRadius, 50, 50, 0, 2 * Math.PI);
const skymaterial = new MeshBasicMaterial({
	side: BackSide,
	depthWrite: false
});

skymaterial.onBeforeCompile = function (shader) {
	shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\n#define USE_UV');
	shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `
    #include <common>
    #define USE_UV
    `);
	shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
        vec4 col1 = vec4( 249, 229, 180, 255 ) / 255.0;
        vec4 col2 = vec4( 0, 57, 115, 255 ) / 255.0;
        float mixAmount = 0.0;
        if (vUv.y > 1) {
            float newY = (vUv.y - 1) * 2.0;
            mixAmount = sqrt(newY)*2.0;
        } else {
            col1 = vec4(0.6,0.6,0.6,1.0);
		}
        diffuseColor *= mix(col1, col2, mixAmount);
    `);
};
skymaterial.dithering = true;
const skysphere = new Mesh(skygeometry, skymaterial);
skysphere.name = 'skysphere';
scene.add(skysphere);

const floorTexture = new TextureLoader().load('https://cdn.glitch.com/3423c223-e1e5-450d-8cfa-2f5215104916%2Fmemphis-mini.png?v=1579618577700');
floorTexture.repeat.multiplyScalar(sceneRadius/5);
floorTexture.wrapS = floorTexture.wrapT = RepeatWrapping;
const floor = new Mesh(
	new PlaneGeometry(sceneRadius*2,sceneRadius*2,50,50),
	new MeshLambertMaterial({
		map: floorTexture
	})
);
floor.rotation.x = -Math.PI / 2;
floor.name = 'floor';
scene.add(floor);

const waterTexture = new TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg');
waterTexture.wrapS = waterTexture.wrapT = RepeatWrapping;
waterTexture.repeat.multiplyScalar(sceneRadius/50);
const water = new Mesh(
	new PlaneGeometry(sceneRadius*2,sceneRadius*2,50,50),
	new MeshPhongMaterial({
		normalMap: waterTexture,
		shininess: 1,
		color: 0x8ab39f,
		transparent: true,
		opacity: 0.4
	})
);
water.geometry.rotateX(-Math.PI / 2);
water.position.y = 5.0;
scene.add(water);

new WebXRPolyfill();
const vrbutton = VRButton.createButton(renderer);
document.body.appendChild(vrbutton);
vrbutton.addEventListener('click', function () {
	if (!window.canaudio.checked) window.canaudio.click();
});

const rafCallbacks = new Set();

rafCallbacks.add(function (t) {
	water.material.normalMap.offset.x += 0.01 * Math.sin(t / 10000)/sceneRadius;
	water.material.normalMap.offset.y += 0.01 * Math.cos(t / 8000)/sceneRadius;
	water.material.normalScale.x = 10 * (0.8 + 1 * Math.cos(t / 1000));
	water.material.normalScale.y = 10 * (0.8 + 1 * Math.sin(t / 1200));
	water.position.y = 5.0 + 0.1 * Math.sin(t / 2000);
});


//控制器
const curveHandles = [];
const boxGeometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
const boxMaterial = new THREE.MeshBasicMaterial();
let controlFlow;

const curves = [
	[
		{ x: 1, y: 3, z: -1 },
		{ x: 3, y: 4, z: 3 },
		{ x: -4, y: 2, z: 3 },
		{ x: -1, y: 2, z: -4 },
	],
	[
		{ x: 1, y: 1, z: 0 },
		{ x: -2, y: 2, z: 0 },
		{ x: 4, y: 1, z: -1 },
		{ x: 3, y: 3, z: -3 },
	],
	[
		{ x: 1, y: 1, z: -2 },
		{ x: -3, y: 3, z: 3 },
		{ x: 1, y: 1, z: 1 },
		{ x: -1, y: 3, z: -4 },
	]
].map( function ( curvePoints ) {

	const curveVertices = curvePoints.map( function ( handlePos ) {

		const handle = new THREE.Mesh( boxGeometry, boxMaterial );
		handle.position.copy( handlePos );
		curveHandles.push( handle );
		scene.add( handle );
		return handle.position;

	} );

	const curve = new THREE.CatmullRomCurve3( curveVertices );
	curve.curveType = 'centripetal';
	curve.closed = true;

	const points = curve.getPoints( 50 );
	const line = new THREE.LineLoop(
		new THREE.BufferGeometry().setFromPoints( points ),
		new THREE.LineBasicMaterial( { color: 0x00ff00 } )
	);

	scene.add( line );

	return {
		curve,
		line
	};

} );

//控制器loader
const loader = new THREE.FontLoader();
loader.load( 'assets/helvetiker_regular.typeface.json', function ( font ) {

	const geometry = new THREE.TextGeometry( 'AUV', {
		font: font,
		size: 0.2,
		height: 0.05,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 0.02,
		bevelSize: 0.01,
		bevelOffset: 0,
		bevelSegments: 5,
	} );

	geometry.rotateX( Math.PI );

	const material = new THREE.MeshStandardMaterial( {
		color: 0x99ffff
	} );

	const numberOfInstances = 3;
	controlFlow = new InstancedFlow( numberOfInstances, curves.length, geometry, material );

	curves.forEach( function ( { curve }, i ) {

		controlFlow.updateCurve( i, curve );
		scene.add( controlFlow.object3D );

	} );

	for ( let i = 0; i < numberOfInstances; i ++ ) {

		const curveIndex = i % curves.length;
		controlFlow.setCurve( i, curveIndex );
		controlFlow.moveIndividualAlongCurve( i, i * 1 / numberOfInstances );
		controlFlow.object3D.setColorAt( i, new THREE.Color( 0xffffff * Math.random() ) );

	}

} );

//动画
renderer.setAnimationLoop(function (time) {
	TWEEN.update(time);
	rafCallbacks.forEach(cb => cb(time));
	renderer.render(scene, camera);
	if( controlFlow ){
		controlFlow.moveAlongCurve( 0.002 );
	}
});




export {
	renderer,
	scene,
	rafCallbacks,
	cameraGroup,
	camera,
	context,
	water,
	floor,
	controls
}