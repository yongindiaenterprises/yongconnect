"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);
    } else if (isDeleting && index > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 20);
    } else if (index === text.length) {
      // wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (index === 0 && isDeleting) {
      // restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <span className="inline-block text-center">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}