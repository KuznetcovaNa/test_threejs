var scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
camera.position.z = 500;
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff );
$(".content").append(renderer.domElement);

var loader = new THREE.TextureLoader();
loader.load( 'img/sun.jpg', function ( texture ) {

    var geometry = new THREE.SphereGeometry( 100, 20, 20 );
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

} );

var camera_controls = new THREE.TrackballControls(camera);
camera_controls.target.set(0, 0, 0);


function render() {
    requestAnimationFrame( render );

    scene.rotation.y -= 0.005;

    camera_controls.update();

    renderer.render( scene, camera );
}

render();

function change (){
}
