import * as THREE from "three";

export default function chreateThreeObj(threeContainerRef){
    const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

    let container, camera, scene, renderer;
    let particles, count = 0;
    let xCameraPositionIncrement = 4
    let yCameraPositionIncrement = 4
    let zCameraPositionIncrement = 4
    const cameraPositionUpLimit = 1500
    const cameraPositionDownLimit = -1500

    init();
    animate();

    function init() {

        container = threeContainerRef;

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.x = Math.floor(Math.random() * 2000) - 1000;
        camera.position.y = Math.floor(Math.random() * 2000) - 1000;
        camera.position.z = Math.floor(Math.random() * 2000) - 1000;

        scene = new THREE.Scene();
        scene.background = new THREE.Color( "#6c757d" );

        const numParticles = AMOUNTX * AMOUNTY;

        const positions = new Float32Array( numParticles * 3 );
        const scales = new Float32Array( numParticles );

        let i = 0, j = 0;

        for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

                positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
                positions[ i + 1 ] = 0; // y
                positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

                scales[ j ] = 1;

                i += 3;
                j ++;

            }

        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

        const material = new THREE.ShaderMaterial( {

            uniforms: {
                color: { value: new THREE.Color( 0xffffff ) },
            },
            vertexShader: `
            attribute float scale;

            void main() {

                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

                gl_PointSize = scale * ( 300.0 / - mvPosition.z );

                gl_Position = projectionMatrix * mvPosition;

            }
            `,
            fragmentShader: `
            uniform vec3 color;

            void main() {

                if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

                gl_FragColor = vec4( color, 1.0 );

            }
            `

        } );

        particles = new THREE.Points( geometry, material );
        scene.add( particles );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, document.getElementById("header").offsetHeight);
        
        container.appendChild( renderer.domElement );
        window.addEventListener( 'resize', onWindowResize );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, document.getElementById("header").offsetHeight );
    }


    function animate() {

        requestAnimationFrame( animate );
        render();
    }

    function render() {

        if(camera.position.x >= cameraPositionUpLimit || camera.position.x <= cameraPositionDownLimit)  xCameraPositionIncrement *= -1
        if(camera.position.y >= cameraPositionUpLimit || camera.position.y <= cameraPositionDownLimit)  yCameraPositionIncrement *= -1
        if(camera.position.z >= cameraPositionUpLimit || camera.position.z <= cameraPositionDownLimit)  zCameraPositionIncrement *= -1
        camera.position.x += xCameraPositionIncrement;
        camera.position.y += yCameraPositionIncrement;
        camera.position.z += zCameraPositionIncrement;

        camera.lookAt( scene.position );

        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;

        let i = 0, j = 0;

        for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

            for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;
                i += 3;
                j ++;

            }

        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.scale.needsUpdate = true;

        renderer.render( scene, camera );

        count += 0.1;
    }
}