import { html } from "./helper.js";
 /**
  * used to define what the event listenr will apply to
  */
 const documentElement = document.body;
 
 /**
  * is the data used to define what colors will be applied once the eventlistener runs
  */
  const css = {
   day: {
     dark: "10, 10, 20",
     light: "255, 255, 255",
   },
   night: {
     dark: "255, 255, 255",
     light: "10, 10, 20",
   },
 };

/**
 * this will decide the websites colour by using {@link css }-that defines the colour and {@link documentElement}-where the colour is applied
 * @param {*} event-is the actual event object just don't know how to define it
 */

export const toggleSystemsColour = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    const selectedMode = result.theme === "night" ? "night" : "day";
  
    documentElement.style.setProperty("--color-dark", css[selectedMode].dark);
    documentElement.style.setProperty("--color-light", css[selectedMode].light);
  
    html.toggleNightMode.settingMenu.close();
  };