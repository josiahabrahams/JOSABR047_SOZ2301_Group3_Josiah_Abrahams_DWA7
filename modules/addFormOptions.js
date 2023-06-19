import {  authors, genres } from "../data.js";

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