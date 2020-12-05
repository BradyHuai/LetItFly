import React from "react";
import JoyRide from "react-joyride";
import { useSelector, useDispatch } from "react-redux";
import { setOnboardingInactive } from "../onboardingSlice";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".composeButton",
    content: "You can click here to compose a new paper.",
    disableBeacon: true,
    spotlightClicks: true,
    hideCloseButton: true,
  },
  {
    target: ".composeTitle",
    content: "Input your message title here.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".composeContent",
    content: "Input your message content.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".sendButton",
    content: "Click here to send it.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".searchButton",
    content: "You can click here to search papers.",
    disableBeacon: true,
    hideCloseButton: true,
    hideBackButton: true,
  },
  {
    target: ".receivebutton",
    content: "You can click here to check all received papers.",
    disableBeacon: true,
    spotlightClicks: true,
    hideCloseButton: true,
  },
  {
    target: ".inboxContent",
    content: "The papers received will be displayed here.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".sentButton",
    content: "Click here to see papers that are sent by yourself.",
    disableBeacon: true,
    spotlightClicks: true,
    hideCloseButton: true,
  },
  {
    target: ".sentContent",
    content: "The papers sent will be displayed here.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".starredButton",
    content: "Click here to see the starred papers.",
    disableBeacon: true,
    spotlightClicks: true,
    hideCloseButton: true,
  },
  {
    target: ".starredContent",
    content: "The papers starred will be displayed here.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".starButton",
    content: "Click here to star a paper.",
    disableBeacon: true,
    hideCloseButton: true,
  },
  {
    target: ".deleteButton",
    content: "Click here to delete a paper.",
    disableBeacon: true,
    hideCloseButton: true,
  },
];

// Tour component
const InboxComposeTour = () => {
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

export default InboxComposeTour;
