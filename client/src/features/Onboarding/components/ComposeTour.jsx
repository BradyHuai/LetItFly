import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".composeTitle",
    content: "Input your message title here.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".composeContent",
    content: "Input your message content.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
];

// Tour component
const ComposeTour = () => {
  const dispatch = useDispatch();
  const handleTourEnd = () => {
    dispatch(setOnboardingInactive());
  };
  const active = useSelector((state) => state.onboarding.onboardingActive);

  React.useEffect(handleTourEnd, []);

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
