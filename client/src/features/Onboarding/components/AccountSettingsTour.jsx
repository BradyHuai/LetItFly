import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".panel0",
    content: "Click here to update personal info.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes0",
    content: "Fill in desired changes.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },

  {
    target: ".panel1",
    content: "Similarly, click here to update contact info.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes1",
    content: "Fill in desired changes.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".panel2",
    content: "Click here to update profile.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes2",
    content: "Fill in desired changes.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".panel3",
    content: "Click here to update authentication info.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes3",
    content: "Fill in desired changes.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".sendButton",
    content: "Once satisfied, click here to sumbit.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
];

// Tour component
const AccountSettingsTour = () => {
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

export default AccountSettingsTour;
