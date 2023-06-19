import { BOOKS_PER_PAGE, authors, books, genres } from "../data.js";
import { createPreview } from "./createPreview.js";


/**
 * this function produces the first 36 books for the libary
 * @param {object} obj -this refers to the object books from data.js
 * @returns {HTMLElement}
 */

export const firstSetOfBooks = (obj) => {
  const fragment = document.createDocumentFragment();
  const extracted = obj.slice(0, 36);
  for (const { author, image, title, id } of extracted) {
    const preview = createPreview({
      author: authors[author],
      id,
      image,
      title,
    });

    fragment.appendChild(preview);
  }
  return fragment;
};


