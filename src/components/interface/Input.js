export const button = (nClass, name) => {
  return `<button type="submit" class="${nClass}">${name}</button>`;
};

export const textBox = (id, nclass, text) => {
  return `<input type="text" id="${id}" class="${nclass}" placeholder="${text}"/>`;
};


