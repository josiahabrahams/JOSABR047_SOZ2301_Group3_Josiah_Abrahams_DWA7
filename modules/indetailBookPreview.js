//@ts-check
import { html, checkIfnull } from "./helper.js";
import { authors, books } from "../data.js";
const createInDetailBookPreview = () => {
  const {
    focusOnBook,
    blurImage,
    image,
    activeTitle,
    activeSubTitle,
    activeDescription,
    activeCloseButton,
  } = html.detailedPreviewOfbooks || null;

  /**
   * creates the the in detail book previw feature when a book is clicked
   * @param {*} event - is the event object
   *
   */

  const getSinalBook = (event) => {
    // will produce an in-depth view of a clicked book

    const pathArray = Array.from(event.path || event.composedPath());
    let active;
    checkIfnull(focusOnBook);
    for (const node of pathArray) {
      if (event.target.tagName !== "BUTTON") return;

      if (active) break;
      const previewId =
        node.children[2].children[0]
          .innerHTML; /**  hones down on dialoge id from {@link createPreview }*/

      for (const singleBook of books) {
        if (singleBook.id === previewId) {
          active = singleBook;
          break;
        }
      }
    }
    const focusOnBookCheck = checkIfnull(focusOnBook);
    const blurImageCheck = checkIfnull(blurImage);
    const imageCheck = checkIfnull(image);
    const activeTitleCheck = checkIfnull(activeTitle);
    const activeSubTitleCheck = checkIfnull(activeSubTitle);
    const activeDescriptionCheck = checkIfnull(activeDescription);
    if (!active) return;
    focusOnBookCheck.showModal();
    blurImageCheck.src = active.image;
    imageCheck.src = active.image;
    activeTitleCheck.innerText = active.title;
    activeSubTitleCheck.innerText = `${authors[active.author]} (${new Date(
      active.published
    ).getFullYear()})`;
    activeDescriptionCheck.innerText = active.description;
  };

  return {
    getSinalBook,
    get theBluredimage() {
      return console.log(blurImage);
    },
    set theBluredimage(value) {
      throw new Error(
        `you are not allowed to change ${blurImage} note you have to open a book first`
      );
    },
    get mainImage() {
      return console.log(image);
    },
    set mainImage(value) {
      throw new Error(`you are not allowed to change ${image}`);
    },
    get mainTitle() {
      return console.log(activeTitle);
    },
    set mainTitle(value) {
      throw new Error(
        `you are not allowed to change ${activeSubTitle} note you have to open a book first`
      );
    },
    get thePublishedDate() {
      return console.log(activeSubTitle);
    },
    set thePublishedDate(value) {
      throw new Error(`you are not allowed to change ${activeSubTitle}`);
    },
    get inDetailbooksDescription() {
      return console.log(activeDescription);
    },
    set inDetailbooksDescription(value) {
      throw new Error(`you are not allowed to change ${activeDescription}`);
    },
    get closeinDetailbookModal() {
      /**
       * closes {@link focusOnBook} form
       */
      return checkIfnull(activeCloseButton).addEventListener(
        "click",
        () => {
          checkIfnull(focusOnBook).close();
        } // closes in-depth view of a clicked book
      );
    },
    set closeinDetailbookModal(value) {
      throw new Error(`you are not allowed to change this `);
    },
  };
};
export const openbookpreview = createInDetailBookPreview();
