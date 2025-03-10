function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  }
}

const book1 = new Book('On Earth Were Briefly Gorgeous', 'Ocean Vuong', 256, true);
console.log(book1.info()); // "On Earth Were Briefly Gorgeous by Ocean Vuong, 256 pages, read"

const book2 = new Book('A Little Life', 'Hanya Yanagihara', 814, false);
console.log(book2.info()); // "A Little Life by Hanya Yanagihara, 814 pages, not read yet"