import React from "react";
import JoyRide from "react-joyride";
import { useSelector } from "react-redux";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".animatedCard",
    content: "This is the first step.",
    disableBeacon: true,
  },
];

// Tour component
const Tour = () => {
  const active = useSelector((state) => state.onboarding.onboardingActive);
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        showSkipButton={true}
        locale={{
          last: "End tour",
          skip: "Close tour",
        }}
        callback={() => null}
        run={active}
      />
    </>
  );
};

export default Tour;
