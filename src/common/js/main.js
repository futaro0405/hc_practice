(() => {
  const init = () => {
    const template = document.querySelector<HTMLTemplateElement>('.js-panel__template');
    const templateError = document.querySelector<HTMLTemplateElement>('.js-panel__templateError');
  };

  init().catch((error) => {
    throw Error(error);
  })
})();