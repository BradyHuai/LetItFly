import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".purchaseButton",
    content: "Buy a new look for your crane. Don't over spend!",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
];

// Tour component
const StoreTour = () => {
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.onboarding.reload);
  const active = useSelector((state) => state.onboarding.onboardingActive);
  const INITIAL_STATE = { key: reload };
  const handleTourEnd = () => {
    dispatch(setOnboardingInactive());
  };

  React.useEffect(handleTourEnd, []);
  React.useEffect(() => {
    INITIAL_STATE.key = reload;
  }, [reload, INITIAL_STATE.key]);

  return (
    <>
      <JoyRide
        {...INITIAL_STATE}
        steps={TOUR_STEPS}
        showSkipButton={true}
        continuous={true}
        locale={{
          close: "next",
          last: "End tour",
          skip: "Close tour",
        }}
        callback={() => null}
        run={active}
        spotlightClicks={true}
        disableOverlayClose={true}
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

export default StoreTour;
