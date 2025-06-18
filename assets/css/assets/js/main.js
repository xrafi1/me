// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}));

// Three.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bgCanvas'), alpha: true });
renderer.setSize = function() { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffab, wireframe: true });
const cubes = [];

for (let i = 0; i <= 100; i++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
    );
    cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    );
    scene.add(cube);
    cubes.push(cube);
}

function animate() {
    requestAnimationFrame(animate);
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
}
animate();

// Resize Listener
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Contact Form Submission (Placeholder)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (Note: This is a placeholder; backend integration required.)');
    e.target.reset();
});
