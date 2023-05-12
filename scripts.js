

import {BOOKS_PER_PAGE,authors,books,genres} from "./data.js"
const matches = books
let page = 1; // will defines how much books will appear on each page

//queryselecting the important things from the html

//setting button , dialouge ,and its dialouge features (for easy DOM manipulation)
const settingIcon = document.querySelector('[ data-header-settings]')
const settingMenu= document.querySelector('[ data-settings-overlay]')
const settingCancelButton=document.querySelector('[data-settings-cancel]')
// search button , dialouge ,and its dialouge features (for easy DOM manipulation)
const searchIcon=document.querySelector('[data-header-search]')
const  searchMenu =document.querySelector('[data-search-overlay]')
const searchTitle=document.querySelector('[data-search-title]')
const searchGenre =document.querySelector('[data-search-genres]')
const searchAuthors = document.querySelector('[data-search-authors]')
const searchCancelButton=document.querySelector('[data-search-cancel]')
const searchForm= document.querySelector('[data-search-form]')
//drop down button,data-list and data-message
  const dataMessage = document.querySelector('[data-list-message]')
const dataListItems =document.querySelector('[data-list-items]')
const dropDownButton = document.querySelector('[data-list-button]')
//active
const focusOnBook = document.querySelector('[data-list-active]')
const blurImage = document.querySelector('[data-list-blur]')
const  image = document.querySelector('[data-list-image]')
const  activeTitle = document.querySelector('[data-list-title]')
const activeSubTitle = document.querySelector('[data-list-subtitle]') 
const activeDescription = document.querySelector('[data-list-description]')  
const activeCloseButton =    document.querySelector('[data-list-close]')                                                     




  /**
   * will produce html elements to be used to add to books to the html file
   * @param {object}
   */
 const createPreview = ({ author, id, image, title })=> {
    const result =document.createElement('button')
     result.className= 'list__items preview'
      result.setAttribute('data-list','')
     result.innerHTML= 
                     ` 
                     <img
                     class="preview__image"
                     src="${image}"
                 />
                 
                 <div class="preview__info">
                     <h3 class="preview__title">${title}</h3>
                     <div class="preview__author">${author}</div>
                 </div>
             <dialog> <p>${id}</p>              
                           `
                           return result
  }
  
 
 // this section produces the first 36 books to appear on the html
  const fragment = document.createDocumentFragment()
 const extracted = books.slice(0, 36)
 for (const { author, image, title, id } of extracted ) {
   const preview = createPreview({
     author: authors[author],
        id,
         image,
        title
     })
    
  
    fragment.appendChild(preview)
 }
dataListItems.appendChild(fragment)

 
// this section produces for the genre options
 const optionGenres = document.createDocumentFragment()
 const genreElement = document.createElement('option')
 genreElement.value = 'any'
 genreElement.innerText = 'All Genres'
 optionGenres.appendChild(genreElement)

for (const [id, name] of Object.entries(genres)) {
  
   
    const options=document.createElement('option')
   
    options.value=id
    options.innerText = name
   
     optionGenres.appendChild(options)
 }
  searchGenre.appendChild(optionGenres)

 
  // this section produces for the author options
const authorsFragment = document.createDocumentFragment()
const authorsElement = document.createElement('option')
authorsElement.value = 'any'
authorsElement.innerText = 'All Authors'
 authorsFragment.appendChild(authorsElement)

 for ( const [id, name] of Object.entries(authors)) {
   
    const options=document.createElement('option')
    
    options.value=id
    options.innerText = name
    
     authorsFragment.appendChild(options)
 }

 searchAuthors.appendChild(authorsFragment)





   

  dropDownButton.innerHTML = /* html */ [// sets the inner html before it starts
    `<span>Show more</span>
    <span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>`
]

/** 
* produces 36 books to be appended to the html and will tell you how many books remain from the object {@link books}
*/
const addMoreBooks=()=> {
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
    dataListItems.appendChild(fragment);
    page++;

    dropDownButton.innerHTML = /* html */ [
        `<span>Show more</span>
        <span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>`
    ]
    dropDownButton.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)
}
 



   
  
   
 /**
  * used to define what the event listenr will apply to
  */
  const documentElement = document.body;
 
  /**
   * is the data used to define what colors will be applied once the eventlistener runs
   */
  const css = {
    day: {
      dark: '10, 10, 20',
      light: '255, 255, 255'
    },
    night: {
      dark: '255, 255, 255',
      light: '10, 10, 20'
    }
  };
  

  searchIcon.addEventListener('click',()=> {// shows search menu 
    searchMenu.showModal();
     searchTitle.focus();
 })
 
 settingIcon.addEventListener('click',()=>{ //opens settingMenu
    settingMenu.showModal()
})


