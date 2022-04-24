export const isFirefox = () => {
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    return true;
  }
  return false;
};
