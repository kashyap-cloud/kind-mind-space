import { useState, useCallback } from "react";
import TypewriterText from "@/components/TypewriterText";

const APPLICATION_LINES = [
  "I am having a distressing thought.",
  "Having this thought does not define me.",
  "I can be kind to myself while I continue the work.",
];

interface StepSelfKindnessProps {
  onNext: () => void;
}

const StepSelfKindness = ({ onNext }: StepSelfKindnessProps) => {
  const [phase, setPhase] = useState<"read" | "typing" | "done">("read");

  const handleRepeat = useCallback(() => {
    setPhase("typing");
  }, []);

  const handleTypewriterComplete = useCallback(() => {
    setPhase("done");
  }, []);

  return (
    <div className="space-y-10">
      <p className="font-heading text-foreground text-xl leading-relaxed italic">
        Notice what your inner voice is saying right now.
      </p>

      <p className="font-heading text-foreground/70 text-base leading-relaxed">
        Replace harsh self-judgment with this:
      </p>

      {phase === "read" && (
        <div className="space-y-4">
          {APPLICATION_LINES.map((line, i) => (
            <p key={i} className="text-primary text-lg leading-relaxed font-body tracking-wide">
              {line}
            </p>
          ))}
        </div>
      )}

      {phase === "typing" && (
        <TypewriterText lines={APPLICATION_LINES} onComplete={handleTypewriterComplete} />
      )}

      {phase === "done" && (
        <div className="space-y-4">
          {APPLICATION_LINES.map((line, i) => (
            <p key={i} className="text-primary text-lg leading-relaxed font-body tracking-wide">
              {line}
            </p>
          ))}
        </div>
      )}

      {phase === "read" && (
        <button
          onClick={handleRepeat}
          className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
            hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground"
        >
          Repeat Once
        </button>
      )}

      {phase === "done" && (
        <button
          onClick={onNext}
          className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
            hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default StepSelfKindness;
