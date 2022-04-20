const link = (nclass, title, href = "") => {
  return `<a href="#${href}" class="${nclass}" >${title}</a>`;
};

const linkSocial = (nclass, href, root) => {
  return `<a href="${href}" target="_blank" class="${nclass}" ><img src="${root}" class="${nclass}"></a>`;
};

export { link, linkSocial };
