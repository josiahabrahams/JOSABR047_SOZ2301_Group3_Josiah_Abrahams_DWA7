import { html} from "./helper.js"




  
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