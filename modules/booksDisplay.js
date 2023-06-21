import { html } from "./helper.js";
import { BOOKS_PER_PAGE, authors, books } from "../data.js";
import { createPreview } from "./createPreview.js";
export const matches = books;
export let page = 1; // will defines how much books will appear on each page
//defines the drop downs original amount
html.displaySection.dropDownButton.innerHTML = /* html */ [
  // sets the inner html before it starts
  `<span>Show more</span>
    <span class="list__remaining"> (${
      matches.length - [page * BOOKS_PER_PAGE] > 0
        ? matches.length - [page * BOOKS_PER_PAGE]
        : 0
    })</span>`,
];

/**
 * produces 36 books to be appended to the html and will tell you how many books remain from the object {@link books}
 */
export const addMoreBooks = () => {
  const startIndex = page * BOOKS_PER_PAGE;
  const endIndex = startIndex + 36;
  const extracted = books.slice(startIndex, endIndex);
  //creates the dropdown books to be added to display
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


/**
 * this  function filters through the books then makes them into interactive books
 * @param {*} event - id the event object
 */
export const getFilter = (event) => {
  /**
   * a filter sytem that appends filtered books to {@link result} result and appends result to dataListItems the html
   */
  event.preventDefault();
  html.displaySection.dataListItems.innerHTML = "";
  html.displaySection.dropDownButton.removeEventListener("click", addMoreBooks);
  const formData = new FormData(html.filterSection.searchForm);
  const filters = Object.fromEntries(formData);
  const result = []; // will hold the filtered books
  let page = 1;
  html.displaySection.dropDownButton.disabled = false;
  for (const book of books) {
    const titleMatch =
      filters.title.trim() === "" ||
      book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch =
      filters.author === "any" || book.author === filters.author;
    const genreMatch =
      filters.genre === "any" || book.genres.includes(filters.genre);

    if (authorMatch && genreMatch && titleMatch) {
      result.push(book);
    }
  }

  // appending filtered books to html section
  const pieceOfResult = result.slice(0, 36);
  for (const { author, image, title, id } of pieceOfResult) {
    const preview = createPreview({
      author: authors[author],
      id,
      image,
      title,
    });

    html.displaySection.dataListItems.appendChild(preview);
  }
  /**
   * updated version of dropDownButton.addEventListener meaning it will append 36 new books from {@link result} instead from the object {@link books}
   */
  html.displaySection.dropDownButton.innerHTML = /* html */ [
    `<span>Show more</span>
              <span class="list__remaining"> (${
                result.length - [page * BOOKS_PER_PAGE] > 0
                  ? result.length - [page * BOOKS_PER_PAGE]
                  : 0
              })</span>`,
  ];
  html.displaySection.dropDownButton.addEventListener("click", () => {
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
    html.displaySection.dataListItems.appendChild(fragment);
    page++;

    html.displaySection.dropDownButton.innerHTML = /* html */ [
      `<span>Show more</span>
                  <span class="list__remaining"> (${
                    result.length - [page * BOOKS_PER_PAGE] > 0
                      ? result.length - [page * BOOKS_PER_PAGE]
                      : 0
                  })</span>`,
    ];
  });

  html.displaySection.dropDownButton.disabled = !(
    result.length - [page * BOOKS_PER_PAGE] >
    0
  );
  if (result.length <= 0) {
    html.displaySection.dataMessage.classList.add("list__message_show");
    html.displaySection.dropDownButton.disabled = true;
  } else {
    html.displaySection.dataMessage.classList.remove("list__message_show");
  }
  html.filterSection.searchMenu.close();
};

/**
 * creates the the in detail book previw feature when a book is clicked
 * @param {*} event - is the event object
 * @returns
 */



