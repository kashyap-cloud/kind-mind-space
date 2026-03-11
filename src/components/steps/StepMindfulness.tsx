import { useState } from "react";

interface StepMindfulnessProps {
  onNext: () => void;
}

const APPLICATION_LINES = [
  "This is a thought — not a fact, not an identity, and not a command.",
  "I do not have to act on it.",
];

const StepMindfulness = ({ onNext }: StepMindfulnessProps) => {
  const [thought, setThought] = useState("");
  const [labeled, setLabeled] = useState(false);

  const handleLabel = () => {
    if (thought.trim()) {
      setLabeled(true);
    }
  };

  return (
    <div className="space-y-10">
      <p className="font-heading text-foreground text-xl leading-relaxed italic">
        Complete this sentence:
      </p>

      {!labeled ? (
        <>
          <p className="text-foreground text-lg leading-relaxed font-body">
            I am noticing I am having a thought about{" "}
            <span className="inline-block relative">
              <input
                type="text"
                value={thought}
                onChange={(e) => setThought(e.target.value.slice(0, 30))}
                maxLength={30}
                className="bg-transparent border-b-2 border-foreground/60 text-foreground outline-none
                  font-body text-lg w-40 sm:w-48 pb-0.5 focus:border-primary transition-colors"
                autoFocus
              />
            </span>.
          </p>

          <button
            onClick={handleLabel}
            disabled={!thought.trim()}
            className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
              hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground
              disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-primary"
          >
            Label and Continue
          </button>
        </>
      ) : (
        <div className="space-y-8 animate-fade-in">
          <p className="text-foreground/70 text-lg leading-relaxed font-body">
            I am noticing I am having a thought about{" "}
            <span className="text-primary">{thought}</span>.
          </p>

          <div className="space-y-4">
            {APPLICATION_LINES.map((line, i) => (
              <p key={i} className="text-primary text-lg leading-relaxed font-body tracking-wide">
                {line}
              </p>
            ))}
          </div>

          <button
            onClick={onNext}
            className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
              hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default StepMindfulness;
