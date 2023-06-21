/**
 * contains all the essential Html elements that are to be manipulated by the Dom
 */
export const html = {
   /**
    * this section contains all the html elements that control the night
    * an day mode
    */
   toggleNightMode: {
     /**the settingIcon is the button that will open the settingMenu*/
     settingIcon: document.querySelector("[ data-header-settings]"),
 
     /** the settingMenu is the form that controls the toggiling of day and night mode*/
     settingMenu: document.querySelector("[ data-settings-overlay]"),
     /**allows you to close the settingMenu without changing anything */
     settingCancelButton: document.querySelector("[data-settings-cancel]"),
   },
   /**
    * this section contains all the html elements that control the search system
    * that narrows down the book selection option
    */
   filterSection: {
     /**the searchIcon is the button that will open the searchMenu*/
     searchIcon: document.querySelector("[data-header-search]"),
     /** the searchMenu is the form-overlay that search system
      * that narrows down the book selection option
      */
     searchMenu: document.querySelector("[data-search-overlay]"),
     /** the searchTitle is the input that refers to the book's title */
     searchTitle: document.querySelector("[data-search-title]"),
     /**the searchGenre is the input that refers to the book's genre */
     searchGenre: document.querySelector("[data-search-genres]"),
     /**the searchAuthors  is the input that refers to the book's author*/
     searchAuthors: document.querySelector("[data-search-authors]"),
     /** the searchCancelButton allows you to close the sarchMenu without changing anything*/
     searchCancelButton: document.querySelector("[data-search-cancel]"),
     /**searchForm is the actual form and it's iputs */
     searchForm: document.querySelector("[data-search-form]"),
   },
 
   /**is where all the books are shown and has the most user interaction */
   displaySection: {
     /**is a message that shows if the filter system {@link html.filterSection.searchForm} outputs no books */
     dataMessage: document.querySelector("[data-list-message]"),
     /**is where the books are stored */
     dataListItems: document.querySelector("[data-list-items]"),
     /**a button that add 36 books per click */
     dropDownButton: document.querySelector("[data-list-button]"),
   },
   /** is the feature that when a book is clicked it will give an in detail review of a book */
   detailedPreviewOfbooks: {
     /**is the overlay of the in-detail-book feature */
     focusOnBook: document.querySelector("[data-list-active]"),
     /**is the blur image of the book's cover image  */
     blurImage: document.querySelector("[data-list-blur]"),
     /**is the book's cover image */
     image: document.querySelector("[data-list-image]"),
     /**is the book's title */
     activeTitle: document.querySelector("[data-list-title]"),
     /**is the book's published date */
     activeSubTitle: document.querySelector("[data-list-subtitle]"),
     /**is the book's description */
     activeDescription: document.querySelector("[data-list-description]"),
     /**is the the button that closes the overlay */
     activeCloseButton: document.querySelector("[data-list-close]"),
   },
 };
  /**
   * 
   * @param {Element | null} element is the alleged html element to be used
   * @returns {*}
   */
export const checkIfnull = (element) =>{
  if (element === null ) throw new Error(element , `is equal to null`)
  return  element
 }
 

 