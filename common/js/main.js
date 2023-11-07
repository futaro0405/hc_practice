(() => {
  const apiKey ={
    all:     "https://ihatov08.github.io/kimetsu_api/api/all.json",
    hashira: "https://ihatov08.github.io/kimetsu_api/api/hashira.json",
    oni:     "https://ihatov08.github.io/kimetsu_api/api/oni.json",
    kisatsu: "https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json"
  }

  const filter = document.getElementById('js-filter');
  const categories = filter.querySelectorAll('input[name=category]');

  function selectItem() {
    for(let i = 0; i < categories.length; i++) {
      if(categories.item(i).checked) {
        checkValue = categories.item(i).value;
        console.log(apiKey[checkValue]);
        break;
      }
    }

    callApi(apiKey[checkValue]);
  }

  function outputData(json) {
    const panel = document.getElementById("js-panel");
    const panelClone = panel.cloneNode(false);
    panel.parentNode.replaceChild(panelClone, panel);
    const template = document.querySelector('.js-panel__template').content;
    const fragment = document.createDocumentFragment();

    for(const data of json) {
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

    panelClone.appendChild(fragment);
  };

  async function callApi(apiKey) {
    try {
      const res = await fetch(apiKey);
      const data = await res.json();

      if(!res.ok) {
        throw new Error("API Can't be loaded");
      }

      outputData(data);
    } catch(error) {
      console.error('error', error);
    }
  };

  const init = () => {
    selectItem();
  };

  categories.forEach((category) => {
    category.addEventListener('change', selectItem);
  });

  init();
})();
