//PART1
//1)
let totalBooks: number = 0;
let libraryName: string = "City Library";
let isOpen: boolean = true;
let lateFeePerDay: number = 2.5;
let maxBooksPerPerson: number = 20;
let currentDate: string = "6/7/2026";
console.log(totalBooks, typeof totalBooks);
console.log(libraryName, typeof libraryName);
console.log(isOpen, typeof isOpen);
console.log(lateFeePerDay, typeof lateFeePerDay);
console.log(maxBooksPerPerson, typeof maxBooksPerPerson);
console.log(currentDate, typeof currentDate);
//2)
interface Book {
  id: number;
  title: string;
  author: string;
  publishYear: number;
  status: "available" | "borrowed" | "reserved";
  pages: number;
}
//3)
interface Magazine extends Book {
  issueNumber: number;
  monthlySubscription: boolean;
}
//4)
const book1: Book = {
  id: 1,
  title: "Hello World",
  author: "Yousif Ahmed",
  publishYear: 2008,
  status: "available",
  pages: 464,
};
totalBooks++;
const magazine1: Magazine = {
  id: 2,
  title: "Clean Code",
  author: "Nour Saeed",
  publishYear: 2025,
  status: "available",
  pages: 120,
  issueNumber: 15,
  monthlySubscription: true,
};
totalBooks++;
console.log(book1);
console.log(magazine1);
totalBooks += 2;


//PART2
//1)
const books: Book[] = [
  book1,
  {
    id: 3,
    title: "First",
    author: "Muhammmed Khaled",
    publishYear: 2018,
    status: "borrowed",
    pages: 320,
  },
  {
    id: 4,
    title: "Second",
    author: "Ahmed Khaled",
    publishYear: 1999,
    status: "available",
    pages: 250,
  },
];
for (const book of books) {
  if (book.status === "available") {
    console.log(book);
  }
}
//2)
let totalPages = 0;
for (const book of books)
    totalPages += book.pages;
console.log("Total Pages = ", totalPages);


//PART3
//1) What are Utility Types?
//أنواع جاهزة بتخليني اعمل انواع جديدة من أنواع كانت معمولة قبل كدة
/*
Partial=>It Makes All Attributes Optional
Required=>It Makes All Attributes Required
Pick=>It makes me to choice any attributes to make it required and make others Omitted 
Omit=>It makes me to choice any attributes to make it Omitted and make others required 
Readonly=>can't overwrite attribute after assignment
 */
//2)
const updatedBook: Partial<Book> = {
  pages: 500,
  status: "reserved",
};
//3)
const bookInfo: Pick<Book, "title" | "author"> = {
  title: "hhhh",
  author: "بياع الكبدة",
};
//4)
const publicBook: Omit<Book, "pages" | "publishYear"> = {
  id: 1,
  title: "hhhhبلس",
  author: "مساعد بياع الكبدة",
  status: "available",
};
//5)
const importantBook: Readonly<Book> = {
  id: 5,
  title: "I can't find Title",
  author: "OSC",
  publishYear: 2026,
  status: "available",
  pages: 395,
};

//importantBook.title = "New Title"; => that give me a compilation error because i can't to change value because it readonly
//6)
const fullBook: Required<Partial<Book>> = {
  id: 6,
  title: "checking",
  author: "",
  publishYear: 2026,
  status: "available",
  pages: 448,
};



//PART4
const searchId = 3;
let found = false;
for (const book of books) {
  if (book.id === searchId) {
    console.log("Book Found:");
    console.log(book);
    found = true;
    break;
  }
}
if (!found) {
  console.log("Book Not Found");
}   