"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Book from "./Book";
import { books, Book as BookType } from "@/data/books";

interface BookshelfProps {
  onBookHover: (book: BookType | null) => void;
}

function CameraSetup() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.lookAt(0, 0.8, 0);
  }, [camera]);
  
  return null;
}

function ShelfBoard() {
  const shelfWidth = 3;
  const shelfHeight = 0.08;
  const shelfDepth = 1;
  const woodColor = "#3d2914";

  return (
    <mesh position={[0, -0.04, 0]}>
      <boxGeometry args={[shelfWidth, shelfHeight, shelfDepth]} />
      <meshStandardMaterial color={woodColor} roughness={0.8} />
    </mesh>
  );
}

function BookshelfFrame() {
  const shelfWidth = 3;
  const shelfDepth = 1;
  const frameHeight = 4.3;
  const woodColor = "#3d2914";

  return (
    <>
      <mesh position={[-shelfWidth / 2 - 0.05, frameHeight / 2, 0]}>
        <boxGeometry args={[0.1, frameHeight, shelfDepth]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} />
      </mesh>
      <mesh position={[shelfWidth / 2 + 0.05, frameHeight / 2, 0]}>
        <boxGeometry args={[0.1, frameHeight, shelfDepth]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, frameHeight + 0.02, 0]}>
        <boxGeometry args={[shelfWidth + 0.2, 0.1, shelfDepth]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, frameHeight / 2, -shelfDepth / 2 - 0.02]}>
        <boxGeometry args={[shelfWidth + 0.2, frameHeight, 0.04]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} />
      </mesh>
    </>
  );
}

function BookRow({
  booksData,
  yPosition,
  activeBookId,
  onHover,
}: {
  booksData: BookType[];
  yPosition: number;
  activeBookId: string | null;
  onHover: (book: BookType | null) => void;
}) {
  const spacing = 0.05;
  
  const positions = booksData.reduce<number[]>((acc, book, index) => {
    if (index === 0) {
      acc.push(book.thickness / 2);
    } else {
      const prevPos = acc[index - 1];
      const prevThickness = booksData[index - 1].thickness;
      acc.push(prevPos + prevThickness / 2 + spacing + book.thickness / 2);
    }
    return acc;
  }, []);
  
  const totalWidth = positions.length > 0 
    ? positions[positions.length - 1] + booksData[booksData.length - 1].thickness / 2
    : 0;
  const offsetX = totalWidth / 2;

  return (
    <>
      {booksData.map((book, index) => (
        <Book
          key={book.id}
          book={book}
          position={[positions[index] - offsetX, yPosition + book.height / 2, 0]}
          isActive={activeBookId === book.id}
          onHover={onHover}
        />
      ))}
    </>
  );
}

function Scene({ onBookHover }: BookshelfProps) {
  const booksPerShelf = 7;
  const shelf1Books = books.slice(0, booksPerShelf);
  const shelf2Books = books.slice(booksPerShelf);
  
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastHoveredBookId = useRef<string | null>(null);

  const handleBookHover = (book: BookType | null) => {
    const newBookId = book?.id ?? null;
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    if (newBookId === null && lastHoveredBookId.current !== null) {
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveBookId(null);
        onBookHover(null);
        lastHoveredBookId.current = null;
      }, 50);
    } else if (newBookId !== null && newBookId !== lastHoveredBookId.current) {
      setActiveBookId(newBookId);
      onBookHover(book);
      lastHoveredBookId.current = newBookId;
    }
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[1.5, 3.5, 7]} fov={50} />
      <CameraSetup />
      
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.6} />
      <pointLight position={[0, 3, 2]} intensity={0.8} />

      <group position={[0, -0.5, 0]}>
        <BookshelfFrame />
        <ShelfBoard />
        <BookRow 
          booksData={shelf1Books} 
          yPosition={0} 
          activeBookId={activeBookId}
          onHover={handleBookHover} 
        />
      </group>

      <group position={[0, 1.8, 0]}>
        <ShelfBoard />
        <BookRow 
          booksData={shelf2Books} 
          yPosition={0} 
          activeBookId={activeBookId}
          onHover={handleBookHover} 
        />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.55, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.54, 0]} scale={[1.5, 1, 1]}>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial color="#5c1a1a" />
      </mesh>
    </>
  );
}

export default function Bookshelf({ onBookHover }: BookshelfProps) {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene onBookHover={onBookHover} />
        </Suspense>
      </Canvas>
    </div>
  );
}
