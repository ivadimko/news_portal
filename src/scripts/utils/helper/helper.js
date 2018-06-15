import lineHeight from 'line-height';

export default class {
  static getStyle(el, prop) {
    const { getComputedStyle } = window;
    if (prop === 'line-height') return lineHeight(el);
    return (
      getComputedStyle ? getComputedStyle(el) : el.currentStyle
    )[prop.replace(/-(\w)/gi, (word, letter) => letter.toUpperCase())];
  }
}