searchForm.addEventListener('submit', (event) => {
     /**
    * a filter sytem that appends filtered books to {@link result} result and appends result to dataListItems the html
    */
    event.preventDefault();
    dataListItems.innerHTML = '';
    dropDownButton.removeEventListener('click', addMoreBooks);
    const formData = new FormData(searchForm);
    const filters = Object.fromEntries(formData);
    const result = []; // will hold the filtered books   
    let page=1
    dropDownButton.disabled=false
    for (const book of books) {
      const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
      const authorMatch = filters.author === 'any' || book.author === filters.author;
      const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);
    
      if (authorMatch && genreMatch && titleMatch) {
        result.push(book);
      }
    }
      
      
      
    
    // appending filtered books to html section
    const pieceOfResult= result.slice(0, 36)
    for (const { author, image, title, id } of pieceOfResult) {
      const preview = createPreview({
        author: authors[author],
        id,
        image,
        title,
      });
     
    
      
      
      dataListItems.appendChild(preview)
    }
    /**
     * updated version of dropDownButton.addEventListener meaning it will append 36 new books from {@link result} instead from the object {@link books}
    */
    dropDownButton.innerHTML = /* html */ [
        `<span>Show more</span>
        <span class="list__remaining"> (${result.length - [page * BOOKS_PER_PAGE] > 0 ? result.length - [page * BOOKS_PER_PAGE] : 0})</span>`
    ]
      dropDownButton.addEventListener('click',()=> {
        const startIndex = page * BOOKS_PER_PAGE;
        const endIndex = startIndex + 36;
        const extracted = result.slice(startIndex, endIndex);
      
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
        dataListItems.appendChild(fragment);
        page++;
    
        dropDownButton.innerHTML = /* html */ [
            `<span>Show more</span>
            <span class="list__remaining"> (${result.length - [page * BOOKS_PER_PAGE] > 0 ? result.length - [page * BOOKS_PER_PAGE] : 0})</span>`
        ]
        
        
      })
    
dropDownButton.disabled = !(result.length - [page * BOOKS_PER_PAGE] > 0)
if (result.length <= 0 ){
    dataMessage.classList.add('list__message_show')
    dropDownButton.disabled=true
}else{
     dataMessage.classList.remove('list__message_show')
   }
   searchMenu.close()
  })  
  
  /** 
  * will make {@link addMoreBooks}- behave like a loop since every time dropDownButton is clicked it will append 36 unique books to the html
  */
  dropDownButton.addEventListener('click', addMoreBooks);
 
 
  /**
    * nightmode addEventListener that toggles between day and night using {@link css } and {@link documentElement}
    */
 settingMenu.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    const selectedMode = result.theme === 'night' ? 'night' : 'day';
    
    documentElement.style.setProperty('--color-dark', css[selectedMode].dark);
    documentElement.style.setProperty('--color-light', css[selectedMode].light);
    
  
    settingMenu.close();
  });
    
 dataListItems.addEventListener('click', (event) => {// will produce an in-depth view of a clicked book 
        
    
        const pathArray = Array.from(event.path || event.composedPath());
        let active;
       
        
        for (const node of pathArray) {
            
            if(event.target.tagName !=='BUTTON') return;
            
           if (active) break;
          const previewId = node.children[2].children[0].innerHTML;/**  hones down on dialoge id from {@link createPreview }*/
        
          
          for (const singleBook of books) {
            if (singleBook.id === previewId) {
              active = singleBook;
              break;
            }
          }
        }
      
       
      
        if (!active) return;
        focusOnBook.showModal();
        blurImage.src  = active.image;
        image.src=active.image
        activeTitle.innerText = active.title;
        activeSubTitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        activeDescription.innerText = active.description;
      });
    activeCloseButton.addEventListener('click',()=>{  // closes in-depth view of a clicked book 
         focusOnBook.close()
    })
    searchCancelButton.addEventListener('click',()=>{ searchMenu.close() }) // closes searchMenu
 settingCancelButton.addEventListener('click',()=>{ settingMenu.close() }) //   closes searchMenu