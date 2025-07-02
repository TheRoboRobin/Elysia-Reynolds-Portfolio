// HEADER DISPLAY ON ALL PAGES

fetch("header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    const range = document.createRange();
    const node = range.createContextualFragment(data);
    document.querySelector("header").appendChild(node);
  });

// FOOTER DISPLAY ON ALL PAGES

fetch("footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    const range = document.createRange();
    const node = range.createContextualFragment(data);
    document.querySelector("footer").append(node);
  });
