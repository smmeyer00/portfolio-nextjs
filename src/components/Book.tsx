"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Book as BookType } from "@/data/books";

interface BookProps {
  book: BookType;
  position: [number, number, number];
  isActive: boolean;
  onHover: (book: BookType | null) => void;
}

export default function Book({ book, position, isActive, onHover }: BookProps) {
  const meshRef = useRef<Mesh>(null);
  const targetZ = useRef(position[2]);

  useFrame(() => {
    if (meshRef.current) {
      targetZ.current = isActive ? position[2] + 0.4 : position[2];
      meshRef.current.position.z += (targetZ.current - meshRef.current.position.z) * 0.1;
      
      if (isActive) {
        meshRef.current.rotation.y = Math.sin(Date.now() * 0.003) * 0.05;
      } else {
        meshRef.current.rotation.y *= 0.9;
      }
    }
  });

  const depth = 0.8;

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={(e) => {
        e.stopPropagation();
        onHover(book);
      }}
      onPointerLeave={() => {
        onHover(null);
      }}
    >
      <boxGeometry args={[book.thickness, book.height, depth]} />
      <meshStandardMaterial
        color={book.color}
        roughness={0.7}
        metalness={0.1}
      />
    </mesh>
  );
}
