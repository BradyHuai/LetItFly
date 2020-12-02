import React from "react";
import JoyRide from "react-joyride";
import { useSelector } from "react-redux";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".composeTitle",
    content: "This is the first step.",
    disableBeacon: true,
  },
  {
    target: ".composeContent",
    content: "This is the second step.",
    disableBeacon: true,
  },
];

// Tour component
const ComposeTour = () => {
  const active = useSelector((state) => state.onboarding.onboardingActive);
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        showSkipButton={true}
        showProgress={true}
        locale={{
          close: "next",
          last: "End tour",
          skip: "Close tour",
        }}
        callback={() => null}
        run={active}
        spotlightClicks={true}
        // styles={{
        //   options: {
        //     arrowColor: "#e3ffeb",
        //     backgroundColor: "#e3ffeb",
        //     overlayColor: "rgba(79, 26, 0, 0.4)",
        //     primaryColor: "#000",
        //     textColor: "#004a14",
        //     width: 200,
        //     zIndex: 40,
        //   },
        // }}
      />
    </>
  );
};

export default ComposeTour;
