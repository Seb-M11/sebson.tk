export default class VTag {
  element: Element;

  constructor(tagname: string);
  constructor(element: Element);
  constructor(tag: string | Element) {
    this.element = typeof tag === 'string' ? document.createElement(tag) : tag;
  }

  static select(selector: string): VTag {
    return new VTag(document.querySelector(selector));
  }

  append(child: VTag, count = 1): void {
    if (count === 1) {
      this.element.appendChild(child.element);
    } else {
      const children = document.createDocumentFragment();
      for (let i = 0; i < count; ++i) {
        children.appendChild(child.element.cloneNode(true));
      }
      this.element.appendChild(children);
    }
  }
}
