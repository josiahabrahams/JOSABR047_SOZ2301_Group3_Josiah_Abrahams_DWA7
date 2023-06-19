import { html} from "./htmlQeurySelectors.js"


/**
 * closes {@link html.detailedPreviewOfbooks.focusOnBook} form
 */
export const closeDetailedBookOverlay = () => {
    // closes in-depth view of a clicked book
    html.detailedPreviewOfbooks.focusOnBook.close();
  };
  
  //closes overlay function secion
  
  /**
   * closes the a filter section overlay
   */
  export const closefilterSectionOverlay = () => {
    html.filterSection.searchMenu.close();
  };
  
  /**
   * closes Toggle night mode overlay
   */
  export const closeToggleNightModeOverlay = () => {
    html.toggleNightMode.settingMenu.close();
  };
  
  //open overlay function secion
  
  /** opens the searchMenu overlay */
  export const openSearchMenufiltersystem = () => {
    html.filterSection.searchMenu.showModal();
    html.filterSection.searchTitle.focus();
  };
  
  /* * opens settingMenu overlay*/
  
  export const openSettingMenu = () => {
    html.toggleNightMode.settingMenu.showModal();
  };