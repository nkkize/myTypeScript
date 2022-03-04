import { Shelf } from "./Shelf";
import { Book } from "./Book";

let bookShelf : Shelf<Book> = new Shelf<Book>();

bookShelf.addItemToCatalog(new Book("narender", "naerender"));