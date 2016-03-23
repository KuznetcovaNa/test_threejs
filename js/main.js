var scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
camera.position.z = 500;
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff );
$(".content").append(renderer.domElement);
var mesh;
var sphere;
var loader = new THREE.TextureLoader();
loader.load( 'img/sun.jpg', function ( texture ) {

    var geometry = new THREE.SphereGeometry( 10, 20, 20 );
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

} );
loader.load( 'img/polka_dot.jpg', function ( texture ) {

    var sphereGeometry = new THREE.SphereGeometry(2, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 10;
    scene.add(sphere);

} );
var camera_controls = new THREE.TrackballControls(camera);
camera_controls.target.set(0, 0, 0);
var step = 0;
function render() {
    requestAnimationFrame( render );

    mesh.rotation.y -= 0.005;
    sphere.rotation.y -= 0.005;
    step += 0.01;
    sphere.position.x = 15*Math.sin(step+Math.PI/2);
    sphere.position.y = 15*Math.sin(step);

    camera_controls.update();

    renderer.render( scene, camera );
}

render();

function change (){
}