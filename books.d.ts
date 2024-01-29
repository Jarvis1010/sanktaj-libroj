type Chapter = {
  chapterTitle: string;
  summary: string;
  verses: string[];
};

type Book = {
  bookTitle: string;
  bookTitleShort: string;
  subtitle: string;
  summary: string;
  chapters: Chapter[];
};

type Testament = {
  testamentTitle: string;
  books: Book[];
};
