import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".composeButton",
    content:
      "You can click here to view compose a new paper.",
    disableBeacon: true,
  },
  {
    target: ".searchButton",
    content:
      "You can click here to search papers.",
    disableBeacon: true,
  },
  {
    target: ".receivebutton",
    content:
      "You can click here to check all received papers.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
    hideFooter: true,
    spotlightClicks: true,
  },
  {
    target: ".inboxContent",
    content:
      "The papers received will be displayed here.",
    disableBeacon: true,
  },
  {
    target: ".starButton",
    content:
      "Click here to star a paper.",
    disableBeacon: true,
  },
  {
    target: ".deleteButton",
    content:
      "Click here to delete a paper.",
    disableBeacon: true,
  },
  {
    target: ".sentButton",
    content:
      "Click here to see papers that are sent by yourself.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
  {
    target: ".starredButton",
    content:
      "Click here to see the starred papers.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
  },
];

// Tour component
const InboxTour = () => {
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
        continuous={true}
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

export default InboxTour;