import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".mySpaceButton",
    content: "This will bring you to receive and view cranes.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".composeButton",
    content: "Click here to compose your first crane",
    disableBeacon: true,
    hideCloseButton: true,
  },
];

const UserHomeTour = () => {
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
        disableOverlayClose={true}
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

export default UserHomeTour;
