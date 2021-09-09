export type Selector = string | HTMLElement;
import { domUtils } from "./domUtils";
export const splitChars = (selector: Selector) => {
  let text;
  let parent: null | HTMLElement = null;
  if (typeof selector == "string") {
    parent = document.querySelector(selector);
    text = parent?.textContent;
  } else {
    text = selector.textContent;
    parent = selector;
  }
  if (!text || parent == null) {
    throw new Error("String not found");
  }
  const attrs = parent.attributes;
  const subParent = parent.parentElement;
  subParent?.removeChild(parent);
  parent = domUtils.create("div");
  // implement method to merge attributes
  //   parent.setAttribute = {
  //     ...parent.attributes,
  //     ...attrs,
  //   };
  subParent?.appendChild(parent);
  const chars = text
    .split(
      /(?=(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/
    )
    .map((char: string) => {
      const span = domUtils.create("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.position = "relative";
      parent?.appendChild(span);
      return span;
    });

  return chars;
};
