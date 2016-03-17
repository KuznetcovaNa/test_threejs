var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
$(".content").append(renderer.domElement);
var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
//var sphere = new THREE.Mesh( geometry, material );
var sphere = createMesh(new THREE.SphereGeometry(5, 20, 20), "sun.jpg");
scene.add( sphere );
camera.position.z = 30;

function render() {
    requestAnimationFrame( render );

    //sphere.rotation.x += 0.1;
    //sphere.rotation.y += 0.1;

    renderer.render( scene, camera );
}

render();

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("./img/" + imageFile);
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}

function change (){
}
