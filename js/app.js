'use strict';

let width = window.innerWidth;
let height = window.innerHeight;
let aspect = width / height;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

const render = () => {
  requestAnimationFrame(render);
  cube.rotation.x += 0.04;
  cube.rotation.y += 0.04;
  renderer.render(scene, camera);
};

render();