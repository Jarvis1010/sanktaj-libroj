import SearchClient from "./search-client";

export const metadata = {
  title: "Search — Sanktaj Libroj",
  description: "Search sacred texts by verse, book, or collection.",
};

export default function SearchPage() {
  return <SearchClient />;
}
