import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".friendInfo",
    content: "Click on icon to view friend info.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".deleteFriend",
    content: "Click here to delete your friend, OUCH!",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
];

// Tour component
const FriendsTour = () => {
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

export default FriendsTour;
