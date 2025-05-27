"use client";;
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out group",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <Image fill src={card.src} alt={card.title} className="object-cover absolute inset-0 group-hover:scale-110 duration-500" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 duration-300 group overflow-hidden",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div className="text-white duration-500 absolute bottom-0 md:-bottom-20 md:group-hover:bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div
          className={cn("text-xl md:text-2x text-center")}>
          {card.title}
        </div>
      </div>
      <Link href={`/projects/${card.slug}`} className="bg-white py-2 px-4 rounded-t-2xl duration-500 absolute bottom-0 md:-bottom-20 md:group-hover:bottom-0 left-1/2 -translate-x-1/2">
        <div
          className={cn("text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-primary to-yellow-400")}>
          Learn more
        </div>
      </Link>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
