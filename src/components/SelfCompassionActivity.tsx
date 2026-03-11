import { useState } from "react";
import heartIllustration from "@/assets/heart-illustration.png";

const APPLICATION_LINES_1 = [
  '"I am having a distressing thought.',
  "Having this thought does not define me.",
  'I can be kind to myself while I continue the work."',
];

const APPLICATION_LINES_2 = [
  '"Many people experience intrusive thoughts.',
  "The human brain produces strange and unwanted ideas.",
  'I am not alone in this."',
];

const APPLICATION_LINES_3 = [
  '"This is a thought — not a fact, not an identity, and not a command.',
  'I do not have to act on it."',
];

const ACTION_OPTIONS = [
  "Continue exposure",
  "Delay compulsion",
  "Resume activity",
  "Move on without solving",
];

const SelfCompassionActivity = () => {
  const [step1Repeated, setStep1Repeated] = useState(false);
  const [step2Acknowledged, setStep2Acknowledged] = useState(false);
  const [thought, setThought] = useState("");
  const [step3Labeled, setStep3Labeled] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const resetActivity = () => {
    setStep1Repeated(false);
    setStep2Acknowledged(false);
    setThought("");
    setStep3Labeled(false);
    setSelectedAction(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-5 py-8 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src={heartIllustration}
            alt=""
            className="w-20 h-20 mx-auto mb-4"
          />
          <h1 className="font-heading text-2xl font-semibold text-foreground mb-1">
            Self-Compassion for OCD
          </h1>
          <p className="text-muted-foreground text-xs font-body">
            Activity based on the self-compassion model developed by Dr. Kristin Neff
          </p>
        </div>

        {/* Step 1 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="step-number">1</span>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Step 1: Self-Kindness vs. Self-Judgment
            </h2>
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed mb-3 font-body">
            OCD can trigger harsh self-criticism, guilt, and shame. You may treat yourself as "bad" or
            dangerous for having intrusive thoughts.
          </p>

          <p className="text-sm leading-relaxed mb-5 font-body">
            <span className="font-semibold text-foreground">The Adaptation:</span>{" "}
            <span className="text-foreground/80">
              Instead of attacking yourself for having a disturbing thought, practice a gentler
              internal response.
            </span>
          </p>

          <div className="quote-card mb-4">
            <p className="text-foreground/70 text-xs font-body mb-3">
              Replace harsh self-judgment with this:
            </p>
            {APPLICATION_LINES_1.map((line, i) => (
              <p key={i} className="text-foreground text-sm leading-relaxed font-body italic">
                {line}
              </p>
            ))}
          </div>

          {!step1Repeated ? (
            <button onClick={() => setStep1Repeated(true)} className="action-button">
              Repeat Once
            </button>
          ) : (
            <p className="text-center text-primary text-xs font-body font-medium animate-fade-in">
              ✓ Repeated
            </p>
          )}
        </section>

        {/* Step 2 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="step-number">2</span>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Step 2: Common Humanity vs. Isolation
            </h2>
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed mb-5 font-body">
            Recognize that unwanted thoughts, doubt, and imperfection are part of the shared human
            experience.
          </p>

          <div className="quote-card mb-4">
            {APPLICATION_LINES_2.map((line, i) => (
              <p key={i} className="text-foreground text-sm leading-relaxed font-body italic">
                {line}
              </p>
            ))}
          </div>

          {!step2Acknowledged ? (
            <button onClick={() => setStep2Acknowledged(true)} className="action-button">
              Acknowledge
            </button>
          ) : (
            <p className="text-center text-primary text-xs font-body font-medium animate-fade-in">
              ✓ Acknowledged
            </p>
          )}
        </section>

        {/* Step 3 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="step-number">3</span>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Step 3: Mindfulness vs. Over-Identification
            </h2>
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed mb-5 font-body">
            Practice observing and labeling the thought without reacting.
          </p>

          {!step3Labeled ? (
            <>
              <div className="quote-card mb-4">
                <p className="text-foreground text-sm leading-relaxed font-body">
                  Complete this sentence:
                </p>
                <p className="text-foreground text-sm leading-relaxed font-body mt-2 italic">
                  "I am noticing I am having a thought about{" "}
                  <input
                    type="text"
                    value={thought}
                    onChange={(e) => setThought(e.target.value.slice(0, 30))}
                    maxLength={30}
                    placeholder="______"
                    className="inline-input w-28 sm:w-36 text-sm"
                  />
                  ."
                </p>
              </div>

              <button
                onClick={() => thought.trim() && setStep3Labeled(true)}
                disabled={!thought.trim()}
                className="action-button disabled:opacity-40"
              >
                Label and Continue
              </button>
            </>
          ) : (
            <div className="animate-fade-in">
              <div className="quote-card mb-2">
                <p className="text-foreground text-sm leading-relaxed font-body italic mb-3">
                  "I am noticing I am having a thought about{" "}
                  <span className="text-primary font-medium">{thought}</span>."
                </p>
                {APPLICATION_LINES_3.map((line, i) => (
                  <p key={i} className="text-foreground text-sm leading-relaxed font-body italic">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-center text-primary text-xs font-body font-medium">
                ✓ Labeled
              </p>
            </div>
          )}
        </section>

        {/* Final Step */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="step-number">4</span>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Return to Action
            </h2>
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed mb-5 font-body italic">
            What is one small action you can take now, even with this thought present?
          </p>

          <div className="space-y-2 mb-6">
            {ACTION_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedAction(option)}
                className={`block w-full text-left px-4 py-3 rounded-lg border font-body text-sm transition-colors duration-150
                  ${
                    selectedAction === option
                      ? "border-primary bg-primary/10 text-foreground font-medium"
                      : "border-border bg-card text-foreground/80 hover:border-primary/50"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="text-muted-foreground text-xs font-body text-center mb-4">
            Self-compassion supports practice — it does not replace it.
          </p>

          <button
            disabled={!selectedAction}
            onClick={resetActivity}
            className="action-button disabled:opacity-40"
          >
            Continue Practice
          </button>
        </section>
      </div>
    </div>
  );
};

export default SelfCompassionActivity;
