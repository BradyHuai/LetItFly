/*
 * Created by Jimmy Lan
 * Creation Date: 2020-12-11
 */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    container: {
      padding: theme.spacing(3),
    },
  })
);
