// Setup the Three.js scene for rotating planets
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Planets (create spheres for planets in the solar system)
const textureLoader = new THREE.TextureLoader();
const planets = [
    { name: 'Mercury', color: 0xaaaaaa, size: 0.5 },
    { name: 'Venus', color: 0xffcc00, size: 0.8 },
    { name: 'Earth', color: 0x0000ff, size: 1 },
    { name: 'Mars', color: 0xff0000, size: 0.7 },
    { name: 'Jupiter', color: 0xff9900, size: 1.5 },
];

planets.forEach((planet, index) => {
    const geometry = new THREE.SphereGeometry(planet.size, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: planet.color });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = (index + 1) * 5; // Place planets at different distances
    scene.add(sphere);
});

// Position camera
camera.position.z = 10;

// Mouse movement for camera rotation
document.addEventListener('mousemove', (event) => {
    camera.rotation.x = (event.clientY / window.innerHeight) * 0.1;
    camera.rotation.y = (event.clientX / window.innerWidth) * 0.1;
});

// Animate function to keep rotating the planets
function animate() {
    requestAnimationFrame(animate);
    planets.forEach((planet, index) => {
        scene.children[index].rotation.y += 0.01; // Rotate planets
    });
    renderer.render(scene, camera);
}

animate();
