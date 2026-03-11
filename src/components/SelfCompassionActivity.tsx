import { useState, useCallback } from "react";
import StepSelfKindness from "@/components/steps/StepSelfKindness";
import StepCommonHumanity from "@/components/steps/StepCommonHumanity";
import StepMindfulness from "@/components/steps/StepMindfulness";
import StepReturnToAction from "@/components/steps/StepReturnToAction";

const SelfCompassionActivity = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(true);

  const advance = useCallback(() => {
    setTransitioning(true);
    setVisible(false);
    setTimeout(() => {
      setCurrentStep((s) => s + 1);
      setVisible(true);
      setTransitioning(false);
    }, 300);
  }, []);

  const steps = [
    <StepSelfKindness key="kindness" onNext={advance} />,
    <StepCommonHumanity key="humanity" onNext={advance} />,
    <StepMindfulness key="mindfulness" onNext={advance} />,
    <StepReturnToAction key="action" />,
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div
        className="max-w-md w-full transition-opacity duration-300 ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {steps[currentStep]}
      </div>
    </div>
  );
};

export default SelfCompassionActivity;
