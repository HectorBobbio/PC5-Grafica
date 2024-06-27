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
    const loro = await loadGLTF('/static/assets/models/loro/scene.gltf');
    // const loro = await loadGLTF('/static/assets/models/loro/scene.gtlf');
    const pinguino = await loadGLTF('/static/assets/models/pinguino/scene.gltf');
    const camaron = await loadGLTF('/static/assets/models/camaron/scene.gltf');
    const ciervo = await loadGLTF('/static/assets/models/ciervo/scene.gltf');


    //const chair = await loadGLTF('/static/assets/models/chair/scene.gltf');

    //                      X     Y    Z
    //raccoon.scene.scale.set(0.3, 0.3, 0.3);
    //raccoon2.scene.scale.set(0.03, 0.03, 0.03);
    //                         X    Y   Z
    //raccoon.scene.position.set(0, -0.4, 0);
    //raccoon2.scene.position.set(0,-0.4,0);

    rana.scene.scale.set(4, 4, 4);
    loro.scene.scale.set(0.5 , 0.5, 0.5);
    pinguino.scene.scale.set(0.2 , 0.2, 0.2);
    camaron.scene.scale.set(0.2 , 0.2, 0.2);
    ciervo.scene.scale.set(0.01 , 0.01, 0.01);

    rana.scene.position.set(0.4, 0, 0);
    loro.scene.position.set(0.4, 0, 0);
    pinguino.scene.position.set(0.4, 0, 0);
    camaron.scene.position.set(0.4, 0, 0);
    ciervo.scene.position.set(0.4, 0, 0);

    pinguino.scene.rotation.set(0,1,0)
    ciervo.scene.rotation.set(0,1,0)
    
    const anchor_rana = mindarThree.addAnchor(0);
    anchor_rana.group.add(rana.scene);

    const anchor_loro = mindarThree.addAnchor(1);
    anchor_loro.group.add(loro.scene);

    const anchor_pinguino = mindarThree.addAnchor(2);
    anchor_pinguino.group.add(pinguino.scene);

    const anchor_camaron = mindarThree.addAnchor(3);
    anchor_camaron.group.add(camaron.scene);

    const anchor_ciervo = mindarThree.addAnchor(4);
    anchor_ciervo.group.add(ciervo.scene);


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
