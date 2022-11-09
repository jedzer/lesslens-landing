import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from ' https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from ' https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';


const models = [
    {
        title: "Springfield 2020",
        source: "models/TO1.gltf"
    },
    {
        title: "Springfield RD",
        source: "models/TO2.gltf"
    },
    {
        title: "Springfield RL",
        source: "models/TO3.gltf"
    },
    {
        title: "Springfield Rectangular",
        source: "models/TO4.gltf"
    }
]



let dropdown = document.querySelector('select');
let option;


models.forEach( model => {
    option = new Option(model.title, model.source);
    dropdown.add( option, undefined );
});

let container = document.getElementById('scene'); 
let BG = getComputedStyle(container,"").getPropertyValue("background-color");

const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio( window.devicePixelRatio, false )
renderer.setSize( container.clientWidth, container.clientHeight );
renderer.toneMapping = THREE.LinearToneMapping; // THREE.NoToneMapping THREE.LinearToneMapping THREE.ReinhardToneMapping THREE.CineonToneMapping THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1;
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true
renderer.outputEncoding = THREE.sRGBEncoding
container.appendChild( renderer.domElement );

const scene = new THREE.Scene()


const camera = new THREE.PerspectiveCamera(  24, container.clientWidth / container.clientHeight, 0.01, 10 )
camera.position.set(1, 0.5, 1)
camera.zoom = Math.abs( container.clientWidth / container.clientHeight / Math.sin( camera.fov / 2 ) );
camera.updateProjectionMatrix();

// Orbit Controls

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set( 0, 0, -0.06 );
controls.enableDamping = true;
controls.autoRotate  = true;
controls.autoRotateSpeed = 1;
controls.enablePan = false;
controls.maxDistance = 1.2;
controls.minDistance = 0.5;

// HDRI Lightning

new RGBELoader()
    .setDataType( THREE.UnsignedByteType )
    .load( 'environment.hdr', function ( texture ) {

    let hdri = pmremGenerator.fromEquirectangular( texture ).texture;

    // scene.background = new THREE.Color( BG );
    scene.background = hdri
    scene.environment = hdri;

    texture.dispose();
    pmremGenerator.dispose();
})
let pmremGenerator = new THREE.PMREMGenerator( renderer );
pmremGenerator.compileEquirectangularShader();


// Sky

const skyGeometry = new THREE.SphereGeometry(5, 24, 24);
const skyMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('sky.png'), side: THREE.BackSide });
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

// Plane
const floorGeometry = new THREE.PlaneGeometry( 0.3, 0.3 );
const floorMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('floor.png'), transparent: true});
const floor = new THREE.Mesh( floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / -2;
floor.position.set( 0, -0.05, -0.08 );
scene.add( floor );

// Model

const loader = new GLTFLoader()

function loadGLTF(source = models[0].source) {
    loader.load( source, (gltf) => {
        gltf.scene.traverse(( object ) => {
            if ( object.isMesh ) object.transparent = true;
            if ( object.isMaterial ) object.transparent = true;
        } );
        // scene.remove(gltf.scene);
        scene.add(gltf.scene)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)
}


window.addEventListener('resize', onWindowResize, false)
dropdown.addEventListener('change', (event) => { 
    scene.remove(scene.children[2])
    loadGLTF(event.target.value)
    camera.updateProjectionMatrix()
});

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight )
    render()
}


function animate() {
    requestAnimationFrame(animate)
    controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}

loadGLTF()
animate()

