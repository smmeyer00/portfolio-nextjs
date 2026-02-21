export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  color: string;
  height: number;
  thickness: number;
  currentlyReading?: boolean;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Zero to One",
    author: "Peter Thiel",
    description:
      "The startup bible that teaches you how to build the future instead of just copy-pasting it.",
    color: "#1a365d",
    height: 1.6,
    thickness: 0.18,
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A glittering tragedy about chasing dreams that were never really yours to begin with.",
    color: "#2d3748",
    height: 1.5,
    thickness: 0.14,
  },
  {
    id: "3",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description:
      "The universe is absurd and mostly harmless—bring a towel. (H2G2 Book 1)",
    color: "#285e61",
    height: 1.55,
    thickness: 0.16,
  },
  {
    id: "4",
    title: "The Restaurant at the End of the Universe",
    author: "Douglas Adams",
    description:
      "Dinner and a show, where the show is literally the end of everything. (H2G2 Book 2)",
    color: "#4a5568",
    height: 1.5,
    thickness: 0.16,
  },
  {
    id: "5",
    title: "Life, the Universe, and Everything",
    author: "Douglas Adams",
    description:
      "The answer is 42, but the question remains infuriatingly out of reach. (H2G2 Book 3)",
    color: "#5c3d2e",
    height: 1.5,
    thickness: 0.16,
  },
  {
    id: "6",
    title: "So Long, and Thanks for All the Fish",
    author: "Douglas Adams",
    description:
      "The dolphins knew it all along. (H2G2 Book 4)",
    color: "#0d5c63",
    height: 1.5,
    thickness: 0.16,
    currentlyReading: true,
  },
  {
    id: "7",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description:
      "How we went from naked apes to ordering takeout on our smartphones.",
    color: "#744210",
    height: 1.75,
    thickness: 0.24,
  },
  {
    id: "8",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "Black holes, relativity, and why your head hurts—in the best way possible.",
    color: "#1e3a5f",
    height: 1.6,
    thickness: 0.18,
  },
  {
    id: "9",
    title: "The Epic of Gilgamesh",
    author: "Unknown (Ancient)",
    description:
      "The original bromance epic, written before writing was even cool.",
    color: "#78350f",
    height: 1.4,
    thickness: 0.12,
  },
  {
    id: "10",
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    description:
      "A miserable man yells at you from his basement and somehow makes you question everything.",
    color: "#374151",
    height: 1.45,
    thickness: 0.11,
  },
  {
    id: "11",
    title: "Letters from a Stoic",
    author: "Seneca",
    description:
      "Ancient self-help that's somehow still better than modern self-help.",
    color: "#702459",
    height: 1.55,
    thickness: 0.16,
  },
  {
    id: "12",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "What if your bad decisions only showed up on your portrait?",
    color: "#365314",
    height: 1.5,
    thickness: 0.14,
  },
  {
    id: "13",
    title: "The Stranger",
    author: "Albert Camus",
    description:
      "A man goes to the beach and accidentally becomes an existential icon.",
    color: "#553c9a",
    height: 1.4,
    thickness: 0.12,
  },
];
