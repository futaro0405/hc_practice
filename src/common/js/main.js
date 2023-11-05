(() => {
  const outputData = (jsonAll) => {
    const template = document.querySelector('.js-panel__template').content;
    const fragment = document.createDocumentFragment();
    for(const data of jsonAll) {
      const clone = document.importNode(template, true);
      const cloneName = clone.querySelector('.m-panel__name');
      const cloneBadge = clone.querySelector('.m-panel__badgeItem');
      const cloneImage = clone.querySelector('.m-panel__image');
      console.log(fragment);

      cloneName.textContent = data.name;
      cloneBadge.textContent = data.category;
      cloneImage.src = data.image;

      fragment.appendChild(clone);
    }

    document.getElementById('js-panel').appendChild(fragment);
  };

  const callApi = async () => {
    // const resAll = await fetch("https://ihatov08.github.io/kimetsu_api/api/all.json");
    // const resHashira = await fetch("https://ihatov08.github.io/kimetsu_api/api/hashira.json ");
    // const resOni = await fetch("https://ihatov08.github.io/kimetsu_api/api/oni.json");
    // const resKisatsu = await fetch("https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json");

    try {
      const res = await fetch("https://ihatov08.github.io/kimetsu_api/api/all.json");
      if(!res.ok) {
        throw new Error("API Can't be loaded")
      }
      const data = await res.json();
      console.log(data);
      outputData(data);
    } catch(error) {
      console.error('error', error);
    }
  };

  

  const init = () => {
    callApi();
  };

  init();
})();