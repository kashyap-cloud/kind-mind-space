import { useState } from "react";

const OPTIONS = [
  "Continue exposure",
  "Delay compulsion",
  "Resume activity",
  "Move on without solving",
];

const StepReturnToAction = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [committed, setCommitted] = useState(false);

  return (
    <div className="space-y-10">
      <p className="font-heading text-foreground text-xl leading-relaxed italic">
        What is one small action you can take now, even with this thought present?
      </p>

      <div className="space-y-3">
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`block w-full text-left px-5 py-3 border font-body text-sm tracking-wider transition-colors duration-200
              ${
                selected === option
                  ? "border-primary bg-sage-dark text-primary-foreground"
                  : "border-primary/40 text-foreground hover:border-primary hover:text-primary"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      {!committed ? (
        <button
          onClick={() => selected && setCommitted(true)}
          disabled={!selected}
          className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
            hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground
            disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-primary"
        >
          Continue Practice
        </button>
      ) : (
        <div className="animate-fade-in space-y-6">
          <p className="text-primary text-lg font-body tracking-wide">
            {selected}.
          </p>
        </div>
      )}

      <p className="text-muted-foreground text-xs font-body tracking-wide">
        Self-compassion supports practice — it does not replace it.
      </p>
    </div>
  );
};

export default StepReturnToAction;
