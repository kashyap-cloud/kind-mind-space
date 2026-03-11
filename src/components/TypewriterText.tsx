import { useState, useEffect, useCallback } from "react";

interface TypewriterTextProps {
  lines: string[];
  onComplete: () => void;
  wordsPerMinute?: number;
}

const TypewriterText = ({ lines, onComplete, wordsPerMinute = 40 }: TypewriterTextProps) => {
  const [displayedChars, setDisplayedChars] = useState(0);
  const fullText = lines.join("\n");
  const msPerChar = 60000 / (wordsPerMinute * 5);

  useEffect(() => {
    if (displayedChars >= fullText.length) {
      const timeout = setTimeout(onComplete, 600);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setDisplayedChars((c) => c + 1);
    }, msPerChar);
    return () => clearTimeout(timeout);
  }, [displayedChars, fullText.length, msPerChar, onComplete]);

  const displayed = fullText.slice(0, displayedChars);
  const renderedLines = displayed.split("\n");

  return (
    <div className="space-y-4">
      {renderedLines.map((line, i) => (
        <p key={i} className="text-primary text-lg leading-relaxed font-body tracking-wide">
          {line}
          {i === renderedLines.length - 1 && displayedChars < fullText.length && (
            <span className="inline-block w-[2px] h-5 bg-primary ml-[1px] animate-pulse" />
          )}
        </p>
      ))}
    </div>
  );
};

export default TypewriterText;
