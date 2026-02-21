"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { books, Book } from "@/data/books";
import BookCard from "@/components/BookCard";

const Bookshelf = dynamic(() => import("@/components/Bookshelf"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="animate-pulse text-background-300">Loading bookshelf...</div>
    </div>
  ),
});

function BookInfoOverlay({ book }: { book: Book | null }) {
  if (!book) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-background-800 border border-background-700 rounded-lg p-6 shadow-xl max-w-md z-50 pointer-events-none min-h-[140px] relative">
      {book.currentlyReading && (
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-0.5 bg-accent-400 text-background-900 rounded-full whitespace-nowrap">
          In Progress
        </span>
      )}
      <div className="flex gap-4">
        <div
          className="w-3 h-16 rounded-sm flex-shrink-0"
          style={{ backgroundColor: book.color }}
        />
        <div>
          <h3 className="text-lg font-bold text-foreground">{book.title}</h3>
          <p className="text-accent-400 text-sm mb-2">{book.author}</p>
          <p className="text-background-300 text-sm">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

function MobileBookGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default function ReadingListPage() {
  const [hoveredBook, setHoveredBook] = useState<Book | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Reading List
          </h1>
          <p className="text-background-300 max-w-2xl mx-auto">
            Books that have shaped my perspective on technology, philosophy, and life.
          </p>
        </div>

        {isMobile ? (
          <MobileBookGrid />
        ) : (
          <div className="relative">
            <div className="h-[600px]">
              <Bookshelf onBookHover={setHoveredBook} />
            </div>
            <p className="text-center text-background-400 text-sm mt-4">
              Hover over a book to see details.
            </p>
          </div>
        )}

        <BookInfoOverlay book={hoveredBook} />
      </div>
    </div>
  );
}
