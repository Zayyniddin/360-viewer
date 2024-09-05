window.init360Viewer = function (containerSelector, firstImageUrl, secondImageUrl) {
  console.log('Initializing 360 viewer with first image:', firstImageUrl);

  const imageContainer = document.querySelector(containerSelector);

  if (!imageContainer) {
    console.error('Container not found');
    return;
  }

  // Создаем Viewer
  const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
    mobileCheck: true,
  });

  function createFirstPanorama() {
    const panoramaImage = new PANOLENS.ImagePanorama(firstImageUrl);
    const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
    infospot.position.set(5000, -500, -2000);
    infospot.addHoverText("Bathroom");
    
    // Добавляем событие клика на инфоспот первой панорамы
    infospot.addEventListener('click', () => {
      console.log('Switching to second panorama');
      switchPanorama(createSecondPanorama(), () => infospot.removeHoverElement());
    });

    panoramaImage.add(infospot);
    return panoramaImage;
  }

  function createSecondPanorama() {
    const panorama = new PANOLENS.ImagePanorama(secondImageUrl);
    const backInfospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
    backInfospot.position.set(5000, -500, -5000);
    backInfospot.addHoverText("Back to Living Room");

    // Добавляем событие клика на инфоспот второй панорамы
    backInfospot.addEventListener('click', () => {
      console.log('Switching back to first panorama');
      switchPanorama(createFirstPanorama(), () => backInfospot.removeHoverElement());
    });

    panorama.add(backInfospot);
    return panorama;
  }


  function switchPanorama(newPanorama, removeHoverElement) {
    // Удаляем текущую панораму и её инфоспоты
    viewer.remove(viewer.panorama);
    removeHoverElement();

    // Добавляем новую панораму и устанавливаем её
    viewer.add(newPanorama);
    viewer.setPanorama(newPanorama);
  }

  // Инициализируем Viewer с первой панорамой
  const firstPanorama = createFirstPanorama();
  viewer.add(firstPanorama);
  viewer.setPanorama(firstPanorama);
};
