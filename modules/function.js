import { BOOKS_PER_PAGE, authors, books, genres } from "../data.js";

/**
 * this function creates the books that you can interact with
 * @param {object} param0
 * @returns {*}
 */
export const createPreview = ({ author, id, image, title }) => {
  const result = document.createElement("button");
  result.className = "list__items preview";
  result.setAttribute("data-list", "");
  result.innerHTML = ` 
                   <img
                   class="preview__image"
                   src="${image}"
               />
               
               <div class="preview__info">
                   <h3 class="preview__title">${title}</h3>
                   <div class="preview__author">${author}</div>
               </div>
           <dialog> <p>${id}</p>              
                         `;
  return result;
};

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

/**
 * this function creates the genere options
 * which is used for the filter system for the libary
 * @returns {HTMLElement}
 */
export const createGenre = () => {
  const optionGenres = document.createDocumentFragment();
  const genreElement = document.createElement("option");
  genreElement.value = "any";
  genreElement.innerText = "All Genres";
  optionGenres.appendChild(genreElement);

  for (const [id, name] of Object.entries(genres)) {
    const options = document.createElement("option");

    options.value = id;
    options.innerText = name;

    optionGenres.appendChild(options);
  }
  return optionGenres;
};

// this section produces for the author options
/**
 *
 * @returns {HTMLElement}
 */
export const createAuthorOptionts = () => {
  const authorsFragment = document.createDocumentFragment();
  const authorsElement = document.createElement("option");
  authorsElement.value = "any";
  authorsElement.innerText = "All Authors";
  authorsFragment.appendChild(authorsElement);

  for (const [id, name] of Object.entries(authors)) {
    const options = document.createElement("option");

    options.value = id;
    options.innerText = name;

    authorsFragment.appendChild(options);
  }
  return authorsFragment;
};
/**
 *  produces 36 books to be appended to the html and will tell you how many books remain from the object {@link books}
 * @returns {void}
 */
export const addMoreBooks = () => {
  const startIndex = page * BOOKS_PER_PAGE;
  const endIndex = startIndex + 36;
  const extracted = books.slice(startIndex, endIndex);

  const fragment = document.createDocumentFragment();
  for (const { author, image, title, id } of extracted) {
    const preview = createPreview({
      author: authors[author],
      id,
      image,
      title,
    });
    fragment.appendChild(preview);
  }
  html.displaySection.dataListItems.appendChild(fragment);
  page++;

  html.displaySection.dropDownButton.innerHTML = /* html */ [
    `<span>Show more</span>
            <span class="list__remaining"> (${
              matches.length - [page * BOOKS_PER_PAGE] > 0
                ? matches.length - [page * BOOKS_PER_PAGE]
                : 0
            })</span>`,
  ];
  html.displaySection.dropDownButton.disabled = !(
    matches.length - [page * BOOKS_PER_PAGE] >
    0
  );
};
