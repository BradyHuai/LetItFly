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
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes0",
    content: "Fill in desired changes.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".panel1",
    content: "Similarly, click here to update contact info.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes1",
    content: "Fill in desired changes.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".panel2",
    content: "Click here to update profile.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes2",
    content: "Fill in desired changes.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".panel3",
    content: "Click here to update authentication info.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".inputBoxes3",
    content: "Fill in desired changes.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".sendButton",
    content: "Once satisfied, click here to sumbit.",
    disableBeacon: true,
    hideCloseButton: true,
  },
];

// Tour component
const AccountSettingsTour = () => {
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

export default AccountSettingsTour;
