
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