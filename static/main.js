import {loadGLTF} from "./libs/loader.js";
import {mockWithVideo} from './libs/camera-mock.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    //mockWithVideo('../../assets/mock-videos/musicband1.mp4');

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: '/static/assets/targets/ceramica-2.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    //xconst raccoon2 = await loadGLTF('/static/assets/models/musicband-raccoon/scene.gltf');
    //const raccoon = await loadGLTF('/static/assets/models/upch-dia/images (1).gltf');
    const rana = await loadGLTF('/static/assets/models/rana/scene.gltf');
    const pengu = await loadGLTF('/static/assets/models/pinguino/scene.gltf');
    // const loro = await loadGLTF('/static/assets/models/loro/scene.gtlf');
    const lobo = await loadGLTF('/static/assets/models/lobo-marino/scene.gltf');
    const camaron = await loadGLTF('/static/assets/models/camaron/scene.gltf');
    const ciervo = await loadGLTF('/static/assets/models/ciervo/scene.gltf');


    //const chair = await loadGLTF('/static/assets/models/chair/scene.gltf');

    //                      X     Y    Z
    //raccoon.scene.scale.set(0.3, 0.3, 0.3);
    //raccoon2.scene.scale.set(0.03, 0.03, 0.03);
    //                         X    Y   Z
    //raccoon.scene.position.set(0, -0.4, 0);
    //raccoon2.scene.position.set(0,-0.4,0);

    rana.scene.scale.set(0.3 , 0.3, 0.3);
    pengu.scene.scale.set(0.3 , 0.3, 0.3);
    ciervo.scene.scale.set(0.3 , 0.3, 0.3);
    lobo.scene.scale.set(0.3 , 0.3, 0.3);
    camaron.scene.scale.set(0.3 , 0.3, 0.3);

    rana.scene.position.set(0, -0.4, 0);
    pengu.scene.position.set(0, -0.4, 0);
    ciervo.scene.position.set(0, -0.4, 0);
    lobo.scene.position.set(0, -0.4, 0);
    camaron.scene.position.set(0, -0.4, 0);
    
    const anchor_rana = mindarThree.addAnchor(0);
    anchor_rana.group.add(rana.scene);

    const anchor_pengu = mindarThree.addAnchor(1);
    anchor_pengu.group.add(pengu.scene);

    const anchor_ciervo = mindarThree.addAnchor(2);
    anchor_ciervo.group.add(ciervo.scene);

    const anchor_lobo = mindarThree.addAnchor(3);
    anchor_lobo.group.add(lobo.scene);

    const anchor_camaron = mindarThree.addAnchor(4);
    anchor_camaron.group.add(camaron.scene);


    //const anchor_1 = mindarThree.addAnchor(0);
    //anchor_1.group.add(raccoon.scene);

    /*
    const anchor_2 = mindarThree.addAnchor(1);
    anchor_2.group.add(raccoon2.scene);
    */
    
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
