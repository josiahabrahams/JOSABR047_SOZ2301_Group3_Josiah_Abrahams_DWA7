import {openbookpreview} from "./modules/indetailBookPreview.js"
import {createAuthorOptionts, createGenre} from "./modules/addFormOptions.js"
import { html } from "./modules/helper.js";
import { firstSetOfBooks,} from "./modules/firstSetOfBooks.js";
import { books } from "./data.js";
import  {
  closeToggleNightModeOverlay, 
  closefilterSectionOverlay,
  openSearchMenufiltersystem, 
  openSettingMenu
} from "./modules/openAndCloseModals.js"
import {toggleSystemsColour} from "./modules/toggleNightMode.js"
import {
  addMoreBooks,
  getFilter,

} from "./modules/booksDisplay.js";

  
  



// this section produces the first 36 books to appear on the html
html.displaySection.dataListItems.appendChild(firstSetOfBooks(books));

// this section produces for the genre options
html.filterSection.searchGenre.appendChild(createGenre());

// this section produces for the author options
html.filterSection.searchAuthors.appendChild(createAuthorOptionts());

//filter system that narrows down the book search
html.filterSection.searchForm.addEventListener("submit", getFilter);

/**
 * will make {@link addMoreBooks}- behave like a loop since every time dropDownButton is clicked it will append 36 unique books to the html
 */
html.displaySection.dropDownButton.addEventListener("click", addMoreBooks);

/**
 * nightmode addEventListener that toggles between day and night using {@link css } and {@link documentElement}
 */
html.toggleNightMode.settingMenu.addEventListener(
  "submit",
  toggleSystemsColour
);

// this section refers to the in-detail-book preview feature
html.displaySection.dataListItems.addEventListener(
  "click",
  openbookpreview.getSinalBook
);

// closes detailedPreviewOfbooks over-lay section
  openbookpreview.closeinDetailbookModal
/**  closes focusOnBook overlay*/
html.filterSection.searchCancelButton.addEventListener(
  "click",
  closefilterSectionOverlay
); // closes searchMenu overlay
html.toggleNightMode.settingCancelButton.addEventListener(
  "click",
  closeToggleNightModeOverlay
); //   closes settingMenu overlay   overlay

//open overlay section

html.filterSection.searchIcon.addEventListener(
  "click",
  openSearchMenufiltersystem
); // shows search menu
html.toggleNightMode.settingIcon.addEventListener("click", openSettingMenu); //opens settingMenu

