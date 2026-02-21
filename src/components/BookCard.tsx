import { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-background-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300">
      <div
        className="h-48 flex items-end justify-center p-4"
        style={{ backgroundColor: book.color }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-2 text-center">
          <p className="text-white/80 text-xs">{book.author}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-foreground line-clamp-2">
            {book.title}
          </h3>
          {book.currentlyReading && (
            <span className="text-xs font-semibold px-2 py-0.5 bg-accent-400 text-background-900 rounded-full whitespace-nowrap flex-shrink-0">
              Reading
            </span>
          )}
        </div>
        <p className="text-background-300 text-sm line-clamp-3">
          {book.description}
        </p>
      </div>
    </div>
  );
}
