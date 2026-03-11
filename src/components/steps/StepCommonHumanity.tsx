import { useState } from "react";

const APPLICATION_LINES = [
  "Many people experience intrusive thoughts.",
  "The human brain produces strange and unwanted ideas.",
  "I am not alone in this.",
];

interface StepCommonHumanityProps {
  onNext: () => void;
}

const StepCommonHumanity = ({ onNext }: StepCommonHumanityProps) => {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="space-y-10">
      <p className="font-heading text-foreground text-xl leading-relaxed italic">
        Pause and remember:
      </p>

      <div className="space-y-4">
        {APPLICATION_LINES.map((line, i) => (
          <p key={i} className="text-primary text-lg leading-relaxed font-body tracking-wide">
            {line}
          </p>
        ))}
      </div>

      {!acknowledged ? (
        <button
          onClick={() => setAcknowledged(true)}
          className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
            hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground"
        >
          Acknowledge
        </button>
      ) : (
        <button
          onClick={onNext}
          className="border border-primary text-primary px-6 py-3 font-body text-sm tracking-wider
            hover:bg-sage-dark transition-colors duration-200 hover:text-primary-foreground animate-fade-in"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default StepCommonHumanity;
