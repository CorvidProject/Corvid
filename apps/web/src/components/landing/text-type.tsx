"use client";
import { useEffect, useMemo, useState } from "react";

interface TextTypeProps {
  text: string | string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
}

// Efek mengetik/menghapus bergantian (port dari komponen asli).
export function TextType({
  text,
  typingSpeed = 55,
  deletingSpeed = 28,
  pauseDuration = 1800,
  initialDelay = 0,
  loop = true,
  className = "",
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName = "",
}: TextTypeProps) {
  const [shown, setShown] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(initialDelay === 0);
  const list = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    if (initialDelay === 0) return;
    const t = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  useEffect(() => {
    if (!started) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const current = list[sentence] ?? "";
    if (deleting) {
      if (shown === "") {
        setDeleting(false);
        if (sentence === list.length - 1 && !loop) return;
        setSentence((s) => (s + 1) % list.length);
        setCharIndex(0);
      } else {
        timer = setTimeout(
          () => setShown((s) => s.slice(0, -1)),
          deletingSpeed,
        );
      }
    } else if (charIndex < current.length) {
      timer = setTimeout(() => {
        setShown((s) => s + current.charAt(charIndex));
        setCharIndex((i) => i + 1);
      }, typingSpeed);
    } else {
      if (!loop && sentence === list.length - 1) return;
      timer = setTimeout(() => setDeleting(true), pauseDuration);
    }
    return () => clearTimeout(timer);
  }, [
    started,
    deleting,
    shown,
    charIndex,
    sentence,
    list,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={`text-type ${className}`} aria-hidden>
      <span className="text-type__content">{shown}</span>
      {showCursor && (
        <span className={`text-type__cursor ${cursorClassName}`}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
