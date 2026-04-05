export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  note: string;
  color: string;
  featured?: boolean;
  currentlyReading?: boolean;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Product",
    note:
      "I don't agree with all of it, but it's still useful for thinking about conviction, differentiation, and what makes a product actually matter.",
    color: "#1a365d",
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Novel",
    note:
      "A novel about ambition, self-invention, and the distance between style and substance.",
    color: "#2d3748",
  },
  {
    id: "3",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    category: "Fiction",
    note: "Funny, strange, and much smarter than it first lets on.",
    color: "#285e61",
  },
  {
    id: "4",
    title: "The Restaurant at the End of the Universe",
    author: "Douglas Adams",
    category: "Fiction",
    note: "More absurd than the first book, but still sharp about people and systems.",
    color: "#4a5568",
  },
  {
    id: "5",
    title: "Life, the Universe, and Everything",
    author: "Douglas Adams",
    category: "Fiction",
    note: "Chaos, bureaucracy, and cosmic silliness in equal measure.",
    color: "#5c3d2e",
  },
  {
    id: "6",
    title: "So Long, and Thanks for All the Fish",
    author: "Douglas Adams",
    category: "Fiction",
    note:
      "The same dry, strange precision as the rest of the series, but a little more reflective.",
    color: "#0d5c63",
  },
  {
    id: "6b",
    title: "Mostly Harmless",
    author: "Douglas Adams",
    category: "Fiction",
    note:
      "Starting the last Hitchhiker's Guide book now. I'm mainly here for the tone and the way Adams makes absurdity feel oddly exact.",
    color: "#264653",
    currentlyReading: true,
  },
  {
    id: "6c",
    title: "Discourses and Selected Writings",
    author: "Epictetus",
    category: "Philosophy",
    note:
      "Also starting this in parallel. It feels like the opposite of noise: direct, disciplined, and hard to hide from.",
    color: "#8a6a3d",
    currentlyReading: true,
  },
  {
    id: "7",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    note:
      "Useful for thinking about shared narratives and the stories that make systems feel real.",
    color: "#744210",
    featured: true,
  },
  {
    id: "8",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    note:
      "A good reminder of how much sits outside intuition, and why that matters.",
    color: "#1e3a5f",
    featured: true,
  },
  {
    id: "9",
    title: "The Epic of Gilgamesh",
    author: "Unknown (Ancient)",
    category: "Epic",
    note: "Old enough to feel distant, familiar enough to still land.",
    color: "#78350f",
  },
  {
    id: "10",
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    category: "Philosophy",
    note:
      "Uncomfortable, bitter, and useful for remembering how irrational people can be.",
    color: "#374151",
    featured: true,
  },
  {
    id: "11",
    title: "Letters from a Stoic",
    author: "Seneca",
    category: "Philosophy",
    note: "A steadying book on attention, discipline, and perspective.",
    color: "#702459",
    featured: true,
  },
  {
    id: "12",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    category: "Novel",
    note: "Sharp, elegant, and much darker than its surface.",
    color: "#365314",
    featured: true,
  },
  {
    id: "13",
    title: "The Stranger",
    author: "Albert Camus",
    category: "Novel",
    note: "Spare, detached, and hard to shake once you're done.",
    color: "#553c9a",
    featured: true,
  },
];
