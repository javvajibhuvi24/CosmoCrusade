const canvas = document.getElementById('threeCanvas');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const starsGeometry = new THREE.BufferGeometry();
const starVertices = [];
for (let i = 0; i < 10000; i++) {
    starVertices.push((Math.random() - 0.5) * 2000);
    starVertices.push((Math.random() - 0.5) * 2000);
    starVertices.push((Math.random() - 0.5) * 2000);
}
starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

function animate() {
    starField.rotation.x += 0.0005;
    starField.rotation.y += 0.0005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
