export const domUtils = {
  toArray(element: any): HTMLElement[] {
    return [].slice.call(element);
  },
  get(selector: string): HTMLElement {
    return document.querySelector(selector) as HTMLElement;
  },
  getAll(selector: string): HTMLElement[] {
    return this.toArray(document.querySelectorAll(selector)) as HTMLElement[];
  },
  create(element: string) {
    return document.createElement(element);
  },
};
