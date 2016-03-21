var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff );
$(".content").append(renderer.domElement);
camera.position.z = 300;

var loader = new THREE.TextureLoader();
loader.load( 'img/sun.jpg', function ( texture ) {

    var geometry = new THREE.SphereGeometry( 100, 20, 20 );
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

} );

function render() {
    requestAnimationFrame( render );

    scene.rotation.y -= 0.005;

    renderer.render( scene, camera );
}

render();

function change (){
}
