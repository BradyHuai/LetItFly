/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-11
 */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    unreadText: {
      fontWeight: "bold",
    },
    starredIcon: {
      fill: theme.palette.primary.main,
    },
  })
);
