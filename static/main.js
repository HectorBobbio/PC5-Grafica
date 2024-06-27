import {loadGLTF} from "./libs/loader.js";
import {mockWithVideo} from './libs/camera-mock.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    //mockWithVideo('../../assets/mock-videos/musicband1.mp4');

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: '/static/assets/targets/test-sapo.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const rana = await loadGLTF('/static/assets/models/rana/scene.gltf');

    //                      X     Y    Z
    rana.scene.scale.set(0.01, 0.01, 0.01);
    //                         X    Y   Z
    rana.scene.position.set(0, -0.4, 0);
    

    const anchor_rana = mindarThree.addAnchor(0);
    anchor_rana.group.add(rana.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
