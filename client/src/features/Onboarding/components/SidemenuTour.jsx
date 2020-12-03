import React from "react";
import JoyRide from "react-joyride";
import { useSelector } from "react-redux";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".mySpaceButton",
    content:
      "This will bring you to receive and view cranes. Let us skip this for now.",
    disableBeacon: true,
  },
  {
    target: ".composeButton",
    content: "Click here to compose our first crane",
    disableBeacon: true,
  },
];

const SidemenuTour = () => {
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
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#e3ffeb",
            // overlayColor: "rgba(79, 26, 0, 0.4)",
            primaryColor: "#000",
            textColor: "#004a14",
            width: 430,
            zIndex: 900,
          },
        }}
      />
    </>
  );
};
export default SidemenuTour;
