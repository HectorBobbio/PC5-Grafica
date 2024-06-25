import {loadGLTF} from "./libs/loader.js";
import {mockWithVideo} from './libs/camera-mock.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    //mockWithVideo('../../assets/mock-videos/musicband1.mp4');

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: '/static/assets/targets/luka-libro.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const raccoon2 = await loadGLTF('/static/assets/models/musicband-raccoon/scene.gltf');
    const raccoon = await loadGLTF('/static/assets/models/upch-dia/images (1).gltf');
    //const chair = await loadGLTF('/static/assets/models/chair/scene.gltf');

    //                      X     Y    Z
    raccoon.scene.scale.set(0.01, 0.01, 0.01);
    raccoon2.scene.scale.set(0.03, 0.03, 0.03);
    //                         X    Y   Z
    raccoon.scene.position.set(0, -0.4, 0);
    raccoon2.scene.position.set(0,-0.4,0);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(raccoon.scene, raccoon2.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
