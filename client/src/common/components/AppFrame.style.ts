import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => {
  // Side bar width when fully expanded
  const sideBarWidth = 240;

  return createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin", "width"], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    appBarIconButton: {
      marginRight: theme.spacing(2),
    },
    navShift: {
      width: `calc(100% - ${sideBarWidth}px)`,
      marginLeft: sideBarWidth,
      transition: theme.transitions.create(["margin", "width"], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    sideBar: {
      width: sideBarWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    expandedSideBar: {
      width: sideBarWidth,
      transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    compactSideBar: {
      width: theme.spacing(9) + 1,
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    closedSideBar: {
      width: 0,
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    sideBarContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    sideBarTool: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    sideBarTopTool: {
      justifyContent: "flex-start",
    },
    sideBarBottomTool: {
      justifyContent: "flex-end",
    },
    belowAppBar: {
      ...theme.mixins.toolbar,
    },
  });
});