function container(){
    var middle_sphere;
    var flying_sphere;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
    var renderer = new THREE.WebGLRenderer();
    var loader = new THREE.TextureLoader();
    var step = 0;
    var camera_controls = new THREE.TrackballControls(camera);
    var middle_sphere_radius = 10;

    //Create a closed bent a sine-like wave
    var curve = new THREE.SplineCurve3( [
        new THREE.Vector3( -10, 0, 10 ),
        new THREE.Vector3( -5, 5, 5 ),
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 5, -5, 5 ),
        new THREE.Vector3( 10, 0, 10 )
    ] );

    var spline = new THREE.SplineCurve3(curve);

    var geometry = new THREE.Geometry();
    geometry.vertices = curve.getPoints( 10 );

    var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

//Create the final Object3d to add to the scene
    var spline_object = new THREE.Line( geometry, material );
    spline_object.position.z = 30;
    spline_object.geometry.verticesNeedUpdate = true;
    scene.add(spline_object);
    camera.position.z = 100;
    camera_controls.target.set(0, 0, 0);
    renderer.setClearColor( 0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    $(".content").append(renderer.domElement);

    function load_middle_sphere(){
        loader.load( 'img/sun.jpg', function ( texture ) {
            var geometry = new THREE.SphereGeometry( middle_sphere_radius, 32, 32 );
            var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
            middle_sphere = new THREE.Mesh( geometry, material );
            scene.add( middle_sphere );
        } );
    }

    function load_flying_sphere(){
        loader.load( 'img/polka_dot.jpg', function ( texture ) {
            var sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
            var sphereMaterial = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
            flying_sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            flying_sphere.position.x = 20;
            scene.add(flying_sphere);
        } );
    }

    function control_radius_middle(){
        $("#control_r_middle").change(function(){
            scene.remove(middle_sphere);
            middle_sphere_radius = $("#control_r_middle").val();
            load_middle_sphere();
        });
    }

    function render() {
        requestAnimationFrame( render );
        //middle_sphere.rotation.y += 0.005;
        //flying_sphere.rotation.y -= 0.01;
        step += 0.01;
        //flying_sphere.position.x = 20*Math.sin(step+Math.PI/2);
        //flying_sphere.position.z = 20*Math.sin(step);
        //flying_sphere.position.y += 0.02;
        camera_controls.update();
        renderer.render( scene, camera );
    }

    function init(){
        load_middle_sphere();
        load_flying_sphere();
        control_radius_middle();
        render();
    }

    init();

    return {
        curve: curve,
        spline_object: spline_object,
        geometry: geometry
    }
}

var physics = container();