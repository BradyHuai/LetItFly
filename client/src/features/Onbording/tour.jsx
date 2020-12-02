import React, {useReducer, useEffect } from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";

// Tour steps
const TOUR_STEPS = [
    {
        target: ".animatedCard",
        content: "This is the first step.",
        disableBeacon: true
      },
];

// Initial state for the tour component
const INITIAL_STATE = {
    key: new Date(), // This field makes the tour to re-render when we restart the tour
    run: false,
    continuous: true, // Show next button
    loading: false,
    stepIndex: 0, // Make the component controlled
    steps: TOUR_STEPS
  };


  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      // start the tour
      case "START":
        return { ...state, run: true };
      // Reset to 0th step
      case "RESET":
        return { ...state, stepIndex: 0 };
      // Stop the tour
      case "STOP":
        return { ...state, run: false };
      // Update the steps for next / back button click
      case "NEXT_OR_PREV":
        return { ...state, ...action.payload };
      // Restart the tour - reset go to 1st step, restart create new tour
      case "RESTART":
        return {
          ...state,
          stepIndex: 0,
          run: true,
          loading: false,
          key: new Date()
        };
      default:
        return state;
    }
  };


// Tour component
const Tour = () => {
    const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        // Auto start the tour if the tour is not viewed before
        dispatch({ type: "START" });
    }, []);

    const callback = data => {
        const { action, index, type, status } = data;
    
        if (
          // If close button clicked then close the tour
          action === ACTIONS.CLOSE ||
          // If skipped or end tour, then close the tour
          (status === STATUS.SKIPPED && tourState.run) ||
          status === STATUS.FINISHED
        ) {
          dispatch({ type: "STOP" });
        } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
          // Check whether next or back button click and update the step
          dispatch({
            type: "NEXT_OR_PREV",
            payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) }
          });
        }
    };

  const startTour = () => {
    // Start the tour manually
    dispatch({ type: "RESTART" });
};

  return (
    <>
      <JoyRide 
        {...tourState}
        showSkipButton={true} 
        locale={{
            last: "End tour",
            skip: "Close tour"
          }}
          callback={callback}
        />
    </>
  );
};

export default Tour;