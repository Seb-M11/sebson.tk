export default class VTag {
  readonly element: HTMLElement;

  constructor(tagname: keyof HTMLElementTagNameMap, children?: VTag[]);
  constructor(element: HTMLElement, children?: VTag[]);
  constructor(
    element: keyof HTMLElementTagNameMap | HTMLElement,
    children?: VTag[]
  ) {
    this.element =
      typeof element === 'string' ? document.createElement(element) : element;
    if (children) {
      this.append(children);
    }
  }

  static select(selector: string): VTag {
    return new VTag(document.querySelector(selector) as HTMLElement);
  }

  /** Warning: This uses the cloneNode() method, which strips off event listeners */
  multiply(count: number): VTag[] {
    const vTags = [];
    for (let i = 0; i < count; ++i) {
      vTags[i] = new VTag(this.element.cloneNode(true) as HTMLElement);
    }
    return vTags;
  }

  append(children: VTag[]): void {
    this.element.append(...children.map(child => child.element));
  }

  listen<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (event: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.element.addEventListener(type, listener, options);
  }

  getCSSProperty(property: string): string {
    return this.element.style.getPropertyValue(property);
  }

  setCSSProperty(property: string, value: string): void {
    this.element.style.setProperty(property, value);
  }
}
